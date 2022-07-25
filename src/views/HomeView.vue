<template>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home-component',

    components: {
      'hello-world':HelloWorld,
    },
  }
</script>
