<template>
	<div>
		<button :disabled="isDisabled" class="button is-rounded is-large" @click="changeRoute">{{name}}</button>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'app-btn-route',
	data() {
		return {

		}
	},
	props: ['name', 'toRoute', 'stepId'],
	methods: {
		changeRoute() {
			this.$router.push({name: this.toRoute, params:{step_id: this.stepId}});
		}
	}

}
</script>