var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

    all: function(req, res){
        Product.find({}, function(err, products){
            if (err) {
                console.log("no product found")
                for(var key in err.errors){
                    req.flash('products', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("products found")
                res.json({products:products})
            }
        })
    },

    display: function(req, res){
        console.log('passes id', req.params.id)
        Product.find({_id: req.params.id}, function(err, product){
            if (err){
                console.log("Product not found")
                for(var key in err.errors){
                    req.flash('product', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('product found')
                res.json({products:product})
            }
        })
    },

    new: function(req, res){
        console.log("incoming data", req.body)
        form = req.body;
        var product = new Product({
            title: form.title,
            price: form.price,
            url: form.url
        });
        product.save(function(err){
            if(err){
                console.log('creation failed')
                for(var key in err.errors){
                    req.flash('product', err.errors[key].message);
                }
                res.json({error: err})
            }else{
                console.log("successfully created product")
                res.json({products:product})
            }
        })
    },

    update: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Product.find({_id:req.params.id}, function(err, product){
        product[0].title = form.title;
        product[0].price = form.price;
        product[0].url = form.url;
        product[0].save(function(err){
            if(err){
                console.log('update failed')
                for(var key in err.errors){
                    req.flash('product', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully updated product')
                res.json({message: "Success"})
            }
        })
        })
    },

    delete: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Product.find({_id:req.params.id}, function(err, product){
        product[0].remove(function(err){
            if(err){
                console.log('delete failed')
                for(var key in err.errors){
                    req.flash('product', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully deleted product')
                res.json({message: "Success"})
            }
        })
        })
    }
// end of exports
}