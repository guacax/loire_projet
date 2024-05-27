<script setup>
import { ref, onMounted } from "vue";
import { chateauxAll } from "@/services/index.js";
import Card from "@/components/Card.vue";

const chateaux = ref({});

onMounted(async () => {
	chateaux.value = await chateauxAll();
});


</script>

<template> 
	<main>
        <div v-for="c in chateaux" class="chateauxAll">
			<Card :img="c.photo" :label="c.chateau"/>
			<p><router-link :to="{ name: 'ChateauDetail', params: { id: c.id } }" tag="button">Voir plus</router-link></p>
        </div>
    </main>
</template>

