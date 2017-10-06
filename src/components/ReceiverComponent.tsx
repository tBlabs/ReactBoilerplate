import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

/*
@observer // TODO: try to change into identifier
export default class MobXTestComponent extends React.Component<any, any>
{
    render(): React.ReactElement<{}>
    {
        return (
            <div>
                Value from MobXTestStore: {this.props.}
            </div>
        );
    }
}*/