<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navigation :user="user" @log-out="logout" />
    <router-view
      class="container"
      :user="user"
      :lights="lights"
      @log-out="logout"
      @sendSettings="sendSettings"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "./fb";
import { firestore } from "./fb";

export default {
  name: "app",
  data: function() {
    return {
      name: null,
      user: null,
      lights: []
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
    },
    sendSettings: function(settings) {
      this.console.log("Sender settings: ", settings);
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        firestore.collection("lights").onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            this.lights.push({
              id: doc.id,
              name: doc.data().name
            });
          });
        });
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
