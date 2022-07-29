<template>
    <v-container>
        <v-row justify="center">
			<v-col cols="12" sm="10" md="8">
				<h2>Registrarse</h2>
				<v-form ref="form" v-model="valid" lazy-validation>
					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="Correo"
						required
					></v-text-field>

					<v-text-field
						v-model="pass"
						:rules="passRules"
						label="Contraseña"
						required
						type="password"
					></v-text-field>

					<v-btn
						:disabled="!valid"
						color="success"
						class="mr-4"
						@click="registrar"
					><v-icon>mdi-account-check</v-icon>
						Registrar
					</v-btn>

					<v-btn color="error" class="mr-4" @click="reset">
                        <v-icon>mdi-cancel</v-icon>
						Limpiar
					</v-btn>
                    <v-btn color="primary" class="mr-4" to="/login">
                    <v-icon>mdi-account-cancel</v-icon>
						Cancelar
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
    </v-container>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'register-view',
    // props: {},
    data: function(){
        return {
            valid: true,
			pass: '',
			passRules: [
				(v) => !!v || 'Contraseña es requerido',
				(v) => (v && v.length <= 8) || 'Contraseña debe tener al menos 8 caracteres',
			],
			email: '',
			emailRules: [
				(v) => !!v || 'Correo es requerido',
				(v) => /.+@.+\..+/.test(v) || 'Correo debe ser valido',
			],
        }
    },
    // computed: {},
    methods: {
        validate() {
			this.$refs.form.validate()
		},
		reset() {
			this.$refs.form.reset()
		},
        async registrar() {
            this.validate()
            if(this.valid==false) return //escapar de la funcion

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                this.$router.push('/login')
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

        },

    }
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