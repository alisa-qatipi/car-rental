const messages = require("../models/MessageSchema");

// Therritet metoda Router nga express js
const router = require("express").Router();


// const messages = require("../models/MessageSchema");
//Funksioni per te ndertuar/ krijuar nje post
router.post("/insert", async (req, res) => {
    const fullName = req?.body?.fullName;
     const email = req?.body?.email;
     const yourMessage = req?.body?.yourMessage;
    // merren te dhenat nga inputet
    const newMessage = new messages({fullName: fullName, email: email, yourMessage: yourMessage});
    try{
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(404).json(`Post nuk u krijua ${error}`);
      }
  });

module.exports = router
// router.post("/insert", async (req,res)=>{
//     const fullName = req?.body?.fullName;
//     const email = req?.body?.email;
//     const yourMessage = req?.body?.yourMessage;

//     const message = new messages({fullName: fullName, email: email, yourMessage: yourMessage});

//     try{
//         await message.save();
//     } catch(error){
//         console.log("error");
//     }
// });




// app.post("/insert", async (req,res)=>{
//     const fullName = req.body.fullName;
//     const email = req.body.email;
//     const yourMessage = req.body.yourMessage;

//     const message = new Message({fullName: fullName, email: email, yourMessage: yourMessage});

//     try{
//         await message.save();
//     } catch(error){
//         console.log(error);
//     }
// });