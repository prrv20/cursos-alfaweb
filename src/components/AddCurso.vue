<template>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Agregar Curso
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregando Curso</span>
          <v-spacer></v-spacer>
          <v-icon class="me-2" @click="dialog = false">mdi-window-close</v-icon>
        </v-card-title>
        
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
            <v-btn depressed color="success" @click="guardar">
              <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
              Agregar
            </v-btn>
            <v-btn depressed dark color="orange darken-2" @click="reset">
              <v-icon dark left>mdi-minus-circle</v-icon>
              Borrar
            </v-btn>
        </v-form>
          <small>*indicates required field</small>
        </v-col>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { db } from '@/firebase/firebase.js'
import { collection, addDoc } from 'firebase/firestore'
export default {
    name: 'add-component',
   props: ['getFecha'],
    data: function(){
        return {
            dialog: false,
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
        async guardar () {
            //this.$refs.form.validate()//validar Formulario
            if(!this.$refs.form.validate()) return //escapamos si no es valido el Formulario
            try {
                this.form.creado = this.getFecha
                let response = await addDoc(collection(db, 'cursos'), this.form)
                console.log(response)

                //this.$router.push('/admin')
            
            } catch (error) {
                console.log(error)
            }
            this.dialog = false
        },
        reset () {
        this.$refs.form.reset()
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