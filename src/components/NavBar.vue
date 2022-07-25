<template>
  <div>
        <v-app-bar color="indigo" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-icon>mdi-desktop-classic</v-icon>
                Cursos AlfaWeb
            </v-toolbar-title>
            
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
export default {
  name: "navbar-comp",
  // props: {},
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
    currentRoute(){
            return this.$route.name
        }
  },
  methods: {
    redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        }
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>