<template>
<v-app>

  <div class="Teacher">
    <div>
  
    <TeacherInfo :teacher="teacher"/> 
    <TeacherAddComment :id="id" />
    <TeacherComments :commentsInfo="teacher.commenters" /> 
  
    </div>
   
 
  </div>
</v-app>

</template>

<script>
// @ is an alias to /src

import TeacherInfo from '@/components/Teacher-Info.vue'
import TeacherComments from '@/components/Teacher-Comments.vue'
import TeacherAddComment from '@/components/Teacher-Add-Comment.vue'
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Teacher',
  props: {
    id: String,
  },
  components: {
    TeacherInfo,
    TeacherComments,
    TeacherAddComment,
   
  },
  computed: {
    ...mapState(['teachers','teacher'])
  },
  methods: {
    ...mapActions(['fetchTeachers','fetchTeacherById'])
  },
  created() {
    
    this.fetchTeachers()
    this.fetchTeacherById(this.id) 
  },

    
  


}

</script>