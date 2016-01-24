/**
 * Created by keshav on 24/1/16.
 */
var express = require("express");
var cors = require("cors");
var app = express();
app.listen(3000);
app.use(cors());
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');
var Product = mongoose.model('Product', {name: String});

app.get("/", function (req, res) {
    Product.find(function (err, prodcuts) {
        res.send(prodcuts);
    })
});

