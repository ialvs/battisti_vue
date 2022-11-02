<template>
    <h1>Meu nome é: {{ name }}</h1>
</template>

<script>
    
    export default{
        name: 'LifeCycle',
        
        data(){
            return {
                name: 'TBA'
            }
        },

    created() {
            
        this.name = 'IAN'
        
    },

    mounted(){
        
        this.name = "Predo"

    }
}

</script>