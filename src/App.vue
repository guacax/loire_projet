<script setup>
import { ref, onMounted } from "vue";
import { info } from "@/services/index.js";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const infos = ref({});

onMounted(async () => {
	infos.value = await info();
});

</script>


<template>
	<Header :logo="infos.icone" :titre="infos.theme"/>
	<RouterView />
	<Footer :update="infos.update" :sources="infos.sources"/>
</template>
