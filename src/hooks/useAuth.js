import useSWR from 'swr'

import { authAPI } from '@/api'

export function useAuth(options) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  })

  console.log({ profile, error })

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authAPI.login({
      USERNAME: 'kiet.lta',
      PASSWORD: '123123',
    })
    await mutate()
  }

  async function logout() {
    await authAPI.logout()
    mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
