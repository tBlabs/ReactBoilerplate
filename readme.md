This project is a base for my future **Single Page Apps** based on React.

# Build with
- npm 5.4 & node 8.4
- React 16
- Typescript 2+
- Webpack 3+ 
- MobX 
- Dependency injection (with `inversify`): property injection for Stores in React components
- Paths resolving (in webpack and typescript)
- `axios` for http
- `json-server` for tests
- `css modules` for styling
- SVG icons from `material-ui-icons`
- index.html autobuilding thanks to `html-webpack-plugin`

# Scripts
- Production build: `npm run build` (uses `webpack.common.js` and `webpack.prod.js`)
- Constant development: `npm run serve` (uses `webpack.common.js` and `webpack.config.js` /because webpack-dev-server can not start with file other than this/)
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
Use `npm ls -g --depth 0` to check list of all globally installed tools.