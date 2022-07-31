<template>
  <div>
    <h2 class="text-center my-3">Lista de Cursos</h2>
    <v-container>
      <v-row justify="center">
        <v-col class="pa-2" cols="12" sm="6" md="4" v-for="curso in cursos" :key="curso.id">
          <card :curso="curso"></card>
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
    'card': Card,
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