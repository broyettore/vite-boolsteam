import { createApp } from 'vue'
import "./assets/styles/main.scss"
import App from './App.vue'
import * as bootstrap from 'bootstrap'
/* import { router } from './router'; */

/* /* import the fontawesome core / */
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons  */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faWindows as winIcon } from '@fortawesome/free-brands-svg-icons'
import { faApple as apple  } from '@fortawesome/free-brands-svg-icons'
import { faSteam as steam } from '@fortawesome/free-brands-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faSquareTumblr} from '@fortawesome/free-brands-svg-icons'
import {faSteamSymbol} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faUserSecret, winIcon, apple, steam, faDownload, faCaretDown, faSquareFacebook, faSquareTumblr, faSteamSymbol, faMagnifyingGlass)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')