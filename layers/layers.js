ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([677077.547030, 5806900.194986, 691598.495407, 5817238.154118]);
var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_20250331_ReseauVeloReseauVeloUtilitaire_1 = new ol.format.GeoJSON();
var features_20250331_ReseauVeloReseauVeloUtilitaire_1 = format_20250331_ReseauVeloReseauVeloUtilitaire_1.readFeatures(json_20250331_ReseauVeloReseauVeloUtilitaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20250331_ReseauVeloReseauVeloUtilitaire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20250331_ReseauVeloReseauVeloUtilitaire_1.addFeatures(features_20250331_ReseauVeloReseauVeloUtilitaire_1);
var lyr_20250331_ReseauVeloReseauVeloUtilitaire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20250331_ReseauVeloReseauVeloUtilitaire_1, 
                style: style_20250331_ReseauVeloReseauVeloUtilitaire_1,
                popuplayertitle: '2025.03.31_ReseauVelo — ReseauVeloUtilitaire',
                interactive: true,
    title: '2025.03.31_ReseauVelo — ReseauVeloUtilitaire<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_0.png" /> A - Meyrin - Annemasse<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_1.png" /> B - Jura - Salève<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_2.png" /> C - La Plaine - Veyrier<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_3.png" /> D - St-Julien - Versoix - Nyon<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_4.png" /> E - Chancy - Douvaine<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_5.png" /> Petite Ceinture<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_6.png" /> Moyenne Ceinture<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_7.png" /> Ceinture Agglomération<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_8.png" /> (CGN)<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_9.png" /> 10 - Aéroport - Cornavin - Bel-Air<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_10.png" /> 11 - Bachet - Evaux - Nations<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_11.png" /> 12 - Collex - Aéroport - Rhône<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_12.png" /> 13 - Thoiry - Ferney - Meyrin<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_13.png" /> 20 - Veyrier - Carouge - Cornavin<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_14.png" /> 40 - Bernex - Bâtie<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_15.png" /> 21 - Croix-de-Rozon - Etoile - Seujet<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_16.png" /> 30 - Eaux-Vives - Champel - Arve<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_17.png" /> 31 - Jonction - Lac<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_18.png" /> Z<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_19.png" /> RVS<br />\
    <img src="styles/legend/20250331_ReseauVeloReseauVeloUtilitaire_1_20.png" /> <br />' });
var format_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2 = new ol.format.GeoJSON();
var features_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2 = format_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.readFeatures(json_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.addFeatures(features_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2);
var lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2, 
                style: style_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2,
                popuplayertitle: '20251103_Réseau LVC OCT — reseauveloquotidienvconsultation20251103',
                interactive: true,
    title: '20251103_Réseau LVC OCT — reseauveloquotidienvconsultation20251103<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2_0.png" /> Axe fort<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2_1.png" /> Liaison principale<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2_2.png" /> Liaison secondaire<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2_3.png" /> <br />' });
var group_OCT = new ol.layer.Group({
                                layers: [lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2,],
                                fold: 'open',
                                title: 'OCT'});
var group_PVGE = new ol.layer.Group({
                                layers: [lyr_20250331_ReseauVeloReseauVeloUtilitaire_1,],
                                fold: 'open',
                                title: 'PVGE'});
var group_Basic = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Basic'});

lyr_CartoDbPositron_0.setVisible(true);lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.setVisible(true);lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,group_PVGE,group_OCT];
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.set('fieldAliases', {'fid': 'fid', 'ID_GM_TRON': 'ID_GM_TRON', 'CODE_VOIE': 'CODE_VOIE', 'VOIE': 'VOIE', 'ETAT_EXI': 'ETAT_EXI', 'VQUOT_H': 'VQUOT_H', });
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'TextEdit', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.set('fieldImages', {'fid': '', 'ID_GM_TRON': 'TextEdit', 'CODE_VOIE': 'TextEdit', 'VOIE': 'TextEdit', 'ETAT_EXI': 'TextEdit', 'VQUOT_H': 'TextEdit', });
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'ADMIN': 'no label', 'A_CONTACT': 'no label', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.set('fieldLabels', {'fid': 'no label', 'ID_GM_TRON': 'no label', 'CODE_VOIE': 'no label', 'VOIE': 'no label', 'ETAT_EXI': 'no label', 'VQUOT_H': 'inline label - visible with data', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});