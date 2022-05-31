import App from './App.svelte'

// FIXME
// /!\ to be includ before any component
// otherwize it would not be a CSS normalizer...
// not include in vue.config.js because it's import for every loaded component...
import 'modern-normalize/modern-normalize.css';

const app = new App({
  target: document.getElementById('app')
})

export default app
