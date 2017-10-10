import * as React from "react";
import * as ReactDOM from "react-dom";

interface IFooComponentProps
{
    foo: string;
    bar?: number;
}

interface IFooComponentState
{
    foo: boolean;
}


export default class FooComponent extends React.Component<IFooComponentProps, IFooComponentState>
{
    constructor(props: IFooComponentProps)
    {
        super(props);

        this.state = { foo: false };

        this.Button_Click = this.Button_Click.bind(this); 
    }

    private Button_Click(event /*: React.MouseEvent<HtmlButtonElement>*/): void // TODO: add type; Event, MouseEvent, React.MouseEvent<HTMLButtonElement> - NOTHING OF THIS SEEMS TO WORK!!!!
    {
        console.log("Button_Click event: ", event);

        let e: MouseEvent = event as MouseEvent;

        if (e)
        {
            console.log("as MouseEvent: ", e);       
        }

        this.setState({ foo: !this.state.foo });
    }

    Input_Change(event) // TODO: add type
    {
        console.log(event);
        console.log(event.target.value);
    }

    render(): React.ReactElement<{}>
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
                <button onClick={ this.Button_Click }>Toggle state.foo</button>
                <br /> 
                <input onChange={ this.Input_Change } />
            </div>
        );
    }
}