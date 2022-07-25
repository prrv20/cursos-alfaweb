<template>
    <div class="notfound">
        <h1>La pagina que buscas no existe</h1>
        <img src="@/assets/img/notfound.png" alt="img">
        <router-link to="/">ir a inicio</router-link>
    </div>
</template>

<script>
export default {
    name: 'notfound-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .notfound{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        height: 25rem;
        margin: 2em;
        width: 60vw;
    }
</style>