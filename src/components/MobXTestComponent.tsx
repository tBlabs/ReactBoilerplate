import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { LazyInject } from "IoC";
import { TestStore } from "TestStore";
import { TYPES } from "TYPES";
import { ITestStore } from "ITestStore";

@observer
export default class MobXTestComponent extends React.Component<any, any>
{
    @LazyInject(TYPES.ITestStore)
    private testStore: ITestStore;

    constructor()
    {
        super();

        console.log(this.testStore.text);
    }

    @action
    private TextInput_Change(event): void // TODO: add type
    {
        this.testStore.text = event.target.value;

        console.log("Input value: " + event.target.value);
    }

    @action
    private SaveButton_Click(): void
    {
        console.log("Button clicked!");

        this.testStore.text = "newww";
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                testStore.text: { this.testStore.text }
                <br />
                <input value={ this.testStore.text } onChange={ this.TextInput_Change.bind(this) } />
                <button onClick={ this.SaveButton_Click.bind(this) }>Save</button>
            </div>
        );
    }
}