<template>
	<div>
		<div>
			{{itemName}}
			<span class="check">
				<app-icon v-if="found" name="check" class="has-text-success"></app-icon>
			</span>
			
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	props: ['itemName', 'found'],
	name: 'inventory-item',
}
</script>

<style>
.check {
  width: 32px;
}
</style>