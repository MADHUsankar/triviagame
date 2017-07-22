const mongoose = require("mongoose")
// const User = mongoose.model("User")
var Question = mongoose.model("Question");
module.exports = {
    createQuestion: function(req, res, next){
        var question = new Question({
            content: req.body.content,
            correctAns: req.body.correctAns,
            fakeAnsa: req.body.fakeAnsa,
            fakeAnsb: req.body.fakeAnsb
        });
        question.save()
        .then((question)=>{
            console.log(`saved a question ${question.content}`)
            res.json(true);
            console.log("after res.json before redirect")
        })
        .catch((err) => { res.status(500).json(err) });

    },

 

 
        allQuestions: (req, res, next) => {
                Question.find({})
                .then((questions) => {
                    let numquestions = questions.length;
                     let rand1 = Math.floor(Math.random() * numquestions);
                     let rand2 = Math.floor(Math.random() * numquestions);
                     let rand3 = Math.floor(Math.random() * numquestions);
                     console.log
                     questionop=[questions[rand1],questions[rand2],questions[rand3]]
                    res.json(questionop); })
                .catch((err) => { 
                    console.log("read",err)
                    res.status(450).json(err); });
            },
         
     }
