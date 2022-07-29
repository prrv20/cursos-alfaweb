<template>
    <v-container>
          
            <H1 class="text-center">Administración</H1> 
            <add-curso :getFecha="fecha" class="my-3 text-end"></add-curso>
          
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" v-for="head in headers" :key="head">{{head}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="curso in cursos" :key="curso.id" class="text-left">
                
                <td>{{ curso.nombre_curso}}</td>
                <td>{{ curso.cupos }}</td>
                <td>{{ curso.inscritos }}</td>
                <td>{{ curso.duracion }}</td>
                <td>
                  <v-chip class="ma-2" color="green" text-color="white">
                   $ {{ Number(curso.costo).toLocaleString("es-CL")  }}
                  </v-chip>
                </td>
                <td>
                  <v-chip class="ma-2" :color="curso.terminado ? 'info' : 'gray'" text-color="white">
                    {{ curso.terminado ? 'Si' : 'No'}}
                  </v-chip>
                </td>
                <td>{{ curso.creado}}</td>
                <td>
                  <v-btn class="mx-2" fab dark x-small color="cyan" @click="$router.push(`/curso/${curso.id}`)">
                      <v-icon dark>
                        mdi-pencil
                      </v-icon>
                  </v-btn>
                  <v-btn color="red" fab x-small dark @click="deleteCurso(curso.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="mt-3">
          <v-alert dense color="purple" icon="mdi-account-group" outlined>
            Cantidad total de Alumnos Permitidos: <strong>  {{totalCupos}}</strong> alumnos
          </v-alert>
          <v-alert color="blue" icon="mdi-account-multiple-check" dense outlined>        
            Cantidad total de Alumnos Inscritos: <strong>{{totalInscritos}}</strong> alumnos
          </v-alert>
          <v-alert color="#EF5350" icon="mdi-account-clock" dense outlined>
            Cantidad total de Cupos Restantes: <strong>{{ cuposRestantes(totalCupos, totalInscritos)}}</strong>  Cupos
          </v-alert>
          <v-alert color="#D81B60" icon="mdi-cancel" dense outlined>
            Cantidad de Cursos Terminados: <strong>{{cursosTerminados}}</strong>  Cursos
          </v-alert>
          <v-alert color="#757575" icon="mdi-bell-ring" dense outlined>
            Cantidad Cursos Activos: <strong>{{cursosActivos}}</strong>  Cursos
          </v-alert>
          <v-alert color="#D84315" icon="mdi-bell-ring" dense outlined>
            Cantidad total de Cursos: <strong>{{totalCursos}}</strong>  Cursos
          </v-alert>
          
        </div>
    </v-container>
</template>

<script>
import AddCurso from '@/components/AddCurso.vue'
import { db } from '@/firebase/firebase.js'
import { doc, deleteDoc } from 'firebase/firestore'
import { mapActions, mapState, mapGetters } from "vuex"
export default {
    name: 'admin-component',
    props: ['idCurso'],
    data: function(){
        return {
            fecha:'',
            headers: ['Curso', 'Cupos', 'Inscritos', 'Duración', 'Costo', 'Terminado', 'Fecha', 'Acciones'],

        }
    },
    computed: {
      ...mapState(['cursos']),
      ...mapGetters(['totalCursos','totalCupos', 'totalInscritos','cursosActivos','cursosTerminados'])
    },
    methods: {
      ...mapActions(['fetchCursos']),
      
      async deleteCurso(idCurso){
        try {
          await deleteDoc(doc(db, 'cursos', idCurso))
          this.$router.push('/cursos')
        } catch (error) {
          console.log(error)
        }
      },
      cuposRestantes(totalCupos, totalInscritos){
      return totalCupos - totalInscritos
      },
      getFecha(){
        let hoy = new Date()
        let dia = hoy.getDate()
        let mes = hoy.getMonth()
        let anio = hoy.getUTCFullYear()
        let fecha = dia + '-'+(mes+1)+'-'+anio
        console.log(fecha)
        return fecha
      }
    },
    // watch: {},
    components: {
      'add-curso': AddCurso
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
      this.fetchCursos()
      this.fecha = this.getFecha()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>