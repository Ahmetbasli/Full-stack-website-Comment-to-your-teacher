<template>
<v-app>
<!--Header-->
<h1 class="header">Rate Your Teacher</h1>
<!--Header-->

  <div>
    <Search :teachers="teachers"/>  

  </div>
</v-app>
</template>

<script>
import Search from '@/components/Search.vue'
import {  mapActions, mapState } from 'vuex'


export default {
components: {
  Search

},
computed: {
    ...mapState(['teachers']),
},
 methods: {
    ...mapActions(['fetchTeachers'])
  },
  created() {
    this.fetchTeachers()
  },


}


</script>

<style>
.header{

  height: 220px;
  font-family: Georgia, sans-serif;
  font-size: 5em;
  letter-spacing: -2px;
}
</style>