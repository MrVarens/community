import SimpleSchema from "simpl-schema";

let schema = new SimpleSchema({
    username: {
        type: String,
        autoform: {
            type: "hidden"
        }
    },
    message: {
        type: String,
        min: 1,
        max: 100
    }
});

export default schema;