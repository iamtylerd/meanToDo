'use strict';
const Create = require('../models/newTodo')


module.exports.new = (req, res, err) =>
	Create
		.find()
		.sort({date: -1})
		.then(todos => res.json({todos}))
		.catch(err)

module.exports.create = (req, res, err) => {
	const todo = req.body
	Create
		.create(todo)
		.then(todo => res.json(todo))
		.catch(err)
}

module.exports.done = (req, res, err) => {
	console.log(req.body.completed)
	Create
		.findOneAndUpdate({_id: req.params.id}, {$set:{completed: true}}, {new: true})
		.then((obj) => res.json(obj))
   	.catch(err)
}

module.exports.destroy = (req, res, err) => {

	Create
		.remove({_id: req.params.id})
		.then((obj) => res.end)
		.catch(err)
}
