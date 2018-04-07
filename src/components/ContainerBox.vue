<template>
	<div class="box">
		<h3>{{boxTitle}}</h3>
		<div class="box inner_box">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'container-box',
	props: ['boxTitle'],

}
</script>

<style scoped>
.inner_box {
	height: 500px;
}
</style>