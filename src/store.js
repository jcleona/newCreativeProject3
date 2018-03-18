import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user:{}
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
  },
  mutations: {
  	setUsers (state, users) {
      state.users = users;
      console.log('mutated users: ',users);

    },
    setUser (state, user) {
      state.user = user;
      console.log('mutated user: ', user);

    },
  },
  actions: {

 	  getUser(context, user) {
      console.log("in getUser", user);
      axios.get("/api/users/" + user.id).then(response => {
	    context.commit('setUser', response.data);
	    console.log('getUser response.data: ', response.data);
	    return true;
      }).catch(err => {
      });
    },
  	getUsers(context) {
      console.log("getting users");
      axios.get("/api/users").then(response => {
	    context.commit('setUsers', response.data);
	    console.log('getUsers response.data: ', response.data);
	    return true;
      }).catch(err => {
      });
    },
    addUser(context, user) {
      console.log("adding user", user);
      axios.post("/api/users", user).then(response => {
	    context.commit('setUser', response.data);
	    console.log('after addUser post, response.data: ', response.data, response.data.id);
	    let user = response.data;
	    return user;
	    // return context.dispatch('getUsers');
	    // return user.id;
      }).catch(err => {
      });
    },
    updateUser(context, user) {
      axios.put("/api/users/" + user.id, user).then(response => {
	    return context.dispatch('getUsers');
	    // return true;
      }).catch(err => {
      });
    },
    deleteUser(context, user) {
      axios.delete("/api/users/" + user.id).then(response => {
	    return context.dispatch('getUsers');
      }).catch(err => {
      });
    }
  }
});