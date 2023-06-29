import './assets/main.css'

import { createApp,h,provide,render } from 'vue'
import App from './App.vue'
import router from './router'

import { DefaultApolloClient,provideApolloClient } from '@vue/apollo-composable'
import {ApolloClient,createHttpLink,InMemoryCache} from '@apollo/client/core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import store from './store'

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provideApolloClient(apolloClient);
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient,)
  },

  render: () => h(App),
})

// const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

