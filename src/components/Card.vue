<template>
    <v-container>
        <v-row justify="space-around">
        <v-card width="400px">
            <v-img height="220px" :src="curso.url_imagen">
                
            </v-img>

            <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
                {{curso.nombre_curso}}
            </div>

            <v-timeline align-top dense>
                <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
                >
                <div>
                    <div class="font-weight-normal">
                        {{ message.from }}<strong>{{ curso.costo }}</strong> 
                    </div>
                    <div>{{ message.message }} {{curso.duracion}}</div>
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
          color: 'deep-purple lighten-1',
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