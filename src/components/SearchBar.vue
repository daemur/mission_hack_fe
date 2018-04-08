<template>
	
	<div class="columns">
	  <div class="column is-6 is-offset-one-quarter">
	  	<div class="field">
	  		<div class="control">
		    <input class="input is-large" type="email" placeholder="Search a recipe...">
		    
		  	</div>
	  	</div>
	  	<div class="field is-grouped is-grouped-centered">
	  		<div class="control">
	  			<app-btn name="Search" toRoute="inventory-check"></app-btn>
	  		</div>
	  		<!-- <div class="control">
		  		<app-btn name="Camera" toRoute="test"></app-btn>
	  		</div> -->
	  	</div>
	  	
	  </div>
	  
	</div>
</template>

<script type="text/javascript">
import Button from './Button.vue'
import {api} from '@/api-url'

export default {
	name: 'search-bar',
	data() {
		return {
			input: '',
			recipeNameArray: []
		}
	},
	created() {
		// api.get('/recipes')
		// .then(response => {
			
		// })
	},
	components: {
		[Button.name]: Button
	}
}
</script>