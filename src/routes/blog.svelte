<script context="module">
  export async function load({ fetch }) {
    //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await fetch("/blogpost.json");
    //const posts = await res.json();
    //need to de-structure since this is an object
    const { posts } = await res.json();

    // console.log(window);
    if (res.ok) {
      return {
        props: {
          posts: posts,
        },
      };
    }
    return {
      status: res.status,
      error: new Error("Not good"),
    };
  }
</script>

<script>
  export let posts;
</script>

<main>
  <div class="font-bold text-xl mb-5 ">Blog Posts</div>
  <ul>
    {#each posts as post}
      <li class=" py-2">
        <a
          sveltekit:prefetch
          href={`/blogpost/${post.id}`}
          class="hover:text-gray-400">{post.title}</a
        >
      </li>
    {/each}
  </ul>
</main>

<style>
</style>
