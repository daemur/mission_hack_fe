<template>
	<div>
		<button class="button is-large" @click="changeRoute">{{name}}</button>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'app-btn',
	data() {
		return {

		}
	},
	props: ['name', 'toRoute'],
	methods: {
		changeRoute() {
			this.$router.push({name: this.toRoute});
		}
	}

}
</script>