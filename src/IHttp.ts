export interface IHttp
{
    Get(url: string): Promise<any>;
    Post(url: string, data: any): Promise<boolean>;
}