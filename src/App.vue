<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navigation :user="user" @log-out="logout" />
    <router-view class="container" :user="user" @log-out="logout" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "./fb";
// import db from "./db.js";

export default {
  name: "app",
  data: function() {
    return {
      name: null,
      user: null
    };
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
    // db.collection("users")
    //   .doc("pDiyMmpmQTzdm4NhdDXl")
    //   .get()
    //   .then(snapshot => {
    //     this.user = snapshot.data().name;
    //   });
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #21640c;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
