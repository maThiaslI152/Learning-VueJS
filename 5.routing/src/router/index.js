import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/jobs.vue'
import JobDetails from "@/views/jobs/JobDetails.vue";
import notFound from "@/views/notFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
    //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
    //404 page
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
