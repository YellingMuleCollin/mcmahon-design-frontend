<script context="module" lang="ts">
    import Header from "$lib/components/Header.svelte";
    import {pageData} from "$lib/stores/store.js";
    let text: string = "Hello World";
    let pages;
    let work;
    pageData.subscribe(val => {
        pages = val.pages;
        work = val.work;
    });

    let randomNumber: number = Math.floor(Math.random() * work.length);

    


</script>

<Header />

<main>
    <article>
        <h1>Featured Project</h1>
        <section>
            <h2>{work[randomNumber].title}</h2>
            <p>{work[randomNumber].description}</p>
            <!-- <a href={work[randomNumber].link}>View Project</a> -->
        </section>

    </article>
</main>