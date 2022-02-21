<script>
  import "../app.css";
</script>

<main class="bg-black">
  <nav>
    <div class="grid grid-cols-2 md:w-4/5 mx-auto p-5 bg-blue-100 ">
      <div class="text-xl font-bold uppercase text-gray-700">Svv</div>
      <div class="flex justify-end links items-center">
        <span><a href="/">Home</a></span>
        <span><a href="/blog">Blog</a></span>
        <span><a href="/contact">Contact</a></span>
        <span><a href="/history">History</a></span>
      </div>
    </div>
  </nav>
  <div class="md:w-4/5 bg-gray-700 text-white mx-auto p-5 ">
    <slot />
  </div>
</main>

<style>
  .links a {
    opacity: 0.5;
    margin-right: 15px;
  }

  .links a:hover {
    opacity: 1;
  }
</style>
