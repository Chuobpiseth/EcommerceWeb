//create
const create = (req,res)=>{
    res.send("Create")
}

//list-all
const getList = (req,res)=>{
    res.send("List")
}
//list one by ID
const getOne = (req,res)=>{
    res.send("One")
}
const update = (req,res)=>{
    res.send("update")
}
const remove = (req,res)=>{
    res.send("remove")
}
   








   module.exports={
       create,
       getList,
       getOne,
       update,
       remove
   }
   
   
   