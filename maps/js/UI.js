class UI {
    constructor() {
        this.api=  new API();
        //crear los marcadores con layerGroup
        this.markers= new L.LayerGroup();
        // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
    mostrarEstablecimientos(){
        this.api.obtenerDatos()
        .then(datos=>{
          
            const resultado= datos.respuestaJSON.results;
            //ejecutar funcion para mostrar puntos en el mapa
            this.mostrarPuntosMapa(resultado);
        });
    }
    mostrarPuntosMapa(datos){
        //Limpiar los markers
        this.markers.clearLayers();
        //Recorrer los establecimientos
        datos.forEach(dato => {
            //destructuring
            const {latitude,longitude,calle,regular,premium} =dato;
            //Crear Popup
            const opcionesPopup= L.popup()
                .setContent(`
                <p>Calle: ${calle}</p>
                <p><b>Regular:</b> $ ${regular}</p>
                <p><b>Premium:</b> $ ${premium}</p>
                `);
            //agregar el MARCADOR
            const marker= new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup);
            this.markers.addLayer(marker);
            this.markers.addTo(this.mapa);
        });
    }
    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
            .then(datos=>{
                //obtener datos
                const resultado= datos.respuestaJSON.results;
                //enviar al JSON y busca para el filtrado
                this.filtrarSugerencias(resultado,busqueda);
            });
    }
    //filtra las sugerencias en base al valor del input
    filtrarSugerencias(resultado,busqueda){
        //filtrar con .filter
        const filtro= resultado.filter(filtro=>filtro.calle.indexOf(busqueda)!==-1);
       this.mostrarPuntosMapa(filtro);
        //mostrar los pines
    }
}