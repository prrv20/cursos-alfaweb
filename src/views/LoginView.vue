<template>
    <v-container>
        <v-row justify="center">
			<v-col cols="12" sm="10" md="8">
				<h2>Login de Usuario</h2>
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
						@click="login"
					>
                    <v-icon>mdi-account-check</v-icon>
						Ingresar
					</v-btn>

					<v-btn color="error" class="mr-4" @click="reset">
                         <v-icon>mdi-cancel</v-icon>
						Limpiar
					</v-btn>
                    <v-btn color="primary" class="mr-4" to="/register">
                    <v-icon>mdi-account-plus</v-icon>
						Registrarse
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
    </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'login-view',
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
        login() {
            this.validate()
            if(this.valid==false) return //escapar de la funcion

			const auth = getAuth()
			signInWithEmailAndPassword(auth, this.email, this.pass)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user
                    console.log('Usuario del Login',user)
                    this.$router.push('/')
					// ...
				})
				.catch((error) => {
					//const errorCode = error.code
					const errorMessage = error.message
                    alert(errorMessage)

				})
		},
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
	created(){
		this.getEmail()
	}
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>