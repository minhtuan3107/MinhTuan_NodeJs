import { getList, addUser, editUser, deleteUser, findUser } from "../repository/user.js";


const getListUser = async (req, res) => {
  try {
    const listUser = await getList();
    console.log(listUser);
    return listUser;
  } catch (e) {
    res.status(400).json({
      message: "Không lấy được danh sách",
      data: [{}],
    });
  }
};

const addNewUser = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const newUser = addUser({
      name,
      address,
      phone,
    });
    return "OK";
  } catch (err) {
    console.log(err.message);
    return "Error";
  }
};

const editUserById = async (req,res) => {
    try{
        const {id} = req.params
        const dataUpdate = req.body
        const updatedUser = await editUser(id, dataUpdate, {new : true});
        console.log(updatedUser);
        console.log(dataUpdate);
        console.log(id);
       console.log("OK");
    }catch (err) {
       console.log("NO");
    }
}
const findById = async(req, res)=> {
  try{
    const {id} = req.params
    const user = await findUser(id);
    console.log(user);
    return user;
  }catch(e){
    console.log(e);
  }
}
const deleteUserById = async (req, res) => {
    try{
        const {id} = req.params
        const userDelete = await deleteUser(id, {new : true});
        console.log("OK");
    }catch (err) {
        console.log("NO");
    }
}
export { getListUser, addNewUser , editUserById,deleteUserById, findById};
