<script>
  import router from "page";
  import Home from "../Pages/Home.svelte";
  import About from "../Pages/About.svelte";
  import Projects from "../Pages/Projects.svelte";
  import Blog from "../Pages/Blog.svelte";
  import Collabs from "../Pages/Collabs.svelte";

  let page;
  router("/", () => (page = Home));
  router("/about", () => (page = About));
  router("/projects", () => (page = Projects));
  router("/blog", () => (page = Blog));
  router("/collabs", () => (page = Collabs));

  router.start();
</script>

<svelte:component this={page} />
