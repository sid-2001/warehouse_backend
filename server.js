const express=require("express")
const parser=require("body-parser")
const cors = require('cors');
const mong=require("mongoose")
// const ejs=require("ejs")
const app=new express();

// const nodemailer = require("nodemailer")
app.use(cors());
app.options('*', cors());

app.use(express.static("public"))
// app.set("view engine" ,ejs);


app.use(parser.urlencoded({extended:true}));




mong.connect("mongodb+srv://kaushikji:ebY6914I37pP7fJo@cluster0.f6fro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true},function(err){
    
    
    if(err){
        console.log(err);    }
});


// require('dotenv').config();






const jobschema=new mong.Schema(
{
   
   name:String,
  cropage:Number,
  cropcost:Number,
    city:String,
    category:String,
  weight:Number,
    mobile:Number
    
    
})

const NofticationSchema=new mong.Schema({

Content:String

});



const memberschema=new mong.Schema({
    
    name:String,
  adress:String,
    email:String,
    mobile:Number,
    passward:String,
   
    
})

const productschema=new mong.Schema({


Name:String,
Category:String,
Status:String,
icon:String


});

const bannerschema=new mong.Schema({



    Image:String,
    Status:String
});

const offerschema=new mong.Schema({


Image:String,
Content:String,
Offer:String


});
const Trendingschema=new mong.Schema({

Image:String,
Content:String


})

const categoryschema=new mong.Schema({
    Image:String,
Content:String



})
const notification=mong.model("Notification",NofticationSchema);
const Category=mong.model("category",categoryschema);


const TrendingOffer=mong.model("TrendingOffer",Trendingschema);

const offer=mong.model("offer",offerschema);

const product=mong.model("products",productschema);

const banner=mong.model("banners",bannerschema);

const user=mong.model("user",memberschema);

const jobpost=mong.model("post",jobschema);



let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
app.listen(port);









// app.post('/fogetpassword',function(req,res){
// console.log("a request has been therein the system");
//     console.log(req.body);
// 	const transport = nodemailer.createTransport({
// 		service:"gmail",
// 		host: "smtp.gmail.com",
// 		port: 465,
// 		auth: {
// 			user: "automater420@gmail.com",
// 			pass: "hrszqqhjzejspvjx"
// 		}
// 	})
// 	console.log(transport)

// 	transport.sendMail({
// 		from: "dm29phase1@gmail.com",
// 		to: req.body.email,
// 		subject: "Meeting Nofication",
// 		html: `<div className="email" style="
//         border: 1px solid black;
//         padding: 20px;
//         font-family: sans-serif;
//         line-height: 2;
//         font-size: 20px; 
//         ">
//         <h2>Here is your metting link</h2>
// 		<h3>Hi your ${req.body.Company} Meeting has been schedule for ${req.body.Schedule} Please Join by Clicking on the Below Link</h3>
// 		<a href=${req.body.Link}>${req.body.Link}</a>
//         <br>
// 	    <span>Siddhant Kaushik<br>AllSafe<span>
//          </div>
//     `
// 	}).then((result)=>{
//      console.log(result);
// 		res.render("otp.ejs");



// });
// });

app.get("/",function(req,res){

res.send("ok");
});

app.post("/signin",function(req,res){
    console.log(req);
    const Email=req.body.email;
    user.find({email:req.body.email,passward:req.body.password},function(err,result){
        
        
        if(!err){
            if(result.length>0){
           
                
         {

    res.send("OK");
               
         }
  
            
            
            }
            else{
                
                
             res.send("NO");

                
                
            }
            
            
            
        }
    })
    
    
})

app.post("/signUp",function(req,res){
    console.log(req);
    
   if(req.body){
    

    user.find({email:req.body.email},function(err,result){
        if(result.length==0){
          
    
 
     var newuser=new user({
            
        
            email:req.body.email,
            passward:req.body.pswfirst,
        //  mobile:req.body.mobile
          
            
            
        });

        newuser.save();
             res.send("User Has been Created")
            
        }
        else{
        
      res.send("User already Exist");
        
        }
        
        
        
    })    
    
}
})






app.get("/save",(req,res)=>{


console.log(req);
var newuser=new user({
    email:"srishti420@gmail.com",
    passward:"Shristi"
});

newuser.save();
});