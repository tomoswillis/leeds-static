<template>
<div>
  <VueSlickCarousel v-bind="settings">
	<restaurant :slug=slugOne></restaurant>
	<restaurant :slug=slugTwo></restaurant>
	<restaurant :slug=slugThree></restaurant>
	<restaurant :slug=slugFour></restaurant>
	<restaurant :slug=slugOne></restaurant>
	<restaurant :slug=slugTwo></restaurant>
  </VueSlickCarousel>
</div>
</template>
<script>
  export default {
	props: {
			'slug-one': String,
			'slug-two': String,
			'slug-three': String,
			'slug-four': String,
        },
    data() {
      return {
        settings: {
			"dots": true,
			"infinite": false,
			"speed": 500,
			"slidesToShow": 4,
			"slidesToScroll": 4,
			"initialSlide": 0,

			"responsive": [
				{
				"breakpoint": 1280,
				"settings": {
					"slidesToShow": 3,
					"slidesToScroll": 3,
					"infinite": true,
					"dots": true
					}
				},
				{
				"breakpoint": 775,
				"settings": {
					"infinite": true,
					"slidesToShow": 2,
					"speed": 500,
					"rows": 2,
					"slidesPerRow": 1
					}
				},
				{
				"breakpoint": 480,
				"settings": {
					"slidesToShow": 1,
					"slidesToScroll": 1
					}
				}
			]
		},
      }
	},
	computed: {
		foo() {
			return this.slugOne
		}
        },
  }
</script>

