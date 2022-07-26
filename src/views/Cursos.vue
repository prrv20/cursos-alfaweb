<template>
  <div>
    <h2>Lista de Cursos</h2>
    <v-container>
      <v-row justify="center">
        <v-col class="pa-5" md="6" v-for="curso in cursos" :key="curso.id">
          <card :curso="curso"></card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="6" v-for="curso in cursos" :key="curso.id">
          <v-card>
            <v-img height="220" :src="curso.url_imagen"></v-img>
            <v-divider></v-divider>
            <v-card-title>{{ curso.nombre_curso }}</v-card-title>
            <v-card-actions>
            </v-card-actions>
            <v-timeline align-top dense>
                <v-timeline-item color="purple" small>
                    <div>
                        <p class="font-weight-normal">
                            Costo:
                        <strong>{{ curso.costo }}</strong> 
                        </p>
                        <p>Duración: {{ curso.duracion }}</p>
                    </div>
                </v-timeline-item>
                <v-timeline-item color="green" small>
                    <div>
                        <p class="font-weight-normal">
                            Cupos:
                        <strong>{{ curso.cupos }}</strong> 
                        </p>
                        <p>Completado: {{ curso.terminado }}</p>
                    </div>
                </v-timeline-item>
                <v-timeline-item color="purple" small>
                    <div>
                        <p class="font-weight-normal">
                            Fecha de Registro:<br>
                        {{ curso.creado }}
                        </p>
                    </div>
                </v-timeline-item>
                <v-timeline-item color="green" small>
                    <div>
                        <p class="font-weight-normal">
                            Descripción:<br>
                        {{ curso.descripcion }}
                        </p>
                    </div>
                </v-timeline-item>
                
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "cursos-view",
  // props: ['cursos'],
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["cursos"]),
  },
  methods: {
    ...mapActions(["fetchCursos"]),
  },
  // watch: {},
  components: {
    card: Card,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchCursos();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>