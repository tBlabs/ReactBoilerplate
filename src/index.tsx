import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import FooComponent from 'components/FooComponent';
import { Foo } from "FooClass";
import MobXTestComponent from "components/MobXTestComponent";
import { useStrict } from "mobx";

useStrict(true);

console.log('Start');

// let foo = new Foo("bar");


// console.log(foo.toString());
    // <FooComponent foo="foo from props" />

ReactDOM.render(
    <div>
    <MobXTestComponent/>
    <MobXTestComponent/>
    </div>,
    document.getElementById('root')
);