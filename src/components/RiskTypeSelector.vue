<template>
  <div class="field">
    <label class="label">Select a risk type</label>
    <div class="control">
      <div class="select">
        <select v-model="selected">
          <option disabled value="">Select one</option>
          <option
            v-for="riskType in riskTypes"
            v-bind:key="riskType.id"
            v-bind:value="riskType.id"
          >
            {{ riskType.name }}
          </option>
        </select>
      </div>
      <button
        class="button is-primary"
        v-on:click="setCurrentRiskType"
      >Choose</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapGetters({
      riskTypes: 'getAvailableRiskTypes',
    })
  },
  methods: {
    setCurrentRiskType() {
      if (!this.$data.selected) {
        return;
      }
      this.$store.dispatch('fetchRiskTypeDetails', {
        id: this.$data.selected
      });
    }
  }
}
</script>
