/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import VueFireworks from 'vue3-damp-fireworks'

const app = createApp(App).use(VueFireworks)

registerPlugins(app)

app.mount('#app')
