cmapi.channel["map.overlay.update"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.update",
    "description": "Update the name an existing overlay or move the overlay to another parent overlay.",
    "properties": {
      "name": {
        "description": "The new name of the overlay. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the overlay being updated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will update that overlay. If an overlay with the given ID does not exist, an error is generated.  Note that overlay IDs MUST be unique even across multiple parent overlays.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay that is associated with this overlay.  If no ID is provided, the overlay will keep its existing parentage.  If a parentId is provided, the parentage of the overlay will be changed to the new parentId.  If an overlay with an ID of parentId does not exist, a new overlay will be created and the parentage of the overlay identified by overlayId will be changed to the newly created parent overlay. If the this field is set to an empty string, the overlay SHALL become a top level overlay.",
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
    "required": []
  },
  "notes": [],
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
