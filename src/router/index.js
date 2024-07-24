// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Homeview from "@/views/Homeview.vue";
import JobListingsview from "@/views/JobListingsview.vue";
import PageNotFoundview from "@/views/PageNotFoundview.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobListingsview,
    },
    {
      path: "/jobs/:id",
      name: "job-page",
      component: JobView,
    },
    {
      path: "/add/Job",
      name: "add-job",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFoundview,
    },
  ],
});

export default router;
