<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<!-- Contact -->
<section id="contact" class="mt-5 mb-5 align-items-center">
  <div class="container">
    <h2 class="text-center">Contact</h2>
    <div class="row">
      <div class="col">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control mb-3"
              id="name"
              aria-describedby="emailHelp"
            />
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>
<!-- Akhir Contact -->
