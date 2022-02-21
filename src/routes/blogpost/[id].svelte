<script context="module">
  export async function load({ fetch, params }) {
    const id = params.id;
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const res = await fetch(`/blogpost/${id}.json`);
    const { post } = await res.json();

    if (res.ok) {
      return {
        props: {
          post,
        },
      };
    }
    return {
      status: 301,
      redirect: "/blog/",
    };
  }
</script>

<script>
  export let post;
</script>

<div class="guide  w-1/2 mx-auto my-20">
  <div class="text-xl font-bold">{post.title}</div>
  <hr class="my-5" />
  <p>{post.body}</p>
</div>
