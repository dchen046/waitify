import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import session from 'express-session';
import passport from 'passport';
import flash from 'express-flash'
import authRouter from './src/routes/authRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// for public assets
app.use(express.static(__dirname + '/public'));

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// sessions
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());

//app routes
app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/auth", authRouter);

// app port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
