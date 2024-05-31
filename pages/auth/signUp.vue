<template>
  <div class="flex h-full">
    <section v-if="!showConfirmModal" class="flex-1 flex justify-center items-center">
      <div class="form-class row items-center justify-center">
        <h1 class="form-header">
          Create your account
        </h1>
        <div>
          <span class="sub-text-create">Unlock all Features!</span>
        </div>
        <div class="flex justify-center mt-8">
          <form @submit.prevent="handleSubmit" class="row justify-center">
            <FormInput
              id="username"
              type="text"
              v-model="username"
              placeholder="Username"
              icon="/images/person.png"
            />
            <FormInput
              class="mt-3"
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
            <FormInput
              class="mt-3"
              id="confirmPassword"
              type="password"
              v-model="confirmPassword"
              placeholder="Confirm Password"
              icon="/images/shield-slash.png"
            />
            <div class="flex items-center terms mt-3">
              <input type="checkbox" class="terms-checkbox mr-2" v-model="isTermsAccepted">
              Accept&nbsp;<NuxtLink class="terms-link" to="/">terms and conditions</NuxtLink>
            </div>
            <button :disabled="!isFormValid" type="submit" class="classic-btn w-full mt-8">SIGN UP</button>
          </form>
        </div>
        <div class="text-center mt-6">
          <p class="sub-text">You have account? <span href="#" class="sub-text-blue cursor-pointer" @click="checkEnteredData">Login now</span></p>
        </div>
      </div>
    </section>
    <section v-if="showConfirmModal" class="flex-1 flex justify-center items-center">
      <div class="form-class">
        <ConfirmComponent class="row items-center justify-center" @confirmed="confirmNavigation" @canceled="hideModal" />
      </div>
    </section>
    <section class="flex-1 picture-section">
      <RightSection
        movingPictureURL="/images/signUp-picture.png"
        textInfo="Join us!"
        textInfoSmall="Just go through the boring process of creating an account."
      />
    </section>
    
  </div>
</template>
  
<script setup lang="ts">
import RightSection from '~/components/rightSection.vue'
import ConfirmComponent from '~/components/ConfirmComponent.vue'
import { useRouter } from 'vue-router'
import { useSignUpFormStore } from '~/stores/SignUpStore'

const signUpFormStore = useSignUpFormStore()

definePageMeta({
  layout: 'auth'
})

const router = useRouter()
const showConfirmModal = ref(false)

const username = computed({
  get: () => signUpFormStore.signUpForm.username,
  set: (value) => signUpFormStore.signUpForm.username = value
})

const email = computed({
  get: () => signUpFormStore.signUpForm.email,
  set: (value) => signUpFormStore.signUpForm.email = value
})

const password = computed({
  get: () => signUpFormStore.signUpForm.password,
  set: (value) => signUpFormStore.signUpForm.password = value
})

const confirmPassword = ref('')
const isTermsAccepted = ref(false)

const isFormNotEpty = computed(() =>
  username.value.trim() !== '' || 
  email.value.trim() !== '' ||
  password.value.trim() !== '' || 
  confirmPassword.value.trim() !== ''
)

const isFormValid = computed(() => 
  username.value.trim() !== '' && 
  email.value.trim() !== '' && 
  password.value.trim() !== '' && 
  confirmPassword.value.trim() !== '' &&
  password.value === confirmPassword.value &&
  isTermsAccepted.value
)

const checkEnteredData = () => {
  if (isFormNotEpty.value) {
    showModal()
  } else {
    confirmNavigation()
  }
}

const showModal = () => {
  showConfirmModal.value = true
}

const hideModal = () => {
  showConfirmModal.value = false
}

const confirmNavigation = () => {
  hideModal()
  router.push('/auth/signIn')
}

const handleSubmit = async () => {
  if (isFormValid.value) {
    signUpFormStore.setSignUpFormData(username.value, email.value, password.value)
    router.push('/auth/enterOTP')
  }
}

</script>
