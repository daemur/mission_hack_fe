<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8">
					<main-display></main-display>
				</div>
				<div class="column is-4">
					<inventory-list @allFound="this.buttonIsDisabled=false"></inventory-list>
				</div>

			</div>
			<app-btn-route name="Next Step" toRoute="step" :isDisabled="buttonIsDisabled" :step-id="0"></app-btn-route>
		</div>
	</div>
	
</template>

<script type="text/javascript">
import InventoryList from './InventoryList'
import MainDisplay from './MainDisplay'

export default {
	components: {
		[InventoryList.name]: InventoryList,
		[MainDisplay.name]: MainDisplay
	},
	data() {
		return {
			buttonIsDisabled: false
		}
	},
	methods: {
		enableButton() {
			return this.buttonIsDisabled = !this.buttonIsDisabled
		},
		// goToStep() {
		// 	this.$router.push({name: 'step', params:{step_id: 0}});
		// }
	},
	// updated() {
 //    this.$on('all_are_found', function() {
 //      this.buttonIsDisabled = false;
 //    })
 //  },
}
</script>

<style type="text/css">

</style>