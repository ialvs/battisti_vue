const MyNameApp = {
    data(){
        return{
            name: "",
            age: undefined,
            input_name: "",
            input_age: undefined
        }
    },
    methods: {
        submitFormName(e){
            
            e.preventDefault()
            this.name = this.input_name

        },
        submitFormAge(e){
            
            e.preventDefault()
            this.age = this.input_age

        }
    }
}

Vue.createApp(MyNameApp).mount("#app")