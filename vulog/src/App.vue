<template>
	<div>
		<!-- <List :blogData="blogData" /> -->
		<router-link to="/">Main</router-link>
		<router-link to="/list">go to List</router-link>
		<router-view :blogData="blogData"> </router-view>
	</div>
</template>

<script>
import blogData from './assets/data.js'
// import List from './components/List.vue'

export default {
	name: 'App',
	data() {
		return {
			blogData: blogData,
		}
	},
	components: {
		// List,
	},
}
</script>

<style></style>
