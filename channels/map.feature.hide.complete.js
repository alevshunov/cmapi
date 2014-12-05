cmapi.channel["map.feature.hide.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.hide.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature ID's.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string",
                  "default": "N/A"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string",
                  "default": "N/A"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This details object is new"
  }]
};
