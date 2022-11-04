<template>
    <div>
        <p v-if="hasJob">Estou trabalhando no momento :).</p>
        <p v-else>Busco emprego.</p>

        <p>Utilizo as seguintes tecnologias:</p>

        <ul>
            <li>Vue</li>
            <li>Java</li>
            <li>Python</li>
        </ul>
        
        <div>
            <button @click="showMail">{{buttonText}}</button>
        </div>

        <p v-show="showEmail">Mande uma mensage para {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="my_link">basta clicar aqui</a></p>

        <MyPicture />
    </div>
</template>

<script>
import MyPicture from './MyPicture.vue';

export default {
    name: "Info",
    data() {
        return {
            hasJob: false,
            showEmail: false,
            email: "ian@whatever.com",
            my_link: "https://google.com",
            buttonText: "Mostrar o email"
        };
    },
    methods: {
        showMail(){ 
            this.showEmail = !this.showEmail
            
            if (!this.showEmail) {
                this.buttonText = "Mostrar o email"
            }else{
                this.buttonText = "Esconder o email"
            }

        }
    },
    components: { MyPicture }
}
</script>