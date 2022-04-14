const express = require("express")
const router = express.Router()
// const { myDataPost, myDataGet,myDataGetById,myDataPut,myDataDel } = require("../Controller/logic")
const a  = require("../Controller/logic")
router.get("/api/get", a.myDataGet)
router.get("/api/get/:id",a.myDataGetById)
router.post("/api/post", a.myDataPost)
router.put("/api/put/:id",a. myDataPut)
router.delete("/api/delete/:id",a.myDataDel)

module.exports = { router }

