<template>
  <v-app>
    <nav-bar v-if="isPrivateRoute"></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { mapActions } from "vuex"
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
  },
  methods:{
    ...mapActions(['setEmail'])
  },
  created(){
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=> {
      if(user){
        //llamar accion para guardar correo
      this.setEmail(user.email)
      }
  })
}
}
</script>
