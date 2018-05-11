const controller = require('./../controllers/scores');

module.exports = function(app){
    app.get('/scores', controller.getScores); // Show All Scores
    app.get('/scores/top', controller.topScore); // Show Top Score
    app.get('/scores/new', controller.newScore); // Add New Score
    app.get('/scores/:id/put/:score', controller.updateScore); // Update A Specific Score
}