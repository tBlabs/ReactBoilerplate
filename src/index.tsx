import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import FooComponent from 'components/foo/FooComponent';
import MobXTestComponent from "components/mobx/MobXTestComponent";
import * as MobX from "mobx";
import { StyledComponent } from "components/styled/StyledComponent";

MobX.useStrict(true);

console.log('Start');


ReactDOM.render(
    <div>
        <StyledComponent/>
        <MobXTestComponent/>
        <MobXTestComponent/>
    </div>,
    document.getElementById('root')
);