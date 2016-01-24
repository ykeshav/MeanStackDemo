/**
 * Created by keshav on 24/1/16.
 */
var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var app = express();

app.listen(3000);
app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb://localhost/jetbrains');
var Product = mongoose.model('Product', {name: String});
var product = new Product({name: "webStorm"});

product.save(function (err) {
    if (err)console.log('failed');
    else console.log('saved');
});

app.get("/", function (req, res) {
    Product.find(function (err, prodcuts) {
        res.send(prodcuts);
    })
});

app.post("/add", function (req, res) {
    var productName = req.body.name;
    var product = new Product({name: productName});
    product.save(function (err) {
        res.send();
    })
});
app.delete("/delete", function (req, res) {
    var productId = req.query.productId;
    var product = new Product({_id: productId});
    Product.remove(product, function (err) {
        res.send();
    })
});

