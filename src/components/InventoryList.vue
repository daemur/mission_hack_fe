<template>
	<container-box :box-title="recipeName">
		<inventory-item 
			v-for="(object,i) in recipe" 
			:item-name="object.item" 
			:key="i" 
			:class="{'has-text-primary': !object.optional}">
		</inventory-item>
	</container-box>
</template>

<script type="text/javascript">
import InventoryItem from './InventoryItem'
import {api} from '@/api-url'

export default {
	name: 'inventory-list',
	data() {
		return {
			recipeName: 'sample recipe name',
	        recipe: []
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