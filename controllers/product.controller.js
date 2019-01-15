const Product = require('../models/product.model');

const test = (req, res) => {
	res.status(200).send('Greetings from the Test controller!').end();
};

const product_create = (req, res, next) => {
	let product = new Product({
		name: req.body.name,
		price: req.body.price
	});

	product.save((err) => {
		if (err) {
			return next(err);
		}
		res.status(200).send('Product Created successfully').end();
	})
}

const product_details = (req, res, next) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) return next(err);
		res.send(product);
	})
}

const product_list = (req, res, next) => {
	Product.find((err, product) => {
		if (err) return next(err);
		res.send(product);
	})
}

const product_update = (req, res, next) => {
	Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
		if (err) return next(err);
		res.status(200).send('Updated successfully!').end();
	})
}

const product_delete = (req, res, next) => {
	Product.findByIdAndRemove(req.params.id, (err, product) => {
		if (err) return next(err);
		res.status(200).send('Deleted successfully!').end();
	})
}

module.exports = {
	test,
	product_create,
	product_details,
	product_list,
	product_delete,
	product_update
};