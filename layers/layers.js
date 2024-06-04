var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Predios_Equipo_1 = new ol.format.GeoJSON();
var features_Predios_Equipo_1 = format_Predios_Equipo_1.readFeatures(json_Predios_Equipo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_Equipo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_Equipo_1.addFeatures(features_Predios_Equipo_1);
var lyr_Predios_Equipo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_Equipo_1, 
                style: style_Predios_Equipo_1,
                popuplayertitle: "Predios_Equipo",
                interactive: true,
                    title: '<img src="styles/legend/Predios_Equipo_1.png" /> Predios_Equipo'
                });
var format_Construcciones_Equipo_2 = new ol.format.GeoJSON();
var features_Construcciones_Equipo_2 = format_Construcciones_Equipo_2.readFeatures(json_Construcciones_Equipo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Construcciones_Equipo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construcciones_Equipo_2.addFeatures(features_Construcciones_Equipo_2);
var lyr_Construcciones_Equipo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Construcciones_Equipo_2, 
                style: style_Construcciones_Equipo_2,
                popuplayertitle: "Construcciones_Equipo",
                interactive: false,
                    title: '<img src="styles/legend/Construcciones_Equipo_2.png" /> Construcciones_Equipo'
                });
var format_Manzanas_Equipo_3 = new ol.format.GeoJSON();
var features_Manzanas_Equipo_3 = format_Manzanas_Equipo_3.readFeatures(json_Manzanas_Equipo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_Equipo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_Equipo_3.addFeatures(features_Manzanas_Equipo_3);
var lyr_Manzanas_Equipo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_Equipo_3, 
                style: style_Manzanas_Equipo_3,
                popuplayertitle: "Manzanas_Equipo",
                interactive: false,
                    title: '<img src="styles/legend/Manzanas_Equipo_3.png" /> Manzanas_Equipo'
                });
var group_Equipo = new ol.layer.Group({
                                layers: [lyr_Predios_Equipo_1,lyr_Construcciones_Equipo_2,lyr_Manzanas_Equipo_3,],
                                fold: "open",
                                title: "Equipo"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Predios_Equipo_1.setVisible(true);lyr_Construcciones_Equipo_2.setVisible(true);lyr_Manzanas_Equipo_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Equipo];
lyr_Predios_Equipo_1.set('fieldAliases', {'Clave_C': 'Clave_C', 'Numero_P': 'Numero_P', });
lyr_Construcciones_Equipo_2.set('fieldAliases', {'layer': 'layer', });
lyr_Manzanas_Equipo_3.set('fieldAliases', {'MUN': 'MUN', 'ZONA': 'ZONA', 'manz': 'manz', });
lyr_Predios_Equipo_1.set('fieldImages', {'Clave_C': 'TextEdit', 'Numero_P': 'TextEdit', });
lyr_Construcciones_Equipo_2.set('fieldImages', {'layer': '', });
lyr_Manzanas_Equipo_3.set('fieldImages', {'MUN': 'TextEdit', 'ZONA': 'TextEdit', 'manz': 'TextEdit', });
lyr_Predios_Equipo_1.set('fieldLabels', {'Clave_C': 'no label', 'Numero_P': 'no label', });
lyr_Construcciones_Equipo_2.set('fieldLabels', {'layer': 'no label', });
lyr_Manzanas_Equipo_3.set('fieldLabels', {'MUN': 'no label', 'ZONA': 'no label', 'manz': 'no label', });
lyr_Manzanas_Equipo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});