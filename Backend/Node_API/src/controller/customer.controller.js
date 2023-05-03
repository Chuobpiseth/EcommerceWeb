const db=require("../config/db.config");
const bcrypt=require("bcrypt")


//create
const create = (req,res)=>{
    var body= req.body;
    var password=bcrypt.hashSync(body.password,10)
    var sqlInsert = "INSERT INTO customers(firstname,lastname,gender,username,password) VALUES (?,?,?,?,?)"
    var paramInsert =[body.firstname,body.lastname,body.gender,body.username,password]
    db.query(sqlInsert,paramInsert,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message:"Customer Created",
                data:rows
            })
        }
    })
}

//list-all
const getList = (req,res)=>{
    var selectSQL="SELECT * FROM customers"
    db.query(selectSQL,(error,rows)=>{
        if(error){
            res.json({
                error: true,
                message:error
            })
        }else{
            res.json({
                data:rows
            })
        }
    })
}
//list one by ID
const getOne = (req,res)=>{
    var selectOneSQL="SELECT * FROM customers WHERE customer_id=?"
    var customer_id=req.params.id
    var sqlParams=[customer_id]
    db.query(selectOneSQL,sqlParams,(error,rows)=>{
        if(error){
            res.json({
                error: true,
                message:error
            })
        }else{
            res.json({
                data:rows
            })
        }
    })
}
const update = (req,res)=>{
    var body= req.body;
    var password=bcrypt.hashSync(body.password,10)
    var sqlUpdate = "UPDATE customers SET firstname=?, lastname=?, gender=?, username=?, password=? WHERE customer_id=?"
    var paramInsert =[body.firstname,body.lastname,body.gender,body.username,password,body.id]
    db.query(sqlUpdate,paramInsert,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message:"Customer Updated",
                data:rows
            })
        }
    })
}

//delete data
const remove = (req,res)=>{
    var paramid=req.params
    var customer_id=[paramid.id]
    var sqlDelete="DELETE FROM customers WHERE customer_id=?"
    db.query(sqlDelete,customer_id,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error
            })
        }else{
            res.json({
                message:"Customer removed from the database"
            })
        }
    })
}


//login
const login=(req,res)=>{
    var {password,username}=req.body
    var message={}
    if(username==null || username==""){
        message.username="Please fill in username!"
    }
    if(password==null||password == ""){
        message.password="Please fill the password!"
    }
    if(Object.keys(message).length>0){
        res.json({
            error:true,
            message:message
        })
        return
    }
    //check username has or not
    //check password
    db.query("SELECT * FROME customers WHERE username=?",[username],(error,rows)=>{
        if(!error){
            if(rows.length == 0){
                res.json({
                    error:true,
                    message:{
                    username:"Username doesn't exist!"
                    }
                })
            }else{
                var customer=rows[0]
                var passwordDB=customer.password
                var isCorrectPassword=bcrypt.compareSync(password,passwordDB)
                if(isCorrectPassword){
                    delete customer.password
                    res.json({
                        message:"Login seccessfull!",
                        profile:customer
                    })
                }else{
                    res.json({
                        error:true,
                        message:{
                            password:"Incorrect Password!"
                        }
                    })
                }

            }
        }
    })
}

   module.exports={
       create,
       getList,
       getOne,
       update,
       remove,
       login
   }