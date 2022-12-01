<template>
	<div id="app" :class="momentSilence">
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				momentSilence: '',
				silenceList: ['4-4', '04-04', '11-01', '11-02', '11-03']
			}
		},
		created() {
			const date = new Date().Format('MM-dd')
			if (this.silenceList.includes(date)) {
				this.momentSilence = 'silence'
			} else {
				this.momentSilence = ''
			}
		}
	}
</script>

<style lang="less">
	.silence {
		-moz-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		filter: grayscale(100%);
		filter: gray;
	}
</style>
