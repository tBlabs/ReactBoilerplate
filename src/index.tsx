import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import FooComponent from 'components/foo/FooComponent';
import { Foo } from "FooClass";
import MobXTestComponent from "components/MobXTestComponent";
import * as MobX from "mobx";
import { StyledComponent } from "components/StyledComponent/StyledComponent";

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