(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return webpackJsonpReStock([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**/
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	var parseDate = d3.time.format("%Y-%m-%d").parse
	
	__webpack_require__(29);
	__webpack_require__(27);
	
	var Nav = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var MainContainer = __webpack_require__(10);
	var MenuGroup = __webpack_require__(11);
	var MenuItem = __webpack_require__(12);
	
	
	var pages = [
		__webpack_require__(13),
		__webpack_require__(14),
		__webpack_require__(15),
		__webpack_require__(16),
		__webpack_require__(17),
		__webpack_require__(18),
		__webpack_require__(19),
		__webpack_require__(20),
		__webpack_require__(21),
		__webpack_require__(22),
		__webpack_require__(23),
		__webpack_require__(24),
		__webpack_require__(25),
		__webpack_require__(26)
	];
	
	function renderPage(data, dataFull) {
		data.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		dataFull.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		var SyncMouseMove = __webpack_require__(3).init(data);
		var AreaChartWithZoom = __webpack_require__(4).init(data);
		var AreaChartWithZoomPan = __webpack_require__(5).init(data);
	
	
		var selected = location.hash.replace('#/', '');
		var selectedPage = pages.filter(function(page)  {return page.title == selected;});
	
		var firstPage = (selectedPage.length === 0) ? pages[0] : selectedPage[0];
	
		// console.log(selected, selectedPage, firstPage);
	
		var ExamplesPage = React.createClass({displayName: "ExamplesPage",
			//mixins: [ScrollMixin],
			getInitialState:function() {
				return {
					selectedPage: firstPage
				};
			},
			handleRouteChange:function(newPage) {
				this.setState({
					selectedPage: newPage
				});
			},
			render:function() {
				var Page = this.state.selectedPage;
				return (
					React.createElement("body", null, 
						React.createElement(Nav, null), 
						React.createElement(MainContainer, null, 
							React.createElement(Sidebar, null, 
								React.createElement(MenuGroup, null, 
									pages.map(function(eachPage, idx)  {return React.createElement(MenuItem, {key: idx, page: eachPage, selectedPage: this.state.selectedPage, handleRouteChange: this.handleRouteChange});}.bind(this))
								)
							), 
							React.createElement(Page, {someData: data, lotsOfData: dataFull})
						)
					)
				);
			}
		});
	
		React.render(React.createElement(ExamplesPage, null), document.body);
	}
	// React.render(<ExamplesPage />, document.getElementById("area"));
	
	//module.exports = ExamplesPage;
	
	
	d3.tsv("data/MSFT.tsv", function(err, MSFT)  {
		d3.tsv("data/MSFT_full.tsv", function(err2, MSFTFull)  {
			renderPage(MSFT, MSFTFull);
			// renderPartialPage(MSFT, MSFTFull);
		});
	})
	
	function renderPartialPage(data, dataFull) {
		data.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		dataFull.forEach(function(d, i)  {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
		var Renko = __webpack_require__(6).init(dataFull);
		var ExamplesPage = React.createClass({displayName: "ExamplesPage",
			//mixins: [ScrollMixin],
			render:function() {
				return (
					React.createElement("body", null, 
						React.createElement("div", {className: "container react-stockchart"}, 
							React.createElement(Renko, null)
						)
					)
				)
			}
		});
		React.render(React.createElement(ExamplesPage, null), document.body);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	
	module.exports = {
		init:function(data) {
			var AreaChartWithEdgeCoordinates = __webpack_require__(66).init(data);
	
			var SyncMouseMove = React.createClass({displayName: "SyncMouseMove",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				handleMATooltipClick:function(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				componentDidMount:function() {
					var eventStore = this.refs.left.getEventStore();
					this.refs.right.updateEventStore(eventStore);
					// console.log('SyncMouseMove.componentDidMount', eventStore);
				},
				componentDidUpdate:function() {
					// console.log('SyncMouseMove.componentDidUpdate');
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
					React.createElement("div", null, 
						React.createElement("div", {className: "col-md-6 react-stockchart"}, 
							React.createElement(AreaChartWithEdgeCoordinates, {ref: "left"})
						), 
						React.createElement("div", {className: "col-md-6 react-stockchart"}, 
							React.createElement(AreaChartWithEdgeCoordinates, {ref: "right"})
						)
					)
	
					);
				}
			});
	
			return SyncMouseMove;
		}
	}
	
	/*
	
								
								
	
							<EdgeContainer>
	
							</EdgeContainer>
	
	
								<EdgeIndicator
									type="horizontal"
									className="horizontal"
									itemType="last"
									orient="right"
									edgeAt="right"
									forSeries={1}
									displayFormat={(d) => (d)}
									/>
								<EdgeIndicator
									type="horizontal"
									className="horizontal"
									itemType="first"
									orient="left"
									edgeAt="left"
									forSeries={1}
									displayFormat={(d) => (d)}
									/>
	*/


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
		, OverlaySeries = ReStock.OverlaySeries
		, LineSeries = ReStock.LineSeries
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
		, EdgeContainer = ReStock.EdgeContainer
		, EdgeIndicator = ReStock.EdgeIndicator
		, CurrentCoordinate = ReStock.CurrentCoordinate
	
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithZoom = React.createClass({displayName: "AreaChartWithZoom",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				handleMATooltipClick:function(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {
							width: this.state.width, height: this.state.height, 
							margin: {left: 65, right: 90, top:30, bottom: 30}, data: data, ref: "eventStore"}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null), 
									React.createElement(OverlaySeries, {id: 0, type: "sma", options: { period: 50}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 1, type: "sma", options: { period: 150}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 2, type: "sma", options: { period: 250}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 350}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 4, type: "sma", options: { period: 450}}, 
										React.createElement(LineSeries, null)
									)
								)
							), 
							React.createElement(CurrentCoordinate, {forChart: 1}), 
							React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeContainer, null, 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 0}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1, 
									forOverlay: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 2}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 3}
									)
							), 
							React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, zoom: true, mainChart: 1}), 
							React.createElement(TooltipContainer, null, 
								React.createElement(OHLCTooltip, {forChart: 1, origin: [-60, -20]}), 
								React.createElement(MovingAverageTooltip, {forChart: 1, onClick: this.handleMATooltipClick, origin: [-60, -10]})
							)
						)
					);
				}
			});
	
			return AreaChartWithZoom;
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
		, OverlaySeries = ReStock.OverlaySeries
		, LineSeries = ReStock.LineSeries
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
		, EdgeContainer = ReStock.EdgeContainer
		, EdgeIndicator = ReStock.EdgeIndicator
		, CurrentCoordinate = ReStock.CurrentCoordinate
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithZoomPan = React.createClass({displayName: "AreaChartWithZoomPan",
				mixins: [InitialStateMixin, ChartWidthMixin],
				handleMATooltipClick:function(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {
							width: this.state.width, height: 500, 
							margin: {left: 65, right: 90, top:30, bottom: 30}, data: data, ref: "eventStore"}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null), 
									React.createElement(OverlaySeries, {id: 0, type: "sma", options: { period: 50}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 1, type: "sma", options: { period: 150}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 2, type: "sma", options: { period: 250}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 350}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 4, type: "sma", options: { period: 450}}, 
										React.createElement(LineSeries, null)
									)
								)
							), 
							React.createElement(CurrentCoordinate, {forChart: 1}), 
							React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeContainer, null, 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 0}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1, 
									forOverlay: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 2}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 3}
									)
							), 
							React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1}), 
							React.createElement(TooltipContainer, null, 
								React.createElement(OHLCTooltip, {forChart: 1, origin: [-60, -20]}), 
								React.createElement(MovingAverageTooltip, {forChart: 1, onClick: this.handleMATooltipClick, origin: [-60, -10]})
							)
						)
					);
				}
			});
	
			return AreaChartWithZoomPan;
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, RenkoSeries = ReStock.RenkoSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	
	var Renko = React.createClass({displayName: "Renko",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "1D"}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
					React.createElement(DataTransform, {transformType: "renko"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: RenkoSeries.yAccessor}, 
								React.createElement(RenkoSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}}), 
								React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 10, pluck:'volume'}}, 
									React.createElement(AreaSeries, null)
								)
							)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-50, 0]})
						)
					)
					)
				)
			);
		}
	});
	
	module.exports = Renko;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var parseDate = d3.time.format("%Y-%m-%d").parse
			var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "1D"}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
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
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
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
	
	module.exports = CandleStickChart;
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var Nav = React.createClass({displayName: "Nav",
		render:function() {
			return (
				React.createElement("nav", {className: "navbar navbar-fixed-top"}, 
					React.createElement("div", {className: "container-fluid"}, 
						React.createElement("div", {className: "navbar-header"}, 
							React.createElement("a", {className: "navbar-brand", href: "index.html"}, "React Stockcharts")
						)
					)
				)
			);
		}
	});
	
	module.exports = Nav;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var SideBar = React.createClass({displayName: "SideBar",
		render:function() {
			return (
				React.createElement("div", {className: "col-sm-3 col-md-2 sidebar"}, this.props.children)
			);
		}
	});
	
	module.exports = SideBar;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Row = __webpack_require__(32);
	
	var MainContainer = React.createClass({displayName: "MainContainer",
		render:function() {
			return (
				React.createElement("div", {className: "container-fluid", id: "MainContainer"}, 
					React.createElement(Row, null, this.props.children)
				)
			);
		}
	});
	
	module.exports = MainContainer;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var MenuGroup = React.createClass({displayName: "MenuGroup",
		render:function() {
			return (
				React.createElement("ul", {className: "nav nav-sidebar"}, this.props.children)
			);
		}
	});
	
	module.exports = MenuGroup;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var MenuItem = React.createClass({displayName: "MenuItem",
		propTypes: {
			selectedPage: React.PropTypes.any,
			handleRouteChange: React.PropTypes.func.isRequired,
			page: React.PropTypes.any.isRequired
		},
		getDefaultProps:function() {
			return {
				active: false,
			};
		},
		handleClick:function() {
			this.props.handleRouteChange(this.props.page)
		},
		render:function() {
			var className = (this.props.page === this.props.selectedPage) ? 'active' : '';
			return (
				React.createElement("li", {className: className}, 
					React.createElement("a", {href: '#/' + this.props.page.title, onClick: this.handleClick}, 
						this.props.page.title
					)
				)
			);
		}
	});
	
	module.exports = MenuItem;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var OverviewPage = React.createClass({displayName: "OverviewPage",
		statics: {
			title: 'Overview'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: OverviewPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(35)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = OverviewPage;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var AreaChart = __webpack_require__(36);
	var AreaChartWithYPercent = __webpack_require__(37);
	
	var OverviewPage = React.createClass({displayName: "OverviewPage",
		statics: {
			title: 'Area Chart'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: OverviewPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(AreaChart, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(38)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(AreaChartWithYPercent, {data: this.props.someData})
						)
					)
				)
			);
		}
	});
	
	module.exports = OverviewPage;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChart = __webpack_require__(41);
	var CandleStickStockScaleChart = __webpack_require__(51);
	
	var CandleStickChartPage = React.createClass({displayName: "CandleStickChartPage",
		statics: {
			title: 'Candlestick Chart'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: CandleStickChartPage.title}, 
					React.createElement(Row, {title: ""}, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChart, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(39)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickStockScaleChart, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(40)}})
						)
					), 
					React.createElement(Row, {title: "stocktime scale"}, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(42)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartPage;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickStockScaleChartWithVolumeHistogramV1 = __webpack_require__(43);
	var CandleStickStockScaleChartWithVolumeHistogramV2 = __webpack_require__(44);
	
	var VolumeHistogramPage = React.createClass({displayName: "VolumeHistogramPage",
		statics: {
			title: 'Volume histogram'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: VolumeHistogramPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(45)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickStockScaleChartWithVolumeHistogramV1, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(46)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickStockScaleChartWithVolumeHistogramV2, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(47)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = VolumeHistogramPage;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChartWithCHMousePointer = __webpack_require__(48);
	
	var MousePointerPage = React.createClass({displayName: "MousePointerPage",
		statics: {
			title: 'Mouse pointer'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: MousePointerPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChartWithCHMousePointer, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(49)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = MousePointerPage;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChartWithZoomPan = __webpack_require__(50);
	
	var ZoomAndPanPage = React.createClass({displayName: "ZoomAndPanPage",
		statics: {
			title: 'Zoom and Pan'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: ZoomAndPanPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChartWithZoomPan, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(52)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = ZoomAndPanPage;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChartWithMA = __webpack_require__(53);
	
	var OverlayPage = React.createClass({displayName: "OverlayPage",
		statics: {
			title: 'Overlay'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: OverlayPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChartWithMA, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(54)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = OverlayPage;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChartWithEdge = __webpack_require__(7);
	
	var EdgeCoordinatesPage = React.createClass({displayName: "EdgeCoordinatesPage",
		statics: {
			title: 'Edge coordinate'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: EdgeCoordinatesPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChartWithEdge, {data: this.props.someData})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(55)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = EdgeCoordinatesPage;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var CandleStickChartWithEdge = __webpack_require__(7);
	
	var LotsOfDataPage = React.createClass({displayName: "LotsOfDataPage",
		statics: {
			title: 'Lots of data'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: LotsOfDataPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(64)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(CandleStickChartWithEdge, {data: this.props.lotsOfData})
						)
					)
				)
			);
		}
	});
	
	module.exports = LotsOfDataPage;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var HeikinAshiChart = __webpack_require__(57);
	
	var HeikinAshiPage = React.createClass({displayName: "HeikinAshiPage",
		statics: {
			title: 'Heikin Ashi'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: HeikinAshiPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(56)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(HeikinAshiChart, {data: this.props.someData})
						)
					)
				)
			);
		}
	});
	
	module.exports = HeikinAshiPage;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var Kagi = __webpack_require__(59);
	
	var KagiPage = React.createClass({displayName: "KagiPage",
		statics: {
			title: 'Kagi'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: KagiPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(58)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(Kagi, {data: this.props.lotsOfData})
						)
					)
				)
			);
		}
	});
	
	module.exports = KagiPage;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var PointAndFigure = __webpack_require__(61);
	
	var PointAndFigurePage = React.createClass({displayName: "PointAndFigurePage",
		statics: {
			title: 'Point & Figure'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: PointAndFigurePage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(60)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(PointAndFigure, {data: this.props.someData})
						)
					)
				)
			);
		}
	});
	
	module.exports = PointAndFigurePage;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var Renko = __webpack_require__(6);
	
	var RenkoPage = React.createClass({displayName: "RenkoPage",
		statics: {
			title: 'Renko'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: RenkoPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(62)}})
						)
					), 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
							React.createElement(Renko, {data: this.props.lotsOfData})
						)
					)
				)
			);
		}
	});
	
	module.exports = RenkoPage;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ContentSection = __webpack_require__(33);
	var Row = __webpack_require__(32);
	var Section = __webpack_require__(34);
	
	var ComingSoonPage = React.createClass({displayName: "ComingSoonPage",
		statics: {
			title: 'Coming soon...'
		},
		render:function() {
			return (
				React.createElement(ContentSection, {title: ComingSoonPage.title}, 
					React.createElement(Row, null, 
						React.createElement(Section, {colSpan: 2}, 
							React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(63)}})
						)
					)
				)
			);
		}
	});
	
	module.exports = ComingSoonPage;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(65)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/docs/stylesheets/re-stock.scss", function() {
			var newContent = require("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/docs/stylesheets/re-stock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(70)();
	exports.push([module.id, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  aside table tbody > tr > td, aside table tbody > tr > th, aside table tfoot > tr > td, aside table tfoot > tr > th, aside table thead > tr > td, aside table thead > tr > th {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #DDD; }\n\na.button {\n  background: transparent url("+__webpack_require__(95)+") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important; }\n  a.button small {\n    display: inline;\n    font-size: 13px;\n    margin-top: 15px; }\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white; }\n  .jumbotron a {\n    color: yellow; }\n\n.top-spacing {\n  padding-top: 10px; }\n\n.navbar {\n  background-color: steelblue; }\n  .navbar a {\n    color: white; }\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0; }\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee; } }\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px; }\n  .nav-sidebar > li > a {\n    padding-right: 20px;\n    padding-left: 20px; }\n  .nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n    color: #fff;\n    background-color: #428bca; }\n\n/*\n * Main content\n */\n.main {\n  padding: 20px; }\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px; } }\n\n.main .page-header {\n  margin-top: 0; }\n", ""]);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(65)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/src/styles/react-stockcharts.scss", function() {
			var newContent = require("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/src/styles/react-stockcharts.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(70)();
	exports.push([module.id, "body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n\n.react-stockchart .axis path, .react-stockchart .axis line {\n  fill: none;\n  stroke: #000000; }\n.react-stockchart .current-coordinate {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 3px; }\n.react-stockchart .grid.axis path, .react-stockchart .grid.axis line {\n  fill: none;\n  stroke: #000000;\n  shape-rendering: crispEdges;\n  opacity: 0.2; }\n.react-stockchart .y.axis path {\n  display: none; }\n.react-stockchart .candle .up {\n  fill: #6BA583;\n  stroke: #6BA583;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .candle .down {\n  fill: #ff0000;\n  stroke: #ff0000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .candle line {\n  stroke: #000000; }\n.react-stockchart .wick .up, .react-stockchart .wick .down {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .line {\n  fill: none;\n  stroke-width: 1px; }\n.react-stockchart .line-stroke {\n  shape-rendering: crispEdges;\n  stroke: steelblue; }\n.react-stockchart .overlay-stroke {\n  stroke: steelblue; }\n.react-stockchart .yin {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 2px; }\n.react-stockchart .yang {\n  fill: none;\n  stroke: #6BA583;\n  stroke-width: 2px; }\n.react-stockchart .point_figure_up {\n  fill: none;\n  stroke: green;\n  stroke-width: 1px; }\n.react-stockchart .point_figure_down {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 1px; }\n.react-stockchart .area {\n  fill: lightsteelblue;\n  opacity: 0.5; }\n.react-stockchart .backgroundText {\n  text-anchor: middle;\n  fill: #8a8a8a;\n  opacity: 0.15; }\n.react-stockchart .cross-hair {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n  opacity: 0.2; }\n.react-stockchart .horizontal2 .textbg {\n  opacity: 0.95;\n  fill: #f0e68c; }\n.react-stockchart .horizontal2 text {\n  fill: #757575; }\n.react-stockchart .horizontal3 .textbg {\n  opacity: 0.95;\n  fill: #000000; }\n.react-stockchart .horizontal3 text {\n  fill: #757575; }\n.react-stockchart .edge-coordinate .textbg {\n  opacity: 0.95; }\n.react-stockchart .edge-coordinate text {\n  fill: #ffffff; }\n.react-stockchart .vertical .textbg, .react-stockchart .horizontal .textbg {\n  opacity: 0.9;\n  fill: #8a8a8a; }\n.react-stockchart .vertical text, .react-stockchart .horizontal text {\n  fill: #ffffff; }\n.react-stockchart .grab {\n  cursor: grab;\n  cursor: -webkit-grab; }\n.react-stockchart .grabbing {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n.react-stockchart .crosshair {\n  cursor: crosshair; }\n.react-stockchart .toottip-hover {\n  pointer-events: all;\n  cursor: pointer; }\n.react-stockchart .histogram .bar {\n  fill: steelblue;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram .up {\n  fill: #6BA583;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram .down {\n  fill: #ff0000;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram line.up {\n  stroke: #6BA583; }\n.react-stockchart .histogram line.down {\n  stroke: #ff0000; }\n.react-stockchart .ma-container rect {\n  fill: none;\n  stroke: none; }\n  .react-stockchart .ma-container rect:hover {\n    fill: #8a8a8a;\n    opacity: 0.3; }\n.react-stockchart .ma-container line {\n  stroke-width: 4px; }\n.react-stockchart .legend {\n  font-size: 11px; }\n  .react-stockchart .legend .tooltip-label {\n    fill: steelblue;\n    font-weight: bold; }\n", ""]);

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var Row = React.createClass({displayName: "Row",
		propTypes: {
			title: React.PropTypes.string,
			anchor: React.PropTypes.string
		},
		render:function() {
			var anchor = this.props.anchor || this.props.title;
			var title = this.props.title
					? React.createElement("h4", null, React.createElement("a", {id: anchor, href: '#' + anchor}, this.props.title))
					: null;
	
			return (
				React.createElement("div", {className: "row"}, 
					title, 
					this.props.children
				)
			);
		}
	});
	
	module.exports = Row;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var ContentSection = React.createClass({displayName: "ContentSection",
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render:function() {
			return (
				React.createElement("div", {id: "ContentSection", className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"}, 
					React.createElement("h1", {className: "page-header"}, this.props.title), 
					this.props.children
				)
			);
		}
	});
	
	module.exports = ContentSection;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var Section = React.createClass({displayName: "Section",
		propTypes: {
			colSpan: React.PropTypes.number.isRequired,
			title: React.PropTypes.string
		},
		getDefaultProps:function() {
			return {
				colSpan: 1
			}
		},
		render:function() {
			var className = this.props.className + ' col-md-' + (6 * this.props.colSpan);
			var title = this.props.title ? React.createElement("h4", null, this.props.title) : null;
			return (
				React.createElement("div", {className: className}, 
					title, 
					this.props.children
				)
			);
		}
	});
	
	module.exports = Section;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts project provides a flexible library to create charts that represent time series data. It is easy to learn and can be customized by</p>\n<ul>\n<li>adding custom chart components</li>\n<li>access the <code>svg</code> elements</li>\n<li>styling with CSS</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems.</p>\n<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just charts, but ones which are interactive too -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer. I have chosen to use SVG for React Stockcharts because,</p>\n<ul>\n<li>you will see very soon the performance is not an issue really, thanks to React JS and the virtual dom</li>\n<li>the flexibility of development and the convinenience of debuging a DOM is hard to beat</li>\n<li>styling with css is something I cannot give up</li>\n</ul>\n<p>That said, I do wish to some day create a fork of this on Canvas.</p>\n<h4>DOM Manipulation</h4>\n<p>The only place where DOM Manipulation is used is in the <code>XAxis</code> and <code>YAxis</code> components, I will soon migrate to use the native <code>svg</code> axes provided by <a href=\"https://github.com/esbullington/react-d3\">react-d3</a>, at which time the entire project will be built with native svg components making server side rendering possible.</p>\n<p>Now let us get started with a very simple AreaChart</p>\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
	;
	
	var AreaChart = React.createClass({displayName: "AreaChart",/**/
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(Chart, {id: 0}, 
						React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
						React.createElement(YAxis, {axisAt: "left", orient: "left"}), 
						React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
							React.createElement(AreaSeries, null)
						)
					)
				)
			);
		}
	});
	
	
	module.exports = AreaChart;
	
	/*
								<YAxis axisAt="right" orient="right" percentScale={true} tickFormat={d3.format(".0%")}/>
	
	<ChartCanvas  width={500} height={400} margin={{left: 50, right: 50, top:10, bottom: 30}}>
		<Chart data={this.state.data}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="right" orient="right" percentScale={true} tickFormat={d3.format(".0%")}/>
			<YAxis axisAt="left" orient="left" />
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.pow().exponent(0.15)}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.log()}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data} interval="D"
			polyLinear={false}
			viewRange={dateRange}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom" ticks={4} tickFormat={d3.time.format("%b")}/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data} interval="D"
			polyLinear={false}
			viewRange={dateRange}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data}
			polyLinear={true}
			dateAccessor={(d) => d.date}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data}>
			<XAxis axisAt="bottom" orient="bottom"/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.pow().exponent(.5)}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	
	
	<DataTransform data={} transformDataAs={POLYLINEAR}>
		<DataTransform transformDataAs={RENKO}>
			<Chart currentItemEmitter={} xScale={} yScale={} xDomainUpdate={true} yDomainUpdate={true}>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt="left" orient="left"/>
				<DataSeries yAccessor={} xAccesor={} tooltipDisplayEmitter={}>
					<CandlestickSeries/>
				</DataSeries
				<ChartOverlay type="sma" options={{ period: 10 }} xAccesor={} yAccesor={} toolTipId={}>
					<LineSeries />
				</ChartOverlay>
				<ChartOverlay type="macrossover" options={{ period: 10 }} id={0}> //moving average crossover
					<Markers />
				</ChartOverlay>
			</Chart>
		</DataTransform>
		<DataTransform transformDataAs={VOLUMEPROFILE}>
			<Chart xAccesor={} yAccesor={}>
				<YAxis />
				<LineSeries />
				<ChartOverlay type="sma" options={{ period: 10 }} id={0}>
					<LineSeries />
				</ChartOverlay>
				<TooltipEmitter sendUsing={} />
			</Chart>
		</DataTransform>
		<Chart xAccesor={} yAccesor={}>
			<YAxis />
			<HistogramSeries  />
			<EdgeCoordinate />
		</Chart>
		<MouseCoordinates listenTo={} /> // this is here so it is above all charts
		<EdgeCoordinate /> // this is here so it is above all charts and I can click and bring an edge coordinate to the front
		<EdgeCoordinate edgeAt="" orient="" />
		<EventCapture mouseMove={true} zoom={true} pan={true} />
		<TooltipContainer>
			<OHLCTooltip />
			<MovingAverageTooltipContainer>
				<MATooltip onClick={} onToggle={} onRemove={} toolTipId={} />
				<MATooltip toolTipId={} />
				<MATooltip toolTipId={} />
			</MovingAverageTooltipContainer>
		</TooltipContainer>
	</DataTransform>
	*/

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
	;
	
	var AreaChartWithYPercent = React.createClass({displayName: "AreaChartWithYPercent",/**/
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
			console.log(this.state.width);
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(Chart, {id: 0}, 
						React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
						React.createElement(YAxis, {axisAt: "left", orient: "left"}), 
						React.createElement(YAxis, {axisAt: "right", orient: "right", percentScale: true, tickFormat: d3.format(".0%")}), 
						React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
							React.createElement(AreaSeries, null)
						)
					)
				)
			);
		}
	});
	
	
	module.exports = AreaChartWithYPercent;
	
	/*
	
	<ChartCanvas  width={500} height={400} margin={{left: 50, right: 50, top:10, bottom: 30}}>
		<Chart data={this.state.data}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="right" orient="right" percentScale={true} tickFormat={d3.format(".0%")}/>
			<YAxis axisAt="left" orient="left" />
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.pow().exponent(0.15)}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.log()}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data} interval="D"
			polyLinear={false}
			viewRange={dateRange}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom" ticks={4} tickFormat={d3.time.format("%b")}/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data} interval="D"
			polyLinear={false}
			viewRange={dateRange}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<DataTransform data={this.state.data}
			polyLinear={true}
			dateAccessor={(d) => d.date}>
			<Chart>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt={-10} orient="left"/>
				<DataSeries yAccessor={(d) => d.close}>
					<AreaSeries />
				</DataSeries>
			</Chart>
		</DataTransform>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data}>
			<XAxis axisAt="bottom" orient="bottom"/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	<ChartCanvas  width={500} height={400}>
		<Chart data={this.state.data} yScale={d3.scale.pow().exponent(.5)}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			<YAxis axisAt="left" orient="left"/>
			<DataSeries yAccessor={(d) => d.close} xAccessor={(d) => d.date}>
				<AreaSeries />
			</DataSeries>
		</Chart>
	</ChartCanvas>
	
	
	<DataTransform data={} transformDataAs={POLYLINEAR}>
		<DataTransform transformDataAs={RENKO}>
			<Chart currentItemEmitter={} xScale={} yScale={} xDomainUpdate={true} yDomainUpdate={true}>
				<XAxis axisAt="bottom" orient="bottom"/>
				<YAxis axisAt="left" orient="left"/>
				<DataSeries yAccessor={} xAccesor={} tooltipDisplayEmitter={}>
					<CandlestickSeries/>
				</DataSeries
				<ChartOverlay type="sma" options={{ period: 10 }} xAccesor={} yAccesor={} toolTipId={}>
					<LineSeries />
				</ChartOverlay>
				<ChartOverlay type="macrossover" options={{ period: 10 }} id={0}> //moving average crossover
					<Markers />
				</ChartOverlay>
			</Chart>
		</DataTransform>
		<DataTransform transformDataAs={VOLUMEPROFILE}>
			<Chart xAccesor={} yAccesor={}>
				<YAxis />
				<LineSeries />
				<ChartOverlay type="sma" options={{ period: 10 }} id={0}>
					<LineSeries />
				</ChartOverlay>
				<TooltipEmitter sendUsing={} />
			</Chart>
		</DataTransform>
		<Chart xAccesor={} yAccesor={}>
			<YAxis />
			<HistogramSeries  />
			<EdgeCoordinate />
		</Chart>
		<MouseCoordinates listenTo={} /> // this is here so it is above all charts
		<EdgeCoordinate /> // this is here so it is above all charts and I can click and bring an edge coordinate to the front
		<EdgeCoordinate edgeAt="" orient="" />
		<EventCapture mouseMove={true} zoom={true} pan={true} />
		<TooltipContainer>
			<OHLCTooltip />
			<MovingAverageTooltipContainer>
				<MATooltip onClick={} onToggle={} onRemove={} toolTipId={} />
				<MATooltip toolTipId={} />
				<MATooltip toolTipId={} />
			</MovingAverageTooltipContainer>
		</TooltipContainer>
	</DataTransform>
	*/

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. <code>data</code> is well the data used to plot.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p>If you are not familiar with <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> in d3 I recommend doing so. Each <code>Chart</code> defines an <code>xScale</code> and <code>yScale</code>. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2014-12-31 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels which can be drawn.</p>\n<p>With SVG it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"Logo Title Text 1\"></p>\n<p>For more details about the SVG coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.html\">here</a></p>\n<p>Back to scales,</p>\n<p>A time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input data, and the range is calculated as <code>height - margin.left - margin.right</code>.</p>\n<p>A Linear scale converts a <code>domain</code> say 4600 - 6200 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear, similarly there is log scale which creates a logrithmic scale, which is not linear.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the <a href=\"https://github.com/mbostock/d3/wiki/SVG-Axes#ticks\">d3.axis</a>, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in d3.axis.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>A <code>DataSeries</code> is a shell component intended to house the x and y Accessor. You will find in other examples below how <code>DataSeries</code> helps create a yAccessor with more than one y  value to plot for a given x, like in candlestick.</p>\n<p>If you are not clear what the arrow functions mean, read more about them <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">here</a>. In short</p>\n<p><code>(d) =&gt; d.close</code> means <code>function (d) { return d.close; }</code></p>\n<p><code>(d) =&gt; d.date</code> means <code>function (d) { return d.date; }</code></p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you dont want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> /&gt;</span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Create custom components and use them, it is explained <a href=\"http://add.link.here\">here</a></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">percentScale</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\".0%\")}</span>/&gt;</span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continious time scale, and a continious time scale has week ends and national holidays, days when trading does not happen. Now we dont want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continious on the x axis. Enter <strong>stocktime scale</strong> (or <strong>financetime scale</strong>).</p>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse;\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.open = +d.open;\n        d.high = +d.high;\n        d.low = +d.low;\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>It is the same as for <code>AreaChart</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n</code></pre>\n<p>Converting the data provided as input which when taken as a linear scale includes weekend time breaks, into a linear scale over the input domain. More usecases of <code>DataTransform</code> are listed below.</p>\n<p><strong>Coming Soon</strong> Create your own transforms and register them for use</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example above</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>You will notice that the <code>DataSeries</code> component does not include the <code>xAccessor</code>, that is because it is defined inside the stockscale <code>DataTransform</code> which provides the <code>xAccessor</code> behind the scenes</p>\n<p><code>yAccessor={CandlestickSeries.yAccessor}</code> is just a convenience <code>yAccessor</code> available, it can also be represented as</p>\n<pre><code class=\"language-js\">yAccessor={(d) =&gt; ({open: d.open, high: d.high, low: d.low, close: d.close})}\n</code></pre>\n<p>or if arrow functions is not your thing, use</p>\n<pre><code class=\"language-js\">yAccessor={<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(d)</span> </span>{ <span class=\"hljs-keyword\">return</span> {open: d.open, high: d.high, low: d.low, close: d.close}; }}\n</code></pre>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
	;
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(Chart, {id: 1}, 
						React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
						React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5}), 
						React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor, xAccessor: function(d)  {return d.date;}}, 
							React.createElement(CandlestickSeries, null)
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n<p><strong>Coming Soon</strong> updated financetime scale for intra day</p>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
		, HistogramSeries = ReStock.HistogramSeries
	;
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, null)
							)
						)
					)
				)
			);
		}
	});
	module.exports = CandleStickChart;
	
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
		, HistogramSeries = ReStock.HistogramSeries
	;
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}})
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;
	
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there.</p>\n<p>Each <code>Chart</code> has a pair of <code>xScale</code> and <code>yScale</code> since <code>volume</code> is on a different domain from <code>open</code>/<code>high</code>/<code>low</code>/<code>close</code>, It has to be created as a different <code>Chart</code>.</p>\n<p>To summarize, All <code>Chart</code>s use the same <code>data</code> but each <code>Chart</code> has different <code>xScale</code> and <code>yScale</code>. In this example above the <code>xScale</code> of chart 2 has the same <code>domain</code> and <code>range</code> as the <code>xScale</code> of <code>Chart</code> 1, so we did not draw the <code>XAxis</code> again for the Volume.</p>\n<h5>But… I dont want the Volume chart to span the whole chart height.</h5>\n<p>I got you covered.</p>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150, which is good.</p>\n<p><code>origin</code> can be either a function which returns a <code>[x, y]</code> to be used as origin or it can be an array with 2 elements representing <code>[x, y]</code>. The default value for <code>origin</code> is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>className</code> of <code>HistogramSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string</li>\n<li>or a string</li>\n</ul>\n<p>which is used as the css class</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n</code></pre>\n<p>a class of ‘up’ is applied if <code>close &gt; open</code> for that day and ‘down’ otherwise</p>\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
		, HistogramSeries = ReStock.HistogramSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
	
	;
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 40, right: 70, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}})
							)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, mainChart: 1}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-40, 0]})
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;
	
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">40</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">70</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{d3.time.format(\"%Y-%m-%d\")}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above. <code>mainChart</code> as the name describes is used to refer to the <code>Chart</code> from which the <code>xScale</code> and <code>yScale</code> are used to determine the nearest value to the mouse position.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{d3.time.format(\"%Y-%m-%d\")}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n</code></pre>\n<p>Displays the crosshair at the mouse position, the attributes of <code>MouseCoordinates</code> are self explanatory. You can swap out with <code>CrossHair</code> with <code>VerticalMousePointer</code> if crosshair is not your thing.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>Displays the tooltip on the top left, use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
		, HistogramSeries = ReStock.HistogramSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
	;
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 40, right: 70, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}})
							)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-40, 0]})
						)
					)
				)
			);
		}
	});
	
	
	module.exports = CandleStickChart;
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
	;
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 50, right: 50, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: CandlestickSeries.yAccessor}, 
								React.createElement(CandlestickSeries, null)
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;
	


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The only change is enabling <code>zoom</code> and <code>pan</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<p>other than enabling <code>zoom</code> and <code>pan</code>, <code>defaultFocus</code> of <code>true</code> means mouse scroll over the chart, triggers zoom action if zoom is enabled. If <code>defaultFocus</code> is <code>false</code>, you have to click on the chart to get focus and then all scroll events are zoom events if <code>zoom</code> is enabled</p>\n<p>You could set the focus programatically by adding a ref to the <code>EventCapture</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">ref</span>=<span class=\"hljs-value\">\"eventCapture\"</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">this</span>.refs.eventCapture.toggleFocus(); <span class=\"hljs-comment\">// to toggle focus so scroll events over the chart will either simulate zoom or perform the default action</span>\n\n<span class=\"hljs-keyword\">this</span>.refs.eventCapture.setFocus(<span class=\"hljs-literal\">false</span>); <span class=\"hljs-comment\">// set the focus </span>\n</code></pre>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	;
	
	
	var CandleStickChart = React.createClass({displayName: "CandleStickChart",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 40, right: 70, top:10, bottom: 30}, data: this.props.data}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
						React.createElement(Chart, {id: 1}, 
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
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-40, 0]}), 
							React.createElement(MovingAverageTooltip, {forChart: 1, onClick: function(e)  {return console.log(e);}, origin: [-38, 15]})
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;
	
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>Overlay</code>s share the scales of a <code>Chart</code> and contribute to the <code>domain</code> of the <code>Chart</code> they belong to.</p>\n<p>In this chart we are introducing</p>\n<ul>\n<li>Moving average on daily <code>close</code> as a <code>LineSeries</code></li>\n<li>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></li>\n<li>Current item indicator as a circle over the different moving averages</li>\n<li>Moving average tooltip</li>\n</ul>\n<p>Let us review each of these in a little more detail</p>\n<h4>Moving average on daily <code>close</code> as a <code>LineSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">20</span>, <span class=\"hljs-attribute\">pluck:</span> '<span class=\"hljs-attribute\">close</span>' }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">30</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">50</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p><code>type</code> indicates it is a simple moving average, <code>options</code> used to specify the moving average <code>period</code>, and <code>pluck</code> to specify attribute against which moving average is to be calculated. If not specified, <code>pluck</code> defaults to <code>close</code></p>\n<h4>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">10</span>, <span class=\"hljs-attribute\">pluck:</span>'<span class=\"hljs-attribute\">volume</span>' }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>Similar to above</p>\n<h4>Current item indicator as a circle over the different moving averages</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span>/&gt;</span>\n</code></pre>\n<p>That was easy, right?</p>\n<p><code>forOverlay</code> is an optional attribute, and absense of that will default the <code>CurrentCoordinate</code> to display a circle on the main series. This only makes sense if the main series plots a single value on y. For <code>CandlestickSeries</code> as it plots 4 attributes, <code>CurrentCoordinate</code> is not valid for <code>CandlestickSeries</code></p>\n<h4>Moving average tooltip</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MovingAverageTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">onClick</span>=<span class=\"hljs-value\">{(e)</span> =&gt;</span> console.log(e)} origin={[-38, 15]}/&gt;\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>Open the dev console and see what is logged on click of the moving average tooltip</p>\n<p>adding it all together</p>\n<pre><code class=\"language-jsx\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=</span></span><span class=\"hljs-expression\">{{<span class=\"hljs-variable\">left</span>: 40, <span class=\"hljs-variable\">right</span>: 70, <span class=\"hljs-variable\">top</span>:10, <span class=\"hljs-variable\">bottom</span>: 30}}</span><span class=\"xml\"><span class=\"hljs-tag\"> <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 20, <span class=\"hljs-variable\">pluck</span>: '<span class=\"hljs-variable\">close</span>' }}</span><span class=\"xml\"><span class=\"hljs-tag\">&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 30 }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 50 }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 10, <span class=\"hljs-variable\">pluck</span>:'<span class=\"hljs-variable\">volume</span>' }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{dateFormat}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MovingAverageTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">onClick</span>=<span class=\"hljs-value\">{(e)</span> =&gt;</span> console.log(e)} origin={[-38, 15]}/&gt;\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</span></code></pre>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>EdgeIndicator</code>s are inside the <code>EdgeContainer</code> and can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan too</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n</code></pre>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	var HaikinAshi = React.createClass({displayName: "HaikinAshi",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "1D"}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
					React.createElement(DataTransform, {transformType: "heikinashi"}, 
						React.createElement(Chart, {id: 1}, 
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
								edgeAt: "right", forChart: 1, forOverlay: 0}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 1, forOverlay: 1}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 1, forOverlay: 2}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 0}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 1}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 1, forOverlay: 2}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 2, forOverlay: 3, displayFormat: d3.format(".4s")}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 2, forOverlay: 3, displayFormat: d3.format(".4s")}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "first", orient: "left", 
								edgeAt: "left", forChart: 2, displayFormat: d3.format(".4s")}
								), 
							React.createElement(EdgeIndicator, {className: "horizontal", itemType: "last", orient: "right", 
								edgeAt: "right", forChart: 2, displayFormat: d3.format(".4s")}
								)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-50, 0]}), 
							React.createElement(MovingAverageTooltip, {forChart: 1, onClick: function(e)  {return console.log(e);}, origin: [-48, 15]})
						)
					)
					)
				)
			);
		}
	});
	
	module.exports = HaikinAshi;
	
	/*
	 xScaleDependsOn={1}
								<Chart id={1} >
									<XAxis axisAt="bottom" orient="bottom" ticks={5}/>
									<YAxis axisAt="right" orient="right" ticks={5} />
									<DataSeries yAccessor={CandlestickSeries.yAccessor} >
										<CandlestickSeries />
									</DataSeries>
								</Chart>
	
	*/

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:kagi\">here</a></p>\n<p>Kagi consists of <em>Yin</em> and <em>Yang</em>, which is represented as red and green respectively. An overly simple rule is buy on Yang and sell on Yin.</p>\n<p>ATR(14) is used as the default reversal amount.</p>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, KagiSeries = ReStock.KagiSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	
	var Kagi = React.createClass({displayName: "Kagi",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "1D"}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
					React.createElement(DataTransform, {transformType: "kagi"}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: KagiSeries.yAccessor}, 
								React.createElement(KagiSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}}), 
								React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 10, pluck:'volume'}}, 
									React.createElement(AreaSeries, null)
								)
							)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-50, 0]})
						)
					)
					)
				)
			);
		}
	});
	
	module.exports = Kagi;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/docs/doku.php?id=other-tools:pnf-charts\">here</a></p>\n<p>default is 3 box reversal.</p>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, PointAndFigureSeries = ReStock.PointAndFigureSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(67)
		, InitialStateMixin = __webpack_require__(68)
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
	var PointAndFigure = React.createClass({displayName: "PointAndFigure",
		mixins: [InitialStateMixin, ChartWidthMixin],
		render:function() {
			if (!this.state.width) return React.createElement("div", null);
	
			var dateFormat = d3.time.format("%Y-%m-%d");
	
			return (
				React.createElement(ChartCanvas, {width: this.state.width, height: 400, 
					margin: {left: 90, right: 70, top:10, bottom: 30}, data: this.props.data, interval: "1D"}, 
					React.createElement(DataTransform, {transformType: "stockscale"}, 
					React.createElement(DataTransform, {transformType: "pointandfigure", options: { boxSize: 0.5}}, 
						React.createElement(Chart, {id: 1}, 
							React.createElement(XAxis, {axisAt: "bottom", orient: "bottom"}), 
							React.createElement(YAxis, {axisAt: "right", orient: "right", ticks: 5}), 
							React.createElement(DataSeries, {yAccessor: PointAndFigureSeries.yAccessor}, 
								React.createElement(PointAndFigureSeries, null)
							)
						), 
						React.createElement(Chart, {id: 2, height: 150, origin: function(w, h)  {return [0, h - 150];}}, 
							React.createElement(YAxis, {axisAt: "left", orient: "left", ticks: 5, tickFormat: d3.format("s")}), 
							React.createElement(DataSeries, {yAccessor: function(d)  {return d.volume;}}, 
								React.createElement(HistogramSeries, {className: function(d)  {return d.close > d.open ? 'up' : 'down';}}), 
								React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 10, pluck:'volume'}}, 
									React.createElement(AreaSeries, null)
								)
							)
						), 
						React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
							React.createElement(CrossHair, null)
						), 
						React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false}), 
						React.createElement(TooltipContainer, null, 
							React.createElement(OHLCTooltip, {forChart: 1, origin: [-50, 0]})
						)
					)
					)
				)
			);
		}
	});
	
	module.exports = PointAndFigure;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Similar to Point and Figure charts in that Renko plots the price movement ignoring the time. Each brick is formed on a different column when the price moves beyond a threshold.</p>\n<p>Brick size defaults to ATR (14)</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:renko\">here</a></p>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>Overlays</h4>\n<ul>\n<li>Exponential Moving Average (EMA) - v0.2</li>\n<li>Bolinger Bands - v0.2</li>\n<li>Compare with another stock - v0.1</li>\n</ul>\n<h4>Indicators</h4>\n<ul>\n<li>Moving Average Convergence Divergence (MACD) - v0.1</li>\n<li>Relative Strength Index (RSI) - v0.2</li>\n<li>Stochastics - v0.2</li>\n</ul>\n<h4>Chart types</h4>\n<ul>\n<li><del>Heikin Ashi - v0.1</del></li>\n<li><del>Kagi - v0.1</del></li>\n<li><del>Point and Figure - v0.1</del></li>\n<li><del>Renko - v0.1</del></li>\n<li>Better Renko/Mean Renko - v0.2</li>\n<li>Line break - v0.2</li>\n<li>Volume Profile - v0.3</li>\n</ul>\n<h4>Chart features</h4>\n<ul>\n<li>Change interval on zoom out/zoom in - v0.1</li>\n<li>Add custom data transforms - v0.3</li>\n</ul>\n<h4>More examples</h4>\n<ul>\n<li>gists, fiddle and <a href=\"http://bl.ocks.org/\">blocks</a> for each chart type - v0.1</li>\n</ul>\n<h4>Open issues</h4>\n<ul>\n<li>Window Resize after zoom/pan messes up the chart</li>\n<li>zoom out changes the interval, but zoom in does not change</li>\n<li>Refactor pan and zoom</li>\n<li>Add tests and coverage</li>\n</ul>\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Let us turn it up a notch, we all have access to lots of historical data for stocks. As an example, let us work with MSFT from 1986-03-13 till 2015-03-26</p>\n<p>That is 7221 one day periods, lot more if you have access to intra day, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. This problem is addressed in React Stockcharts by displaying data consolidated by month or week, this gives a better representation of the overall price movement. This technique is employed by many trading systems to show the larger time range.</p>\n<p>If the number of periods to show &gt; width / 3, then automatically switch to the next higher period. e.g. If width = 1000 and showing more than 333 1 day periods, the program switches to 1 week period automatically so that less than 333 periods are shown on screen.</p>\n<p>* Period can be 1min, 5min, … 1 day, 1 week, 1 month</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 65 */
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
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
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
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
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
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
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
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
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


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(69);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
		, OverlaySeries = ReStock.OverlaySeries
		, LineSeries = ReStock.LineSeries
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
		, EdgeContainer = ReStock.EdgeContainer
		, EdgeIndicator = ReStock.EdgeIndicator
		, CurrentCoordinate = ReStock.CurrentCoordinate
	
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithEdgeCoordinates = React.createClass({displayName: "AreaChartWithEdgeCoordinates",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				getEventStore:function() {
					return this.refs.eventStore.getEventStore();
				},
				updateEventStore:function(eventStore) {
					return this.refs.eventStore.updateEventStore(eventStore);
				},
				handleMATooltipClick:function(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {
							width: this.state.width, height: this.state.height, 
							margin: {left: 5, right: 90, top:10, bottom: 30}, data: data, ref: "eventStore"}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null), 
									React.createElement(OverlaySeries, {id: 0, type: "sma", options: { period: 50}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 1, type: "sma", options: { period: 150}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 250}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 4, type: "sma", options: { period: 350}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 5, type: "sma", options: { period: 450}}, 
										React.createElement(LineSeries, null)
									)
								)
							), 
							React.createElement(CurrentCoordinate, {forChart: 1}), 
							React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeContainer, null, 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 5}
									)
							), 
							React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, mainChart: 1}), 
							React.createElement(TooltipContainer, null, 
								React.createElement(OHLCTooltip, {forChart: 1}), 
								React.createElement(MovingAverageTooltip, {forChart: 1, onClick: this.handleMATooltipClick})
							)
						)
					);
				}
			});
	
			return AreaChartWithEdgeCoordinates;
		}
	}
	
	/*
	
								
								
	
							<EdgeContainer>
	
							</EdgeContainer>
	
	
								<EdgeIndicator
									type="horizontal"
									className="horizontal"
									itemType="last"
									orient="right"
									edgeAt="right"
									forSeries={1}
									displayFormat={(d) => (d)}
									/>
								<EdgeIndicator
									type="horizontal"
									className="horizontal"
									itemType="first"
									orient="left"
									edgeAt="left"
									forSeries={1}
									displayFormat={(d) => (d)}
									/>
	*/


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChartWidthMixin = {
		handleWindowResize:function() {
			var w = $(this.getDOMNode()).parent().width();
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
			var w = $(this.getDOMNode()).parent().width();
			this.setState({
				width: w
			});
		},
	};
	
	module.exports = ChartWidthMixin;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var InitialStateMixin = {
		getInitialState:function() {
			return {};
		}
	};
	
	module.exports = InitialStateMixin;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// common components
	exports.ChartCanvas = __webpack_require__(71);
	exports.DataTransform = __webpack_require__(72);
	
	exports.XAxis = __webpack_require__(73);
	exports.YAxis = __webpack_require__(74);
	exports.Chart = __webpack_require__(75);
	exports.DataSeries = __webpack_require__(76);
	
	// chart types & Series
	exports.AreaSeries = __webpack_require__(77);
	exports.LineSeries = __webpack_require__(78);
	exports.CandlestickSeries = __webpack_require__(79);
	exports.OverlaySeries = __webpack_require__(80);
	exports.HistogramSeries = __webpack_require__(81);
	exports.KagiSeries = __webpack_require__(82);
	exports.PointAndFigureSeries = __webpack_require__(83);
	exports.RenkoSeries = __webpack_require__(84);
	
	// interaction components
	exports.EventCapture = __webpack_require__(85);
	exports.MouseCoordinates = __webpack_require__(86);
	exports.CrossHair = __webpack_require__(87);
	exports.VerticalMousePointer = __webpack_require__(88);
	exports.CurrentCoordinate = __webpack_require__(89);
	
	// Tooltips
	exports.TooltipContainer = __webpack_require__(90);
	exports.OHLCTooltip = __webpack_require__(91);
	exports.MovingAverageTooltip = __webpack_require__(93);
	
	// misc
	exports.EdgeContainer = __webpack_require__(92);
	exports.EdgeIndicator = __webpack_require__(94);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
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
		return list;
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	// var TestUtils = React.addons.TestUtils;
	
	var Chart = __webpack_require__(75);
	var EventCaptureMixin = __webpack_require__(96);
	var ChartContainerMixin = __webpack_require__(97);
	
	var ChartCanvas = React.createClass({displayName: "ChartCanvas",
		mixins: [ChartContainerMixin, EventCaptureMixin],
		propTypes: {
			width: React.PropTypes.number.isRequired
			, height: React.PropTypes.number.isRequired
			, margin: React.PropTypes.object
			, interval: React.PropTypes.string.isRequired
		},
		getAvailableHeight:function(props) {
			return props.height - props.margin.top - props.margin.bottom;
		},
		getAvailableWidth:function(props) {
			return props.width - props.margin.left - props.margin.right;
		},
		getInitialState:function() {
			return {};
		},
		getDefaultProps:function() {
			return {
				margin: {top: 20, right: 30, bottom: 30, left: 80},
				interval: "D"
			};
		},
		renderChildren:function() {
	
			var children = React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				if ('ReStock.DataTransform' === newChild.props.namespace) {
					newChild = React.addons.cloneWithProps(newChild, {
						data: this.props.data,
						interval: this.props.interval
					});
				}
				return React.addons.cloneWithProps(newChild, {
					_width: this.getAvailableWidth(this.props)
					, _height: this.getAvailableHeight(this.props)
				});
			}.bind(this));
			return this._renderChildren(children);
		},
		render:function() {
	
			var transform = 'translate(' + this.props.margin.left + ',' +  this.props.margin.top + ')';
			var clipPath = '<clipPath id="chart-area-clip">'
								+ '<rect x="0" y="0" width="' + this.getAvailableWidth(this.props) + '" height="' + this.getAvailableHeight(this.props) + '" />'
							+ '</clipPath>';
	
			var children = this.renderChildren();
	
			return (
				React.createElement("svg", {width: this.props.width, height: this.props.height}, 
					React.createElement("defs", {dangerouslySetInnerHTML: { __html: clipPath}}), 
					React.createElement("g", {transform: transform}, children)
				)
			);
		}
	});
	
	module.exports = ChartCanvas;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EventCaptureMixin = __webpack_require__(96);
	var ChartContainerMixin = __webpack_require__(97);
	var DataTransformMixin = __webpack_require__(98);
	
	var polyLinearTimeScale = __webpack_require__(99);
	
	var doNotPassThrough = ['transformType', 'options', 'children', 'namespace'];
	
	function updatePropsToChild(child, data, props, from, to) {
		if (from === undefined) from = Math.max(data.length - 30, 0);
		if (to === undefined) to = data.length - 1;
		//child.props.data = data.filter();
		if (child.type === Chart.type || child.type === DataTransform.type) {
			child.props.data = data;
			child.props._width = props.width || props._width;
			child.props._height = props.height || props._height;
			child.props._indexAccessor = props._indexAccessor;
			child.props._polyLinear = props.polyLinear;
			if (props.polyLinear)
				child.props._xScale = polyLinearTimeScale(child.props._indexAccessor);
		}
	}
	
	var DataTransform = React.createClass({displayName: "DataTransform",
		mixins: [DataTransformMixin, ChartContainerMixin, EventCaptureMixin],
		propTypes: {
			_height: React.PropTypes.number,
			_width: React.PropTypes.number,
	
			data: React.PropTypes.any.isRequired,
			transformType: React.PropTypes.string.isRequired, // stockscale, none
			options: React.PropTypes.object
		},
		getInitialState:function() {
			return {};
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.DataTransform",
				transformType: "none"
			};
		},
	
		renderChildren:function(height, width) {
			var children = React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				var props = {};
				Object.keys(this.props)
					.filter(function(eachProp)  {return doNotPassThrough.indexOf(eachProp) === -1;})
					.forEach(function(key)  {return props[key] = this.props[key];}.bind(this));
	
				Object.keys(this.state.passThroughProps)
					.forEach(function(key)  {return props[key] = this.state.passThroughProps[key];}.bind(this));
	
				// console.log(Object.keys(props));
				return React.addons.cloneWithProps(newChild, props);
			}.bind(this));
			return this._renderChildren(children);
		},
		render:function() {
			return (
				React.createElement("g", null, this.renderChildren())
			);
		}
	});
	
	module.exports = DataTransform;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	var XAxis = React.createClass({displayName: "XAxis",
		mixins: [PureRenderMixin],
		propTypes: {
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
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.XAxis",
				showGrid: false
			};
		},
		getInitialState:function() {
			return {};
		},
		componentWillMount:function() {
			this.state.xAxis = d3.svg.axis();
		},
		componentDidMount:function() {
			this.updateAxis();
		},
		componentDidUpdate:function() {
			this.updateAxis();
		},
		updateAxis:function() {
			var axis = d3.svg.axis()
				.scale(this.props._xScale)
				.orient(this.props.orient)
				//.innerTickSize(this.props.showGrid ? this.props.innerTickSize : 5)
				//.outerTickSize(this.props.showGrid ? this.props.outerTickSize : 5)
				//.tickPadding(this.props.showGrid ? 5 : 10)
				;
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
			if (this.props.tickFormat) {
				if (this.props._xScale.isPolyLinear && this.props._xScale.isPolyLinear())
					console.warn('Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis');
				else
					axis.tickFormat(this.props.tickFormat)
			};
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
			d3.select(this.getDOMNode()).call(axis);
		},
		render:function() {
			var axisAt = this.props.axisAt
				, range = this.props._yScale.range();
			if (this.props.axisAt === 'top') axisAt = Math.min(range[0], range[1]);
			if (this.props.axisAt === 'bottom') axisAt = Math.max(range[0], range[1]);
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2;
	
			return (
				React.createElement("g", {className: "x axis", transform: 'translate(0, ' + axisAt + ')'})
			);
		}
	});
	
	module.exports = XAxis;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1)
		, d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var YAxis = React.createClass({displayName: "YAxis",
		mixins: [PureRenderMixin],
		propTypes: {
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
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.YAxis",
				showGrid: false,
				axisPadding: 0
			};
		},
		getInitialState:function() {
			return {};
		},
	
		componentDidMount:function() {
			this.updateAxis();
		},
		componentDidUpdate:function() {
			this.updateAxis();
		},
		updateAxis:function() {
			var scale = this.props._yScale;
			if (this.props.percentScale) scale = scale.copy().domain([0, 1]);
	
			var axis = d3.svg.axis()
				.scale(scale)
				.orient(this.props.orient)
				//.innerTickSize(this.props.showGrid ? this.props.innerTickSize : 5)
				//.outerTickSize(this.props.showGrid ? this.props.outerTickSize : 5)
				//.tickPadding(this.props.showGrid ? 5 : 10)
				;
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
			if (this.props.tickFormat) axis.tickFormat(this.props.tickFormat);
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
	
			d3.select(this.getDOMNode()).call(axis);
		},
		render:function() {
			var axisAt = this.props.axisAt
				, range = this.props._xScale.range();
			if (this.props.axisAt === 'left') axisAt = Math.min(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'right') axisAt = Math.max(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2 + this.props.axisPadding;
	
			return (
				React.createElement("g", {className: "y axis", transform: 'translate(' + axisAt + ', 0)'})
			);
		}
	});
	
	module.exports = YAxis;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Overlays have to be calculated here so scales can be modified according to that
	
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		ScaleUtils = __webpack_require__(101),
		OverlayUtils = __webpack_require__(102),
		Utils = __webpack_require__(103),
		overlayColors = Utils.overlayColors;
		// logger = require('./utils/logger')
	
	var pluck = Utils.pluck;
	var keysAsArray = Utils.keysAsArray;
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	var Chart = React.createClass({displayName: "Chart",
		statics: {
			getWidth:function(props) { return props.width || props._width; },
			getHeight:function(props) { return props.height || props._height; }
		},
		propTypes: {
			data: React.PropTypes.array.isRequired,
			height: React.PropTypes.number,
			width: React.PropTypes.number,
			origin: React.PropTypes.oneOfType([
						React.PropTypes.array
						, React.PropTypes.func
					]).isRequired,
			id: React.PropTypes.number.isRequired,
			_height: React.PropTypes.number,
			_width: React.PropTypes.number,
			// _showCurrent: React.PropTypes.bool,
			// if xScale and/or yScale is passed as props
			// the user needs to set 
			// xDomainUpdate=false and yDomainUpdate=false
			// in order for this component to NOT update the scale on change of data
			xScale: React.PropTypes.func,
			yScale: React.PropTypes.func,
			xDomainUpdate: React.PropTypes.bool,
			yDomainUpdate: React.PropTypes.bool,
			// _mouseXY: React.PropTypes.array,
			_chartData: React.PropTypes.object.isRequired,
			_updateMode: React.PropTypes.object.isRequired
			/*,
			_currentItem: React.PropTypes.object,
			_lastItem: React.PropTypes.object,
			_currentMouseXY: React.PropTypes.array,
			_currentXYValue: React.PropTypes.array*/
		},
		mixins: [React.addons.PureRenderMixin],
		getDefaultProps:function() {
			return {
				namespace: "ReStock.Chart",
				transformDataAs: "none",
				yDomainUpdate: true,
				origin: [0, 0]
			};
		},/*
		identifyOverlaysToAdd(props) {
			var overlaysToAdd = [];
			React.Children.forEach(props.children, (child) => {
				if (/DataSeries$/.test(child.props.namespace)) {
					React.Children.forEach(child.props.children, (grandChild) => {
						if (/OverlaySeries$/.test(grandChild.props.namespace)) {
							var overlay = getOverlayFromList(props._chartData.overlays, grandChild.props.id)
							var yAccessor = OverlayUtils.getYAccessor(grandChild.props);
							if (overlay === undefined) {
								overlay = {
									id: grandChild.props.id,
									yAccessor: yAccessor,
									options: grandChild.props.options,
									type: grandChild.props.type,
									tooltipLabel: OverlayUtils.getToolTipLabel(grandChild.props),
									stroke: grandChild.stroke || overlayColors(grandChild.props.id)
								};
								overlaysToAdd.push(overlay);
							}
						}
					});
				}
			})
			return overlaysToAdd;
		},
		componentWillNOTMount() {
			var _chartData = this.props._chartData;
	
			var scales = this.defineScales(this.props);
			var accessors = this.getXYAccessors(this.props);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(this.props);
			_chartData = _chartData.set({ overlays: overlaysToAdd });
			// console.log(overlaysToAdd);
			// calculate overlays
			this.calculateOverlays(this.props.fullData, _chartData.overlays);
	
			var overlayValues = this.updateOverlayFirstLast(this.props.data, _chartData.overlays)
			_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
			var overlayYAccessors = pluck(keysAsArray(_chartData.overlays), 'yAccessor');
	
			scales = this.updateScales(this.props
				, [accessors.xAccessor]
				, [accessors.yAccessor].concat(overlayYAccessors)
				, scales.xScale
				, scales.yScale);
	
			_chartData = _chartData.set({ accessors: accessors });
			_chartData = _chartData.set({ scales: scales });
	
			var last = Utils.cloneMe(this.props.data[this.props.data.length - 1]);
			_chartData = _chartData.set({ lastItem: last });
	
			var first = Utils.cloneMe(this.props.data[0]);
			_chartData = _chartData.set({ firstItem: first });
	
			this.setState({ chartData: _chartData });
		},
		componentWillNOTReceiveProps(nextProps) {
			// ignoring  _mouseXY, _currentItem, _lastItem
	
			var scaleRecalculationNeeded = (Chart.getWidth(this.props) !== Chart.getWidth(nextProps)
				|| Chart.getHeight(this.props) !== Chart.getHeight(nextProps)
				|| this.props.xScale !== nextProps.xScale
				|| this.props.yScale !== nextProps.yScale
				|| this.props.xDomainUpdate !== nextProps.xDomainUpdate
				|| this.props.yDomainUpdate !== nextProps.yDomainUpdate)
	
			var _updateMode = nextProps._updateMode;
			var _chartData = nextProps._chartData;
			var overlaysToAdd = this.identifyOverlaysToAdd(nextProps);
	
			var overlays = _chartData.overlays;
			if (overlaysToAdd.length > 0)
				overlays = overlays.push(overlaysToAdd);
	
			if (this.props.data !== nextProps.data) {
				scaleRecalculationNeeded = true;
			}
			// console.log(this.props._chartData.overlays !== nextProps._chartData.overlays);
			if (this.state.chartData.overlays !== overlays) { //or if the data interval changes
				// TODO
				// if any overlay.toBeRemoved = true then overlays.splice that one out
				this.calculateOverlays(nextProps.fullData, overlays);
	
				_updateMode = _updateMode.set({ immediate: false });
	
	
				scaleRecalculationNeeded = true;
			}
			if (scaleRecalculationNeeded) {
				var scales = this.defineScales(nextProps, this.state.chartData.scales.xScale, this.state.chartData.scales.yScale);
				var xyAccessors = this.getXYAccessors(nextProps);
	
				_updateMode = _updateMode.set({ immediate: false });
				var overlayYAccessors = pluck(keysAsArray(overlays), 'yAccessor');
	
	
				var overlayValues = this.updateOverlayFirstLast(nextProps.data, _chartData.overlays)
				_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
				// console.log(xyAccessors, overlayYAccessors);
	
				scales = this.updateScales(nextProps
					, [xyAccessors.xAccessor]
					, [xyAccessors.yAccessor].concat(overlayYAccessors)
					, scales.xScale
					, scales.yScale);
	
				_chartData = _chartData.set({ accessors: xyAccessors });
				_chartData = _chartData.set({ scales: scales });
	
				var last = Utils.cloneMe(nextProps.data[nextProps.data.length - 1]);
				_chartData = _chartData.set({ lastItem: last });
	
				var first = Utils.cloneMe(nextProps.data[0]);
				_chartData = _chartData.set({ firstItem: first });
	
				this.setState({ chartData: _chartData });
			} else {
				this.setState({ chartData: nextProps._chartData });
			}
		},
		calculateOverlays(data, overlays) {
			overlays
				.filter((eachOverlay) => eachOverlay.id !== undefined)
				.forEach((overlay) => {
					OverlayUtils.calculateOverlay(data, overlay);
				});
			// console.table(data);
			// console.log(overlays);
		},
		updateOverlayFirstLast(data,
			overlays) {
	
			console.log('updateOverlayFirstLast');
	
			var overlayValues = [];
	
			overlays
				.forEach((eachOverlay, idx) => {
					// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
					overlayValues.push({
						id: eachOverlay.id,
						first: OverlayUtils.firstDefined(data, eachOverlay.yAccessor),
						last: OverlayUtils.lastDefined(data, eachOverlay.yAccessor)
					})
				})
			// console.log(_overlayValues);
			return overlayValues;
		},
		defineScales(props, xScaleFromState, yScaleFromState) {
			var xScale = props.xScale || xScaleFromState || props._xScale,
				yScale = props.yScale || yScaleFromState;
	
			if (xScale === undefined) {
				var each = props.data[0];
				if (typeof each === 'object') {
					Object.keys(each).forEach((key) => {
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
		getXYAccessors(props) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			React.Children.forEach(props.children, (child) => {
				if (['ReStock.DataSeries']
						.indexOf(child.props.namespace) > -1) {
					if (child.props) {
						var xAccesor = props._stockScale ? props._indexAccessor : child.props.xAccessor
						accessor.xAccessor = xAccesor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			// yAccessors.push(overlayY);
	
			return accessor;
		},
		updateScales(props, xAccessors, yAccessors, xScale, yScale) {
			console.log('updateScales');
	
			var result = ScaleUtils.flattenData(props.data, xAccessors, yAccessors);
	
			if (props.xScale === undefined || props.xDomainUpdate) {
				xScale.range([0, Chart.getWidth(props)]);
				// if polylinear scale then set data
				if (xScale.data !== undefined) {
					xScale.data(props.data);
				} else {
					// else set the domain
					xScale.domain(d3.extent(result.xValues));
				}
			}
	
			if (props.yScale === undefined || props.yDomainUpdate) {
				yScale.range([Chart.getHeight(props), 0]);
				var domain = d3.extent(result.yValues);
				//var extraPadding = Math.abs(domain[0] - domain[1]) * 0.05;
				//yScale.domain([domain[0] - extraPadding, domain[1] + extraPadding]);
				yScale.domain(domain);
			}
			return {
				xScale: xScale.copy(),
				yScale: yScale.copy()
			};
		},*/
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				if (['ReStock.DataSeries', 'ReStock.ChartOverlay', 'ReStock.XAxis', 'ReStock.YAxis']
					.indexOf(child.props.namespace) < 0) return child;
	
				var newChild = child;
				newChild = React.addons.cloneWithProps(newChild, {
					_xScale: this.props._chartData.scales.xScale,
					_yScale: this.props._chartData.scales.yScale,
					data: this.props.data,
					_xAccessor: this.props._indexAccessor
				});
				newChild = this.updatePropsForDataSeries(newChild);
				if (newChild.props.xAccessor !== undefined && this.props._stockScale) {
					console.warn('xAccessor defined in DataSeries will override the indexAccessor of the polylinear scale. This might not be the right configuration');
					console.warn('Either remove the xAccessor configuration on the DataSeries or change the polyLinear=false in Translate');
				}
				return newChild;
			}.bind(this), this);
		},
		updatePropsForDataSeries:function(child) {
			if ("ReStock.DataSeries" === child.props.namespace) {
				// console.log(this.state.chartData.overlays);
				return React.addons.cloneWithProps(child, {
					//_showCurrent: this.props._showCurrent,
					//_mouseXY: this.props._mouseXY,
					//_currentItem: this.state.chartData.currentItem,
					//_lastItem: this.props._chartData.lastItem,
					//_firstItem: this.props._chartData.firstItem,
					/*_currentMouseXY: this.props._currentMouseXY,
					_currentXYValue: this.props._currentXYValue,*/
					_overlays: this.props._chartData.overlays,
					_updateMode: this.props._updateMode,
					_pan: this.props._pan,
					_isMainChart: this.props._isMainChart
				});
			}
			return child;
		},
		render:function() {
			var height = this.props._height;
			var width = this.props._width;
			var origin = typeof this.props.origin === 'function' ? this.props.origin(width, height) : this.props.origin;
			var transform = 'translate(' + origin[0] + ',' +  origin[1] + ')';
			if (this.props._pan && !this.props._isMainChart) {
			// if (this.props._pan) {
				return React.createElement("g", null)
			}
			// console.log(this.props._chartData);
			return (
				React.createElement("g", {transform: transform}, this.renderChildren())
			);
		}
	});
	
	module.exports = Chart;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// DataSeries has to hold OverlaySeries since DataSeries might define the xAccessor and it needs to be sent to OverlaySeries
	// Data series has to pass the current mouse position to the children so this has no benefit
	//     of PureRenderMixin
	
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(100),
		Utils = __webpack_require__(103),
		d3 = __webpack_require__(2),
		OverlayUtils = __webpack_require__(102),
		overlayColors = Utils.overlayColors;
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	var DataSeries = React.createClass({displayName: "DataSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			xAccessor: React.PropTypes.func,
			_xAccessor: React.PropTypes.func,
			yAccessor: React.PropTypes.func.isRequired,
	
			_xScale: React.PropTypes.func,
			_yScale: React.PropTypes.func,
	
			/*_currentItem: React.PropTypes.object,
			_lastItem: React.PropTypes.object,
			_firstItem: React.PropTypes.object,*/
			_overlays: React.PropTypes.array,
			_updateMode: React.PropTypes.object
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.DataSeries"
			};
		},
		renderChildren:function() {
			var newChildren = React.Children.map(this.props.children, function(child)  {
				var newChild = child;
	
				if (typeof child.type === 'string') return newChild;
	
				if (/Series$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_xScale: this.props._xScale,
						_yScale: this.props._yScale,
						_xAccessor: (this.props.xAccessor || this.props._xAccessor),
						_yAccessor: this.props.yAccessor,
						data: this.props.data
					});
					if (/OverlaySeries$/.test(newChild.props.namespace)) {
						var key = newChild.props.id;
						var overlay = getOverlayFromList(this.props._overlays, newChild.props.id);
						newChild = React.addons.cloneWithProps(newChild, {
							_overlay: overlay,
							_pan: this.props._pan,
							_isMainChart: this.props._isMainChart
						});
					}
				}
				return newChild;
			}.bind(this), this);
	
			return newChildren;
		},
		render:function() {
			//throw new Error();
			// console.log('rendering dataseries...');
			/*if (this.props._pan) {
				return <g></g>
			}*/
			return (
				React.createElement("g", {style: { "clipPath": "url(#chart-area-clip)"}}, this.renderChildren())
			);
		}
	});
	
	module.exports = DataSeries;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	var AreaSeries = React.createClass({displayName: "AreaSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.AreaSeries"
			}
		},
		getPath:function() {
			var props = this.props;
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						//nreturn false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y(function(d) { return props._yScale(props._yAccessor(d)); });
			return dataSeries(props.data);
		},
		getArea:function() {
			var props = this.props, height = props._yScale.range()[0];
			var areaSeries = d3.svg.area()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						// return false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y0(height - 1)
				.y1(function(d) { return props._yScale(props._yAccessor(d)); });
	
			return areaSeries(props.data);
		},
		render:function() {
			return (
				React.createElement("g", null, 
					React.createElement("path", {d: this.getPath(), className: "line line-stroke"}), 
					React.createElement("path", {d: this.getArea(), className: "area"})
				)
			);
		}
	});
	
	module.exports = AreaSeries;
	
	/*				
	
	*/

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var LineSeries = React.createClass({displayName: "LineSeries",
		// mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired,
			className: React.PropTypes.string,
			stroke: React.PropTypes.string
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.LineSeries",
				className: "line "
			}
		},
		getPath:function() {
			// console.log('LineSeries.getPath');
			var props = this.props;
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						//nreturn false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y(function(d) { return props._yScale(props._yAccessor(d)); });
			return dataSeries(props.data);
		},
		render:function() {
			var className = this.props.className.concat((this.props.stroke !== undefined) ? '' : ' line-stroke');
			// console.log('%s, %s, %s', className, this.props.className, this.props.stroke);
	
			return (
				React.createElement("g", null, 
					React.createElement("path", {d: this.getPath(), stroke: this.props.stroke, fill: "none", className: className})
				)
			);
		}
	});
	
	module.exports = LineSeries;
	
	/*				
	
	*/

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var CandlestickSeries = React.createClass({displayName: "CandlestickSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired
		},
		statics: {
			yAccessor: function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};}
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CandlestickSeries"
			}
		},
		getWicks:function() {
			var wicks = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx) {
						var ohlc = this.props._yAccessor(d);
	
						var x1 = Math.round(this.props._xScale(this.props._xAccessor(d))),
							y1 = this.props._yScale(ohlc.high),
							x2 = x1,
							y2 = this.props._yScale(ohlc.low),
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
					}, this);
			return wicks;
		},
		getCandles:function() {
			var width = this.props._xScale(this.props._xAccessor(this.props.data[this.props.data.length - 1]))
				- this.props._xScale(this.props._xAccessor(this.props.data[0]));
			var cw = (width / (this.props.data.length)) * 0.5;
			var candleWidth = Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw); // 
			var candles = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx) {
						var ohlc = this.props._yAccessor(d);
						var x = Math.round(this.props._xScale(this.props._xAccessor(d)))
								- (candleWidth === 1 ? 0 : 0.5 * candleWidth),
							y = this.props._yScale(Math.max(ohlc.open, ohlc.close)),
							height = Math.abs(this.props._yScale(ohlc.open) - this.props._yScale(ohlc.close)),
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
					}, this);
			return candles;
		},
		render:function() {
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
		}
	});
	
	module.exports = CandlestickSeries;
	
	/*				
	
	*/

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(100),
		Utils = __webpack_require__(103),
		OverlayUtils = __webpack_require__(102);
	
	var OverlaySeries = React.createClass({displayName: "OverlaySeries",
		//namespace: "ReStock.OverlaySeries",
		mixins: [PureRenderMixin],
		/*shouldComponentUpdate(nextProps, nextState) {
			return false;
		},*/
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			// _yAccessor: React.PropTypes.func.isRequired,
			_overlay: React.PropTypes.object.isRequired,
			data: React.PropTypes.array.isRequired,
			type: React.PropTypes.oneOf(['sma', 'ema']),
			options: React.PropTypes.object.isRequired,
			id: React.PropTypes.number.isRequired,
			stroke: React.PropTypes.string
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.OverlaySeries"
			};
		},/*
		componentWillMount: function () {
			var overlay = {
				id: newChild.props.id,
				yAccessor: OverlayUtils.getYAccessor(newChild.props),
				options: newChild.props.options,
				type: newChild.props.type,
				tooltipLabel: OverlayUtils.getToolTipLabel(newChild.props),
				stroke: newChild.stroke || overlayColors(newChild.props.id)
			};
		},*/
		componentWillUnMount:function() {
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			// unregister self
			this.props._overlay.set(null);
		},
		componentWillReceiveProps:function(nextProps) {
			// if things change reset the overlay TODO
	
			// if optinos have changed - update the options
			if (this.props.options !== nextProps.options) {
				console.log('updating props.....');
				// var overlay = this.props._overlays[key];
				this.props._overlay.set('options', nextProps.options);
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				var newChild = child;
	
				if (typeof child.type === 'string') return newChild;
	
				if (/Series$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_xScale: this.props._xScale,
						_yScale: this.props._yScale,
						_xAccessor: (this.props.xAccessor || this.props._xAccessor),
						_yAccessor: this.props._overlay.yAccessor,
						data: this.props.data,
						stroke: this.props._overlay.stroke,
						className: "overlay"
					});
				}
				return newChild;
			}.bind(this), this);
		},
		render:function() {
			// console.log('OverlaySeries.render');
			if (this.props._overlay.yAccessor === undefined) return null;
			if (this.props._pan && this.props._isMainChart) {
				return React.createElement("g", null)
			}
			return (
				React.createElement("g", null, this.renderChildren())
			);
		}
	});
	
	module.exports = OverlaySeries;
	
	//


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var HistogramSeries = React.createClass({displayName: "HistogramSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			baseAt: React.PropTypes.oneOfType([
						React.PropTypes.oneOf(['top', 'bottom', 'middle'])
						, React.PropTypes.number
					]).isRequired,
			direction: React.PropTypes.oneOf(['up', 'down']).isRequired,
			className: React.PropTypes.oneOfType([
						React.PropTypes.func, React.PropTypes.string
					]).isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.HistogramSeries",
				baseAt: 'bottom',
				direction: 'up',
				className: 'bar'
			}
		},
		getBars:function() {
			var base = this.props.baseAt === 'top'
						? 0
						: this.props.baseAt === 'bottom'
							? this.props._yScale.range()[0]
							: this.props.baseAt === 'middle'
								? (this.props._yScale.range()[0] + this.props._yScale.range()[1]) / 2
								: this.props.baseAt;
	
			var dir = this.props.direction === 'up' ? -1 : 1;
	
			var getClassName = function()  {return this.props.className;}.bind(this);
			if (typeof this.props.className === 'function') {
				getClassName = this.props.className;
			}
			var width = Math.abs(this.props._xScale.range()[0] - this.props._xScale.range()[1]);
			var barWidth = width / (this.props.data.length) * 0.5;
			var bars = this.props.data
					.filter(function(d)  {return this.props._yAccessor(d) !== undefined;}.bind(this) )
					.map(function(d, idx)  {
						var yValue = this.props._yAccessor(d);
						var x = Math.round(this.props._xScale(this.props._xAccessor(d))) - 0.5 * barWidth,
							className = getClassName(d) ,
							y, height;
						if (dir > 0) {
							y = base;
							height = this.props._yScale.range()[0] - this.props._yScale(yValue);
						} else {
							y = this.props._yScale(yValue);
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
		},
		render:function() {
			return (
				React.createElement("g", {className: "histogram"}, 
					this.getBars()
				)
			);
		}
	});
	
	module.exports = HistogramSeries;
	
	/*				
	
	*/

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var KagiSeries = React.createClass({displayName: "KagiSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired
		},
		statics: {
			yAccessor: function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};}
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.KagiSeries"
			}
		},
		render:function() {
			var kagiLine = new Array();
			var kagi = {};
			for (var i = 0; i < this.props.data.length; i++) {
				var d = this.props.data[i];
				if (d.close === undefined) continue;
				if (kagi.type === undefined) kagi.type = d.startAs;
				if (kagi.plot === undefined) kagi.plot = new Array();
				var idx = this.props._xAccessor(d);
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
	
			var paths = kagiLine.map(function (each, i) {
	
				var dataSeries = d3.svg.line()
					.x(function(d) { return props._xScale(d[0]); })
					.y(function(d) { return props._yScale(d[1]); })
					.interpolate("step-before")
					;
				return (React.createElement("path", {key: i, d: dataSeries(each.plot), className: each.type}))
			});
			return (
				React.createElement("g", null, 
					paths
				)
			);
		}
	});
	
	module.exports = KagiSeries;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var PointAndFigureSeries = React.createClass({displayName: "PointAndFigureSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired
		},
		statics: {
			yAccessor: function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};}
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.PointAndFigureSeries"
			}
		},
		handleClick:function(idx) {
			console.log(this.props.data[idx]);
		},
		render:function() {
			var width = this.props._xScale(this.props._xAccessor(this.props.data[this.props.data.length - 1]))
				- this.props._xScale(this.props._xAccessor(this.props.data[0]));
	
			var columnWidth = (width / (this.props.data.length - 1));
	
			var anyBox, j = 0;
			while (anyBox === undefined) {
				if (this.props.data[j].close !== undefined) {
					anyBox= this.props.data[j].boxes[0];
				}
				j++;
			}
	
			var props = this.props;
			var boxHeight = Math.abs(props._yScale(anyBox.open) - props._yScale(anyBox.close));
	
			// console.log(columnWidth, boxHeight);
			var columns = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx)  {
						var ohlc = d;
						var boxes = d.boxes.map(function (box, i) {
							var boxshape;
							if (d.direction > 0) {
								boxshape = (
									React.createElement("g", {key: idx + "-" + i}, 
										React.createElement("line", {className: "point_figure_up", x1: 0, y1: props._yScale(box.open), x2: columnWidth, y2: props._yScale(box.close)}), 
										React.createElement("line", {className: "point_figure_up", x1: 0, y1: props._yScale(box.close), x2: columnWidth, y2: props._yScale(box.open)})
									)
									);
							} else {
								boxshape = (
									React.createElement("ellipse", {key: idx + "-" + i, className: "point_figure_down", cx: columnWidth/2, cy: props._yScale((box.open + box.close) / 2), 
										rx: columnWidth/2, ry: boxHeight / 2})
									);
							}
							return boxshape;
						});
						var debug = false
							? React.createElement("rect", {x: 0, y: 0, height: 980, width: columnWidth, style: { opacity: 0.1}, onClick: this.handleClick.bind(this, idx)})
							: null;
						var col = (React.createElement("g", {key: idx, 
										transform: "translate(" + (props._xScale(this.props._xAccessor(d)) - (columnWidth / 2)) + ", 0)"}, 
										boxes, 
										debug
									));
						return col;
					}.bind(this), this);
	
			return (
				React.createElement("g", null, 
					columns
				)
			);
		}
	});
	
	module.exports = PointAndFigureSeries;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(100);
	
	
	var RenkoSeries = React.createClass({displayName: "RenkoSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired
		},
		statics: {
			yAccessor: function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};}
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.RenkoSeries"
			}
		},
		handleClick:function(idx) {
			console.log(this.props.data[idx]);
		},
		render:function() {
			var width = this.props._xScale(this.props._xAccessor(this.props.data[this.props.data.length - 1]))
				- this.props._xScale(this.props._xAccessor(this.props.data[0]));
	
			var candleWidth = (width / (this.props.data.length - 1));
	
			var candles = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx)  {
						var ohlc = this.props._yAccessor(d);
						var x = this.props._xScale(this.props._xAccessor(d)) - 0.5 * candleWidth,
							y = this.props._yScale(Math.max(ohlc.open, ohlc.close)),
							height = Math.abs(this.props._yScale(ohlc.open) - this.props._yScale(ohlc.close)),
							className = (ohlc.open <= ohlc.close) ? 'up' : 'down';
	
						return React.createElement("rect", {key: idx, className: className, 
									x: x, 
									y: y, 
									width: candleWidth, 
									height: height})
					}.bind(this));
			var wicks = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx)  {
						var ohlc = this.props._yAccessor(d);
	
						var x1 = this.props._xScale(this.props._xAccessor(d)),
							y1 = this.props._yScale(ohlc.high),
							x2 = x1,
							y2 = this.props._yScale(ohlc.low),
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
		}
	});
	
	module.exports = RenkoSeries;
	/*
					<g className="wick">
						{wicks}
					</g>
	*/

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(103)
	
	var EventCapture = React.createClass({displayName: "EventCapture",
		propTypes: {
			mainChart: React.PropTypes.number.isRequired,
			mouseMove: React.PropTypes.bool.isRequired,
			zoom: React.PropTypes.bool.isRequired,
			zoomMultiplier: React.PropTypes.number.isRequired,
			pan: React.PropTypes.bool.isRequired,
			panSpeedMultiplier: React.PropTypes.number.isRequired,
			defaultFocus: React.PropTypes.bool.isRequired,
	
			_chartData: React.PropTypes.object.isRequired,
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_eventStore: React.PropTypes.object.isRequired,
			_zoomEventStore: React.PropTypes.object
		},
		getInitialState:function() {
			return {
				dragOrigin: [0, 0],
				defaultFocus: false
			};
		},
		componentWillMount:function() {
			this.setState({
				className: this.props.className,
				inFocus: this.props.defaultFocus
			});
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.EventCapture"
				, mouseMove: false
				, zoom: false
				, zoomMultiplier: 1
				, pan: false
				, panSpeedMultiplier: 1
				, className: "crosshair"
				, defaultFocus: false
			}
		},
		toggleFocus:function() {
			this.setFocus(!this.state.defaultFocus);
		},
		setFocus:function(focus) {
			this.setState({
				defaultFocus: focus
			});
		},
		handleEnter:function() {
			if (this.props._eventStore) {
				// console.log('in');
				this.props._eventStore.get().mouseOver.set({'value': true});
			}
		},
		handleLeave:function() {
			if (this.props._eventStore) {
				// console.log('out');
				var eventData = this.props._eventStore.get();
				this.props._eventStore.get().mouseOver.set({'value': false});
				this.props._eventStore.get().set({ pan: false });
				this.setState({
					dragging: false,
					dragOrigin: [0, 0],
					className: this.props.className
				})
			}
		},
		handleWheel:function(e) {
			if (this.props.zoom
					&& this.props._eventStore
					//&& this.props._eventStore.get().inFocus.value
					&& this.state.inFocus
					&& this.props._zoomEventStore) {
				e.stopPropagation();
				e.preventDefault();
				var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
				//console.log(zoomDir);
	
				this.props._zoomEventStore.get().set({ zoom : zoomDir });
			}
		},
		handleMouseMove:function(e) {
			if (this.props._eventStore && this.props.mouseMove) {
				var eventData = this.props._eventStore.get();
				var newPos = Utils.mousePosition(e);
				//var oldPos = eventData.mouseXY;
				var startPos = this.state.dragOrigin;
				if (! (startPos[0] === newPos[0] && startPos[1] === newPos[1])) {
					if (this.state.dragging) {
						eventData = eventData.set({
							dx: (newPos[0] - startPos[0]) * this.props.panSpeedMultiplier,
							dragOriginDomain: this.state.dragOriginDomain
						});
	
					}
					eventData = eventData.set( { mouseXY: newPos } );
					eventData = eventData.set({ pan: this.state.dragging });
					// console.log('eventData....', eventData);
				}
			}
		},
		handleMouseDown:function(e) {
			if (this.props._eventStore) {
				// this.props._eventStore.get().inFocus.set({'value': true});
				var inFocus = true
				if (this.props.pan && this.props._zoomEventStore) {
					this.setState({
						dragging: true,
						dragOrigin: Utils.mousePosition(e),
						dragOriginDomain: this.props._chartData.scales.xScale.domain(),
						className: "grabbing",
						inFocus: inFocus
					})
				} else {
					this.setState({
						inFocus: inFocus
					})
				}
			}
			e.preventDefault();
		},
		handleMouseUp:function(e) {
			if (this.props.pan && this.props._zoomEventStore) {
	
				this.props._eventStore.get().set({ pan: false })
				this.setState({
					dragging: false,
					dragOrigin: [0, 0],
					className: this.props.className
				})
			}
			e.preventDefault();
		},
		render:function() {
			return (
				React.createElement("rect", {
					className: this.state.className, 
					width: this.props._width, height: this.props._height, style: {opacity: 0}, 
					onMouseEnter: this.handleEnter, 
					onMouseLeave: this.handleLeave, 
					onMouseMove: this.handleMouseMove, 
					onMouseDown: this.handleMouseDown, 
					onMouseUp: this.handleMouseUp, 
					onWheel: this.handleWheel}
					)
			);
		}
	});
	
	module.exports = EventCapture;
	
	/*				
	
	*/

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(104)
	var Utils = __webpack_require__(103)
	
	// Should not use xScale and yScale here as MouseCoordinate is common across all charts
	// if it is made to be inside a Chart another Chart might be displayed over it
	var MouseCoordinates = React.createClass({displayName: "MouseCoordinates",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_show: React.PropTypes.bool.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_chartData: React.PropTypes.object.isRequired,
			_currentItem: React.PropTypes.object.isRequired,
	
			forChart: React.PropTypes.number.isRequired, 
			xDisplayFormat: React.PropTypes.func.isRequired,
			yDisplayFormat: React.PropTypes.func.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._currentItem != this.props._currentItem
					|| nextProps._mouseXY !== this.props._mouseXY
					|| nextProps._show !== this.props._show
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.MouseCoordinates",
				_show: false,
				snapX: true,
				xDisplayFormat: Utils.displayDateFormat,
				yDisplayFormat: Utils.displayNumberFormat,
			}
		},
		renderChildren:function() {
			var chartData = this.props._chartData;
			var item = this.props._currentItem.data;
			
	
			var xValue = chartData.accessors.xAccessor(item);
			var xDisplayValue = this.props._dateAccessor === undefined
				? xValue
				: this.props._dateAccessor(item);
	
			var yValue = chartData.scales.yScale.invert(this.props._mouseXY[1]);
	
			if (xValue === undefined || yValue === undefined) return null;
			var x = this.props.snapX ? Math.round(chartData.scales.xScale(xValue)) : this.props._mouseXY[0];
			var y = this.props._mouseXY[1];
	
			//console.log(xValue, this.props.xDisplayFormat(xValue));
			//console.log(yValue, this.props.yDisplayFormat(yValue));
	
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				return React.addons.cloneWithProps(newChild, {
					_width: this.props._width
					, _height: this.props._height
					, _mouseXY: [x, y]
					, _xDisplayValue: this.props.xDisplayFormat(xDisplayValue)
					, _yDisplayValue: this.props.yDisplayFormat(yValue)
				});
			}.bind(this), this);
		},
		render:function() {
			var children = null;
			if (this.props._show) {
				children = this.renderChildren();
			};
	
			return (
				React.createElement("g", {className: this.props._show ? 'show' : 'hide'}, 
					children
				)
			);
		}
	});
	
	module.exports = MouseCoordinates;
	
	
	/*
	
	
	
	*/

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(104)
	var Utils = __webpack_require__(103)
	
	var CrossHair = React.createClass({displayName: "CrossHair",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_xDisplayValue: React.PropTypes.string.isRequired,
			_yDisplayValue: React.PropTypes.string.isRequired,
			yAxisPad: React.PropTypes.number.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._mouseXY !== this.props._mouseXY
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CrossHair",
				yAxisPad: 5
			}
		},
		render:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "horizontal", 
						className: "horizontal", 
						show: true, 
						x1: 0, y1: this.props._mouseXY[1], 
						x2: this.props._width + this.props.yAxisPad, y2: this.props._mouseXY[1], 
						coordinate: this.props._yDisplayValue, 
						edgeAt: this.props._width + this.props.yAxisPad, 
						orient: "right"}
						), 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props._mouseXY[0], y1: 0, 
						x2: this.props._mouseXY[0], y2: this.props._height, 
						coordinate: this.props._xDisplayValue, 
						edgeAt: this.props._height, 
						orient: "bottom"}
						)
				)
			);
		}
	});
	
	module.exports = CrossHair;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(104)
	var Utils = __webpack_require__(103)
	
	var VerticalMousePointer = React.createClass({displayName: "VerticalMousePointer",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_xDisplayValue: React.PropTypes.string.isRequired,
			_yDisplayValue: React.PropTypes.string.isRequired,
			yAxisPad: React.PropTypes.number.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._mouseXY !== this.props._mouseXY
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.VerticalMousePointer",
				yAxisPad: 10
			}
		},
		render:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props._mouseXY[0], y1: 0, 
						x2: this.props._mouseXY[0], y2: this.props._height, 
						coordinate: this.props._xDisplayValue, 
						edgeAt: this.props._height, 
						orient: "bottom"}
						)
					
				)
			);
		}
	});
	
	module.exports = VerticalMousePointer;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(100),
		Utils = __webpack_require__(103);
	
	var CurrentCoordinate = React.createClass({displayName: "CurrentCoordinate",
		//namespace: "ReStock.DataSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			forChart: React.PropTypes.number.isRequired,
			forOverlay: React.PropTypes.number,
			yAccessor: React.PropTypes.func,
			r: React.PropTypes.number.isRequired,
			className: React.PropTypes.string,
	
			_show: React.PropTypes.bool.isRequired,
			_chartData: React.PropTypes.object.isRequired,
			_currentItem: React.PropTypes.object.isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CurrentCoordinate",
				r: 3
			};
		},
		render:function() {
	
			var chartData = this.props._chartData;
			var item = this.props._currentItem.data;
			var fill = 'black';
	
			if (! this.props._show || item === undefined) return null;
			var yAccessor =  this.props.yAccessor || chartData.accessors.yAccessor;
	
			if (this.props.forOverlay !== undefined) {
				var overlays = chartData.overlays
					.filter(function(each)  {return each.id === this.props.forOverlay;}.bind(this));
	
				if (overlays.length != 1) {
					console.warn('Unique overlay with id={%s} not found', this.props.forOverlay);
					throw new Error('Unique overlay not found');
				}
				fill = overlays[0].stroke;
				yAccessor = overlays[0].yAccessor;
			}
	
			var xValue = chartData.accessors.xAccessor(item);
			var yValue = yAccessor(item);
	
			if (yValue === undefined) return null;
	
			var x = Math.round(chartData.scales.xScale(xValue)) + chartData.origin[0];
			var y = Math.round(chartData.scales.yScale(yValue)) + chartData.origin[1];
	
			return (
				React.createElement("circle", {className: this.props.className, cx: x, cy: y, r: this.props.r, fill: fill})
			);
		}
	});
	
	module.exports = CurrentCoordinate;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var TooltipContainer = React.createClass({displayName: "TooltipContainer",
		propTypes: {
			_currentItems: React.PropTypes.array.isRequired,
			_charts: React.PropTypes.array.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._charts !== this.props._charts || nextProps._currentItems !== this.props._currentItems;
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.TooltipContainer"
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				var chart = this.props._charts.filter(function(chart)  {return chart.id === newChild.props.forChart;})[0];
				var currentItem = this.props._currentItems.filter(function(item)  {return item.id === newChild.props.forChart;})[0];
				newChild = React.addons.cloneWithProps(newChild, {
					_currentItem: currentItem.data
				});
				if (/MovingAverageTooltip$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_overlays: chart.overlays
					});
				}
				return newChild;
			}.bind(this));
		},
		render:function() {
			return (
				React.createElement("g", {className: "toottip-hover"}, 
					this.renderChildren()
				)
			);
		}
	});
	
	module.exports = TooltipContainer;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(103)
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = React.createClass({displayName: "OHLCTooltip",
		propTypes: {
			_currentItem: React.PropTypes.object.isRequired,
			accessor: React.PropTypes.func.isRequired,
			xDisplayFormat: React.PropTypes.func.isRequired,
			origin: React.PropTypes.array.isRequired,
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return (nextProps._currentItem !== this.props._currentItem);
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.OHLCTooltip",
				accessor: function(d)  {return {date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume}},
				xDisplayFormat: Utils.displayDateFormat,
				origin: [0, 0]
			}
		},
		render:function() {
			var displayDate, fromDate, toDate, open, high, low, close, volume;
	
			displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
			var item = this.props.accessor(this.props._currentItem);
	
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
		}
	});
	
	module.exports = OHLCTooltip;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var EdgeContainer = React.createClass({displayName: "EdgeContainer",
		propTypes: {
			_currentItems: React.PropTypes.array.isRequired,
			_charts: React.PropTypes.array.isRequired,
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.EdgeContainer",
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				if (/EdgeIndicator$/.test(newChild.props.namespace)) {
					var chart = this.props._charts.filter(function(chart)  {return chart.id === newChild.props.forChart;})[0];
					var currentItem = this.props._currentItems.filter(function(item)  {return item.id === newChild.props.forChart;})[0];
					newChild = React.addons.cloneWithProps(newChild, {
						_width: this.props._width,
						_chart: chart,
						_currentItem: currentItem
					});
				}
				return newChild;
			}.bind(this));
		},
		render:function() {
			return React.createElement("g", null, this.renderChildren())
		}
	});
	
	module.exports = EdgeContainer;
	


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(103)
	
	var SingleMAToolTip = React.createClass({displayName: "SingleMAToolTip",
		propTypes: {
			origin: React.PropTypes.array.isRequired,
			color: React.PropTypes.string.isRequired,
			displayName: React.PropTypes.string.isRequired,
			value: React.PropTypes.string.isRequired,
			onClick: React.PropTypes.func
		},
		getDefaultProps:function() {
	
		},
		handleClick:function(overlay) {
			if (this.props.onClick) {
				this.props.onClick(overlay);
			}
		},
		render:function() {
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
		}
	});
	
	
	var MovingAverageTooltip = React.createClass({displayName: "MovingAverageTooltip",
		propTypes: {
			_currentItem: React.PropTypes.object.isRequired,
			_overlays: React.PropTypes.array.isRequired,
			displayFormat: React.PropTypes.func.isRequired,
			origin: React.PropTypes.array.isRequired,
			onClick: React.PropTypes.func
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.MovingAverageTooltip",
				displayFormat: Utils.displayNumberFormat,
				origin: [0, 10],
				width: 65
			}
		},
		render:function() {
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")", className: "ma-container"}, 
					this.props._overlays.map(function(eachOverlay, idx)  {
						var yValue = eachOverlay.yAccessor(this.props._currentItem);
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
		}
	});
	
	module.exports = MovingAverageTooltip;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(103)
	var EdgeCoordinate = __webpack_require__(104)
	
	
	var EdgeIndicator = React.createClass({displayName: "EdgeIndicator",
		propTypes: {
			type: React.PropTypes.oneOf(['horizontal']).isRequired,
			className: React.PropTypes.string,
			itemType: React.PropTypes.oneOf(['first', 'last', 'current']).isRequired,
			orient: React.PropTypes.oneOf(['left', 'right']),
			edgeAt: React.PropTypes.oneOf(['left', 'right']),
	
			forChart: React.PropTypes.number.isRequired,
			forOverlay: React.PropTypes.number, // undefined means main Data series of that chart
	
			displayFormat: React.PropTypes.func.isRequired,
	
			_width: React.PropTypes.number,
			_currentItem: React.PropTypes.object.isRequired,
			_chart: React.PropTypes.object.isRequired,
		},
		getDefaultProps:function() {
			return {
				type: 'horizontal',
				orient: 'left',
				edgeAt: 'left',
				displayFormat: Utils.displayNumberFormat,
				yAxisPad: 5,
				namespace: "ReStock.EdgeIndicator"
			};
		},/*
		shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.itemType === 'current') {
				return 
			} else {
	
			}
		},*/
		renderEdge:function() {
			var edge = null, item, yAccessor;
			if (this.props.forOverlay !== undefined
					&& this.props._chart.overlays.length > 0
					&& this.props._chart.overlayValues.length > 0) {
	
				var overlay = this.props._chart.overlays
					.filter(function(eachOverlay)  {return eachOverlay.id === this.props.forOverlay;}.bind(this));
				var overlayValue = this.props._chart.overlayValues
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
						: this.props._currentItem;
				yAccessor = overlay[0].yAccessor;
	
				if (item !== undefined) {
					var yValue = yAccessor(item), xValue = this.props._chart.accessors.xAccessor(item);
					var x1 = Math.round(this.props._chart.scales.xScale(xValue)), y1 = Math.round(this.props._chart.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.props._width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							fill: overlay[0].stroke, 
							show: true, 
							x1: x1 + this.props._chart.origin[0], y1: y1 + this.props._chart.origin[1], 
							x2: edgeX + this.props._chart.origin[0], y2: y1 + this.props._chart.origin[1], 
							coordinate: this.props.displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			} else if (this.props.forOverlay === undefined) {
				item = this.props.itemType === 'first'
					? this.props._chart.firstItem
					: this.props.itemType === 'last'
						? this.props._chart.lastItem
						: this.props._currentItem;
				yAccessor = this.props._chart.accessors.yAccessor;
	
				if (item !== undefined && yAccessor !== null) {
					var yValue = yAccessor(item);
					var xValue = this.props._chart.accessors.xAccessor(item);
	
					var x1 = Math.round(this.props._chart.scales.xScale(xValue)), y1 = Math.round(this.props._chart.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.props._width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							show: true, 
							x1: x1 + this.props._chart.origin[0], y1: y1 + this.props._chart.origin[1], 
							x2: edgeX + this.props._chart.origin[0], y2: y1 + this.props._chart.origin[1], 
							coordinate: this.props.displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			}
			return edge;
		},
		render:function() {
			return this.renderEdge();
		}
	});
	
	module.exports = EdgeIndicator;
	
	/*
	<EdgeCoordinate
					type={this.props.type}
					className={this.props.className}
					show={true}
					x1={this.props._x1} y1={this.props._y1}
					x2={this.props._width + this.props.yAxisPad} y2={this.props._mouseXY[1]}
					coordinate={this.props._yDisplayValue}
					edgeAt={this.props._width + this.props.yAxisPad}
					orient="right"
					/>
	*/

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var EventCapture = __webpack_require__(85);
	var MouseCoordinates = __webpack_require__(86);
	var Utils = __webpack_require__(103);
	
	var Freezer = __webpack_require__(107);
	// Let's create a freezer store
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	var EventCaptureMixin = {
		doesContainChart:function() {
			var children = Array.isArray(this.props.children)
				? this.props.children
				: [this.props.children];
	
			return children
				.filter(function(child)  {return /Chart$/.test(child.props.namespace);})
				.length > 0;
		},
		componentWillMount:function() {
			var passThroughProps = {};
			if (this.isDataDransform && this.isDataDransform()) {
				passThroughProps = this.transformData(this.props);
			}
	
			if (this.doesContainChart()) {
				// console.log('EventCaptureMixin.componentWillMount', this.state);
				var eventStore = new Freezer({
					mouseXY: [0, 0],
					mouseOver: { value: false },
					inFocus: { value: true } // TODO change to false later
				});
				var zoomEventStore = new Freezer({
					zoom: 0
				});
				var chartStore  = new Freezer({
					charts: [],
					updateMode: { immediate : true }
				});
	
				var currentItemStore = new Freezer({
					currentItems: [],
					viewPortXRange: [],
					viewPortXDelta: 30
				});
				var fullData, data, stockScale = passThroughProps._stockScale || this.props._stockScale;
				if (passThroughProps && stockScale) {
					currentItemStore.get().set({ interval : 'D' });
	
					//fullData = passThroughProps.data[currentItemStore.get().interval];
					fullData = passThroughProps.data;
					data = fullData[currentItemStore.get().interval];
				} else {
					fullData = this.props.data;
					data = fullData;
				}
	
				React.Children.forEach(this.props.children, function(child)  {
					if ("ReStock.Chart" === child.props.namespace) {
						var chartProps = child.props;
	
						var dimensions = this.getDimensions(this.props, chartProps);
						var threshold = dimensions.width / 4;
						if (data.length > threshold) {
							data = data.slice(data.length - threshold);
						}
	
						//var charts = chartStore.get().charts.push(this.createChartData(child.props.id));
						//var _chartData = charts[charts.length - 1];
						var _chartData = this.getChartDataFor(this.props, chartProps, data, fullData, passThroughProps);
						_chartData.id = child.props.id;
	
	
						chartStore.get().charts.push(_chartData);
					}
				}.bind(this));
	
				var stores = {
						eventStore: eventStore,
						chartStore: chartStore,
						currentItemStore: currentItemStore,
						zoomEventStore: zoomEventStore,
						fullData: fullData,
						data: data,
						passThroughProps: passThroughProps
					};
	
				// console.log(Object.keys(stores));
				// console.log(stores);
				this.setState(stores);
			} else {
				this.setState({
					passThroughProps: passThroughProps
				});
			}
		},
		getEventStore:function() {
			return this.state.eventStore;
		},
		updateEventStore:function(eventStore, zoomEventStore) {
			this.unListen();
	
			var newState = {
				eventStore: eventStore,
				chartStore: this.state.chartStore,
				currentItemStore: this.state.currentItemStore,
				zoomEventStore: zoomEventStore || this.state.zoomEventStore
			};
			this.setState(newState, function()  { this.listen(newState) }.bind(this));
		},
		componentWillUnmount:function() {
			if (this.doesContainChart()) {
				this.unListen();
			}
		},
		unListen:function() {
			if (this.state.eventStore !== undefined) {
				this.state.eventStore.off('update', this.eventListener);
			}
			if (this.state.chartStore !== undefined) {
				this.state.chartStore.off('update', this.dataListener);
			}
			if (this.state.zoomEventStore !== undefined) {
				this.state.zoomEventStore.off('update', this.zoomEventListener);
			}
		},
		eventListener:function(d) {
			//console.log('events updated...', d);
			//this.state.chartStore.get().currentItem.set({value : new Date().getTime()});
			if (this.state.chartStore.get().updateMode.immediate) {
				this.state.chartStore.get().charts.forEach(function(chart)  {
					this.updateCurrentItemForChart(chart);
				}.bind(this));
				if (this.state.eventStore.get().pan) {
					requestAnimationFrame(function()  {
	
						var mainChart = this.state.currentItemStore.get().mainChart;
						var chart = this.getChartForId(mainChart);
						//var domain = chart.scales.xScale.domain();
						var domain = this.state.eventStore.get().dragOriginDomain;
						var domainRange = domain[1] - domain[0];
	
						// domainRange = domain[1] - domain[0];
						// get width of mainChart
						var fullData = this.state.fullData[this.state.currentItemStore.get().interval];
						var last = fullData[fullData.length - 1];
						var first = fullData[0];
	
						var domainStart = Math.round(getLongValue(domain[0]) - this.state.eventStore.get().dx/chart.width * domainRange)
						if (domainStart < getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3)) {
							domainStart = getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3)
						} else {
							domainStart = Math.min(getLongValue(chart.accessors.xAccessor(last))
								+ Math.ceil(domainRange/3), domainStart + domainRange) - domainRange;
						}
	
						/*console.log('pan in progress...', this.state.eventStore.get().dx, domain[0], domainRange
							, new Date(domainStart));*/
	
						var domainL = domainStart, domainR = domainStart + domainRange
						if (domain[0] instanceof Date) {
							domainL = new Date(domainL);
							domainR = new Date(domainR);
						}
	
						this.state.currentItemStore.get().viewPortXRange.set([domainL, domainR]);
	
						var data = this.calculateViewableData();
	
						// update the viewPortXRange
						// this.state.currentItemStore.get().viewPortXRange
	
						React.Children.forEach(this.props.children, function(child)  {
							if ("ReStock.Chart" === child.props.namespace) {
								var _chartData = this.getChartForId(child.props.id);
	
								_chartData = this.updateChartDataFor(_chartData, data.data)
	
								_chartData.scales.xScale.domain([domainL, domainR]);
								//_chartData.scales.xScale.domain(this.state.currentItemStore.get().viewPortXRange);
							}
						}.bind(this))
	/*					var thisChart = this.getChartForId(mainChart);
						thisChart = this.updateChartDataFor(thisChart, data)
						thisChart.scales.xScale.domain([domainL, domainR]);
	*/					//var newXScale = this.updateXScaleDomain(chart.scales.xScale, [domainL, domainR])
	
						//chart.scales.set({ xScale: newXScale });
	
						/*this.setState({
							data: data
						})*/
						this.setState({
							data: data.data
						})
						// this.forceUpdate();
					}.bind(this));
				} else {
					/*requestAnimationFrame(() => {
						this.forceUpdate();
					});*/
					this.forceUpdate();
				}
			}
		},
		componentWillReceiveProps:function(nextProps) {
			if (this.doesContainChart()) {
				/*console.log('EventCaptureMixin.componentWillReceiveProps');
				console.log('EventCaptureMixin.componentWillReceiveProps');
				console.log('EventCaptureMixin.componentWillReceiveProps');*/
	
				var passThroughProps;
				if (this.isDataDransform && this.isDataDransform()) {
					passThroughProps = this.transformData(this.props);
				}
	
				React.Children.forEach(nextProps.children, function(child)  {
					if ("ReStock.Chart" === child.props.namespace) {
	
	
						var chartProps = child.props;
	
						var _chartData = this.getChartDataFor(nextProps, chartProps, nextProps.data, nextProps.data, passThroughProps);
						_chartData.id = child.props.id;
	
						var chartData = this.getChartForId(child.props.id);
						chartData.reset(_chartData);
					}
				}.bind(this))
	
				//this.calculateViewableData();
			}
		},
		calculateViewableData:function() {
			var xRange = this.state.currentItemStore.get().viewPortXRange;
			var fullData = this.getFullData()[this.state.currentItemStore.get().interval];
			var data = this.state.data;
	
			if (xRange.length > 0) {
				var mainChart = this.state.currentItemStore.get().mainChart,
					chart = this.getChartForId(mainChart);
	
				var leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
				var rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
				// console.log('whoa whoa whoa');
				var currentInterval = this.state.currentItemStore.get().interval;
				var filteredData = fullData.slice(leftX.left, rightX.right);
				if (this.state.passThroughProps && this.state.passThroughProps._stockScale
						&& filteredData.length > chart.width / 3) {
					if (this.state.passThroughProps._multiInterval && currentInterval ==='D' ) {
						var interval = 'W';
						this.state.currentItemStore.get().set({ interval : interval });
						fullData = this.state.fullData[interval];
	
						leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
						rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
						filteredData = fullData.slice(leftX.left, rightX.right);
	
					} else if (this.state.passThroughProps._multiInterval && currentInterval ==='W' ) {
						var interval = 'M';
						this.state.currentItemStore.get().set({ interval : interval });
						fullData = this.state.fullData[interval];
	
						leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
						rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
						filteredData = fullData.slice(leftX.left, rightX.right);
					} else {
						var l = getLongValue(chart.accessors.xAccessor(this.state.data[0]));
						var r = getLongValue(chart.accessors.xAccessor(this.state.data[this.state.data.length - 1]));
						this.state.currentItemStore.get().set({ viewPortXRange : [l, r] });
						return {
							data: this.state.data
						};
					}
				} else if (this.state.passThroughProps && this.state.passThroughProps._stockScale
						&& (currentInterval === 'W' || currentInterval === 'M')) {
					// TODO if zoom in, try to go from M to W or W to D if possible
				} else if (filteredData.length / chart.width < .03) {
					var l = getLongValue(chart.accessors.xAccessor(this.state.data[0]));
					var r = getLongValue(chart.accessors.xAccessor(this.state.data[this.state.data.length - 1]));
					this.state.currentItemStore.get().set({ viewPortXRange : [l, r] });
	
					return {
						data: this.state.data
					};
				}
				return {
					data: filteredData
				};
			}
			return {
				data: data
			}
		},
		zoomEventListener:function(d) {
			//console.log('events updated...', d);
			//this.state.chartStore.get().currentItem.set({value : new Date().getTime()});
			if (this.state.chartStore.get().updateMode.immediate) {
	
	
				var zoomData = this.state.zoomEventStore.get(),
					zoomDir = zoomData.zoom,
					mainChart = this.state.currentItemStore.get().mainChart,
					chart = this.getChartForId(mainChart);
	
				// console.log('************UPDATING NOW**************- zoomDir = ', zoomDir, mainChart);
	
				this.updateCurrentItemForChart(chart);
	
				var item = this.getCurrentItemForChart(mainChart).data,
					domain = chart.scales.xScale.domain(),
					centerX = chart.accessors.xAccessor(item),
					leftX = centerX - domain[0],
					rightX = domain[1] - centerX,
					zoom = Math.pow(1 + Math.abs(zoomDir)/2 , zoomDir),
					domainL = (getLongValue(centerX) - ( leftX * zoom)),
					domainR = (getLongValue(centerX) + (rightX * zoom));
	
				var domainRange = Math.abs(domain[1] - domain[0]);
				var fullData = this.state.fullData[this.state.currentItemStore.get().interval];
				var last = fullData[fullData.length - 1];
				var first = fullData[0];
	
				domainL = Math.max(getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3), domainL)
				domainR = Math.min(getLongValue(chart.accessors.xAccessor(last)) + Math.floor(domainRange/3), domainR)
	
				if (centerX instanceof Date) {
					domainL = new Date(domainL);
					domainR = new Date(domainR);
				}
	
	
	
	
				this.state.currentItemStore.get().viewPortXRange.set([domainL, domainR]);
	
				requestAnimationFrame(function()  {
					var data = this.calculateViewableData();
					// console.log(domainL, domainR);
					var passThroughProps = this.state.passThroughProps;
	
					React.Children.forEach(this.props.children, function(child)  {
						if ("ReStock.Chart" === child.props.namespace) {
	/*
	
	
	*/
							var _chartData = this.getChartForId(child.props.id);
	
							_chartData = this.updateChartDataFor(_chartData, data.data)
							_chartData.scales.xScale.domain(this.state.currentItemStore.get().viewPortXRange);
						}
					}.bind(this))
	
	
					this.setState({
						data: data.data
					})
				}.bind(this));
	
				// find mainChart
				// get new domainL & R
				// if (this.props.changeIntervalIfNeeded) is present
				//		call this.props.changeIntervalIfNeeded
				//		if ^ returns false
				//			requestAnimationFrame and send down new data
				//			update currentItem
				//		if true
				//			update currentItem
				// else
				//		requestAnimationFrame and send down new data
				//		update currentItem
	
			}
		},
		dataListener:function(d) {
			// console.log('data updated from ', this.state.chartStore.get().currentItem, ' to ', d);
			if (this.state.chartStore.get().updateMode.immediate) {
				requestAnimationFrame(function () {
					// console.log('************UPDATING NOW**************');
					// console.log(this.state.chartStore.get().charts[0].overlays);
					this.forceUpdate();
				}.bind(this));
			}
		},
		componentDidMount:function() {
			if (this.doesContainChart()) {
				// this.state.chartStore.get().updateMode.set({ immediate: true });
				this.listen(this.state);
			}
		},
		componentDidUpdate:function() {
			if (this.doesContainChart()) {
				if (! this.state.chartStore.get().updateMode.immediate)
					this.state.chartStore.get().updateMode.set({ immediate: true });
			}
		},
		listen:function(stores) {
			// console.log('begining to listen...', stores);
	
			stores.eventStore.on('update', this.eventListener);
			// stores.chartStore.on('update', this.dataListener);
			stores.zoomEventStore.on('update', this.zoomEventListener);
			// stores.chartStore.get().currentItem.getListener().on('update', this.dataListener);
		},
		updatePropsForEventCapture:function(child) {
			if ("ReStock.EventCapture" === child.props.namespace) {
				// find mainChart and add to zoomeventstores
				if (this.state.currentItemStore.get().mainChart === undefined
					|| this.state.currentItemStore.get().mainChart !== child.props.mainChart) {
	
					this.state.currentItemStore.get().set({ mainChart: child.props.mainChart });
				}
				return React.addons.cloneWithProps(child, {
					_eventStore: this.state.eventStore,
					_zoomEventStore: this.state.zoomEventStore,
					_chartData: this.getChartForId(child.props.mainChart)
				}); 
			}
			return child;
		},
		updatePropsForCurrentCoordinate:function(child) {
			if ("ReStock.CurrentCoordinate" === child.props.namespace) {
				var chart = this.getChartForId(child.props.forChart);
				var currentItem = this.getCurrentItemForChart(child.props.forChart);
	
				return React.addons.cloneWithProps(child, {
					_show: this.state.eventStore.get().mouseOver.value,
					_chartData: chart,
					_currentItem: currentItem
				});
			}
			return child;
		},
		updatePropsForMouseCoordinates:function(child) {
			if ("ReStock.MouseCoordinates" === child.props.namespace) {
				var chart = this.getChartForId(child.props.forChart);
				var currentItem = this.getCurrentItemForChart(child.props.forChart);
	
				return React.addons.cloneWithProps(child, {
					_show: this.state.eventStore.get().mouseOver.value,
					_mouseXY: this.state.eventStore.get().mouseXY,
					_chartData: chart,
					_currentItem: currentItem
				});
			}
			return child;
		},
		updatePropsForTooltipContainer:function(child) {
			if ("ReStock.TooltipContainer" === child.props.namespace) {
				return React.addons.cloneWithProps(child, {
					_currentItems: this.state.currentItemStore.get().currentItems,
					_charts: this.state.chartStore.get().charts
				});
			}
			return child;
		},
		updatePropsForEdgeContainer:function(child) {
			if ("ReStock.EdgeContainer" === child.props.namespace) {
				return React.addons.cloneWithProps(child, {
					_currentItems: this.state.currentItemStore.get().currentItems,
					_charts: this.state.chartStore.get().charts
				});
			}
			return child;
		},
		updatePropsForChart:function(child) {
			var newChild = child;
			// console.log('here here...........');
			if ("ReStock.Chart" === child.props.namespace) {
				if (this.state.eventStore && this.state.chartStore) {
					var _chartData = this.getChartForId(newChild.props.id);
					newChild = React.addons.cloneWithProps(newChild, {
						_updateMode: this.state.chartStore.get().updateMode,
						_chartData: _chartData,
						data: this.getData(),
						//_pan: this.state.eventStore.get().pan,
						//_isMainChart: newChild.props.id === this.state.currentItemStore.get().mainChart/**/
					});
				}
			}
			return newChild;
		},
		getData:function(range) {
			return this.state.data;
		},
		getFullData:function() {
			return this.state.fullData;
		},
		getChartForId:function(chartId) {
			var charts = this.state.chartStore.get().charts;
			var filteredCharts = charts.filter(function(eachChart)  {return eachChart.id === chartId;});
			if (filteredCharts.length > 1) {
				var errorMessage = ("multiple charts with the same id " +  chartId + " found");
				console.warn(errorMessage);
				throw new Error(errorMessage);
			}
			if (filteredCharts.length === 0) {
				charts = charts.push(createChartData(chartId));
				return this.getChartForId(chartId);
			}
			return filteredCharts[0];
		},
		createChartData:function(chartId) {
			var chart = {
					id: chartId,
					scales: { xScale: null, yScale: null },
					accessors: { xAccessor: null, yAccessor: null },
					lastItem: {},
					firstItem: {},
					overlays: [],
					overlayValues: []
				};
			return chart;
		},
		getCurrentItemForChart:function(chartId) {
			var currentItems = this.state.currentItemStore.get().currentItems;
			var filteredCurrentItems = currentItems.filter(function(each)  {return each.id === chartId;});
			if (filteredCurrentItems.length > 1) {
				var errorMessage = ("multiple filteredCurrentItems with the same id " +  chartId + " found");
				console.warn(errorMessage);
				throw new Error(errorMessage);
			}
			if (filteredCurrentItems.length === 0) {
				var currentItem = {
					id: chartId,
					data: {}
				};
				currentItems = currentItems.push(currentItem);
				return this.getCurrentItemForChart(chartId);
			}
			return filteredCurrentItems[0];
		},
		updateCurrentItemForChart:function(chartData) {
			var currentItem = this.getCurrentItemForChart(chartData.id);
			var mouseXY = this.state.eventStore.get().mouseXY;
			if (chartData.scales.xScale === null) {
				console.warn('Verify if the the <Chart id=... > matches with the forChart=... This error likely because a Chart defined with id={%s} is not found', chartData.id);
			}
			var xValue = chartData.scales.xScale.invert(mouseXY[0]);
			var item = Utils.getClosestItem(this.getData(), xValue, chartData.accessors.xAccessor);
	
			currentItem = currentItem.data.reset(item);
			// console.log(currentItem);
		},
		_renderChildren:function(children) {
			if (this.doesContainChart()) {
				return React.Children.map(children, function(child)  {
					if (typeof child.type === 'string') return child;
					var newChild = child;
					newChild = this.updatePropsForEventCapture(child);
					newChild = this.updatePropsForMouseCoordinates(newChild);
					newChild = this.updatePropsForTooltipContainer(newChild);
					newChild = this.updatePropsForEdgeContainer(newChild);
					newChild = this.updatePropsForChart(newChild);
					newChild = this.updatePropsForCurrentCoordinate(newChild);
					return newChild;
				}.bind(this));
			}
			return children;
		}
	};
	
	module.exports = EventCaptureMixin;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		ScaleUtils = __webpack_require__(101),
		OverlayUtils = __webpack_require__(102),
		Utils = __webpack_require__(103),
		Chart = __webpack_require__(75),
		overlayColors = Utils.overlayColors;
	var pluck = Utils.pluck;
	var keysAsArray = Utils.keysAsArray;
	
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	
	var ChartContainerMixin = {
		getDimensions:function(_props, chartProps) {
	
			var availableWidth = _props._width || this.getAvailableWidth(_props);
			var availableHeight = _props._height || this.getAvailableHeight(_props);
	
			var width = chartProps.width || availableWidth;
			var height = chartProps.height || availableHeight
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: width,
				height: height
			}
		},
		getChartDataFor:function(_props, chartProps, data, fullData, passThroughProps) {
			var dimensions = this.getDimensions(_props, chartProps);
	
			var scales = this.defineScales(chartProps, data, passThroughProps);
	
			var accessors = this.getXYAccessors(chartProps, passThroughProps);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			// console.log(overlaysToAdd);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
	
			var overlayYAccessors = pluck(keysAsArray(overlaysToAdd), 'yAccessor');
	
			var xyValues = ScaleUtils.flattenData(data, [accessors.xAccessor], [accessors.yAccessor].concat(overlayYAccessors));
	
			var overlayValues = this.updateOverlayFirstLast(data, overlaysToAdd)
	
			scales = this.updateScales(
				xyValues
				, scales
				, data
				, dimensions.width
				, dimensions.height);
	
			var last = Utils.cloneMe(data[data.length - 1]);
			var first = Utils.cloneMe(data[0]);
			var origin = typeof chartProps.origin === 'function'
				? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight)
				: chartProps.origin;
	
			var drawableWidth = scales.xScale(accessors.xAccessor(data[data.length - 1]))
				- scales.xScale(accessors.xAccessor(data[0]));
	
			var _chartData = {
					width: dimensions.width,
					height: dimensions.height,
					drawableWidth: drawableWidth,
					origin: origin,
					overlayValues: overlayValues,
					overlays: overlaysToAdd,
					accessors: accessors,
					scales: scales,
					lastItem: last,
					firstItem: first
				};
			return _chartData;
		},
		defineScales:function(props, data, passThroughProps) {
			var xScale = props.xScale || props._xScale,
				yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps._xScale;
	
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
	
						var xAccesor = passThroughProps !== undefined && passThroughProps._stockScale
							? passThroughProps._indexAccessor
							: child.props.xAccessor
						accessor.xAccessor = xAccesor;
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
							// var overlay = getOverlayFromList(overlays, grandChild.props.id)
							var key = OverlayUtils.getYAccessorKey(props.id, grandChild.props);
							var overlay = {
								id: grandChild.props.id,
								chartId: props.id,
								key: key,
								yAccessor: function(d)  {return d[key];},
								options: grandChild.props.options,
								type: grandChild.props.type,
								tooltipLabel: OverlayUtils.getToolTipLabel(grandChild.props),
								stroke: grandChild.stroke || overlayColors(grandChild.props.id)
							};
							overlaysToAdd.push(overlay);
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
			// console.log(overlays);
		},
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
			// console.log(_overlayValues);
			return overlayValues;
		},
		updateScales:function(xyValues, scales, data, width, height) {
			console.log('updateScales');
	
	
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
	
		updateChartDataFor:function(_chartData, data) {
			console.log('updateChartDataFor');
			var scales = _chartData.scales;
	
			var accessors = _chartData.accessors;
	
			var overlayValues = this.updateOverlayFirstLast(data, _chartData.overlays)
			_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
			var overlayYAccessors = pluck(keysAsArray(_chartData.overlays), 'yAccessor');
	
	
			var xyValues = ScaleUtils.flattenData(data, [accessors.xAccessor], [accessors.yAccessor].concat(overlayYAccessors));
	
			scales = this.updateScales(
				xyValues
				, scales
				, data
				, _chartData.width
				, _chartData.height);
	
			_chartData = _chartData.set({ scales: scales });
	
			var last = Utils.cloneMe(data[data.length - 1]);
			_chartData = _chartData.set({ lastItem: last });
	
			var first = Utils.cloneMe(data[0]);
			_chartData = _chartData.set({ firstItem: first });
			return _chartData;
		}
	};
	
	module.exports = ChartContainerMixin;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChartTransformer = __webpack_require__(105);
	
	var DataTransformMixin = {
		isDataDransform:function() {
			return true;
		},
		transformData:function(props) {
			var transformer = ChartTransformer.getTransformerFor(props.transformType);
			var passThroughProps = transformer(props.data, props.options, props)
			// console.log('passThroughProps-------', passThroughProps);
	
			// this.setState({ passThroughProps: passThroughProps });
			return passThroughProps;
		}
	};
	
	module.exports = DataTransformMixin;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(2);
	
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
			var d = [Math.floor(x[0]), Math.ceil(x[1])]
	
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var shallowEqual = __webpack_require__(108);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReStockPureRenderMixin = {
		shouldComponentUpdate: function(nextProps, nextState) {
			var extraCheck = (typeof this.extraShouldComponentUpdate === "function")
				? this.extraShouldComponentUpdate
				: function(nextProps, nextState, actualCheck)  {return actualCheck;}
			var actualCheck = !shallowEqual(this.props, nextProps) ||
					!shallowEqual(this.state, nextState)
			return extraCheck(nextProps, nextState, actualCheck);
		}
	};
	
	module.exports = ReStockPureRenderMixin;


/***/ },
/* 101 */
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(103);
	var MACalculator = __webpack_require__(106);
	
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
				data = MACalculator.calculateSMA(data, overlay.options.period, overlay.key, overlay.options.pluck);
			} else if (overlay.type === 'ema') {
				data = MACalculator.calculateEMA(data, overlay.options.period, overlay.key, overlay.options.pluck);
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(2);
	
	var overlayColors = d3.scale.category10();
	
	function Utils() {
	}
	
	Utils.overlayColors = overlayColors;
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
	var React = __webpack_require__(1);
	
	var EdgeCoordinate = React.createClass({displayName: "EdgeCoordinate",
		propTypes: {
			type: React.PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
			coordinate: React.PropTypes.any.isRequired,
			x1: React.PropTypes.number.isRequired,
			y1: React.PropTypes.number.isRequired,
			x2: React.PropTypes.number.isRequired,
			y2: React.PropTypes.number.isRequired,
			orient: React.PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
			rectWidth: React.PropTypes.number
		},
		getDefaultProps:function() {
			return {
				orient: 'left'
			};
		},
		render:function() {
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
			return (
				React.createElement("g", {className: (this.props.show ? 'show ' : 'hide ') + this.props.className}, 
						React.createElement("line", {className: "cross-hair", 
							x1: this.props.x1, y1: this.props.y1, 
							x2: this.props.x2, y2: this.props.y2}), 
						coordinateBase, 
						coordinate
				)
			);
		}
	});
	
	module.exports = EdgeCoordinate;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var StockScaleTransformer = __webpack_require__(109);
	var HeikinAshiTransformer = __webpack_require__(110);
	var KagiTransformer = __webpack_require__(111);
	var PointAndFigureTransformer = __webpack_require__(112);
	var RenkoTransformer = __webpack_require__(113);
	
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
/* 106 */
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
		if (key === 'sma53_chart_2') {
			console.table(data);
		}
		return data;
	}
	
	MACalculator.calculateEMA = function (data, period) {
		console.log('calculating EMA');
		return false;
	}
	
	module.exports = MACalculator;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Freezer = __webpack_require__(114);
	module.exports = Freezer;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stockScale = __webpack_require__(99);
	
	var defaultOptions = {
		dateAccesor: function(d)  {return d.date;},
		indexAccessor: function(d)  {return d._idx;},
		indexMutator: function(d, i)  {d._idx = i;}
	}
	
	function StockScaleTransformer(data, options) {
		if (options === undefined) options = defaultOptions;
		var dateAccesor = options.dateAccesor;
		var dateMutator = options.dateMutator || function(d, date) {d.date = date};
		var indexMutator = options.indexMutator;
	
		var prevDate;
		var responseData = {}
		responseData.D = data
			//.filter((each) => Math.random() > 0.9)
			.map(function(each, i)  {
				var row = each;
				// console.log(each);
				//console.log(row);
				indexMutator(row,  i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = dateAccesor(row);
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
		responseData.W = buildWeeklyData(responseData.D, indexMutator, dateAccesor, dateMutator);
		responseData.M = buildMonthlyData(responseData.D, indexMutator, dateAccesor, dateMutator);
	
		// console.table(responseData.W);
	
		return {
				data: responseData,
				_dateAccessor: dateAccesor,
				_dateMutator: dateMutator,
				_indexAccessor: options.indexAccessor,
				_indexMutator: indexMutator,
				// _indexMutator: indexMutator,
				_stockScale: true,
				_xScale: stockScale(options.indexAccessor),
				_multiInterval: true
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
		}
		return monthly;
	}
	
	module.exports = StockScaleTransformer;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace'];
	
	
	function HeikinAshiTransformer(data, options, props) {
		if (options === undefined) options = {};
		var dateAccesor = options.dateAccesor || props._dateAccessor;
		var dateMutator = options.dateMutator || props._dateMutator;
		var indexAccessor = options.indexAccessor || props._indexAccessor;
		var indexMutator = options.indexMutator || props._indexMutator;
	
		if (props._multiInterval && props._stockScale) {
			
			var haData = {};
			Object.keys(data)
				.forEach(function(key)  {return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccesor, dateMutator);});
			var response = {};
	
			Object.keys(props)
				.filter(function(key)  {return excludeList.indexOf(key) < 0;})
				.forEach(function(key)  {return response[key] = props[key];});
	
			response.data = haData;
	
			return response;
		}
		return {
			data: data
		};
	}
	
	function buildHA(data, indexAccessor, indexMutator, dateAccesor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d, i) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccesor(d));
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return d.close; };
	
	var calculateATR = __webpack_require__(115);
	
	function KagiTransformer(data, options, props) {
		if (options === undefined) options = {};
	
		var period = options.period || 14;
	
		calculateATR(data.D, period);
		var reversalThreshold = function (d) { return d["atr" + period] }
	
		var dateAccesor = options.dateAccesor || props._dateAccessor;
		var dateMutator = options.dateMutator || props._dateMutator;
		var indexAccessor = options.indexAccessor || props._indexAccessor;
		var indexMutator = options.indexMutator || props._indexMutator;
	
		var kagiData = new Array();
	
		var index = 0, prevPeak, prevTrough, direction;
		var line = {};
	
		data.D.forEach( function (d) {
			if (line.from === undefined) {
				indexMutator(line, index++);
				dateMutator(line, dateAccesor(d));
				/*line.displayDate = d.displayDate;
				line.fromDate = d.displayDate;
				line.toDate = d.displayDate;*/
				line.from = dateAccesor(d);
	
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
			line.to = dateAccesor(d);
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
		// console.table(kagiData);
		// console.table(data);
		var response = {};
		Object.keys(props)
			.filter(function(key)  {return excludeList.indexOf(key) < 0;})
			.forEach(function(key)  {return response[key] = props[key];});
	
		response.data = {'D': kagiData};
	
		return response;
	}
	
	
	module.exports = KagiTransformer;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return { high: d.high, low: d.low }; };
	var defaultBoxSize = 0.5;
	var defaultReversal = 3;
	
	function createBox(d, dateAccesor, dateMutator) {
		var box = {
			open: d.open
			, fromDate: dateAccesor(d)
			, toDate: dateAccesor(d)
			//, displayDate: d.displayDate
			, startOfYear: d.startOfYear
			, startOfQuarter: d.startOfQuarter
			, startOfMonth: d.startOfMonth
			, startOfWeek: d.startOfWeek
		};
		dateMutator(box, dateAccesor(d));
		return box;
	}
	
	function updateColumns(columnData, dateAccesor, dateMutator) {
	
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
					dateMutator(d, dateAccesor(eachBox));
				}
				if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccesor(eachBox));
				}
				if (d.startOfMonth !== true && eachBox.startOfMonth) {
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccesor(eachBox));
				}
				if (d.startOfWeek !== true && eachBox.startOfWeek) {
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccesor(eachBox));
				}
			});
	
		});
	
		// console.table(columnData);
		// console.table(rawData);
		return columnData;
	};
	/**/
	
	function PointAndFigureTransformer(rawData, options, props) {
		if (options === undefined) options = {};
	
	
		var dateAccesor = options.dateAccesor || props._dateAccessor;
		var dateMutator = options.dateMutator || props._dateMutator;
		var indexAccessor = options.indexAccessor || props._indexAccessor;
		var indexMutator = options.indexMutator || props._indexMutator;
		var boxSize = options.boxSize || defaultBoxSize;
		var reversal = options.reversal || defaultReversal;
	
	
		var columnData = new Array();
	
		var index = 0, direction;
		var column = {
			boxes: [],
			open: rawData.D[0].open
		}, box = createBox(rawData.D[0], dateAccesor, dateMutator);
	
		indexMutator(column, 0);
		columnData.push(column);
	
		rawData.D.forEach( function (d) {
			column.volume = column.volume || 0;
			column.volume += d.volume;
	
			if (!box.startOfYear) {
				box.startOfYear = d.startOfYear;
				if (box.startOfYear) {
					dateMutator(box, dateAccesor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfYear && !box.startOfQuarter) {
				box.startOfQuarter = d.startOfQuarter;
				if (box.startOfQuarter && !box.startOfYear) {
					dateMutator(box, dateAccesor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfQuarter && !box.startOfMonth) {
				box.startOfMonth = d.startOfMonth;
				if (box.startOfMonth && !box.startOfQuarter) {
					dateMutator(box, dateAccesor(d));
					// box.displayDate = d.displayDate;
				}
			}
			if (!box.startOfMonth && !box.startOfWeek) {
				box.startOfWeek = d.startOfWeek;
				if (box.startOfWeek && !box.startOfMonth) {
					dateMutator(box, dateAccesor(d));
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
					box.toDate = dateAccesor(d);
					box.open = column.open;
					var noOfBoxes = column.direction > 0
										? Math.floor(upwardMovement / boxSize)
										: Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, dateAccesor, dateMutator);
						// box = cloneMe(box);
						box.open = prevBoxClose;
					}
					box.fromDate = dateAccesor(d);
					box.date = dateAccesor(d);
				}
			} else {
				// one or more boxes already formed in the current column
				var upwardMovement = (Math.max((usePrice(d).high - box.open), 0)) //upward movement
				var downwardMovement = Math.abs(Math.min((usePrice(d).low - box.open), 0)) // downward movement
	
				if ((column.direction > 0 && upwardMovement > boxSize) /* rising column AND box can be formed */
						|| (column.direction < 0 && downwardMovement > boxSize) /* falling column AND box can be formed */ ) {
					// form another box
					box.close = box.open + column.direction * boxSize;
					box.toDate = dateAccesor(d);
					var prevBoxClose = box.close;
					column.boxes.push(box);
					box = createBox(d, dateAccesor, dateMutator);
					box.open = prevBoxClose;
					box.fromDate = dateAccesor(d);
					dateMutator(box, dateAccesor(d));
				} else if ((column.direction > 0 && downwardMovement > boxSize * reversal) /* rising column and there is downward movement to trigger a reversal */
						|| (column.direction < 0 && upwardMovement > boxSize * reversal)/* falling column and there is downward movement to trigger a reversal */) {
					// reversal
	
					box.open = box.open + -1 * column.direction * boxSize;
					box.toDate = dateAccesor(d);
					// box.displayDate = d.displayDate;
					dateMutator(box, dateAccesor(d));
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
						box = createBox(d, dateAccesor, dateMutator);
						box.open = prevBoxClose;
					}
	
					columnData.push(column);
				}
			}
		});
		updateColumns(columnData, dateAccesor, dateMutator);
	
		//console.table(columnData);
		// console.table(data);
		var response = {};
		Object.keys(props)
			.filter(function(key)  {return excludeList.indexOf(key) < 0;})
			.forEach(function(key)  {return response[key] = props[key];});
	
		response.data = {'D': columnData};
	
		return response;
	}
	
	module.exports = PointAndFigureTransformer;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	// var pricingMethod = function (d) { return { high: d.close, low: d.close }; };
	// var usePrice = function (d) { return d.close; };
	var defaultBoxSize = 0.5;
	var defaultReversal = 3;
	var calculateATR = __webpack_require__(115);
	
	function RenkoTransformer(rawData, options, props) {
		if (options === undefined) options = {};
	
		var period = options.period || 14;
	
		calculateATR(rawData.D, period);
		var brickSize = function (d) { return d["atr" + period]}
	
		var dateAccesor = options.dateAccesor || props._dateAccessor;
		var dateMutator = options.dateMutator || props._dateMutator;
		var indexAccessor = options.indexAccessor || props._indexAccessor;
		var indexMutator = options.indexMutator || props._indexMutator;
		var boxSize = options.boxSize || defaultBoxSize;
		var reversal = options.reversal || defaultReversal;
	
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
				brick.fromDate = dateAccesor(d);
				indexMutator(brick, index++);
				dateMutator(brick, dateAccesor(d));
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
					dateMutator(brick, dateAccesor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfQuarter) {
				brick.startOfQuarter = d.startOfQuarter;
				if (brick.startOfQuarter && !brick.startOfYear) {
					dateMutator(brick, dateAccesor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfMonth) {
				brick.startOfMonth = d.startOfMonth;
				if (brick.startOfMonth && !brick.startOfQuarter) {
					dateMutator(brick, dateAccesor(d));
					// brick.displayDate = d.displayDate;
				}
			}
			if (!brick.startOfWeek) {
				brick.startOfWeek = d.startOfWeek;
				if (brick.startOfWeek && !brick.startOfMonth) {
					dateMutator(brick, dateAccesor(d));
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
						brick.toDate = dateAccesor(d);
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
						brick.fromDate = dateAccesor(d);
						indexMutator(brick, index + j);
						dateMutator(brick, dateAccesor(d));
						brick.volume = (brick.volume || 0) + d.volume;
					}
					index = index + j - 1;
					brick = {};
				} else {
					if (indexAccessor(d) === rawData.D.length - 1) {
						brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
						brick.to = indexAccessor(d);
						brick.toDate = dateAccesor(d);
						dateMutator(brick, dateAccesor(d));
	
						brick.fullyFormed = false;
						renkoData.push(brick);
					}
				}
			}
	
		});
	
		// console.table(renkoData);
		// console.table(data);
		var response = {};
		Object.keys(props)
			.filter(function(key)  {return excludeList.indexOf(key) < 0;})
			.forEach(function(key)  {return response[key] = props[key];});
	
		response.data = {'D': renkoData};
	
		return response;
	}
	
	module.exports = RenkoTransformer;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 116 ),
		Emitter = __webpack_require__( 117 ),
		Mixins = __webpack_require__( 118 ),
		Frozen = __webpack_require__( 119 )
	;
	
	//#build
	var Freezer = function( initialValue ) {
		var me = this;
	
		// Immutable data
		var frozen;
	
		var notify = function notify( eventName, node, options ){
			if( eventName == 'listener' )
				return Frozen.createListener( node );
	
			var updated = Frozen.update( eventName, node, options );
	
			if( !updated )
				return Utils.error( 'Can\'t udpate. The node is not in the freezer.' );
	
			return updated;
		};
	
		// Create the frozen object
		frozen = Frozen.freeze( initialValue, notify );
	
		// Listen to its changes immediately
		var listener = frozen.getListener();
	
		// Updating flag to trigger the event on nextTick
		var updating = false;
	
		listener.on( 'immediate', function( prevNode, updated ){
			if( prevNode != frozen )
				return;
	
			frozen = updated;
	
			// Trigger on next tick
			if( !updating ){
				updating = true;
				Utils.nextTick( function(){
					updating = false;
					me.trigger( 'update', frozen );
				});
			}
		});
	
		Utils.addNE( this, {
			get: function(){
				return frozen;
			},
			set: function( node ){
				var newNode = notify( 'reset', frozen, node );
				newNode.__.listener.trigger( 'immediate', frozen, newNode );
			}
		});
	
		Utils.addNE( this, { getData: this.get, setData: this.set } );
	
		// The event store
		this._events = [];
	}
	
	Freezer.prototype = Utils.createNonEnumerable({}, Emitter);
	//#build
	
	module.exports = Freezer;

/***/ },
/* 115 */
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


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//#build
	var global = (new Function("return this")());
	
	var Utils = {
		extend: function( ob, props ){
			for( var p in props ){
				ob[p] = props[p];
			}
			return ob;
		},
	
		createNonEnumerable: function( obj, proto ){
			var ne = {};
			for( var key in obj )
				ne[key] = {value: obj[key] };
			return Object.create( proto || {}, ne );
		},
	
		error: function( message ){
			var err = new Error( message );
			if( console )
				return console.error( err );
			else
				throw err;
		},
	
		each: function( o, clbk ){
			var i,l,keys;
			if( o && o.constructor == Array ){
				for (i = 0, l = o.length; i < l; i++)
					clbk( o[i], i );
			}
			else {
				keys = Object.keys( o );
				for( i = 0, l = keys.length; i < l; i++ )
					clbk( o[ keys[i] ], keys[i] );
			}
		},
	
		addNE: function( node, attrs ){
			for( var key in attrs ){
				Object.defineProperty( node, key, {
					enumerable: false,
					configurable: true,
					writable: true,
					value: attrs[ key ]
				});
			}
		},
	
		// nextTick - by stagas / public domain
	  	nextTick: (function () {
	      var queue = [],
				dirty = false,
				fn,
				hasPostMessage = !!global.postMessage,
				messageName = 'nexttick',
				trigger = (function () {
					return hasPostMessage
						? function trigger () {
						global.postMessage(messageName, '*');
					}
					: function trigger () {
						setTimeout(function () { processQueue() }, 0);
					};
				}()),
				processQueue = (function () {
					return hasPostMessage
						? function processQueue (event) {
							if (event.source === global && event.data === messageName) {
								event.stopPropagation();
								flushQueue();
							}
						}
						: flushQueue;
	      	})()
	      ;
	
	      function flushQueue () {
	          while (fn = queue.shift()) {
	              fn();
	          }
	          dirty = false;
	      }
	
	      function nextTick (fn) {
	          queue.push(fn);
	          if (dirty) return;
	          dirty = true;
	          trigger();
	      }
	
	      if (hasPostMessage) global.addEventListener('message', processQueue, true);
	
	      nextTick.removeListener = function () {
	          global.removeEventListener('message', processQueue, true);
	      }
	
	      return nextTick;
	  })()
	};
	//#build
	
	
	module.exports = Utils;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 116 );
	
	//#build
	
	// The prototype methods are stored in a different object
	// and applied as non enumerable properties later
	var emitterProto = {
		on: function( eventName, listener, once ){
			var listeners = this._events[ eventName ] || [];
	
			listeners.push({ callback: listener, once: once});
			this._events[ eventName ] =  listeners;
	
			return this;
		},
	
		once: function( eventName, listener ){
			this.on( eventName, listener, true );
		},
	
		off: function( eventName, listener ){
			if( typeof eventName == 'undefined' ){
				this._events = {};
			}
			else if( typeof listener == 'undefined' ) {
				this._events[ eventName ] = [];
			}
			else {
				var listeners = this._events[ eventName ] || [],
					i
				;
	
				for (i = listeners.length - 1; i >= 0; i--) {
					if( listeners[i] === listener )
						listeners.splice( i, 1 );
				}
			}
	
			return this;
		},
	
		trigger: function( eventName ){
			var args = [].slice.call( arguments, 1 ),
				listeners = this._events[ eventName ] || [],
				onceListeners = [],
				i, listener
			;
	
			// Call listeners
			for (i = 0; i < listeners.length; i++) {
				listener = listeners[i];
	
				if( listener.callback )
					listener.callback.apply( null, args );
				else {
					// If there is not a callback, remove!
					listener.once = true;
				}
	
				if( listener.once )
					onceListeners.push( i );
			}
	
			// Remove listeners marked as once
			for( i = onceListeners.length - 1; i >= 0; i-- ){
				listeners.splice( onceListeners[i], 1 );
			}
	
			return this;
		}
	};
	
	// Methods are not enumerable so, when the stores are
	// extended with the emitter, they can be iterated as
	// hashmaps
	var Emitter = Utils.createNonEnumerable( emitterProto );
	//#build
	
	module.exports = Emitter;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 116 );
	
	//#build
	
	/**
	 * Creates non-enumerable property descriptors, to be used by Object.create.
	 * @param  {Object} attrs Properties to create descriptors
	 * @return {Object}       A hash with the descriptors.
	 */
	var createNE = function( attrs ){
		var ne = {};
	
		for( var key in attrs ){
			ne[ key ] = {
				writable: true,
				configurable: true,
				enumerable: false,
				value: attrs[ key]
			}
		}
	
		return ne;
	}
	
	var commonMethods = {
		set: function( attr, value ){
			var attrs = attr;
	
			if( typeof value != 'undefined' ){
				attrs = {};
				attrs[ attr ] = value;
			}
	
			return this.__.notify( 'merge', this, attrs );
		},
	
		getListener: function(){
			return this.__.notify( 'listener', this );
		},
	
		toJS: function(){
			var js;
			if( this.constructor == Array ){
				js = new Array( this.length );
			}
			else {
				js = {};
			}
	
			Utils.each( this, function( child, i ){
				if( child && child.__ )
					js[ i ] = child.toJS();
				else
					js[ i ] = child;
			});
	
			return js;
		}
	};
	
	var arrayMethods = Utils.extend({
		push: function( el ){
			return this.append( [el] );
		},
	
		append: function( els ){
			if( els && els.length )
				return this.__.notify( 'splice', this, [this.length, 0].concat( els ) );
			return this;
		},
	
		pop: function(){
			if( !this.length )
				return this;
	
			return this.__.notify( 'splice', this, [this.length -1, 1] );
		},
	
		unshift: function( el ){
			return this.prepend( [el] );
		},
	
		prepend: function( els ){
			if( els && els.length )
				return this.__.notify( 'splice', this, [0, 0].concat( els ) );
			return this;
		},
	
		shift: function(){
			if( !this.length )
				return this;
	
			return this.__.notify( 'splice', this, [0, 1] );
		},
	
		splice: function( index, toRemove, toAdd ){
			return this.__.notify( 'splice', this, arguments );
		}
	}, commonMethods );
	
	var FrozenArray = Object.create( Array.prototype, createNE( arrayMethods ) );
	
	var Mixins = {
	
	Hash: Object.create( Object.prototype, createNE( Utils.extend({
		remove: function( keys ){
			var filtered = [],
				k = keys
			;
	
			if( keys.constructor != Array )
				k = [ keys ];
	
			for( var i = 0, l = k.length; i<l; i++ ){
				if( this.hasOwnProperty( k[i] ) )
					filtered.push( k[i] );
			}
	
			if( filtered.length )
				return this.__.notify( 'remove', this, filtered );
			return this;
		},
	
		reset: function( attrs ) {
			return this.__.notify( 'replaceself', this, attrs );
		}
	
	}, commonMethods))),
	
	List: FrozenArray,
	arrayMethods: arrayMethods
	};
	//#build
	
	module.exports = Mixins;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 116 ),
		Mixins = __webpack_require__( 118),
		Emitter = __webpack_require__(117)
	;
	
	//#build
	var Frozen = {
		freeze: function( node, notify ){
			if( node && node.__ ){
				return node;
			}
	
			var me = this,
				frozen, mixin, cons
			;
	
			if( node.constructor == Array ){
				frozen = this.createArray( node.length );
			}
			else {
				frozen = Object.create( Mixins.Hash );
			}
	
			Utils.addNE( frozen, { __: {
				listener: false,
				parents: [],
				notify: notify,
				dirty: false
			}});
	
			// Freeze children
			Utils.each( node, function( child, key ){
				cons = child && child.constructor;
				if( cons == Array || cons == Object ){
					child = me.freeze( child, notify );
				}
	
				if( child && child.__ )
					me.addParent( child, frozen );
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
	
			return frozen;
		},
	
		update: function( type, node, options ){
			if( !this[ type ])
				return Utils.error( 'Unknown update type: ' + type );
	
			return this[ type ]( node, options );
		},
	
		reset: function( node, value ){
			var me = this,
				frozen
			;
	
			if( value && value.__ ){
				frozen = value;
				frozen.__.listener = value.__.listener;
				frozen.__.parents = [];
	
				// Set back the parent on the children
				// that have been updated
				this.fixChildren( frozen, node );
				Utils.each( frozen, function( child ){
					if( child && child.__ ){
						me.removeParent( node );
						me.addParent( child, frozen );
					}
				});
			}
			else {
				frozen = this.freeze( node, node.__.notify );
			}
	
			return frozen;
		},
	
		merge: function( node, attrs ){
			var me = this,
				frozen = this.copyMeta( node ),
				notify = node.__.notify,
				val, cons, key, isFrozen
			;
	
			Utils.each( node, function( child, key ){
				isFrozen = child && child.__;
	
				if( isFrozen ){
					me.removeParent( child, node );
				}
	
				val = attrs[ key ];
				if( !val ){
					if( isFrozen )
						me.addParent( child, frozen );
					return frozen[ key ] = child;
				}
	
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				delete attrs[ key ];
	
				frozen[ key ] = val;
			});
	
			for( key in attrs ) {
				val = attrs[ key ];
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				frozen[ key ] = val;
			}
	
			Object.freeze( frozen );
	
			this.refreshParents( node, frozen );
	
			return frozen;
		},
		replaceself: function( node, attrs ) {
			var me = this,
				frozen = this.copyMeta( node ),
				notify = node.__.notify,
				val, cons, key
			;
			for( key in attrs ) {
				val = attrs[ key ];
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				frozen[ key ] = val;
			}
	
			Object.freeze( frozen );
	
			this.refreshParents( node, frozen );
	
			return frozen;
		},
		remove: function( node, attrs ){
			var me = this,
				frozen = this.copyMeta( node ),
				isFrozen
			;
	
			Utils.each( node, function( child, key ){
				isFrozen = child && child.__;
	
				if( isFrozen ){
					me.removeParent( child, node );
				}
	
				if( attrs.indexOf( key ) != -1 ){
					return;
				}
	
				if( isFrozen )
					me.addParent( child, frozen );
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
			this.refreshParents( node, frozen );
	
			return frozen;
		},
	
		splice: function( node, args ){
			var me = this,
				frozen = this.copyMeta( node ),
				index = args[0],
				deleteIndex = index + args[1],
				notify = node.__.notify,
				con, child
			;
	
			// Clone the array
			Utils.each( node, function( child, i ){
	
				if( child && child.__ ){
					me.removeParent( child, node );
	
					// Skip the nodes to delete
					if( i < index || i>= deleteIndex )
						me.addParent( child, frozen );
				}
	
				frozen[i] = child;
			});
	
			// Prepare the new nodes
			if( args.length > 1 ){
				for (var i = args.length - 1; i >= 2; i--) {
					child = args[i];
					con = child && child.constructor;
	
					if( con == Array || con == Object )
						child = this.freeze( child, notify );
	
					if( child && child.__ )
						this.addParent( child, frozen );
	
					args[i] = child;
				}
			}
	
			// splice
			Array.prototype.splice.apply( frozen, args );
	
			Object.freeze( frozen );
			this.refreshParents( node, frozen );
	
			return frozen;
		},
	
		refresh: function( node, oldChild, newChild, returnUpdated ){
			var me = this,
				frozen = this.copyMeta( node ),
				__
			;
	
			Utils.each( node, function( child, key ){
				if( child == oldChild ){
					child = newChild;
				}
	
				if( child && (__ = child.__) ){
					if( __.dirty ){
						child = me.refresh( child, __.dirty[0], __.dirty[1], true );
					}
	
					me.removeParent( child, node );
					me.addParent( child, frozen );
				}
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
	
			// If the node was dirty, clean it
			node.__.dirty = false;
	
			if( returnUpdated )
				return frozen;
	
			this.refreshParents( node, frozen );
		},
	
		fixChildren: function( node, oldNode ){
			var me = this;
			Utils.each( node, function( child ){
				if( !child || !child.__ )
					return;
	
				// If the child is linked to the node,
				// maybe its children are not linked
				if( child.__.parents.indexOf( node ) != -1 )
					return me.fixChildren( child );
	
				// If the child wasn't linked it is sure
				// that it wasn't modified. Just link it
				// to the new parent
				if( child.__.parents.length == 1 )
					return child.__.parents = [ node ];
	
				if( oldNode )
					me.removeParent( child, oldNode );
	
				me.addParent( node );
			});
		},
	
		clean: function( node ){
			return this.refresh( node, __.dirty[0], __.dirty[1], true );
		},
	
		copyMeta: function( node ){
			var me = this,
				frozen
			;
	
			if( node.constructor == Array ){
				frozen = this.createArray( node.length );
			}
			else {
				frozen = Object.create( Mixins.Hash );
			}
	
			var __ = node.__;
			Utils.addNE( frozen, {__: {
				notify: __.notify,
				listener: __.listener,
				parents: __.parents.slice( 0 ),
				dirty: false
			}});
	
			return frozen;
		},
	
		refreshParents: function( oldChild, newChild ){
			var __ = oldChild.__,
				i
			;
	
			if( __.listener )
				this.trigger( newChild, 'update', newChild );
	
			if( !__.parents.length ){
				if( __.listener ){
					__.listener.trigger( 'immediate', oldChild, newChild );
				}
			}
			else {
				for (i = __.parents.length - 1; i >= 0; i--) {
					if( i == 0 )
						this.refresh( __.parents[i], oldChild, newChild, false );
					else
						this.markDirty( __.parents[i], [oldChild, newChild] );
				}
			}
		},
	
		markDirty: function( node, dirt ){
			var __ = node.__,
				i
			;
			__.dirty = dirt;
	
			for ( i = __.parents.length - 1; i >= 0; i-- ) {
				this.markDirty( __.parents[i], dirt );
			}
		},
	
		removeParent: function( node, parent ){
			var parents = node.__.parents,
				index = parents.indexOf( parent )
			;
	
			if( index != -1 ){
				parents.splice( index, 1 );
			}
		},
	
		addParent: function( node, parent ){
			var parents = node.__.parents,
				index = parents.indexOf( parent )
			;
	
			if( index == -1 ){
				parents[ parents.length ] = parent;
			}
		},
	
		trigger: function( node, eventName, param ){
			var listener = node.__.listener,
				ticking = listener.ticking
			;
	
			listener.ticking = param;
			if( !ticking ){
				Utils.nextTick( function(){
					var updated = listener.ticking;
					listener.ticking = false;
					listener.trigger( eventName, updated );
				});
			}
		},
	
		createListener: function( frozen ){
			var l = frozen.__.listener;
	
			if( !l ) {
				l = Object.create(Emitter, {
					_events: {
						value: {},
						writable: true
					}
				});
	
				frozen.__.listener = l;
			}
	
			return l;
		},
	
		createArray: (function(){
			// Set createArray method
			if( [].__proto__ )
				return function( length ){
					var arr = new Array( length );
					arr.__proto__ = Mixins.List;
					return arr;
				}
			return function( length ){
				var arr = new Array( length ),
					methods = Mixins.arrayMethods
				;
				for( var m in methods ){
					arr[ m ] = methods[ m ];
				}
				return arr;
			}
		})()
	};
	//#build
	
	module.exports = Frozen;

/***/ }
])
});
;
//# sourceMappingURL=react-stockcharts-dashboard.js.map