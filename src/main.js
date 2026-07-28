import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import posthog from 'posthog-js';

posthog.init('phc_gg1GCEstI4wawnFhPHjotDaaIulfEZ7bDorurzULjPP', {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
});

router.afterEach((to) => {
    posthog.capture('$pageview', {
        $current_url: window.location.origin + to.fullPath
    });
});

import './home/home.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

const seoFallback = document.getElementById('seo-fallback');
if (seoFallback) {
    seoFallback.remove();
}
