<template>
    <div>
        <p>O nome é {{ name }}</p>   
        <Info />
        <FormP />
    </div>
</template>

<script>
import FormP from './Form/FormP.vue'
import Info from './Info.vue'


export default {
    name: "Person",
    data() {
        return {
            name: "Ian"
        }
    },
    components: { Info, FormP }
}

</script>