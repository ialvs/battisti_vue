<template>
    <div>
        <p>O nome é {{ name }}</p>   
        <Info :email="email" />
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
            name: "Ian",
            email: "ian@gmail.com"
        }
    },
    components: { Info, FormP }
}

</script>