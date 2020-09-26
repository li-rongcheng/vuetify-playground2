<template>
  <v-container>
    <v-row justify="center"><h2>babylon GLTF model</h2></v-row>
    <v-row justify="center">
      <v-col cols="6">Find example from : <a href="http://https://playground.babylonjs.com/#SYQW69">here</a></v-col>
      <v-col cols="6">
        <v-select :items="modelFilenames" :label="modelFilenames[0]" @change="loadModelBySelection"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <canvas id="renderCanvas"></canvas>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";
import "babylonjs-loaders";

type BabylonInstance = {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;
  canvas: HTMLCanvasElement;
  cameras: BABYLON.Camera[];
};

export default Vue.extend({
  data: () => ({
    modelFilenames: ["alien.glb", "anthidium_forcipatum_gltf.glb"],
    modelMetaArray: [
      { rootUrl: "https://models.babylonjs.com/", fileName: "alien.glb" },
      { rootUrl: "/models/", fileName: "anthidium_forcipatum_gltf.glb" },
    ],
    instance: {} as BabylonInstance,
  }),
  mounted() {
    this.createScene();
  },
  methods: {
    createScene() {
      const canvas: HTMLCanvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;
      const engine: BABYLON.Engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
      const scene: BABYLON.Scene = new BABYLON.Scene(engine);

      this.instance = {
        engine,
        scene,
        canvas,
        cameras: [],
      };

      const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas, true);
      camera.minZ = 0.1;
      camera.maxZ = 1000;
      this.instance.cameras.push(camera);

      // This creates a basic Babylon Scene object, and load GLTF model.
      this.loadModel(this.instance, this.modelMetaArray[0].rootUrl, this.modelMetaArray[0].fileName);

      engine.runRenderLoop(() => {
        scene.render();
      });
    },

    loadModel(instance: BabylonInstance, rootUrl: string, fileName: string) {
      if (!instance) {
        throw new Error("loadModel >> instance is undefined.");
      }

      // GUI
      const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

      const loadingText = new GUI.TextBlock();
      loadingText.text = "Loading ...";
      loadingText.color = "white";
      loadingText.fontSize = 24;
      advancedTexture.addControl(loadingText);

      const scene = instance.scene;
      const canvas = instance.canvas;
      const camera = instance.cameras[0];

      BABYLON.SceneLoader.ImportMesh("", rootUrl, fileName, instance.scene, function(meshes) {
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera?.attachControl(canvas, false);
        console.log(meshes);
        const pos = new BABYLON.Vector3(
          meshes[1].absolutePosition.x,
          meshes[1].absolutePosition.y,
          meshes[1].absolutePosition.z
        );

        (camera as BABYLON.ArcRotateCamera).setTarget(pos);

        advancedTexture.dispose();
      });
    },

    loadModelBySelection(name: string) {
      if (!this.instance) {
        throw new Error("loadModelBySelection >> this.instance is undefined.");
      }

      // Dispose meshes
      this.instance.scene.meshes.forEach(mesh => mesh.dispose());

      this.modelMetaArray.forEach(meta => {
        if (meta.fileName === name) {
          this.loadModel(this.instance, meta.rootUrl, meta.fileName);
        }
      });
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
