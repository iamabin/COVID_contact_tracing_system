<template>
  <div>

    <Header />

    <v-main>
      <HelloWorld />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/Header.vue'
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld
  }
}
</script>
