<template>
  <v-app>
    <nav-bar v-if="isPrivateRoute"></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  computed:{
    isPrivateRoute(){
      if(this.$route.meta.private) return true
      else return false
    }
  },
  data: () => ({
    //
  }),
  components:{
    'nav-bar':NavBar
  }
};
</script>
