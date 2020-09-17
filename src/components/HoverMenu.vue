<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Hover Menu
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="listClicked(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    items: [
      { title: "item 1" },
      { title: "item 2" },
      { title: "item 3" },
      { title: "item 4" },
    ],
  }),
  methods: {
    listClicked: (item: { title: string }) => {
      console.log("listClicked() called, title:", item.title);
    },
  },
});
</script>
