<template>
	<div>
		<!-- <p>{{recipe.steps[0]}}</p> -->
		<container-box :box-title="recipe.name">
			<inventory-item 
				v-for="(object,i) in recipe.requirements" 
				:item-name="object.item" 
				:key="i" 
				:class="{'has-text-primary': !object.optional}">
			</inventory-item>
		</container-box>
	</div>
</template>

<script type="text/javascript">
import InventoryItem from './InventoryItem'
import {api} from '@/api-url'

export default {
	name: 'inventory-list',
	data() {
		return {
	    recipe: {}
		}
	},
	components: {
		[InventoryItem.name]: InventoryItem
	},
	created() {
		api.get('/recipes/Test%20Recipe')
		.then(response => {
	      this.recipe = response.data;
	      this.$notify({
          group: 'success',
          text: 'Success message'
        });
	    })
	    .catch(e => {
	      console.log(e)
	    })
	}

	// need a GET request to fetch all needed items
}
</script>

<style scoped>

</style>