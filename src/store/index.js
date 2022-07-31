import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos:[],
    email:''
  },
  getters: {
    totalCursos(state){
      return state.cursos.length
    },
    totalCupos(state){
      return state.cursos.reduce((totalCup, cur) =>{
        return totalCup + Number(cur.cupos)
      },0)
    },
    totalInscritos(state){
      return state.cursos.reduce((totalInsc, cur) =>{
        return totalInsc + Number(cur.inscritos)
      },0)
    },
    cursosActivos(state){
      let activos = 0
      state.cursos.forEach(c=>{
        if(c.terminado == false){
          activos ++
        }
      })
      return activos
    },
    cursosTerminados(state){
      let terminados = 0
      state.cursos.forEach(c=>{
        if(c.terminado){
          terminados ++
        }
      })
      return terminados
    },
    
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
    }, 
    SET_EMAIL(state, email){
      state.email = email
    }

  },
  actions: {
    async fetchCursos({ commit }){
      let querySnapShot = await getDocs(collection(db, 'cursos'))
      commit('RESET_CURSO')
      querySnapShot.forEach((doc) => {
        commit('ADD_CURSO', doc)
      })
    },
    setEmail({commit}, email){
      commit('SET_EMAIL', email)
    }
    

  },
  modules: {
  }
})
