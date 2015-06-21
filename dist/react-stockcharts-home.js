(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return webpackJsonpReStock([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**/
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	__webpack_require__(32);
	__webpack_require__(30);
	
	var ReadME = __webpack_require__(29);
	
	document.getElementById("content").innerHTML = ReadME;
	
	var parseDate = d3.time.format("%Y-%m-%d").parse
	d3.tsv("data/MSFT.tsv", function(err, data) {
		data.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		var CandleStickChartWithEdge = __webpack_require__(28);
	
		React.render(React.createElement(CandleStickChartWithEdge, {data: data}), document.getElementById("chart"));
	});
	
	//require('./examples/freezer-example');


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(71);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = ReStock.helper.ChartWidthMixin
		, HistogramSeries = ReStock.HistogramSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
		, OverlaySeries = ReStock.OverlaySeries
		, LineSeries = ReStock.LineSeries
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
		, CurrentCoordinate = ReStock.CurrentCoordinate
		, AreaSeries = ReStock.AreaSeries
		, EdgeContainer = ReStock.EdgeContainer
		, EdgeIndicator = ReStock.EdgeIndicator
	;
	
	var CandleStickChartWithEdge = React.createClass({displayName: "CandleStickChartWithEdge",
		mixins: [ChartWidthMixin],
		render:function() {
			if (this.state === null || !this.state.width) return React.createElement("div", null);
	
			var parseDate = d3.time.format("%Y-%m-%d").parse
			var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "D", initialDisplay: 30}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1, yMousePointerDisplayLocation: "right", yMousePointerDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null), 
								React.createElement(OverlaySeries, {id: 0, type: "sma", options: { period: 20, pluck: 'close'}}, 
									React.createElement(LineSeries, null)
								), 
								React.createElement(OverlaySeries, {id: 1, type: "sma", options: { period: 30}}, 
									React.createElement(LineSeries, null)
								), 
								React.createElement(OverlaySeries, {id: 2, type: "sma", options: { period: 50}}, 
									React.createElement(LineSeries, null)
								)
							)
						), 
						React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 0}), 
						React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 1}), 
						React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 2}), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}}), 
								React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 10, pluck:'volume'}}, 
									React.createElement(AreaSeries, null)
								)
							)
						), 
						React.createElement(CurrentCoordinate, {forChart: 2, forOverlay: 3}), 
						React.createElement(CurrentCoordinate, {forChart: 2}), 
						React.createElement(EdgeContainer, null, 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 1, forOverlay: 0}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 1, forOverlay: 2}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 0}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 2}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 2, forOverlay: 3, displayFormat: d3.format(".4s")}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 2, forOverlay: 3, displayFormat: d3.format(".4s")}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 2, displayFormat: d3.format(".4s")}), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 2, displayFormat: d3.format(".4s")})
						), 
						React.createElement(MouseCoordinates, {xDisplayFormat: dateFormat, type: "crosshair"}), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-50, 0]}), 
							React.createElement(MovingAverageTooltip, {forChart: 1, onClick: function(e)  {return console.log(e);}, origin: [-48, 15]})
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithEdge;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h1>React Stockcharts</h1>\n<p>Highly customizable stock charts built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></p>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	exports.push([module.id, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url("+__webpack_require__(100)+") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n", ""]);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./react-stockcharts.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./react-stockcharts.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	exports.push([module.id, "body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.react-stockchart .axis path, .react-stockchart .axis line {\n  fill: none;\n  stroke: #000000;\n}\n\n.react-stockchart .current-coordinate {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.react-stockchart .grid.axis path, .react-stockchart .grid.axis line {\n  fill: none;\n  stroke: #000000;\n  shape-rendering: crispEdges;\n  opacity: 0.2;\n}\n\n.react-stockchart .y.axis path {\n  display: none;\n}\n\n.react-stockchart .candle .up {\n  fill: #6BA583;\n  stroke: #6BA583;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .candle .down {\n  fill: #ff0000;\n  stroke: #ff0000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .candle line {\n  stroke: #000000;\n}\n\n.react-stockchart .wick .up, .react-stockchart .wick .down {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .line {\n  fill: none;\n  stroke-width: 1px;\n}\n\n.react-stockchart .line-stroke {\n  shape-rendering: crispEdges;\n  stroke: steelblue;\n}\n\n.react-stockchart .overlay-stroke {\n  stroke: steelblue;\n}\n\n.react-stockchart .yin {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 2px;\n}\n\n.react-stockchart .yang {\n  fill: none;\n  stroke: #6BA583;\n  stroke-width: 2px;\n}\n\n.react-stockchart .point_figure_up {\n  fill: none;\n  stroke: green;\n  stroke-width: 1px;\n}\n\n.react-stockchart .point_figure_down {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 1px;\n}\n\n.react-stockchart .area {\n  fill: lightsteelblue;\n  opacity: 0.5;\n}\n\n.react-stockchart .backgroundText {\n  text-anchor: middle;\n  fill: #8a8a8a;\n  opacity: 0.15;\n}\n\n.react-stockchart .cross-hair {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n  opacity: 0.2;\n}\n\n.react-stockchart .horizontal2 .textbg {\n  opacity: 0.95;\n  fill: #f0e68c;\n}\n\n.react-stockchart .horizontal2 text {\n  fill: #757575;\n}\n\n.react-stockchart .horizontal3 .textbg {\n  opacity: 0.95;\n  fill: #000000;\n}\n\n.react-stockchart .horizontal3 text {\n  fill: #757575;\n}\n\n.react-stockchart .edge-coordinate .textbg {\n  opacity: 0.95;\n}\n\n.react-stockchart .edge-coordinate text {\n  fill: #ffffff;\n}\n\n.react-stockchart .vertical .textbg, .react-stockchart .horizontal .textbg {\n  opacity: 0.9;\n  fill: #8a8a8a;\n}\n\n.react-stockchart .vertical text, .react-stockchart .horizontal text {\n  fill: #ffffff;\n}\n\n.react-stockchart .grab {\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.react-stockchart .grabbing {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.react-stockchart .crosshair {\n  cursor: crosshair;\n}\n\n.react-stockchart .toottip-hover {\n  pointer-events: all;\n  cursor: pointer;\n}\n\n.react-stockchart .histogram .bar {\n  fill: steelblue;\n  opacity: 0.3;\n  stroke: none;\n}\n\n.react-stockchart .histogram .up {\n  fill: #6BA583;\n  opacity: 0.3;\n  stroke: none;\n}\n\n.react-stockchart .histogram .down {\n  fill: #ff0000;\n  opacity: 0.3;\n  stroke: none;\n}\n\n.react-stockchart .histogram line.up {\n  stroke: #6BA583;\n}\n\n.react-stockchart .histogram line.down {\n  stroke: #ff0000;\n}\n\n.react-stockchart .ma-container rect {\n  fill: none;\n  stroke: none;\n}\n\n.react-stockchart .ma-container rect:hover {\n  fill: #8a8a8a;\n  opacity: 0.3;\n}\n\n.react-stockchart .ma-container line {\n  stroke-width: 4px;\n}\n\n.react-stockchart .legend {\n  font-size: 11px;\n}\n\n.react-stockchart .legend .tooltip-label {\n  fill: steelblue;\n  font-weight: bold;\n}\n", ""]);

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 70 */,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// common components
	exports.ChartCanvas = __webpack_require__(73);
	exports.DataTransform = __webpack_require__(75);
	
	exports.XAxis = __webpack_require__(74);
	exports.YAxis = __webpack_require__(76);
	exports.Chart = __webpack_require__(77);
	exports.DataSeries = __webpack_require__(78);
	
	// chart types & Series
	exports.AreaSeries = __webpack_require__(79);
	exports.LineSeries = __webpack_require__(80);
	exports.CompareSeries = __webpack_require__(81);
	exports.CandlestickSeries = __webpack_require__(82);
	exports.OverlaySeries = __webpack_require__(83);
	exports.HistogramSeries = __webpack_require__(84);
	exports.KagiSeries = __webpack_require__(85);
	exports.PointAndFigureSeries = __webpack_require__(86);
	exports.RenkoSeries = __webpack_require__(87);
	
	// interaction components
	exports.EventCapture = __webpack_require__(88);
	exports.MouseCoordinates = __webpack_require__(89);
	exports.CrossHair = __webpack_require__(90);
	exports.VerticalMousePointer = __webpack_require__(91);
	exports.CurrentCoordinate = __webpack_require__(92);
	
	// Tooltips
	exports.TooltipContainer = __webpack_require__(93);
	exports.OHLCTooltip = __webpack_require__(94);
	exports.CompareTooltip = __webpack_require__(95);
	exports.MovingAverageTooltip = __webpack_require__(96);
	
	// misc
	exports.EdgeContainer = __webpack_require__(97);
	exports.EdgeIndicator = __webpack_require__(98);
	
	exports.helper = {};
	exports.helper.ChartWidthMixin = __webpack_require__(99);


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var ChartDataUtil = __webpack_require__(101);
	
	var Canvas = __webpack_require__(102);
	var Utils = __webpack_require__(103);
	
	var ____ClassU=React.Component;for(var ____ClassU____Key in ____ClassU){if(____ClassU.hasOwnProperty(____ClassU____Key)){ChartCanvas[____ClassU____Key]=____ClassU[____ClassU____Key];}}var ____SuperProtoOf____ClassU=____ClassU===null?null:____ClassU.prototype;ChartCanvas.prototype=Object.create(____SuperProtoOf____ClassU);ChartCanvas.prototype.constructor=ChartCanvas;ChartCanvas.__superConstructor__=____ClassU;function ChartCanvas(){if(____ClassU!==null){____ClassU.apply(this,arguments);}}
		Object.defineProperty(ChartCanvas.prototype,"getAvailableHeight",{writable:true,configurable:true,value:function(props) {
			return props.height - props.margin.top - props.margin.bottom;
		}});
		Object.defineProperty(ChartCanvas.prototype,"getAvailableWidth",{writable:true,configurable:true,value:function(props) {
			return props.width - props.margin.left - props.margin.right;
		}});
		Object.defineProperty(ChartCanvas.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			return {
				width: this.getAvailableWidth(this.props),
				height: this.getAvailableHeight(this.props),
				data: this.state.data,
				interval: this.props.interval,
				initialDisplay: this.props.initialDisplay || this.state.plotData.length,
				plotData: this.state.plotData,
				chartData: this.state.chartData,
			}
		}});
		Object.defineProperty(ChartCanvas.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
			var $__0=     this,props=$__0.props,context=$__0.context;
	
			var data = {};
			data[this.props.interval] = this.props.data;
	
			var state = {
				data: data,
				plotData: this.props.data
			}
			if (ChartDataUtil.containsChart(props)) {
				var defaultOptions = {
					width: this.getAvailableWidth(props),
					height: this.getAvailableHeight(props),
				}
				var plotData = props.data;
				var chartData = ChartDataUtil.getChartData(props, context, plotData, data, defaultOptions);
				// console.log(chartData);
				var mainChart = ChartDataUtil.getMainChart(props.children);
	
				state.chartData = chartData;
				state.plotData = plotData;
			}
			this.setState(state);
		}});
		Object.defineProperty(ChartCanvas.prototype,"getCanvas",{writable:true,configurable:true,value:function() {
			return this.refs.canvas.getCanvas();
		}});
		Object.defineProperty(ChartCanvas.prototype,"render",{writable:true,configurable:true,value:function() {
			var w = this.getAvailableWidth(this.props), h = this.getAvailableHeight(this.props);
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.getChildContext(), function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (
				React.createElement("div", {style: {position: 'relative'}}, 
					React.createElement("svg", {width: this.props.width, height: this.props.height}, 
						React.createElement("defs", null, 
							React.createElement("clipPath", {id: "chart-area-clip"}, 
								React.createElement("rect", {x: "0", y: "0", width: w, height: h})
							)
						), 
						React.createElement("g", {transform: ("translate(" + this.props.margin.left + ", " + this.props.margin.top + ")")}, 
							children
						)
					)
				)
			);
		}});
	;
	
	ChartCanvas.propTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		margin: React.PropTypes.object,
		interval: React.PropTypes.oneOf(['D']).isRequired, //,'m1', 'm5', 'm15', 'W', 'M'
		data: React.PropTypes.array.isRequired,
		initialDisplay: React.PropTypes.number,
	}
	ChartCanvas.childContextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		data: React.PropTypes.object.isRequired,
		interval: React.PropTypes.string.isRequired,
		initialDisplay: React.PropTypes.number.isRequired,
		plotData: React.PropTypes.array,
		// canvas: React.PropTypes.any,
	
		chartData: React.PropTypes.array,
	}
	ChartCanvas.defaultProps = {
		margin: {top: 20, right: 30, bottom: 30, left: 80},
		interval: "D",
	}
	
	
	module.exports = ChartCanvas;
	
	/*
					<Canvas ref="canvas" width={w} height={h} left={this.props.margin.left} top={this.props.margin.top} />
	*/


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____ClassV=React.Component;for(var ____ClassV____Key in ____ClassV){if(____ClassV.hasOwnProperty(____ClassV____Key)){XAxis[____ClassV____Key]=____ClassV[____ClassV____Key];}}var ____SuperProtoOf____ClassV=____ClassV===null?null:____ClassV.prototype;XAxis.prototype=Object.create(____SuperProtoOf____ClassV);XAxis.prototype.constructor=XAxis;XAxis.__superConstructor__=____ClassV;
		function XAxis(props) {
			____ClassV.call(this,props);
			this.updateAxis = this.updateAxis.bind(this);
		}
		Object.defineProperty(XAxis.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {
			this.updateAxis();
		}});
		Object.defineProperty(XAxis.prototype,"componentDidUpdate",{writable:true,configurable:true,value:function() {
			this.updateAxis();
		}});
		Object.defineProperty(XAxis.prototype,"updateAxis",{writable:true,configurable:true,value:function() {
			var axis = d3.svg.axis()
				.scale(this.context.xScale)
				.orient(this.props.orient);
	
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
			if (this.props.tickFormat) {
				if (this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear())
					console.warn('Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis');
				else
					axis.tickFormat(this.props.tickFormat)
			};
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
			if (this.props.noTicks) {
				axis.tickSize(0);
				axis.tickValues([]);
			}
			d3.select(React.findDOMNode(this)).call(axis);
		}});
		Object.defineProperty(XAxis.prototype,"render",{writable:true,configurable:true,value:function() {
			var axisAt = this.props.axisAt
				, range = this.context.yScale.range();
			if (this.props.axisAt === 'top') axisAt = Math.min(range[0], range[1]);
			if (this.props.axisAt === 'bottom') axisAt = Math.max(range[0], range[1]);
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2;
	
			return (
				React.createElement("g", {className: "x axis", transform: 'translate(0, ' + axisAt + ')'})
			);
		}});
	;
	
	XAxis.propTypes = {
		axisAt: React.PropTypes.oneOfType([
					React.PropTypes.oneOf(['top', 'bottom', 'middle'])
					, React.PropTypes.number
				]).isRequired,
		orient: React.PropTypes.oneOf(['top', 'bottom']).isRequired,
		innerTickSize: React.PropTypes.number,
		outerTickSize: React.PropTypes.number,
		tickFormat: React.PropTypes.func,
		tickPadding: React.PropTypes.number,
		tickSize: React.PropTypes.number,
		ticks: React.PropTypes.number,
		tickValues: React.PropTypes.array
	};
	XAxis.defaultProps = {
		namespace: "ReStock.XAxis",
		showGrid: false
	};
	XAxis.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired
	};
	
	
	module.exports = XAxis;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var ChartDataUtil = __webpack_require__(101);
	var ChartTransformer = __webpack_require__(104);
	var EventHandler = __webpack_require__(105);
	var Utils = __webpack_require__(103);
	
	var ____ClassW=React.Component;for(var ____ClassW____Key in ____ClassW){if(____ClassW.hasOwnProperty(____ClassW____Key)){DataTransform[____ClassW____Key]=____ClassW[____ClassW____Key];}}var ____SuperProtoOf____ClassW=____ClassW===null?null:____ClassW.prototype;DataTransform.prototype=Object.create(____SuperProtoOf____ClassW);DataTransform.prototype.constructor=DataTransform;DataTransform.__superConstructor__=____ClassW;function DataTransform(){if(____ClassW!==null){____ClassW.apply(this,arguments);}}
		Object.defineProperty(DataTransform.prototype,"transformData",{writable:true,configurable:true,value:function(props, context) {
			var transformer = ChartTransformer.getTransformerFor(props.transformType);
	
			if (context.dataTransformOptions || props.options) {
				var options = {};
				if (context.dataTransformOptions)
					Object.keys(context.dataTransformOptions).forEach(function(key)  {return options[key] = context.dataTransformOptions[key];});
				if (props.options)
					Object.keys(props.options).forEach(function(key)  {return options[key] = props.options[key];});
			}
	
			var passThroughProps = transformer(context.data, context.interval, options, context.dataTransformProps)
			return passThroughProps;
		}});
		Object.defineProperty(DataTransform.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
			var $__0=     this,props=$__0.props,context=$__0.context;
			var passThroughProps = this.transformData(props, context);
			this.setState({
				data: passThroughProps.data,
				dataTransformOptions: passThroughProps.options,
				dataTransformProps: passThroughProps.other,
				interval: context.interval
			});
		}});
		Object.defineProperty(DataTransform.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(props, context) {
			var passThroughProps = this.transformData(props, context);
			this.setState({
				data: passThroughProps.data,
				dataTransformOptions: passThroughProps.options,
				dataTransformProps: passThroughProps.other,
				interval: context.interval
			});
		}});
		Object.defineProperty(DataTransform.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			return {
				data: this.state.data,
				dataTransformOptions: this.state.dataTransformOptions,
				dataTransformProps: this.state.dataTransformProps,
				interval: this.state.interval,
			}
		}});
		Object.defineProperty(DataTransform.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.getChildContext(), function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (ChartDataUtil.containsChart(this.props))
				? React.createElement(EventHandler, null, children)
				: React.createElement("g", null, children);
		}});
	;
	
	DataTransform.propTypes = {
		transformType: React.PropTypes.string.isRequired, // stockscale, none
		options: React.PropTypes.object
	}
	DataTransform.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		data: React.PropTypes.object.isRequired,
		dataTransformOptions: React.PropTypes.object,
		dataTransformProps: React.PropTypes.object,
		interval: React.PropTypes.string.isRequired,
		initialDisplay: React.PropTypes.number.isRequired,
	}
	DataTransform.childContextTypes = {
		data: React.PropTypes.object,
		dataTransformOptions: React.PropTypes.object,
		dataTransformProps: React.PropTypes.object,
		interval: React.PropTypes.string,
	}
	DataTransform.defaultProps = {
		namespace: "ReStock.DataTransform",
		transformType: "none"
	}
	
	module.exports = DataTransform;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2)
		, d3 = __webpack_require__(3);
	
	var ____ClassX=React.Component;for(var ____ClassX____Key in ____ClassX){if(____ClassX.hasOwnProperty(____ClassX____Key)){YAxis[____ClassX____Key]=____ClassX[____ClassX____Key];}}var ____SuperProtoOf____ClassX=____ClassX===null?null:____ClassX.prototype;YAxis.prototype=Object.create(____SuperProtoOf____ClassX);YAxis.prototype.constructor=YAxis;YAxis.__superConstructor__=____ClassX;
		function YAxis(props) {
			____ClassX.call(this,props);
			this.updateAxis = this.updateAxis.bind(this);
		}
		Object.defineProperty(YAxis.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {
			this.updateAxis();
		}});
		Object.defineProperty(YAxis.prototype,"componentDidUpdate",{writable:true,configurable:true,value:function() {
			this.updateAxis();
		}});
		Object.defineProperty(YAxis.prototype,"updateAxis",{writable:true,configurable:true,value:function() {
			var scale = this.context.yScale;
			if (this.props.percentScale) scale = scale.copy().domain([0, 1]);
	
			var axis = d3.svg.axis()
				.scale(scale)
				.orient(this.props.orient);
	
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
	
			if (this.context.isCompareSeries) axis.tickFormat(d3.format(".0%"));
			else if (this.props.tickFormat) axis.tickFormat(this.props.tickFormat);
	
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
			
			d3.select(React.findDOMNode(this)).call(axis);
		}});
		Object.defineProperty(YAxis.prototype,"render",{writable:true,configurable:true,value:function() {
			var axisAt = this.props.axisAt
				, range = this.context.xScale.range();
			if (this.props.axisAt === 'left') axisAt = Math.min(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'right') axisAt = Math.max(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2 + this.props.axisPadding;
	
			return (
				React.createElement("g", {className: "y axis", transform: 'translate(' + axisAt + ', 0)'})
			);
		}});
	;
	
	YAxis.propTypes = {
		axisAt: React.PropTypes.oneOfType([
					React.PropTypes.oneOf(['left', 'right', 'middle'])
					, React.PropTypes.number
				]).isRequired,
		orient: React.PropTypes.oneOf(['left', 'right']).isRequired,
		innerTickSize: React.PropTypes.number,
		outerTickSize: React.PropTypes.number,
		tickFormat: React.PropTypes.func,
		tickPadding: React.PropTypes.number,
		tickSize: React.PropTypes.number,
		ticks: React.PropTypes.number,
		tickValues: React.PropTypes.array,
		percentScale: React.PropTypes.bool,
		axisPadding: React.PropTypes.number
	};
	YAxis.defaultProps = {
		namespace: "ReStock.YAxis",
		showGrid: false,
		axisPadding: 0
	};
	YAxis.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		isCompareSeries: React.PropTypes.bool.isRequired,
	};
	
	module.exports = YAxis;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2),
		PureComponent = __webpack_require__(106);
	
	var Utils = __webpack_require__(103);
	
	for(var PureComponent____Key in PureComponent){if(PureComponent.hasOwnProperty(PureComponent____Key)){Chart[PureComponent____Key]=PureComponent[PureComponent____Key];}}var ____SuperProtoOfPureComponent=PureComponent===null?null:PureComponent.prototype;Chart.prototype=Object.create(____SuperProtoOfPureComponent);Chart.prototype.constructor=Chart;Chart.__superConstructor__=PureComponent;function Chart(){if(PureComponent!==null){PureComponent.apply(this,arguments);}}
		Object.defineProperty(Chart.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.id;}.bind(this))[0];
			return {
				xScale: chartData.plot.scales.xScale,
				yScale: chartData.plot.scales.yScale,
				xAccessor: chartData.config.accessors.xAccessor,
				yAccessor: chartData.config.accessors.yAccessor,
				overlays: chartData.config.overlays,
				compareSeries: chartData.config.compareSeries,
				isCompareSeries: chartData.config.compareSeries.length > 0
			}
		}});
		Object.defineProperty(Chart.prototype,"render",{writable:true,configurable:true,value:function() {
			var origin = typeof this.props.origin === 'function'
				? this.props.origin(this.context.width, this.context.height)
				: this.props.origin;
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.getChildContext(), function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return React.createElement("g", {transform: ("translate(" + origin[0] + ", " + origin[1] + ")")}, children);
		}});
	;
	
	Chart.propTypes = {
		height: React.PropTypes.number,
		width: React.PropTypes.number,
		origin: React.PropTypes.oneOfType([
					React.PropTypes.array
					, React.PropTypes.func
				]).isRequired,
		id: React.PropTypes.number.isRequired,
		xScale: React.PropTypes.func,
		yScale: React.PropTypes.func,
		xDomainUpdate: React.PropTypes.bool,
		yDomainUpdate: React.PropTypes.bool,
		yMousePointerDisplayLocation: React.PropTypes.oneOf(['left', 'right']),
		yMousePointerDisplayFormat: React.PropTypes.func,
	};
	Chart.defaultProps = {
		namespace: "ReStock.Chart",
		transformDataAs: "none",
		yDomainUpdate: true,
		origin: [0, 0]
	};
	Chart.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		chartData: React.PropTypes.array,
	};
	Chart.childContextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		overlays: React.PropTypes.array.isRequired,
		isCompareSeries: React.PropTypes.bool.isRequired,
		compareSeries: React.PropTypes.array.isRequired,
	};
	module.exports = Chart;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103);
	
	var ____ClassY=React.Component;for(var ____ClassY____Key in ____ClassY){if(____ClassY.hasOwnProperty(____ClassY____Key)){DataSeries[____ClassY____Key]=____ClassY[____ClassY____Key];}}var ____SuperProtoOf____ClassY=____ClassY===null?null:____ClassY.prototype;DataSeries.prototype=Object.create(____SuperProtoOf____ClassY);DataSeries.prototype.constructor=DataSeries;DataSeries.__superConstructor__=____ClassY;function DataSeries(){if(____ClassY!==null){____ClassY.apply(this,arguments);}}
		Object.defineProperty(DataSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.context, function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (
				React.createElement("g", {style: { "clipPath": "url(#chart-area-clip)"}}, children)
			);
		}});
	;
	
	DataSeries.propTypes = {
		xAccessor: React.PropTypes.func,
		yAccessor: React.PropTypes.func.isRequired,
	}
	
	DataSeries.defaultProps = {
		namespace: "ReStock.DataSeries",
		compareBase: function(d)  {return d.close;},
	};
	
	module.exports = DataSeries;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____ClassZ=React.Component;for(var ____ClassZ____Key in ____ClassZ){if(____ClassZ.hasOwnProperty(____ClassZ____Key)){AreaSeries[____ClassZ____Key]=____ClassZ[____ClassZ____Key];}}var ____SuperProtoOf____ClassZ=____ClassZ===null?null:____ClassZ.prototype;AreaSeries.prototype=Object.create(____SuperProtoOf____ClassZ);AreaSeries.prototype.constructor=AreaSeries;AreaSeries.__superConstructor__=____ClassZ;
		function AreaSeries(props) {
			____ClassZ.call(this,props);
			this.getPath = this.getPath.bind(this);
			this.getArea = this.getArea.bind(this);
		}
		Object.defineProperty(AreaSeries.prototype,"getPath",{writable:true,configurable:true,value:function() {
			var dataSeries = d3.svg.line()
				.defined(function(d, i)  {return this.context.yAccessor(d) !== undefined;}.bind(this))
				.x(function(d)  {return this.context.xScale(this.context.xAccessor(d));}.bind(this))
				.y(function(d)  {return this.context.yScale(this.context.yAccessor(d));}.bind(this));
	
			return dataSeries(this.context.plotData);
		}});
		Object.defineProperty(AreaSeries.prototype,"getArea",{writable:true,configurable:true,value:function() {
			var height = this.context.yScale.range()[0];
			var areaSeries = d3.svg.area()
				.defined(function(d, i)  {return this.context.yAccessor(d) !== undefined;}.bind(this))
				.x(function(d)  {return this.context.xScale(this.context.xAccessor(d));}.bind(this))
				.y0(height - 1)
				.y1(function(d)  {return this.context.yScale(this.context.yAccessor(d));}.bind(this));
	
			return areaSeries(this.context.plotData);
		}});
		Object.defineProperty(AreaSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("g", null, 
					React.createElement("path", {d: this.getPath(), className: "line line-stroke"}), 
					React.createElement("path", {d: this.getArea(), className: "area"})
				)
			);
		}});
	;
	
	AreaSeries.contextTypes = {
			xScale: React.PropTypes.func.isRequired,
			yScale: React.PropTypes.func.isRequired,
			xAccessor: React.PropTypes.func.isRequired,
			yAccessor: React.PropTypes.func.isRequired,
			plotData: React.PropTypes.array.isRequired,
		};
	AreaSeries.defaultProps = { namespace: "ReStock.AreaSeries" };
	
	module.exports = AreaSeries;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class10=React.Component;for(var ____Class10____Key in ____Class10){if(____Class10.hasOwnProperty(____Class10____Key)){LineSeries[____Class10____Key]=____Class10[____Class10____Key];}}var ____SuperProtoOf____Class10=____Class10===null?null:____Class10.prototype;LineSeries.prototype=Object.create(____SuperProtoOf____Class10);LineSeries.prototype.constructor=LineSeries;LineSeries.__superConstructor__=____Class10;
		function LineSeries(props) {
			____Class10.call(this,props);
			this.getPath = this.getPath.bind(this);
		}
		Object.defineProperty(LineSeries.prototype,"getPath",{writable:true,configurable:true,value:function() {
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {return this.context.yAccessor(d) !== undefined;}.bind(this))
				.x(function(d)  {return this.context.xScale(this.context.xAccessor(d));}.bind(this))
				.y(function(d)  {return this.context.yScale(this.context.yAccessor(d));}.bind(this));
			return dataSeries(this.context.plotData);
		}});
		Object.defineProperty(LineSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var className = this.props.className.concat((this.context.stroke !== undefined) ? '' : ' line-stroke');
			// console.log('%s, %s, %s', className, this.props.className, this.props.stroke);
			return (
				React.createElement("path", {d: this.getPath(), stroke: this.context.stroke, fill: "none", className: className})
			);
		}});
	;
	
	LineSeries.propTypes = {
		className: React.PropTypes.string,
	};
	LineSeries.defaultProps = {
		namespace: "ReStock.LineSeries",
		className: "line "
	};
	LineSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
		stroke: React.PropTypes.string
	};
	
	module.exports = LineSeries;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class11=React.Component;for(var ____Class11____Key in ____Class11){if(____Class11.hasOwnProperty(____Class11____Key)){CompareSeries[____Class11____Key]=____Class11[____Class11____Key];}}var ____SuperProtoOf____Class11=____Class11===null?null:____Class11.prototype;CompareSeries.prototype=Object.create(____SuperProtoOf____Class11);CompareSeries.prototype.constructor=CompareSeries;CompareSeries.__superConstructor__=____Class11;
		function CompareSeries(props) {
			____Class11.call(this,props);
			this.getPath = this.getPath.bind(this);
		}
		Object.defineProperty(CompareSeries.prototype,"getPath",{writable:true,configurable:true,value:function() {
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {return d.compare['compare_' + this.props.id] !== undefined;}.bind(this))
				.x(function(d)  {return this.context.xScale(this.context.xAccessor(d));}.bind(this))
				.y(function(d)  {return this.context.yScale(d.compare['compare_' + this.props.id]);}.bind(this));
			return dataSeries(this.context.plotData);
		}});
		Object.defineProperty(CompareSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var thisSeries = this.context.compareSeries.filter(function(each)  {return each.id === this.props.id;}.bind(this))[0];
			var className = this.props.className.concat(' line-stroke');
			// console.log('%s, %s, %s', className, this.props.className, this.props.stroke);
			return (
				React.createElement("path", {d: this.getPath(), stroke: thisSeries.stroke, fill: "none", className: this.props.className})
			);
		}});
	;
	
	CompareSeries.propTypes = {
		className: React.PropTypes.string,
		stroke: React.PropTypes.string,
		displayLabel: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired,
	};
	CompareSeries.defaultProps = {
		namespace: "ReStock.CompareSeries",
		className: "line "
	};
	CompareSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
		compareSeries: React.PropTypes.array.isRequired,
	};
	
	module.exports = CompareSeries;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class12=React.Component;for(var ____Class12____Key in ____Class12){if(____Class12.hasOwnProperty(____Class12____Key)){CandlestickSeries[____Class12____Key]=____Class12[____Class12____Key];}}var ____SuperProtoOf____Class12=____Class12===null?null:____Class12.prototype;CandlestickSeries.prototype=Object.create(____SuperProtoOf____Class12);CandlestickSeries.prototype.constructor=CandlestickSeries;CandlestickSeries.__superConstructor__=____Class12;
		function CandlestickSeries(props) {
			____Class12.call(this,props);
			this.getWicks = this.getWicks.bind(this);
			this.getCandles = this.getCandles.bind(this);
		}
		Object.defineProperty(CandlestickSeries.prototype,"getWicks",{writable:true,configurable:true,value:function() {
			var wicks = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = this.context.isCompareSeries ? this.context.yAccessor(d.compare) : this.context.yAccessor(d);
	
						var x1 = Math.round(this.context.xScale(this.context.xAccessor(d))),
							y1 = this.context.yScale(ohlc.high),
							x2 = x1,
							y2 = this.context.yScale(ohlc.low),
							className = (ohlc.open >= ohlc.close) ? 'up' : 'down';
						var path = 'M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2;
						//return <path key={idx} d={path} className={className} />
						/* */
						return React.createElement("line", {key: idx, 
										className: className, 
										x1: x1, 
										y1: y1, 
										x2: x2, 
										y2: y2})
					}.bind(this), this);
			return wicks;
		}});
		Object.defineProperty(CandlestickSeries.prototype,"getCandles",{writable:true,configurable:true,value:function() {
			var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1]))
				- this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
			var cw = (width / (this.context.plotData.length)) * 0.5;
			var candleWidth = Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw); // 
			var candles = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = this.context.isCompareSeries ? this.context.yAccessor(d.compare) : this.context.yAccessor(d);
						var x = Math.round(this.context.xScale(this.context.xAccessor(d)))
								- (candleWidth === 1 ? 0 : 0.5 * candleWidth),
							y = this.context.yScale(Math.max(ohlc.open, ohlc.close)),
							height = Math.abs(this.context.yScale(ohlc.open) - this.context.yScale(ohlc.close)),
							className = (ohlc.open <= ohlc.close) ? 'up' : 'down';
						if (ohlc.open === ohlc.close) {
							return React.createElement("line", {key: idx, x1: x, y1: y, x2: x + candleWidth, y2: y})
						}
						if (candleWidth <= 1) {
							return React.createElement("line", {className: className, key: idx, x1: x, y1: y, x2: x, y2: y + height})
						}
						return React.createElement("rect", {key: idx, className: className, 
									x: x, 
									y: y, 
									width: candleWidth, 
									height: height})
					}.bind(this));
			return candles;
		}});
		Object.defineProperty(CandlestickSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("g", null, 
					React.createElement("g", {className: "wick", key: "wicks"}, 
						this.getWicks()
					), 
					React.createElement("g", {className: "candle", key: "candles"}, 
						this.getCandles()
					)
				)
			);
		}});
	;
	
	CandlestickSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
		isCompareSeries: React.PropTypes.bool.isRequired,
	}
	
	CandlestickSeries.defaultProps = { namespace: "ReStock.CandlestickSeries" };
	
	CandlestickSeries.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = CandlestickSeries;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103);
	
	var ____Class13=React.Component;for(var ____Class13____Key in ____Class13){if(____Class13.hasOwnProperty(____Class13____Key)){OverlaySeries[____Class13____Key]=____Class13[____Class13____Key];}}var ____SuperProtoOf____Class13=____Class13===null?null:____Class13.prototype;OverlaySeries.prototype=Object.create(____SuperProtoOf____Class13);OverlaySeries.prototype.constructor=OverlaySeries;OverlaySeries.__superConstructor__=____Class13;function OverlaySeries(){if(____Class13!==null){____Class13.apply(this,arguments);}}
	
		Object.defineProperty(OverlaySeries.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			var overlay = this.context.overlays.filter(function(each)  {return each.id === this.props.id;}.bind(this))[0];
			return {
				yAccessor: overlay.yAccessor,
				stroke: overlay.stroke
			};
		}});
		Object.defineProperty(OverlaySeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.getChildContext(), function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (
				React.createElement("g", null, children)
			);
		}});
	;
	
	OverlaySeries.propTypes = {
		type: React.PropTypes.oneOf(['sma', 'ema']),
		options: React.PropTypes.object.isRequired,
		id: React.PropTypes.number.isRequired,
		stroke: React.PropTypes.string
	};
	OverlaySeries.defaultProps = {
		namespace: "ReStock.OverlaySeries"
	};
	OverlaySeries.contextTypes = {
		overlays: React.PropTypes.array.isRequired,
	};
	OverlaySeries.childContextTypes = {
		yAccessor: React.PropTypes.func.isRequired,
		stroke: React.PropTypes.string.isRequired,
	};
	module.exports = OverlaySeries;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class14=React.Component;for(var ____Class14____Key in ____Class14){if(____Class14.hasOwnProperty(____Class14____Key)){HistogramSeries[____Class14____Key]=____Class14[____Class14____Key];}}var ____SuperProtoOf____Class14=____Class14===null?null:____Class14.prototype;HistogramSeries.prototype=Object.create(____SuperProtoOf____Class14);HistogramSeries.prototype.constructor=HistogramSeries;HistogramSeries.__superConstructor__=____Class14;
		function HistogramSeries(props) {
			____Class14.call(this,props);
			this.getBars = this.getBars.bind(this);
		}
		Object.defineProperty(HistogramSeries.prototype,"getBars",{writable:true,configurable:true,value:function() {
			var base = this.props.baseAt === 'top'
						? 0
						: this.props.baseAt === 'bottom'
							? this.context.yScale.range()[0]
							: this.props.baseAt === 'middle'
								? (this.context.yScale.range()[0] + this.context.yScale.range()[1]) / 2
								: this.props.baseAt;
	
			var dir = this.props.direction === 'up' ? -1 : 1;
	
			var getClassName = function()  {return this.props.className;}.bind(this);
			if (typeof this.props.className === 'function') {
				getClassName = this.props.className;
			}
			var width = Math.abs(this.context.xScale.range()[0] - this.context.xScale.range()[1]);
			var barWidth = width / (this.context.plotData.length) * 0.5;
			var bars = this.context.plotData
					.filter(function(d)  {return this.context.yAccessor(d) !== undefined;}.bind(this) )
					.map(function(d, idx)  {
						var yValue = this.context.yAccessor(d);
						var x = Math.round(this.context.xScale(this.context.xAccessor(d))) - 0.5 * barWidth,
							className = getClassName(d) ,
							y, height;
						if (dir > 0) {
							y = base;
							height = this.context.yScale.range()[0] - this.context.yScale(yValue);
						} else {
							y = this.context.yScale(yValue);
							height = base - y;
						}
	
						if (Math.round(barWidth) <= 1) {
							return React.createElement("line", {key: idx, className: className, 
										x1: Math.round(x), y1: Math.round(y), 
										x2: Math.round(x), y2: Math.round(y + height)})
						}
						return React.createElement("rect", {key: idx, className: className, 
									x: Math.round(x), 
									y: Math.round(y), 
									width: Math.round(barWidth), 
									height: Math.round(height)})
					}.bind(this), this);
			return bars;
		}});
		Object.defineProperty(HistogramSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("g", {className: "histogram"}, 
					this.getBars()
				)
			);
		}});
	;
	
	HistogramSeries.propTypes = {
		baseAt: React.PropTypes.oneOfType([
					React.PropTypes.oneOf(['top', 'bottom', 'middle'])
					, React.PropTypes.number
				]).isRequired,
		direction: React.PropTypes.oneOf(['up', 'down']).isRequired,
		className: React.PropTypes.oneOfType([
					React.PropTypes.func, React.PropTypes.string
				]).isRequired,
	};
	HistogramSeries.defaultProps = {
		namespace: "ReStock.HistogramSeries",
		baseAt: 'bottom',
		direction: 'up',
		className: 'bar'
	};
	HistogramSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
	};
	
	module.exports = HistogramSeries;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class15=React.Component;for(var ____Class15____Key in ____Class15){if(____Class15.hasOwnProperty(____Class15____Key)){KagiSeries[____Class15____Key]=____Class15[____Class15____Key];}}var ____SuperProtoOf____Class15=____Class15===null?null:____Class15.prototype;KagiSeries.prototype=Object.create(____SuperProtoOf____Class15);KagiSeries.prototype.constructor=KagiSeries;KagiSeries.__superConstructor__=____Class15;function KagiSeries(){if(____Class15!==null){____Class15.apply(this,arguments);}}
		Object.defineProperty(KagiSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var kagiLine = new Array();
			var kagi = {};
			for (var i = 0; i < this.context.plotData.length; i++) {
				var d = this.context.plotData[i];
				if (d.close === undefined) continue;
				if (kagi.type === undefined) kagi.type = d.startAs;
				if (kagi.plot === undefined) kagi.plot = new Array();
				var idx = this.context.xAccessor(d);
				kagi.plot.push([idx, d.open]);
	
				if (d.changePoint != undefined) {
					kagi.plot.push([idx, d.changePoint]);
					kagiLine.push(kagi);
					kagi = {
						type: d.changeTo
						, plot: []
					};
					kagi.plot.push([idx, d.changePoint]);
				}
			};
	
			var props = this.props;
	
			var paths = kagiLine.map(function(each, i)  {
	
				var dataSeries = d3.svg.line()
					.x(function(d)  {return this.context.xScale(d[0]);}.bind(this))
					.y(function(d)  {return this.context.yScale(d[1]);}.bind(this))
					.interpolate("step-before");
				return (React.createElement("path", {key: i, d: dataSeries(each.plot), className: each.type}))
			}.bind(this));
			return (
				React.createElement("g", null, 
					paths
				)
			);
		}});
	;
	
	KagiSeries.defaultProps = {
		namespace: "ReStock.KagiSeries",
	};
	KagiSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
	};
	KagiSeries.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = KagiSeries;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class16=React.Component;for(var ____Class16____Key in ____Class16){if(____Class16.hasOwnProperty(____Class16____Key)){PointAndFigureSeries[____Class16____Key]=____Class16[____Class16____Key];}}var ____SuperProtoOf____Class16=____Class16===null?null:____Class16.prototype;PointAndFigureSeries.prototype=Object.create(____SuperProtoOf____Class16);PointAndFigureSeries.prototype.constructor=PointAndFigureSeries;PointAndFigureSeries.__superConstructor__=____Class16;function PointAndFigureSeries(){if(____Class16!==null){____Class16.apply(this,arguments);}}
		Object.defineProperty(PointAndFigureSeries.prototype,"handleClick",{writable:true,configurable:true,value:function(idx) {
			console.log(this.context.plotData[idx]);
		}});
		Object.defineProperty(PointAndFigureSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1]))
				- this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
	
			var columnWidth = (width / (this.context.plotData.length - 1));
	
			var anyBox, j = 0;
			while (anyBox === undefined) {
				if (this.context.plotData[j].close !== undefined) {
					anyBox= this.context.plotData[j].boxes[0];
				}
				j++;
			}
	
			var props = this.props;
			var boxHeight = Math.abs(this.context.yScale(anyBox.open) - this.context.yScale(anyBox.close));
	
			var columns = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = d;
						var boxes = d.boxes.map(function(box, i)  {
							var boxshape;
							if (d.direction > 0) {
								boxshape = (
									React.createElement("g", {key: idx + "-" + i}, 
										React.createElement("line", {className: "point_figure_up", x1: 0, y1: this.context.yScale(box.open), x2: columnWidth, y2: this.context.yScale(box.close)}), 
										React.createElement("line", {className: "point_figure_up", x1: 0, y1: this.context.yScale(box.close), x2: columnWidth, y2: this.context.yScale(box.open)})
									)
									);
							} else {
								boxshape = (
									React.createElement("ellipse", {key: idx + "-" + i, className: "point_figure_down", cx: columnWidth/2, cy: this.context.yScale((box.open + box.close) / 2), 
										rx: columnWidth/2, ry: boxHeight / 2})
									);
							}
							return boxshape;
						}.bind(this));
						var debug = false
							? React.createElement("rect", {x: 0, y: 0, height: 980, width: columnWidth, style: { opacity: 0.1}, onClick: this.handleClick.bind(this, idx)})
							: null;
						var col = (React.createElement("g", {key: idx, 
										transform: "translate(" + (this.context.xScale(this.context.xAccessor(d)) - (columnWidth / 2)) + ", 0)"}, 
										boxes, 
										debug
									));
						return col;
					}.bind(this));
	
			return (
				React.createElement("g", null, 
					columns
				)
			);
		}});
	;
	
	PointAndFigureSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
	}
	
	PointAndFigureSeries.defaultProps = { namespace: "ReStock.PointAndFigureSeries" };
	
	PointAndFigureSeries.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = PointAndFigureSeries;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3);
	
	var ____Class17=React.Component;for(var ____Class17____Key in ____Class17){if(____Class17.hasOwnProperty(____Class17____Key)){RenkoSeries[____Class17____Key]=____Class17[____Class17____Key];}}var ____SuperProtoOf____Class17=____Class17===null?null:____Class17.prototype;RenkoSeries.prototype=Object.create(____SuperProtoOf____Class17);RenkoSeries.prototype.constructor=RenkoSeries;RenkoSeries.__superConstructor__=____Class17;function RenkoSeries(){if(____Class17!==null){____Class17.apply(this,arguments);}}
		Object.defineProperty(RenkoSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1]))
				- this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
	
			var candleWidth = (width / (this.context.plotData.length - 1));
	
			var candles = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = this.context.yAccessor(d);
						var x = this.context.xScale(this.context.xAccessor(d)) - 0.5 * candleWidth,
							y = this.context.yScale(Math.max(ohlc.open, ohlc.close)),
							height = Math.abs(this.context.yScale(ohlc.open) - this.context.yScale(ohlc.close)),
							className = (ohlc.open <= ohlc.close) ? 'up' : 'down';
	
						return React.createElement("rect", {key: idx, className: className, 
									x: x, 
									y: y, 
									width: candleWidth, 
									height: height})
					}.bind(this));
			var wicks = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = this.context.yAccessor(d);
	
						var x1 = this.context.xScale(this.context.xAccessor(d)),
							y1 = this.context.yScale(ohlc.high),
							x2 = x1,
							y2 = this.context.yScale(ohlc.low),
							className = (ohlc.open >= ohlc.close) ? 'up' : 'down';
	
						return React.createElement("line", {key: idx, 
										className: className, 
										x1: x1, 
										y1: y1, 
										x2: x2, 
										y2: y2})
					}.bind(this));
			return (
				React.createElement("g", null, 
					React.createElement("g", {className: "candle"}, 
						candles
					)
	
				)
			);
		}});
	;
	
	RenkoSeries.contextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		plotData: React.PropTypes.array.isRequired,
	}
	
	RenkoSeries.defaultProps = { namespace: "ReStock.RenkoSeries" };
	
	RenkoSeries.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = RenkoSeries;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103)
	
	var ____Class18=React.Component;for(var ____Class18____Key in ____Class18){if(____Class18.hasOwnProperty(____Class18____Key)){EventCapture[____Class18____Key]=____Class18[____Class18____Key];}}var ____SuperProtoOf____Class18=____Class18===null?null:____Class18.prototype;EventCapture.prototype=Object.create(____SuperProtoOf____Class18);EventCapture.prototype.constructor=EventCapture;EventCapture.__superConstructor__=____Class18;
		function EventCapture(props) {
			____Class18.call(this,props);
			this.toggleFocus = this.toggleFocus.bind(this);
			this.setFocus = this.setFocus.bind(this);
			this.handleEnter = this.handleEnter.bind(this);
			this.handleLeave = this.handleLeave.bind(this);
			this.handleWheel = this.handleWheel.bind(this);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseDown = this.handleMouseDown.bind(this);
			this.handleMouseUp = this.handleMouseUp.bind(this);
		}
		Object.defineProperty(EventCapture.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
			if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
		}});
		Object.defineProperty(EventCapture.prototype,"toggleFocus",{writable:true,configurable:true,value:function() {
			this.setFocus(!this.state.inFocus);
		}});
		Object.defineProperty(EventCapture.prototype,"setFocus",{writable:true,configurable:true,value:function(focus) {
			this.setState({
				inFocus: focus
			});
		}});
		Object.defineProperty(EventCapture.prototype,"handleEnter",{writable:true,configurable:true,value:function() {
			if (this.context.onMouseEnter) {
				this.context.onMouseEnter();
			}
		}});
		Object.defineProperty(EventCapture.prototype,"handleLeave",{writable:true,configurable:true,value:function() {
			if (this.context.onMouseLeave) {
				this.context.onMouseLeave();
			}
		}});
		Object.defineProperty(EventCapture.prototype,"handleWheel",{writable:true,configurable:true,value:function(e) {
			if (this.props.zoom
					&& this.context.onZoom
					&& this.context.focus) {
				e.stopPropagation();
				e.preventDefault();
				var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
				var newPos = Utils.mousePosition(e);
				this.context.onZoom(zoomDir, newPos);
			}
		}});
		Object.defineProperty(EventCapture.prototype,"handleMouseMove",{writable:true,configurable:true,value:function(e) {
			if (this.context.onMouseMove && this.props.mouseMove) {
				var newPos = Utils.mousePosition(e);
				if (this.context.panInProgress) {
					if (this.props.pan && this.context.onPan) {
						var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.mainChart;}.bind(this)) [0];
						this.context.onPan(newPos, chartData.plot.scales.xScale.domain());
					}
				} else {
					this.context.onMouseMove(newPos);
				}
			}
		}});
		Object.defineProperty(EventCapture.prototype,"handleMouseDown",{writable:true,configurable:true,value:function(e) {
			var inFocus = true
			var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.mainChart;}.bind(this)) [0];
			if (this.props.pan && this.context.onPanStart) {
				var mouseXY = Utils.mousePosition(e);
				this.context.onPanStart(chartData.plot.scales.xScale.domain(), mouseXY)
			} else {
				if (!this.context.focus && this.context.onFocus) this.context.onFocus(true);
			}
			e.preventDefault();
		}});
		Object.defineProperty(EventCapture.prototype,"handleMouseUp",{writable:true,configurable:true,value:function(e) {
			if (this.props.pan && this.context.onPanEnd) {
				this.context.onPanEnd();
			}
			e.preventDefault();
		}});
		Object.defineProperty(EventCapture.prototype,"render",{writable:true,configurable:true,value:function() {
			var className = this.context.panInProgress ? 'grabbing' : 'crosshair';
			return (
				React.createElement("rect", {
					className: className, 
					width: this.context.width, height: this.context.height, style: {opacity: 0}, 
					onMouseEnter: this.handleEnter, 
					onMouseLeave: this.handleLeave, 
					onMouseMove: this.handleMouseMove, 
					onMouseDown: this.handleMouseDown, 
					onMouseUp: this.handleMouseUp, 
					onWheel: this.handleWheel}
					)
			);
		}});
	;
	
	EventCapture.propTypes = {
		mainChart: React.PropTypes.number.isRequired,
		mouseMove: React.PropTypes.bool.isRequired,
		zoom: React.PropTypes.bool.isRequired,
		zoomMultiplier: React.PropTypes.number.isRequired,
		pan: React.PropTypes.bool.isRequired,
		panSpeedMultiplier: React.PropTypes.number.isRequired,
		defaultFocus: React.PropTypes.bool.isRequired,
	};
	EventCapture.defaultProps = {
		namespace: "ReStock.EventCapture"
		, mouseMove: false
		, zoom: false
		, zoomMultiplier: 1
		, pan: false
		, panSpeedMultiplier: 1
		, className: "crosshair"
		, defaultFocus: false
	};
	EventCapture.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		chartData: React.PropTypes.array,
		onMouseMove: React.PropTypes.func,
		onMouseEnter: React.PropTypes.func,
		onMouseLeave: React.PropTypes.func,
		onZoom: React.PropTypes.func,
		onPanStart: React.PropTypes.func,
		onPan: React.PropTypes.func,
		onPanEnd: React.PropTypes.func,
		panInProgress: React.PropTypes.bool,
		focus: React.PropTypes.bool.isRequired,
		onFocus: React.PropTypes.func,
	};
	
	module.exports = EventCapture;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var CrossHair = __webpack_require__(90)
	var VerticalMousePointer = __webpack_require__(91)
	var Utils = __webpack_require__(103)
	var ChartDataUtil = __webpack_require__(101);
	var PureComponent = __webpack_require__(106);
	
	for(var PureComponent____Key in PureComponent){if(PureComponent.hasOwnProperty(PureComponent____Key)){MouseCoordinates[PureComponent____Key]=PureComponent[PureComponent____Key];}}var ____SuperProtoOfPureComponent=PureComponent===null?null:PureComponent.prototype;MouseCoordinates.prototype=Object.create(____SuperProtoOfPureComponent);MouseCoordinates.prototype.constructor=MouseCoordinates;MouseCoordinates.__superConstructor__=PureComponent;
		function MouseCoordinates(props, context) {
			PureComponent.call(this,props, context);
			this.getPointer = this.getPointer.bind(this);
		}
		Object.defineProperty(MouseCoordinates.prototype,"getPointer",{writable:true,configurable:true,value:function() {
			var $__0=    this.context,currentCharts=$__0.currentCharts,chartData=$__0.chartData,currentItems=$__0.currentItems;
	
			var edges = chartData
				.filter(function(eachChartData)  {return currentCharts.indexOf(eachChartData.id) > -1;})
				.map(function(each)  {
					var yDisplayFormat = each.config.compareSeries.length > 0
						? function(d)  {return (Math.round(d * 10000) / 100).toFixed(2) + '%';}
						: each.config.mouseCoordinates.format;
					var mouseY = this.context.mouseXY[1] - each.config.origin[1];
					var yValue = each.plot.scales.yScale.invert(mouseY);
					return {
						id: each.id,
						at: each.config.mouseCoordinates.at,
						yValue: yValue,
						yDisplayFormat: yDisplayFormat
					};
				}.bind(this))
				.filter(function(each)  {return each.at !== undefined;})
				.filter(function(each)  {return each.yDisplayFormat !== undefined;})
				.map(function(each)  {
					each.yDisplayValue = each.yDisplayFormat(each.yValue);
					return each;
				})
	
			// console.log(edges);
			var singleChartData = chartData.filter(function(eachChartData)  {return eachChartData.id === this.context.mainChart;}.bind(this))[0];
	
			// var yDisplayFormat = singleChartData.config.compareSeries.length > 0 ? (d) => (Math.round(d * 10000) / 100).toFixed(2) + '%' : this.props.yDisplayFormat;
	
			var item = currentItems.filter(function(eachItem)  {return eachItem.id === this.context.mainChart;}.bind(this))[0];// ChartDataUtil.getCurrentItemForChart(this.props, this.context);
			if (item === undefined) return null;
			item = item.data;
			// console.log(singleChartData, item);
			var xValue = singleChartData.config.accessors.xAccessor(item);
	
			var xDisplayValue = this.context.dataTransformOptions === undefined
				? xValue
				: this.context.dataTransformOptions.dateAccessor(item);
	
			// var yValue = singleChartData.plot.scales.yScale.invert(this.context.mouseXY[1]);
	
			if (xValue === undefined) return null;
			var x = this.props.snapX ? Math.round(singleChartData.plot.scales.xScale(xValue)) : this.context.mouseXY[0];
			var y = this.context.mouseXY[1];
			switch (this.props.type) {
				case 'crosshair':
					return React.createElement(CrossHair, {height: this.context.height, width: this.context.width, mouseXY: [x, y], 
						xDisplayValue: this.props.xDisplayFormat(xDisplayValue), edges: edges})
				case 'vertical':
					return React.createElement(VerticalMousePointer, null)
			}
		}});
		Object.defineProperty(MouseCoordinates.prototype,"render",{writable:true,configurable:true,value:function() {
			var pointer = this.getPointer()
	
			return (
				React.createElement("g", {className: this.context.show ? 'show' : 'hide'}, 
					pointer
				)
			);
		}});
	;
	
	MouseCoordinates.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		mainChart: React.PropTypes.number.isRequired,
		show: React.PropTypes.bool,
		mouseXY: React.PropTypes.array,
		dataTransformOptions: React.PropTypes.object,
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
		currentCharts: React.PropTypes.array.isRequired,
	}
	MouseCoordinates.propTypes = {
		xDisplayFormat: React.PropTypes.func.isRequired,
		yDisplayFormat: React.PropTypes.func.isRequired,
		type: React.PropTypes.oneOf(['crosshair', 'vertical']).isRequired
	}
	
	MouseCoordinates.defaultProps = { 
		namespace: "ReStock.MouseCoordinates",
		show: false,
		snapX: true,
		xDisplayFormat: Utils.displayDateFormat,
		yDisplayFormat: Utils.displayNumberFormat,
	};
	
	
	module.exports = MouseCoordinates;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var EdgeCoordinate = __webpack_require__(107)
	var Utils = __webpack_require__(103)
	
	var ____Class19=React.Component;for(var ____Class19____Key in ____Class19){if(____Class19.hasOwnProperty(____Class19____Key)){CrossHair[____Class19____Key]=____Class19[____Class19____Key];}}var ____SuperProtoOf____Class19=____Class19===null?null:____Class19.prototype;CrossHair.prototype=Object.create(____SuperProtoOf____Class19);CrossHair.prototype.constructor=CrossHair;CrossHair.__superConstructor__=____Class19;
		function CrossHair(props) {
			____Class19.call(this,props);
		}
		Object.defineProperty(CrossHair.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return nextProps.mouseXY !== this.props.mouseXY
		}});
		Object.defineProperty(CrossHair.prototype,"render",{writable:true,configurable:true,value:function() {
			var x1 = 0, x2 = this.props.width;
			var edges = this.props.edges.map(function(edge, idx)  {
				if (edge.at === 'left') {
					x1 = -this.props.yAxisPad;
				}
				if (edge.at === 'right') {
					x2 = this.props.width + this.props.yAxisPad;
				}
				return React.createElement(EdgeCoordinate, {
					key: idx, 
					type: "horizontal", 
					className: "horizontal", 
					show: true, 
					x1: 0, y1: this.props.mouseXY[1], 
					x2: 0, y2: this.props.mouseXY[1], 
					coordinate: edge.yDisplayValue, 
					edgeAt: edge.at === 'left' ? x1 : x2, 
					orient: edge.at, 
					hideLine: true}
					);
			}.bind(this))
			var line = null;
			if (this.props.edges.length > 0) {
				line = React.createElement("line", {className: "cross-hair", 
						x1: x1, y1: this.props.mouseXY[1], 
						x2: x2, y2: this.props.mouseXY[1]})
			}
			return (
				React.createElement("g", {className: 'crosshair '}, 
					line, 
					edges, 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props.mouseXY[0], y1: 0, 
						x2: this.props.mouseXY[0], y2: this.props.height, 
						coordinate: this.props.xDisplayValue, 
						edgeAt: this.props.height, 
						orient: "bottom"}
						)
				)
			);
		}});
	;
	
	CrossHair.propTypes = {
		yAxisPad: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		width: React.PropTypes.number.isRequired,
		mouseXY: React.PropTypes.array.isRequired,
		xDisplayValue: React.PropTypes.string.isRequired,
		edges: React.PropTypes.array.isRequired
	};
	CrossHair.defaultProps = {
		namespace: "ReStock.CrossHair",
		yAxisPad: 5
	};
	
	module.exports = CrossHair;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var EdgeCoordinate = __webpack_require__(107)
	var Utils = __webpack_require__(103)
	
	
	var ____Class1a=React.Component;for(var ____Class1a____Key in ____Class1a){if(____Class1a.hasOwnProperty(____Class1a____Key)){VerticalMousePointer[____Class1a____Key]=____Class1a[____Class1a____Key];}}var ____SuperProtoOf____Class1a=____Class1a===null?null:____Class1a.prototype;VerticalMousePointer.prototype=Object.create(____SuperProtoOf____Class1a);VerticalMousePointer.prototype.constructor=VerticalMousePointer;VerticalMousePointer.__superConstructor__=____Class1a;function VerticalMousePointer(){if(____Class1a!==null){____Class1a.apply(this,arguments);}}
		Object.defineProperty(VerticalMousePointer.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return nextProps.mouseXY !== this.props.mouseXY
		}});
		Object.defineProperty(VerticalMousePointer.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props.mouseXY[0], y1: 0, 
						x2: this.props.mouseXY[0], y2: this.props.height, 
						coordinate: this.props.xDisplayValue, 
						edgeAt: this.props.height, 
						orient: "bottom"}
						)
					
				)
			);
		}});
	;
	
	VerticalMousePointer.propTypes = {
		height: React.PropTypes.number.isRequired,
		mouseXY: React.PropTypes.array.isRequired,
		xDisplayValue: React.PropTypes.string.isRequired,
	}
	
	VerticalMousePointer.defaultProps = { namespace: "ReStock.VerticalMousePointer" };
	
	VerticalMousePointer.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = VerticalMousePointer;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2),
		Utils = __webpack_require__(103);
	
	var ____Class1b=React.Component;for(var ____Class1b____Key in ____Class1b){if(____Class1b.hasOwnProperty(____Class1b____Key)){CurrentCoordinate[____Class1b____Key]=____Class1b[____Class1b____Key];}}var ____SuperProtoOf____Class1b=____Class1b===null?null:____Class1b.prototype;CurrentCoordinate.prototype=Object.create(____SuperProtoOf____Class1b);CurrentCoordinate.prototype.constructor=CurrentCoordinate;CurrentCoordinate.__superConstructor__=____Class1b;
		function CurrentCoordinate(props) {
			____Class1b.call(this,props);
		}
		Object.defineProperty(CurrentCoordinate.prototype,"render",{writable:true,configurable:true,value:function() {
			var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.forChart;}.bind(this))[0];
			var currentItem = this.context.currentItems.filter(function(each)  {return each.id === this.props.forChart;}.bind(this))[0];
			var item = currentItem ? currentItem.data : undefined;
			var fill = 'black';
	
			if (! this.context.show || item === undefined) return null;
			var yAccessor =  this.props.yAccessor || chartData.config.accessors.yAccessor;
	
			if (this.props.forOverlay !== undefined) {
				var overlays = chartData.config.overlays
					.filter(function(each)  {return each.id === this.props.forOverlay;}.bind(this));
	
				if (overlays.length != 1) {
					console.warn('Unique overlay with id={%s} not found', this.props.forOverlay);
					throw new Error('Unique overlay not found');
				}
				fill = overlays[0].stroke;
				yAccessor = overlays[0].yAccessor;
			} else if (this.props.forCompareSeries !== undefined) {
				var compSeries = chartData.config.compareSeries
					.filter(function(each)  {return each.id === this.props.forCompareSeries;}.bind(this));
	
				if (compSeries.length != 1) {
					console.warn('Unique compareSeries with id={%s} not found', this.props.forCompareSeries);
					throw new Error('Unique compareSeries not found');
				}
				fill = compSeries[0].stroke;
				yAccessor = compSeries[0].percentYAccessor;
			}
	
			var xValue = chartData.config.accessors.xAccessor(item);
			var yValue = yAccessor(item);
	
			if (yValue === undefined) return null;
	
			var x = Math.round(chartData.plot.scales.xScale(xValue)) + chartData.config.origin[0];
			var y = Math.round(chartData.plot.scales.yScale(yValue)) + chartData.config.origin[1];
	
			return (
				React.createElement("circle", {className: this.props.className, cx: x, cy: y, r: this.props.r, fill: fill})
			);
		}});
	;
	
	CurrentCoordinate.propTypes = {
		forChart: React.PropTypes.number.isRequired,
		forOverlay: React.PropTypes.number,
		forCompareSeries: React.PropTypes.number,
		yAccessor: React.PropTypes.func,
		r: React.PropTypes.number.isRequired,
		className: React.PropTypes.string,
	}
	
	CurrentCoordinate.defaultProps = { namespace: "ReStock.CurrentCoordinate", r: 3 };
	
	CurrentCoordinate.contextTypes = {
		show: React.PropTypes.bool.isRequired,
		currentItems: React.PropTypes.array.isRequired,
		chartData: React.PropTypes.array.isRequired,
	};
	
	module.exports = CurrentCoordinate;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103);
	var PureComponent = __webpack_require__(106);
	
	for(var PureComponent____Key in PureComponent){if(PureComponent.hasOwnProperty(PureComponent____Key)){TooltipContainer[PureComponent____Key]=PureComponent[PureComponent____Key];}}var ____SuperProtoOfPureComponent=PureComponent===null?null:PureComponent.prototype;TooltipContainer.prototype=Object.create(____SuperProtoOfPureComponent);TooltipContainer.prototype.constructor=TooltipContainer;TooltipContainer.__superConstructor__=PureComponent;function TooltipContainer(){if(PureComponent!==null){PureComponent.apply(this,arguments);}}
		Object.defineProperty(TooltipContainer.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.context, function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (
				React.createElement("g", {className: "toottip-hover"}, 
					children
				)
			);
		}});
	;
	
	TooltipContainer.contextTypes = {
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	}
	
	TooltipContainer.defaultProps = { namespace: "ReStock.TooltipContainer" };
	
	module.exports = TooltipContainer;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103)
	var ChartDataUtil = __webpack_require__(101);
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var ____Class1c=React.Component;for(var ____Class1c____Key in ____Class1c){if(____Class1c.hasOwnProperty(____Class1c____Key)){OHLCTooltip[____Class1c____Key]=____Class1c[____Class1c____Key];}}var ____SuperProtoOf____Class1c=____Class1c===null?null:____Class1c.prototype;OHLCTooltip.prototype=Object.create(____SuperProtoOf____Class1c);OHLCTooltip.prototype.constructor=OHLCTooltip;OHLCTooltip.__superConstructor__=____Class1c;function OHLCTooltip(){if(____Class1c!==null){____Class1c.apply(this,arguments);}}
		Object.defineProperty(OHLCTooltip.prototype,"render",{writable:true,configurable:true,value:function() {
			var displayDate, fromDate, toDate, open, high, low, close, volume;
	
			displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
	
			var item = ChartDataUtil.getCurrentItemForChart(this.props, this.context);
	
			if (item !== undefined && item.close !== undefined) {
				volume = (item.volume / billion > 1)
					? (item.volume / billion).toFixed(2) + "b"
					: (item.volume / million > 1)
						? (item.volume / million).toFixed(2) + "m"
						: (item.volume / thousand > 1)
							? (item.volume / thousand).toFixed(2) + "k"
							: item.volume;
	
				displayDate = this.props.xDisplayFormat(item.date);
				open = Utils.displayNumberFormat(item.open);
				high = Utils.displayNumberFormat(item.high);
				low = Utils.displayNumberFormat(item.low);
				close = Utils.displayNumberFormat(item.close);
			}
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")"}, 
					React.createElement("text", {x: 0, y: 0, className: "legend"}, 
						React.createElement("tspan", {key: "label", x: 0, dy: "5", className: "tooltip-label"}, "Date: "), 
						React.createElement("tspan", {key: "value"}, displayDate), 
						React.createElement("tspan", {key: "label_O", className: "tooltip-label"}, " O: "), React.createElement("tspan", {key: "value_O"}, open), 
						React.createElement("tspan", {key: "label_H", className: "tooltip-label"}, " H: "), React.createElement("tspan", {key: "value_H"}, high), 
						React.createElement("tspan", {key: "label_L", className: "tooltip-label"}, " L: "), React.createElement("tspan", {key: "value_L"}, low), 
						React.createElement("tspan", {key: "label_C", className: "tooltip-label"}, " C: "), React.createElement("tspan", {key: "value_C"}, close), 
						React.createElement("tspan", {key: "label_Vol", className: "tooltip-label"}, " Vol: "), React.createElement("tspan", {key: "value_Vol"}, volume)
					)
				)
			);
		}});
	;
	
	OHLCTooltip.contextTypes = {
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	}
	OHLCTooltip.propTypes = {
		forChart: React.PropTypes.number.isRequired,
		accessor: React.PropTypes.func.isRequired,
		xDisplayFormat: React.PropTypes.func.isRequired,
		origin: React.PropTypes.array.isRequired,
	}
	
	OHLCTooltip.defaultProps = { 
		namespace: "ReStock.OHLCTooltip",
		accessor: function(d)  {return {date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume}},
		xDisplayFormat: Utils.displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = OHLCTooltip;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103)
	var ChartDataUtil = __webpack_require__(101);
	
	var ____Class1d=React.Component;for(var ____Class1d____Key in ____Class1d){if(____Class1d.hasOwnProperty(____Class1d____Key)){CompareTooltip[____Class1d____Key]=____Class1d[____Class1d____Key];}}var ____SuperProtoOf____Class1d=____Class1d===null?null:____Class1d.prototype;CompareTooltip.prototype=Object.create(____SuperProtoOf____Class1d);CompareTooltip.prototype.constructor=CompareTooltip;CompareTooltip.__superConstructor__=____Class1d;function CompareTooltip(){if(____Class1d!==null){____Class1d.apply(this,arguments);}}
		Object.defineProperty(CompareTooltip.prototype,"render",{writable:true,configurable:true,value:function() {
			var displayValue = "n/a";
	
			var chartData = ChartDataUtil.getChartDataForChart(this.props, this.context);
			var item = ChartDataUtil.getCurrentItemForChart(this.props, this.context);
	
			var thisSeries = chartData.config.compareSeries.filter(function(each)  {return each.id === this.props.forCompareSeries;}.bind(this))[0];
	
			if (item !== undefined && thisSeries.yAccessor(item) !== undefined) {
				displayValue = thisSeries.yAccessor(item);
			}
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")"}, 
					React.createElement("text", {x: 0, y: 0, className: "legend"}, 
						React.createElement("tspan", {key: "label", x: 0, dy: "5", className: "tooltip-label"}, thisSeries.displayLabel + ': '), 
						React.createElement("tspan", {key: "value", stroke: thisSeries.stroke}, displayValue)
					)
				)
			);
		}});
	;
	
	CompareTooltip.contextTypes = {
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	}
	CompareTooltip.propTypes = {
		forChart: React.PropTypes.number.isRequired,
		forCompareSeries: React.PropTypes.number.isRequired,
		xDisplayFormat: React.PropTypes.func.isRequired,
		origin: React.PropTypes.array.isRequired,
	}
	
	CompareTooltip.defaultProps = { 
		namespace: "ReStock.CompareTooltip",
		xDisplayFormat: Utils.displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = CompareTooltip;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103)
	var ChartDataUtil = __webpack_require__(101);
	
	var ____Class1e=React.Component;for(var ____Class1e____Key in ____Class1e){if(____Class1e.hasOwnProperty(____Class1e____Key)){SingleMAToolTip[____Class1e____Key]=____Class1e[____Class1e____Key];}}var ____SuperProtoOf____Class1e=____Class1e===null?null:____Class1e.prototype;SingleMAToolTip.prototype=Object.create(____SuperProtoOf____Class1e);SingleMAToolTip.prototype.constructor=SingleMAToolTip;SingleMAToolTip.__superConstructor__=____Class1e;function SingleMAToolTip(){if(____Class1e!==null){____Class1e.apply(this,arguments);}}
		Object.defineProperty(SingleMAToolTip.prototype,"handleClick",{writable:true,configurable:true,value:function(overlay) {
			if (this.props.onClick) {
				this.props.onClick(overlay);
			}
		}});
		Object.defineProperty(SingleMAToolTip.prototype,"render",{writable:true,configurable:true,value:function() {
			var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
			return (
				React.createElement("g", {transform: translate}, 
					React.createElement("line", {x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color}), 
					React.createElement("text", {x: 5, y: 11, className: "legend"}, 
						React.createElement("tspan", {className: "tooltip-label"}, this.props.displayName), 
						React.createElement("tspan", {x: "5", dy: "15"}, this.props.value)
					), 
					React.createElement("rect", {x: 0, y: 0, width: 55, height: 30, onClick: this.handleClick.bind(this, this.props.overlay)})
				)
			);
		}});
	;
	
	SingleMAToolTip.propTypes = {
		origin: React.PropTypes.array.isRequired,
		color: React.PropTypes.string.isRequired,
		displayName: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func
	};
	
	var ____Class1f=React.Component;for(var ____Class1f____Key in ____Class1f){if(____Class1f.hasOwnProperty(____Class1f____Key)){MovingAverageTooltip[____Class1f____Key]=____Class1f[____Class1f____Key];}}var ____SuperProtoOf____Class1f=____Class1f===null?null:____Class1f.prototype;MovingAverageTooltip.prototype=Object.create(____SuperProtoOf____Class1f);MovingAverageTooltip.prototype.constructor=MovingAverageTooltip;MovingAverageTooltip.__superConstructor__=____Class1f;function MovingAverageTooltip(){if(____Class1f!==null){____Class1f.apply(this,arguments);}}
		Object.defineProperty(MovingAverageTooltip.prototype,"render",{writable:true,configurable:true,value:function() {
			var chartData = ChartDataUtil.getChartDataForChart(this.props, this.context);
			var item = ChartDataUtil.getCurrentItemForChart(this.props, this.context);
	
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")", className: "ma-container"}, 
					chartData.config.overlays.map(function(eachOverlay, idx)  {
						var yValue = eachOverlay.yAccessor(item);
						// console.log(yValue);
						var yDisplayValue = yValue ? this.props.displayFormat(yValue) : "n/a";
						return React.createElement(SingleMAToolTip, {
							key: idx, 
							origin: [this.props.width * idx, 0], 
							color: eachOverlay.stroke, 
							displayName: eachOverlay.tooltipLabel, 
							value: yDisplayValue, 
							overlay: eachOverlay, 
							onClick: this.props.onClick})
					}.bind(this))
				)
			);
		}});
	;
	
	MovingAverageTooltip.contextTypes = {
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	};
	MovingAverageTooltip.propTypes = {
		forChart: React.PropTypes.number.isRequired,
		displayFormat: React.PropTypes.func.isRequired,
		origin: React.PropTypes.array.isRequired,
		onClick: React.PropTypes.func
	};
	MovingAverageTooltip.defaultProps = { 
		namespace: "ReStock.MovingAverageTooltip",
		displayFormat: Utils.displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	
	module.exports = MovingAverageTooltip;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103);
	var PureComponent = __webpack_require__(106);
	
	for(var PureComponent____Key in PureComponent){if(PureComponent.hasOwnProperty(PureComponent____Key)){EdgeContainer[PureComponent____Key]=PureComponent[PureComponent____Key];}}var ____SuperProtoOfPureComponent=PureComponent===null?null:PureComponent.prototype;EdgeContainer.prototype=Object.create(____SuperProtoOfPureComponent);EdgeContainer.prototype.constructor=EdgeContainer;EdgeContainer.__superConstructor__=PureComponent;function EdgeContainer(){if(PureComponent!==null){PureComponent.apply(this,arguments);}}
		Object.defineProperty(EdgeContainer.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.context, function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return React.createElement("g", null, children)
		}});
	;
	
	EdgeContainer.contextTypes = {
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	};
	
	module.exports = EdgeContainer;
	


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103)
	var EdgeCoordinate = __webpack_require__(107)
	var ChartDataUtil = __webpack_require__(101);
	
	var ____Class1g=React.Component;for(var ____Class1g____Key in ____Class1g){if(____Class1g.hasOwnProperty(____Class1g____Key)){EdgeIndicator[____Class1g____Key]=____Class1g[____Class1g____Key];}}var ____SuperProtoOf____Class1g=____Class1g===null?null:____Class1g.prototype;EdgeIndicator.prototype=Object.create(____SuperProtoOf____Class1g);EdgeIndicator.prototype.constructor=EdgeIndicator;EdgeIndicator.__superConstructor__=____Class1g;function EdgeIndicator(){if(____Class1g!==null){____Class1g.apply(this,arguments);}}
		Object.defineProperty(EdgeIndicator.prototype,"render",{writable:true,configurable:true,value:function() {
			var chartData = ChartDataUtil.getChartDataForChart(this.props, this.context);
			var currentItem = ChartDataUtil.getCurrentItemForChart(this.props, this.context);
			var edge = null, item, yAccessor;
			// console.log(chartData.config.compareSeries.length);
			var displayFormat = chartData.config.compareSeries.length > 0 ? d3.format(".0%") : this.props.displayFormat;
	
			if (this.props.forOverlay !== undefined
					&& chartData.config.overlays.length > 0
					&& chartData.plot.overlayValues.length > 0) {
	
				var overlay = chartData.config.overlays
					.filter(function(eachOverlay)  {return eachOverlay.id === this.props.forOverlay;}.bind(this));
				var overlayValue = chartData.plot.overlayValues
					.filter(function(eachOverlayValue)  {return eachOverlayValue.id === this.props.forOverlay;}.bind(this));
	
				// console.log(overlay, overlayValue);
				if (overlay.length !== 1) {
					console.warn('%s overlays found with id %s, correct the OverlaySeries so there is exactly one for each id', overlay.length, newChild.props.forOverlay)
					throw new Error('Unable to identify unique Overlay for the id');
				}
				if (overlayValue.length !== 1 && overlay.length === 1) {
					console.warn('Something is wrong!!!, There should be 1 overlayValue, report the issue on github');
				}
	
				item = this.props.itemType === 'first'
					? overlayValue[0].first
					: this.props.itemType === 'last'
						? overlayValue[0].last
						: currentItem;
				yAccessor = overlay[0].yAccessor;
	
				if (item !== undefined) {
					var yValue = yAccessor(item), xValue = chartData.config.accessors.xAccessor(item);
					var x1 = Math.round(chartData.plot.scales.xScale(xValue)), y1 = Math.round(chartData.plot.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.context.width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							fill: overlay[0].stroke, 
							show: true, 
							x1: x1 + chartData.config.origin[0], y1: y1 + chartData.config.origin[1], 
							x2: edgeX + chartData.config.origin[0], y2: y1 + chartData.config.origin[1], 
							coordinate: displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			} else if (this.props.forOverlay === undefined) {
				item = this.props.itemType === 'first'
					? chartData.firstItem
					: this.props.itemType === 'last'
						? chartData.lastItem
						: currentItem;
				yAccessor = chartData.config.accessors.yAccessor;
	
				if (item !== undefined && yAccessor !== null) {
					var yValue = yAccessor(item);
					var xValue = chartData.accessors.xAccessor(item);
	
					var x1 = Math.round(chartData.plot.scales.xScale(xValue)), y1 = Math.round(chartData.plot.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.context.width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							show: true, 
							x1: x1 + chartData.config.origin[0], y1: y1 + chartData.config.origin[1], 
							x2: edgeX + chartData.config.origin[0], y2: y1 + chartData.config.origin[1], 
							coordinate: displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			}
			return edge;
		}});
	;
	
	EdgeIndicator.contextTypes = {
		width: React.PropTypes.number.isRequired,
		chartData: React.PropTypes.array.isRequired,
		currentItems: React.PropTypes.array.isRequired,
	}
	EdgeIndicator.propTypes = {
		type: React.PropTypes.oneOf(['horizontal']).isRequired,
		className: React.PropTypes.string,
		itemType: React.PropTypes.oneOf(['first', 'last', 'current']).isRequired,
		orient: React.PropTypes.oneOf(['left', 'right']),
		edgeAt: React.PropTypes.oneOf(['left', 'right']),
	
		forChart: React.PropTypes.number.isRequired,
		forOverlay: React.PropTypes.number, // undefined means main Data series of that chart
	
		displayFormat: React.PropTypes.func.isRequired,
	}
	
	EdgeIndicator.defaultProps = { 
		type: 'horizontal',
		orient: 'left',
		edgeAt: 'left',
		displayFormat: Utils.displayNumberFormat,
		yAxisPad: 5,
		namespace: "ReStock.EdgeIndicator"
	};
	
	module.exports = EdgeIndicator;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	var ChartWidthMixin = {
		handleWindowResize:function() {
			var w = $(React.findDOMNode(this)).parent().width();
			//var w = $(this.getDOMNode()).parent().width();
			console.log('width = ', w);
	
			this.setState({
				width: w
			});
		},
		componentWillUnMount:function() {
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount:function() {
			window.addEventListener("resize", this.handleWindowResize);
			var w = $(React.findDOMNode(this)).parent().width();
			//var w = $(this.getDOMNode()).parent().width();
			this.setState({
				width: w
			});
		},
	};
	
	module.exports = ChartWidthMixin;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(2),
		d3 = __webpack_require__(3),
		ScaleUtils = __webpack_require__(108),
		OverlayUtils = __webpack_require__(109),
		Utils = __webpack_require__(103),
		overlayColors = Utils.overlayColors;
	var pluck = Utils.pluck;
	var keysAsArray = Utils.keysAsArray;
	
	
	var ChartContainerMixin = {
		containsChart:function(props) {
			return this.getCharts(props).length > 0;
		},
		getCharts:function(props) {
			return this.getChildren(props.children, /Chart$/)
		},
		getChartDataForChart:function(props, context) {
			var chartData = context.chartData.filter(function(each)  {return each.id === props.forChart;})[0];
			return chartData;
		},
		getCurrentItemForChart:function(props, context) {
			var currentItem = context.currentItems.filter(function(each)  {return each.id === props.forChart;})[0];
			var item = currentItem ? currentItem.data : {}
			return item;
		},
		getChartData:function(props, context, partialData, fullData, other) {
	
			var charts = this.getCharts(props);
			var innerDimensions = this.getInnerDimensions(context, other);
	
			return charts.map(function(each)  {
				var chartProps = each.props;
				var config = this.getChartConfigFor(innerDimensions, chartProps, partialData, fullData, other)
				var plot = this.getChartPlotFor(config, partialData);
	
				return {
					id : each.props.id,
					config: config,
					plot: plot
				};
			}.bind(this));
		},
		getChildren:function(children, regex) {
			var matchingChildren = [];
			React.Children.forEach(children, function(child)  {
				if (regex.test(child.props.namespace)) matchingChildren.push(child);
			});
			return matchingChildren;
		},
		getMainChart:function(children) {
			var eventCapture = this.getChildren(children, /EventCapture$/);
			if (eventCapture.length > 1) throw new Error("only one EventCapture allowed");
			if (eventCapture.length > 0) return eventCapture[0].props.mainChart;
		},
		getClosestItem:function(plotData, mouseXY, chartData) {
			// console.log(chartData);
			var xValue = chartData.plot.scales.xScale.invert(mouseXY[0]);
			var item = Utils.getClosestItem(plotData, xValue, chartData.config.accessors.xAccessor);
			return item;
		},
		getInnerDimensions:function(ctx, other) {
			// console.log(other);
			if (other === undefined) other = {};
			return {
				width: other.width || ctx.width,
				height: other.height || ctx.height
			}
		},
		getDimensions:function(innerDimension, chartProps) {
	
			var availableWidth = innerDimension.width;
			var availableHeight = innerDimension.height;
	
			var width = chartProps.width || availableWidth;
			var height = chartProps.height || availableHeight
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: width,
				height: height
			}
		},
		getChartConfigFor:function(innerDimension, chartProps, partialData, fullData, passThroughProps) {
			var dimensions = this.getDimensions(innerDimension, chartProps);
			var accessors = this.getXYAccessors(chartProps, passThroughProps);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			var compareBase = this.identifyCompareBase(chartProps);
			var compareSeries = this.identifyCompareSeries(chartProps);
			// console.log(compareBase, compareSeries);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
			// this.calculateRateOfReturn(fullData, compareSeries, compareBase, accessors.yAccessor);
	
			var origin = typeof chartProps.origin === 'function'
				? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight)
				: chartProps.origin;
	
			var scales = this.defineScales(chartProps, partialData, passThroughProps);
			// ror_1, ror_2, ror_base
			var config = {
				width: dimensions.width,
				height: dimensions.height,
				mouseCoordinates: {
					at: chartProps.yMousePointerDisplayLocation,
					format: chartProps.yMousePointerDisplayFormat
				},
				origin: origin,
				accessors: accessors,
				overlays: overlaysToAdd,
				compareBase: compareBase,
				compareSeries: compareSeries,
				scaleType: scales
			};
			return config;
		},
		getChartPlotFor:function(config, partialData, domainL, domainR) {
			var overlayYAccessors = pluck(keysAsArray(config.overlays), 'yAccessor');
	
			var yaccessors;
	
			if (config.compareSeries.length > 0) {
				this.updateComparisonData(partialData, config.compareBase, config.compareSeries);
				yaccessors = [function(d)  {return d.compare;}]; //this.getCompareYAccessors(config.compareSeries);
				// yaccessors = [config.accessors.yAccessor].concat(overlayYAccessors)
			} else {
				yaccessors = [config.accessors.yAccessor].concat(overlayYAccessors)
			}
			var xyValues = ScaleUtils.flattenData(partialData
					, [config.accessors.xAccessor]
					, yaccessors);
	
			var overlayValues = this.updateOverlayFirstLast(partialData, config.overlays)
	
			var scales = this.updateScales(
				xyValues
				, config.scaleType
				, partialData
				, config.width
				, config.height);
	
			if (domainL && domainR) scales.xScale.domain([domainL, domainR])
	
			//var last = Utils.cloneMe(partialData[partialData.length - 1]);
			var last = partialData[partialData.length - 1];
			//var first = Utils.cloneMe(partialData[0]);
			var first = partialData[0];
	
			var drawableWidth = scales.xScale(config.accessors.xAccessor(partialData[partialData.length - 1]))
				- scales.xScale(config.accessors.xAccessor(partialData[0]));
	
			var plot = {
				drawableWidth: drawableWidth,
				overlayValues: overlayValues,
				scales: scales,
				lastItem: last,
				firstItem: first
			}
			return plot;
		},
		getCompareYAccessors:function(compareWith) {
			var yAccessors = compareWith.map(function(eachCompare)  {return function(d)  {return d['compare_' + eachCompare.id + '_percent'];};});
			yAccessors.push(function(d)  {return d.compare_base_percent;});
			return yAccessors;
		},
		updateComparisonData:function(partialData, compareBase, compareSeries) {
	
			var first = partialData[0];
			var base = compareBase(first);
	
			partialData.forEach(function(d, i)  {
				d.compare = {};
	
				d.compare.open = (d.open - base) / base;
				d.compare.high = (d.high - base) / base;
				d.compare.low = (d.low - base) / base;
				d.compare.close = (d.close - base) / base;
	
				compareSeries.forEach(function(eachSeries)  {
					var key = 'compare_' + eachSeries.id;
					d.compare[key] = (eachSeries.yAccessor(d) - eachSeries.yAccessor(first)) / eachSeries.yAccessor(first);
				});
	
			});
	
			// console.table(partialData);
			// console.log(partialData[7].temp, partialData[7].compare);
		},
	
		defineScales:function(props, data, passThroughProps) {
			var xScale = props.xScale,
				yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps.xScale;
	
			if (xScale === undefined) {
				var each = data[0];
				if (typeof each === 'object') {
					Object.keys(each).forEach(function(key)  {
						if (Object.prototype.toString.call(each[key]) === '[object Date]') {
							xScale = d3.time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = d3.scale.linear();
				//xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = d3.scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getXYAccessors:function(props, passThroughProps) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			React.Children.forEach(props.children, function(child)  {
				if (['ReStock.DataSeries']
						.indexOf(child.props.namespace) > -1) {
					if (child.props) {
	
						var xAccessor = passThroughProps !== undefined && passThroughProps.stockScale
							? passThroughProps.xAccessor
							: child.props.xAccessor
						accessor.xAccessor = xAccessor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			// yAccessors.push(overlayY);
	
			return accessor;
		},
		identifyOverlaysToAdd:function(props) {
			var overlaysToAdd = [];
			React.Children.forEach(props.children, function(child)  {
				if (/DataSeries$/.test(child.props.namespace)) {
					React.Children.forEach(child.props.children, function(grandChild)  {
						if (/OverlaySeries$/.test(grandChild.props.namespace)) {
							var key = OverlayUtils.getYAccessorKey(props.id, grandChild.props);
							var overlay = {
								id: grandChild.props.id,
								chartId: props.id,
								key: key,
								yAccessor: function(d)  {return d[key];},
								options: grandChild.props.options,
								type: grandChild.props.type,
								tooltipLabel: OverlayUtils.getToolTipLabel(grandChild.props),
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id)
							};
							overlaysToAdd.push(overlay);
						}
					});
				}
			})
			return overlaysToAdd;
		},
		identifyCompareBase:function(props) {
			var compareBase;
			React.Children.forEach(props.children, function(child)  {
				if (/DataSeries$/.test(child.props.namespace)) {
					compareBase = child.props.compareBase;
				}
			})
			return compareBase;
		},
		identifyCompareSeries:function(props) {
			var overlaysToAdd = [];
			React.Children.forEach(props.children, function(child)  {
				if (/DataSeries$/.test(child.props.namespace)) {
					React.Children.forEach(child.props.children, function(grandChild)  {
						if (/CompareSeries$/.test(grandChild.props.namespace)) {
							overlaysToAdd.push({
								yAccessor: grandChild.props.yAccessor,
								id: grandChild.props.id,
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id),
								displayLabel: grandChild.props.displayLabel,
								percentYAccessor: function(d)  {return d.compare['compare_' + grandChild.props.id];},
							});
						}
					});
				}
			})
			return overlaysToAdd;
		},
		calculateOverlays:function(fullData, overlays) {
			if (Array.isArray(fullData)) {
				overlays
					.filter(function(eachOverlay)  {return eachOverlay.id !== undefined;})
					.forEach(function(overlay)  {
						OverlayUtils.calculateOverlay(fullData, overlay);
					});
			} else {
				Object.keys(fullData)
					.filter(function(key)  {return ['D', 'W', 'M'].indexOf(key) > -1;})
					.forEach(function(key)  {
						overlays
							.filter(function(eachOverlay)  {return eachOverlay.id !== undefined;})
							.forEach(function(overlay)  {
								OverlayUtils.calculateOverlay(fullData[key], overlay);
							});
					})
			}
			// console.table(fullData.M);
			// console.log(overlays);
		},/*
		calculateRateOfReturn(fullData, compareSeries, compareBase) {
			if (compareSeries.length === 0) return;
			Object.keys(fullData)
				.filter((key) => ['D', 'W', 'M'].indexOf(key) > -1)
				.forEach((key) => {
					var data = fullData[key];
					data.forEach((each, i) => {
						var index = Math.max(i - 1, 0);
						var y = compareBase(each);
						var yPrev = compareBase(data[index]);
	
						each.ror = {};
						each.ror.compare_base = Math.log(y / yPrev);
						compareSeries.forEach((eachCompare) => {
							each.ror['compare_' + eachCompare.id] = Math.log(eachCompare.yAccessor(each) / eachCompare.yAccessor(data[index]));
						});
					});
				});
			//console.table(fullData.M);
			console.log(fullData.M[5].ror);
			// console.log('asfjdashfadsjkflsfhdjslfhldj')
		},*/
		updateOverlayFirstLast:function(data,
			overlays) {
	
			// console.log('updateOverlayFirstLast');
	
			var overlayValues = [];
	
			overlays
				.forEach(function(eachOverlay, idx)  {
					// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
					overlayValues.push({
						id: eachOverlay.id,
						first: OverlayUtils.firstDefined(data, eachOverlay.yAccessor),
						last: OverlayUtils.lastDefined(data, eachOverlay.yAccessor)
					})/**/
				})
			return overlayValues;
		},
		updateScales:function(xyValues, scales, data, width, height) {
			// console.log('updateScales');
			scales.xScale.range([0, width]);
			// if polylinear scale then set data
			if (scales.xScale.isPolyLinear && scales.xScale.isPolyLinear()) {
				scales.xScale.data(data);
			} else {
				// else set the domain
				scales.xScale.domain(d3.extent(xyValues.xValues));
			}
	
			scales.yScale.range([height, 0]);
	
			var domain = d3.extent(xyValues.yValues);
			//var extraPadding = Math.abs(domain[0] - domain[1]) * 0.05;
			//yScale.domain([domain[0] - extraPadding, domain[1] + extraPadding]);
			scales.yScale.domain(domain);
	
			return {
				xScale: scales.xScale.copy(),
				yScale: scales.yScale.copy()
			};
		},
		getCurrentItems:function(chartData, mouseXY, plotData) {
			return chartData
				.map(function(eachChartData)  {
					var xValue = eachChartData.plot.scales.xScale.invert(mouseXY[0]);
					var item = Utils.getClosestItem(plotData, xValue, eachChartData.config.accessors.xAccessor);
					return { id: eachChartData.id, data: item };
				});
		},
		getDataToPlotForDomain:function(domainL, domainR, data, width, xAccessor) {
			var threshold = 0.5 // number of datapoints per 1 px
			var allowedIntervals = ['D', 'W', 'M'];
			// console.log(domainL, domainR, data, width);
	
			var dataForInterval, filteredData, interval, leftX, rightX;
			for (var i=0; i<allowedIntervals.length; i++) {
				interval = allowedIntervals[i]; 
				dataForInterval = data[interval];
	
				leftX = Utils.getClosestItemIndexes(dataForInterval, domainL, xAccessor);
				rightX = Utils.getClosestItemIndexes(dataForInterval, domainR, xAccessor);
	
				filteredData = dataForInterval.slice(leftX.right, rightX.right);
	
				// console.log(filteredData.length, width * threshold);
				if (filteredData.length < width * threshold) break;
			}
	
			// console.log(leftX, rightX,  (dd[leftX.left]), xAccessor(dd[rightX.right])); 
	
			return {
				interval: interval,
				data: filteredData
			}
		}
	};
	
	module.exports = ChartContainerMixin;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var ____Class1h=React.Component;for(var ____Class1h____Key in ____Class1h){if(____Class1h.hasOwnProperty(____Class1h____Key)){Canvas[____Class1h____Key]=____Class1h[____Class1h____Key];}}var ____SuperProtoOf____Class1h=____Class1h===null?null:____Class1h.prototype;Canvas.prototype=Object.create(____SuperProtoOf____Class1h);Canvas.prototype.constructor=Canvas;Canvas.__superConstructor__=____Class1h;
		function Canvas(props) {
			____Class1h.call(this,props);
		}/*,
		componentDidMount() {
			console.log(this.getCanvas());
		},
		getCanvas() {
			return React.findDOMNode(this.refs.canvas);
		},*/
		Object.defineProperty(Canvas.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("canvas", {ref: "canvas", 
					width: this.props.width, 
					height: this.props.height, 
					style: { position: 'absolute', left: this.props.left, top: this.props.top}})
			);
		}});
	;
	
	Canvas.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		left: React.PropTypes.number.isRequired,
		top: React.PropTypes.number.isRequired
	}
	
	module.exports = Canvas;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(3);
	var React = __webpack_require__(2);
	
	var overlayColors = d3.scale.category10();
	
	function Utils() {
	}
	
	Utils.overlayColors = overlayColors;
	
	Utils.isReactVersion13 = function() {
		var version = React.version.split('.')[1];
		return version === '13';
	}
	Utils.isReactVersion14 = function() {
		return React.version.split('.')[1] === '14';
	}
	Utils.cloneMe = function(obj) {
		if(obj == null || typeof(obj) !== 'object')
			return obj;
		if (obj instanceof Date) {
			return new Date(obj.getTime());
		}
		var temp = {};//obj.constructor(); // changed
	
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				temp[key] = Utils.cloneMe(obj[key]);
			}
		}
		return temp;
	}
	
	Utils.displayDateFormat = d3.time.format("%Y-%m-%d");
	Utils.displayNumberFormat = function(x) {
		return Utils.numberWithCommas(x.toFixed(2));
	};
	Utils.numberWithCommas = function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	Utils.isNumeric = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	Utils.mergeObject = function(a, b) {
		var newObject = {};
		Object.keys(a).forEach(function(key)  {
			if (a[key] != null)
				newObject[key] = a[key];
		});
		Object.keys(b).forEach(function(key)  {
			if (b[key] != null)
				newObject[key] = b[key];
		});
		return newObject;
	}
	Utils.mousePosition = function(e) {
		var container = e.currentTarget,
			rect = container.getBoundingClientRect(),
			x = e.clientX - rect.left - container.clientLeft,
			y = e.clientY - rect.top - container.clientTop,
			xy = [ Math.round(x), Math.round(y) ];
		return xy;
	}
	Utils.getValue = function(d) {
		if (d instanceof Date) {
			return d.getTime();
		}
		return d;
	}
	Utils.getClosestItem = function(array, value, accessor) {
		var lo = 0, hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi)/2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		if (accessor(array[lo]) === value) hi = lo;
		var closest = (Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value))
							? array[lo]
							: array[hi]
		//console.log(array[lo], array[hi], closest, lo, hi);
		return Utils.cloneMe(closest);
	}
	Utils.getClosestItemIndex = function(array, value, accessor) {
		var lo = 0, hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi)/2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		if (accessor(array[lo]) === value) hi = lo;
		var closestIndex = (Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value))
							? lo
							: hi
		//console.log(array[lo], array[hi], closestIndex, lo, hi);
		return closestIndex;
	}
	Utils.getClosestItemIndexes = function(array, value, accessor) {
		var lo = 0, hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi)/2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		if (accessor(array[lo]) === value) hi = lo;
		//console.log(array[lo], array[hi], closestIndex, lo, hi);
		return { left: lo, right: hi };
	}
	Utils.pluck = function(array, key) {
		return array.map(function(each)  {return each[key];})
	}
	Utils.keysAsArray = function(obj) {
		return Object.keys(obj)
			.filter(function(key)  {return obj[key] !== null;})
			.map(function(key)  {return obj[key];});
	}
	Utils.sum = function(array) {
		return array.reduce(function(d1, d2)  {return d1 + d2;});
	}
	
	module.exports = Utils;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var StockScaleTransformer = __webpack_require__(110);
	var HeikinAshiTransformer = __webpack_require__(111);
	var KagiTransformer = __webpack_require__(112);
	var PointAndFigureTransformer = __webpack_require__(113);
	var RenkoTransformer = __webpack_require__(114);
	
	var ChartTransformer = {
		getTransformerFor:function(type) {
			if (type === "none")
				return function(d)  {return d;};
			if (type === "stockscale")
				return StockScaleTransformer;
			if (type === "heikinashi")
				return HeikinAshiTransformer;
			if (type === "kagi")
				return KagiTransformer;
			if (type === "pointandfigure")
				return PointAndFigureTransformer;
			if (type === "renko")
				return RenkoTransformer;
			return false;
		},
		filter:function(data, dateAccesor, fromDate, toDate) {
			var filteredData = data.filter(function(each)  {
				var filtered = dateAccesor(each).getTime() > fromDate.getTime() && dateAccesor(each).getTime() < toDate.getTime()
				return filtered;
			});
			return filteredData;
		}
	}
	
	module.exports = ChartTransformer;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(2);
	var Utils = __webpack_require__(103);
	var ChartDataUtil = __webpack_require__(101);
	
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	
	var ____Class1i=React.Component;for(var ____Class1i____Key in ____Class1i){if(____Class1i.hasOwnProperty(____Class1i____Key)){EventHandler[____Class1i____Key]=____Class1i[____Class1i____Key];}}var ____SuperProtoOf____Class1i=____Class1i===null?null:____Class1i.prototype;EventHandler.prototype=Object.create(____SuperProtoOf____Class1i);EventHandler.prototype.constructor=EventHandler;EventHandler.__superConstructor__=____Class1i;
		function EventHandler(props, context) {
			____Class1i.call(this,props, context);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseEnter = this.handleMouseEnter.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
			this.handleZoom = this.handleZoom.bind(this);
			this.handlePanStart = this.handlePanStart.bind(this);
			this.handlePan = this.handlePan.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handleFocus = this.handleFocus.bind(this);
	
			this.state = {
				focus: false,
				currentItems: [],
				show: false,
				mouseXY: [0, 0],
				panInProgress: false,
			};
		}
		Object.defineProperty(EventHandler.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
			var $__0=     this,props=$__0.props,context=$__0.context;
			var $__1=       context,data=$__1.data,initialDisplay=$__1.initialDisplay,dataTransformProps=$__1.dataTransformProps,interval=$__1.interval;
	
			var dataForInterval = data[interval];
			var mainChart = ChartDataUtil.getMainChart(props.children);
			var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
			var plotData = dataForInterval.slice(beginIndex);
			var chartData = ChartDataUtil.getChartData(props, context, plotData, data, dataTransformProps);
	
			this.setState({
				plotData: plotData,
				chartData: chartData,
				interval: this.context.interval,
				mainChart: mainChart,
				currentCharts: [mainChart]
			});
		}});
		Object.defineProperty(EventHandler.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(props, context) {
			var $__0=      this.state,interval=$__0.interval,chartData=$__0.chartData,plotData=$__0.plotData;
			var $__1=     context,data=$__1.data,dataTransformProps=$__1.dataTransformProps;
	
			var dataForInterval = data[interval];
			var mainChart = ChartDataUtil.getMainChart(props.children);
			var mainChartData = chartData.filter(function(each)  {return each.id === mainChart;})[0];
			var beginIndex = Utils.getClosestItemIndexes(dataForInterval, mainChartData.config.accessors.xAccessor(plotData[0]), mainChartData.config.accessors.xAccessor).left;
			var endIndex = Utils.getClosestItemIndexes(dataForInterval, mainChartData.config.accessors.xAccessor(plotData[plotData.length - 1]), mainChartData.config.accessors.xAccessor).right;
	
			var plotData = dataForInterval.slice(beginIndex, endIndex);
			var chartData = ChartDataUtil.getChartData(props, context, plotData, data, dataTransformProps);
	
			this.setState({
				chartData: chartData,
				plotData: plotData,
				currentItems: [],
				show: false,
				mouseXY: [0, 0],
				mainChart: mainChart
			});
		}});
		Object.defineProperty(EventHandler.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			return {
				plotData: this.state.plotData,
				chartData: this.state.chartData,
				currentItems: this.state.currentItems,
				mainChart: this.state.mainChart,
				show: this.state.show,
				mouseXY: this.state.mouseXY,
				interval: this.state.interval,
				currentCharts: this.state.currentCharts,
	
				onMouseMove: this.handleMouseMove,
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeave,
				onZoom: this.handleZoom,
				onPanStart: this.handlePanStart,
				onPan: this.handlePan,
				onPanEnd: this.handlePanEnd,
				onFocus: this.handleFocus,
				panInProgress: this.state.panInProgress,
				focus: this.state.focus
			}
		}});
		Object.defineProperty(EventHandler.prototype,"handleMouseMove",{writable:true,configurable:true,value:function(mouseXY) {
			// console.log('mouse move - ', mouseXY);
			var currentItems = ChartDataUtil.getCurrentItems(this.state.chartData, mouseXY, this.state.plotData)
				// .filter((eachChartData) => eachChartData.id === this.state.mainChart)
			var currentCharts = this.state.chartData.filter(function(chartData)  {
				var top = chartData.config.origin[1];
				var bottom = top + chartData.config.height;
				return (mouseXY[1] > top && mouseXY[1] < bottom)
			}).map(function(chartData)  {return chartData.id;});
	
			// console.log(currentCharts);
	
			this.setState({
				mouseXY: mouseXY,
				currentItems: currentItems,
				show: true,
				currentCharts: currentCharts
			});
		}});
		Object.defineProperty(EventHandler.prototype,"handleMouseEnter",{writable:true,configurable:true,value:function() {
			// console.log('enter');
			this.setState({
				show: true
			});
		}});
		Object.defineProperty(EventHandler.prototype,"handleMouseLeave",{writable:true,configurable:true,value:function() {
			// console.log('leave');
			this.setState({
				show: false
			});
		}});
		Object.defineProperty(EventHandler.prototype,"handleZoom",{writable:true,configurable:true,value:function(zoomDirection, mouseXY) {
			// console.log('zoomDirection ', zoomDirection, ' mouseXY ', mouseXY);
			var $__0=       this.state,mainChart=$__0.mainChart,chartData=$__0.chartData,plotData=$__0.plotData,interval=$__0.interval;
			var $__1=    this.context,data=$__1.data;
	
			var chart = chartData.filter(function(eachChart)  {return eachChart.id === mainChart;})[0],
				item = ChartDataUtil.getClosestItem(plotData, mouseXY, chart),
				xScale = chart.plot.scales.xScale,
				domain = xScale.domain(),
				centerX = chart.config.accessors.xAccessor(item),
				leftX = centerX - domain[0],
				rightX = domain[1] - centerX,
				zoom = Math.pow(1 + Math.abs(zoomDirection)/2 , zoomDirection),
				domainL = (getLongValue(centerX) - ( leftX * zoom)),
				domainR = (getLongValue(centerX) + (rightX * zoom)),
				domainRange = Math.abs(domain[1] - domain[0]),
				fullData = data[interval],
				last = fullData[fullData.length - 1],
				first = fullData[0];
	
			domainL = Math.max(getLongValue(chart.config.accessors.xAccessor(first)) - Math.floor(domainRange/3), domainL)
			domainR = Math.min(getLongValue(chart.config.accessors.xAccessor(last)) + Math.floor(domainRange/3), domainR)
			// xScale(domainR) - xScale(domainL)
			var dataToPlot = ChartDataUtil.getDataToPlotForDomain(domainL, domainR, data, chart.config.width, chart.config.accessors.xAccessor);
			if (dataToPlot.data.length < 10) return;
			var newChartData = chartData.map(function(eachChart)  {
				var plot = ChartDataUtil.getChartPlotFor(eachChart.config, dataToPlot.data, domainL, domainR);
				return {
					id: eachChart.id,
					config: eachChart.config,
					plot: plot
				}
			});
			this.setState({
				chartData: newChartData,
				plotData: dataToPlot.data,
				interval: dataToPlot.interval
			});
		}});
	
		Object.defineProperty(EventHandler.prototype,"handlePanStart",{writable:true,configurable:true,value:function(panStartDomain, panOrigin) {
			// console.log('panStartDomain - ', panStartDomain, ', panOrigin - ', panOrigin);
			this.setState({
				panInProgress: true,
				panStartDomain: panStartDomain,
				panOrigin: panOrigin,
				focus: true,
			});
		}});
		Object.defineProperty(EventHandler.prototype,"handlePan",{writable:true,configurable:true,value:function(mousePosition, startDomain) {
			// console.log('mousePosition ', mousePosition);
			var $__0=         this.state,mainChart=$__0.mainChart,chartData=$__0.chartData,plotData=$__0.plotData,interval=$__0.interval,panStartDomain=$__0.panStartDomain,panOrigin=$__0.panOrigin;
			var $__1=    this.context,data=$__1.data;
			if (panStartDomain === null) {
				this.handlePanStart(startDomain, mousePosition);
			} else {
				requestAnimationFrame(function()  {
					var chart = chartData.filter(function(eachChart)  {return eachChart.id === mainChart;})[0],
						domainRange = panStartDomain[1] - panStartDomain[0],
						fullData = data[interval],
						last = fullData[fullData.length - 1],
						first = fullData[0],
						dx = mousePosition[0] - panOrigin[0],
						xAccessor = chart.config.accessors.xAccessor;
	
					// console.log('pan -- mouse move - ', mousePosition, ' dragged by ', dx, ' pixels');
	
					var domainStart = getLongValue(panStartDomain[0]) - dx/chart.config.width * domainRange
					if (domainStart < getLongValue(xAccessor(first)) - Math.floor(domainRange/3)) {
						domainStart = getLongValue(xAccessor(first)) - Math.floor(domainRange/3)
					} else {
						domainStart = Math.min(getLongValue(xAccessor(last))
							+ Math.ceil(domainRange/3), domainStart + domainRange) - domainRange;
					}
					var domainL = domainStart, domainR = domainStart + domainRange
					if (panStartDomain[0] instanceof Date) {
						domainL = new Date(domainL);
						domainR = new Date(domainR);
					}
	
					var leftX = Utils.getClosestItemIndexes(fullData, domainL, xAccessor);
					var rightX = Utils.getClosestItemIndexes(fullData, domainR, xAccessor);
	
					var filteredData = fullData.slice(leftX.right, rightX.right);
	
					var newChartData = chartData.map(function(eachChart)  {
						var plot = ChartDataUtil.getChartPlotFor(eachChart.config, filteredData, domainL, domainR);
						return {
							id: eachChart.id,
							config: eachChart.config,
							plot: plot
						}
					});
					var currentItems = ChartDataUtil.getCurrentItems(newChartData, mousePosition, filteredData);
	
					var currentCharts = newChartData.filter(function(chartData)  {
						var top = chartData.config.origin[1];
						var bottom = top + chartData.config.height;
						return (mousePosition[1] > top && mousePosition[1] < bottom)
					}).map(function(chartData)  {return chartData.id;});
	
					this.setState({
						chartData: newChartData,
						plotData: filteredData,
						currentItems: currentItems,
						// show: true,
						mouseXY: mousePosition,
						currentCharts: currentCharts,
					});
				}.bind(this));
			}
		}});
		Object.defineProperty(EventHandler.prototype,"handlePanEnd",{writable:true,configurable:true,value:function() {
			this.setState({
				panInProgress: false,
				panStartDomain: null
			});
		}});
		Object.defineProperty(EventHandler.prototype,"handleFocus",{writable:true,configurable:true,value:function(focus) {
			// console.log(focus);
			this.setState({
				focus: focus,
			});
		}});
		Object.defineProperty(EventHandler.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {
				var newChild = Utils.isReactVersion13()
					? React.withContext(this.getChildContext(), function()  {
						return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
					})
					: React.cloneElement(child);
				return newChild;
			}.bind(this));
			return (
				React.createElement("g", null, children)
			);
		}});
	;
	
	EventHandler.contextTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		data: React.PropTypes.object,
		dataTransformOptions: React.PropTypes.object,
		dataTransformProps: React.PropTypes.object,
		plotData: React.PropTypes.array,
		chartData: React.PropTypes.array,
		initialDisplay: React.PropTypes.number.isRequired,
		interval: React.PropTypes.string,
	}
	EventHandler.childContextTypes = {
		plotData: React.PropTypes.array,
		chartData: React.PropTypes.array,
		currentItems: React.PropTypes.array,
		show: React.PropTypes.bool,
		mouseXY: React.PropTypes.array,
		interval: React.PropTypes.string,
		currentCharts: React.PropTypes.array,
		mainChart: React.PropTypes.number,
	
	
		onMouseMove: React.PropTypes.func,
		onMouseEnter: React.PropTypes.func,
		onMouseLeave: React.PropTypes.func,
		onZoom: React.PropTypes.func,
		onPanStart: React.PropTypes.func,
		onPan: React.PropTypes.func,
		onPanEnd: React.PropTypes.func, 
		panInProgress: React.PropTypes.bool.isRequired,
		focus: React.PropTypes.bool.isRequired,
		onFocus: React.PropTypes.func,
	}
	
	module.exports = EventHandler;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var shallowEqual = __webpack_require__(115);
	
	var ____Class1j=React.Component;for(var ____Class1j____Key in ____Class1j){if(____Class1j.hasOwnProperty(____Class1j____Key)){PureComponent[____Class1j____Key]=____Class1j[____Class1j____Key];}}var ____SuperProtoOf____Class1j=____Class1j===null?null:____Class1j.prototype;PureComponent.prototype=Object.create(____SuperProtoOf____Class1j);PureComponent.prototype.constructor=PureComponent;PureComponent.__superConstructor__=____Class1j;function PureComponent(){if(____Class1j!==null){____Class1j.apply(this,arguments);}}
		Object.defineProperty(PureComponent.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return !shallowEqual(this.props, nextProps)
				|| !shallowEqual(this.state, nextState)
				|| !shallowEqual(this.context, nextContext);
		}});
	
	
	module.exports = PureComponent;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var ____Class1k=React.Component;for(var ____Class1k____Key in ____Class1k){if(____Class1k.hasOwnProperty(____Class1k____Key)){EdgeCoordinate[____Class1k____Key]=____Class1k[____Class1k____Key];}}var ____SuperProtoOf____Class1k=____Class1k===null?null:____Class1k.prototype;EdgeCoordinate.prototype=Object.create(____SuperProtoOf____Class1k);EdgeCoordinate.prototype.constructor=EdgeCoordinate;EdgeCoordinate.__superConstructor__=____Class1k;function EdgeCoordinate(){if(____Class1k!==null){____Class1k.apply(this,arguments);}}
		Object.defineProperty(EdgeCoordinate.prototype,"render",{writable:true,configurable:true,value:function() {
			if (!this.props.show) return null;
	
			var displayCoordinate = this.props.coordinate;
			var rectWidth = this.props.rectWidth
				? this.props.rectWidth
				: (this.props.type === 'horizontal')
					? 60
					: 100,
				rectHeight = 20;
	
			var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
			if (this.props.type === 'horizontal') {
	
				edgeXRect = (this.props.orient === 'right') ? this.props.edgeAt + 1 : this.props.edgeAt - rectWidth - 1;
				edgeYRect = this.props.y1 - (rectHeight / 2);
				edgeXText = (this.props.orient === 'right') ? this.props.edgeAt + (rectWidth / 2) : this.props.edgeAt - (rectWidth / 2);
				edgeYText = this.props.y1;
			} else {
				edgeXRect = this.props.x1 - (rectWidth / 2);
				edgeYRect = (this.props.orient === 'bottom') ? this.props.edgeAt : this.props.edgeAt - rectHeight;
				edgeXText = this.props.x1;
				edgeYText = (this.props.orient === 'bottom') ? this.props.edgeAt + (rectHeight / 2) : this.props.edgeAt - (rectHeight / 2);
			}
			var coordinateBase = null, coordinate = null;
			if (displayCoordinate !== undefined) {
					coordinateBase = (React.createElement("rect", {key: 1, className: "textbg", 
										x: edgeXRect, 
										y: edgeYRect, 
										height: rectHeight, width: rectWidth, fill: this.props.fill}));
					coordinate = (React.createElement("text", {key: 2, x: edgeXText, 
										y: edgeYText, 
										style: {"textAnchor": "middle"}, 
										dy: ".32em"}, displayCoordinate));
			}
			var line = this.props.hideLine ? null : React.createElement("line", {className: "cross-hair", 
						x1: this.props.x1, y1: this.props.y1, 
						x2: this.props.x2, y2: this.props.y2})
			return (
				React.createElement("g", {className: (this.props.show ? 'show ' : 'hide ') + this.props.className}, 
					line, 
					coordinateBase, 
					coordinate
				)
			);
		}});
	;
	
	EdgeCoordinate.propTypes = {
		type: React.PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
		coordinate: React.PropTypes.any.isRequired,
		x1: React.PropTypes.number.isRequired,
		y1: React.PropTypes.number.isRequired,
		x2: React.PropTypes.number.isRequired,
		y2: React.PropTypes.number.isRequired,
		orient: React.PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
		rectWidth: React.PropTypes.number,
		hideLine: React.PropTypes.bool,
	};
	EdgeCoordinate.defaultProps = {
		namespace: "ReStock.EdgeCoordinate",
		orient: 'left',
		hideLine: false,
	};
	module.exports = EdgeCoordinate;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function pushToValues(values, eachValue) {
		if (typeof eachValue === 'object' && Object.keys(eachValue).length > 0) {
			Object.keys(eachValue).forEach(function (key) {
				if (!isNaN(eachValue[key])) {
					values.push(eachValue[key]);
				}
			});
		} else {
			if (!isNaN(eachValue)) {
				values.push(eachValue);
			}
		}
	}
	
	var ScaleUtils = {
		flattenData:function(data, xAccessors, yAccessors) {
			// console.log(xAccessors, yAccessors);
			var xValues = [];
			var yValues = [];
			data.forEach( function(row)  {
				xAccessors.forEach( function(xAccessor)  {
					var x = xAccessor(row);
					if (x !== undefined) {
						pushToValues(xValues, x);
					}
				});
				yAccessors.forEach( function(yAccessor)  {
					var y = yAccessor(row);
					if (y !== undefined) {
						pushToValues(yValues, y);
					}
				});
			})
			return {
				xValues: xValues,
				yValues: yValues
			};
		}
	}
	module.exports = ScaleUtils;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(103);
	var MACalculator = __webpack_require__(116);
	
	var OverlayUtils = {
		getToolTipLabel:function(props) {
			if (props.type === "sma" || props.type === "ema") {
				var tooltip = props.type.toUpperCase() + '(' + props.options.period + ')';
				return tooltip;
			}
			return 'N/A';
		},/*
		getYAccessor(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + '_chart_' + chartId;
				return (d) => d[key];
			}
			return false;
		},*/
		getYAccessorKey:function(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + '_chart_' + chartId;
				return key;
			}
			return false;
		},
		calculateOverlay:function(data, overlay) {
			// console.log(overlay);
			if (overlay.type === 'sma') {
				data = MACalculator.calculateSMA(data, overlay.options.period, overlay.key, overlay.options.pluck || 'close');
			} else if (overlay.type === 'ema') {
				data = MACalculator.calculateEMA(data, overlay.options.period, overlay.key, overlay.options.pluck || 'close');
			}
			return data;
		},
		firstDefined:function(data, accessor) {
			var each;
			for (var i = 0; i < data.length; i++) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			};
			return Utils.cloneMe(each);
		},
		lastDefined:function(data, accessor) {
			var each;
			for (var i = data.length - 1; i >= 0; i--) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			};
			return Utils.cloneMe(each);
		}
	}
	
	module.exports = OverlayUtils;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stockScale = __webpack_require__(117);
	
	var defaultOptions = {
		dateAccessor: function(d)  {return d.date;},
		indexAccessor: function(d)  {return d._idx;},
		dateMutator: function(d, date)  {d.date = date},
		indexMutator: function(d, i)  {d._idx = i;}
	}
	
	function StockScaleTransformer(data, interval, options) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function(key)  {return newOptions[key] = defaultOptions[key];});
	
		if (options) Object.keys(options).forEach(function(key)  {return newOptions[key] = options[key];});
	
		var $__0=       newOptions,dateAccessor=$__0.dateAccessor,dateMutator=$__0.dateMutator,indexAccessor=$__0.indexAccessor,indexMutator=$__0.indexMutator;
	
		var prevDate;
		var responseData = {}
		var dd = data[interval];
		responseData.D = dd
			//.filter((each) => Math.random() > 0.9)
			.map(function(each, i)  {
				var row = {};
				Object.keys(each)
					.forEach(function(key)  {
						row[key] = each[key];
					});
				indexMutator(row,  i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = dateAccessor(row);
				//row.displayDate = dateFormat(date);
				if (prevDate !== undefined) {
					// According to ISO calendar
					// Sunday = 0, Monday = 1, ... Saturday = 6
					// day of week of today < day of week of yesterday then today is start of week
					row.startOfWeek = date.getDay() < prevDate.getDay();
					// month of today != month of yesterday then today is start of month
					row.startOfMonth = date.getMonth() != prevDate.getMonth();
					//if start of month and month % 3 === 0 then it is start of quarter
					row.startOfQuarter = row.startOfMonth && date.getMonth() % 3 === 0;
					// year of today != year of yesterday then today is start of year
					row.startOfYear = date.getYear() != prevDate.getYear();
				}
				prevDate = date;
				return row;
			});
		// console.table(responseData);
		responseData.W = buildWeeklyData(responseData.D, indexMutator, dateAccessor, dateMutator);
		responseData.M = buildMonthlyData(responseData.D, indexMutator, dateAccessor, dateMutator);
	
		// console.table(responseData.W);
	
		return {
				data: responseData,
				other: {
					xScale: stockScale(newOptions.indexAccessor),
					xAccessor: newOptions.indexAccessor,
					stockScale: true,
				},
				options: newOptions
			};
	}
	
	function buildWeeklyData(daily, indexMutator, dateAccesor, dateMutator) {
		var weekly = [], prevWeek, eachWeek = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (dateAccesor(eachWeek)) indexMutator(eachWeek,  i);
	
			dateMutator(eachWeek, dateAccesor(d));
	
			eachWeek.startOfWeek = eachWeek.startOfWeek || d.startOfWeek;
			eachWeek.startOfMonth = eachWeek.startOfMonth || d.startOfMonth;
			eachWeek.startOfQuarter = eachWeek.startOfQuarter || d.startOfQuarter;
			eachWeek.startOfYear = eachWeek.startOfYear || d.startOfYear;
	
			if (!eachWeek.open) eachWeek.open = d.open;
			if (!eachWeek.high) eachWeek.high = d.high;
			if (!eachWeek.low) eachWeek.low = d.low;
	
			eachWeek.close = d.close;
	
			eachWeek.high = Math.max(eachWeek.high, d.high);
			eachWeek.low = Math.min(eachWeek.low, d.low);
	
			if (!eachWeek.volume) eachWeek.volume = 0;
			eachWeek.volume += d.volume;
	
			if (d.startOfWeek) {
				if (prevWeek) {
					eachWeek.trueRange = Math.max(
						eachWeek.high - eachWeek.low
						, eachWeek.high - prevWeek.close
						, eachWeek.low - prevWeek.close
					);
				}
				prevWeek = eachWeek
				weekly.push(eachWeek);
				eachWeek = {};
			}
			Object.keys(d)
				//.filter((key) => ['open', 'high', 'low', 'close', 'volume', date])
				.filter(function(key)  {return !eachWeek.hasOwnProperty(key);})
				.forEach(function(key)  {
					eachWeek[key] = d[key];
				});
	
		}
		return weekly;
	}
	
	function buildMonthlyData(daily, indexMutator, dateAccesor) {
		var monthly = [], prevMonth, eachMonth = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (!eachMonth.date) indexMutator(eachMonth,  i);
	
			eachMonth.date = dateAccesor(d);
	
			eachMonth.startOfMonth = eachMonth.startOfMonth || d.startOfMonth;
			eachMonth.startOfQuarter = eachMonth.startOfQuarter || d.startOfQuarter;
			eachMonth.startOfYear = eachMonth.startOfYear || d.startOfYear;
	
			if (!eachMonth.open) eachMonth.open = d.open;
			if (!eachMonth.high) eachMonth.high = d.high;
			if (!eachMonth.low) eachMonth.low = d.low;
	
			eachMonth.close = d.close;
	
			eachMonth.high = Math.max(eachMonth.high, d.high);
			eachMonth.low = Math.min(eachMonth.low, d.low);
	
			if (!eachMonth.volume) eachMonth.volume = 0;
			eachMonth.volume += d.volume;
	
			if (d.startOfMonth) {
				eachMonth.startOfWeek = d.startOfWeek;
				if (prevMonth) {
					eachMonth.trueRange = Math.max(
						eachMonth.high - eachMonth.low
						, eachMonth.high - prevMonth.close
						, eachMonth.low - prevMonth.close
					);
				}
				prevMonth = eachMonth
				monthly.push(eachMonth);
				eachMonth = {};
			}
			Object.keys(d)
				//.filter((key) => ['open', 'high', 'low', 'close', 'volume', date])
				.filter(function(key)  {return !eachMonth.hasOwnProperty(key);})
				.forEach(function(key)  {
					eachMonth[key] = d[key];
				});
		}
		return monthly;
	}
	
	module.exports = StockScaleTransformer;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function HeikinAshiTransformer(data, interval, options, other) {
	
		var $__0=       options,dateAccessor=$__0.dateAccessor,dateMutator=$__0.dateMutator,indexAccessor=$__0.indexAccessor,indexMutator=$__0.indexMutator;
		// console.log(data, options);
	
		var haData = {};
		Object.keys(data)
			.forEach(function(key)  {return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccessor, dateMutator);});
	
		return {
			data: haData,
			other: other,
			options: options
		};
	}
	
	function buildHA(data, indexAccessor, indexMutator, dateAccessor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d, i) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccessor(d));
			//each.displayDate = d.displayDate;
	
			if (!prevEach) {
				each.open = d.open;
				each.high = d.high;
				each.low = d.low;
			} else {
				each.open = (prevEach.open + prevEach.close) / 2;
				each.high = Math.max(each.open, d.high, each.close);
				each.low = Math.min(each.open, d.low, each.close);
				each.trueRange = Math.max(
						d.high - d.low
						, d.high - prevEach.close
						, d.low - prevEach.close
					);
			}
			each.volume = d.volume;
	
			each.startOfWeek = d.startOfWeek;
			each.startOfMonth = d.startOfMonth;
			each.startOfQuarter = d.startOfQuarter;
			each.startOfYear = d.startOfYear;
	
			prevEach = each;
			return each;
		});
		// console.table(haData);
		return haData;
	};
	
	module.exports = HeikinAshiTransformer;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return d.close; };
	
	var calculateATR = __webpack_require__(118);
	
	function KagiTransformer(data, interval, options, other) {
		if (options === undefined) options = {};
	
		var period = options.period || 14;
	
		calculateATR(data.D, period);
		var reversalThreshold = function (d) { return d["atr" + period] }
	
		var $__0=       options,dateAccessor=$__0.dateAccessor,dateMutator=$__0.dateMutator,indexAccessor=$__0.indexAccessor,indexMutator=$__0.indexMutator;
	
		var kagiData = new Array();
	
		var index = 0, prevPeak, prevTrough, direction;
		var line = {};
	
		data.D.forEach( function (d) {
			if (line.from === undefined) {
				indexMutator(line, index++);
				dateMutator(line, dateAccessor(d));
				/*line.displayDate = d.displayDate;
				line.fromDate = d.displayDate;
				line.toDate = d.displayDate;*/
				line.from = dateAccessor(d);
	
				if (!line.open) line.open = d.open;
				line.high = d.high;
				line.low = d.low;
				if (!line.close) line.close = usePrice(d);
				line.startOfYear = d.startOfYear;
				line.startOfQuarter = d.startOfQuarter;
				line.startOfMonth = d.startOfMonth;
				line.startOfWeek = d.startOfWeek;
				//line.tempClose = d.close;
			}
	
			if (!line.startOfYear) {
				line.startOfYear = d.startOfYear;
				if (line.startOfYear) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
	
			if (!line.startOfQuarter) {
				line.startOfQuarter = d.startOfQuarter;
				if (line.startOfQuarter && !line.startOfYear) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
	
			if (!line.startOfMonth) {
				line.startOfMonth = d.startOfMonth;
				if (line.startOfMonth && !line.startOfQuarter) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
			if (!line.startOfWeek) {
				line.startOfWeek = d.startOfWeek;
				if (line.startOfWeek && !line.startOfMonth) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
			line.volume = (line.volume || 0) + d.volume;
			line.high = Math.max(line.high, d.high);
			line.low = Math.min(line.low, d.low);
			line.to = dateAccessor(d);
			//line.toDate = d.displayDate;
			var priceMovement = (usePrice(d) - line.close);
	
			if ((line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */)
					|| (line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */)) {
				line.close = usePrice(d);
				if (prevTrough && line.close < prevTrough) {
					// going below the prevTrough, so change from yang to yin
					// A yin line forms when a Kagi line breaks below the prior trough.
					line.changePoint = prevTrough;
					if (line.startAs != 'yin') {
						line.changeTo = 'yin';
						// line.startAs = 'yang';
					}
				}
				if (prevPeak && line.close > prevPeak) {
					// going above the prevPeak, so change from yin to yang
					// A yang line forms when a Kagi line breaks above the prior peak
					line.changePoint = prevPeak;
					if (line.startAs != 'yang') {
						line.changeTo = 'yang';
						// line.startAs = 'yin';
					}
				}
			} else if ((line.close > line.open /* going up */
							&& priceMovement < 0 /* and moving in other direction */
							&& Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */) //d.atr
					|| (line.close < line.open /* going down */
							&& priceMovement > 0 /* and moving in other direction */
							&& Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */)) {
				// reverse direction
				var nextLineOpen = line.close;
	
				direction = (line.close - line.open) / Math.abs(line.close - line.open);
				/*line.prevPeak = prevPeak;
				line.prevTrough = prevTrough;*/
				var nextChangePoint, nextChangeTo;
				if (direction < 0 /* if direction so far has been -ve*/) {
					// compare with line.close becomes prevTrough
					if (prevPeak === undefined) prevPeak = line.open;
					prevTrough = line.close;
					if (usePrice(d) > prevPeak) {
						nextChangePoint = prevPeak;
						nextChangeTo = 'yang';
					}
				} else {
					if (prevTrough === undefined) prevTrough = line.open;
					prevPeak = line.close;
					if (usePrice(d) < prevTrough) {
						nextChangePoint = prevTrough;
						nextChangeTo = 'yin';
					}
				}
				if (line.startAs === undefined) {
					line.startAs = direction > 0 ? 'yang' : 'yin';
				}
	
				var startAs = line.changeTo || line.startAs;
				kagiData.push(line);
				direction = -1 * direction; //direction is reversed
	
				line = {
					open: nextLineOpen
					, close: usePrice(d)
					, startAs: startAs
					, changePoint: nextChangePoint
					, changeTo: nextChangeTo
				};
			} else {
	
			}
		});
	
		return {
			data: {'D': kagiData},
			other: other,
			options: options
		};
	}
	
	
	module.exports = KagiTransformer;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return { high: d.high, low: d.low }; };
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
	}
	
	function createBox(d, dateAccessor, dateMutator) {
		var box = {
			open: d.open
			, fromDate: dateAccessor(d)
			, toDate: dateAccessor(d)
			//, displayDate: d.displayDate
			, startOfYear: d.startOfYear
			, startOfQuarter: d.startOfQuarter
			, startOfMonth: d.startOfMonth
			, startOfWeek: d.startOfWeek
		};
		dateMutator(box, dateAccessor(d));
		return box;
	}
	
	function updateColumns(columnData, dateAccessor, dateMutator) {
	
		columnData.forEach(function (d, i) {
			var lastBox = d.boxes[d.boxes.length - 1];
	
			d.startOfYear = false;
			d.startOfQuarter = false;
			d.startOfMonth = false;
			d.startOfWeek = false;
	
			d.boxes.forEach(function(eachBox) {
				if (d.open === undefined) d.open = eachBox.open;
				d.close = eachBox.close;
				d.high = Math.max(d.open, d.close);
				d.low = Math.min(d.open, d.close);
	
				if (d.fromDate === undefined) d.fromDate = eachBox.fromDate;
				if (d.date === undefined) d.date = eachBox.date;
				// if (d.displayDate === undefined) d.displayDate = eachBox.displayDate;
				d.toDate = eachBox.toDate;
	
				if (eachBox.startOfYear) {
					d.startOfYear = d.startOfYear || eachBox.startOfYear;
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					//d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfMonth !== true && eachBox.startOfMonth) {
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfWeek !== true && eachBox.startOfWeek) {
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
			});
	
		});
	
		// console.table(columnData);
		// console.table(rawData);
		return columnData;
	};
	
	function PointAndFigureTransformer(rawData, interval, options, other) {
	
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function(key)  {return newOptions[key] = defaultOptions[key];});
	
		if (options) Object.keys(options).forEach(function(key)  {return newOptions[key] = options[key];});
	
		var $__0=         newOptions,dateAccessor=$__0.dateAccessor,dateMutator=$__0.dateMutator,indexAccessor=$__0.indexAccessor,indexMutator=$__0.indexMutator,reversal=$__0.reversal,boxSize=$__0.boxSize;
	
		var columnData = new Array();
	
		var index = 0, direction;
		var column = {
			boxes: [],
			open: rawData.D[0].open
		}, box = createBox(rawData.D[0], dateAccessor, dateMutator);
	
		indexMutator(column, 0);
		columnData.push(column);
	
		rawData.D.forEach( function (d) {
			column.volume = column.volume || 0;
			column.volume += d.volume;
	
			if (!box.startOfYear) {
				box.startOfYear = d.startOfYear;
				if (box.startOfYear) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfYear && !box.startOfQuarter) {
				box.startOfQuarter = d.startOfQuarter;
				if (box.startOfQuarter && !box.startOfYear) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfQuarter && !box.startOfMonth) {
				box.startOfMonth = d.startOfMonth;
				if (box.startOfMonth && !box.startOfQuarter) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
			if (!box.startOfMonth && !box.startOfWeek) {
				box.startOfWeek = d.startOfWeek;
				if (box.startOfWeek && !box.startOfMonth) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (columnData.length === 1 && column.boxes.length === 0) {
				var upwardMovement = (Math.max((usePrice(d).high - column.open), 0)) //upward movement
				var downwardMovement = Math.abs(Math.min((column.open - usePrice(d).low), 0)) // downward movement
				column.direction = upwardMovement > downwardMovement ? 1 : -1;
				if (boxSize * reversal < upwardMovement
					|| boxSize * reversal < downwardMovement) {
					// enough movement to trigger a reversal
					box.toDate = dateAccessor(d);
					box.open = column.open;
					var noOfBoxes = column.direction > 0
										? Math.floor(upwardMovement / boxSize)
										: Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, dateAccessor, dateMutator);
						// box = cloneMe(box);
						box.open = prevBoxClose;
					}
					box.fromDate = dateAccessor(d);
					box.date = dateAccessor(d);
				}
			} else {
				// one or more boxes already formed in the current column
				var upwardMovement = (Math.max((usePrice(d).high - box.open), 0)) //upward movement
				var downwardMovement = Math.abs(Math.min((usePrice(d).low - box.open), 0)) // downward movement
	
				if ((column.direction > 0 && upwardMovement > boxSize) /* rising column AND box can be formed */
						|| (column.direction < 0 && downwardMovement > boxSize) /* falling column AND box can be formed */ ) {
					// form another box
					box.close = box.open + column.direction * boxSize;
					box.toDate = dateAccessor(d);
					var prevBoxClose = box.close;
					column.boxes.push(box);
					box = createBox(d, dateAccessor, dateMutator);
					box.open = prevBoxClose;
					box.fromDate = dateAccessor(d);
					dateMutator(box, dateAccessor(d));
				} else if ((column.direction > 0 && downwardMovement > boxSize * reversal) /* rising column and there is downward movement to trigger a reversal */
						|| (column.direction < 0 && upwardMovement > boxSize * reversal)/* falling column and there is downward movement to trigger a reversal */) {
					// reversal
	
					box.open = box.open + -1 * column.direction * boxSize;
					box.toDate = dateAccessor(d);
					// box.displayDate = d.displayDate;
					dateMutator(box, dateAccessor(d));
					// box.startOfYear = d.startOfYear;
					// box.startOfQuarter = d.startOfQuarter;
					// box.startOfMonth = d.startOfMonth;
					// box.startOfWeek = d.startOfWeek;
					// console.table(column.boxes);
					var idx = indexAccessor(column) + 1;
					column = {
						boxes: [],
						//, index: column.index + 1
						direction: -1 * column.direction
					};
					indexMutator(column, idx);
					var noOfBoxes = column.direction > 0
										? Math.floor(upwardMovement / boxSize)
										: Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(d, dateAccessor, dateMutator);
						box.open = prevBoxClose;
					}
	
					columnData.push(column);
				}
			}
		});
		updateColumns(columnData, dateAccessor, dateMutator);
	
		return {
			data: {'D': columnData},
			other: other,
			options: newOptions
		};
	}
	
	module.exports = PointAndFigureTransformer;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	// var pricingMethod = function (d) { return { high: d.close, low: d.close }; };
	// var usePrice = function (d) { return d.close; };
	var calculateATR = __webpack_require__(118);
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
		period: 14
	}
	
	function RenkoTransformer(rawData, interval, options, other) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function(key)  {return newOptions[key] = defaultOptions[key];});
	
		if (options) Object.keys(options).forEach(function(key)  {return newOptions[key] = options[key];});
	
		var $__0=          newOptions,dateAccessor=$__0.dateAccessor,dateMutator=$__0.dateMutator,indexAccessor=$__0.indexAccessor,indexMutator=$__0.indexMutator,reversal=$__0.reversal,boxSize=$__0.boxSize,period=$__0.period;
	
		calculateATR(rawData.D, period);
		var brickSize = function (d) { return d["atr" + period]}
	
		var renkoData = new Array();
	
		var index = 0, prevBrickClose = rawData.D[index].open, prevBrickOpen = rawData.D[index].open;
		var brick = {}, direction = 0;
	
	
		rawData.D.forEach( function (d) {
			if (brick.from === undefined) {
				// brick.index = index++;
				// brick.date = d.date;
				// brick.displayDate = d.displayDate;
				// brick.fromDate = d.displayDate;
				// brick.from = d.index;
				brick.high = d.high;
				brick.low = d.low;
				brick.startOfYear = d.startOfYear;
				brick.startOfQuarter = d.startOfQuarter;
				brick.startOfMonth = d.startOfMonth;
				brick.startOfWeek = d.startOfWeek;
				//brick.tempClose = d.close;
				brick.from = indexAccessor(d);
				brick.fromDate = dateAccessor(d);
				indexMutator(brick, index++);
				dateMutator(brick, dateAccessor(d));
			}
			brick.volume = (brick.volume || 0) + d.volume;
	
			var prevCloseToHigh = (prevBrickClose - pricingMethod(d).high),
				prevCloseToLow = (prevBrickClose - pricingMethod(d).low),
				prevOpenToHigh = (prevBrickOpen - pricingMethod(d).high),
				prevOpenToLow = (prevBrickOpen - pricingMethod(d).low),
				priceMovement = Math.min(
					Math.abs(prevCloseToHigh),
					Math.abs(prevCloseToLow),
					Math.abs(prevOpenToHigh),
					Math.abs(prevOpenToLow));
	
	
			brick.high = Math.max(brick.high, d.high);
			brick.low = Math.min(brick.low, d.low);
	
			if (!brick.startOfYear) {
				brick.startOfYear = d.startOfYear;
				if (brick.startOfYear) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfQuarter) {
				brick.startOfQuarter = d.startOfQuarter;
				if (brick.startOfQuarter && !brick.startOfYear) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfMonth) {
				brick.startOfMonth = d.startOfMonth;
				if (brick.startOfMonth && !brick.startOfQuarter) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
			if (!brick.startOfWeek) {
				brick.startOfWeek = d.startOfWeek;
				if (brick.startOfWeek && !brick.startOfMonth) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			//d.brick = JSON.stringify(brick);
			if (brickSize(d)) {
				var noOfBricks = Math.floor(priceMovement / brickSize(d))
	
				brick.open = (Math.abs(prevCloseToHigh) < Math.abs(prevOpenToHigh)
				 || Math.abs(prevCloseToLow) < Math.abs(prevOpenToLow))
								? prevBrickClose
								: prevBrickOpen;
	
				if (noOfBricks >= 1) {
					for (var j = 0; j < noOfBricks; j++) {
						brick.close = (brick.open < pricingMethod(d).high)
										// if brick open is less than current price it means it is green/hollow brick
											? brick.open + brickSize(d)
											: brick.open - brickSize(d);
						direction = brick.close > brick.open ? 1 : -1;
						brick.direction = direction;
						brick.to = indexAccessor(d);
						brick.toDate = dateAccessor(d);
						// brick.diff = brick.open - brick.close;
						// brick.atr = d.atr;
						brick.fullyFormed = true;
						renkoData.push(brick);
	
						prevBrickClose = brick.close;
						prevBrickOpen = brick.open;
	
						var newBrick = {
							// index : index + j
							// , date : d.date
							// , displayDate : d.displayDate
							//, from : d.index
							high : brick.high
							, low : brick.low
							, open : brick.close
							// , fromDate : d.displayDate
							, startOfYear : false
							, startOfMonth : false
							, startOfQuarter : false
							, startOfWeek : false
						};
						brick = newBrick;
						brick.from = indexAccessor(d);
						brick.fromDate = dateAccessor(d);
						indexMutator(brick, index + j);
						dateMutator(brick, dateAccessor(d));
						brick.volume = (brick.volume || 0) + d.volume;
					}
					index = index + j - 1;
					brick = {};
				} else {
					if (indexAccessor(d) === rawData.D.length - 1) {
						brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
						brick.to = indexAccessor(d);
						brick.toDate = dateAccessor(d);
						dateMutator(brick, dateAccessor(d));
	
						brick.fullyFormed = false;
						renkoData.push(brick);
					}
				}
			}
	
		});
		return {
			data: {'D': renkoData},
			other: other,
			options: newOptions
		};
	}
	
	module.exports = RenkoTransformer;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	'use strict';
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(103);
	
	var pluck = Utils.pluck;
	var sum = Utils.sum;
	
	function MACalculator() {
	
	};
	MACalculator.calculateSMA = function(data, period, key, pluckKey) {
		// console.log('calculateSMA');
	
		var l = data.length - 1;//, key = 'sma' + period;
		var maKey = pluckKey || 'close';
	
		data.map(function(each, i)  {return data.slice(i - period, i);})
			.filter(function(array)  {return array.length === period && array.length > 0;})
			.map(function(array)  {return pluck(array, maKey);})
			.map(function(array)  {return sum(array);})
			.map(function(sum)  {return sum / period;})
			.reverse()
			.forEach(function(avg, i)  {
				// Object.defineProperty(data[l - i], key, { value: avg });
				data[l - i][key] = avg;
				// console.log(data[l - i][key]);
			})
	
		return data;
	}
	
	MACalculator.calculateEMA = function (data, period, key, pluckKey) {
		// console.log('calculating EMA', period, key, pluckKey);
		/*
		EMA = Price(t) * k + EMA(y) * (1 – k)
		t = today, y = yesterday, N = number of days in EMA (or period), k = 2/(N+1)
		*/
	
		if (data.length > period) {
			var firstSMA = data.slice(0, period)
				.map(function(each)  {return each[pluckKey];})
				.reduce(function(a, b)  {return a + b;}) / period;
	
			data[period][key] = firstSMA;
	
			var k = 2 / (period + 1), prevEMA = firstSMA;
	
			for (var i = period; i < data.length; i++) {
				data[i][key] = data[i][pluckKey] * k + prevEMA * (1 - k)
				prevEMA = data[i][key];
			}
		}
	
		return data;
	}
	
	module.exports = MACalculator;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(3);
	
	var polylineartimescale = function(indexAccessor) {
		return guided_scale([0, 1], indexAccessor, d3.scale.linear());
	};
	
	function guided_scale(drawableData, indexAccessor, backingLinearScale) {
		//var  = 'week'; //valid values 'day', 'week', 'month'
	
		var d3_time_scaleSteps = [
			{ step: 864e5, f: function (d, i) {return d.date !== undefined && true ;}},  // 1-day
			{ step: 1728e5, f: function (d, i) {return d.date !== undefined && (i % 2 == 0) ;}},  // 2-day
			{ step: 8380e5, f: function (d, i, arr) {
					if (d.startOfMonth) return true;
					var list = [];
					if ((i - 2) >= 0) list.push(arr[i - 2]);
					if ((i - 1) >= 0) list.push(arr[i - 1]);
					list.push(arr[i]);
					if ((i + 1) <= arr.length - 1) list.push(arr[i + 1]);
					if ((i + 2) <= arr.length - 1) list.push(arr[i + 2]);
					var sm = list
								.map(function (d) { return d.startOfMonth; })
								.reduce(function(prev, curr) {
										return prev || curr;
									});
					return sm ? false : d.startOfWeek;
				}},  // 1-week
			{ step: 3525e6, f: function (d) {return d.startOfMonth; }},  // 1-month
			{ step: 7776e6, f: function (d) {return d.startOfQuarter; }},  // 3-month
			{ step: 31536e6, f: function (d) {return d.startOfYear; }},  // 1-year
			{ step: 91536e15, f: function (d) {return d.date !== undefined && (d.startOfYear && d.date.getFullYear() % 2 == 0); }}  // 2-year
		];
		var timeScaleStepsBisector = d3.bisector(function(d) { return d.step; }).left;
		var __BISECT = d3.bisector(function(d) { return indexAccessor(d); }).left;
		var tickFormat = [
			[d3.time.format("%Y"), function(d) { return d.startOfYear; }],
			[d3.time.format("%b %Y"), function(d) { return d.startOfQuarter; }],
			[d3.time.format("%b"), function(d) { return d.startOfMonth; }],
			[d3.time.format("%d %b"), function(d) { return d.startOfWeek; }],
			[d3.time.format("%a %d "), function(d) { return true; }]
		];
		function formater(d) {
			var i = 0, format = tickFormat[i];
			while (!format[1](d)) format = tickFormat[++i];
			var tickDisplay = format[0](d.date);
			// console.log(tickDisplay);
			return tickDisplay;
		};
	
		var ticks;
	
		function scale(x) {
			return backingLinearScale(x);
		};
		scale.isPolyLinear = function() {
			return true;
		}
		scale.invert = function(x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function(x) {
			if (!arguments.length) {
				return drawableData;
			} else {
				drawableData = x;
				//this.domain([drawableData.first().index, drawableData.last().index]);
				this.domain([indexAccessor(drawableData[0]), indexAccessor(drawableData[drawableData.length - 1])]);
				return scale;
			}
		};
		scale.domain = function(x) {
			if (!arguments.length) return backingLinearScale.domain();
			//console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
			//var d = [Math.floor(x[0]), Math.ceil(x[1])]
			var d = [x[0], x[1]]
			//console.log(d);
			backingLinearScale.domain(d);
			return scale;
		};
		scale.range = function(x) {
			if (!arguments.length) return backingLinearScale.range();
			backingLinearScale.range(x);
			return scale;
		};
		scale.rangeRound = function(x) {
			return backingLinearScale.range(x);
		};
		scale.clamp = function(x) {
			if (!arguments.length) return backingLinearScale.clamp();
			backingLinearScale.clamp(x);
			return scale;
		};
		scale.interpolate = function(x) {
			if (!arguments.length) return backingLinearScale.interpolate();
			backingLinearScale.interpolate(x);
			return scale;
		};
	
		scale.ticks = function(m) {
	
			var start, end, count = 0;
			drawableData.forEach(function (d, i) {
				if (d.date !== undefined) {
					if (start === undefined) start = d;
					end = d;
					count++;
				}
			});
			m = (count/drawableData.length) * m;
			var span = (end.date.getTime() - start.date.getTime());
			var target = span/m;
			/*
			console.log(drawableData[drawableData.length - 1].date
				, drawableData[0].date
				, span
				, m
				, target
				, timeScaleStepsBisector(d3_time_scaleSteps, target)
				);
			*/
			var ticks = drawableData
							.filter(d3_time_scaleSteps[timeScaleStepsBisector(d3_time_scaleSteps, target)].f)
							.map(function(d, i) {return indexAccessor(d);})
							;
			// return the index of all the ticks to be displayed,
			//console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function(ticks) {
			return function(d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = __BISECT(drawableData, d);
				return formater(drawableData[tickIndex]) ;
				//return formater(d) ;
			};
		}
	
		scale.nice = function(m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function() {
			return guided_scale(drawableData, indexAccessor, backingLinearScale.copy());
		};
		return scale;
	}
	
	
	module.exports = polylineartimescale

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function sumOf(array, offset, length) {
		var sum = 0;
		for (var i = offset; i < offset + length; i++) {
			sum += array[i].trueRange;
		};
		return sum;
	}
	
	function calculateTR(rawData) {
		var prev = rawData[0];
		rawData
			.filter(function(d, idx)  {return idx > 0;})
			.forEach(function(d, idx) {
				d.trueRange = Math.max(d.high - d.low,
					d.high - prev.close,
					d.low - prev.close)
				prev = rawData[idx];
			});
	}
	
	function calculateATR(rawData, period) {
		calculateTR(rawData);
	
		rawData.forEach(function(d, index) {
			if (index > period) { // trueRange starts from index 1 so ATR starts from period (not period -1)
				var num = (sumOf(rawData, index - period, period) / period)
				d["atr" + period] = (Math.round(num * 100) / 100);
			}
		});
	}
	
	module.exports = calculateATR;


/***/ }
])
});
;
//# sourceMappingURL=react-stockcharts-home.js.map