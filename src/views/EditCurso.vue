<template>
<v-container>
    <h1>Editando el Curso: </h1>
    <v-row justify="center">

        <v-col cols="10" text-center>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
            v-model="form.nombre_curso"
            :rules="textRules"
            label="Nombre"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.url_imagen"
            :rules="textRules"
            label="Url de la Imagen del Curso"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.cupos"
            :rules="numberRules"
            label="Cupos del Curso"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.inscritos"
            :rules="numberRules"
            label="Inscritos en el Curso"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.duracion"
            :rules="textRules"
            label="Duración del Curso"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.costo"
            :rules="numberRules"
            label="Costo del Curso"
            required
            ></v-text-field>
            <v-text-field
            v-model="form.codigo"
            :rules="textRules"
            label="Código del Curso"
            required
            ></v-text-field>
            <v-textarea
            v-model="form.descripcion"
            :rules="textRules"
            solo
            label="Descripción del Curso"
            required
            ></v-textarea>
            <v-text-field
            v-model="form.creado"
            :rules="textRules"
            label="Fecha de Registro"
            required
            ></v-text-field>
            <v-switch
            v-model="form.terminado"
            flat
            :label="`Terminado: ${form.terminado ? 'Si' : 'No'}` "
            ></v-switch>
            <v-btn depressed color="success" @click="editCurso" class="mr-2">
              <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
              Actualizar
            </v-btn>
            <v-btn depressed dark color="cyan" to="/admin">
              <v-icon dark left>mdi-arrow-left</v-icon>
              Regresar
            </v-btn>
        </v-form>
        </v-col>
  </v-row>
</v-container>
    
</template>

<script>
import { db } from '@/firebase/firebase.js'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
export default {
    name: 'edit-view',
    props: ['idCurso'],
    data: function(){
        return {
            valid: true,
            form:{
                codigo: '',
                costo: '',
                creado: '',
                cupos: '',
                descripcion: '',
                duracion: '',
                inscritos: '',
                nombre_curso: '',
                terminado: false,
                url_imagen: ''
            },
            textRules: [
                v => !!v || 'Campo Requerido',
            ],
            numberRules:[
                v => !!v || 'Campo requerido', 
                v => /^[0-9]+$/.test(v) || 'Ingresa un Número válido',
            ]
        }
        
    },
    // computed: {},
    methods: {
        async fetchCursoById(){
            const docRef = doc(db, 'cursos', this.idCurso)
            let response = await getDoc(docRef)
            this.form = response.data()
        },
        async editCurso(){
            this.$refs.form.validate()
            if(!this.valid) return

            try {
                let curso = this.form
                curso.id = this.idCurso
                await updateDoc(doc(db, 'cursos', curso.id), curso)
                this.$router.push('/cursos')
            } catch (error) {
                console.log(error)
            }

        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchCursoById()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>