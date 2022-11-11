<template>
    <div>
        <p>{{compEmail}}</p>
        <p v-if="hasJob">Estou trabalhando no momento :).</p>
        <p v-else>Busco emprego.</p>

        <p>Utilizo as seguintes tecnologias para backend</p>

        <ul>
            <li v-for="(tech, index) in backendTechs" v-bind:key="index">{{tech}}</li>
            <li>Testteee</li>
        </ul>

        <p>Utilizo as seguintes tecnologias para frontend</p>
        <ul>
            <li v-for="frame in frontendTechs" :key="frame.id">
                {{frame.framework}}
            </li>
        </ul>
        
        <div>
            <button @click="showMail">{{buttonText}}</button>
        </div>

        <p v-show="showEmail">Mande uma mensage para {{ email }}</p>
        <p class="scopedTest">Para acessar meu portfólio <a v-bind:href="my_link">basta clicar aqui</a></p>

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
            my_link: "https://google.com",
            buttonText: "Mostrar o email",
            backendTechs: ["Java","Python","JavaScript"],
            frontendTechs: [
                {id: 1, framework: "Vue"},
                {id: 2, framework: "Next"},
                {id: 3, framework: "Angular"}
            ]

            
        }
    }, props: {
        email: String
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

<style>

parent-paragraph {
    color: red;
}

</style>