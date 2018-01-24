class Message {
    constructor(doc) {
        _.extend(this, doc);
    }
}

let collection = new Mongo.Collection("messages", {
    transform: (doc) => new Message(doc)
});

export default collection;