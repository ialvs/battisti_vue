
<template>
    <a :href="link"><img :src="avatar" :alt="description" :ref="link"></a>
</template>

<script>

export default {
    name: 'MyPicture',
    data() {
        return {
            avatar : "/img/IMG_20220827_181848_8558.jpg",
            description: "Ian Aves",
            link: "https://github.com/ialvs"
            }
        }
    }


</script>