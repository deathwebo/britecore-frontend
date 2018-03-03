<template>
  <div id="app">
    <HelloWorld/>
    <div>
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import store from './store';

export default {
  name: 'App',
  store,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  created: function() {
    this.$store.dispatch('fetchRiskTypes');
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
  components: {
    HelloWorld
  },
}
</script>
