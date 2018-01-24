import SimpleSchema from "simpl-schema";
import Collection from "/imports/api/collections/messages";

var schema = new SimpleSchema({
    owner: {
        type: String
    },
    text: {
        type: String,
        min: 1,
        max: 100
    },
    createdAt: {
        type: Date,
        autoValue: function (doc) {
            if (this.isInsert)
                return new Date();
        }
    }
});

Collection.attachSchema(schema);

export default schema;