<script>
  export default {
  data() {
	  return {
    	SAQuestion1: 'What is the Northern most country in South America?'
  	}
  }
},
 
    created(){
      //On Component created
    },
 
    methods: {
      functionExample(){
        //Basic Component method
      }
    }
  }
</script>
<template>
  <div id='SA'>
   {{SAQuestion1}}
  </div>
</template>
