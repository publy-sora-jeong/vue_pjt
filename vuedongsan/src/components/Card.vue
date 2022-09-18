<template>
	<div>
		<div
			class="product"
			v-for="(productItem, i) in products"
			:key="productItem"
		>
			<img :src="products[i].image" alt="" />
			<h4 @click="$emit('openModal', products[i].id)">
				{{ products[i].title }}
			</h4>
			<p>{{ products[i].content }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		products: Array,
	},
	methods: {},
}
</script>

<style></style>
