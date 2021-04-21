import axios from 'axios'
// import token from '../contexts/AuthContext'


export default {
  getFormData: async function () {
    await axios.get('/api/rxForms')
  },
  saveFormData: async function (data, headers) {
    await axios.get('/api/rxForms', data, headers)
  },

  getHistory: async function () {
    await axios.get('/api/rxForms')
  },

}





