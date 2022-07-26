<template>
    <v-container>
        
        <admin></admin>
    </v-container>
</template>

<script>
import Administracion from '@/components/Administracion.vue'
export default {
    name: 'admin-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'admin':Administracion
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>