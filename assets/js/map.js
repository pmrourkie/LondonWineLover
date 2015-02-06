      document.addEventListener('DOMContentLoaded', function() {
        var URL = "1_u_RBR1AzIyeip1X9MnZCqfhqiIWz_t82AVd6W_N5Og"
        Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } )
      })

      function showInfo(data) {
        var optionsJSON = ["name", "website", "selection", "atmosphere", "facilities", "friendliness", "cost"]
        var template ="<ul><li><h1><a href='http://{{website}}''>{{name}}</a></h1></li>" +
         "<li><strong>Selection:</strong>{{selection}}</li>" +
         "<li><strong>Atmosphere:</strong>{{atmosphere}}</li>" +
         "<li><strong>Facilities:</strong>{{facilities}}</li>" +
         "<li><strong>Friendliness:</strong>{{friendliness}}</li>" +
         "<li><strong>Cost:</strong>{{cost}}</li>"
        var geoJSON = Sheetsee.createGeoJSON(data, optionsJSON)
        var map = Sheetsee.loadMap("map")
        Sheetsee.addTileLayer(map, 'rourkie.ikdknp71')
        Sheetsee.addMarkerLayer(geoJSON, map, template)

      }

      function shapesMap(data) {
        var opts = ['website']
        var geojson = Sheetsee.createGeoJSON(data, opts)
        var plytemplate = "<h1>{{website}}</h1>"
        var shapesmap = Sheetsee.loadMap("shapesmap")
        Sheetsee.addTileLayer(shapesmap, 'rourkie.ikdknp71')
        Sheetsee.addMarkerLayer(geojson, shapesmap, plytemplate)
      }