<template>
  <div>
    <h1>RL test page</h1>
    <hr />
    <v-icon>mdi-open-in-new</v-icon>
    <v-icon>mdi-ab-testing</v-icon>
    <v-icon>mdi-account-box</v-icon>
    <v-icon>mdi-snowflake-off</v-icon>
    <hr />
    <hover-menu />
  </div>
</template>
<script lang="ts">
import HoverMenu from "@/components/HoverMenu.vue";
import Vue from "vue";
export default Vue.extend({
  components: { HoverMenu },
});
</script>
