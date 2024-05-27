import { createRouter, createWebHistory } from 'vue-router';
import Chateaux from '../views/Chateaux.vue';
import ChateauDetail from '../views/ChateauDetail.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
		path: '/',
		name: 'Chateaux',
		component: Chateaux
		},
		{
		path: '/chateau/:id',
		name: 'ChateauDetail',
		component: ChateauDetail,
		props: true
		}
	]
});

export default router;
