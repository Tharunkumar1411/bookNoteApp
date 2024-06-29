import { registerApplication, start } from 'single-spa';

// Define your micro frontend applications
registerApplication(
'app',
() => import('app'),
() => location.pathname.startsWith('/app')
);
registerApplication(
'home',
() => import('home'),
() => location.pathname.startsWith('/home')
);

// Start single-spa
start();