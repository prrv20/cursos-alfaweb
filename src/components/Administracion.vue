<template>
    <v-container>
        <div>
          <H1>Administración</H1>
          <v-btn class="mx-2" outlined fab dark small color="cyan"><!-- @click="$router.push(`/user/${user.id}`"") -->
              <v-icon dark>
                  mdi-pencil
              </v-icon>
          </v-btn>
        </div>
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
                <td>{{ curso.costo }}</td>
                <td>{{ curso.terminado }}</td>
                <td>{{ curso.creado}}</td>
                <td>
                  <v-btn class="mx-2" fab dark x-small color="cyan"><!-- @click="$router.push(`/user/${user.id}`"") -->
                      <v-icon dark>
                        mdi-pencil
                      </v-icon>
                  </v-btn>
                  <v-btn color="red" fab x-small dark>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
    name: 'adimin-component',
    // props: {},
    data: function(){
        return {
            headers: ['Curso', 'Cupos', 'Inscritos', 'Duración', 'Costo', 'Terminado', 'Fecha', 'Acciones'],

        }
    },
    computed: {
      ...mapState(['cursos'])
    },
    methods: {
      ...mapActions(['fetchCursos'])
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
      this.fetchCursos()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>