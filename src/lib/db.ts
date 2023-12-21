
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_KEY);

export type Bookmark =
	{
		favIcon: string,
		title: string,
		url: string
	};

export const loadBookmarks = async () =>{
    return Promise.resolve(bookmarks);
};

const bookmarks: Bookmark[] = [
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
];