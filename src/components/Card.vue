<script setup>

const props = defineProps({
	img: String,
	label: String,
	lePlus: String
})

</script>

<template>
	<div>
		<h2>{{ label }}</h2>
		<em>{{ lePlus }}</em>
		<img :src="img" :alt="img">
	</div>
</template>
