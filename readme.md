# Build with
- npm 5.4 & node 8.4
- React 16
- Typescript 2+
- Webpack 3+ for bundling (separate `src` and `react` bundle)
- MobX
- Dependency injection (with `inversify`): property injection for Stores in React components
- Paths resolving (in webpack and typescript)
- `axios` for http
- `json-server` for tests
- `css modules` for styling
- SVG icons from `material-ui-icons`

# Problems
- types for events are not working, but definitions seems to be fine
- why TYPES can not be exported from IoC.ts ?!?!? their must be in separete file..
- src bundle is big (over 1MB/500kB in dev/prod mode), why?
- in 'dev server mode' there are some TS errors after first code update (not right after server start), they do not appear in 'tsc' or manual webpack run (only in 'dev server mode')

# Things I don't like
- adding styles for component requires project rebuild (to build d.ts files), maybe there is an VSC extension for that?
- name TYPES for interfaces symbols. I need a better one