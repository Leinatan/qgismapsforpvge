ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([653720.033874, 5797181.147527, 718906.372385, 5838532.984058]);
var wms_layers = [];


        var lyr_EsriGraylight_0 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_20250331_Liaisonssecondaires_1 = new ol.format.GeoJSON();
var features_20250331_Liaisonssecondaires_1 = format_20250331_Liaisonssecondaires_1.readFeatures(json_20250331_Liaisonssecondaires_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20250331_Liaisonssecondaires_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20250331_Liaisonssecondaires_1.addFeatures(features_20250331_Liaisonssecondaires_1);
var lyr_20250331_Liaisonssecondaires_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20250331_Liaisonssecondaires_1, 
                style: style_20250331_Liaisonssecondaires_1,
                popuplayertitle: "2025.03.31_Liaisons secondaires",
                interactive: true,
                title: '2025.03.31_Liaisons secondaires'
            });
var format_20250331_Liaisonsprincipales_2 = new ol.format.GeoJSON();
var features_20250331_Liaisonsprincipales_2 = format_20250331_Liaisonsprincipales_2.readFeatures(json_20250331_Liaisonsprincipales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20250331_Liaisonsprincipales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20250331_Liaisonsprincipales_2.addFeatures(features_20250331_Liaisonsprincipales_2);
var lyr_20250331_Liaisonsprincipales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20250331_Liaisonsprincipales_2, 
                style: style_20250331_Liaisonsprincipales_2,
                popuplayertitle: "2025.03.31_Liaisons principales",
                interactive: true,
                title: '2025.03.31_Liaisons principales'
            });
var format_20250331_Axesforts_3 = new ol.format.GeoJSON();
var features_20250331_Axesforts_3 = format_20250331_Axesforts_3.readFeatures(json_20250331_Axesforts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20250331_Axesforts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20250331_Axesforts_3.addFeatures(features_20250331_Axesforts_3);
var lyr_20250331_Axesforts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20250331_Axesforts_3, 
                style: style_20250331_Axesforts_3,
                popuplayertitle: "2025.03.31_Axes forts",
                interactive: true,
                title: '2025.03.31_Axes forts'
            });

lyr_EsriGraylight_0.setVisible(true);lyr_20250331_Liaisonssecondaires_1.setVisible(true);lyr_20250331_Liaisonsprincipales_2.setVisible(true);lyr_20250331_Axesforts_3.setVisible(true);
var layersList = [lyr_EsriGraylight_0,lyr_20250331_Liaisonssecondaires_1,lyr_20250331_Liaisonsprincipales_2,lyr_20250331_Axesforts_3];
lyr_20250331_Liaisonssecondaires_1.set('fieldAliases', {'fid': 'fid', 'id': 'ID', 'LINE_NR': 'Ligne', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'Nom', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_20250331_Liaisonsprincipales_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_20250331_Axesforts_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'Ligne', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'Nom', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_20250331_Liaisonssecondaires_1.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'NAME': 'TextEdit', 'ADMIN': 'Hidden', 'A_CONTACT': 'Hidden', });
lyr_20250331_Liaisonsprincipales_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'TextEdit', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_20250331_Axesforts_3.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'NAME': 'TextEdit', 'ADMIN': 'Hidden', 'A_CONTACT': 'Hidden', });
lyr_20250331_Liaisonssecondaires_1.set('fieldLabels', {'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'NAME': 'no label', });
lyr_20250331_Liaisonsprincipales_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_20250331_Axesforts_3.set('fieldLabels', {'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'NAME': 'no label', });
lyr_20250331_Axesforts_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});