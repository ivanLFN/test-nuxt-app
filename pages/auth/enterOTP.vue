<template>
  <div class="flex h-full">
    <section class="flex-1 flex justify-center items-center">
      <div class="form-class w-full row items-center">
        <h1 class="form-header">
          Enter OTP
        </h1>
        <div>
          <p class="sub-text-create">Sent OTP on <span class="otp-sub-header">{{ signUpForm.email }}</span></p>
          <p class="cursor-pointer mt-3 change-email" @click="changeEmail">Change email</p>
        </div>
        <div class="flex justify-center mt-8">
          <form @submit.prevent="handleSubmit" class="row justify-center">
            <div class="flex justify-center items-center space-x-4">
              <input v-model="otp1" placeholder="-" type="text" maxlength="1" id="otp1" class="otp-input" />
              <input v-model="otp2" placeholder="-" type="text" maxlength="1" id="otp2" class="otp-input" />
              <input v-model="otp3" placeholder="-" type="text" maxlength="1" id="otp3" class="otp-input" />
              <input v-model="otp4" placeholder="-" type="text" maxlength="1" id="otp4" class="otp-input" />
              <input v-model="otp5" placeholder="-" type="text" maxlength="1" id="otp5" class="otp-input" />
              <input v-model="otp6" placeholder="-" type="text" maxlength="1" id="otp6" class="otp-input" />
            </div>
            <button :disabled="!isFormValid" type="submit" class="classic-btn w-full mt-8">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
    <section class="flex-1 picture-section">
      <RightSection
        movingPictureURL="/images/otp-picture.png"
        textInfo="It's just OTP verification"
        textInfoSmall="You are one step away from recovering your password."
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import RightSection from '~/components/rightSection.vue'
import { useSignUpFormStore } from '~/stores/SignUpStore'
import { watch, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const signUpFormStore = useSignUpFormStore()

const signUpForm = signUpFormStore.signUpForm

watch(() => signUpFormStore.signUpForm, (newSignUpForm) => {
  signUpForm.username = newSignUpForm.username
  signUpForm.email = newSignUpForm.email
  signUpForm.password = newSignUpForm.password
})

const changeEmail = () => {
  signUpFormStore.resetPassword()
  router.push('/auth/signUp')
}

const otp1 = ref('')
const otp2 = ref('')
const otp3 = ref('')
const otp4 = ref('')
const otp5 = ref('')
const otp6 = ref('')

const isFormValid = computed(() =>
  otp1.value.trim() !== '' &&
  otp2.value.trim() !== '' &&
  otp3.value.trim() !== '' && 
  otp4.value.trim() !== '' &&
  otp5.value.trim() !== '' && 
  otp6.value.trim() !== ''
)

const handleSubmit = async () => {
  if (isFormValid.value) {
    const formData = {
      username: signUpForm.username,
      password: signUpForm.password,
      email: signUpForm.email,
      code: `${otp1.value + otp2.value + otp3.value + otp4.value + otp5.value + otp6.value}`
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

definePageMeta({
  layout: 'auth'
})


</script>
