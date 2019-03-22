import Yun from './src/main';

/* istanbul ignore next */
Yun.install = function(Vue) {
  Vue.component(Yun.name, Yun);
};

export default Yun;
