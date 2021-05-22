 function mostramapa(lat, long){
    L.mapquest.key = 'mfaj4LC5M9iHZsaILnonyzUi87Rb07ZL';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });
        
 
        map.addControl(L.mapquest.control());
      }
 
 
 $(document).on("click","#localizar",function(){
   onSuccess = function(position) {
     mostramapa(position.coords.latitude, position.coords.longitude)
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
 });

// mostrar marcador

