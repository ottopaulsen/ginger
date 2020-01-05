<template>
  <form class="mt-3" @submit.prevent="saveSettings">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">Light control</h3>
              <p>Lignt id: {{ lightId }}</p>
              <div class="form-group">
                <div v-if="errorMessage" class="col-12 alert alert-danger px-3">
                  {{ errorMessage }}
                </div>
              </div>
              <div
                class="form-group row"
                v-for="(setting, index) in settings"
                :key="setting.label"
              >
                <label
                  :for="'input' + setting.label"
                  class="col-4 col-sm-2 col-form-label"
                >
                  {{ setting.label }}
                </label>
                <input
                  type="number"
                  class="form-control col-6 col-sm-8"
                  :id="'input' + setting.label"
                  v-model="settings[index].value"
                />
              </div>
              <div class="form-group row">
                <span class="col-8">
                  {{ statusMessage }}
                </span>
                <span class="text-right col-4">
                  <button class="btn btn-primary" type="submit">Send</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { firestore } from "../fb.js";
export default {
  data: function() {
    return {
      lightId: null,
      errorMessage: null,
      statusMessage: "",
      settings: {
        red: {
          label: "Red",
          value: null,
          min: 0,
          max: 100
        },
        green: {
          label: "Green",
          value: null,
          min: 0,
          max: 100
        },
        blue: {
          label: "Blue",
          value: null,
          min: 0,
          max: 100
        },
        leds: {
          label: "Leds",
          value: null,
          min: 0,
          max: 8
        },
        level: {
          label: "Level",
          value: null,
          min: 0,
          max: 100
        }
      }
    };
  },
  mounted: function() {
    this.lightId = this.$route.params.lightId;
    this.statusMessage = "Reading settings...";
    firestore
      .collection("lights")
      .doc(this.lightId)
      .get()
      .then(doc => {
        if (doc.data().settings) {
          this.settings.red.value = doc.data().settings.red;
          this.settings.green.value = doc.data().settings.green;
          this.settings.blue.value = doc.data().settings.blue;
          this.settings.leds.value = doc.data().settings.leds;
          this.settings.level.value = doc.data().settings.level;
        }
        this.statusMessage = "";
      })
      .catch(err => {
        this.errorMessage = err;
        this.statusMessage = "";
      });
  },
  methods: {
    saveSettings: function() {
      this.statusMessage = "Sending settings...";
      firestore
        .collection("lights")
        .doc(this.lightId)
        .update({
          settings: {
            red: this.settings.red.value,
            green: this.settings.green.value,
            blue: this.settings.blue.value,
            leds: this.settings.leds.value,
            level: this.settings.level.value
          }
        })
        .then(() => {
          this.statusMessage = "Settings sent!";
          setTimeout(() => {
            this.statusMessage = "";
          }, 2000);
        })
        .catch(err => {
          this.errorMessage = err;
          this.statusMessage = "";
        });
      //   this.$emit("saveSettings", this.settings);
    }
  }
};
</script>
