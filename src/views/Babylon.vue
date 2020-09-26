<template>
  <v-container>
    <v-row justify="center"><h1>Babylon Demos</h1></v-row>
    <v-row>
      <v-btn text router to="/babylon/demo1"><span class="mr-2">demo1</span></v-btn>
      <v-btn text router to="/babylon/demo2"><span class="mr-2">demo2</span></v-btn>
      <v-btn text router to="/babylon/animation101"><span class="mr-2">animation101</span></v-btn>
      <v-btn text router to="/babylon/gltf"><span class="mr-2">GLTF Model</span></v-btn>
    </v-row>
    <v-row>
      <router-view />
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
});
</script>
<style scoped>
#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
  /* border: 1px solid red; */
}
</style>
