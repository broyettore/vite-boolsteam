import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel nostro router
import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import PageNotFound from './pages/PageNotFound.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/who-we-are',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        },
        {
            path: '/:pathMatch(.*)*', 
            name: 'page-not-found',
            component: PageNotFound
        }
    ]
});

export { router };