<script setup lang="ts">
import BookmarkList from './components/BookmarkList.vue';

</script>

<template>
	<v-card class="mx-auto" max-width="650" width="450">
		<v-toolbar color="cyan-lighten-1">
			<v-toolbar-title>Cloud Bookmarks</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>

		<BookmarkList />
	</v-card>
</template>

<style scoped></style>
