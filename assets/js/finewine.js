      document.addEventListener('DOMContentLoaded', function() {
        var URL = "1_u_RBR1AzIyeip1X9MnZCqfhqiIWz_t82AVd6W_N5Og"
        Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } )
      })

      function showInfo(data) {
        var optionsJSON = ["name"]
        var template ="<p>{{name}}</p>"
        var geoJSON = Sheetsee.createGeoJSON(data, optionsJSON)
        var map = Sheetsee.loadMap("map")
        Sheetsee.addTileLayer(map, 'rourkie.ikdknp71')
        Sheetsee.addMarkerLayer(geoJSON, map, template)
      }

      function shapesMap(data) {
        var opts = ['website']
        var geojson = Sheetsee.createGeoJSON(data, opts)
        var plytemplate = "<h1>{{name}}</h1>"
        var shapesmap = Sheetsee.loadMap("shapesmap")
        Sheetsee.addTileLayer(shapesmap, 'rourkie.ikdknp71')
        Sheetsee.addMarkerLayer(geojson, shapesmap, plytemplate)
      }
