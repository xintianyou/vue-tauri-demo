import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', {
  state: () => ({
    token: '1112222'
  }),
  actions: {
    setToken(token) {
      this.token = token
      setToken(token)
    }
  }
})