<template>
<form v-if="riskType">
  <h2 class="title is-2">{{ riskType.name }}</h2>
  <p class="risk-description">{{ riskType.description }}</p>

  <h3 class="title is-3">Fields:</h3>

  <div
    class="field"
    v-for="field in riskType.fields"
    v-bind:key="field.id"
  >
    <label class="label">{{ field.name }}</label>
    <div class="control">
      <FieldText v-if="field.type === 'text'" />
      <FieldNumber v-if="field.type === 'number'" />
      <FieldDate v-if="field.type === 'date'" />
      <FieldEnum
        v-bind:options="field.options"
        v-if="field.type === 'enum'"
      />
    </div>
  </div>

  <div class="field">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </div>
</form>
</template>

<script>
import { mapGetters } from 'vuex';
import FieldText from './FieldText';
import FieldNumber from './FieldNumber';
import FieldDate from './FieldDate';
import FieldEnum from './FieldEnum';

export default {
  computed: {
    ...mapGetters({
      riskType: 'getCurrentRiskType',
    }),
  },
  components: {
    FieldText,
    FieldNumber,
    FieldDate,
    FieldEnum,
  },
}
</script>

<style scoped>
.risk-description {
  margin-bottom: 2rem;
}
</style>
