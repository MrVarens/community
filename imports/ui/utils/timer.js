UI.registerHelper("timer", (date) => {
    Session.get("timer-update");
    return moment(date).fromNow();
});

setInterval(() => {
    Session.set("timer-update", new Date());
}, 10000); // Update timers every 10 seconds