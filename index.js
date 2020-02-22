const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createaccounttoken } = require('./jwtoken');
const Admin = require('./models/Admins');
const Client = require('./models/Client');
const Invoices = require('./models/Invoices');
const Leads = require('./models/Leads');
const Member = require('./models/Member');
const Projects = require('./models/Projects');
const Proposals = require('./models/Proposals');
const Receipts = require('./models/Receipts');
const Settings = require('./models/Settings');
const Tasks = require('./models/Tasks');
var multer  = require('multer');
const fs = require('fs');
var path = require('path');
var upload = multer({ dest: 'uploads/receipts' });
var upload2 = multer({ dest: 'uploads/invoices'});
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const serveStatic = require('serve-static');

const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3900
app.listen(port)



mongoose.connect( "mongodb://localhost:27017/FreelancerDBKE",
                 { useUnifiedTopology : true, useNewUrlParser: true, useCreateIndex: true },
                () => console.log(`connected to database status: ${mongoose.connection.readyState}`));


//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, 'freelancer/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {

  res.sendFile(path.join(__dirname, 'freelancer/dist/index.html'))

});

// Login Into Portal

app.post('/api/freelancer-ke/login', async (req,res) => {

    try {

            // check if user exists
            await Admin.find({ email : req.body.email},function(err, admin) {

                  if (err) {
                    return res.status(403).json({
                          title:"Admin Not found"
                        });
                  }

                  console.log(admin)

                  if(!admin) return res.status(404).json({
                    title: "error"
                  });

                  console.log("password" + req.body.password);
                  //check password match
                  bcrypt.compare(req.body.password, admin[0].password, function(err, result) {

                      if (err) return res.status(403).json({
                          title:err
                        });;

                      if (result === true) {

                          //If Both Are Good User Exists Create Token

                          const token = createaccounttoken(admin._id);

                          console.log(token)

                          res.status(200).json({
                              title: 'Welcome ' + admin[0].fullnames.toUpperCase() + '!',
                              token: token,
                              admin
                          });

                      } else {

                        res.status(403).json({
                          title:"Wrong Password"
                        });
                      }


                  });


            });


        } catch(error) {

            res.send(error);
        }

});

// create super-admin

app.post('/api/freelancer-ke/create-admin', async (req,res) => {

    console.log(req)

    try {

         // Prepare to Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //New Client Created
        const admin = new Admin({

            email: req.body.email,
            fullnames: req.body.fullnames,
            password: hashedPassword

        });

        console.log(admin)

        const newadmin = await admin.save();

        console.log("new" + newadmin)

        const token = createaccounttoken(newadmin._id);

        console.log(token)

        res.status(200).json({
            title: 'created',
            token: token,
            newadmin
        });

    } catch (err) {

        res.send(err);
    }
});

// Register New Member Account

app.post('/api/freelancer-ke/create-member', async (req,res) => {

  console.log(req.body)

  try {

         // Prepare to Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //New Client Created
      const member = new Member({

          email: req.body.email,
          name: req.body.fullnames,
          accountType: req.body.accountType,
          password: hashedPassword

        });

        const newmember = await member.save();

        console.log("new" + newmember)

        res.status(200).json({
            title: 'created',
            newmember
        });

    } catch (err) {

        res.send(err);
    }



});

// create client

app.post('/api/freelancer-ke/create-client', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const client = new Client({

            email: req.body.email,
            name: req.body.clientname,
            mobile: req.body.clientmobile

        });

        const newclient = await client.save();

        console.log("new" + newclient)

        res.status(200).json({
            title: 'created',
            newclient
        });

    } catch (err) {

        res.send(err);
    }



});

// create project

app.post('/api/freelancer-ke/create-project', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const project = new Projects({

            title: req.body.title,
            client: req.body.client,
            budget: req.body.budget,
            description: req.body.description

        });

        const newproject = await project.save();

        console.log("new" + newproject)

        res.status(200).json({
            title: 'created',
            newproject
        });

    } catch (err) {

        res.send(err);
    }



});

// create tasks

app.post('/api/freelancer-ke/create-task', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const tasks = new Tasks({

            title: req.body.title,
            project: req.body.project,
            members: req.body.members,
            duedate: new Date(),
            urgency: req.body.urgency,
            completed: new Date(),

        });

        const newtasks = await tasks.save();

        console.log("new" + newtasks)

        res.status(200).json({
            title: 'created',
            newtasks
        });

    } catch (err) {

        res.send(err);
    }



});

// create business lead

app.post('/api/freelancer-ke/create-lead', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const lead = new Leads({

            email: req.body.email,
            name: req.body.name,
            companyName: req.body.companyName,
            natureOfBusiness: req.body.natureOfBusiness,
            mobile: req.body.mobile,
            leadLevel: req.body.level

        });

        const newlead = await lead.save();

        console.log("new" + newlead)

        res.status(200).json({
            title: 'created',
            newlead
        });

    } catch (err) {

        res.send(err);
    }



});

// create proposal

app.post('/api/freelancer-ke/create-proposal', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const proposal = new Proposals({

            title: req.body.title,
            lead: req.body.lead,
            bodyText: req.body.bodyText

        });

        const newproposal = await proposal.save();

        console.log("new" + newproposal)

        res.status(200).json({
            title: 'created',
            newproposal
        });

    } catch (err) {

        res.send(err);
    }



});

// calendar events

app.post('/api/freelancer-ke/create-event', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const proposal = new Proposals({

            title: req.body.title,
            eventType: req.body.lead,
            memberAttached: req.body.bodyText,
            

        });

        const newproposal = await proposal.save();

        console.log("new" + newproposal)

        res.status(200).json({
            title: 'created',
            newproposal
        });

    } catch (err) {

        res.send(err);
    }



});


console.log(`app is listening on port: ${port}`)
