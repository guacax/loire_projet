<script setup>

const props = defineProps({
	logo: String,
	titre: String
})

</script>

<template>
	<header>
		<img :src="logo" :alt="logo">
		<h1>{{ titre }}</h1>
	</header>
</template>