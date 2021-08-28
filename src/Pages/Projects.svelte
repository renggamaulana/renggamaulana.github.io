<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<!-- Projects -->
<section id="projects" class="mt-5">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center">My Projects</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <!-- Button trigger modal -->
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/5.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="./img/6.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <i
              class="fas fa-compress-arrows-alt"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">View</i
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Akhir Projects -->
