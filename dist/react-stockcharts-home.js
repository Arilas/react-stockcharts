(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory();
	else
		root["ReStock"] = factory();
})(this, function() {
return webpackJsonpReStock([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**/
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	__webpack_require__(34);
	__webpack_require__(32);
	
	var ReadME = __webpack_require__(36);
	
	document.getElementById("content").innerHTML = ReadME;
	
	var parseDate = d3.time.format("%Y-%m-%d").parse
	d3.tsv("data/data.tsv", function(err, data) {
		data.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		var AreaChartWithZoomPan = __webpack_require__(3).init(data);
		/**/
	
		/**/
		React.render(React.createElement(AreaChartWithZoomPan, null), document.getElementById("area"));
		/**/
	});
	
	//require('./examples/freezer-example');


/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h1>React Stockcharts</h1>\n<p>Highly customizable stock charts built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></p>\n";

/***/ }

})
});
;
//# sourceMappingURL=react-stockcharts-home.js.map