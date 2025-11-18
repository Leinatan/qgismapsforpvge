var size = 0;
var placement = 'point';

var style_20250331_ReseauVeloReseauVeloUtilitaire_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_20250331_ReseauVeloReseauVeloUtilitaire_1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,64,58,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,146,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,211,17,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,156,53,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,129,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,201,196,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(198,146,20,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,191,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,126,12,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,161,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,111,52,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule11_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(196,60,57,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule12_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,191,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule13_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(82,200,151,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule14_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,136,190,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.4699999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule15_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(190,207,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule16_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,90,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule17_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,182,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule18_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.23}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_20250331_ReseauVeloReseauVeloUtilitaire_1rule19_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(132,132,132,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.4699999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,226,126,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
            }
        }
        var style = rules_20250331_ReseauVeloReseauVeloUtilitaire_1(feature, value);
        ;

    return style;
};
