import { injectable } from 'inversify';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IHttp } from "IHttp";

@injectable()
export class Http implements IHttp
{
    public async Post(url: string, data: any): Promise<boolean>
    {
        await axios.post(url, data);

        return true;
    }

    public async Get(url: string): Promise<any>
    {
        let axiosResponse: AxiosResponse = await axios.get(url);

        return axiosResponse.data;
    }
}