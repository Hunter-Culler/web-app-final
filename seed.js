"use strict"

const mongoose = require("mongoose"),
User = require("./models/user");

mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/social_media_website",
	{ useNewUrlParser: true, useFindAndModify: false }
);

mongoose.connection;

var users = [
    {
        firstname: 'Hunter',
        lastname: 'Culler',
        username: 'hunterwc',
        password: 'password1',
        dob: '05/26/1994',
        gender: "Male",
        telephone: "720-440-3370",
        email: "hunterwc@gmail.com",
        address: {
            street: "11673 Grant Street",
            city: "Northglenn",
            state: "CO",
            zipCode: 80233
        },
        sec_question: "What is your mother's maiden name?",
        sec_answer: "Watson"
    },

    {
        firstname: 'Alyssa',
        lastname: 'Culler',
        username: 'aculler',
        password: 'password1',
        dob: '01/24/1994',
        gender: "Female",
        telephone: "623-866-8930",
        email: "alyssa@gmail.com",
        address: {
            street: "11673 Grant Street",
            city: "Northglenn",
            state: "CO",
            zipCode: 80233
        },
        sec_question: "What is your mother's maiden name?",
        sec_answer: "Johnson"
    },

    {
        firstname: 'Other',
        lastname: 'User',
        username: 'other',
        password: 'password1',
        dob: '05/26/1994',
        gender: "Male",
        telephone: "720-440-3370",
        email: "other@gmail.com",
        address: {
            street: "11673 Grant Street",
            city: "Northglenn",
            state: "CO",
            zipCode: 80233
        },
        sec_question: "What is your mother's maiden name?",
        sec_answer: "Other"
    }
]

User.remove({})
    .then(() => {
        return User.create(users[0])
    })
    .then(() => {
        return User.create(users[1])
    })
    .then(() => {
        return User.create(users[2])
    })
    .catch(error => console.log(error.message))
    .then(() => {
        mongoose.connection.close();
    })