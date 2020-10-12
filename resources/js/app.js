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
		food: [
			{
				'id': 1,
				'name': 'manahatta',
				'category': 'cocktailBar',
				'location': {
					'streetName': 'foobar',
					'streetNumb': '2',
					'postcode': '234 foobar',
					'sortHand': 'leeds city centre'
					},
				'description': 'random things',
			},
			{
				'id': 2,
				'name': 'box',
				'category': 'cocktailBar',
				'location': {
					'streetName': 'foobar',
					'streetNumb': '2',
					'postcode': '234 foobar',
					'sortHand': 'leeds city centre'
					},
				'description': 'random thing',
			},
		],
		events: [

		],
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
