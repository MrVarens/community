class User {
    constructor() {
        this.username = new ReactiveVar(null);
    }

    login(username) {
        this.username.set(username);
    }

    logout() {
        this.username.set(null);
    }

    isLoggedIn() {
        return !!this.username.get();
    }
}

export default new User();