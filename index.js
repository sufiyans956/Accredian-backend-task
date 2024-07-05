const express = require('express');
const {PrismaClient}= require('@prisma/client');

const app = express();
const prima= new PrismaClient();
const nodemailer = require("nodemailer");
const cors= require("cors");

app.use(cors());
app.get('/getallreferal', async function (req, res) {
    try{
        const refer=await prima.refer.findMany({});
        res.json(refer)
    }
    catch(err){
        console.log(err);
    }
})

app.use(express.json());

app.post('/createReferal',async (req, res,next)=>{
    const data1 = req.body;
    console.log(data1.referalemail);
   
    let receiver_email = data1.referalemail;
   
    
    try {
        const referdata = await prima.refer.create({data:data1})
        console.log(referdata); 
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "sufiyans956@gmail.com",
              pass: "pvtdhbydoddonoxq",
            },
          });
        
          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: '<sufiyans956@gmail.com>', // sender address
              to: receiver_email, // list of receivers
              subject: "reference for movie ", // Subject line
            
              html: "your friend Sufiyan has given reference for movie the code is xxxxxx", // html body
            });
          
            console.log("Message sent: %s", info.messageId);
          }
          main().catch(console.error);
        
        res.send("added successfully");
    } catch (error) {
        console.error("Error creating referral:", error);
        res.status(500).send("Error creating referral"); // Send an error response
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});