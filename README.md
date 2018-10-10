Notifier for webpack compiler hooks with node-notifier.

## build

build with @babel/cli, see .babelrc

```shell
npm run build
```

## Usage

```javascript
const WebpackPluginNotifier = require('webpack-plugin-notifier');

// webpack config plugins
// options: [[hook: string, optionsNotify: any]]
plugins: [
  new WebpackPluginNotifier(),
],
```
