import axios from 'axios'

export default {
  getFormData: function () {
    return axios('/api/rxForms')
  },
  saveFormData: function (data) {
    return axios.post('/api/rxForms',data)
  }
}