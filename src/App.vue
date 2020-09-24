<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <toolbar-logo />

      <v-spacer></v-spacer>

      <v-btn text router to="/rltest">
        <span class="mr-2">RLTest</span>
      </v-btn>

      <v-btn text router to="/babylon">
        <span class="mr-2">Babylon</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ToolbarLogo from "@/components/ToolbarLogo.vue";

export default Vue.extend({
  name: "App",
  components: { ToolbarLogo },
  data: () => ({
    //
  }),
});
</script>
<style>
html {
  overflow-y: auto !important;
}
</style>
