<template>
    
    <div>
        
        <h1>Olá vue</h1>
        <p>Meu nome é {{ name }} e vou trabalhar como {{ job }}</p>
    
    </div>   

</template>

<script>

    export default {
        name: 'FirstComponent',
        data() {
            return {
                name: "Ian",
                job: "programador"
            }
        }
    }

</script>