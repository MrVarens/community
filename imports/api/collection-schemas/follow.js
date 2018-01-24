import SimpleSchema from "simpl-schema";
import Collection from "/imports/api/collections/follow";

var schema = new SimpleSchema({
    owner: {
        type: String
    },
    username: {
        type: String
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