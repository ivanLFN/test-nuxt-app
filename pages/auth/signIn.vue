<template>
  <div class="flex h-full">
    <section class="flex-1 flex justify-center items-center">
      <div class="form-class row items-center justify-center">
        <h1 class="form-header">
          Login to your Account
        </h1>
        <div class="flex items-center justify-center mt-4">
          <hr class="header-line">
          <span class="mx-14 sub-text">with email</span>
          <hr class="header-line">
        </div>
        <div class="flex justify-center mt-8">
          <form @submit.prevent="handleSubmit" class="row justify-center">
            <FormInput
              id="email"
              type="text"
              v-model="email"
              placeholder="Email"
              icon="/images/envelope.png"
            />
            <FormInput
              class="mt-3"
              id="password"
              type="password"
              v-model="password"
              placeholder="Password"
              icon="/images/shield-slash.png"
            />
            <button :disabled="!isFormValid" type="submit" class="classic-btn w-full mt-8">LOG IN</button>
            <div class="text-center mt-6">
              <p class="sub-text">Don’t have account? <NuxtLink to="/auth/signUp" class="sub-text-blue">Create an account</NuxtLink></p>
            </div>
          </form>
        </div>
      </div>
    </section>  
    <section class="flex-1 picture-section">
      <RightSection
        movingPictureURL="/images/login-picture.png"
        textInfo="Connect with any device."
        textInfoSmall="Everything you need is an internet connection."
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import RightSection from '~/components/rightSection.vue'
import FormInput from '~/components/formInput.vue'

definePageMeta({
  layout: 'auth'
})

const email = ref('')
const password = ref('')

const isFormValid = computed(() => email.value.trim() !== '' && password.value.trim() !== '')

const handleSubmit = async () => {
  if (isFormValid.value) {
    const formData = {
      username: email.value,
      password: password.value
    }

    try {
      const responseData = await $fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log(responseData)

    } catch (error) {
      console.error('Error during login:', error)
    }
  }
}

</script>
