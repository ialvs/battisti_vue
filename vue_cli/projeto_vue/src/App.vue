<template>

  <div>

    <MyHeader />
    <FirstComponent />
    <p class="parent-paragraph">O dado de app é: {{testing}}</p>
    <LifeCycle />
    <Person />
  
  </div>

</template>

<script>

import FirstComponent from './components/FirstComponent.vue'
import Form from './components/Form/FormP.vue';
import MyHeader from './components/MyHeader.vue';
import LifeCycle from './components/LifeCycle.vue';
import Person from './components/Person.vue';


export default {

  name: "App",
  components: {
    FirstComponent,
    LifeCycle,
    Form,
    Person,
    MyHeader,
},

  data() {
    return {
      testing: "teste"
    }
  }

};

</script>

<style>

body {
  background-color: #333;
  color: #FFF;
}

a {
  color: red;
}

.scopedTest {
  background-color: black;
}

</style>
