import { writable } from "svelte/store";
import data from "$lib/stores/data.json"

console.log(data);
export const pageData = writable();

pageData.set({
    pages: data.pages,
    work: data.work
});