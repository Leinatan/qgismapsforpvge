ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([664957.026917, 5781294.336422, 731985.304925, 5831028.841634]);
var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_R3Axesforts_1 = new ol.format.GeoJSON();
var features_R3Axesforts_1 = format_R3Axesforts_1.readFeatures(json_R3Axesforts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3Axesforts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3Axesforts_1.addFeatures(features_R3Axesforts_1);
var lyr_R3Axesforts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3Axesforts_1, 
                style: style_R3Axesforts_1,
                popuplayertitle: "R3 Axes forts",
                interactive: true,
                title: 'R3 Axes forts'
            });
var format_R3Liaisonsprincipales_2 = new ol.format.GeoJSON();
var features_R3Liaisonsprincipales_2 = format_R3Liaisonsprincipales_2.readFeatures(json_R3Liaisonsprincipales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3Liaisonsprincipales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3Liaisonsprincipales_2.addFeatures(features_R3Liaisonsprincipales_2);
var lyr_R3Liaisonsprincipales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3Liaisonsprincipales_2, 
                style: style_R3Liaisonsprincipales_2,
                popuplayertitle: "R3 Liaisons principales",
                interactive: true,
                title: 'R3 Liaisons principales'
            });
var format_R3Liaisonssecondaires_3 = new ol.format.GeoJSON();
var features_R3Liaisonssecondaires_3 = format_R3Liaisonssecondaires_3.readFeatures(json_R3Liaisonssecondaires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3Liaisonssecondaires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3Liaisonssecondaires_3.addFeatures(features_R3Liaisonssecondaires_3);
var lyr_R3Liaisonssecondaires_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3Liaisonssecondaires_3, 
                style: style_R3Liaisonssecondaires_3,
                popuplayertitle: "R3 Liaisons secondaires",
                interactive: true,
                title: 'R3 Liaisons secondaires'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_R3Axesforts_1.setVisible(true);lyr_R3Liaisonsprincipales_2.setVisible(true);lyr_R3Liaisonssecondaires_3.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_R3Axesforts_1,lyr_R3Liaisonsprincipales_2,lyr_R3Liaisonssecondaires_3];
lyr_R3Axesforts_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'Ligne', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'Nom', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_R3Liaisonsprincipales_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'Ligne', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_R3Liaisonssecondaires_3.set('fieldAliases', {'fid': 'fid', 'id': 'ID', 'LINE_NR': 'Ligne', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'Nom', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_R3Axesforts_1.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'NAME': 'TextEdit', 'ADMIN': 'Hidden', 'A_CONTACT': 'Hidden', });
lyr_R3Liaisonsprincipales_2.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'NAME': 'TextEdit', 'ADMIN': 'Hidden', 'A_CONTACT': 'Hidden', });
lyr_R3Liaisonssecondaires_3.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'NAME': 'TextEdit', 'ADMIN': 'Hidden', 'A_CONTACT': 'Hidden', });
lyr_R3Axesforts_1.set('fieldLabels', {'id': 'inline label - visible with data', 'LINE_NR': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_R3Liaisonsprincipales_2.set('fieldLabels', {'id': 'inline label - visible with data', 'LINE_NR': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_R3Liaisonssecondaires_3.set('fieldLabels', {'id': 'inline label - visible with data', 'LINE_NR': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_R3Liaisonssecondaires_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});