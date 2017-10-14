import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";  
import { TYPES } from "IoC/TYPES";

import { ITestStore } from "services/stores/test/ITestStore";
import { TestStore } from "services/stores/test/TestStore";
import { IHttp } from "services/http/IHttp";
import { Http } from "services/http/Http";
import { ISnackBarService } from 'services/snackbar/ISnackBarService';
import { ISnackBarServiceEngine } from './../services/snackbar/ISnackBarServiceEngine';
import { SnackBarService } from 'services/snackbar/SnackBarService';


const container = new Container();


container.bind<ITestStore>(TYPES.ITestStore).to(TestStore).inSingletonScope();

container.bind<IHttp>(TYPES.IHttp).to(Http); 

const snackBarService = new SnackBarService();
container.bind<ISnackBarService>(TYPES.ISnackBarService).toConstantValue(snackBarService); 
container.bind<ISnackBarServiceEngine>(TYPES.ISnackBarServiceEngine).toConstantValue(snackBarService); 


const LazyInject = getDecorators(container).lazyInject;


export { container, LazyInject };