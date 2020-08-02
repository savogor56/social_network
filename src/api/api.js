import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '71277624-366b-44c3-9b0d-ea30c08cd01d'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 5, toggleIsFetching, isFetching) {
    if (!isFetching) {
      toggleIsFetching(isFetching);
    }    
    return instance
          .get(`users?count=${pageSize}&page=${currentPage}`)
          .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile (userId = 2) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  getCurrentUserData () {
    return instance
      .get('auth/me')
      .then(response => response.data)
  }
}

export const followAPI = {
  follow (userId) {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow (userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data)
  }
}