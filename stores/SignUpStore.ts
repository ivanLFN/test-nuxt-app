import { defineStore } from 'pinia'

interface SignUpFormState {
  username: string
  email: string
  password: string
}

export const useSignUpFormStore = defineStore('SignUpStore', {
  state: (): { signUpForm: SignUpFormState } => ({
    signUpForm: {
      username: 'emilys',
      email: 'emilys@yandex.com',
      password: 'emilyspass'
    }
  }),
  actions: {
    setSignUpFormData(username: string, email: string, password: string) {
      this.signUpForm.username = username
      this.signUpForm.email = email
      this.signUpForm.password = password
    },
    resetPassword() {
      this.signUpForm.password = ''
    }
  }
})