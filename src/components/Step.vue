<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8">
					<main-display></main-display>
				</div>
				<div class="column is-4">
					<step-list :step-title="step.name"></step-list>
				</div>

			</div>
			<!-- TODO: specify step id -->
			<!-- <app-btn-route name="Next Step" toRoute="step"></app-btn-route> -->
			<button class="button is-large" 
							@click="toPreviousStep"
							v-show="step_id > 0">Go Back</button>
			<button class="button is-large" 
							@click="toNextStep" 
							v-if="!stepIsLast">Next Step</button>
			<button class="button is-large" 
							@click="callFinishApi"
							v-else>Finish</button>
		</div>
	</div>
</template>

<script type="text/javascript">
import MainDisplay from './MainDisplay'
import StepDisplay from './StepDisplay'
import StepList from './StepList'
import {api} from '@/api-url'

export default {
	name: 'steps-container',
	props: ['step_id'],
	components: {
		[StepDisplay.name]: StepDisplay,
		[StepList.name]: StepList,
		[MainDisplay.name]: MainDisplay
	},
	data() {
		return {
			step: {},
			stepsLength: 0,
			missionDone: false
			// currentStepIndex: 0
		}
	},
	created() {
		this.getCurrentStep(this.step_id)
		// this.getStepsLength()
	},
	
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
			api.get('/recipes/Test%20Recipe')
			.then(response => {
				this.stepsLength = response.data.steps.length
				// this.currentStepIndex = response.data.currentStep
			})
		},
		callFinishApi() {
			let nextStepId = this.step_id + 1
			api.get('/step/' + nextStepId)
			.then(response => {
				console.log('hey this is finished')
				this.missionDone = response.data.done
				this.$router.push({name: 'test'})
			})
		}
	},

	computed: {
		stepIsLast() {
			return (this.step_id == this.stepsLength - 1);
		}
	}
}
</script>