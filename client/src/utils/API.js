import axios from 'axios'

export default {
  getFormData: function () {
    return axios('/api/form')
  },
  saveFormData: function (data) {
    return axios.post('/api/form',data)
  }
}