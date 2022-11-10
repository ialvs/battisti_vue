<script>
export default{
    name: 'MultiEvent',
    data(){
        return {
            multi_event1: '',
            multi_event2: ''
        }
    },
    methods: {
        first(e){
            this.multi_event1 = "Primeiro evento ativado!"
        },
        second(e){
            setTimeout(
                () => this.multi_event2 = 'Segundo evento!', 500
            )
        }
    }
}
</script>


<template>
    <div>
        <button @click="first($event),second($event)">Ativar múltiplos eventos</button>
        <p>{{multi_event1}}</p>
        <p>{{multi_event2}}</p>
    </div>
</template>

<style scoped>

div{
    margin: 100px;
}

</style>