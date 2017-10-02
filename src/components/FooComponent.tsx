import * as React from "react"
import * as ReactDOM from "react-dom"

interface IFooComponentProps
{
    foo: string;
    bar?: number;
}


export default class FooComponent extends React.Component<IFooComponentProps, null>
{
    constructor(props: any)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                props.foo: {this.props.foo}
                <br />
                props.bar: {this.props.bar}
            </div>
        );
    }
}