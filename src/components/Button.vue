<template>
	<div>
		<button :disabled="isDisabled" class="button is-rounded is-large" @click="changeRoute">{{name}}</button>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'app-btn',
	data() {
		return {

		}
	},
	props: ['name', 'toRoute', 'isDisabled'],
	methods: {
		changeRoute() {
			this.$router.push({name: this.toRoute});
		}
	}

}
</script>