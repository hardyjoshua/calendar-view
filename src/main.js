import Vue from 'vue'
import Buefy from 'buefy'
import { library } from "@fortawesome/fontawesome-svg-core"

import App from './App.vue'

import {
  faEye,
  faPlus,
  faTrash,
  faTrashAlt,
  faUser,
  faUserEdit,
  faExclamationCircle,
  faAngleLeft,
  faAngleRight,
  faUpload,
  faFileMedical,
  faUserCircle,
  faSpinner,
  faTimes,
  faCheck,
  faVideo,
  faMicrophone,
  faVolumeUp,
  faChevronUp,
  faChevronDown,
  faQrcode,
  faCircle,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faPen,
  faTimesCircle,
  faCalendar,
  faSearch,
  faBan,
  faMailBulk,
  faCogs,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(
  faUserEdit,
  faEye,
  faTrash,
  faTrashAlt,
  faPlus,
  faExclamationCircle,
  faAngleLeft,
  faAngleRight,
  faUpload,
  faFileMedical,
  faUser,
  faUserCircle,
  faSpinner,
  faTimes,
  faCheck,
  faVideo,
  faMicrophone,
  faVolumeUp,
  faChevronUp,
  faChevronDown,
  faQrcode,
  faCircle,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faPen,
  faTimesCircle,
  faCalendar,
  faSearch,
  faBan,
  faMailBulk,
  faCogs,
  faPowerOff
)
Vue.component("fa-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: "fa-icon",
  defaultIconPack: "fas"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
