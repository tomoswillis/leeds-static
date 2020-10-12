/* eslint-disable no-new */

import Vue from 'vue';
import Vuex from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

Vue.use(Vuex);

import foobar from './components/foobar';

// Global
// Vue.component('my-component', MyComponent);

const store = new Vuex.Store({
	state: {

	},
	
	mutations: {

	},

	actions: {
	},

});

new Vue({
	el: '#app',
	components: { VueSlickCarousel, foobar },
});
