<template>
  <div>
        <v-app-bar color="indigo" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-icon>mdi-desktop-classic</v-icon>
                Cursos AlfaWeb
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
                    <v-icon>mdi-account-outline</v-icon>
                    <span class="mr-2">{{email}}</span>
            
            <v-btn to="/user" text @click="logout">
                    <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-spacer></v-spacer>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item v-for="route in routes" 
                        :key="route.name" 
                        @click="redirectTo(route.name)" 
                        :disabled="currentRoute==route.name">
                        <v-list-item-icon>
                        <v-icon>{{route.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{route.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { getAuth, signOut } from "firebase/auth"
export default {
  name: "navbar-comp",
  //props: ['getEmail'],
  data: function () {
    return {
        drawer: false,
        group: null,
        routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'home'
                },
                {
                    icon:'mdi-desktop-classic',
                    title:'Cursos',
                    name:'cursos'
                },
                {
                    icon:'mdi-magnify',
                    title:'Administración',
                    name:'admin'
                },
                {
                    icon:'mdi-account',
                    title:'Acerca',
                    name:'about'
                }
            ]
    };
  },
  computed: {
   ...mapGetters(['getEmail']),
   ...mapState(['email']),
    currentRoute(){
            return this.$route.name
        },

       

  },
  methods: {
    redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        },
    logout(){
        const auth = getAuth()
        
    signOut(auth)
      .then(() => {
        this.$router.push('/login')
    })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  
  // -- End Lifecycle Methods
}
</script>

<style scoped>
</style>