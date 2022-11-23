import components from './src/index'
export * from './src/index'
import { App } from 'vue'
// const componentsArr: any[] = [];
// for(let key in components) {
//   componentsArr.push(components[key: string]);
// }
export default {
  install: (app: App) => {
    components.forEach(c => app.use(c));
  }
}
