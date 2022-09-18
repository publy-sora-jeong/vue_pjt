<template>
	<div class="black-bg" v-if="isModalOpen == true">
		<div class="white-bg">
			<img :src="products[userClicked].image" />
			<h4>{{ products[userClicked].title }}</h4>
			<p>{{ products[userClicked].content }}</p>

			<!-- <input @input="month = $event.target.value" /> -->
			<input v-model.number="month" />
			<p>
				{{ month }}개월 월세는... {{ products[userClicked].price * month }}원
			</p>

			<button @click="$emit('closeModal')">CLOSE</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	data() {
		return {
			month: 1,
		}
	},
	watch: {
		month(userInputData) {
			//사용자가 month를 13이상 입력하면 경고
			if (userInputData > 13) {
				alert('13이상 입력할 수 없습니다. ')
				this.month = 1
			}
		},
	},
	props: {
		products: Array,
		isModalOpen: Boolean,
		userClicked: Number,
	},
}
</script>

<style>
.black-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	padding: 20px;
}
.white-bg {
	width: 100%;
	background: white;
	border-radius: 8px;
	padding: 20px;
}
</style>
