export class Foo
{
    private _foo: string = "";

    constructor(foo: string)
    {
        this._foo = foo;
    }

    toString()
    {
        return "This is class Foo!";
    }
}