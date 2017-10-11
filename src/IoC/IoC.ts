import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";  
import { TestStore } from "services/stores/test/TestStore";
import { ITestStore } from "services/stores/test/ITestStore";
import { IHttp } from "services/http/IHttp";
import { Http } from "services/http/Http";
import { TYPES } from "IoC/TYPES";


const container = new Container();


container.bind<ITestStore>(TYPES.ITestStore).to(TestStore).inSingletonScope();
container.bind<IHttp>(TYPES.IHttp).to(Http); 

const LazyInject = getDecorators(container).lazyInject;


export { container, LazyInject };