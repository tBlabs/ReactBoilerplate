import { ISnackBarService } from './../../snackbar/ISnackBarService';
import { ITestStore } from './ITestStore';
import { injectable, inject } from "inversify";
import { observable, reaction } from 'mobx';
import { IHttp } from "services/http/IHttp";
import { TYPES } from "IoC/TYPES";

@injectable()
export class TestStore implements ITestStore
{
    @observable
    public text: string = "initial";

    private _http: IHttp;
    private _snack: ISnackBarService;

    constructor( 
        @inject(TYPES.IHttp) http: IHttp, 
        @inject(TYPES.ISnackBarService) snack: ISnackBarService)
    {
        this._http = http;
        this._snack = snack;

        reaction(() => this.text, async (text) =>
        {
            console.log("reaction: " + text);

            let status = false;

            try
            {
                status = await this._http.Post('http://www.localhost:4444/test', { text });
            }
            catch (error)
            {
                this._snack.Info("catched post problem");
            }

            console.log("save status: ", status);

            if (status == false)
            {
                this._snack.Info("post problem");
            }
        });
    }
}

