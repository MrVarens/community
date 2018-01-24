import SimpleSchema from "simpl-schema";
import FollowCollection from "/imports/api/collections/follow";

let schema = new SimpleSchema({
    from: {
        type: String,
        autoform: {
            type: "hidden"
        }
    },
    to: {
        type: String,
        label: "Username"
    }
});

export default schema;