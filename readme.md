This project is a base for my future **Single Page Apps** based on React.

# Builded with
- npm 5.4 & node 8.4
- React 16
- Typescript 2+
- Webpack 3+ 
- MobX 
- Dependency injection (with `inversify`): lazy property injection for services (mainly stores) in React components
- Paths resolving (in webpack and typescript)
- `axios` for http
- `json-server` for pseudo-backend (usefull for experiments)
- `css modules` for styling
- SVG icons from `material-ui-icons`
- index.html autobuilding thanks to `html-webpack-plugin`
- examples of React components 
- examples of injectable services (and MobX stores)

# Examples

## Components
In `components` directory examples of some components can be found:
- simple stateful
- component binded to MobX store
- styled with css modules
- main app component containing SnackBar
- nested components (higher order component and some childs)

## Services (need to be injected via IoC by interface name)
- IHttpService - builded with axios
- ISnackBarService - for snack bar
- ITestStore - just simple MobX store

# Scripts
- Production build: `npm run build` (uses `webpack.common.js` and `webpack.prod.js`)
- Constant development: `npm run serve` (uses `webpack.common.js` and `webpack.config.js` /because webpack-dev-server can not start with file other than `webpack.config.js`/)
- Single development build: `npm run start`
- Pseudo-backend (simple REST server): `npm run mockserver`

# To do
- Improve build process: add minification and uglification
- Split bundle in src and lib (there is a problem with it for now)
- Add test framework

# Problems
- why TYPES can not be exported from IoC.ts ?!?!? their must be in separete file..
- src bundle is big (over 1MB/500kB in dev/prod mode), why?
- in 'dev server mode' there are some TS errors after first code update (not right after server start), they do not appear in 'tsc' or manual webpack run (only in 'dev server mode')

# Things I don't like
- adding styles for component requires project rebuild (to build d.ts files), maybe there is an VSC extension for that?
- name TYPES for interfaces symbols. I need a better one

# Tools
- `Jest` from Visual Studio Code extensions
- `ncu` to update all npm packages at once

# How to

## Startup
Run `npm i`. There is no need to instal anything globally.
All packages auto-update can be usefull. Hit `npm install -g npm-check-updates` to install `ncu` tool.
Use `npm ls -g --depth 0` to check list of all globally installed tools.

## Add a component
All React components should be keeped in `src/components`. Every in separate folder.
Reactive components (those using MobX):
- should be decorated with @observer
- should inject their dependiences with @LazyInject via property injection
- should not use constructor injection
- every method changing store state should be decorated with @action

## Add a service
By *service* we mean every class doing something unrelated to *components*. Services should be `.ts` files and should be keeped in `src/services`. 
Every service should be decorated with `@injectable()` and should implement at least one interface describing service class.
Every service must be added to `IoC/IoC.ts` and `Ioc/TYPES.ts` file.

## Add store
By *store* we mean every service containing observable elements. They should be keeped in `src/services/stores`.
Store should be decorated with `@injectable()` and should be injected into components with `@LazyInject(TYPES.{interface name})` decorator.