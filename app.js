const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

const featured= [{name:"Camel 1" , orgprice:"2999" , price:"2299" , photo:"./images/products/coconutshell/camel.png" }, {name:"Elephant" , orgprice:"3999" , price:"2119" , photo:"./images/products/coconutshell/elephant.png"} ,{name:"Dolphin" , orgprice:"1999" , price:"1299" , photo:"./images/products/coconutshell/dolphin.png"},{name:"Chandrayan" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png"} ]
const blogs = [{title:"ABC" , cat:"Shopping" ,url:"/blog/1" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} , {title:"ABC"  ,url:"/blog/1" ,  cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} , {title:"ABC"  ,url:"/blog/1" , cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} , {title:"ABC"  ,url:"/blog/1" , cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} , {title:"ABC"  ,url:"/blog/1" , cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} , {title:"ABC"  ,url:"/blog/1" , cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} ,{title:"ABC"  ,url:"/blog/1" , cat:"Shopping" , photo:"./images/blog-1.jpg" , publisher:"Admin" , date:"09 Jan 2024"} ]
const newarrivals = [
    [{name:"Chandrayan1" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png", name:"Camel" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2299" , photo:"./images/products/coconutshell/camel.png" }, {name:"Elephant" , cat:"Coconut Shell Art" , orgprice:"3999" , price:"2119" , photo:"./images/products/coconutshell/elephant.png"} ,{name:"Dolphin" , cat:"Coconut Shell Art" , orgprice:"1999" , price:"1299" , photo:"./images/products/coconutshell/dolphin.png"},{name:"Chandrayan" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png"}],
    [{name:"Chandrayan2" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png", name:"Camel" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2299" , photo:"./images/products/coconutshell/camel.png" }, {name:"Elephant" , cat:"Coconut Shell Art" , orgprice:"3999" , price:"2119" , photo:"./images/products/coconutshell/elephant.png"} ,{name:"Dolphin" , cat:"Coconut Shell Art" , orgprice:"1999" , price:"1299" , photo:"./images/products/coconutshell/dolphin.png"},{name:"Chandrayan" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png"}]
]
const trending = [
   [{name:"Chandrayan" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png", name:"Camel" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2299" , photo:"./images/products/coconutshell/camel.png" }, {name:"Elephant" , cat:"Coconut Shell Art" , orgprice:"3999" , price:"2119" , photo:"./images/products/coconutshell/elephant.png"} ,{name:"Dolphin" , cat:"Coconut Shell Art" , orgprice:"1999" , price:"1299" , photo:"./images/products/coconutshell/dolphin.png"},{name:"Chandrayan" , cat:"Coconut Shell Art" , orgprice:"2999" , price:"2099" , photo:"./images/products/coconutshell/chandrayan.png"}]
]

app.get('/', (req, res) => {
    res.render("index", {blogs:blogs , featured:featured , newarrivals:newarrivals , trending:trending});
})

app.get('*', function(req, res){
    res.render("errorpage")
});


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))