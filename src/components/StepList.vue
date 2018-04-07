<template>
	<container-box :box-title="stepTitle">
	</container-box>
</template>

<script>
export default {
	name: 'step-list',
	props: ['stepTitle']
}
</script>