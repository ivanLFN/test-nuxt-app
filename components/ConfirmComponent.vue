<template>
  <div class="row">
    <div class="confirm-class">Do you want to lose your completed data?</div>
    <div class="flex justify-start mt-5">
      <button class="cancel-btn me-5 px-10" @click="cancel">Cancel</button>
      <button class="confirm-btn px-10" @click="confirm">Accept</button>
    </div>
  </div>
  </template>
  
<script setup lang="ts">

const emits = defineEmits(['confirmed', 'canceled'])

const confirm = () => {
  emits('confirmed')
}

const cancel = () => {
  emits('canceled')
}
</script>
