<template>
	<div id="app">
		<Map/>
	</div>
</template>

<script>
import Map from './components/Map.vue'

export default {
	name: 'App',
	data() {
		return {
			// координаты полигона мкада
			mkadPoints: [
				/*55.90501447510725, 37.55934838324687
				55.7978957981398, 37.83781406695959
				55.593955287924665, 37.74310746386948
				55.57877664117346, 37.675257957178054
				55.66338256638772, 37.426476432642836
				55.759737974932364, 37.36852164567724*/
			]
		}
	},
	components: {
		Map
	}
}
</script>

<style>
#app {
	width: 100%;
	height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0;
	
	width: 100%;
	height: 100vh;


}
.ymap-container {
	height: 100%;
}
</style>
