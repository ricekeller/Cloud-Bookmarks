<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { Bookmark, loadBookmarks } from "../lib/db.ts";


onMounted(async () => {
	console.log("mounted");
	bookmarks.value = await loadBookmarks();
	console.log("loaded bookmarks: ");
	console.log(bookmarks.value);
});

const searchText = ref("");
const bookmarks = ref<Bookmark[]>([]);
const currentTab = ref<Bookmark>({
	title: "test",
	url: "https://localhost",
	favIcon: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
});


const openBookmark = (item: any) => {
	console.log(item);

	//chrome.tabs.create({ url: 'https://example.com' });
};

const deleteBookmark = (item: any) => {
	console.log(item);
};

const saveCurrent = () => {
	console.log("saving...");
	console.log(currentTab);
};

const filteredItems = computed<Bookmark[]>(() => {
	const text = searchText.value;
	console.log("filtered items called: " + text);
	if (text === "") {
		return bookmarks.value;
	}

	const matched = bookmarks.value.filter(item => item.title?.includes(text) || item.url?.includes(text));
	console.log(matched);
	return matched;
});

// const getCurrentTab = async ()=>
// {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// };
//const currentTab = await getCurrentTab();

</script>

<template>
	<VCard>
		<v-card-title>Current tab:</v-card-title>
		<v-card-subtitle>{{ currentTab.title }}</v-card-subtitle>
		<v-card-text>{{ currentTab.url }}</v-card-text>
		<v-card-item><v-img :src="currentTab.favIcon" width="20"></v-img></v-card-item>
		<VCardActions>
			<VBtn @click="saveCurrent"><v-icon icon="mdi-plus-box"></v-icon>Save</VBtn>
		</VCardActions>
	</VCard>

	<v-container>
		<v-row align="center">
			<v-col cols="12">
				<v-text-field v-model="searchText" label="Search" placeholder="Type here to search" clearable
					@click:clear="() => searchText = ''" variant="filled" hide-details></v-text-field>
			</v-col>
		</v-row>
	</v-container>

	<v-list lines="one">
		<v-list-subheader>All Bookmarks</v-list-subheader>
		<v-list-item v-for="(item, index) in filteredItems" :key="index" v-if="filteredItems.length > 0" :title="item.title"
			:subtitle="item.url">
			<template v-slot:prepend>
				<v-avatar>
					<v-img :src="item.favIcon"></v-img>
				</v-avatar>
			</template>
			<template v-slot:append>
				<v-btn color="green-darken-3" icon="mdi-open-in-new" variant="text"
					@click="() => openBookmark(item)"></v-btn>
				<v-btn color="grey-lighten-1" icon="mdi-delete" variant="text" @click="() => deleteBookmark(item)"></v-btn>
			</template>
			<template v-slot:default>
				<v-divider v-if="index < bookmarks.length - 1" inset></v-divider>
			</template>


		</v-list-item>

		<v-list-item v-else title="No items available."> </v-list-item>
	</v-list>
</template>

<style scoped></style>
