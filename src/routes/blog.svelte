<script context="module">
  export async function load({ context }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
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
        <a href="/" class="hover:text-blue-700">{post.title}</a>
      </li>
    {/each}
  </ul>
</main>

<style>
</style>
