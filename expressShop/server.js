const express = require('express')
const app = express()
const port = 3033;

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.render("home")
})
app.get('/storeFront', (req,res)=>{
    res.render("storeFront")
})
app.get('/data', (req,res)=>
res.json(products)
)
app.get('/data/:id',(req,res)=>{
	const id = req.params.id;
	const prod= {};
	res.send(id);
const product = products.find((item)=>item.id==id) 

res.json(product)
}
)
app.listen(port, ()=>
console.log("server running")
)
