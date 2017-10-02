import * as React from "react"
import * as ReactDOM from "react-dom"

interface IFooComponentProps
{
    foo: string;
    bar?: number;
}

class IFooComponentState
{
    foo: boolean;
}


export default class FooComponent extends React.Component<IFooComponentProps, IFooComponentState>
{
    constructor(props: any)
    {
        super(props);

        this.state = { foo: false };

        this.Button2ClickHandler = this.Button2ClickHandler.bind(this);
    }

    Button2ClickHandler()
    {
        this.setState({ foo: !this.state.foo });
    }

    render()
    {
        return (
            <div>
                props.foo: { this.props.foo }
                <br />
                props.bar: { this.props.bar ? this.props.bar : "null" }
                <br />
                state.foo: { this.state.foo ? "true" : "false" }
                <br />
                <button onClick={ ()=> this.setState({ foo: !this.state.foo }) }>Toggle state.foo</button>
                <br />
                <button onClick={ this.Button2ClickHandler }>Toggle state.foo</button>
            </div>
        );
    }
}