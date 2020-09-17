<template>
  <div>
    <v-container>
      <v-row justify="center">
        <h1>RL test page</h1>
      </v-row>
      <v-row justify="center">
        <v-icon>mdi-open-in-new</v-icon>
        <v-icon>mdi-ab-testing</v-icon>
        <v-icon>mdi-account-box</v-icon>
        <v-icon>mdi-snowflake-off</v-icon>
      </v-row>
      <v-row>
        <v-col cols="3"> <hover-menu class="pa-1" :items="items1" /> </v-col>
        <v-col cols="3"> <hover-menu class="pa-1" :items="items2" /> </v-col>
        <v-col cols="3"> <hover-menu class="pa-1" :items="items3" /> </v-col>
        <v-col cols="3"> <hover-menu class="pa-1" :items="items4" /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import HoverMenu from "@/components/HoverMenu.vue";
import Vue from "vue";
export default Vue.extend({
  components: { HoverMenu },
  data: () => ({
    items1: [
      { title: "item 11" },
      { title: "item 12" },
      { title: "item 13" },
      { title: "item 14" },
    ],
    items2: [
      { title: "item 21" },
      { title: "item 22" },
      { title: "item 23" },
      { title: "item 24" },
    ],
    items3: [
      { title: "item 31" },
      { title: "item 32" },
      { title: "item 33" },
      { title: "item 34" },
    ],
    items4: [
      { title: "item 41" },
      { title: "item 42" },
      { title: "item 43" },
      { title: "item 44" },
    ],
  }),
});
</script>
