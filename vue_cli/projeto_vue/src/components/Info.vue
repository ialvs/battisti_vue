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

        <p v-show="showEmail">Mande uma mensage para {{ email }}</p>

    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            hasJob: false,
            showEmail: true,
            email: "ian@whatever.com"
        }
    }
}
</script>