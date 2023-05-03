const db=require("../config/db.config")

//create category
const create = (req,res)=>{
    var sqlInsert="INSERT INTO category (name,description) VALUES (?,?)"
    var {name,description}=req.body
    db.query(sqlInsert,[name,description],(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message : "Category has been created",
                data:rows
            })
        }
    })

}

//get list
const getList = (req,res)=>{
    var getListSQL="SELECT * FROM category"
    db.query(getListSQL,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                data:rows
            })
        }
    })
}

//getOne
const getOne = (req,res)=>{
    var customer=req.params
    var customer_id=customer.id
    var sqlGetOne="SELECT * FROM category WHERE category_id = ?"
    db.query(sqlGetOne,customer_id,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                data:rows
            })
        }
    })
}

//update
const update = (req,res)=>{
    var body= req.body;
    var sqlUpdate = "UPDATE category SET name=?, description=?, image=? WHERE category_id=?"
    var paramInsert =[body.name,body.description,body.image,body.customer_id]
    db.query(sqlUpdate,paramInsert,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message:"Category has been Updated",
                data:rows
            })
        }
    })

}


//remove
const remove = (req,res)=>{
    var paramid=req.params
    var category_id=[paramid.id]
    var sqlDelete="DELETE FROM category WHERE category_id=?"
    db.query(sqlDelete,category_id,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message:"category removed from the database"
            })
        }
    })
}

module.exports={
    create,
    getList,
    getOne,
    update,
    remove
}