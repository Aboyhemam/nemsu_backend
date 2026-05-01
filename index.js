const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const dbConfig = require('./config/mongDB_config.js');
const createAdmin = require('./scripts/createAdmin.js');
const login = require('./routes/loginroute.js');
const event=require('./routes/img_routes.js')
const getEvents=require('./routes/getEvents.js')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // better than bodyParser.json()

// Routes
app.use('/admin', login);
app.use('/event',event);
app.use('/event',getEvents);

// Start Server
const startServer = async () => {
    try {
        await dbConfig();
        await createAdmin();

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Server failed to start:", error.message);
    }
};

startServer();