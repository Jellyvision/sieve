'use strict';
var sieveFunc = require('./sieve');
var Benchmark = require('Benchmark');

var suite = new Benchmark.Suite;
var TEST_LIMIT = 10000;
suite.add('sieve - iterate', function() {
        sieveFunc.getPrimes('iterate', TEST_LIMIT);
    })
    .add('sieve - clone', function() {
        sieveFunc.getPrimes('clone', TEST_LIMIT);
    })
    .add('sieve - mutate', function() {
        sieveFunc.getPrimes('mutate', TEST_LIMIT);
    })
    .on('complete', function() {
        this.each(function(result) {
            console.log(result.name + ': '+ result.hz +'/s');
        });
    })
    .run();
