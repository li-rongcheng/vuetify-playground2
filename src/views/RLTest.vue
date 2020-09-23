<template>
  <div>
    <v-container>
      <v-row justify="center"><h1>RL test page</h1></v-row>
      <v-row>
        <v-col cols="12"><a href="https://materialdesignicons.com">Material Design Icons</a></v-col>
        <v-col cols="6"><icon-card-1 /></v-col>
        <v-col cols="6"><icon-card-2 /></v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card outlined>
            <v-card-text>
              <v-row>
                <hover-menu class="pa-1" :items="items1" @listClicked="menuClicked" />
                <hover-menu class="pa-1" :items="items2" @listClicked="menuClicked" />
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined>
            <v-card-text>
              <v-row>
                <hover-menu class="pa-1" :items="items3" />
                <hover-menu class="pa-1" :items="items4" />
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HoverMenu from "@/components/HoverMenu.vue";
import IconCard1 from "@/components/cards/IconCard1.vue";
import IconCard2 from "@/components/cards/IconCard2.vue";

export default Vue.extend({
  components: { HoverMenu, IconCard1, IconCard2 },
  data: () => ({
    items1: [{ title: "item 11" }, { title: "item 12" }, { title: "item 13" }, { title: "item 14" }],
    items2: [{ title: "item 21" }, { title: "item 22" }, { title: "item 23" }, { title: "item 24" }],
    items3: [{ title: "item 31" }, { title: "item 32" }, { title: "item 33" }, { title: "item 34" }],
    items4: [{ title: "item 41" }, { title: "item 42" }, { title: "item 43" }, { title: "item 44" }],
  }),
  methods: {
    menuClicked: (title: string) => {
      console.log("received title: ", title);
    },
  },
});
</script>
