<template>
  <div class="row justify-content-center">
    <div class="col-11 col-md-8 col-lg-6">
      <div class="card border-top-0 rounded-0">
        <div class="card-body py-2">
          <h4 class="card-title m-0 text-center">Your Lights</h4>
        </div>
        <div class="list-group list-group-flush">
          <div
            class="list-group-item d-flex"
            v-for="light in lights"
            :key="light.id"
          >
            <router-link
              class="btn btn-sm btn-outline-secondary"
              title="Light control"
              :to="'/lights/' + light.id"
            >
              <section class="pl-3 text-left align-self-center">
                {{ light.name }}
              </section>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      errorMessage: null
    };
  },
  props: ["lights"],
  mounted: function() {},
  methods: {
    select: function(id) {
      this.console.log(id);
    }
  }
};
</script>
