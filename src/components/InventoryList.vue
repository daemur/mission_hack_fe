<template>
	<div>
		This is inventory list
		<p class="is-capitalized">{{recipeName}}</p>
		<inventory-item 
			v-for="(object,i) in sampleItemArray" 
			:item-name="object.item" 
			:key="i" 
			:class="{'has-text-primary': !object.optional}">
		</inventory-item>
	</div>
</template>

<script type="text/javascript">
import InventoryItem from './InventoryItem'
export default {
	name: 'inventory-list',
	data() {
		return {
			recipeName: 'sample recipe name',
			// This array will be replaced by data 
			sampleItemArray: [
				{item: 'Test Item 1',
                 optional: false},
                {item: 'Test Item 2',
	             optional: true}
	        ]
		}
	},
	components: {
		[InventoryItem.name]: InventoryItem
	}

	// need a GET request to fetch all needed items
}
</script>

<style scoped>

</style>