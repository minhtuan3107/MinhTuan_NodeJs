import { User } from "../model/index.js";

const addUser = async ({
    name,
    address,
    phone,
}) => {
    return await User.create({
        name,address,phone
    });
}
const getList = async () => {
    return await User.find().lean();
}

const editUser = async (id,dataUpdate) => {
    return await User.findByIdAndUpdate(id,dataUpdate)
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id)
};
const findUser = async (id) => {
    return await User.findById(id).lean();
}
export {
    addUser,
    getList,
    editUser,
    deleteUser,
    findUser
};