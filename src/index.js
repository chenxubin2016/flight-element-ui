import FeForm from './lib/FeForm'
import FeItem from './lib/FeItem'
import FeInput from './lib/FeInput'

const components = [FeForm, FeItem, FeInput],
  install = function (Vue, options = {}) {
    components.map(component => {
      Vue.component(component.name, component);
    })
  }
/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  FeForm,
  FeItem,
  FeInput
}
