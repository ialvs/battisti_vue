
<template>
    <img :src="avatar" :alt="description">
</template>

<script>

export default {
    name: 'MyPicture',
    data() {
        return {
            avatar : "/img/IMG_20220827_181848_8558.jpg",
            description: "Ian Aves"
            }
        }
    }


</script>