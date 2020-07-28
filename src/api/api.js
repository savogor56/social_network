import * as axios from 'axios';

export const getUsers = (currentPage = 1, pageSize = 5) => {
  const url = `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`;
  return axios.get(url, {
          withCredentials: true
        })
}

// export const 