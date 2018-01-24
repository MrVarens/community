import Collections from "/imports/api/collections";

Router.route("/api/user/:username/messages", { where: "server" })
    .get(function () {
        this.response.end(JSON.stringify(Collections.Messages.find({ owner: this.params.username }).fetch()));
    })
    .post(function () {
        let id = Collections.Messages.insert({ owner: this.params.username, text: this.request.body.text });
        this.response.end(JSON.stringify(id));
    });

Router.route("/api/user/:username/following", { where: "server" })
    .get(function () {
        this.response.end(JSON.stringify(Collections.Follow.find({ owner: this.params.username }).fetch()));
    })
    .post(function () {
        let from = this.params.username;
        let to = this.request.body.username;

        let id;
        if (!!to
            && !!from
            && from != to
            && !Collections.Follow.findOne({ owner: from, username: to }))
            id = Collections.Follow.insert({ owner: from, username: to });

        this.response.end(JSON.stringify(id));
    });

Router.route("/api/user/:username/timeline", { where: "server" })
    .get(function () {
        let users = _.pluck(Collections.Follow.find({ owner: this.params.username }).fetch(), "username");
        this.response.end(JSON.stringify(Collections.Messages.find({ owner: { $in: users } }).fetch()));
    });