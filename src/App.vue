<template lang="pug">
  #app
    .reveal
      .slides
        section
          h1 Introductie VueJS
          h1 + vs. Angular
          .row
            .col-50
              img(src="./assets/angular.jpg" height="300")
            .col-50
              img(src="./assets/logo.png" height="300")
        section
          h2 Frontend learnings History
          .row
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
          img.abs-indicator(src="./assets/angular.jpg" height="100")
          h4 Accessing route parameters in Angular
          img(src="./assets/snippets/route_param_ng.png")
        section
          h4 Accessing route parameters in Vue
          img.abs-indicator(src="./assets/logo.png" height="100")
          img(src="./assets/snippets/route_param_vue.png")
        section
          h4 Reactivity
          .row
            .col-50
              img.indicator(src="./assets/angular.jpg" height="50")
              span Alles is Observable (RxJS)
            .col-50
              img.indicator(src="./assets/logo.png" height="50")
              span Alles is reactive

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
          .row
            .col-50
              img.indicator(src="./assets/angular.jpg" height="50")
              span containers for components, directives, services, etc.
            .col-50
              img.indicator(src="./assets/logo.png" height="50")
              span container for piece of store
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
          p Todo: show a snippet

        section
          h2 Unit testing
          p Todo: show a snippet
        
        section
          h2 CLI
          .row
            .col-50
              img.indicator(src="./assets/angular.jpg" height="50")
              span scaffolding
            .col-50
              img.indicator(src="./assets/logo.png" height="50")
              span UI

        section
          h2 Server side rendering
          .row
            .col-50
              img.indicator(src="./assets/angular.jpg" height="50")
              span @nguniversal/express-engine
            .col-50
              img.indicator(src="./assets/logo.png" height="50")
              span vue-server-renderer
        
        section
          img(src="./assets/parrot.gif")
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

.row {
  display: flex;
}

.col-50 {
  width: 50%;
  display: block;
  float: left;
  padding: 1em;
  box-sizing: border-box;
  background-color: #222;

  &:nth-child(even) {
    background-color: #444;
  }
}

.reveal section img {
  background-color: white;
  margin: 0;
}

.abs-indicator {
  position: absolute;
  top: -100px;
  left: -100px;
  background-color: white;
}

.indicator {
  float: left;
  margin: 0 0;
  background-color: white;
}
</style>
