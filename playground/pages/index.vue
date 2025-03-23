<script setup>
const isBetaFeatureEnabled = useFeatureFlag('beta_feature')
</script>

<template>
  <h1 v-if="isBetaFeatureEnabled">
    Feature Enabled
  </h1>
  <h1 v-else>
    Feature Disabled
  </h1>
</template>

<style>
body {
  background-color: #040311;
  color: #fff;
}
</style>
