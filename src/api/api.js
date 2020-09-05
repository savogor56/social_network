import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '2ae6c6ef-750a-4f6e-8e84-8c2e03bc5e97'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
  async getUsers (currentPage = 1, pageSize = 5) {
    const response = await instance.get(`users?count=${pageSize}&page=${currentPage}`);
    return response.data;
  },
  async follow(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  async unfollow(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  }
}

export const profileAPI = {
  async getProfile (userId = 2) {
    const response = await instance.get(`profile/${userId}`);
    return response.data
  },  
  async getProfileStatus (userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  async putProfileStatus (profileStatus) {
    const response = await instance.put('profile/status', {status: profileStatus});
    return response.data;
  },
  async saveAvatar (file) {
    let formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    const response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },
  async saveProfile(profileInfo) {
    const response = await instance.put('profile', profileInfo);
    return response.data;
  }
}

export const authAPI = {
  getCurrentUserData () {
    return instance.get('auth/me');    
  },
  authLogin (email, password, rememberMe) {
    return instance
      .post('auth/login', {
        email,
        password,
        rememberMe
      })
  },
  LogOut () {
    return instance.delete('auth/login')
  }
}
