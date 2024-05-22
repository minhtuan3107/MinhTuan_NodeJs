import express from 'express'
import { body, validationResult } from 'express-validator'
import{
addNewUser, getListUser, editUserById,deleteUserById
} from "../controller/user.js"

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: true }));



router.get('/',function(req, res) {

})
router.put('/edit/:id',editUserById);

router.post('/add', addNewUser);

router.get('/getList',getListUser);

router.delete('/delete/:id',deleteUserById);


export default router