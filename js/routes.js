import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import Packs from './pages/Packs.js';
import Grind from './pages/Grind.js'

export default [
    // Sets the browser link to access each page
    { path: "/", component: List },
    { path: '/level/:level', component: List },
    
    { path: "/leaderboard", component: Leaderboard },
    { path: "/leaderboard/user/:user", component: Leaderboard },

    { path: "/roulette", component: Roulette },

    { path: "/packs", component: Packs },
    { path: "/packs/pack/:pack", component: Packs },

    { path: "/grind", component: Grind },
];
