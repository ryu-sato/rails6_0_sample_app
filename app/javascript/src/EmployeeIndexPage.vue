<template>
  <div id="app">
    <table class="table table-striped table-bordered">
      <tbody>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>department</th>
          <th>gender</th>
          <th>actions</th>
        </tr>
        <tr v-for="e in employees" :key="e.id">
          <td><router-link :to="{ name: 'EmployeeDetailPage', params: { id: e.id } }">{{ e.id }}</router-link></td>
          <td>{{ e.name }}</td>
          <td>{{ e.department }}</td>
          <td>{{ e.gender }}</td>
          <td>
            <router-link :to="{ name: 'EmployeeEditPage', params: { id: e.id } }">Edit</router-link>
            <button class="btn btn-outline-danger" @click="deleteTarget = e.id; showModal = true">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
        <router-link :to="{ name: 'EmployeeNewPage' }">New</router-link>
    </div>
    <modal v-if="showModal" @cancel="showModal = false" @ok="deleteEmployee(); showModal = false;">
      <div slot="body">Are you sure?</div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';

import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data: function () {
    return {
      employees: [],
      showModal: false,
      deleteTarget: -1,
      errors: ''
    }
  },
  mounted () {
    this.updateEmployees();
  },
  methods: {
    deleteEmployee: function() {
      if (this.deleteTarget <= 0) {
        console.warn('deleteTarget should be grater than zero.');
        return;
      }

      axios
        .delete(`/api/v1/employees/${this.deleteTarget}`)
        .then(response => {
          this.deleteTarget = -1;
          this.updateEmployees();
        })
        .catch(error => {
          console.error(error);
          if (error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
        });
    },
    updateEmployees: function() {
      axios
        .get('/api/v1/employees.json')
        .then(response => (this.employees = response.data))
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
