const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
    createUser: function(req, res){
        console.log(req.body)
       right = 0;
       for(let i =0; i < 3; i ++){
        console.log("inside the for loop doing work");
        key = `question${i+1}`;
        console.log(key);
        if(req.body[key]=="correctAns"){
            console.log("catching good answers");
            right+=1;
            
        }
        else{
            console.log("catching bad answers");
        }
       }
       var user = new User();
       console.log ("user.name", user.name)
          console.log ("req.body.name", req.body.name)

       
       if(right == 1){
           user.score = "1/3"
           user.percentage = 33.33
       }
       else if(right == 2){
           user.score = "2/3"
           user.percentage = 66.66
       }
       else if(right == 3){
           user.score = "3/3"
           user.percentage = 100
       }
       else{
           user.score = "0/3"
           user.percentage = 0
       }
        user.username= req.body.name
       console.log(`about to save user = ${user}`)
        user.save().then((doc)=>{
            console.log(`saved a user ${doc.content}`)
            res.json(user);
        }).catch((doc)=>{
            console.log("inside the .catch")
            console.log(doc)
            res.json("false");
        })
    },
   register: (req, res, next) => {
       console.log("req.bod",req.body)
        let u = new User(req.body);         
        u.save()
        .then((user) => { 
            console.log("insert",user)
            req.session.name = user.first_name;
            req.session.user_id = user._id;
            res.json(true); })
        .catch((err) => { res.status(409).json(err) });
    },

      allUsers: function(req, res){
        console.log("inside players.js all()")
        User.find({}).sort({percentage:-1,updatedAt:"desc"}).exec(function(err, users){
            if(err){
                console.log("errors");
                res.json("false");
            }
            else{
                console.log(`returning all the users`)
                res.json(users);
            }
        })
      },
    
		logout: (req, res) => {
		req.session.destroy()
        res.redirect("/")},
        

	 login: function(req, res, next){
        console.log("in login function ************************")
        // if(!req.session.fails){
        //     req.session.fails = 0;
        // }
        // let nowtime = Date.now()
        // if(req.session.fails == 5){
        //     console.log("in fails equal 5")
        //     req.session.timer = Date.now()
        //     req.session.fails++
        //     console.log(req.session.timer)
        //     console.log(req.session.timer > (req.session.timer - (60*60*1000)))
        //     res.status(500).json(req.session.fails)
        // } else if (nowtime < (req.session.timer+(60*1000))){
        //     console.log("in else if nowtime less than")
        //     req.session.fails++;
        //     res.status(500).json(req.session.fails)
        // } else {
            // console.log("in else")
            User.findOne({email: req.body.email})
            .then( user => {
                if(!user){
                    // req.session.fails++;
                    console.log("PLease reg     ")
                    err = {error: "No user registered with that email"};
                    res.status(401).json(err);
                } else {
                    console.log(user.password,"user.password")
                     console.log(req.body.password,"req.body.password")
                    if(user.password != req.body.password){
                        console.log("bad password")
                         res.status(403).json({error: "Password is incorrect"});
                    } else {
                        console.log("login success controller");
                        console.log(user._id);
                        req.session.name = user.first_name;
                        req.session.user_id = user._id;
                        res.json(true);
                        console.log("session login",req.session.user_id);
                    }
                }
            })
        
     
		}
    
	// }
}