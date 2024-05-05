<template>
  <div class="s mx-auto py-s12">
    <div
      v-for="(talent, index) in talents"
      :key="index"
      class="flex flex-col md:flex-row items-center bg-white my-2 rounded-lg shadow-slg overflow-hidden"
    >
      <UserListItem />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import UserListItem from './UserListItem.vue'

const talents = ref([
  {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    skills: 'JavaScript, Vue.js, HTML, CSS',
    location: 'Paris, France',
    experience: '5 ans'
  },
  {
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    skills: 'Python, Django, Flask, SQL',
    location: 'New York, USA',
    experience: '3 ans'
  }
  // Add more talentss as needed
])
</script>
<style lang=""></style>
