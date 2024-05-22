import express from 'express'
import * as dotenv from 'dotenv'
import {
    userRouter
} from './routes/index.js'
import connect from './database/database.js'
import handlebars from 'express-handlebars'
import { addNewUser, getListUser, editUserById, deleteUserById, findById } from './controller/user.js'
dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('css'));

app.use('/user',userRouter);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) =>{
    try {
     const listUser = await getListUser();
    console.log(JSON.stringify(listUser));
     res.render('index', { users: listUser });
    } catch (e) {
     console.log(e);
    }
 })

app.get('/addUser', async (req, res) =>{
    res.render('addUser');
 })
 app.get('/deleteUser/:id', async (req, res) =>{
    const user = await findById(req);
    res.render('deleteUser', { userDelete: user });
 })
 app.get('/formEditUser/:id', async (req, res) =>{
    const user = await findById(req);
    res.render('editUser', { userEdit: user });
 })
 app.post('/addNewUser', async (req, res) =>{
    await addNewUser(req);
   res.redirect('/');
 })

 app.get('/confirmDeleteUser/:id', async (req, res) =>{
    await deleteUserById(req);
    res.redirect('/');
 })
 app.post('/editUser/:id', async (req, res) =>{
    await editUserById(req);
    res.redirect('/');
 })
 connect().then(()=> {
    app.listen(port, async (req, res) => {
         console.log("listening on port :" + port);
     });
})
