import { defineStore } from 'pinia'

export const useSignInFormStore = defineStore('signInFormStore', {
  state: () => ({
    email: '',
    password: ''
  }),
  actions: {
    setEmail(email: string) {
      this.email = email
    },
    setPassword(password: string) {
      this.password = password
    },
    resetForm() {
      this.email = ''
      this.password = ''
    }
  }
})