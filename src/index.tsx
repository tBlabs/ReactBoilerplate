import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import FooComponent from './components/FooComponent';
import { Foo } from "./FooClass";


console.log('Start');

let foo = new Foo("bar");

axios.get('http://www.localhost:4444/todos/2').then((x: AxiosResponse)=>console.log(x.data));

console.log(foo.toString());
    
ReactDOM.render(
    <FooComponent foo="foo from props" />,
    document.getElementById('root')
);