<template>
    <div>
        <form action="" @submit="sendForm($event)">
            <input type="text" v-model="name">
            <input type="text" v-model="email">
            <Submit />
        </form>
    </div>
</template>

<script>
import InputText from './InputText.vue';
import Submit from './Submit.vue';

export default {
    name: "FormP",
    components: { InputText, Submit },
    data(){
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        sendForm(e){
            e.preventDefault()

            const name = this.name
            const email = this. email
            console.log("Success!")
            console.log("O nome é:" + name)
            console.log("O email é:" + email)
            this.name = ''
            this.email = ''
        }
    }
}
</script>