ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([636226.701335, 5766896.312721, 753177.831970, 5854645.014727]);
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
var format_Maillagefin_1 = new ol.format.GeoJSON();
var features_Maillagefin_1 = format_Maillagefin_1.readFeatures(json_Maillagefin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maillagefin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maillagefin_1.addFeatures(features_Maillagefin_1);
var lyr_Maillagefin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maillagefin_1, 
                style: style_Maillagefin_1,
                popuplayertitle: "Maillage fin",
                interactive: true,
                title: '<img src="styles/legend/Maillagefin_1.png" /> Maillage fin'
            });
var format_Rseausecondaire_2 = new ol.format.GeoJSON();
var features_Rseausecondaire_2 = format_Rseausecondaire_2.readFeatures(json_Rseausecondaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseausecondaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseausecondaire_2.addFeatures(features_Rseausecondaire_2);
var lyr_Rseausecondaire_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseausecondaire_2, 
                style: style_Rseausecondaire_2,
                popuplayertitle: "Réseau secondaire",
                interactive: true,
    title: 'Réseau secondaire<br />\
    <img src="styles/legend/Rseausecondaire_2_0.png" /> T (Thoiry - Ferney)<br />\
    <img src="styles/legend/Rseausecondaire_2_1.png" /> U (Lignon - PLO)<br />\
    <img src="styles/legend/Rseausecondaire_2_2.png" /> V (Bernex-Onex-Bâtie)<br />\
    <img src="styles/legend/Rseausecondaire_2_3.png" /> W (Aéroport)<br />\
    <img src="styles/legend/Rseausecondaire_2_4.png" /> X (Veyrier - GE Sud)<br />\
    <img src="styles/legend/Rseausecondaire_2_5.png" /> Y (Choulex / GE - Est)<br />'
        });
var format_Rseauprimaire_3 = new ol.format.GeoJSON();
var features_Rseauprimaire_3 = format_Rseauprimaire_3.readFeatures(json_Rseauprimaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseauprimaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseauprimaire_3.addFeatures(features_Rseauprimaire_3);
var lyr_Rseauprimaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseauprimaire_3, 
                style: style_Rseauprimaire_3,
                popuplayertitle: "Réseau primaire",
                interactive: true,
    title: 'Réseau primaire<br />\
    <img src="styles/legend/Rseauprimaire_3_0.png" /> A<br />\
    <img src="styles/legend/Rseauprimaire_3_1.png" /> B<br />\
    <img src="styles/legend/Rseauprimaire_3_2.png" /> C<br />\
    <img src="styles/legend/Rseauprimaire_3_3.png" /> CGN1<br />\
    <img src="styles/legend/Rseauprimaire_3_4.png" /> CGN2<br />\
    <img src="styles/legend/Rseauprimaire_3_5.png" /> D<br />\
    <img src="styles/legend/Rseauprimaire_3_6.png" /> E<br />\
    <img src="styles/legend/Rseauprimaire_3_7.png" /> Ceinture d\'Agglomération<br />\
    <img src="styles/legend/Rseauprimaire_3_8.png" /> Moyenne Ceinture<br />\
    <img src="styles/legend/Rseauprimaire_3_9.png" /> Petite Ceinture<br />\
    <img src="styles/legend/Rseauprimaire_3_10.png" /> <br />'
        });

lyr_CartoDbPositron_0.setVisible(true);lyr_Maillagefin_1.setVisible(true);lyr_Rseausecondaire_2.setVisible(true);lyr_Rseauprimaire_3.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_Maillagefin_1,lyr_Rseausecondaire_2,lyr_Rseauprimaire_3];
lyr_Maillagefin_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_Rseausecondaire_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_Rseauprimaire_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_Maillagefin_1.set('fieldImages', {'fid': '', 'id': '', 'LINE_NR': '', 'CLASS': '', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_Rseausecondaire_2.set('fieldImages', {'fid': '', 'id': '', 'LINE_NR': '', 'CLASS': '', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_Rseauprimaire_3.set('fieldImages', {'fid': '', 'id': '', 'LINE_NR': '', 'CLASS': '', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_Maillagefin_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_Rseausecondaire_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_Rseauprimaire_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_Rseauprimaire_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});