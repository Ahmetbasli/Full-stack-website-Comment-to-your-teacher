import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teachers: [],
    teacher: {},
  },
  mutations: {
    SET_TEACHERS(state, data) { state.teachers = data },
    SET_TEACHERBYID(state, data) { state.teacher = data }
  },
  actions: {
    async fetchTeachers({ commit }, ) {
      const response = await axios.get('http://localhost:3000/post/all/json') 
      commit('SET_TEACHERS', response.data)
    },
    async fetchTeacherById({ commit }, id) {
      
      const response = await axios.get(`http://localhost:3000/post/${id}`) 
      commit('SET_TEACHERBYID', response.data)
    },

    
},
  modules: {
  }
})
