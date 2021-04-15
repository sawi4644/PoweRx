import axios from 'axios'

export default {
  getFormData: function () {
    return axios('/api/form')

  },

  saveFormData: function (data) {
    return axios.post('/api/form',data)

  },

  GetHeaderInput: function () {
      return axios('/api/header')
  },

  SavedHeaderInput: function () {
      return axios.post('/api/header', data)
  }

}

