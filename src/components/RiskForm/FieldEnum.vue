<template>
  <div class="select">
    <select>
      <option disabled value="">Select one</option>
      <option
        v-for="option in options"
        v-bind:key="option.id"
        v-bind:value="option.value"
      >
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['options'],
}
</script>
