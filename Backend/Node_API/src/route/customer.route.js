const customer_controller=require("../controller/customer.controller")
const customer =(app)=>{
    app.post("/api/customer/create",customer_controller.create)
    app.get("/api/customer/getList",customer_controller.getList)
    app.get("/api/customer/getOne/:id",customer_controller.getOne)
    app.get("/api/customer/update",customer_controller.update)
    app.get("/api/customer/remove/:id",customer_controller.remove)
    app.get("/api/customer/login",customer_controller.login)
    
}
module.exports = customer


