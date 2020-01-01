<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Ginger</router-link>
        <div class="navbar-nav ml-auto">
          <router-link v-if="!user" class="navbar-item nav-link" to="login"
            >Login</router-link
          >
          <router-link v-if="!user" class="navbar-item nav-link" to="register"
            >Register</router-link
          >
          <button
            v-if="user"
            class="nav-item nav-link btn btn-link"
            @click="$emit('log-out')"
          >
            <font-awesome-icon
              :icon="['fas', 'sign-out-alt']"
              class="icon alt ml-2"
            />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navigation",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>
