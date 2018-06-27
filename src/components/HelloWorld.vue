<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <button @click="login">登陆</button>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
      <x-button>submit</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="warn">Delete</x-button>
  </div>
</template>

<script>
import { XButton } from 'vux'
import storage from '../utils/storage.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    XButton
  },
  methods: {
    login () {
      this.$api.login({name: 'lxq', pwd: '888888'})
      storage.set('login', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  ul
    list-style-type: none
    padding: 0
    background-color: red
    li
      display: inline-block
      margin: 0 10px
    a
      color: #42b983
</style>
