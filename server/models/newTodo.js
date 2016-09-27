'use strict';
const mongoose = require('mongoose')

module.exports = mongoose.model('New', {
	todo: String,
	completed: Boolean,
	date: String
});
