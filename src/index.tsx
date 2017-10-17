import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import MobXTestComponent from "components/mobx/MobXTestComponent";
import * as MobX from "mobx";
import { StyledComponent } from "components/styled/StyledComponent";
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import AppComponent from "components/app/AppComponent";
import StatefulComponent from 'components/stateful/StatefulComponent';
import HighOrder from "components/nested/higher_order/HighOrder";

MobX.useStrict(true);

console.log(`Start in ${ process.env.NODE_ENV === 'production' ? 'production' : 'development' } mode`);

ReactDOM.render(
    <AppComponent>
        <StyledComponent />
        <MobXTestComponent />
        <StatefulComponent foo="foo" bar={4} />
        <MobXTestComponent />   
        <Button>adsf</Button>  
        <HighOrder />
    </AppComponent>,
    document.getElementById('root')
);