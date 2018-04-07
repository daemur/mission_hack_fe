<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8">
					<main-display></main-display>
				</div>
				<div class="column is-4">
					<step-list></step-list>
				</div>

			</div>
			<!-- TODO: specify step id -->
			<app-btn name="Next Step" toRoute="steps"></app-btn>
		</div>
	</div>
</template>

<script type="text/javascript">
import MainDisplay from './MainDisplay'
import StepDisplay from './StepDisplay'
import StepList from './StepList'

export default {
	name: 'steps-container',
	components: {
		[StepDisplay.name]: StepDisplay,
		[StepList.name]: StepList,
		[MainDisplay.name]: MainDisplay
	}
}
</script>