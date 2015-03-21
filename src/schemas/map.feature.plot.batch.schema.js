cmapi.channel["map.feature.plot.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.batch",
    "description": "Plots a batch of feature data on the map.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.plot payloads minus the messageId property.  See map.feature.plot for the object format and schema",
        "type": "array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all feature objects in the features array that don’t include an overlayId. I.e., similar behavior to CSS.  See map.feature.plot for more details",
        "type": "string"
      },
      "format": {
        "description": "The default format to be applied to all feature objects in the features array that don’t include a format value. I.e., similar behavior to CSS.  See map.feature.plot for definition of format property.",
        "type": "string"
      },
      "zoom": {
        "description": "Whether the map should zoom to the newly loaded feature data.  See map.feature.plot for definition of format property.",
        "type": "boolean"
      },
      "readOnly": {
        "description": "The default value for readOnly to be applied to all feature objects in the features array that don’t include a readOnly value. I.e., similar behavior to CSS.  See map.feature.plot for definition of readOnly property.",
        "type": "boolean"
      }
    },
    "required": ["features"]
  }
};
