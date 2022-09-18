<template>
	<div>
		<div class="menu">
			<a v-for="menu in menus" :key="menu"> {{ menu }}</a>
		</div>

		<p>{{ discountAmount }}% Discount</p>

		<Discount v-if="showDiscount == true" />

		<button @click="priceSort">가격순 정렬</button>
		<button @click="sortBack">원래대로</button>
		<Modal
			:products="products"
			:userClicked="userClicked"
			:isModalOpen="isModalOpen"
			@closeModal="isModalOpen = false"
		/>
		<Card
			:products="products"
			@openModal=";(isModalOpen = true), (userClicked = $event)"
		/>
	</div>
</template>

<script>
import roomData from './assets/roomdata.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

export default {
	name: 'App',
	components: {
		Discount,
		Modal,
		Card,
	},
	data() {
		return {
			productOriginal: [...roomData],
			products: roomData,
			showDiscount: true,
			discountAmount: 5,
			isModalOpen: false,
			userClicked: 0,
			menus: ['Home', 'Products', 'Contact'],
		}
	},
	methods: {
		priceSort() {
			this.products.sort(function(a, b) {
				return a.price - b.price
			})
			//sort()는 원본을 변경시키기 때문에 map, filter등으로
		},
		sortBack() {
			this.products = [...this.productOriginal]
		},
	},
	mounted() {
		setTimeout(() => {
			this.showDiscount = false
		}, 2000)
		setInterval(() => {
			if (this.discountAmount > 0) {
				this.discountAmount--
			}
		}, 1000)
	},
}
</script>

<style>
.menu {
	background: darkslateblue;
	padding: 15px;
	border-radius: 5px;
}
.menu a {
	color: white;
	padding: 10px;
}
img {
	max-width: 100%;
}
body {
	margin: 0;
	text-align: center;
}
div {
	box-sizing: border-box;
}
.discount {
	background: #eee;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
}
</style>
