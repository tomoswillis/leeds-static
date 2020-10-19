<template>
<div>
	<div class="">
		<div class=" flex flex-col justify-end inline text-white">
			<img :src="event.thumbnail" alt="" class="">
			<h2 class="text-2xl font-bold absolute px-5 mb-10">{{event.name}}</h2>
			<h3 class="text-lg absolute px-5 mb-5">{{event.venue}}</h3>
		</div>
	</div>
	<div class="px-5">
		<div class="flex justify-between my-2 flex-wrap">
			<div class="font-bold">
				{{ event.date.day }} {{ event.date.date }} {{ event.date.month }}
			</div>
			<div v-if="event.cost  >= 0.01">
				£{{ event.cost }}
			</div>
			<div v-else>
				Free
			</div>

		</div>
		<p class="text-sm">{{event.description}}</p>
		<a :href="event.bookingLink">
			<button class="py-2 font-bold text-orange-400">Book Now</button>
		</a>
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
			event() {
				return this.$store.state.events[this.slug];
            },
        },
        
        methods: {

        },
	};
</script>