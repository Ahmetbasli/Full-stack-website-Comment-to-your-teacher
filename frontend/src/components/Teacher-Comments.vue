<template>

    <div>
        
  
        <div v-for="commentInfo in commentsInfo" :key="commentInfo._id" >
            <h5>  </h5>
           <h3 class="comment"> {{commentInfo.comment}} </h3>
        <br>
            
    
        </div>   
    </div>   
</template> 

<script>



export default {
    //commentsInfo contains an array 
    //its elements are like {person:..., comment:...}
    id:'TeacherComments',
    props: {
        commentsInfo: Array,
    }
 
    
}
</script>




<style>
.comment{
    
   padding-top: 10px;
    height: 100px;
    width:500px;
    margin: auto;
    border: 2px solid honeydew;
    border-radius: 12px;
    
    background-color:rgb(158, 192, 196);

   /*  rgb(157, 184, 194) */
}

</style>