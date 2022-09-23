<template>
	<!-- {{ $route.params.id }} -->
	<div>
		<p>Detail</p>
		<p>{{ blogData[$route.params.id].title }}</p>
		<!-- <p>{{ blogData[0].title }}</p> -->
		<!-- <p>{{ blogData[URL에 있는 아무숫자번째의 타이틀].title }}</p> -->
	</div>
</template>

<script>
export default {
	name: 'Detail',
	props: {
		blogData: Array,
	},
}
</script>

<style></style>
