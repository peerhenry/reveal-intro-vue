<template lang="pug">
  #app
    .reveal
      .slides
        section
          h1 Intro VueJS (+ vs Angular)
        section
          h2 Frontend learnings History
          .col-50
            img(src="./assets/original.gif")
          .col-50
            p.fragment AngularJS :D
            p.fragment React :D
            p.fragment VueJS :D
            p.fragment Angular :-/
        section
          h2 Getting started...
          p.fragment Raw JS
          p.fragment Webpack
          p.fragment Vue CLI
        section
          h2 DEMO
          p.fragment Vue UI
          p.fragment Component structure
          p.fragment Router
          p.fragment Lazy loading
          p.fragment Route guards
</template>

<script>
import Reveal from 'reveal.js/js/reveal'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  mounted() {
    Reveal.initialize()
  },
}
</script>

<style lang="scss">
@import '~reveal.js/css/reveal.css';
@import '~reveal.js/css/theme/black.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}

.col-50 {
  width: 50%;
  display: inline-block;
}
</style>
