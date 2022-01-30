<template>
  <div class="grue">
    <p>{{ name }}</p>
    <input ref="el" type="text" placeholder="Name" v-model="name" />
    <div>
      <button @click="submitForm" :disabled="name.length == 0">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
const el = ref();

const submitForm = () => {
  console.log(`Form submitted! Name = ${name.value}`);
};

onMounted(() => {
  el.value.focus();
});
</script>

<style lang="scss">
.grue {
  background: rgb(196, 196, 196);
  padding: 10px;

  input {
    margin: 20px;
    padding: 10px;
  }
}
</style>
