<template>
  <div id="app" class="container">
    <h1 class="title">Insurance Risk Creator</h1>
    <RiskTypeSelector />
  </div>
</template>

<script>
import RiskTypeSelector from './components/RiskTypeSelector';

export default {
  name: 'App',
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
    RiskTypeSelector,
  },
}
</script>
