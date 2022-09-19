<template>
	<div>
		<div v-for="(blogList, i) in blogData" :key="i">
			<h4>{{ blogList.title }}</h4>
			<p>{{ blogList.content }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'List',
	props: {
		blogData: Array,
	},
}
</script>

<style></style>
