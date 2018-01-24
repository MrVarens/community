class Follow {
    constructor(doc) {
        _.extend(this, doc);
    }
}

let collection = new Mongo.Collection("follow", {
    transform: (doc) => new Follow(doc)
});

export default collection;