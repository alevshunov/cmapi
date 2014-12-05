cmapi.channel["map.feature.update"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.update",
    "description": "Update an existing feature on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be updated",
        "type": "string",
        "default": "N/A"
      },
      "name": {
        "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
        "type": "string",
        "default": "N/A"
      },
      "newOverlayId": {
        "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
        "type": "string",
        "default": "N/A"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
      }
    },
    "required": ["featureId"]
  },
  "notes": ["For updates to a feature's geometry or other properties no covered in the update channel, a map.feature.plot with the same overlayId and feature Id should be used to replace an existing feature."],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }, {
    "version": "1.3.0",
    "change": "Added optional properties object"
  }, {
    "version": "1.3.0",
    "change": "Added optional menuId parameter"
  }]
};
