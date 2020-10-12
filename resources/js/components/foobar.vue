<template>
	<div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
                foo:  console.log(this.$store.state.food),
			};
		},  
		computed: {
			list() {
				return this.$store.state.food;
			},
		},
	};
</script>