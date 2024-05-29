<template>
  <div class="p-8">
    <FormInput
      icon="images/envelope.png"
      v-model="formData.email"
      id="email"
      type="email"
      placeholder="Email"
    />
  </div>
</template>

<script setup lang="ts">
import FormInput from '~/components/FormInput.vue'

interface FormData {
  email: string;
}

const formData = ref<FormData>({
  email: ''
});

</script>
