ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([652710.517737, 5795705.427768, 709595.151713, 5839579.778771]);
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
var format_export_reseau3PVGR3_1 = new ol.format.GeoJSON();
var features_export_reseau3PVGR3_1 = format_export_reseau3PVGR3_1.readFeatures(json_export_reseau3PVGR3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export_reseau3PVGR3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export_reseau3PVGR3_1.addFeatures(features_export_reseau3PVGR3_1);
var lyr_export_reseau3PVGR3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export_reseau3PVGR3_1, 
                style: style_export_reseau3PVGR3_1,
                popuplayertitle: "export_reseau3 — PVG-R3",
                interactive: false,
    title: 'export_reseau3 — PVG-R3<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_0.png" /> 99<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_1.png" /> A<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_2.png" /> B<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_3.png" /> C<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_4.png" /> CGN1<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_5.png" /> CGN2<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_6.png" /> D<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_7.png" /> E<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_8.png" /> Ceinture d\'Agglomération<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_9.png" /> Moyenne Ceinture<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_10.png" /> Petite Ceinture<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_11.png" /> RVS<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_12.png" /> T (Thoiry - Ferney)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_13.png" /> U (Lignon - PLO)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_14.png" /> V (Bernex-Onex-Bâtie)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_15.png" /> W (Aéroport)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_16.png" /> X (Veyrier - GE Sud)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_17.png" /> Y (Choulex / GE - Est)<br />\
    <img src="styles/legend/export_reseau3PVGR3_1_18.png" /> <br />'
        });

lyr_CartoDbPositron_0.setVisible(true);lyr_export_reseau3PVGR3_1.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_export_reseau3PVGR3_1];
lyr_export_reseau3PVGR3_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_export_reseau3PVGR3_1.set('fieldImages', {'fid': '', 'id': '', 'LINE_NR': '', 'CLASS': '', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_export_reseau3PVGR3_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'no label', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_export_reseau3PVGR3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});