# Build with
- React 16
- Typescript 2+
- Webpack 3+ for bundling (separate `src` and `react` bundle)
- paths resolving (in webpack and typescript)
- MobX
- Dependency injection (with `inversify`): property injection for Stores in React components
- `axios` for http
- `json-server` for tests
- `css modules` for styling

# Problems
- types for events are not working, but definitions seems to be fine
- why TYPES can not be exported from IoC.ts ?!?!? their must be in separete file..
-  src bundle is big (over 1MB), why?

# Things I don't like
- adding styles for component requires project rebuild (to build d.ts files), maybe there is an VSC extension for that?