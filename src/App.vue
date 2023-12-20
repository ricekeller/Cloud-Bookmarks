<script lang="ts">
//import BookmarkItem from './components/BookmarkItem.vue';

export default {
	// Data properties
	data() {
		return {
			items: [
				{
					favIcon: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
					title: "Nextjs",
					url: `https://nextjs.org`,
				},
				{
					favIcon: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
					title: "Estelle Mi",
					url: `https://estellemi.com`,
				},
				{
					favIcon: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
					title: "Nextjs",
					url: `https://nextjs.org`,
				},
				{
					favIcon: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
					title: "Nextjs",
					url: `https://nextjs.org`,
				},
				{
					favIcon: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
					title: "Nextjs",
					url: `https://nextjs.org`,
				},
			],
			currentTab: {
				title: "test",
				url: "https://localhost",
				favIconUrl: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
			},
			searchText: ""
		};
	},

	// Computed properties
	computed: {
		filteredItems() {
			if (this.searchText === "") {
				return this.items;
			}

			return this.items.filter(item => item.title?.includes(this.searchText) || item.url?.includes(this.searchText));
		}
	},

	// Props (if the component receives props)
	props: {
		//propExample: String
	},

	// Methods
	methods: {
		openBookmark(item: any) {
			console.log(item);

			//chrome.tabs.create({ url: 'https://example.com' });
		},
		deleteBookmark(item: any) {
			console.log(item);
		},
		saveCurrent() {
			console.log("saving...");
			console.log(this.currentTab);
		},
		performSearch() {
			console.log(`Search for: ${this.searchText}`);
		}
	},

	// Lifecycle hooks
	created() {
		console.log('Component created');
	}
};


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
	<v-card class="mx-auto" max-width="650" width="450">
		<v-toolbar color="cyan-lighten-1">
			<v-toolbar-title>Cloud Bookmarks</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>

		<VCard>
			<v-card-title>Current tab:</v-card-title>
			<v-card-subtitle>{{ currentTab.title }}</v-card-subtitle>
			<v-card-text>{{ currentTab.url }}</v-card-text>
			<v-card-item><v-img :src="currentTab.favIconUrl" width="20"></v-img></v-card-item>
			<VCardActions>
				<VBtn @click="saveCurrent"><v-icon icon="mdi-plus-box"></v-icon>Save</VBtn>
			</VCardActions>
		</VCard>

		<v-container>
			<v-row align="center">
				<v-col cols="12">
					<v-text-field v-model="searchText" label="Search" placeholder="Type here to search" clearable
						@click:clear="() => searchText = ''" @input="performSearch" variant="filled"
						hide-details></v-text-field>
				</v-col>
			</v-row>
		</v-container>

		<v-list :items="filteredItems" item-props lines="one">

			<v-list-item-group v-if="filteredItems.length > 0">
				<template v-slot:default>
					<v-subheader>All Bookmarks</v-subheader>
					<v-list-item v-for="(item, index) in items" :key="index">
						<div style="display: flex;">
							<v-avatar>
								<v-img :src="item.favIcon"></v-img>
							</v-avatar>
							<div style="padding-left: 5px;">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
								<v-list-item-subtitle>{{ item.url }}</v-list-item-subtitle>
							</div>
							<v-spacer></v-spacer>
							<div>
								<v-btn icon="mdi-open-in-new" variant="text" color="green-darken-3"
									@click="() => openBookmark(item)"></v-btn>
								<v-btn color="grey-lighten-1" icon="mdi-delete" variant="text"
									@click="() => deleteBookmark(item)"></v-btn>
							</div>
						</div>
						<v-divider v-if="index < items.length - 1" inset></v-divider>
					</v-list-item>
				</template>
			</v-list-item-group>

			<v-list-item v-else>
				<v-list-item-content>No items available.</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-card>
</template>

<style scoped></style>
