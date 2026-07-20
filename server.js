const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/search", async (req, res) => {

    const query = req.query.query;

    try{

        const response = await axios.get(
            "https://openapi.naver.com/v1/search/webkr.json",
            {
                params:{
                    query
                },
                headers:{
                    "X-Naver-Client-Id":process.env.NAVER_CLIENT_ID,
                    "X-Naver-Client-Secret":process.env.NAVER_CLIENT_SECRET
                }
            }
        );

        res.json(response.data);

    }catch(e){
        res.status(500).send(e.message);
    }

});

app.listen(3000,()=>{
    console.log("서버 실행");
});