<template>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import { mapActions, mapState } from 'vuex' 

  export default {
    name: 'Home-component',

    components: {
      'hello-world':HelloWorld,
    },
    computed:{
      ...mapState(['cursos'])
    },
    methods:{
      ...mapActions(['fetchCursos'])
    },
    created(){
      this.fetchCursos()
    }
  }
</script>
