const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninjagold');
require('./../models/score');