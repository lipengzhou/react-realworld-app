import request from '../utils/request'

export const login = data => {
  return request.post('/api/users/login', data)
}

export const register = data => {
  return request.post('/api/users', data)
}
