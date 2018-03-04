<template>
  <div id="app" class="container">
    <h1 class="title">Insurance Risk Creator</h1>
    <div class="columns">
      <div class="column">
        <RiskTypeSelector />
      </div>
      <div class="column">
        <RiskForm />
      </div>
    </div>
  </div>
</template>

<script>
import RiskTypeSelector from './components/RiskTypeSelector';
import RiskForm from './components/RiskForm/RiskForm';

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
    RiskForm,
  },
}
</script>
