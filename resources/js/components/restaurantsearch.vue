<template>
<div class="bg-white mx-2 px-2 py-4 my-5 rounded-lg max-w-xs shadow-sm">
	<div class="px-2  cursor-pointer">
		<div class="flex flex-col justify-end inline text-white bg-thumbnail rounded-xl">
			<img :src="data.thumbnail" alt="" class="">
			<!-- <h2 class="text-md font-bold absolute ">{{data.category}}</h2> -->
			<h2 class="text-2xl font-bold absolute px-5 mb-8">{{data.name}}</h2>
			<h3 class="text-lg absolute px-5 mb-2">{{data.location.shortHand}}</h3>
		</div>
		<div class="">
			
			<div class="px-5 max-width-xs text-sm my-2 text-gray-700">
				<div class="flex justify-between items-center mb-2">
					<div class="text-md mr-5 flex	">
						<p class="font-bold mr-2 text-green-500" v-if="this.open == 'true'">Open</p>
						<p class="font-bold mr-2 text-orange-400" v-if="this.open == 'closing'">Closing Soon</p>
						<p class="font-bold mr-2 text-red-400" v-if="this.open == 'false'">closed</p>
						{{data.times.open}} - {{data.times.close}}
					</div>
					<div>
						<div class="flex">
							<svg height="10" width="15"  viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet">
								<polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="#FB9E4F" stroke="#aaa" stroke-width="1"/>
							</svg>
								<svg height="10" width="15"  viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet">
								<polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="#FB9E4F" stroke="#aaa" stroke-width="1"/>
							</svg>
								</svg>
								<svg height="10" width="15"  viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet">
								<polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="#FB9E4F" stroke="#aaa" stroke-width="1"/>
							</svg>
								</svg>
								<svg height="10" width="15"  viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet">
								<polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="#FB9E4F" stroke="#aaa" stroke-width="1"/>
							</svg>
								</svg>
								<svg height="10" width="15"  viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet">
								<polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="#C4C4C4" stroke="#aaa" stroke-width="1"/>
							</svg>
						</div>	
					</div>
				</div>
				{{data.description}}
					<p class="text-xs text-right mt-2"><strong>Average Cost: </strong>£{{data.averageCost}}pp</p>
			</div>
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
				open:'',
				currentTime: this.$store.state.time.hour,
				foo: this.$store.state.restaurants[this.slug],
			};
		},  
		computed: {
			data() {
				return this.$store.state.restaurants[this.slug];	
			},
        },
        
        methods: {
			areWeOpen(){
				if(this.currentTime >= this.foo.times.open && this.currentTime < this.foo.times.close){
					if(this.currentTime + 1 == this.foo.times.close){
						return this.open = 'closing'
					}else{
						return this.open = 'true'
					};
				}else{
					return this.open = "false"
				}
			},
		},
		mounted: function () {
			  this.areWeOpen()
		}		
	};
</script>