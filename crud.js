const User=require("./Users");

const addUser=async (username,password)=>{
    let user=new User();
    user.username=username;
    user.password=password;
    await user.save();
    return user;
}

const retrieveUsers = async ()=>{
    let users= await User.find();
    return users;
}

const delUser= async (_id)=>{
    let user= await User.findByIdAndDelete(_id);
    return user;
}

const updateUser= async (_id,username,password)=>{
    let user = await User.findById(_id);
    user.username=username;
    user.password=password;
    await user.save();
    return user;
}

module.exports.addUser=addUser;
module.exports.retrieveUsers=retrieveUsers;
module.exports.delUser=delUser;
module.exports.updateUser=updateUser;