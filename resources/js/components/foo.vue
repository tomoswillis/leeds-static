<template>
<div class="">
<div class="mx-10 my-10">
		<div>
			<h1 class="text-3xl mt-10">All Restaurants</h1>
		</div>
		<div>
			<div class="bg-gray-300 px-2 py-3 my-5">
				<input type="text" placeholder="Search" class="bg-transparent">
				<button>o</button>
			</div>
		</div>
	</div>
	<div class="bg-blue-100">
		<div>
			<div class="flex justify-around">
				<div class="p-5 bg-white mt-5 rounded-md">
					<select name="sort" id="sort">
						<option value="nameasc">Ascending</option>
						</select>
				</div>
				<div class="p-5 bg-white mt-5 rounded-md">
					<select name="rating" id="rating">
						<option value="1">1 Star</option>
						<option value="2">2 stars</option>
						<option value="3">3 stars</option>
						<option value="4">4 stars</option>
						<option value="5">5 stars</option>
						</select> 
				</div>
			</div>
		</div>
		<div class="mt-5">
			<div v-for="restaurant in restaurants" class="md:flex">
				<restaurantsearch :slug="restaurant" class=""></restaurantsearch>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
        props: {
        },
		data() {
			return {
				
			};
		},  
		computed: {
			restaurants() {
				return Object.keys(this.$store.state.restaurants);
				
            },
        },
        
        methods: {

        },
	};
</script>
	