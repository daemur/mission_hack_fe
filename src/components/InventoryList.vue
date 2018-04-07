<template>
	<div>
		<!-- <p>{{recipe.steps[0]}}</p> -->
		<container-box :box-title="recipe.name">
			<inventory-item 
				v-for="(object,i) in recipe.requirements" 
				:item-name="object.item" 
				:key="i" 
				:class="{'has-text-primary': !object.optional}"
				:found="object.found">
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
		// setInterval(this.getInventoryStatus, 3000)
		// setInterval(this.alertFoundAll, 3000)
		this.getInventoryStatus();
	},
	methods: {
		getInventoryStatus() {
			api.get('/recipes/Test%20Recipe')
			.then(response => {
		      this.recipe = response.data;
		    })
	    .catch(e => {
	      console.log(e)
	    })
		},

		enableStep() {
			if (this.allItemsFound) {
				return this.$emit('allFound', true)
			}
		}
	},

	computed: {
		allItemsFound() {
			let itemList = this.recipe.requirements
			let foundCount = 0
			for (let i = 0; i < itemList.length; i++) {
					if (itemList[i].found) {
						foundCount++
					}
				}
			if (foundCount == itemList.length) {
				return true
			}
			else {
				return false
			}
		}
	}

	// need a GET request to fetch all needed items
}
</script>

<style scoped>

</style>