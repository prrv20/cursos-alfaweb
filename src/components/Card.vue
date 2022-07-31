<template>
  <v-container>
      <v-row justify="space-around">
          <v-card width="400px">
            <v-img  height="200px" :src="curso.url_imagen"></v-img>

            <v-card-text color="gray">
              <div class="font-weight-bold ml-8 mb-2">
                  {{curso.nombre_curso}}
              </div>

              <v-timeline align-top dense>
                  <v-timeline-item color="deep-purple lighten-1" small>
                  
                      <div class="font-weight-normal">
                          Costo:<strong>{{ curso.costo }}</strong> 
                          <div>Duración: {{curso.duracion}}</div>
                      </div>    
                  
                  </v-timeline-item>
                  <v-timeline-item color="green" small>
                  
                      <div class="font-weight-normal">
                          Cupos: <strong>{{ curso.cupos }}</strong> 
                          <div>Completado: {{curso.terminado ? 'Si' : 'No'}}</div>
                      </div>
                      
                  
                  </v-timeline-item>
                  <v-timeline-item color="deep-purple lighten-1" small>
                 
                      <div class="font-weight-normal">
                          Fecha de Registro: 
                          <div>{{curso.creado}}</div>
                      </div>
                      
                  </v-timeline-item>
                  <v-timeline-item color="green" small>
                  <div>
                      <div class="font-weight-normal">
                          Descripción: 
                      </div>
                      <div>{{curso.descripcion}}</div>
                  </div>
                  </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
      </v-row>
  </v-container>
</template>

<script>
//import { mapActions, mapState} from 'vuex'
export default {
    name: 'card-component',
    props: ['curso'],
    data: function(){
        return {
            messages: [
        {
          from: 'Costo:  ',
          message:'Duración: ',
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Cupos:  ',
          message: 'Completado:  ',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'Fecha Registro:  ',
          message: 'Did you still want to grab lunch today?',
          time: '9:48am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Descripción:  ',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'green',
        },
      ],
        }
    },
     computed: {
       // ...mapState(['cursos'])
     },
    methods: {
       // ...mapActions(['fetchCursos'])
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // created(){
    //     this.fetchCursos()
    // }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>