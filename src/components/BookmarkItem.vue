<script setup lang="ts">


defineProps<{ title: string, url:string, image: string }>()


</script>

<template>
  <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
    <template v-slot:title>
      {{ title }}
    </template>

    <v-card-text>
      {{ url }}
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
