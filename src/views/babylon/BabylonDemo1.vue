<template>
  <v-container>
    <v-row justify="center"><h1>babylon demo1</h1></v-row>
    <v-row>
      <canvas id="renderCanvas"></canvas>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
// import * as BABYLON from "babylonjs";
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";

export default Vue.extend({
  mounted() {
    this.createScene();
  },
  methods: {
    createScene(): Scene {
      const canvas: HTMLCanvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;
      const engine: Engine = new Engine(canvas, true);
      const scene: Scene = new Scene(engine);

      const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
      camera.attachControl(canvas, true);

      const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
      const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

      engine.runRenderLoop(() => {
        scene.render();
      });
      return scene;
    },
  },
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
