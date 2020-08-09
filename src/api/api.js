import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '2ae6c6ef-750a-4f6e-8e84-8c2e03bc5e97'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 5) {
    return instance
          .get(`users?count=${pageSize}&page=${currentPage}`)
          .then(response => response.data)
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile (userId = 2) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  },  
  getProfileStatus (userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  putProfileStatus (profileStatus) {
    return instance
      .put('profile/status', {status: profileStatus})
      .then(response => response.data)
  }
}

export const authAPI = {
  getCurrentUserData () {
    return instance
      .get('auth/me')
      .then(response => response.data)
  },
  authLogin (email, password, rememberMe) {
    return instance
      .post('auth/login', {
        email,
        password,
        rememberMe
      })
      .then(response => response.data)
  }
}
