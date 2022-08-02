<template>
  <v-container>
    <h1 class="text-center my-4">Cursos AlfaWeb</h1>
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="card in cards" :key="card">
          <v-card>
            <v-img :src="card.img" height="250" class="grey darken-4" aspect-ratio="1.8"></v-img>
            <v-card-title class="text-h6">
              {{ card.text }}
            </v-card-title>
          </v-card>
        </v-col>  
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
  
  import { mapActions, mapState } from 'vuex' 

  export default {
    name: 'Home-component',
    data: function(){
        return {
            cards: [
        {
          img: "https://i.ytimg.com/vi/TC8bT7zTdoE/maxresdefault.jpg",
          text:"Cursos Desde Cero",
        },
        {
          img: "https://miro.medium.com/max/800/1*0FAbAXug4XMepL7fGIvXFg.png",
          text:"Las Mejores Técnologías",
        },
        {
          img: "https://www.headsem.com/wp-content/uploads/2018/02/cursos-programaci%C3%B3n-para-juegos.jpg",
          text:"Cursos de Desarrollo Web",
        },
        {
          img: "https://st3.depositphotos.com/1439888/15583/i/600/depositphotos_155833828-stock-photo-set-of-colored-balls-with.jpg",
          text:"Los Mejores Cursos de Lenguajes de Programación",
        },
        {
          img: "https://i0.wp.com/guidocutipa.blog.bo/wp-content/uploads/2020/04/basesdedatos_opensource.png?fit=596%2C319&ssl=1",
          text:"Conviertete en un Experto en Bases de Datos",
        },
        {
          img: "https://dabacodlabblog.files.wordpress.com/2017/10/desarrollo-de-aplicaciones-moviles.jpg",
          text:"Aprende a Crear Aplicaciones Móviles desde Cero",
        },
        
      ],

            
        }
    },
    components: {
      
    },
    computed:{
      ...mapState(['cursos'])
    },
    methods:{
      ...mapActions(['fetchCursos'])
    },
    created(){
      this.fetchCursos()
    }
  }
</script>
