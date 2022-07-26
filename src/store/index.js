import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos:[]
  },
  getters: {
  },
  mutations: {
    ADD_CURSO(state, curso){
      state.cursos.push({
        id : curso.id,
        codigo: curso.data().codigo,
        costo: curso.data().costo,
        creado: curso.data().creado,
        cupos: curso.data().cupos,
        descripcion: curso.data().descripcion,
        duracion: curso.data().duracion,
        inscritos: curso.data().inscritos,
        nombre_curso: curso.data().nombre_curso,
        terminado: curso.data().terminado,
        url_imagen: curso.data().url_imagen
      })
    },
    RESET_CURSO(state){
      state.cursos = []
    }

  },
  actions: {
    async fetchCursos({ commit }){
      let querySnapShot = await getDocs(collection(db, 'cursos'))
      commit('RESET_CURSO')
      querySnapShot.forEach((doc) => {
        console.log(doc.id)
        commit('ADD_CURSO', doc)
      })
    }

  },
  modules: {
  }
})
