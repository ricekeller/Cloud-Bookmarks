<script setup lang="ts">
//import BookmarkItem from './components/BookmarkItem.vue';

const items = [
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Nextjs',
    subtitle: `https://nextjs.org`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Estelle Mi',
    subtitle: `https://estellemi.com`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Nextjs',
    subtitle: `https://nextjs.org`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Nextjs',
    subtitle: `https://nextjs.org`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Nextjs',
    subtitle: `https://nextjs.org`,
  },
];

const getCurrentTab = async ()=>
{
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
getCurrentTab();

</script>

<template>
  <v-card class="mx-auto" max-width="650">
    <v-toolbar color="cyan-lighten-1">
      <v-btn variant="text" ><v-icon icon="mdi-plus-box"></v-icon>Save current</v-btn>

      

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>
    </v-toolbar>

    <v-list :items="items" item-props lines="one">
      <template v-slot:subtitle="{ subtitle }">
        <span>{{ subtitle }}</span>
      </template>
      <template v-slot:append>
        <v-btn
          color="grey-lighten-1"
          icon="mdi-delete"
          variant="text"
        ></v-btn>
      </template>
    </v-list>
  </v-card>
</template>

<style scoped>

</style>
