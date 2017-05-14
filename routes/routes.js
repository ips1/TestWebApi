var appRouter = function(app) {
    var defaultLoad = 500
    var currentLoad = defaultLoad
    var loadStep = 250

    var log = function(text) {
        var date = new Date();
        var hours = date.getHours();
        var mins = date.getMinutes();
        var milis = date.getMilliseconds()
        var timeString = hours + ":" + mins + ":" + milis
        console.log(timeString + " - " + text)
    }

    app.get("/request", function(req, res) {
        var result = {
            "query": req.query.data,
            "data": "Hello World"
        }

        log("Processing request with load " + currentLoad)

        setTimeout(function() {
            res.send(result)
        }, currentLoad)
    }); 

    app.post("/increaseLoad", function(req, res) {
        currentLoad += loadStep
        log("Increasing load, current value: " + currentLoad)
        res.send()
    }); 

    app.post("/decreaseLoad", function(req, res) {
        currentLoad -= loadStep
        log("Decreasing load, current value: " + currentLoad)
        res.send()
    }); 
}
 
module.exports = appRouter;
