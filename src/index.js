const path = require('path');
const notifier = require('node-notifier');

const { name: projectName } = path.parse(process.cwd())

module.exports = class {
  constructor(options = [
    ['done', { title: projectName, message: 'webpack compiler done' }],
  ]) {
    if (!Array.isArray(options)) throw 'options should be an array';
    this.options = options;
  }

  apply = (compiler) => {
    this.options.forEach((item) => {
      const [hook, optionsNotify] = item;

      if (typeof hook === 'string') {
        compiler.hooks[hook]?.tap(hook, () => notifier.notify(optionsNotify));
      } else {
        throw 'paras should be [[hook: String, optionsNotify: any]]';
      }
    })
  }
}
