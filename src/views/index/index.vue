<template>
	<div>{{result}}</div>
</template>

<script>
	export default {
		data() {
			return {
				result: null
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			async getList() {
				let result = await this.$get('/getList');
				this.result = result;
			}
		}
	}
</script>