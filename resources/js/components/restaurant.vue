<template>
<div class="max-w-xs px-1 pb-5">
	<div class="flex flex-col justify-end inline text-white">
		<img :src="data.thumbnail" alt="" class="">
		<!-- <h2 class="text-md font-bold absolute ">{{data.category}}</h2> -->
		<h2 class="text-2xl font-bold absolute px-5 mb-8">{{data.name}}</h2>
		<h3 class="text-lg absolute px-5 mb-2">{{data.location.shortHand}}</h3>
	</div>
	<div>
		<div class="sm:invisible md:visible px-5 max-width-xs text-sm my-2 text-gray-700 h-20">
			{{data.description}}
		</div>
			
	</div>
</div>
</template>

<script>
	export default {
        props: {
            slug: String,
        },
		data() {
			return {
			};
		},  
		computed: {
			data() {
				return this.$store.state.restaurants[this.slug];
            },
        },
        
        methods: {

        },
	};
</script>