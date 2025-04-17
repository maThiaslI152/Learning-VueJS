<script setup>
  import {ref} from "vue";

  let email = ref('')
  let password = ref('')
  let role = ref('web developer')
  let terms = ref(false)
  let tempSkill = ref('')
  let skills = ref([])
  let passwordError = ref('')

  function addSkill(e) {
    if (e.key === ',' && tempSkill.value.trim() !== '') {
      const skill = tempSkill.value.trim().replace(',', '')
      if (!skills.value.includes(skill)) {
        skills.value.push(skill)
      }
      tempSkill.value = ''
    }
  }
  function deleteSkill(skill) {
    skills.value = skills.value.filter((item) => {
      return skill !== item
    })
  }
  function handleSubmit() {
    //validate password
    passwordError.value = password.value.length > 5 ?
        '' : 'Password must be at least 6 characters'

    if(!passwordError.value) {
      console.log('email: ', email.value)
      console.log('password: ', password.value)
      console.log('role: ', role.value)
      console.log('skills: ', skills.value)
      console.log('terms: ', terms.value)
    }
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" placeholder="example@mail.com">
    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{passwordError}}</div>
    <label>Role:</label>
    <select v-model="role">
      <option value="web developer">Web Developer</option>
      <option value="web designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" :key='skill' class="pill">
      <span @click="deleteSkill(skill)">{{skill}}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept Terms and condition</label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>

  </form>

  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Accept Terms: {{terms}}</p>
</template>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.submit {
  text-align: center;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 10px;
}
</style>