module.exports = function(app) {
    require('./customerRoutes')(app);
    require('./bookRoutes')(app);
}