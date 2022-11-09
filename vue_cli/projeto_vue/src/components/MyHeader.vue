<script>

export default {
    
    name: 'MyHeader'

}

</script>

<template>

<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contatos</a></li>
</ul>

</template>



<style scoped>

ul {
    list-style: none;
    display: flex;
    background-color: #CCC;
}

li {
    margin-right: 10px;
}

a {
    color: #000;
    text-decoration: none;
    transition: .5s;
}

a:hover {
    color: turquoise;
}


</style>