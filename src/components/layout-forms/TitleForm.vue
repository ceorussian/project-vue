<template>
  <v-alert :value="true" color="success" :icon="icon" outline>{{ title }}</v-alert>
</template>
<script>
export default {
  props: {
    title: String,
    icon: String
  }
};
</script>
