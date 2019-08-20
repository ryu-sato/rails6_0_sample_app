<template>
  <form @submit.prevent="$emit('submit')">
    <div class="alert alert-danger" role="alert" v-if="errors.length != 0">
      <ul v-for="e in errors" :key="e">
        <li><font color="red">{{ e }}</font></li>
      </ul>
    </div>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" v-model="employee.name" type="text">
    </div>
    <div class="form-group">
      <label>Department</label>
      <input class="form-control" v-model="employee.department" type="text">
    </div>
    <div class="form-group">
      <label>Gender</label>
      <select class="custom-select" v-model="employee.gender">
        <option>other</option>
        <option>male</option>
        <option>female</option>
      </select>
    </div>
    <div class="form-group">
      <label>Birth</label>
      <input class="form-control" v-model="employee.birth" type="date">
    </div>
    <div class="form-group">
      <label>Joined Date</label>
      <input class="form-control" v-model="employee.joined_date" type="date">
    </div>
    <div class="form-group">
      <label>Payment</label>
      <input class="form-control" v-model="employee.payment" type="number" min="0">
    </div>
    <div class="form-group">
      <label>Note</label>
      <input class="form-control" v-model="employee.note" type="text">
    </div>
    <button class="btn btn-primary" type="submit">Commit</button>
  </form>
</template>

<script>
export default {
  props: {
    employee: {},
    errors: ''
  }
}
</script>

<style>
</style>
