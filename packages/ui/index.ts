import components from './src/index'
export * from './src/index'
import { App } from 'vue'
const componentsArr: any[] = [];
for(let key in components) {
  componentsArr.push(components[key]);
}
export default {
  install: (app: App) => {
    componentsArr.forEach(c => app.use(c));
  }
}
