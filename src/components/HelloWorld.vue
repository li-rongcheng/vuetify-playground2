<template>
  <v-container>
    <v-row class="text-center">
      <page-logo />
      <welcome-info />
      <link-info title="What's Next" :links="whatsNext" />
      <link-info title="Important Links" :links="importantLinks" />
      <link-info title="Ecosystem" :links="ecosystem" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PageLogo from "@/components/cols/PageLogo.vue";
import WelcomeInfo from "@/components/cols/WelcomeInfo.vue";
import LinkInfo from "@/components/cols/LinkInfo.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    PageLogo,
    WelcomeInfo,
    LinkInfo,
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
});
</script>
