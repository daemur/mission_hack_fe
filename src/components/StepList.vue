<template>
	<div class="box has-text-centered"
		 :class="{'is-current': isCurrent}">
		<h3 class="title is-5">{{stepTitle}} 
			<app-icon v-if="isCompleted" name="check" class="has-text-success"></app-icon>
		</h3>
		<p v-for="i in stepItem">{{i}}</p>
		<!-- <p>Completed? {{isCompleted}}</p> -->

	</div>
</template>

<script>
export default {
	name: 'step',
	props: ['stepTitle', 'stepItem', 'isCurrent', 'isCompleted']
}
</script>

<style scoped>
.is-current {
	background-color: hsl(171, 100%, 41%) !important;
}
</style>