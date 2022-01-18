var wms_layers = [];

var lyr_OpenStreetMapnaturaliste_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://osm.geo2france.fr/mapcache/",
    attributions: ' ',
                              params: {
                                "LAYERS": "naturaliste",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap - naturaliste",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapnaturaliste_0, 0]);
var format_PrimtreduPnEPSE_1 = new ol.format.GeoJSON();
var features_PrimtreduPnEPSE_1 = format_PrimtreduPnEPSE_1.readFeatures(json_PrimtreduPnEPSE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtreduPnEPSE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtreduPnEPSE_1.addFeatures(features_PrimtreduPnEPSE_1);
var lyr_PrimtreduPnEPSE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimtreduPnEPSE_1, 
                style: style_PrimtreduPnEPSE_1,
                interactive: true,
                title: '<img src="styles/legend/PrimtreduPnEPSE_1.png" /> Périmètre du PnEPSE'
            });
var format_FrontireFrancoBelge_2 = new ol.format.GeoJSON();
var features_FrontireFrancoBelge_2 = format_FrontireFrancoBelge_2.readFeatures(json_FrontireFrancoBelge_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrontireFrancoBelge_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontireFrancoBelge_2.addFeatures(features_FrontireFrancoBelge_2);
var lyr_FrontireFrancoBelge_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrontireFrancoBelge_2, 
                style: style_FrontireFrancoBelge_2,
                interactive: true,
                title: '<img src="styles/legend/FrontireFrancoBelge_2.png" /> Frontière Franco-Belge'
            });
var format_LaScarpeetlEscaut_3 = new ol.format.GeoJSON();
var features_LaScarpeetlEscaut_3 = format_LaScarpeetlEscaut_3.readFeatures(json_LaScarpeetlEscaut_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaScarpeetlEscaut_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaScarpeetlEscaut_3.addFeatures(features_LaScarpeetlEscaut_3);
var lyr_LaScarpeetlEscaut_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaScarpeetlEscaut_3, 
                style: style_LaScarpeetlEscaut_3,
                interactive: true,
                title: '<img src="styles/legend/LaScarpeetlEscaut_3.png" /> La Scarpe et l\'Escaut'
            });
var format_BasedescircuitsderandonnesduPnEPSE_4 = new ol.format.GeoJSON();
var features_BasedescircuitsderandonnesduPnEPSE_4 = format_BasedescircuitsderandonnesduPnEPSE_4.readFeatures(json_BasedescircuitsderandonnesduPnEPSE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasedescircuitsderandonnesduPnEPSE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasedescircuitsderandonnesduPnEPSE_4.addFeatures(features_BasedescircuitsderandonnesduPnEPSE_4);
var lyr_BasedescircuitsderandonnesduPnEPSE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BasedescircuitsderandonnesduPnEPSE_4, 
                style: style_BasedescircuitsderandonnesduPnEPSE_4,
                interactive: true,
    title: 'Base des circuits de randonnées du PnEPSE<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_0.png" /> Cyclo<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_1.png" /> Equestre<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_2.png" /> GR<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_3.png" /> GRP<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_4.png" /> Pedestre<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_5.png" /> RAVEL<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_6.png" /> Voie Verte<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_7.png" /> VTT<br />\
    <img src="styles/legend/BasedescircuitsderandonnesduPnEPSE_4_8.png" /> <br />'
        });
var format_GaresduPnEPSE_5 = new ol.format.GeoJSON();
var features_GaresduPnEPSE_5 = format_GaresduPnEPSE_5.readFeatures(json_GaresduPnEPSE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaresduPnEPSE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaresduPnEPSE_5.addFeatures(features_GaresduPnEPSE_5);
var lyr_GaresduPnEPSE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GaresduPnEPSE_5, 
                style: style_GaresduPnEPSE_5,
                interactive: true,
                title: '<img src="styles/legend/GaresduPnEPSE_5.png" /> Gares du PnEPSE'
            });
var format_InfoTourisme_6 = new ol.format.GeoJSON();
var features_InfoTourisme_6 = format_InfoTourisme_6.readFeatures(json_InfoTourisme_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfoTourisme_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfoTourisme_6.addFeatures(features_InfoTourisme_6);
var lyr_InfoTourisme_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfoTourisme_6, 
                style: style_InfoTourisme_6,
                interactive: true,
                title: '<img src="styles/legend/InfoTourisme_6.png" /> Info Tourisme'
            });
var format_quipementsnaturepdagogiques_7 = new ol.format.GeoJSON();
var features_quipementsnaturepdagogiques_7 = format_quipementsnaturepdagogiques_7.readFeatures(json_quipementsnaturepdagogiques_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quipementsnaturepdagogiques_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quipementsnaturepdagogiques_7.addFeatures(features_quipementsnaturepdagogiques_7);
var lyr_quipementsnaturepdagogiques_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_quipementsnaturepdagogiques_7, 
                style: style_quipementsnaturepdagogiques_7,
                interactive: true,
                title: '<img src="styles/legend/quipementsnaturepdagogiques_7.png" /> Équipements nature pédagogiques'
            });
var format_Cafes_rando_PNRSE_8 = new ol.format.GeoJSON();
var features_Cafes_rando_PNRSE_8 = format_Cafes_rando_PNRSE_8.readFeatures(json_Cafes_rando_PNRSE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafes_rando_PNRSE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafes_rando_PNRSE_8.addFeatures(features_Cafes_rando_PNRSE_8);
var lyr_Cafes_rando_PNRSE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafes_rando_PNRSE_8, 
                style: style_Cafes_rando_PNRSE_8,
                interactive: true,
                title: '<img src="styles/legend/Cafes_rando_PNRSE_8.png" /> Cafes_rando_PNRSE'
            });

lyr_OpenStreetMapnaturaliste_0.setVisible(true);lyr_PrimtreduPnEPSE_1.setVisible(true);lyr_FrontireFrancoBelge_2.setVisible(true);lyr_LaScarpeetlEscaut_3.setVisible(true);lyr_BasedescircuitsderandonnesduPnEPSE_4.setVisible(true);lyr_GaresduPnEPSE_5.setVisible(true);lyr_InfoTourisme_6.setVisible(true);lyr_quipementsnaturepdagogiques_7.setVisible(true);lyr_Cafes_rando_PNRSE_8.setVisible(true);
var layersList = [lyr_OpenStreetMapnaturaliste_0,lyr_PrimtreduPnEPSE_1,lyr_FrontireFrancoBelge_2,lyr_LaScarpeetlEscaut_3,lyr_BasedescircuitsderandonnesduPnEPSE_4,lyr_GaresduPnEPSE_5,lyr_InfoTourisme_6,lyr_quipementsnaturepdagogiques_7,lyr_Cafes_rando_PNRSE_8];
lyr_PrimtreduPnEPSE_1.set('fieldAliases', {'INTITULE': 'INTITULE', 'SOURCES': 'SOURCES', 'DATE_MAJ': 'DATE_MAJ', 'SURF_HA': 'SURF_HA', });
lyr_FrontireFrancoBelge_2.set('fieldAliases', {'Id': 'Id', });
lyr_LaScarpeetlEscaut_3.set('fieldAliases', {'ID': 'ID', 'CLASS_PNR': 'CLASS_PNR', 'DATE_MAJ': 'DATE_MAJ', 'AUTEUR': 'AUTEUR', 'TOPON_Parc': 'TOPON_Parc', 'gestion': 'gestion', 'lineaire': 'lineaire', 'FDSEA': 'FDSEA', 'OBJECTID': 'OBJECTID', 'CATEG': 'CATEG', 'NOMA': 'NOMA', 'NOMB': 'NOMB', 'NOM_BASS_1': 'NOM_BASS_1', 'remarque': 'remarque', 'BCAE': 'BCAE', 'Gestion2': 'Gestion2', 'Gestion3': 'Gestion3', 'CLASS_LEG': 'CLASS_LEG', 'Souterrain': 'Souterrain', });
lyr_BasedescircuitsderandonnesduPnEPSE_4.set('fieldAliases', {'id': 'id', 'num_carte': 'num_carte', 'ident_pnr': 'ident_pnr', 'nom_maj': 'nom_maj', 'nom_min': 'nom_min', 'type': 'type', 'categorie': 'categorie', 'pdipr': 'pdipr', 'variante': 'variante', 'duree': 'duree', 'gestaire': 'gestaire', 'gest_diff': 'gest_diff', 'comm_vill': 'comm_vill', 'epci': 'epci', 'comment': 'comment', 'cr_entret': 'cr_entret', 'cr_balis': 'cr_balis', 'cr_enterpr': 'cr_enterpr', 'cr_patrem': 'cr_patrem', 'cr_access': 'cr_access', 'tot_crit': 'tot_crit', 'parc': 'parc', 'sources': 'sources', 'auteur': 'auteur', 'date_maj': 'date_maj', 'long_off': 'long_off', 'long_sig': 'long_sig', 'carte_natu': 'carte_natu', 'carte_cult': 'carte_cult', 'iti_web': 'iti_web', 'com_acess': 'com_acess', 'url': 'url', 'type_rando': 'type_rando', });
lyr_GaresduPnEPSE_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE': 'SOURCE', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'HAUTEUR': 'HAUTEUR', 'CODEGARE': 'CODEGARE', 'DATEMAJ': 'DATEMAJ', 'VALIDATION': 'VALIDATION', 'CODEGARE_1': 'CODEGARE_1', 'GARES': 'GARES', 'TYPE': 'TYPE', 'latitude': 'latitude', 'longitude': 'longitude', 'departures': 'departures', 'id': 'id', 'name': 'name', 'layer': 'layer', 'path': 'path', 'select': 'select', });
lyr_InfoTourisme_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'network_ty': 'network_ty', 'rcn_ref': 'rcn_ref', 'tourism': 'tourism', 'waterway': 'waterway', 'name': 'name', 'phone': 'phone', 'website': 'website', 'artist_nam': 'artist_nam', 'artwork_ty': 'artwork_ty', 'descriptio': 'descriptio', 'material': 'material', 'disused': 'disused', 'man_made': 'man_made', 'windmill_v': 'windmill_v', 'informatio': 'informatio', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'internet_a': 'internet_a', 'operator': 'operator', 'access': 'access', 'addr_city': 'addr_city', 'addr_postc': 'addr_postc', 'email': 'email', 'fax': 'fax', 'wheelchair': 'wheelchair', 'board_type': 'board_type', 'name_fr': 'name_fr', 'historic': 'historic', 'inscriptio': 'inscriptio', 'wikipedia': 'wikipedia', 'amenity': 'amenity', 'internet_1': 'internet_1', 'rooms': 'rooms', 'wikidata': 'wikidata', 'stars': 'stars', 'facebook': 'facebook', 'beds': 'beds', 'smoking': 'smoking', });
lyr_quipementsnaturepdagogiques_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'CATEGORIE': 'CATEGORIE', 'TYPE_SITE': 'TYPE_SITE', 'STRUCTURE': 'STRUCTURE', 'COMMUNE': 'COMMUNE', 'CODE_INSEE': 'CODE_INSEE', 'PARC': 'PARC', 'IDENT_SIG': 'IDENT_SIG', 'Precision': 'Precision', 'Date_MAJ': 'Date_MAJ', 'GESTION': 'GESTION', 'REMARQ': 'REMARQ', });
lyr_Cafes_rando_PNRSE_8.set('fieldAliases', {'NUM': 'NUM', 'field_2': 'field_2', 'NOM_PROPRI': 'NOM_PROPRI', 'NOM_CAFE': 'NOM_CAFE', 'ADRESSE': 'ADRESSE', 'CODE_POSTA': 'CODE_POSTA', 'Ville': 'Ville', 'CODE_INSEE': 'CODE_INSEE', 'TEL': 'TEL', 'OT': 'OT', 'RANDO_PROX': 'RANDO_PROX', 'DATE_PREAU': 'DATE_PREAU', 'DATE_AUDIT': 'DATE_AUDIT', 'CLASS_CAFE': 'CLASS_CAFE', 'ACTIF': 'ACTIF', });
lyr_PrimtreduPnEPSE_1.set('fieldImages', {'INTITULE': 'TextEdit', 'SOURCES': 'TextEdit', 'DATE_MAJ': 'DateTime', 'SURF_HA': 'TextEdit', });
lyr_FrontireFrancoBelge_2.set('fieldImages', {'Id': 'Range', });
lyr_LaScarpeetlEscaut_3.set('fieldImages', {'ID': 'TextEdit', 'CLASS_PNR': 'TextEdit', 'DATE_MAJ': 'DateTime', 'AUTEUR': 'TextEdit', 'TOPON_Parc': 'TextEdit', 'gestion': 'TextEdit', 'lineaire': 'TextEdit', 'FDSEA': 'TextEdit', 'OBJECTID': 'TextEdit', 'CATEG': 'TextEdit', 'NOMA': 'TextEdit', 'NOMB': 'TextEdit', 'NOM_BASS_1': 'TextEdit', 'remarque': 'TextEdit', 'BCAE': 'TextEdit', 'Gestion2': 'TextEdit', 'Gestion3': 'TextEdit', 'CLASS_LEG': 'TextEdit', 'Souterrain': 'TextEdit', });
lyr_BasedescircuitsderandonnesduPnEPSE_4.set('fieldImages', {'id': 'TextEdit', 'num_carte': 'TextEdit', 'ident_pnr': 'TextEdit', 'nom_maj': 'TextEdit', 'nom_min': 'TextEdit', 'type': 'TextEdit', 'categorie': 'TextEdit', 'pdipr': 'TextEdit', 'variante': 'TextEdit', 'duree': 'TextEdit', 'gestaire': 'TextEdit', 'gest_diff': 'TextEdit', 'comm_vill': 'TextEdit', 'epci': 'TextEdit', 'comment': 'TextEdit', 'cr_entret': 'TextEdit', 'cr_balis': 'TextEdit', 'cr_enterpr': 'TextEdit', 'cr_patrem': 'TextEdit', 'cr_access': 'TextEdit', 'tot_crit': 'TextEdit', 'parc': 'TextEdit', 'sources': 'TextEdit', 'auteur': 'TextEdit', 'date_maj': 'TextEdit', 'long_off': 'TextEdit', 'long_sig': 'TextEdit', 'carte_natu': 'TextEdit', 'carte_cult': 'TextEdit', 'iti_web': 'TextEdit', 'com_acess': 'TextEdit', 'url': 'TextEdit', 'type_rando': 'TextEdit', });
lyr_GaresduPnEPSE_5.set('fieldImages', {'OBJECTID': 'Range', 'SOURCE': 'TextEdit', 'CATEGORIE': 'TextEdit', 'NATURE': 'TextEdit', 'HAUTEUR': 'Range', 'CODEGARE': 'TextEdit', 'DATEMAJ': 'DateTime', 'VALIDATION': 'Range', 'CODEGARE_1': 'TextEdit', 'GARES': 'TextEdit', 'TYPE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'departures': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'select': 'TextEdit', });
lyr_InfoTourisme_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'network_ty': 'TextEdit', 'rcn_ref': 'TextEdit', 'tourism': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'artist_nam': 'TextEdit', 'artwork_ty': 'TextEdit', 'descriptio': 'TextEdit', 'material': 'TextEdit', 'disused': 'TextEdit', 'man_made': 'TextEdit', 'windmill_v': 'TextEdit', 'informatio': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'internet_a': 'TextEdit', 'operator': 'TextEdit', 'access': 'TextEdit', 'addr_city': 'TextEdit', 'addr_postc': 'TextEdit', 'email': 'TextEdit', 'fax': 'TextEdit', 'wheelchair': 'TextEdit', 'board_type': 'TextEdit', 'name_fr': 'TextEdit', 'historic': 'TextEdit', 'inscriptio': 'TextEdit', 'wikipedia': 'TextEdit', 'amenity': 'TextEdit', 'internet_1': 'TextEdit', 'rooms': 'TextEdit', 'wikidata': 'TextEdit', 'stars': 'TextEdit', 'facebook': 'TextEdit', 'beds': 'TextEdit', 'smoking': 'TextEdit', });
lyr_quipementsnaturepdagogiques_7.set('fieldImages', {'OBJECTID': 'Range', 'NOM': 'TextEdit', 'CATEGORIE': 'TextEdit', 'TYPE_SITE': 'TextEdit', 'STRUCTURE': 'TextEdit', 'COMMUNE': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'PARC': 'TextEdit', 'IDENT_SIG': 'TextEdit', 'Precision': 'TextEdit', 'Date_MAJ': 'DateTime', 'GESTION': 'TextEdit', 'REMARQ': 'TextEdit', });
lyr_Cafes_rando_PNRSE_8.set('fieldImages', {'NUM': 'TextEdit', 'field_2': 'TextEdit', 'NOM_PROPRI': 'TextEdit', 'NOM_CAFE': 'TextEdit', 'ADRESSE': 'TextEdit', 'CODE_POSTA': 'TextEdit', 'Ville': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'TEL': 'TextEdit', 'OT': 'TextEdit', 'RANDO_PROX': 'TextEdit', 'DATE_PREAU': 'TextEdit', 'DATE_AUDIT': 'TextEdit', 'CLASS_CAFE': 'TextEdit', 'ACTIF': 'TextEdit', });
lyr_PrimtreduPnEPSE_1.set('fieldLabels', {'INTITULE': 'no label', 'SOURCES': 'no label', 'DATE_MAJ': 'no label', 'SURF_HA': 'no label', });
lyr_FrontireFrancoBelge_2.set('fieldLabels', {'Id': 'no label', });
lyr_LaScarpeetlEscaut_3.set('fieldLabels', {'ID': 'no label', 'CLASS_PNR': 'no label', 'DATE_MAJ': 'no label', 'AUTEUR': 'no label', 'TOPON_Parc': 'no label', 'gestion': 'no label', 'lineaire': 'no label', 'FDSEA': 'no label', 'OBJECTID': 'no label', 'CATEG': 'no label', 'NOMA': 'no label', 'NOMB': 'no label', 'NOM_BASS_1': 'no label', 'remarque': 'no label', 'BCAE': 'no label', 'Gestion2': 'no label', 'Gestion3': 'no label', 'CLASS_LEG': 'no label', 'Souterrain': 'no label', });
lyr_BasedescircuitsderandonnesduPnEPSE_4.set('fieldLabels', {'id': 'no label', 'num_carte': 'no label', 'ident_pnr': 'no label', 'nom_maj': 'no label', 'nom_min': 'header label', 'type': 'no label', 'categorie': 'no label', 'pdipr': 'no label', 'variante': 'no label', 'duree': 'no label', 'gestaire': 'no label', 'gest_diff': 'no label', 'comm_vill': 'no label', 'epci': 'no label', 'comment': 'no label', 'cr_entret': 'no label', 'cr_balis': 'no label', 'cr_enterpr': 'no label', 'cr_patrem': 'no label', 'cr_access': 'no label', 'tot_crit': 'no label', 'parc': 'no label', 'sources': 'no label', 'auteur': 'no label', 'date_maj': 'no label', 'long_off': 'no label', 'long_sig': 'no label', 'carte_natu': 'no label', 'carte_cult': 'no label', 'iti_web': 'no label', 'com_acess': 'no label', 'url': 'no label', 'type_rando': 'no label', });
lyr_GaresduPnEPSE_5.set('fieldLabels', {'OBJECTID': 'no label', 'SOURCE': 'no label', 'CATEGORIE': 'no label', 'NATURE': 'no label', 'HAUTEUR': 'no label', 'CODEGARE': 'no label', 'DATEMAJ': 'no label', 'VALIDATION': 'no label', 'CODEGARE_1': 'no label', 'GARES': 'no label', 'TYPE': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'departures': 'no label', 'id': 'no label', 'name': 'no label', 'layer': 'no label', 'path': 'no label', 'select': 'no label', });
lyr_InfoTourisme_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'network_ty': 'no label', 'rcn_ref': 'no label', 'tourism': 'no label', 'waterway': 'no label', 'name': 'no label', 'phone': 'no label', 'website': 'no label', 'artist_nam': 'no label', 'artwork_ty': 'no label', 'descriptio': 'no label', 'material': 'no label', 'disused': 'no label', 'man_made': 'no label', 'windmill_v': 'no label', 'informatio': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'internet_a': 'no label', 'operator': 'no label', 'access': 'no label', 'addr_city': 'no label', 'addr_postc': 'no label', 'email': 'no label', 'fax': 'no label', 'wheelchair': 'no label', 'board_type': 'no label', 'name_fr': 'no label', 'historic': 'no label', 'inscriptio': 'no label', 'wikipedia': 'no label', 'amenity': 'no label', 'internet_1': 'no label', 'rooms': 'no label', 'wikidata': 'no label', 'stars': 'no label', 'facebook': 'no label', 'beds': 'no label', 'smoking': 'no label', });
lyr_quipementsnaturepdagogiques_7.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'CATEGORIE': 'no label', 'TYPE_SITE': 'no label', 'STRUCTURE': 'no label', 'COMMUNE': 'no label', 'CODE_INSEE': 'no label', 'PARC': 'no label', 'IDENT_SIG': 'no label', 'Precision': 'no label', 'Date_MAJ': 'no label', 'GESTION': 'no label', 'REMARQ': 'no label', });
lyr_Cafes_rando_PNRSE_8.set('fieldLabels', {'NUM': 'no label', 'field_2': 'no label', 'NOM_PROPRI': 'no label', 'NOM_CAFE': 'no label', 'ADRESSE': 'no label', 'CODE_POSTA': 'no label', 'Ville': 'no label', 'CODE_INSEE': 'no label', 'TEL': 'no label', 'OT': 'no label', 'RANDO_PROX': 'no label', 'DATE_PREAU': 'no label', 'DATE_AUDIT': 'no label', 'CLASS_CAFE': 'no label', 'ACTIF': 'no label', });
lyr_Cafes_rando_PNRSE_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});