import express from "express";


const app = express();

app.get("/test", (req, res) =>{
  return res.send("Hello word!")
})

app.post("/test-post", (req, res) => {
  return res.send("Hello people!")
})

app.listen(3000, () => console.log("server on"));