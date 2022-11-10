<template>

    <div>

        <h1>Olá vue</h1>
        <p>Meu nome é {{ name }} e vou trabalhar como {{ job }}</p>
        <MultiEvent />
        <Recycle />
        <Recycle />
        <Recycle />
        <Recycle />
        <Recycle />

    </div>

</template>

<script>
import MultiEvent from './MultiEvent.vue'
import Recycle from './Recycle.vue'

export default {
    name: 'FirstComponent',
    data() {
        return {
            name: "Ian",
            job: "programador"
        }
    },
    components: {
        MultiEvent,
        Recycle
    }
}

</script>