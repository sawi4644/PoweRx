import axios from 'axios'
// import token from '../contexts/AuthContext'


export default {
  getFormData: async function () {
    return await axios.get('/api/rxForms')
  },
  saveFormData: async function (data, headers) {
    return await axios.post('/api/rxForms', data, headers)
  },

  getHistory: async function () {
    return await axios.get('/api/rxForms')
  },

}





