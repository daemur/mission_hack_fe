<template>
	<div class="">
		<!-- <message-display></message-display> -->
		<camera-display></camera-display>
	</div>
</template>

<script type="text/javascript">
import MessageDisplay from './MessageDisplay'
import CameraDisplay from './CameraDisplay'
export default {
	name: 'main-display',
	components: {
		[MessageDisplay.name]: MessageDisplay,
		[CameraDisplay.name]: CameraDisplay
	}

}
</script>

<style type="text/css">
/*.main__container {
	background-color: 
}*/
</style>