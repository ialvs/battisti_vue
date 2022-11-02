<template>
    <div>
        <form>
            <InputText />
            <InputText />
            <Submit />
        </form>
    </div>
</template>

<script>
import InputText from './InputText.vue';
import Submit from './Submit.vue';

export default {
    name: "FormP",
    components: { InputText, Submit }
}
</script>