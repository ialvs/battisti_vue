
<template>
    <img :src="avatar" :alt="description" :ref="link">
    <ChangeImage @on-change-image="switchImage" />
</template>

<script>
import ChangeImage from './ChangeImage.vue';


export default {
    name: "MyPicture",
    data() {
        return {
            avatar: "/img/IMG_20220827_181848_8558.jpg",
            description: "Ian Aves",
            link: "https://github.com/ialvs"
        };
    },
    methods: {
      switchImage(){
        this.avatar = "/img/avatar2.png"
      }  
    },
    components: { ChangeImage }
}


</script>