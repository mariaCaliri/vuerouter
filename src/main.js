import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import App from './App.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList},
        { path: '/teams/:teamId', component: TeamMembers}
    ]
});

app.use(router);


app.mount('#app');
