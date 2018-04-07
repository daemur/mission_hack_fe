<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8">
					<main-display></main-display>
				</div>
				<div class="column is-4">
					<inventory-list></inventory-list>
				</div>

			</div>
			<app-btn name="Next Step" toRoute="instructions"></app-btn>
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
	}
}
</script>

<style type="text/css">

</style>