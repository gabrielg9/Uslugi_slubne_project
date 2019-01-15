var Products = require('../models/product');
var qs = require('querystringify');
var _ = require('lodash');

const getFilters = function(req, res, next) {
    const availableFilters = Object.keys(Products.schema.paths);
    const filters = qs.parse(req.query);

    const schemaFilters = _.pickBy(filters, (value, key) => availableFilters.indexOf(key) > -1);
    let searchFilter = {};
    if(filters.q){
        searchFilter = {
            $text: {
                $search: filters.q
            }
        }
    }
    req.filters = {...searchFilter, ...schemaFilters};
    next();

}
module.exports = getFilters;