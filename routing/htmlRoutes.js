
module.exports = function directory(app){
    app.get("/survey", function(req, res) {
        res.sendFile("app/public/survey.html", { root: "../"});
        console.log("fire");
    });
    app.get("/", function(req, res) {
        res.sendFile("app/public/home.html", { root: "../"});
    });
}
