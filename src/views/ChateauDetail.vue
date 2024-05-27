<script setup>

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { chateauOne } from "@/services/index.js";
import Card from "@/components/Card.vue";
import Chateaux from "@/views/Chateaux.vue";

const props = defineProps({
  	id: String
});

const chateau = ref({});
const chateauId = ref(props.id);

onMounted(async () => {
  	chateau.value = await chateauOne(chateauId.value);
});

</script>

<template>
	<router-link :to="{ name: 'Chateaux' }" tag="button">Accueil</router-link>
	<div v-for="c in chateau" class="chateauOne">
		<Card :img="c.photo" :label="c.chateau" :lePlus="c.le_plus" :desc="c.description"/>
	</div>
</template>
