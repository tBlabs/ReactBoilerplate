import { injectable } from 'inversify';
import { observable, action } from 'mobx';
import { ISnackBarService } from './ISnackBarService';
import { ISnackBarServiceEngine } from './ISnackBarServiceEngine';

@injectable()
export class SnackBarService implements ISnackBarService, ISnackBarServiceEngine
{
    @observable
    public isVisible: boolean = false;
    @observable
    public message: string = "";

    @action
    public Info(message: string): void
    {
        this.isVisible = true;
        this.message = message;
    }

    @action
    public Hide(): void
    {
        this.isVisible = false;
    }
}