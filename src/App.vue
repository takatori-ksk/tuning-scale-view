<template>
  <v-app>
    <v-app-bar
      app
      color="sucess"
      dark
    >
      <div class="d-flex align-center">
        <!--
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div id="fingerboard">
        <Fingerboard/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Fingerboard from './components/Fingerboard';

export default {
  name: 'App',

  components: {
    Fingerboard,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#fingerboard{
  margin: 5% 10px;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}
</style>
