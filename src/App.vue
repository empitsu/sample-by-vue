<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button>Text</Button>
    <Accordion>
      Text
    </Accordion>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/atoms/Button.vue'
import Accordion from './components/atoms/Accordion.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Button,
    Accordion
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $g-text-color;
  margin-top: 60px;
}
</style>
