import * as React from "react";
import * as ReactDOM from "react-dom";

import FooComponent from './components/FooComponent';
import { Foo } from "./FooClass";


console.log('Start');

let foo = new Foo("bar");

console.log(foo.toString());
    
ReactDOM.render(
    <FooComponent foo="foo from props" />,
    document.getElementById('root')
);