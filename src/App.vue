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

        section
          h4 Accessing route parameters in Angular
          img(src="./assets/snippets/route_param_ng.png")
        section
          h4 Accessing route parameters in Vue
          img(src="./assets/snippets/route_param_vue.png")
        section
          h4 Reactivity
          .col-50
            p Alles is Observable (RxJS)
          .col-50
            p Alles is reactive

        section(data-transition="slide-in fade-out")
          h4 Setting up a counter store in Angular
          p part 1: define actions
          img(src="./assets/snippets/counter_actions_ng.png" height="500")
        section(data-transition="fade-in fate-out")
          h4 Setting up a counter store in Angular
          p part 2: write reducer
          img(src="./assets/snippets/counter_reducer_ng.png" height="500")
        section(data-transition="fade-in slide-out")
          h4 Setting up a counter store in Angular
          p part 3: configure module
          img(src="./assets/snippets/counter_module_ng.png" )
        section
          h4 Setting up a counter store in Vue
          img(src="./assets/snippets/counter_store_vue.png")

        section
          h4 Accessing the store in Angular
          img(src="./assets/snippets/counter_component_ng.png" height="580")
        section
          h4 Accessing the store in Vue
          img(src="./assets/snippets/counter_component_vue.png")
        
        section
          h2 modules
          .col-50
            p containers for components, directives, 
          .col-50
            p container for piece of store
        section(data-transition="slide-in fade-out")
          img(src="./assets/modules_1.png")
        section(data-transition="fade-in-out")
          img(src="./assets/modules_2.png")
        section(data-transition="fade-in-out")
          img(src="./assets/modules_3.png")
        section(data-transition="fade-in slide-out")
          img(src="./assets/modules_4.png")

        section
          h2 dependency injection
        
        section
          h2 CLI
        
        section
          h2 Unit testing
        
        section
          h2 Unit testing
        
        section
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
