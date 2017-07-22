const path = require('path');

const users = require('../controllers/users.js');
const questions = require('../controllers/questions.js');
module.exports = (app) => {
    

    app.post('/createQuestion', questions.createQuestion);
    app.post('/createUser', users.createUser);  
    app.get('/allQuestions', questions.allQuestions);  
      app.get('/allUsers', users.allUsers);  
    app.get('/logout', users.logout);
       
    app.post('/register', users.register);
    app.post('/login', users.login);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    })
}