<template>
	<yandex-map
		map-type = "satellite"
		:coords = "centerCoords"
		:zoom = "10"
		@click = "createRoute"
		@map-was-initialized = "mapCreated">

		<ymap-marker
			marker-type="Circle"
			:coords = "centerCoords"
			marker-id="1"
			hint-content="Это точка поиска пути">
		</ymap-marker>

		<ymap-marker
			:coords = "userCoords"
			marker-id = "2"
			hint-content="Пользовательская точка">
		</ymap-marker>
	
	
	</yandex-map>
</template>

<script>
export default ({
	data: () => ({
		map: null,
		polygonsFillColor: "#111111",
		centerCoords: [
			55.74676569747646,
			37.619280584979805,
		],
		mkadCoordsPolygon: [
			[55.90501447510725, 37.55934838324687],
			[55.7978957981398, 37.83781406695959],
			[55.593955287924665, 37.74310746386948],
			[55.57877664117346, 37.675257957178054],
			[55.66338256638772, 37.426476432642836],
			[55.759737974932364, 37.36852164567724]
		],
		userCoords: [0,0]
	}),
	methods: {
		// карта создана
		mapCreated: function (map) {
			this.map = map;
			this.drawMkad();
		},
		// рисует полигон вокруг мкада
		drawMkad() {
			// eslint-disable-next-line
			let mkadPolygon = new ymaps.Polygon([this.mkadCoordsPolygon], {
				hintContent: "МКАД"
			}, {
				// Задаем опции геообъекта.
				// Цвет заливки.
				fillColor: this.polygonsFillColor,
				opacity: 0.6,
				// Ширина обводки.
				strokeWidth: 1
			});

			this.map.geoObjects.add(mkadPolygon);
		},
		// создаёт маршрут между centerCoords и координатами по клику
		createRoute(e) {
			this.userCoords = e.get('coords');

			// eslint-disable-next-line
			let curRoute = new ymaps.multiRouter.MultiRoute({
				referencePoints: [
					this.centerCoords,
					this.userCoords
				],
				params: {
					results: 2
				}
				}, {
				boundsAutoApply: true
			});
			
			this.map.geoObjects.add(curRoute);
		}
	}
})
</script>
