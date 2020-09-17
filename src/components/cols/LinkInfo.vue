<template>
  <v-col class="mb-5" cols="12">
    <h2 class="headline font-weight-bold mb-3">
      {{ title }}
    </h2>

    <v-row justify="center">
      <a
        v-for="(next, i) in links"
        :key="i"
        :href="next.href"
        class="subheading mx-3"
        target="_blank"
      >
        {{ next.text }}
      </a>
    </v-row>
  </v-col>
</template>
<script lang="ts">
import Vue from "vue";

interface LinkInfoType {
  text: string;
  href: string;
}

export default Vue.extend({
  props: {
    title: String,
    links: Array,
    // title: { type: string, default: "" },
    // links: { type: LinkInfoType[], default: () => [] },
  },
});
</script>
