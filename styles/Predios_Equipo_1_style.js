var size = 0;
var placement = 'point';

var style_Predios_Equipo_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "5.2px \'Open Sans\', sans-serif";
    var labelFill = "#0000ff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Numero_P") !== null) {
        labelText = String(feature.get("Numero_P"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,0,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(233,229,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
