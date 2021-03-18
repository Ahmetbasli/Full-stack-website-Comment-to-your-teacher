<template >

    <div  >
        <h1  class="container" v-if="teacher.name"> 
           <h2 class="teacherName"> {{teacher.name}} </h2> 
            <h2 class="insideTeacherInfo">
                 <p  class="academic">Academic in  {{teacher.facultyName}} faculty at {{teacher.universityName}} University </p>
                 
            </h2>
        </h1>
    </div>
      
</template>

<script>


export default {
    name: 'TeacherInfo',
    props: {
        teacher: Object,
        teachers: Array,
        
    }
}


</script>

<style scoped>
.container {
  
    
    text-align: left;
    
  
   

}
.teacherName {
    padding-top:10px ;
    font-size: 50px;
    font-family: Georgia, sans-serif;
    color: #273746;
}
.insideTeacherInfo{
    font-size: 20px;

}

</style>