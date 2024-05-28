<script setup>

const props = defineProps({
	img: String,
	label: String,
	lePlus: String,
	desc: String
})

</script>

<template>
		<h2>{{ label }}</h2>
		<em>{{ lePlus }}</em>
		<img :src="img" :alt="img">
		<div class="desc" v-html="desc"></div>
</template>
