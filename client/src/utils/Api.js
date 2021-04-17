import axios from 'axios'

export default {
  getFormData: function () {
    return axios('/api/form')

  },

  saveFormData: function (data) {
    return axios.post('/api/rxForms',data)

  },

  GetHeaderInput: function () {
      return axios('/api/header')
  },

  SavedHeaderInput: function (data) {
      return axios.post('/api/rxForms', data)
  }

}