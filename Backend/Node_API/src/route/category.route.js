const category_controller=require("../controller/category.controller")
const category =(app)=>{
    app.post("/api/category/create",category_controller.create)
    app.get("/api/category/getList",category_controller.getList)
    app.get("/api/category/getOne/:id",category_controller.getOne)
    app.put("/api/category/update",category_controller.update)
    app.delete("/api/category/remove/:id",category_controller.remove)
    
}
module.exports = category


