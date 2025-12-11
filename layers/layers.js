ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([665562.055083, 5808117.476868, 698377.178870, 5828793.395134]);
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
var format_Equipementpublicespacepublicobs_equipements_espaces_pub_2 = new ol.format.GeoJSON();
var features_Equipementpublicespacepublicobs_equipements_espaces_pub_2 = format_Equipementpublicespacepublicobs_equipements_espaces_pub_2.readFeatures(json_Equipementpublicespacepublicobs_equipements_espaces_pub_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipementpublicespacepublicobs_equipements_espaces_pub_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipementpublicespacepublicobs_equipements_espaces_pub_2.addFeatures(features_Equipementpublicespacepublicobs_equipements_espaces_pub_2);
var lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipementpublicespacepublicobs_equipements_espaces_pub_2, 
                style: style_Equipementpublicespacepublicobs_equipements_espaces_pub_2,
                popuplayertitle: 'Equipement public (espace public) — obs_equipements_espaces_pub',
                interactive: false,
    title: 'Equipement public (espace public) — obs_equipements_espaces_pub<br />\
    <img src="styles/legend/Equipementpublicespacepublicobs_equipements_espaces_pub_2_0.png" /> <br />' });
var format_quipementpublicSportsetloisirs_3 = new ol.format.GeoJSON();
var features_quipementpublicSportsetloisirs_3 = format_quipementpublicSportsetloisirs_3.readFeatures(json_quipementpublicSportsetloisirs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quipementpublicSportsetloisirs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quipementpublicSportsetloisirs_3.addFeatures(features_quipementpublicSportsetloisirs_3);
var lyr_quipementpublicSportsetloisirs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_quipementpublicSportsetloisirs_3, 
                style: style_quipementpublicSportsetloisirs_3,
                popuplayertitle: 'Équipement public - Sports et loisirs',
                interactive: true,
                title: '<img src="styles/legend/quipementpublicSportsetloisirs_3.png" /> Équipement public - Sports et loisirs'
            });
var format_quipementpublicAdministrationculteculturesantetsocial_4 = new ol.format.GeoJSON();
var features_quipementpublicAdministrationculteculturesantetsocial_4 = format_quipementpublicAdministrationculteculturesantetsocial_4.readFeatures(json_quipementpublicAdministrationculteculturesantetsocial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quipementpublicAdministrationculteculturesantetsocial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quipementpublicAdministrationculteculturesantetsocial_4.addFeatures(features_quipementpublicAdministrationculteculturesantetsocial_4);
var lyr_quipementpublicAdministrationculteculturesantetsocial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_quipementpublicAdministrationculteculturesantetsocial_4, 
                style: style_quipementpublicAdministrationculteculturesantetsocial_4,
                popuplayertitle: 'Équipement public - Administration, culte, culture, santé et social',
                interactive: true,
                title: '<img src="styles/legend/quipementpublicAdministrationculteculturesantetsocial_4.png" /> Équipement public - Administration, culte, culture, santé et social'
            });
var format_quipementpublicEnseignement_5 = new ol.format.GeoJSON();
var features_quipementpublicEnseignement_5 = format_quipementpublicEnseignement_5.readFeatures(json_quipementpublicEnseignement_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quipementpublicEnseignement_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quipementpublicEnseignement_5.addFeatures(features_quipementpublicEnseignement_5);
var lyr_quipementpublicEnseignement_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_quipementpublicEnseignement_5, 
                style: style_quipementpublicEnseignement_5,
                popuplayertitle: 'Équipement public - Enseignement',
                interactive: true,
    title: 'Équipement public - Enseignement<br />\
    <img src="styles/legend/quipementpublicEnseignement_5_0.png" /> Centre de formation, HES, Université<br />\
    <img src="styles/legend/quipementpublicEnseignement_5_1.png" /> Ecole spécialisée<br />\
    <img src="styles/legend/quipementpublicEnseignement_5_2.png" /> Secondaire I &  II<br />\
    <img src="styles/legend/quipementpublicEnseignement_5_3.png" /> École, Parascolaire, Ludothèque<br />\
    <img src="styles/legend/quipementpublicEnseignement_5_4.png" /> Espace de vie enfantine (EVE)<br />' });
var format_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6 = new ol.format.GeoJSON();
var features_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6 = format_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.readFeatures(json_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.addFeatures(features_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6);
var lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6, 
                style: style_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6,
                popuplayertitle: '20251103_Réseau LVC OCT — reseauveloquotidienvconsultation20251103',
                interactive: true,
    title: '20251103_Réseau LVC OCT — reseauveloquotidienvconsultation20251103<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6_0.png" /> Axe fort<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6_1.png" /> Liaison principale<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6_2.png" /> Liaison secondaire<br />\
    <img src="styles/legend/20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6_3.png" /> <br />' });
var group_OCT = new ol.layer.Group({
                                layers: [lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6,],
                                fold: 'open',
                                title: 'OCT'});
var group_OBS_EQUIPEMENTS_ESPACES_PUB = new ol.layer.Group({
                                layers: [lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2,lyr_quipementpublicSportsetloisirs_3,lyr_quipementpublicAdministrationculteculturesantetsocial_4,lyr_quipementpublicEnseignement_5,],
                                fold: 'open',
                                title: 'OBS_EQUIPEMENTS_ESPACES_PUB'});
var group_PVGE = new ol.layer.Group({
                                layers: [lyr_20250331_ReseauVeloReseauVeloUtilitaire_1,],
                                fold: 'close',
                                title: 'PVGE'});
var group_Basic = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basic'});

lyr_CartoDbPositron_0.setVisible(true);lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.setVisible(true);lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2.setVisible(true);lyr_quipementpublicSportsetloisirs_3.setVisible(true);lyr_quipementpublicAdministrationculteculturesantetsocial_4.setVisible(true);lyr_quipementpublicEnseignement_5.setVisible(true);lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,group_PVGE,group_OBS_EQUIPEMENTS_ESPACES_PUB,group_OCT];
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'LINE_NR': 'LINE_NR', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'NAME': 'NAME', 'ADMIN': 'ADMIN', 'A_CONTACT': 'A_CONTACT', });
lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CATEGORIE': 'CATEGORIE', 'SOUS_CATEGORIE': 'SOUS_CATEGORIE', 'STATUT': 'STATUT', 'COMMUNE': 'COMMUNE', 'EQUIP_LIE': 'EQUIP_LIE', 'NOM_USUEL': 'NOM_USUEL', 'LIEN': 'LIEN', 'LEG_1': 'LEG_1', 'IDENTIFIANT': 'IDENTIFIANT', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_quipementpublicSportsetloisirs_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CATEGORIE': 'CATEGORIE', 'SOUS_CATEGORIE': 'SOUS_CATEGORIE', 'STATUT': 'STATUT', 'COMMUNE': 'COMMUNE', 'EQUIP_LIE': 'EQUIP_LIE', 'NOM_USUEL': 'NOM_USUEL', 'LIEN': 'LIEN', 'LEG_1': 'LEG_1', 'IDENTIFIANT': 'IDENTIFIANT', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_quipementpublicAdministrationculteculturesantetsocial_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CATEGORIE': 'CATEGORIE', 'SOUS_CATEGORIE': 'SOUS_CATEGORIE', 'STATUT': 'STATUT', 'COMMUNE': 'COMMUNE', 'EQUIP_LIE': 'EQUIP_LIE', 'NOM_USUEL': 'NOM_USUEL', 'LIEN': 'LIEN', 'LEG_1': 'LEG_1', 'IDENTIFIANT': 'IDENTIFIANT', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_quipementpublicEnseignement_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CATEGORIE': 'CATEGORIE', 'SOUS_CATEGORIE': 'SOUS_CATEGORIE', 'STATUT': 'STATUT', 'COMMUNE': 'COMMUNE', 'EQUIP_LIE': 'EQUIP_LIE', 'NOM_USUEL': 'NOM_USUEL', 'LIEN': 'LIEN', 'LEG_1': 'LEG_1', 'IDENTIFIANT': 'IDENTIFIANT', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.set('fieldAliases', {'fid': 'fid', 'ID_GM_TRON': 'ID_GM_TRON', 'CODE_VOIE': 'CODE_VOIE', 'VOIE': 'VOIE', 'ETAT_EXI': 'ETAT_EXI', 'VQUOT_H': 'VQUOT_H', });
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'LINE_NR': 'TextEdit', 'CLASS': 'TextEdit', 'TYPE': '', 'NAME': '', 'ADMIN': '', 'A_CONTACT': '', });
lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TYPE': '', 'CATEGORIE': '', 'SOUS_CATEGORIE': '', 'STATUT': '', 'COMMUNE': '', 'EQUIP_LIE': '', 'NOM_USUEL': '', 'LIEN': '', 'LEG_1': '', 'IDENTIFIANT': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_quipementpublicSportsetloisirs_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TYPE': '', 'CATEGORIE': '', 'SOUS_CATEGORIE': '', 'STATUT': '', 'COMMUNE': '', 'EQUIP_LIE': '', 'NOM_USUEL': '', 'LIEN': '', 'LEG_1': '', 'IDENTIFIANT': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_quipementpublicAdministrationculteculturesantetsocial_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TYPE': '', 'CATEGORIE': '', 'SOUS_CATEGORIE': '', 'STATUT': '', 'COMMUNE': '', 'EQUIP_LIE': '', 'NOM_USUEL': '', 'LIEN': '', 'LEG_1': '', 'IDENTIFIANT': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_quipementpublicEnseignement_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TYPE': '', 'CATEGORIE': '', 'SOUS_CATEGORIE': '', 'STATUT': '', 'COMMUNE': '', 'EQUIP_LIE': '', 'NOM_USUEL': '', 'LIEN': '', 'LEG_1': '', 'IDENTIFIANT': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.set('fieldImages', {'fid': '', 'ID_GM_TRON': 'TextEdit', 'CODE_VOIE': 'TextEdit', 'VOIE': 'TextEdit', 'ETAT_EXI': 'TextEdit', 'VQUOT_H': 'TextEdit', });
lyr_20250331_ReseauVeloReseauVeloUtilitaire_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'LINE_NR': 'inline label - visible with data', 'CLASS': 'hidden field', 'TYPE': 'hidden field', 'NAME': 'hidden field', 'ADMIN': 'hidden field', 'A_CONTACT': 'hidden field', });
lyr_Equipementpublicespacepublicobs_equipements_espaces_pub_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TYPE': 'no label', 'CATEGORIE': 'no label', 'SOUS_CATEGORIE': 'no label', 'STATUT': 'no label', 'COMMUNE': 'no label', 'EQUIP_LIE': 'no label', 'NOM_USUEL': 'no label', 'LIEN': 'no label', 'LEG_1': 'no label', 'IDENTIFIANT': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_quipementpublicSportsetloisirs_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'TYPE': 'header label - visible with data', 'CATEGORIE': 'header label - visible with data', 'SOUS_CATEGORIE': 'header label - visible with data', 'STATUT': 'hidden field', 'COMMUNE': 'header label - visible with data', 'EQUIP_LIE': 'hidden field', 'NOM_USUEL': 'header label - visible with data', 'LIEN': 'hidden field', 'LEG_1': 'hidden field', 'IDENTIFIANT': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_quipementpublicAdministrationculteculturesantetsocial_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'TYPE': 'header label - visible with data', 'CATEGORIE': 'header label - visible with data', 'SOUS_CATEGORIE': 'header label - visible with data', 'STATUT': 'hidden field', 'COMMUNE': 'header label - visible with data', 'EQUIP_LIE': 'hidden field', 'NOM_USUEL': 'header label - visible with data', 'LIEN': 'hidden field', 'LEG_1': 'hidden field', 'IDENTIFIANT': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_quipementpublicEnseignement_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'TYPE': 'header label - visible with data', 'CATEGORIE': 'header label - visible with data', 'SOUS_CATEGORIE': 'header label - visible with data', 'STATUT': 'no label', 'COMMUNE': 'header label - visible with data', 'EQUIP_LIE': 'hidden field', 'NOM_USUEL': 'header label - visible with data', 'LIEN': 'hidden field', 'LEG_1': 'hidden field', 'IDENTIFIANT': 'hidden field', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.set('fieldLabels', {'fid': 'hidden field', 'ID_GM_TRON': 'hidden field', 'CODE_VOIE': 'hidden field', 'VOIE': 'no label', 'ETAT_EXI': 'hidden field', 'VQUOT_H': 'inline label - visible with data', });
lyr_20251103_RseauLVCOCTreseauveloquotidienvconsultation20251103_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});