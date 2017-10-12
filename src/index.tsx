import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import FooComponent from 'components/foo/FooComponent';
import MobXTestComponent from "components/mobx/MobXTestComponent";
import * as MobX from "mobx";
import { StyledComponent } from "components/styled/StyledComponent";

MobX.useStrict(true);

console.log(`Start in ${ process.env.NODE_ENV === 'production' ? 'production' : 'development' } mode`);


ReactDOM.render(
    <div>
        <StyledComponent />
        <MobXTestComponent />
        <FooComponent foo="foo" bar={4} />
        <MobXTestComponent />       
    </div>,
    document.getElementById('root')
);