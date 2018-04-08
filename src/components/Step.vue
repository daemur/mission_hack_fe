<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8">
					<main-display></main-display>
				</div>
				<div class="column is-4">
					<step v-for="(step,i) in allSteps" 
						:step-title="step.name"
						:step-item="step.item"
						:is-completed="step.completed"
						:is-current="i == step_id"
						:key="i"
						></step>
				</div>

			</div>
			
			<button class="button is-large is-dark is-rounded" 
							@click="toPreviousStep"
							v-show="step_id > 0">
								<app-icon name="arrow-left"></app-icon>
							</button>
			<button class="button is-large is-dark is-rounded" 
							@click="toNextStep" 
							v-if="!stepIsLast">
								<app-icon name="arrow-right"></app-icon>
							</button>
			<button class="button is-large is-success is-rounded" 
							@click="callFinishApi"
							v-else>Finish</button>
		</div>
	</div>
</template>

<script type="text/javascript">
import MainDisplay from './MainDisplay'
import StepDisplay from './StepDisplay'
import Step from './StepList'
import {api} from '@/api-url'

export default {
	name: 'steps-container',
	props: ['step_id'],
	components: {
		[StepDisplay.name]: StepDisplay,
		[Step.name]: Step,
		[MainDisplay.name]: MainDisplay
	},
	data() {
		return {
			step: {},
			stepsLength: 0,
			missionDone: false,
			allSteps: [],
			currentArray: []
			// currentStepIndex: 0
		}
	},
	created() {
		this.getCurrentStep(this.step_id)
		// this.getStepsInfo()
		// this.getStepsLength()
	},
	// mounted() {
	// 	this.getCurrentArray(this.step_id)
	// },
	
	methods: {
		toPreviousStep(){
			let previousStep = Number(this.step_id) - 1;
			this.$router.push({name: 'step', params: {step_id: previousStep}})
			this.getCurrentStep(previousStep)
		},
		toNextStep() {
			let nextStep = Number(this.step_id) + 1;
			this.$router.push({name: 'step', params: {step_id: nextStep}})
			this.getCurrentStep(nextStep)
			// this.allSteps.splice(this.step_id, 1);

		},
		getCurrentStep(index) {
			// let nextStepId = this.step_id + 1;
			api.get('/step/' + index)
			.then(response => {
				this.step = response.data
				return this.getStepsInfo()
			});
		},
		getStepsInfo() {
			api.get('/recipes/Birdhouse')
			.then(response => {
				this.stepsLength = response.data.steps.length
				this.allSteps = response.data.steps
				// this.currentStepIndex = response.data.currentStep
			})
		},
		callFinishApi() {
			let nextStepId = this.step_id + 1
			api.get('/step/' + nextStepId)
			.then(response => {
				this.missionDone = response.data.done
				this.$router.push({name: 'test'})
			})
		},
		// getCurrentArray(i) {
			
		// 	if (i > 0 && i < this.allSteps.length - 1) {
		// 		this.currentArray.push(this.allSteps[i-1])
		// 		this.currentArray.push(this.allSteps[i])
		// 		this.currentArray.push(this.allSteps[i+1])
		// 	}
		// 	else if (i == 0) {
		// 		this.currentArray.push(this.allSteps[i])
		// 		this.currentArray.push(this.allSteps[i+1])
		// 		this.currentArray.push(this.allSteps[i+2])
		// 	}
		// 	else if (i == this.allSteps.length - 1) {
		// 		this.currentArray.push(this.allSteps[i])
		// 		this.currentArray.push(this.allSteps[i-1])
		// 		this.currentArray.push(this.allSteps[i-2])
		// 	}
		// 	return this.currentArray;
		// }
	},

	computed: {
		stepIsLast() {
			return (this.step_id == this.stepsLength - 1);
		},
	}
}
</script>