<template>
<div>
	<div class="post" v-for="(postItem, idx) in postData" :key="idx">
		<div class="post-header">
			<div class="profile" :style="{backgroundImage : `url(${postItem.userImage})`}"></div>
			<span class="profile-name">{{postItem.name}}</span>
		</div>
		<div class="post-body"></div>
		<div class="post-content">
			<p>{{postItem.likes}}</p>
			<p><strong>{{postItem.name}}</strong> {{postItem.content}}</p>
			<p class="date">{{postItem.date}}</p>
		</div>
	</div>

	<!-- <div class="post">
		<div class="post-header">
			<div class="profile"></div>
			<span class="profile-name">ChanKim</span>
		</div>
		<div class="post-body"></div>
		<div class="post-content">
			<p>43 Hits</p>
			<p><strong>Writer</strong> temp contents</p>
			<p class="date">May 15</p>
		</div>
	</div> -->


</div>
</template>

<script>
export default {
	name : 'Post', 
	props: {
		postData : Array, 
	}
}
</script>

<style>
.post {
	width: 100%;
}
.profile {
	/* background-image: url('https://placeimg.com/100/100/arch'); */
	width: 30px;
	height: 30px;
	background-size: 100%;
	border-radius: 50%;
	float: left;
}
.profile-name {
	display: block;
	float: left;
	padding-left: 10px;
	padding-top: 7px;
	font-size: 14px;
}
.post-header {
	height: 30px;
	padding: 10px;
}
.post-body {
	/* background-image: url('https://placeimg.com/640/480/animals'); */
	height: 450px;
	background-position: center;
	background-size: cover;
}
.post-content {
	padding-left: 15px;
	padding-right: 15px;
	font-size: 14px;
}
.date {
	font-size: 11px;
	color: grey;
	margin-top: -8px;
}
</style>
