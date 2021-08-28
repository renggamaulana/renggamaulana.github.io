<script>
  import router from "page";
  import Home from "../Pages/Home.svelte";
  import About from "../Pages/About.svelte";
  import Contact from "../Pages/Contact.svelte";
  import Projects from "../Pages/Projects.svelte";
  import Blog from "../Pages/Blog.svelte";

  let page;

  router("/", () => (page = Home));
  router("/about", () => (page = About));
  router("/Projects", () => (page = Projects));
  router("/blog", () => (page = Blog));
  router("/contact", () => (page = Contact));

  router.start();
</script>

<svelte:component this={page} />
