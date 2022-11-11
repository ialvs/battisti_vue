<template>
    <div>
        <button @click="$emit(onChangeImage)">Trocar imagem do perfil</button>
    </div>
</template>

<script>

export default{
    name: 'ChangeImage',
    emits: ['onChangeImage']
}

</script>