 

interface IToDoTask
{
    name: string;
    done: boolean;
}

class ToDoTask implements IToDoTask
{
    public name: string = "";
    public done: boolean = false;
}

interface IToDosService
{
    Add(task: IToDoTask): void;
    Get(): IToDoTask[] | null;
}

export class ToDosService implements IToDosService
{
    private todos: ToDoTask[] = [];

    // constructor(private _http: IHttp, private _config: IConfig)
    // {
        
    // }

    public Add(task: ToDoTask)
    {
       // this._http.Post(this._config.databaseUrl + '/todos', task);
    }

    public Get(): ToDoTask[]
    {
        return this.todos;
    }
}