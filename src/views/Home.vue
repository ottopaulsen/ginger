<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h1 class="display-4 text-primary mt-3 mb-2">Home</h1>
        <div v-if="user">
          <span>
            <p class="text-secondary">User: {{ user.name || user.email }}</p>
          </span>
        </div>
        <p class="lead">
          Hmmm...
        </p>
        <router-link
          v-if="!user"
          class="btn btn-outline-primary mr-2"
          to="/register"
        >
          <font-awesome-icon :icon="['fas', 'edit']" class="icon alt mr-2" />
          Register
        </router-link>
        <router-link
          v-if="!user"
          class="btn btn-outline-primary mr-2"
          to="/login"
        >
          <font-awesome-icon
            :icon="['fas', 'sign-in-alt']"
            class="icon alt mr-2"
          />
          Log In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "home",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>
<style lang="scss">
h1 {
  font-size: 2em;
  color: blue;
}
</style>
