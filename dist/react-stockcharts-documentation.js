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
return webpackJsonpReStock([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	/**/
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	var parseDate = d3.time.format('%Y-%m-%d').parse;
	
	__webpack_require__(34);
	__webpack_require__(32);
	
	var Nav = __webpack_require__(4);
	var Sidebar = __webpack_require__(5);
	var MainContainer = __webpack_require__(9);
	var MenuGroup = __webpack_require__(10);
	var MenuItem = __webpack_require__(11);
	
	var pages = [__webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29)];
	
	function compressString(string) {
		string = string.replace(/\s+/g, '');
		string = string.replace(/_+/g, '');
		string = string.toLowerCase();
		// console.log(string);
		return string;
	}
	function renderPage(data, dataFull, compareData) {
		data.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		dataFull.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
		compareData.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			d.SP500Close = +d.SP500Close;
			d.AAPLClose = +d.AAPLClose;
			d.GEClose = +d.GEClose;
			// console.log(d);
		});
		var SyncMouseMove = __webpack_require__(6).init(data);
		var AreaChartWithZoom = __webpack_require__(7).init(data);
		var AreaChartWithZoomPan = __webpack_require__(8).init(data);
	
		var selected = location.hash.replace('#/', '');
		var selectedPage = pages.filter(function (page) {
			return compressString(page.title) === compressString(selected);
		});
	
		var firstPage = selectedPage.length === 0 ? pages[0] : selectedPage[0];
	
		// console.log(selected, selectedPage, firstPage);
	
		var ExamplesPage = (function (_React$Component) {
			function ExamplesPage(props) {
				_classCallCheck(this, ExamplesPage);
	
				_get(Object.getPrototypeOf(ExamplesPage.prototype), 'constructor', this).call(this, props);
				this.handleRouteChange = this.handleRouteChange.bind(this);
				this.state = {
					selectedPage: firstPage
				};
			}
	
			_inherits(ExamplesPage, _React$Component);
	
			_createClass(ExamplesPage, [{
				key: 'handleRouteChange',
				value: function handleRouteChange() {
					var selected = location.hash.replace('#/', '');
					var selectedPage = pages.filter(function (page) {
						return compressString(page.title) === compressString(selected);
					});
					if (selectedPage.length > 0) {
						this.setState({
							selectedPage: selectedPage[0]
						});
					}
				}
			}, {
				key: 'componentDidMount',
				value: function componentDidMount() {
					window.addEventListener('hashchange', this.handleRouteChange, false);
				}
			}, {
				key: 'render',
				value: function render() {
					var _this = this;
	
					var Page = this.state.selectedPage;
					return React.createElement(
						'div',
						null,
						React.createElement(Nav, null),
						React.createElement(
							MainContainer,
							null,
							React.createElement(
								Sidebar,
								null,
								React.createElement(
									MenuGroup,
									null,
									pages.map(function (eachPage, idx) {
										return React.createElement(MenuItem, { key: idx, current: eachPage === _this.state.selectedPage, title: eachPage.title });
									})
								)
							),
							React.createElement(Page, { someData: data, lotsOfData: dataFull, compareData: compareData })
						)
					);
				}
			}]);
	
			return ExamplesPage;
		})(React.Component);
	
		;
	
		React.render(React.createElement(ExamplesPage, null), document.getElementById('chart-goes-here'));
	}
	
	d3.tsv('data/MSFT.tsv', function (err, MSFT) {
		d3.tsv('data/MSFT_full.tsv', function (err2, MSFTFull) {
			d3.tsv('data/comparison.tsv', function (err3, compareData) {
				renderPage(MSFT, MSFTFull, compareData);
				// renderPartialPage(MSFT, MSFTFull, compareData);
			});
		});
	});
	
	function renderPartialPage(data, dataFull, compareData) {
		data.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		dataFull.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		compareData.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			d.SP500Close = +d.SP500Close;
			d.AAPLClose = +d.AAPLClose;
			d.GEClose = +d.GEClose;
			// console.log(d);
		});
	
		//var Renko = require('./lib/charts/Renko').init(dataFull);
		// AreaChart
		// AreaChartWithYPercent
		// CandleStickChart
		// CandleStickStockScaleChart
		// CandleStickChartWithEdge
		// HaikinAshi
		// Kagi
		// CandleStickChartWithEdge  - Lots of data -> data={dataFull}/>
		// CandleStickChartWithCHMousePointer
		// CandleStickChartWithMA
		// PointAndFigure
		// Renko
		// CandleStickStockScaleChartWithVolumeHistogramV1
		// CandleStickStockScaleChartWithVolumeHistogramV2
		// CandleStickStockScaleChartWithVolumeHistogramV3
		// CandleStickChartWithZoomPan
		// CandleStickChartWithCompare
		// CandleStickChartWithMACDIndicator
		var Chart = __webpack_require__(30);
	
		var ExamplesPage = (function (_React$Component2) {
			function ExamplesPage() {
				_classCallCheck(this, ExamplesPage);
	
				_get(Object.getPrototypeOf(ExamplesPage.prototype), 'constructor', this).apply(this, arguments);
			}
	
			_inherits(ExamplesPage, _React$Component2);
	
			_createClass(ExamplesPage, [{
				key: 'render',
				value: function render() {
					return React.createElement(
						'div',
						{ className: 'container react-stockchart' },
						React.createElement(Chart, { data: data })
					);
				}
			}]);
	
			return ExamplesPage;
		})(React.Component);
	
		;
		React.render(React.createElement(ExamplesPage, null), document.getElementById('chart-goes-here'));
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator,
	    CompareSeries = ReStock.CompareSeries,
	    CompareTooltip = ReStock.CompareTooltip;
	
	var CandleStickChartWithCompare = React.createClass({
		displayName: 'CandleStickChartWithCompare',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var parseDate = d3.time.format('%Y-%m-%d').parse;
			var dateRange = { from: parseDate('2012-12-01'), to: parseDate('2012-12-31') };
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							} },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor, compareBase: function (d) {
									return d.close;
								} },
							React.createElement(CandlestickSeries, null),
							React.createElement(CompareSeries, { id: 1, yAccessor: function (d) {
									return d.AAPLClose;
								}, displayLabel: 'AAPL' }),
							React.createElement(CompareSeries, { id: 2, yAccessor: function (d) {
									return d.SP500Close;
								}, displayLabel: 'S&P 500' })
						)
					),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} }),
							React.createElement(
								OverlaySeries,
								{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
								React.createElement(AreaSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 1, forCompareSeries: 1 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forCompareSeries: 2 }),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] }),
						React.createElement(CompareTooltip, { forChart: 1, forCompareSeries: 1, origin: [-50, 20] }),
						React.createElement(CompareTooltip, { forChart: 1, forCompareSeries: 2, origin: [-50, 40] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithCompare;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var Nav = React.createClass({
		displayName: 'Nav',
	
		render: function render() {
			return React.createElement(
				'nav',
				{ className: 'navbar navbar-fixed-top' },
				React.createElement(
					'div',
					{ className: 'container-fluid' },
					React.createElement(
						'div',
						{ className: 'navbar-header' },
						React.createElement(
							'a',
							{ className: 'navbar-brand', href: 'index.html' },
							'React Stockcharts'
						)
					)
				)
			);
		}
	});
	
	module.exports = Nav;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var SideBar = React.createClass({
		displayName: 'SideBar',
	
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'col-sm-3 col-md-2 sidebar' },
				this.props.children
			);
		}
	});
	
	module.exports = SideBar;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	module.exports = {
		init: function init(data) {
			var AreaChartWithEdgeCoordinates = __webpack_require__(78).init(data);
	
			var SyncMouseMove = React.createClass({
				displayName: 'SyncMouseMove',
	
				getInitialState: function getInitialState() {
					return {
						width: 500,
						height: 400
					};
				},
				handleMATooltipClick: function handleMATooltipClick(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				componentDidMount: function componentDidMount() {
					var eventStore = this.refs.left.getEventStore();
					this.refs.right.updateEventStore(eventStore);
					// console.log('SyncMouseMove.componentDidMount', eventStore);
				},
				componentDidUpdate: function componentDidUpdate() {},
				render: function render() {
					var parseDate = d3.time.format('%Y-%m-%d').parse;
					var dateRange = { from: parseDate('2012-06-01'), to: parseDate('2012-12-31') };
					var dateFormat = d3.time.format('%Y-%m-%d');
	
					return React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ className: 'col-md-6 react-stockchart' },
							React.createElement(AreaChartWithEdgeCoordinates, { ref: 'left' })
						),
						React.createElement(
							'div',
							{ className: 'col-md-6 react-stockchart' },
							React.createElement(AreaChartWithEdgeCoordinates, { ref: 'right' })
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
	;
	// console.log('SyncMouseMove.componentDidUpdate');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    AreaSeries = ReStock.AreaSeries,
	    Translate = ReStock.Translate,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator,
	    CurrentCoordinate = ReStock.CurrentCoordinate;
	
	module.exports = {
		init: function init(data) {
			var AreaChartWithZoom = React.createClass({
				displayName: 'AreaChartWithZoom',
	
				getInitialState: function getInitialState() {
					return {
						width: 500,
						height: 400
					};
				},
				handleMATooltipClick: function handleMATooltipClick(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render: function render() {
					var parseDate = d3.time.format('%Y-%m-%d').parse;
					var dateRange = { from: parseDate('2012-06-01'), to: parseDate('2012-12-31') };
					var dateFormat = d3.time.format('%Y-%m-%d');
	
					return React.createElement(
						ChartCanvas,
						{
							width: this.state.width, height: this.state.height,
							margin: { left: 65, right: 90, top: 30, bottom: 30 }, data: data, ref: 'eventStore' },
						React.createElement(
							Chart,
							{ id: 1 },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right' }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.close;
									}, xAccessor: function (d) {
										return d.date;
									} },
								React.createElement(AreaSeries, null),
								React.createElement(
									OverlaySeries,
									{ id: 0, type: 'sma', options: { period: 50 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 1, type: 'sma', options: { period: 150 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 2, type: 'sma', options: { period: 250 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 350 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 4, type: 'sma', options: { period: 450 } },
									React.createElement(LineSeries, null)
								)
							)
						),
						React.createElement(CurrentCoordinate, { forChart: 1 }),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
						React.createElement(
							EdgeContainer,
							null,
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 0
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'first',
								orient: 'left',
								edgeAt: 'left',
								forChart: 1,
								forOverlay: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'first',
								orient: 'left',
								edgeAt: 'left',
								forChart: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 2
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 3
							})
						),
						React.createElement(
							MouseCoordinates,
							{ forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(CrossHair, null)
						),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, mainChart: 1 }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-60, -20] }),
							React.createElement(MovingAverageTooltip, { forChart: 1, onClick: this.handleMATooltipClick, origin: [-60, -10] })
						)
					);
				}
			});
	
			return AreaChartWithZoom;
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    AreaSeries = ReStock.AreaSeries,
	    Translate = ReStock.Translate,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin;
	
	module.exports = {
		init: function init(data) {
			var AreaChartWithZoomPan = React.createClass({
				displayName: 'AreaChartWithZoomPan',
	
				mixins: [ChartWidthMixin],
				handleMATooltipClick: function handleMATooltipClick(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render: function render() {
					if (this.state === null || !this.state.width) return React.createElement('div', null);
	
					var parseDate = d3.time.format('%Y-%m-%d').parse;
					var dateRange = { from: parseDate('2012-06-01'), to: parseDate('2012-12-31') };
					var dateFormat = d3.time.format('%Y-%m-%d');
	
					return React.createElement(
						ChartCanvas,
						{
							width: this.state.width, height: 500,
							margin: { left: 65, right: 90, top: 30, bottom: 30 }, data: data, ref: 'eventStore' },
						React.createElement(
							Chart,
							{ id: 1 },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right' }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.close;
									}, xAccessor: function (d) {
										return d.date;
									} },
								React.createElement(AreaSeries, null),
								React.createElement(
									OverlaySeries,
									{ id: 0, type: 'sma', options: { period: 50 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 1, type: 'sma', options: { period: 150 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 2, type: 'sma', options: { period: 250 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 350 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 4, type: 'sma', options: { period: 450 } },
									React.createElement(LineSeries, null)
								)
							)
						),
						React.createElement(CurrentCoordinate, { forChart: 1 }),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
						React.createElement(
							EdgeContainer,
							null,
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 0
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'first',
								orient: 'left',
								edgeAt: 'left',
								forChart: 1,
								forOverlay: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'first',
								orient: 'left',
								edgeAt: 'left',
								forChart: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 2
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 3
							})
						),
						React.createElement(
							MouseCoordinates,
							{ forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(CrossHair, null)
						),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1 }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-60, -20] }),
							React.createElement(MovingAverageTooltip, { forChart: 1, onClick: this.handleMATooltipClick, origin: [-60, -10] })
						)
					);
				}
			});
	
			return AreaChartWithZoomPan;
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	var Row = __webpack_require__(36);
	
	var MainContainer = React.createClass({
		displayName: 'MainContainer',
	
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'container-fluid', id: 'MainContainer' },
				React.createElement(
					Row,
					null,
					this.props.children
				)
			);
		}
	});
	
	module.exports = MainContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var MenuGroup = React.createClass({
		displayName: 'MenuGroup',
	
		render: function render() {
			return React.createElement(
				'ul',
				{ className: 'nav nav-sidebar' },
				this.props.children
			);
		}
	});
	
	module.exports = MenuGroup;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var MenuItem = React.createClass({
		displayName: 'MenuItem',
	
		propTypes: {
			current: React.PropTypes.bool.isRequired,
			title: React.PropTypes.string.isRequired
		},
		getDefaultProps: function getDefaultProps() {
			return {
				active: false
			};
		},
		render: function render() {
			var className = this.props.current ? 'active' : '';
			return React.createElement(
				'li',
				{ className: className },
				React.createElement(
					'a',
					{ href: '#/' + this.props.title },
					this.props.title
				)
			);
		}
	});
	// onClick={this.handleClick}
	module.exports = MenuItem;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var GettingStartedPage = React.createClass({
		displayName: 'GettingStartedPage',
	
		statics: {
			title: 'Getting Started'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: GettingStartedPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(39) } })
					)
				)
			);
		}
	});
	
	module.exports = GettingStartedPage;
	
	/*
					<Row>
						<Section colSpan={2}>
							<aside dangerouslySetInnerHTML={{__html: require('README')}}></aside>
						</Section>
					</Row>
	*/

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var QuickStartExamplesPage = React.createClass({
		displayName: 'QuickStartExamplesPage',
	
		statics: {
			title: 'Quick start Examples'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: QuickStartExamplesPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(40) } })
					)
				)
			);
		}
	});
	
	module.exports = QuickStartExamplesPage;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var OverviewPage = React.createClass({
		displayName: 'OverviewPage',
	
		statics: {
			title: 'Overview'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: OverviewPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(52) } })
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
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var AreaChart = __webpack_require__(41);
	var AreaChartWithYPercent = __webpack_require__(42);
	
	var OverviewPage = React.createClass({
		displayName: 'OverviewPage',
	
		statics: {
			title: 'Area Chart'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: OverviewPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(AreaChart, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(43) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(AreaChartWithYPercent, { data: this.props.someData })
					)
				)
			);
		}
	});
	
	module.exports = OverviewPage;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChart = __webpack_require__(44);
	var CandleStickStockScaleChart = __webpack_require__(46);
	
	var CandleStickChartPage = React.createClass({
		displayName: 'CandleStickChartPage',
	
		statics: {
			title: 'Candlestick Chart'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: CandleStickChartPage.title },
				React.createElement(
					Row,
					{ title: '' },
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChart, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(45) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickStockScaleChart, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(47) } })
					)
				),
				React.createElement(
					Row,
					{ title: 'stocktime scale' },
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(48) } })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartPage;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickStockScaleChartWithVolumeHistogramV1 = __webpack_require__(57);
	var CandleStickStockScaleChartWithVolumeHistogramV2 = __webpack_require__(51);
	var CandleStickStockScaleChartWithVolumeHistogramV3 = __webpack_require__(58);
	
	var VolumeHistogramPage = React.createClass({
		displayName: 'VolumeHistogramPage',
	
		statics: {
			title: 'Volume histogram'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: VolumeHistogramPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(53) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickStockScaleChartWithVolumeHistogramV1, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(54) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickStockScaleChartWithVolumeHistogramV2, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(55) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickStockScaleChartWithVolumeHistogramV3, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(56) } })
					)
				)
			);
		}
	});
	
	module.exports = VolumeHistogramPage;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithCHMousePointer = __webpack_require__(49);
	
	var MousePointerPage = React.createClass({
		displayName: 'MousePointerPage',
	
		statics: {
			title: 'Mouse pointer'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: MousePointerPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithCHMousePointer, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(50) } })
					)
				)
			);
		}
	});
	
	module.exports = MousePointerPage;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithZoomPan = __webpack_require__(59);
	
	var ZoomAndPanPage = React.createClass({
		displayName: 'ZoomAndPanPage',
	
		statics: {
			title: 'Zoom and Pan'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: ZoomAndPanPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithZoomPan, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(60) } })
					)
				)
			);
		}
	});
	
	module.exports = ZoomAndPanPage;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithMA = __webpack_require__(61);
	
	var OverlayPage = React.createClass({
		displayName: 'OverlayPage',
	
		statics: {
			title: 'Overlay'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: OverlayPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithMA, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(62) } })
					)
				)
			);
		}
	});
	
	module.exports = OverlayPage;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithEdge = __webpack_require__(64);
	
	var EdgeCoordinatesPage = React.createClass({
		displayName: 'EdgeCoordinatesPage',
	
		statics: {
			title: 'Edge coordinate'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: EdgeCoordinatesPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithEdge, { data: this.props.someData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(63) } })
					)
				)
			);
		}
	});
	
	module.exports = EdgeCoordinatesPage;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithCompare = __webpack_require__(1);
	
	var CompareWithPage = React.createClass({
		displayName: 'CompareWithPage',
	
		statics: {
			title: 'Compare'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: CompareWithPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithCompare, { data: this.props.compareData })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(65) } })
					)
				)
			);
		}
	});
	
	module.exports = CompareWithPage;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithEdge = __webpack_require__(64);
	
	var LotsOfDataPage = React.createClass({
		displayName: 'LotsOfDataPage',
	
		statics: {
			title: 'Lots of data'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: LotsOfDataPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(66) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithEdge, { data: this.props.lotsOfData })
					)
				)
			);
		}
	});
	
	module.exports = LotsOfDataPage;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var CandleStickChartWithMACDIndicator = __webpack_require__(30);
	
	var MousePointerPage = React.createClass({
		displayName: 'MousePointerPage',
	
		statics: {
			title: 'Indicators - MACD'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: MousePointerPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(67) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(CandleStickChartWithMACDIndicator, { data: this.props.someData })
					)
				)
			);
		}
	});
	
	module.exports = MousePointerPage;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var HeikinAshiChart = __webpack_require__(69);
	
	var HeikinAshiPage = React.createClass({
		displayName: 'HeikinAshiPage',
	
		statics: {
			title: 'Heikin Ashi'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: HeikinAshiPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(68) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(HeikinAshiChart, { data: this.props.someData })
					)
				)
			);
		}
	});
	
	module.exports = HeikinAshiPage;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var Kagi = __webpack_require__(77);
	
	var KagiPage = React.createClass({
		displayName: 'KagiPage',
	
		statics: {
			title: 'Kagi'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: KagiPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(70) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(Kagi, { data: this.props.lotsOfData })
					)
				)
			);
		}
	});
	
	module.exports = KagiPage;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var PointAndFigure = __webpack_require__(75);
	
	var PointAndFigurePage = React.createClass({
		displayName: 'PointAndFigurePage',
	
		statics: {
			title: 'Point & Figure'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: PointAndFigurePage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(74) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(PointAndFigure, { data: this.props.someData })
					)
				)
			);
		}
	});
	
	module.exports = PointAndFigurePage;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var Renko = __webpack_require__(72);
	
	var RenkoPage = React.createClass({
		displayName: 'RenkoPage',
	
		statics: {
			title: 'Renko'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: RenkoPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(71) } })
					)
				),
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2, className: 'react-stockchart' },
						React.createElement(Renko, { data: this.props.lotsOfData })
					)
				)
			);
		}
	});
	
	module.exports = RenkoPage;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ContentSection = __webpack_require__(37);
	var Row = __webpack_require__(36);
	var Section = __webpack_require__(38);
	
	var ComingSoonPage = React.createClass({
		displayName: 'ComingSoonPage',
	
		statics: {
			title: 'Coming soon...'
		},
		render: function render() {
			return React.createElement(
				ContentSection,
				{ title: ComingSoonPage.title },
				React.createElement(
					Row,
					null,
					React.createElement(
						Section,
						{ colSpan: 2 },
						React.createElement('aside', { dangerouslySetInnerHTML: { __html: __webpack_require__(73) } })
					)
				)
			);
		}
	});
	
	module.exports = ComingSoonPage;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator,
	    MACDSeries = ReStock.MACDSeries,
	    MACDIndicator = ReStock.indicator.MACD,
	    MACDTooltip = ReStock.tooltip.MACDTooltip;
	
	var CandleStickChartWithMACDIndicator = React.createClass({
		displayName: 'CandleStickChartWithMACDIndicator',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 150 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', height: 390,
							yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							}, padding: { top: 10, right: 0, bottom: 20, left: 0 } },
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', noTicks: true }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null),
							React.createElement(
								OverlaySeries,
								{ id: 0, type: 'sma', options: { period: 20, pluck: 'close' } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 1, type: 'ema', options: { period: 20 } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 2, type: 'ema', options: { period: 50 } },
								React.createElement(LineSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 0 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 2 }),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 310];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} }),
							React.createElement(
								OverlaySeries,
								{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
								React.createElement(AreaSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 2, forOverlay: 3 }),
					React.createElement(CurrentCoordinate, { forChart: 2 }),
					React.createElement(
						EdgeContainer,
						null,
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 0 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 1 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 2 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 0 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 1 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 2 })
					),
					React.createElement(
						Chart,
						{ id: 3, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							},
							height: 140, origin: function (w, h) {
								return [0, h - 150];
							}, padding: { top: 10, right: 0, bottom: 10, left: 0 } },
						React.createElement(XAxis, { axisAt: 150, orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 2 }),
						React.createElement(
							DataSeries,
							{ indicator: MACDIndicator, options: { fast: 12, slow: 26, signal: 9 } },
							React.createElement(MACDSeries, null)
						)
					),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-40, -10] }),
						React.createElement(MovingAverageTooltip, { forChart: 1, onClick: function (e) {
								return console.log(e);
							}, origin: [-38, 5] }),
						React.createElement(MACDTooltip, { forChart: 3, origin: function (w, h) {
								return [-38, h - 140];
							} })
					)
				)
			);
		}
	});
	
	//						<MACDTooltip forChart={3} origin={(w, h) => [-38, h - 140]}/>
	
	module.exports = CandleStickChartWithMACDIndicator;

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(80)();
	exports.push([module.id, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url("+__webpack_require__(111)+") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n", ""]);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(80)();
	exports.push([module.id, "body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.react-stockchart .axis path, .react-stockchart .axis line {\n  fill: none;\n  stroke: #000000;\n}\n\n.react-stockchart .current-coordinate {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.react-stockchart .grid.axis path, .react-stockchart .grid.axis line {\n  fill: none;\n  stroke: #000000;\n  shape-rendering: crispEdges;\n  opacity: 0.2;\n}\n\n.react-stockchart .y.axis path {\n  display: none;\n}\n\n.react-stockchart .candle .up {\n  fill: #6BA583;\n  stroke: #6BA583;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .candle .down {\n  fill: #ff0000;\n  stroke: #ff0000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .candle line {\n  stroke: #000000;\n}\n\n.react-stockchart .wick .up, .react-stockchart .wick .down {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.react-stockchart .line {\n  fill: none;\n  stroke-width: 1px;\n}\n\n.react-stockchart .line-stroke {\n  shape-rendering: crispEdges;\n  stroke: steelblue;\n}\n\n.react-stockchart .overlay-stroke {\n  stroke: steelblue;\n}\n\n.react-stockchart .yin {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 2px;\n}\n\n.react-stockchart .yang {\n  fill: none;\n  stroke: #6BA583;\n  stroke-width: 2px;\n}\n\n.react-stockchart .point_figure_up {\n  fill: none;\n  stroke: green;\n  stroke-width: 1px;\n}\n\n.react-stockchart .point_figure_down {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 1px;\n}\n\n.react-stockchart .area {\n  fill: lightsteelblue;\n  opacity: 0.5;\n}\n\n.react-stockchart .backgroundText {\n  text-anchor: middle;\n  fill: #8a8a8a;\n  opacity: 0.15;\n}\n\n.react-stockchart .cross-hair {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n  opacity: 0.2;\n}\n\n.react-stockchart .horizontal2 .textbg {\n  opacity: 0.95;\n  fill: #f0e68c;\n}\n\n.react-stockchart .horizontal2 text {\n  fill: #757575;\n}\n\n.react-stockchart .horizontal3 .textbg {\n  opacity: 0.95;\n  fill: #000000;\n}\n\n.react-stockchart .horizontal3 text {\n  fill: #757575;\n}\n\n.react-stockchart .edge-coordinate .textbg {\n  opacity: 0.95;\n}\n\n.react-stockchart .edge-coordinate text {\n  fill: #ffffff;\n}\n\n.react-stockchart .vertical .textbg, .react-stockchart .horizontal .textbg {\n  opacity: 0.9;\n  fill: #8a8a8a;\n}\n\n.react-stockchart .vertical text, .react-stockchart .horizontal text {\n  fill: #ffffff;\n}\n\n.react-stockchart .grab {\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.react-stockchart .grabbing {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.react-stockchart .crosshair {\n  cursor: crosshair;\n}\n\n.react-stockchart .toottip-hover {\n  pointer-events: all;\n  cursor: pointer;\n}\n\n.react-stockchart .histogram rect.bar {\n  fill: steelblue;\n  opacity: 0.5;\n  stroke: none;\n}\n\n.react-stockchart .histogram line.bar {\n  opacity: 0.5;\n  stroke: steelblue;\n}\n\n.react-stockchart .histogram .up {\n  fill: #6BA583;\n  opacity: 0.3;\n  stroke: none;\n}\n\n.react-stockchart .histogram .down {\n  fill: #ff0000;\n  opacity: 0.3;\n  stroke: none;\n}\n\n.react-stockchart .histogram line.up {\n  stroke: #6BA583;\n}\n\n.react-stockchart .histogram line.down {\n  stroke: #ff0000;\n}\n\n.react-stockchart .macd-series .macdline {\n  stroke: red;\n  fill: none;\n}\n\n.react-stockchart .macd-series .signalline {\n  stroke: green;\n  fill: none;\n}\n\n.react-stockchart .macd-series .horizontal {\n  stroke: black;\n  opacity: 0.2;\n  fill: none;\n}\n\n.react-stockchart .macd-series .macd-histogram {\n  opacity: 0.5;\n}\n\n.react-stockchart .ma-container rect {\n  fill: none;\n  stroke: none;\n}\n\n.react-stockchart .ma-container rect:hover {\n  fill: #8a8a8a;\n  opacity: 0.3;\n}\n\n.react-stockchart .ma-container line {\n  stroke-width: 4px;\n}\n\n.react-stockchart .legend {\n  font-size: 11px;\n}\n\n.react-stockchart .legend .tooltip-label {\n  fill: steelblue;\n  font-weight: bold;\n}\n\n.react-stockchart .legend tspan {\n  font-weight: normal;\n}\n", ""]);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var Row = React.createClass({
		displayName: 'Row',
	
		propTypes: {
			title: React.PropTypes.string,
			anchor: React.PropTypes.string
		},
		render: function render() {
			var anchor = this.props.anchor || this.props.title;
			var title = this.props.title ? React.createElement(
				'h4',
				null,
				React.createElement(
					'a',
					{ id: anchor, href: '#' + anchor },
					this.props.title
				)
			) : null;
	
			return React.createElement(
				'div',
				{ className: 'row' },
				title,
				this.props.children
			);
		}
	});
	
	module.exports = Row;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var ContentSection = React.createClass({
		displayName: 'ContentSection',
	
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render: function render() {
			return React.createElement(
				'div',
				{ id: 'ContentSection', className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' },
				React.createElement(
					'h1',
					{ className: 'page-header' },
					this.props.title
				),
				this.props.children
			);
		}
	});
	
	module.exports = ContentSection;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(2);
	
	var Section = React.createClass({
		displayName: 'Section',
	
		propTypes: {
			colSpan: React.PropTypes.number.isRequired,
			title: React.PropTypes.string
		},
		getDefaultProps: function getDefaultProps() {
			return {
				colSpan: 1
			};
		},
		render: function render() {
			var className = this.props.className + ' col-md-' + 6 * this.props.colSpan;
			var title = this.props.title ? React.createElement(
				'h4',
				null,
				this.props.title
			) : null;
			return React.createElement(
				'div',
				{ className: className },
				title,
				this.props.children
			);
		}
	});
	
	module.exports = Section;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h3>Installation</h3>\n<pre><code class=\"language-sh\">npm install react-stockcharts --save\n</code></pre>\n<h3>Bootstrap</h3>\n<pre><code class=\"language-sh\">mkdir stockchart\n<span class=\"hljs-built_in\">cd</span> stockchart\ngit <span class=\"hljs-built_in\">clone</span> https://gist.github.com/b13b739458e65ff93f4a.git\nnpm install react-stockcharts\n</code></pre>\n<p>edit the <code>index.html</code> to use the below instead of the existing one there</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"node_modules/dist/react-stockcharts.min.js\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n</code></pre>\n<p>You should be good to go</p>\n<hr>\n<h4>React version compatibility</h4>\n<p>The library is tested with React 0.13.3 and React 0.14</p>\n<p>When used with 0.13.x you get a warning</p>\n<pre><code>Warning: withContext is deprecated <span class=\"hljs-operator\">and</span> will be removed <span class=\"hljs-operator\">in</span> <span class=\"hljs-operator\">a</span> future <span class=\"hljs-built_in\">version</span>. Use <span class=\"hljs-operator\">a</span> wrapper component <span class=\"hljs-operator\">with</span> getChildContext instead.\n</code></pre>\n<p>It is ok, This is the only way to make the project work with both 0.13 &amp; 0.14 with minimal code differences. React 0.14 includes <a href=\"https://github.com/facebook/react/issues/2112\">this</a> which eliminates the need for using <code>withContext</code></p>\n<p>Checkout some live examples on plunkr from the <a href=\"#/QuickstartExamples\">quick start</a> page, change to use 0.14 alpha and see that warning disappear</p>\n<p>Context is an undocumented feature in React, it is <a href=\"https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context\">explained</a> that contexts are not going away and will be available in 1.0</p>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>AreaChart - <a href=\"https://gist.github.com/rrag/b9658ffa431f1ffb8d6b\">source</a>, <a href=\"http://bl.ocks.org/rrag/b9658ffa431f1ffb8d6b\">block</a>, <a href=\"http://plnkr.co/edit/gist:b9658ffa431f1ffb8d6b?p=preview\">plunker</a></p>\n<p>CandleStickChart - <a href=\"https://gist.github.com/rrag/b13b739458e65ff93f4a\">source</a>, <a href=\"http://bl.ocks.org/rrag/b13b739458e65ff93f4a\">block</a>, <a href=\"http://plnkr.co/edit/gist:b13b739458e65ff93f4a?p=preview\">plunker</a></p>\n<p>w/ Finance time scale - <a href=\"https://gist.github.com/rrag/1eac0cb78f27b31415ac\">source</a>, <a href=\"http://bl.ocks.org/rrag/1eac0cb78f27b31415ac\">block</a>, <a href=\"http://plnkr.co/edit/gist:1eac0cb78f27b31415ac?p=preview\">plunker</a></p>\n<p>w/ Volume Histogram</p>\n<ul>\n<li>v1 - <a href=\"https://gist.github.com/rrag/88cd65baa331d57caa83\">source</a>, <a href=\"http://bl.ocks.org/rrag/88cd65baa331d57caa83\">block</a>, <a href=\"http://plnkr.co/edit/gist:88cd65baa331d57caa83?p=preview\">plunker</a></li>\n<li>v2 - <a href=\"https://gist.github.com/rrag/0a54ca33b05001f17f8f\">source</a>, <a href=\"http://bl.ocks.org/rrag/0a54ca33b05001f17f8f\">block</a>, <a href=\"http://plnkr.co/edit/gist:0a54ca33b05001f17f8f?p=preview\">plunker</a></li>\n<li>v3 - <a href=\"https://gist.github.com/rrag/2dc9dd83567cd41c830a\">source</a>, <a href=\"http://bl.ocks.org/rrag/2dc9dd83567cd41c830a\">block</a>, <a href=\"http://plnkr.co/edit/gist:2dc9dd83567cd41c830a?p=preview\">plunker</a></li>\n</ul>\n<p>w/ crosshair mouse pointer - <a href=\"https://gist.github.com/rrag/261fa4bc7b67536eb789\">source</a>, <a href=\"http://bl.ocks.org/rrag/261fa4bc7b67536eb789\">block</a>, <a href=\"http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview\">plunker</a></p>\n<p>w/ Zoom &amp; Pan - <a href=\"https://gist.github.com/rrag/a8465abe0061df1b7976\">source</a>, <a href=\"http://bl.ocks.org/rrag/a8465abe0061df1b7976\">block</a>, <a href=\"http://plnkr.co/edit/gist:a8465abe0061df1b7976?p=preview\">plunker</a></p>\n<p>w/ Moving Average Overlay - <a href=\"https://gist.github.com/rrag/a27298bb7ae613d48ba2\">source</a>, <a href=\"http://bl.ocks.org/rrag/a27298bb7ae613d48ba2\">block</a>, <a href=\"http://plnkr.co/edit/gist:a27298bb7ae613d48ba2?p=preview\">plunker</a></p>\n<p>w/ Edge coordinates <a href=\"https://gist.github.com/rrag/70ea3fe28ad35bf3ed4c\">source</a>, <a href=\"http://bl.ocks.org/rrag/70ea3fe28ad35bf3ed4c\">block</a>, <a href=\"http://plnkr.co/edit/gist:70ea3fe28ad35bf3ed4c?p=preview\">plunker</a></p>\n<h4>Advanced Chart Types</h4>\n<p>Haikin Ashi - <a href=\"https://gist.github.com/rrag/51379c24e9751d46dcea\">source</a>, <a href=\"http://bl.ocks.org/rrag/51379c24e9751d46dcea\">block</a>, <a href=\"http://plnkr.co/edit/gist:51379c24e9751d46dcea?p=preview\">plunker</a></p>\n<p>Kagi - <a href=\"https://gist.github.com/rrag/d1e5b75ac12f754bb21d\">source</a>, <a href=\"http://bl.ocks.org/rrag/d1e5b75ac12f754bb21d\">block</a>, <a href=\"http://plnkr.co/edit/gist:d1e5b75ac12f754bb21d?p=preview\">plunker</a></p>\n<p>P &amp; F - <a href=\"https://gist.github.com/rrag/d43ef867bead0f1de663\">source</a>, <a href=\"http://bl.ocks.org/rrag/d43ef867bead0f1de663\">block</a>, <a href=\"http://plnkr.co/edit/gist:d43ef867bead0f1de663?p=preview\">plunker</a></p>\n<p>Renko - <a href=\"https://gist.github.com/rrag/df51fa445c26e123beb9\">source</a>, <a href=\"http://bl.ocks.org/rrag/df51fa445c26e123beb9\">block</a>, <a href=\"http://plnkr.co/edit/gist:df51fa445c26e123beb9?p=preview\">plunker</a></p>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    AreaSeries = ReStock.AreaSeries,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin;
	
	var AreaChart = React.createClass({
		displayName: 'AreaChart',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data },
				React.createElement(
					Chart,
					{ id: 0 },
					React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
					React.createElement(YAxis, { axisAt: 'left', orient: 'left' }),
					React.createElement(
						DataSeries,
						{ yAccessor: function (d) {
								return d.close;
							}, xAccessor: function (d) {
								return d.date;
							} },
						React.createElement(AreaSeries, null)
					)
				)
			);
		}
	});
	
	module.exports = AreaChart;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    AreaSeries = ReStock.AreaSeries,
	    Translate = ReStock.Translate,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin;
	
	var AreaChartWithYPercent = React.createClass({
		displayName: 'AreaChartWithYPercent',
		/**/
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data },
				React.createElement(
					Chart,
					{ id: 0 },
					React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
					React.createElement(YAxis, { axisAt: 'left', orient: 'left' }),
					React.createElement(YAxis, { axisAt: 'right', orient: 'right', percentScale: true, tickFormat: d3.format('.0%') }),
					React.createElement(
						DataSeries,
						{ yAccessor: function (d) {
								return d.close;
							}, xAccessor: function (d) {
								return d.date;
							} },
						React.createElement(AreaSeries, null)
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/b9658ffa431f1ffb8d6b\">source</a>, <a href=\"http://bl.ocks.org/rrag/b9658ffa431f1ffb8d6b\">block</a>, <a href=\"http://plnkr.co/edit/gist:b9658ffa431f1ffb8d6b?p=preview\">plunker</a> of this example</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. <code>data</code> is well the data used to plot.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p>If you are not familiar with <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> in d3 I recommend doing so. Each <code>Chart</code> defines an <code>xScale</code> and <code>yScale</code>. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2014-12-31 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels which can be drawn.</p>\n<p>With SVG it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"Logo Title Text 1\"></p>\n<p>For more details about the SVG coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.html\">here</a></p>\n<p>Back to scales,</p>\n<p>A time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input data, and the range is calculated as <code>height - margin.left - margin.right</code>.</p>\n<p>A Linear scale converts a <code>domain</code> say 4600 - 6200 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear, similarly there is log scale which creates a logrithmic scale, which is not linear.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the <a href=\"https://github.com/mbostock/d3/wiki/SVG-Axes#ticks\">d3.axis</a>, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in d3.axis.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>A <code>DataSeries</code> is a shell component intended to house the x and y Accessor. You will find in other examples below how <code>DataSeries</code> helps create a yAccessor with more than one y  value to plot for a given x, like in candlestick.</p>\n<p>If you are not clear what the arrow functions mean, read more about them <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">here</a>. In short</p>\n<p><code>(d) =&gt; d.close</code> means <code>function (d) { return d.close; }</code></p>\n<p><code>(d) =&gt; d.date</code> means <code>function (d) { return d.date; }</code></p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you dont want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> /&gt;</span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Create custom components and use them, it is explained <a href=\"http://add.link.here\">here</a></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">percentScale</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\".0%\")}</span>/&gt;</span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin;
	
	var CandleStickChart = React.createClass({
		displayName: 'CandleStickChart',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data },
				React.createElement(
					Chart,
					{ id: 1 },
					React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
					React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5 }),
					React.createElement(
						DataSeries,
						{ yAccessor: CandlestickSeries.yAccessor, xAccessor: function (d) {
								return d.date;
							} },
						React.createElement(CandlestickSeries, null)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChart;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/b13b739458e65ff93f4a\">source</a>, <a href=\"http://bl.ocks.org/rrag/b13b739458e65ff93f4a\">block</a>, <a href=\"http://plnkr.co/edit/gist:b13b739458e65ff93f4a?p=preview\">plunker</a> of this example</p>\n<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continious time scale, and a continious time scale has week ends and national holidays, days when trading does not happen. Now we dont want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continious on the x axis. Enter <strong>stocktime scale</strong> (or <strong>financetime scale</strong>).</p>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin;
	
	var CandleStickStockScaleChart = React.createClass({
		displayName: 'CandleStickStockScaleChart',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1 },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickStockScaleChart;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/1eac0cb78f27b31415ac\">source</a>, <a href=\"http://bl.ocks.org/rrag/1eac0cb78f27b31415ac\">block</a>, <a href=\"http://plnkr.co/edit/gist:1eac0cb78f27b31415ac?p=preview\">plunker</a> of this example</p>\n<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse;\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.open = +d.open;\n        d.high = +d.high;\n        d.low = +d.low;\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>It is the same as for <code>AreaChart</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n</code></pre>\n<p>Converting the data provided as input which when taken as a linear scale includes weekend time breaks, into a linear scale over the input domain. More usecases of <code>DataTransform</code> are listed below.</p>\n<p><strong>Coming Soon</strong> Create your own transforms and register them for use</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example above</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>You will notice that the <code>DataSeries</code> component does not include the <code>xAccessor</code>, that is because it is defined inside the stockscale <code>DataTransform</code> which provides the <code>xAccessor</code> behind the scenes</p>\n<p><code>yAccessor={CandlestickSeries.yAccessor}</code> is just a convenience <code>yAccessor</code> available, it can also be represented as</p>\n<pre><code class=\"language-js\">yAccessor={(d) =&gt; ({open: d.open, high: d.high, low: d.low, close: d.close})}\n</code></pre>\n<p>or if arrow functions is not your thing, use</p>\n<pre><code class=\"language-js\">yAccessor={<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(d)</span> </span>{ <span class=\"hljs-keyword\">return</span> {open: d.open, high: d.high, low: d.low, close: d.close}; }}\n</code></pre>\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n<p><strong>Coming Soon</strong> updated financetime scale for intra day</p>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip;
	
	var CandleStickChartWithCHMousePointer = React.createClass({
		displayName: 'CandleStickChartWithCHMousePointer',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							} },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} })
						)
					),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, mainChart: 1 }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithCHMousePointer;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/261fa4bc7b67536eb789\">source</a>, <a href=\"http://bl.ocks.org/rrag/261fa4bc7b67536eb789\">block</a>, <a href=\"http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview\">plunker</a> of this example</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span>\n    <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">70</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">70</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{this.props.data}</span> <span class=\"hljs-attribute\">interval</span>=<span class=\"hljs-value\">\"D\"</span> <span class=\"hljs-attribute\">initialDisplay</span>=<span class=\"hljs-value\">{30}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">yMousePointerDisplayLocation</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">yMousePointerDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">yMousePointerDisplayLocation</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">yMousePointerDisplayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span>\n                <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{dateFormat}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"crosshair\"</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above. <code>mainChart</code> as the name describes is used to refer to the <code>Chart</code> from which the <code>xScale</code> and <code>yScale</code> are used to determine the nearest value to the mouse position.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{dateFormat}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"crosshair\"</span> /&gt;</span>\n</code></pre>\n<p>Displays the crosshair at the mouse position, the attributes of <code>MouseCoordinates</code> are self explanatory.</p>\n<p><code>Chart</code> gets a few new props to indicate the y mouse pointer tooltip location and format</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">yMousePointerDisplayLocation</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">yMousePointerDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">yMousePointerDisplayLocation</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">yMousePointerDisplayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span>\n</span></code></pre>\n<p>And for the tooltip on the top left</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries;
	
	var CandleStickStockScaleChartWithVolumeHistogramV2 = React.createClass({
		displayName: 'CandleStickStockScaleChartWithVolumeHistogramV2',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 100 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1 },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					),
					React.createElement(
						Chart,
						{ id: 2, height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} })
						)
					)
				)
			);
		}
	});
	
	module.exports = CandleStickStockScaleChartWithVolumeHistogramV2;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts project provides a flexible library to create charts that represent time series data. It is easy to learn and can be customized by</p>\n<ul>\n<li>adding custom chart components</li>\n<li>access the <code>svg</code> elements</li>\n<li>styling with CSS</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems.</p>\n<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just charts, but ones which are interactive too -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer. I have chosen to use SVG for React Stockcharts because,</p>\n<ul>\n<li>you will see very soon the performance is not an issue really, thanks to React JS and the virtual dom</li>\n<li>the flexibility of development and the convinenience of debuging a DOM is hard to beat</li>\n<li>styling with css is something I cannot give up</li>\n</ul>\n<p>That said, I do wish to some day create a fork of this on Canvas.</p>\n<h4>DOM Manipulation</h4>\n<p>The only place where DOM Manipulation is used is in the <code>XAxis</code> and <code>YAxis</code> components, I will soon migrate to use the native <code>svg</code> axes provided by <a href=\"https://github.com/esbullington/react-d3\">react-d3</a>, at which time the entire project will be built with native svg components making server side rendering possible.</p>\n<p>Now let us get started with a very simple AreaChart</p>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/88cd65baa331d57caa83\">source</a>, <a href=\"http://bl.ocks.org/rrag/88cd65baa331d57caa83\">block</a>, <a href=\"http://plnkr.co/edit/gist:88cd65baa331d57caa83?p=preview\">plunker</a> of this example</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there.</p>\n<p>Each <code>Chart</code> has a pair of <code>xScale</code> and <code>yScale</code> since <code>volume</code> is on a different domain from <code>open</code>/<code>high</code>/<code>low</code>/<code>close</code>, It has to be created as a different <code>Chart</code>.</p>\n<p>To summarize, All <code>Chart</code>s use the same <code>data</code> but each <code>Chart</code> has different <code>xScale</code> and <code>yScale</code>. In this example above the <code>xScale</code> of chart 2 has the same <code>domain</code> and <code>range</code> as the <code>xScale</code> of <code>Chart</code> 1, so we did not draw the <code>XAxis</code> again for the Volume.</p>\n<h5>But… I dont want the Volume chart to span the whole chart height.</h5>\n<p>I got you covered.</p>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/0a54ca33b05001f17f8f\">source</a>, <a href=\"http://bl.ocks.org/rrag/0a54ca33b05001f17f8f\">block</a>, <a href=\"http://plnkr.co/edit/gist:0a54ca33b05001f17f8f?p=preview\">plunker</a> of this example</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150, which is good.</p>\n<p><code>origin</code> can be either a function which returns a <code>[x, y]</code> to be used as origin or it can be an array with 2 elements representing <code>[x, y]</code>. The default value for <code>origin</code> is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>className</code> of <code>HistogramSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string</li>\n<li>or a string</li>\n</ul>\n<p>which is used as the css class</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n</code></pre>\n<p>a class of ‘up’ is applied if <code>close &gt; open</code> for that day and ‘down’ otherwise</p>\n<h4>Another Version</h4>\n<p>In this you can see how the volume histogram and the candlestick chart do not overlap.</p>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/2dc9dd83567cd41c830a\">source</a>, <a href=\"http://bl.ocks.org/rrag/2dc9dd83567cd41c830a\">block</a>, <a href=\"http://plnkr.co/edit/gist:2dc9dd83567cd41c830a?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries;
	var CandleStickStockScaleChartWithVolumeHistogramV1 = React.createClass({
		displayName: 'CandleStickStockScaleChartWithVolumeHistogramV1',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 100 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1 },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					),
					React.createElement(
						Chart,
						{ id: 2 },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, null)
						)
					)
				)
			);
		}
	});
	module.exports = CandleStickStockScaleChartWithVolumeHistogramV1;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries;
	
	var CandleStickStockScaleChartWithVolumeHistogramV3 = React.createClass({
		displayName: 'CandleStickStockScaleChartWithVolumeHistogramV3',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 100 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							},
							height: 400 },
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', noTicks: true }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} })
						)
					),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-40, -10] }),
						React.createElement(MovingAverageTooltip, { forChart: 1, onClick: function (e) {
								return console.log(e);
							}, origin: [-38, 5] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickStockScaleChartWithVolumeHistogramV3;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip;
	
	var CandleStickChartWithZoomPan = React.createClass({
		displayName: 'CandleStickChartWithZoomPan',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, data: this.props.data },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							} },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null)
						)
					),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} })
						)
					),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithZoomPan;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The only change is enabling <code>zoom</code> and <code>pan</code></p>\n<p>checkout the <a href=\"https://gist.github.com/rrag/a8465abe0061df1b7976\">source</a>, <a href=\"http://bl.ocks.org/rrag/a8465abe0061df1b7976\">block</a>, <a href=\"http://plnkr.co/edit/gist:a8465abe0061df1b7976?p=preview\">plunker</a> of this example</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<p>other than enabling <code>zoom</code> and <code>pan</code>, <code>defaultFocus</code> of <code>true</code> means mouse scroll over the chart, triggers zoom action if zoom is enabled. If <code>defaultFocus</code> is <code>false</code>, you have to click on the chart to get focus and then all scroll events are zoom events if <code>zoom</code> is enabled</p>\n<p>You could set the focus programatically by adding a ref to the <code>EventCapture</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">ref</span>=<span class=\"hljs-value\">\"eventCapture\"</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">this</span>.refs.eventCapture.toggleFocus(); <span class=\"hljs-comment\">// to toggle focus so scroll events over the chart will either simulate zoom or perform the default action</span>\n\n<span class=\"hljs-keyword\">this</span>.refs.eventCapture.setFocus(<span class=\"hljs-literal\">false</span>); <span class=\"hljs-comment\">// set the focus </span>\n</code></pre>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries;
	
	var CandleStickChartWithMA = React.createClass({
		displayName: 'CandleStickChartWithMA',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							},
							padding: { top: 10, right: 0, bottom: 20, left: 0 } },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null),
							React.createElement(
								OverlaySeries,
								{ id: 0, type: 'sma', options: { period: 20, pluck: 'close' } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 1, type: 'ema', options: { period: 20 } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 2, type: 'ema', options: { period: 50 } },
								React.createElement(LineSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 0 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 2 }),
					React.createElement(
						Chart,
						{ id: 2, yMousePointerDisplayLocation: 'left', yMousePointerDisplayFormat: d3.format('.4s'),
							height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} }),
							React.createElement(
								OverlaySeries,
								{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
								React.createElement(AreaSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 2, forOverlay: 3 }),
					React.createElement(CurrentCoordinate, { forChart: 2 }),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] }),
						React.createElement(MovingAverageTooltip, { forChart: 1, onClick: function (e) {
								return console.log(e);
							}, origin: [-38, 15] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithMA;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/a27298bb7ae613d48ba2\">source</a>, <a href=\"http://bl.ocks.org/rrag/a27298bb7ae613d48ba2\">block</a>, <a href=\"http://plnkr.co/edit/gist:a27298bb7ae613d48ba2?p=preview\">plunker</a> of this example</p>\n<p><code>Overlay</code>s share the scales of a <code>Chart</code> and contribute to the <code>domain</code> of the <code>Chart</code> they belong to.</p>\n<p>In this chart we are introducing</p>\n<ul>\n<li>Moving average on daily <code>close</code> as a <code>LineSeries</code></li>\n<li>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></li>\n<li>Current item indicator as a circle over the different moving averages</li>\n<li>Moving average tooltip</li>\n</ul>\n<p>Let us review each of these in a little more detail</p>\n<h4>Moving average on daily <code>close</code> as a <code>LineSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">20</span>, <span class=\"hljs-attribute\">pluck:</span> '<span class=\"hljs-attribute\">close</span>' }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">30</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">50</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p><code>type</code> indicates it is a simple moving average, <code>options</code> used to specify the moving average <code>period</code>, and <code>pluck</code> to specify attribute against which moving average is to be calculated. If not specified, <code>pluck</code> defaults to <code>close</code></p>\n<h4>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">10</span>, <span class=\"hljs-attribute\">pluck:</span>'<span class=\"hljs-attribute\">volume</span>' }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>Similar to above</p>\n<h4>Current item indicator as a circle over the different moving averages</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span>/&gt;</span>\n</code></pre>\n<p>That was easy, right?</p>\n<p><code>forOverlay</code> is an optional attribute, and absense of that will default the <code>CurrentCoordinate</code> to display a circle on the main series. This only makes sense if the main series plots a single value on y. For <code>CandlestickSeries</code> as it plots 4 attributes, <code>CurrentCoordinate</code> is not valid for <code>CandlestickSeries</code></p>\n<h4>Moving average tooltip</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MovingAverageTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">onClick</span>=<span class=\"hljs-value\">{(e)</span> =&gt;</span> console.log(e)} origin={[-38, 15]}/&gt;\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>Open the dev console and see what is logged on click of the moving average tooltip</p>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>checkout the <a href=\"https://gist.github.com/rrag/70ea3fe28ad35bf3ed4c\">source</a>, <a href=\"http://bl.ocks.org/rrag/70ea3fe28ad35bf3ed4c\">block</a>, <a href=\"http://plnkr.co/edit/gist:70ea3fe28ad35bf3ed4c?p=preview\">plunker</a> of this example</p>\n<p><code>EdgeIndicator</code>s are inside the <code>EdgeContainer</code> and can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan too</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n</code></pre>\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator;
	
	var CandleStickChartWithEdge = React.createClass({
		displayName: 'CandleStickChartWithEdge',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var parseDate = d3.time.format('%Y-%m-%d').parse;
			var dateRange = { from: parseDate('2012-12-01'), to: parseDate('2012-12-31') };
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						Chart,
						{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							} },
						React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
						React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
						React.createElement(
							DataSeries,
							{ yAccessor: CandlestickSeries.yAccessor },
							React.createElement(CandlestickSeries, null),
							React.createElement(
								OverlaySeries,
								{ id: 0, type: 'sma', options: { period: 20, pluck: 'close' } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 1, type: 'sma', options: { period: 30 } },
								React.createElement(LineSeries, null)
							),
							React.createElement(
								OverlaySeries,
								{ id: 2, type: 'sma', options: { period: 50 } },
								React.createElement(LineSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 0 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
					React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 2 }),
					React.createElement(
						Chart,
						{ id: 2, height: 150, origin: function (w, h) {
								return [0, h - 150];
							} },
						React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
						React.createElement(
							DataSeries,
							{ yAccessor: function (d) {
									return d.volume;
								} },
							React.createElement(HistogramSeries, { className: function (d) {
									return d.close > d.open ? 'up' : 'down';
								} }),
							React.createElement(
								OverlaySeries,
								{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
								React.createElement(AreaSeries, null)
							)
						)
					),
					React.createElement(CurrentCoordinate, { forChart: 2, forOverlay: 3 }),
					React.createElement(CurrentCoordinate, { forChart: 2 }),
					React.createElement(
						EdgeContainer,
						null,
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 0 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 1 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 1, forOverlay: 2 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 0 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 1 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 1, forOverlay: 2 }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 2, forOverlay: 3, displayFormat: d3.format('.4s') }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 2, forOverlay: 3, displayFormat: d3.format('.4s') }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
							edgeAt: 'left', forChart: 2, displayFormat: d3.format('.4s') }),
						React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
							edgeAt: 'right', forChart: 2, displayFormat: d3.format('.4s') })
					),
					React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
					React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					React.createElement(
						TooltipContainer,
						null,
						React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] }),
						React.createElement(MovingAverageTooltip, { forChart: 1, onClick: function (e) {
								return console.log(e);
							}, origin: [-48, 15] })
					)
				)
			);
		}
	});
	
	module.exports = CandleStickChartWithEdge;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Compare with another stock, zoom and pan to see how the comparison works</p>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Let us turn it up a notch, we all have access to lots of historical data for stocks. As an example, let us work with MSFT from 1986-03-13 till 2015-03-26</p>\n<p>That is 7221 one day periods, lot more if you have access to intra day, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. This problem is addressed in React Stockcharts by displaying data consolidated by month or week, this gives a better representation of the overall price movement. This technique is employed by many trading systems to show the larger time range.</p>\n<p>If the number of periods to show &gt; width / 3, then automatically switch to the next higher period. e.g. If width = 1000 and showing more than 333 1 day periods, the program switches to 1 week period automatically so that less than 333 periods are shown on screen.</p>\n<p>* Period can be 1min, 5min, … 1 day, 1 week, 1 month</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Moving Average Convergence Divergence (MACD) indicator with defaults</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_average_convergence_divergence_macd\">plot</a> it</p>\n";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n<p>checkout the <a href=\"https://gist.github.com/rrag/51379c24e9751d46dcea\">source</a>, <a href=\"http://bl.ocks.org/rrag/51379c24e9751d46dcea\">block</a>, <a href=\"http://plnkr.co/edit/gist:51379c24e9751d46dcea?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    CandlestickSeries = ReStock.CandlestickSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator;
	var HaikinAshi = React.createClass({
		displayName: 'HaikinAshi',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						DataTransform,
						{ transformType: 'heikinashi' },
						React.createElement(
							Chart,
							{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
							React.createElement(
								DataSeries,
								{ yAccessor: CandlestickSeries.yAccessor },
								React.createElement(CandlestickSeries, null),
								React.createElement(
									OverlaySeries,
									{ id: 0, type: 'sma', options: { period: 20, pluck: 'close' } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 1, type: 'sma', options: { period: 30 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 2, type: 'sma', options: { period: 50 } },
									React.createElement(LineSeries, null)
								)
							)
						),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 0 }),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 2 }),
						React.createElement(
							Chart,
							{ id: 2, height: 150, origin: function (w, h) {
									return [0, h - 150];
								} },
							React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.volume;
									} },
								React.createElement(HistogramSeries, { className: function (d) {
										return d.close > d.open ? 'up' : 'down';
									} }),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
									React.createElement(AreaSeries, null)
								)
							)
						),
						React.createElement(CurrentCoordinate, { forChart: 2, forOverlay: 3 }),
						React.createElement(CurrentCoordinate, { forChart: 2 }),
						React.createElement(
							EdgeContainer,
							null,
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
								edgeAt: 'right', forChart: 1, forOverlay: 0 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
								edgeAt: 'right', forChart: 1, forOverlay: 1 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
								edgeAt: 'right', forChart: 1, forOverlay: 2 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
								edgeAt: 'left', forChart: 1, forOverlay: 0 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
								edgeAt: 'left', forChart: 1, forOverlay: 1 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
								edgeAt: 'left', forChart: 1, forOverlay: 2 }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
								edgeAt: 'left', forChart: 2, forOverlay: 3, displayFormat: d3.format('.4s') }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
								edgeAt: 'right', forChart: 2, forOverlay: 3, displayFormat: d3.format('.4s') }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'first', orient: 'left',
								edgeAt: 'left', forChart: 2, displayFormat: d3.format('.4s') }),
							React.createElement(EdgeIndicator, { className: 'horizontal', itemType: 'last', orient: 'right',
								edgeAt: 'right', forChart: 2, displayFormat: d3.format('.4s') })
						),
						React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] }),
							React.createElement(MovingAverageTooltip, { forChart: 1, onClick: function (e) {
									return console.log(e);
								}, origin: [-48, 15] })
						)
					)
				)
			);
		}
	});
	
	module.exports = HaikinAshi;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:kagi\">here</a></p>\n<p>Kagi consists of <em>Yin</em> and <em>Yang</em>, which is represented as red and green respectively. An overly simple rule is buy on Yang and sell on Yin.</p>\n<p>ATR(14) is used as the default reversal amount.</p>\n<p>checkout the <a href=\"https://gist.github.com/rrag/d1e5b75ac12f754bb21d\">source</a>, <a href=\"http://bl.ocks.org/rrag/d1e5b75ac12f754bb21d\">block</a>, <a href=\"http://plnkr.co/edit/gist:d1e5b75ac12f754bb21d?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Similar to Point and Figure charts in that Renko plots the price movement ignoring the time. Each brick is formed on a different column when the price moves beyond a threshold.</p>\n<p>Brick size defaults to ATR (14)</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:renko\">here</a></p>\n<p>checkout the <a href=\"https://gist.github.com/rrag/df51fa445c26e123beb9\">source</a>, <a href=\"http://bl.ocks.org/rrag/df51fa445c26e123beb9\">block</a>, <a href=\"http://plnkr.co/edit/gist:df51fa445c26e123beb9?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    RenkoSeries = ReStock.RenkoSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator;
	
	var Renko = React.createClass({
		displayName: 'Renko',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						DataTransform,
						{ transformType: 'renko' },
						React.createElement(
							Chart,
							{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
							React.createElement(
								DataSeries,
								{ yAccessor: RenkoSeries.yAccessor },
								React.createElement(RenkoSeries, null)
							)
						),
						React.createElement(
							Chart,
							{ id: 2, height: 150, origin: function (w, h) {
									return [0, h - 150];
								} },
							React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.volume;
									} },
								React.createElement(HistogramSeries, { className: function (d) {
										return d.close > d.open ? 'up' : 'down';
									} }),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
									React.createElement(AreaSeries, null)
								)
							)
						),
						React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] })
						)
					)
				)
			);
		}
	});
	
	module.exports = Renko;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>Overlays</h4>\n<ul>\n<li><del>Exponential Moving Average (EMA) - v0.1</del></li>\n<li>Bolinger Bands - v0.2</li>\n<li><del>Compare with another stock - v0.1</del></li>\n</ul>\n<h4>Indicators</h4>\n<ul>\n<li><del>Moving Average Convergence Divergence (MACD) - v0.1</del></li>\n<li>Relative Strength Index (RSI) - v0.2</li>\n<li>Stochastics - v0.2</li>\n<li>More indicators - suggestions welcome - v0.2</li>\n</ul>\n<h4>Chart types</h4>\n<ul>\n<li><del>Heikin Ashi - v0.1</del></li>\n<li><del>Kagi - v0.1</del></li>\n<li><del>Point and Figure - v0.1</del></li>\n<li><del>Renko - v0.1</del></li>\n<li>Better Renko/Mean Renko - v0.2</li>\n<li>Line break - v0.2</li>\n<li>Volume Profile - v0.3</li>\n</ul>\n<h4>Chart features</h4>\n<ul>\n<li><del>Change interval on zoom out/zoom in - v0.1</del></li>\n<li>Add custom data transforms - v0.3</li>\n<li>Provide option to use canvas instead of svg - v0.3</li>\n</ul>\n<h4>More examples</h4>\n<ul>\n<li><del>gists, fiddle and <a href=\"http://bl.ocks.org/\">blocks</a> for each chart type - v0.1</del></li>\n</ul>\n<h4>Open issues</h4>\n<ul>\n<li><del>Window Resize after zoom/pan messes up the chart</del></li>\n<li><del>zoom out changes the interval, but zoom in does not change</del></li>\n<li><del>Refactor pan and zoom</del></li>\n</ul>\n<h4>Tech Tasks</h4>\n<ul>\n<li><p>Use ES6 Classes</p>\n<ul>\n<li><del>Do not use EventCaptureMixin, ChartContainerMixin</del></li>\n<li>Update examples to not use ChartWidthMixin</li>\n</ul></li>\n<li><p><del>use babel</del></p></li>\n<li><p><del>change require to import</del></p></li>\n<li><p><del>execute lint &amp; code style</del></p></li>\n<li><p>not use JSXTransformer</p></li>\n<li><p>Publish to npm - v0.1-alpha</p></li>\n<li><p>Getting Started page with steps to get started via npm</p></li>\n<li><p>remove esprima-fb</p></li>\n<li><p>Add tests and coverage - v0.2</p></li>\n<li><p>configure options for advanced chart types - v0.2</p></li>\n</ul>\n<h4>Dependencies</h4>\n<ul>\n<li><del>Experiment with React 0.13 instead of React 0.14 - v0.1</del></li>\n<li><del>Remove Freezer-js dependency - v0.1</del></li>\n</ul>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/docs/doku.php?id=other-tools:pnf-charts\">here</a></p>\n<p>default is 3 box reversal.</p>\n<p>checkout the <a href=\"https://gist.github.com/rrag/d43ef867bead0f1de663\">source</a>, <a href=\"http://bl.ocks.org/rrag/d43ef867bead0f1de663\">block</a>, <a href=\"http://plnkr.co/edit/gist:d43ef867bead0f1de663?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    PointAndFigureSeries = ReStock.PointAndFigureSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator;
	var PointAndFigure = React.createClass({
		displayName: 'PointAndFigure',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						DataTransform,
						{ transformType: 'pointandfigure', options: { boxSize: 0.5 } },
						React.createElement(
							Chart,
							{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
							React.createElement(
								DataSeries,
								{ yAccessor: PointAndFigureSeries.yAccessor },
								React.createElement(PointAndFigureSeries, null)
							)
						),
						React.createElement(
							Chart,
							{ id: 2, height: 150, origin: function (w, h) {
									return [0, h - 150];
								} },
							React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.volume;
									} },
								React.createElement(HistogramSeries, { className: function (d) {
										return d.close > d.open ? 'up' : 'down';
									} }),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
									React.createElement(AreaSeries, null)
								)
							)
						),
						React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] })
						)
					)
				)
			);
		}
	});
	
	module.exports = PointAndFigure;

/***/ },
/* 76 */
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    KagiSeries = ReStock.KagiSeries,
	    DataTransform = ReStock.DataTransform,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    ChartWidthMixin = ReStock.helper.ChartWidthMixin,
	    HistogramSeries = ReStock.HistogramSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    CurrentCoordinate = ReStock.CurrentCoordinate,
	    AreaSeries = ReStock.AreaSeries,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator;
	
	var Kagi = React.createClass({
		displayName: 'Kagi',
	
		mixins: [ChartWidthMixin],
		render: function render() {
			if (this.state === null || !this.state.width) return React.createElement('div', null);
	
			var dateFormat = d3.time.format('%Y-%m-%d');
	
			return React.createElement(
				ChartCanvas,
				{ width: this.state.width, height: 400,
					margin: { left: 90, right: 70, top: 10, bottom: 30 }, data: this.props.data, interval: 'D', initialDisplay: 30 },
				React.createElement(
					DataTransform,
					{ transformType: 'stockscale' },
					React.createElement(
						DataTransform,
						{ transformType: 'kagi' },
						React.createElement(
							Chart,
							{ id: 1, yMousePointerDisplayLocation: 'right', yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom' }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right', ticks: 5 }),
							React.createElement(
								DataSeries,
								{ yAccessor: KagiSeries.yAccessor },
								React.createElement(KagiSeries, null)
							)
						),
						React.createElement(
							Chart,
							{ id: 2, height: 150, origin: function (w, h) {
									return [0, h - 150];
								} },
							React.createElement(YAxis, { axisAt: 'left', orient: 'left', ticks: 5, tickFormat: d3.format('s') }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.volume;
									} },
								React.createElement(HistogramSeries, { className: function (d) {
										return d.close > d.open ? 'up' : 'down';
									} }),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 10, pluck: 'volume' } },
									React.createElement(AreaSeries, null)
								)
							)
						),
						React.createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: 'crosshair' }),
						React.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1, origin: [-50, 0] })
						)
					)
				)
			);
		}
	});
	
	module.exports = Kagi;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var d3 = __webpack_require__(3);
	
	var ReStock = __webpack_require__(79);
	
	var ChartCanvas = ReStock.ChartCanvas,
	    XAxis = ReStock.XAxis,
	    YAxis = ReStock.YAxis,
	    AreaSeries = ReStock.AreaSeries,
	    Translate = ReStock.Translate,
	    Chart = ReStock.Chart,
	    DataSeries = ReStock.DataSeries,
	    EventCapture = ReStock.EventCapture,
	    MouseCoordinates = ReStock.MouseCoordinates,
	    CrossHair = ReStock.CrossHair,
	    TooltipContainer = ReStock.TooltipContainer,
	    OHLCTooltip = ReStock.OHLCTooltip,
	    OverlaySeries = ReStock.OverlaySeries,
	    LineSeries = ReStock.LineSeries,
	    MovingAverageTooltip = ReStock.MovingAverageTooltip,
	    EdgeContainer = ReStock.EdgeContainer,
	    EdgeIndicator = ReStock.EdgeIndicator,
	    CurrentCoordinate = ReStock.CurrentCoordinate;
	
	module.exports = {
		init: function init(data) {
			var AreaChartWithEdgeCoordinates = React.createClass({
				displayName: 'AreaChartWithEdgeCoordinates',
	
				getInitialState: function getInitialState() {
					return {
						width: 500,
						height: 400
					};
				},
				getEventStore: function getEventStore() {
					return this.refs.eventStore.getEventStore();
				},
				updateEventStore: function updateEventStore(eventStore) {
					return this.refs.eventStore.updateEventStore(eventStore);
				},
				handleMATooltipClick: function handleMATooltipClick(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render: function render() {
					var parseDate = d3.time.format('%Y-%m-%d').parse;
					var dateRange = { from: parseDate('2012-06-01'), to: parseDate('2012-12-31') };
					var dateFormat = d3.time.format('%Y-%m-%d');
	
					return React.createElement(
						ChartCanvas,
						{
							width: this.state.width, height: this.state.height,
							margin: { left: 5, right: 90, top: 10, bottom: 30 }, data: data, ref: 'eventStore' },
						React.createElement(
							Chart,
							{ id: 1 },
							React.createElement(XAxis, { axisAt: 'bottom', orient: 'bottom', ticks: 6 }),
							React.createElement(YAxis, { axisAt: 'right', orient: 'right' }),
							React.createElement(
								DataSeries,
								{ yAccessor: function (d) {
										return d.close;
									}, xAccessor: function (d) {
										return d.date;
									} },
								React.createElement(AreaSeries, null),
								React.createElement(
									OverlaySeries,
									{ id: 0, type: 'sma', options: { period: 50 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 1, type: 'sma', options: { period: 150 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 3, type: 'sma', options: { period: 250 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 4, type: 'sma', options: { period: 350 } },
									React.createElement(LineSeries, null)
								),
								React.createElement(
									OverlaySeries,
									{ id: 5, type: 'sma', options: { period: 450 } },
									React.createElement(LineSeries, null)
								)
							)
						),
						React.createElement(CurrentCoordinate, { forChart: 1 }),
						React.createElement(CurrentCoordinate, { forChart: 1, forOverlay: 1 }),
						React.createElement(
							EdgeContainer,
							null,
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 1
							}),
							React.createElement(EdgeIndicator, {
								className: 'horizontal',
								itemType: 'last',
								orient: 'right',
								edgeAt: 'right',
								forChart: 1,
								forOverlay: 5
							})
						),
						React.createElement(
							MouseCoordinates,
							{ forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function (y) {
									return y.toFixed(2);
								} },
							React.createElement(CrossHair, null)
						),
						React.createElement(EventCapture, { mouseMove: true, mainChart: 1 }),
						React.createElement(
							TooltipContainer,
							null,
							React.createElement(OHLCTooltip, { forChart: 1 }),
							React.createElement(MovingAverageTooltip, { forChart: 1, onClick: this.handleMATooltipClick })
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
	;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// common components
	exports.ChartCanvas = __webpack_require__(82);
	exports.DataTransform = __webpack_require__(83);
	
	exports.XAxis = __webpack_require__(84);
	exports.YAxis = __webpack_require__(85);
	exports.Chart = __webpack_require__(86);
	exports.DataSeries = __webpack_require__(87);
	
	// chart types & Series
	exports.AreaSeries = __webpack_require__(88);
	exports.LineSeries = __webpack_require__(89);
	exports.CompareSeries = __webpack_require__(90);
	exports.CandlestickSeries = __webpack_require__(95);
	exports.OverlaySeries = __webpack_require__(91);
	exports.HistogramSeries = __webpack_require__(92);
	exports.KagiSeries = __webpack_require__(93);
	exports.PointAndFigureSeries = __webpack_require__(94);
	exports.RenkoSeries = __webpack_require__(96);
	exports.MACDSeries = __webpack_require__(97);
	
	// interaction components
	exports.EventCapture = __webpack_require__(98);
	exports.MouseCoordinates = __webpack_require__(81);
	exports.CrossHair = __webpack_require__(99);
	exports.VerticalMousePointer = __webpack_require__(100);
	exports.CurrentCoordinate = __webpack_require__(101);
	
	// misc
	exports.EdgeContainer = __webpack_require__(102);
	exports.EdgeIndicator = __webpack_require__(103);
	
	exports.helper = {};
	exports.helper.ChartWidthMixin = __webpack_require__(104);
	
	exports.indicator = {
		MACD: __webpack_require__(105)
	};
	
	// Tooltips
	exports.tooltip = {
		MACDTooltip: __webpack_require__(110),
		TooltipContainer: __webpack_require__(106),
		OHLCTooltip: __webpack_require__(107),
		CompareTooltip: __webpack_require__(108),
		MovingAverageTooltip: __webpack_require__(109)
	};
	
	exports.TooltipContainer = __webpack_require__(106);
	exports.OHLCTooltip = __webpack_require__(107);
	exports.CompareTooltip = __webpack_require__(108);
	exports.MovingAverageTooltip = __webpack_require__(109);

/***/ },
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _libUtilsPureComponent = __webpack_require__(116);
	
	var _libUtilsPureComponent2 = _interopRequireDefault(_libUtilsPureComponent);
	
	var _CrossHair = __webpack_require__(99);
	
	var _CrossHair2 = _interopRequireDefault(_CrossHair);
	
	var MouseCoordinates = (function (_PureComponent) {
		function MouseCoordinates(props, context) {
			_classCallCheck(this, MouseCoordinates);
	
			_get(Object.getPrototypeOf(MouseCoordinates.prototype), "constructor", this).call(this, props, context);
			this.getPointer = this.getPointer.bind(this);
		}
	
		_inherits(MouseCoordinates, _PureComponent);
	
		_createClass(MouseCoordinates, [{
			key: "getPointer",
			value: function getPointer() {
				var _this = this;
	
				var _context = this.context;
				var currentCharts = _context.currentCharts;
				var chartData = _context.chartData;
				var currentItems = _context.currentItems;
	
				var edges = chartData.filter(function (eachChartData) {
					return currentCharts.indexOf(eachChartData.id) > -1;
				}).map(function (each) {
					var yDisplayFormat = each.config.compareSeries.length > 0 ? function (d) {
						return (Math.round(d * 10000) / 100).toFixed(2) + "%";
					} : each.config.mouseCoordinates.format;
					var mouseY = _this.context.mouseXY[1] - each.config.origin[1];
					var yValue = each.plot.scales.yScale.invert(mouseY);
					return {
						id: each.id,
						at: each.config.mouseCoordinates.at,
						yValue: yValue,
						yDisplayFormat: yDisplayFormat
					};
				}).filter(function (each) {
					return each.at !== undefined;
				}).filter(function (each) {
					return each.yDisplayFormat !== undefined;
				}).map(function (each) {
					each.yDisplayValue = each.yDisplayFormat(each.yValue);
					return each;
				});
	
				// console.log(edges);
				var singleChartData = chartData.filter(function (eachChartData) {
					return eachChartData.id === _this.context.mainChart;
				})[0];
	
				// var yDisplayFormat = singleChartData.config.compareSeries.length > 0 ? (d) => (Math.round(d * 10000) / 100).toFixed(2) + "%" : this.props.yDisplayFormat;
	
				var item = currentItems.filter(function (eachItem) {
					return eachItem.id === _this.context.mainChart;
				})[0]; // ChartDataUtil.getCurrentItemForChart(this.props, this.context);
				if (item === undefined) return null;
				item = item.data;
				// console.log(singleChartData, item);
				var xValue = singleChartData.config.accessors.xAccessor(item);
	
				var xDisplayValue = this.context.dataTransformOptions === undefined ? xValue : this.context.dataTransformOptions.dateAccessor(item);
	
				// var yValue = singleChartData.plot.scales.yScale.invert(this.context.mouseXY[1]);
	
				if (xValue === undefined) return null;
				var x = this.props.snapX ? Math.round(singleChartData.plot.scales.xScale(xValue)) : this.context.mouseXY[0];
				var y = this.context.mouseXY[1];
				switch (this.props.type) {
					case "crosshair":
						return _react2["default"].createElement(_CrossHair2["default"], { height: this.context.height, width: this.context.width, mouseXY: [x, y],
							xDisplayValue: this.props.xDisplayFormat(xDisplayValue), edges: edges });
					case "vertical":
						return _react2["default"].createElement(VerticalMousePointer, null);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var pointer = this.getPointer();
	
				return _react2["default"].createElement(
					"g",
					{ className: this.context.show ? "show" : "hide" },
					pointer
				);
			}
		}]);
	
		return MouseCoordinates;
	})(_libUtilsPureComponent2["default"]);
	
	MouseCoordinates.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		mainChart: _react2["default"].PropTypes.number.isRequired,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		dataTransformOptions: _react2["default"].PropTypes.object,
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		currentCharts: _react2["default"].PropTypes.array.isRequired
	};
	
	MouseCoordinates.propTypes = {
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		yDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		type: _react2["default"].PropTypes.oneOf(["crosshair", "vertical"]).isRequired
	};
	
	MouseCoordinates.defaultProps = {
		namespace: "ReStock.MouseCoordinates",
		show: false,
		snapX: true,
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		yDisplayFormat: _utilsUtils2["default"].displayNumberFormat
	};
	
	module.exports = MouseCoordinates;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _Canvas = __webpack_require__(118);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var ChartCanvas = (function (_React$Component) {
		function ChartCanvas() {
			_classCallCheck(this, ChartCanvas);
	
			_get(Object.getPrototypeOf(ChartCanvas.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(ChartCanvas, _React$Component);
	
		_createClass(ChartCanvas, [{
			key: "getAvailableHeight",
			value: function getAvailableHeight(props) {
				return props.height - props.margin.top - props.margin.bottom;
			}
		}, {
			key: "getAvailableWidth",
			value: function getAvailableWidth(props) {
				return props.width - props.margin.left - props.margin.right;
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					width: this.getAvailableWidth(this.props),
					height: this.getAvailableHeight(this.props),
					data: this.state.data,
					interval: this.props.interval,
					initialDisplay: this.props.initialDisplay || this.state.plotData.length,
					plotData: this.state.plotData,
					chartData: this.state.chartData
				};
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var props = this.props;
				var context = this.context;
	
				var data = {};
				data[this.props.interval] = this.props.data;
	
				var state = {
					data: data,
					plotData: this.props.data
				};
				if (_utilsChartDataUtil2["default"].containsChart(props)) {
					var defaultOptions = {
						width: this.getAvailableWidth(props),
						height: this.getAvailableHeight(props)
					};
					var plotData = props.data;
					var chartData = _utilsChartDataUtil2["default"].getChartData(props, context, plotData, data, defaultOptions);
					// console.log(chartData);
					// var mainChart = ChartDataUtil.getMainChart(props.children);
	
					state.chartData = chartData;
					state.plotData = plotData;
				}
				this.setState(state);
			}
		}, {
			key: "getCanvas",
			value: function getCanvas() {
				return this.refs.canvas.getCanvas();
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				var w = this.getAvailableWidth(this.props),
				    h = this.getAvailableHeight(this.props);
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.getChildContext(), function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"div",
					{ style: { position: "relative" } },
					_react2["default"].createElement(
						"svg",
						{ width: this.props.width, height: this.props.height },
						_react2["default"].createElement(
							"defs",
							null,
							_react2["default"].createElement(
								"clipPath",
								{ id: "chart-area-clip" },
								_react2["default"].createElement("rect", { x: "0", y: "0", width: w, height: h })
							)
						),
						_react2["default"].createElement(
							"g",
							{ transform: "translate(" + this.props.margin.left + ", " + this.props.margin.top + ")" },
							children
						)
					)
				);
			}
		}]);
	
		return ChartCanvas;
	})(_react2["default"].Component);
	
	ChartCanvas.propTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		margin: _react2["default"].PropTypes.object,
		interval: _react2["default"].PropTypes.oneOf(["D"]).isRequired, // ,"m1", "m5", "m15", "W", "M"
		data: _react2["default"].PropTypes.array.isRequired,
		initialDisplay: _react2["default"].PropTypes.number
	};
	
	ChartCanvas.childContextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		data: _react2["default"].PropTypes.object.isRequired,
		interval: _react2["default"].PropTypes.string.isRequired,
		initialDisplay: _react2["default"].PropTypes.number.isRequired,
		plotData: _react2["default"].PropTypes.array,
		// canvas: React.PropTypes.any,
	
		chartData: _react2["default"].PropTypes.array
	};
	
	ChartCanvas.defaultProps = {
		margin: { top: 20, right: 30, bottom: 30, left: 80 },
		interval: "D"
	};
	
	module.exports = ChartCanvas;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _utilsChartTransformer = __webpack_require__(113);
	
	var _utilsChartTransformer2 = _interopRequireDefault(_utilsChartTransformer);
	
	var _EventHandler = __webpack_require__(114);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var DataTransform = (function (_React$Component) {
		function DataTransform() {
			_classCallCheck(this, DataTransform);
	
			_get(Object.getPrototypeOf(DataTransform.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(DataTransform, _React$Component);
	
		_createClass(DataTransform, [{
			key: "transformData",
			value: function transformData(props, context) {
				var transformer = _utilsChartTransformer2["default"].getTransformerFor(props.transformType);
	
				if (context.dataTransformOptions || props.options) {
					var options = {};
					if (context.dataTransformOptions) {
						Object.keys(context.dataTransformOptions).forEach(function (key) {
							return options[key] = context.dataTransformOptions[key];
						});
					}
					if (props.options) {
						Object.keys(props.options).forEach(function (key) {
							return options[key] = props.options[key];
						});
					}
				}
	
				var passThroughProps = transformer(context.data, context.interval, options, context.dataTransformProps);
				return passThroughProps;
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var props = this.props;
				var context = this.context;
	
				var passThroughProps = this.transformData(props, context);
				this.setState({
					data: passThroughProps.data,
					dataTransformOptions: passThroughProps.options,
					dataTransformProps: passThroughProps.other,
					interval: context.interval
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(props, context) {
				var passThroughProps = this.transformData(props, context);
				this.setState({
					data: passThroughProps.data,
					dataTransformOptions: passThroughProps.options,
					dataTransformProps: passThroughProps.other,
					interval: context.interval
				});
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					data: this.state.data,
					dataTransformOptions: this.state.dataTransformOptions,
					dataTransformProps: this.state.dataTransformProps,
					interval: this.state.interval
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.getChildContext(), function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _utilsChartDataUtil2["default"].containsChart(this.props) ? _react2["default"].createElement(
					_EventHandler2["default"],
					null,
					children
				) : _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return DataTransform;
	})(_react2["default"].Component);
	
	DataTransform.propTypes = {
		transformType: _react2["default"].PropTypes.string.isRequired, // stockscale, none
		options: _react2["default"].PropTypes.object
	};
	
	DataTransform.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		data: _react2["default"].PropTypes.object.isRequired,
		dataTransformOptions: _react2["default"].PropTypes.object,
		dataTransformProps: _react2["default"].PropTypes.object,
		interval: _react2["default"].PropTypes.string.isRequired,
		initialDisplay: _react2["default"].PropTypes.number.isRequired
	};
	
	DataTransform.childContextTypes = {
		data: _react2["default"].PropTypes.object,
		dataTransformOptions: _react2["default"].PropTypes.object,
		dataTransformProps: _react2["default"].PropTypes.object,
		interval: _react2["default"].PropTypes.string
	};
	
	DataTransform.defaultProps = {
		namespace: "ReStock.DataTransform",
		transformType: "none"
	};
	
	module.exports = DataTransform;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var XAxis = (function (_React$Component) {
		function XAxis(props) {
			_classCallCheck(this, XAxis);
	
			_get(Object.getPrototypeOf(XAxis.prototype), "constructor", this).call(this, props);
			this.updateAxis = this.updateAxis.bind(this);
		}
	
		_inherits(XAxis, _React$Component);
	
		_createClass(XAxis, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.updateAxis();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.updateAxis();
			}
		}, {
			key: "updateAxis",
			value: function updateAxis() {
				var axis = _d32["default"].svg.axis().scale(this.context.xScale).orient(this.props.orient);
	
				if (this.props.orient) axis.orient(this.props.orient);
				if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
				if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
				if (this.props.tickFormat) {
					if (this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear()) {
						console.warn("Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis");
					} else {
						axis.tickFormat(this.props.tickFormat);
					}
				}
				if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
				if (this.props.tickSize) axis.tickSize(this.props.tickSize);
				if (this.props.ticks) axis.ticks(this.props.ticks);
				if (this.props.tickValues) axis.tickValues(this.props.tickValues);
				if (this.props.noTicks) {
					axis.tickSize(0);
					axis.tickValues([]);
				}
				_d32["default"].select(_react2["default"].findDOMNode(this)).call(axis);
			}
		}, {
			key: "render",
			value: function render() {
				var axisAt = this.props.axisAt,
				    range = this.context.yScale.range();
				if (this.props.axisAt === "top") axisAt = 0;
				if (this.props.axisAt === "bottom") axisAt = this.context.height;
				if (this.props.axisAt === "middle") axisAt = this.context.height / 2;
	
				return _react2["default"].createElement("g", { className: "x axis", transform: "translate(0, " + axisAt + ")" });
			}
		}]);
	
		return XAxis;
	})(_react2["default"].Component);
	
	XAxis.propTypes = {
		axisAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.number,
		tickValues: _react2["default"].PropTypes.array
	};
	XAxis.defaultProps = {
		namespace: "ReStock.XAxis",
		showGrid: false
	};
	XAxis.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired
	};
	
	module.exports = XAxis;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(2),
	    d3 = __webpack_require__(3);
	
	var YAxis = (function (_React$Component) {
		function YAxis(props) {
			_classCallCheck(this, YAxis);
	
			_get(Object.getPrototypeOf(YAxis.prototype), "constructor", this).call(this, props);
			this.updateAxis = this.updateAxis.bind(this);
		}
	
		_inherits(YAxis, _React$Component);
	
		_createClass(YAxis, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.updateAxis();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.updateAxis();
			}
		}, {
			key: "updateAxis",
			value: function updateAxis() {
				var scale = this.context.yScale;
				if (this.props.percentScale) scale = scale.copy().domain([0, 1]);
	
				var axis = d3.svg.axis().scale(scale).orient(this.props.orient);
	
				if (this.props.orient) axis.orient(this.props.orient);
				if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
				if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
	
				if (this.context.isCompareSeries) axis.tickFormat(d3.format(".0%"));else if (this.props.tickFormat) axis.tickFormat(this.props.tickFormat);
	
				if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
				if (this.props.tickSize) axis.tickSize(this.props.tickSize);
				if (this.props.ticks) axis.ticks(this.props.ticks);
				if (this.props.tickValues) axis.tickValues(this.props.tickValues);
	
				d3.select(React.findDOMNode(this)).call(axis);
			}
		}, {
			key: "render",
			value: function render() {
				var axisAt = this.props.axisAt,
				    range = this.context.xScale.range();
				if (this.props.axisAt === "left") axisAt = Math.min(range[0], range[1]) + this.props.axisPadding;
				if (this.props.axisAt === "right") axisAt = Math.max(range[0], range[1]) + this.props.axisPadding;
				if (this.props.axisAt === "middle") axisAt = (range[0] + range[1]) / 2 + this.props.axisPadding;
	
				return React.createElement("g", { className: "y axis", transform: "translate(" + axisAt + ", 0)" });
			}
		}]);
	
		return YAxis;
	})(React.Component);
	
	YAxis.propTypes = {
		axisAt: React.PropTypes.oneOfType([React.PropTypes.oneOf(["left", "right", "middle"]), React.PropTypes.number]).isRequired,
		orient: React.PropTypes.oneOf(["left", "right"]).isRequired,
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
		isCompareSeries: React.PropTypes.bool.isRequired
	};
	
	module.exports = YAxis;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _libUtilsPureComponent = __webpack_require__(116);
	
	var _libUtilsPureComponent2 = _interopRequireDefault(_libUtilsPureComponent);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var Chart = (function (_PureComponent) {
		function Chart() {
			_classCallCheck(this, Chart);
	
			_get(Object.getPrototypeOf(Chart.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(Chart, _PureComponent);
	
		_createClass(Chart, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
				var origin = this.getOrigin();
	
				return {
					xScale: chartData.plot.scales.xScale,
					yScale: chartData.plot.scales.yScale,
					xAccessor: chartData.config.accessors.xAccessor,
					yAccessor: chartData.config.accessors.yAccessor,
					overlays: chartData.config.overlays,
					compareSeries: chartData.config.compareSeries,
					indicatorOptions: chartData.config.indicatorOptions,
					isCompareSeries: chartData.config.compareSeries.length > 0,
					width: this.props.width || this.context.width,
					height: this.props.height || this.context.height
				};
			}
		}, {
			key: "getOrigin",
			value: function getOrigin() {
				var origin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				return origin;
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var origin = this.getOrigin();
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + origin[0] + ", " + origin[1] + ")" },
					children
				);
			}
		}]);
	
		return Chart;
	})(_libUtilsPureComponent2["default"]);
	
	Chart.propTypes = {
		height: _react2["default"].PropTypes.number,
		width: _react2["default"].PropTypes.number,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		id: _react2["default"].PropTypes.number.isRequired,
		xScale: _react2["default"].PropTypes.func,
		yScale: _react2["default"].PropTypes.func,
		xDomainUpdate: _react2["default"].PropTypes.bool,
		yDomainUpdate: _react2["default"].PropTypes.bool,
		yMousePointerDisplayLocation: _react2["default"].PropTypes.oneOf(["left", "right"]),
		yMousePointerDisplayFormat: _react2["default"].PropTypes.func,
		padding: _react2["default"].PropTypes.object.isRequired
	};
	
	Chart.defaultProps = {
		namespace: "ReStock.Chart",
		transformDataAs: "none",
		yDomainUpdate: true,
		origin: [0, 0],
		padding: { top: 0, right: 0, bottom: 0, left: 0 }
	};
	
	Chart.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array
	};
	
	Chart.childContextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		overlays: _react2["default"].PropTypes.array.isRequired,
		indicatorOptions: _react2["default"].PropTypes.object,
		isCompareSeries: _react2["default"].PropTypes.bool.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	module.exports = Chart;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var DataSeries = (function (_React$Component) {
		function DataSeries() {
			_classCallCheck(this, DataSeries);
	
			_get(Object.getPrototypeOf(DataSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(DataSeries, _React$Component);
	
		_createClass(DataSeries, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ style: { "clipPath": "url(#chart-area-clip)" } },
					children
				);
			}
		}]);
	
		return DataSeries;
	})(_react2["default"].Component);
	
	DataSeries.propTypes = {
		xAccessor: _react2["default"].PropTypes.func,
		yAccessor: _react2["default"].PropTypes.func
	};
	
	DataSeries.defaultProps = {
		namespace: "ReStock.DataSeries",
		compareBase: function compareBase(d) {
			return d.close;
		}
	};
	
	module.exports = DataSeries;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var AreaSeries = (function (_React$Component) {
		function AreaSeries(props) {
			_classCallCheck(this, AreaSeries);
	
			_get(Object.getPrototypeOf(AreaSeries.prototype), "constructor", this).call(this, props);
			this.getPath = this.getPath.bind(this);
			this.getArea = this.getArea.bind(this);
		}
	
		_inherits(AreaSeries, _React$Component);
	
		_createClass(AreaSeries, [{
			key: "getPath",
			value: function getPath() {
				var _this = this;
	
				var dataSeries = _d32["default"].svg.line().defined(function (d) {
					return _this.context.yAccessor(d) !== undefined;
				}).x(function (d) {
					return _this.context.xScale(_this.context.xAccessor(d));
				}).y(function (d) {
					return _this.context.yScale(_this.context.yAccessor(d));
				});
	
				return dataSeries(this.context.plotData);
			}
		}, {
			key: "getArea",
			value: function getArea() {
				var _this2 = this;
	
				var height = this.context.yScale.range()[0];
				var areaSeries = _d32["default"].svg.area().defined(function (d) {
					return _this2.context.yAccessor(d) !== undefined;
				}).x(function (d) {
					return _this2.context.xScale(_this2.context.xAccessor(d));
				}).y0(height - 1).y1(function (d) {
					return _this2.context.yScale(_this2.context.yAccessor(d));
				});
	
				return areaSeries(this.context.plotData);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement("path", { d: this.getPath(), className: "line line-stroke" }),
					_react2["default"].createElement("path", { d: this.getArea(), className: "area" })
				);
			}
		}]);
	
		return AreaSeries;
	})(_react2["default"].Component);
	
	AreaSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired
	};
	
	AreaSeries.defaultProps = { namespace: "ReStock.AreaSeries" };
	
	module.exports = AreaSeries;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var LineSeries = (function (_React$Component) {
		function LineSeries(props) {
			_classCallCheck(this, LineSeries);
	
			_get(Object.getPrototypeOf(LineSeries.prototype), "constructor", this).call(this, props);
			this.getPath = this.getPath.bind(this);
		}
	
		_inherits(LineSeries, _React$Component);
	
		_createClass(LineSeries, [{
			key: "getPath",
			value: function getPath() {
				var _this = this;
	
				var dataSeries = _d32["default"].svg.line().defined(function (d) {
					return _this.context.yAccessor(d) !== undefined;
				}).x(function (d) {
					return _this.context.xScale(_this.context.xAccessor(d));
				}).y(function (d) {
					return _this.context.yScale(_this.context.yAccessor(d));
				});
				return dataSeries(this.context.plotData);
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.props.className.concat(this.context.stroke !== undefined ? "" : " line-stroke");
				return _react2["default"].createElement("path", { d: this.getPath(), stroke: this.context.stroke, fill: "none", className: className });
			}
		}]);
	
		return LineSeries;
	})(_react2["default"].Component);
	
	LineSeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	LineSeries.defaultProps = {
		namespace: "ReStock.LineSeries",
		className: "line "
	};
	LineSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		stroke: _react2["default"].PropTypes.string
	};
	
	module.exports = LineSeries;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var CompareSeries = (function (_React$Component) {
		function CompareSeries(props) {
			_classCallCheck(this, CompareSeries);
	
			_get(Object.getPrototypeOf(CompareSeries.prototype), "constructor", this).call(this, props);
			this.getPath = this.getPath.bind(this);
		}
	
		_inherits(CompareSeries, _React$Component);
	
		_createClass(CompareSeries, [{
			key: "getPath",
			value: function getPath() {
				var _this = this;
	
				var dataSeries = _d32["default"].svg.line().defined(function (d) {
					return d.compare["compare_" + _this.props.id] !== undefined;
				}).x(function (d) {
					return _this.context.xScale(_this.context.xAccessor(d));
				}).y(function (d) {
					return _this.context.yScale(d.compare["compare_" + _this.props.id]);
				});
				return dataSeries(this.context.plotData);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var thisSeries = this.context.compareSeries.filter(function (each) {
					return each.id === _this2.props.id;
				})[0];
	
				return _react2["default"].createElement("path", { d: this.getPath(), stroke: thisSeries.stroke, fill: "none", className: this.props.className });
			}
		}]);
	
		return CompareSeries;
	})(_react2["default"].Component);
	
	CompareSeries.propTypes = {
		className: _react2["default"].PropTypes.string,
		stroke: _react2["default"].PropTypes.string,
		displayLabel: _react2["default"].PropTypes.string.isRequired,
		id: _react2["default"].PropTypes.number.isRequired
	};
	
	CompareSeries.defaultProps = {
		namespace: "ReStock.CompareSeries",
		className: "line "
	};
	
	CompareSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = CompareSeries;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var OverlaySeries = (function (_React$Component) {
		function OverlaySeries() {
			_classCallCheck(this, OverlaySeries);
	
			_get(Object.getPrototypeOf(OverlaySeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(OverlaySeries, _React$Component);
	
		_createClass(OverlaySeries, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var overlay = this.context.overlays.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
				return {
					yAccessor: overlay.yAccessor,
					stroke: overlay.stroke
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return OverlaySeries;
	})(_react2["default"].Component);
	
	OverlaySeries.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["sma", "ema"]),
		options: _react2["default"].PropTypes.object.isRequired,
		id: _react2["default"].PropTypes.number.isRequired,
		stroke: _react2["default"].PropTypes.string
	};
	OverlaySeries.defaultProps = {
		namespace: "ReStock.OverlaySeries"
	};
	OverlaySeries.contextTypes = {
		overlays: _react2["default"].PropTypes.array.isRequired
	};
	OverlaySeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		stroke: _react2["default"].PropTypes.string.isRequired
	};
	module.exports = OverlaySeries;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var HistogramSeries = (function (_React$Component) {
		function HistogramSeries(props) {
			_classCallCheck(this, HistogramSeries);
	
			_get(Object.getPrototypeOf(HistogramSeries.prototype), "constructor", this).call(this, props);
			this.getBars = this.getBars.bind(this);
		}
	
		_inherits(HistogramSeries, _React$Component);
	
		_createClass(HistogramSeries, [{
			key: "getBars",
			value: function getBars() {
				var _this = this;
	
				var base = this.props.baseAt === "top" ? 0 : this.props.baseAt === "bottom" ? this.context.yScale.range()[0] : this.props.baseAt === "middle" ? (this.context.yScale.range()[0] + this.context.yScale.range()[1]) / 2 : this.props.baseAt;
	
				var dir = this.props.direction === "up" ? -1 : 1;
	
				var getClassName = function getClassName() {
					return _this.props.className;
				};
				if (typeof this.props.className === "function") {
					getClassName = this.props.className;
				}
				var width = Math.abs(this.context.xScale.range()[0] - this.context.xScale.range()[1]);
				var barWidth = width / this.context.plotData.length * 0.5;
	
				var bars = this.context.plotData.filter(function (d) {
					return _this.context.yAccessor(d) !== undefined;
				}).map(function (d, idx) {
					var yValue = _this.context.yAccessor(d);
					var x = Math.round(_this.context.xScale(_this.context.xAccessor(d))) - 0.5 * barWidth,
					    className = getClassName(d),
					    y,
					    height;
	
					if (dir > 0) {
						y = base;
						height = _this.context.yScale.range()[0] - _this.context.yScale(yValue);
					} else {
						y = _this.context.yScale(yValue);
						height = base - y;
					}
	
					if (height < 0) {
						y = base;
						height = -height;
					}
	
					if (Math.round(barWidth) <= 1) {
						return _react2["default"].createElement("line", { key: idx, className: className,
							stroke: _this.props.stroke,
							fill: _this.props.fill,
							x1: Math.round(x), y1: Math.round(y),
							x2: Math.round(x), y2: Math.round(y + height) });
					}
					return _react2["default"].createElement("rect", { key: idx, className: className,
						stroke: _this.props.stroke,
						fill: _this.props.fill,
						x: Math.round(x),
						y: Math.round(y),
						width: Math.round(barWidth),
						height: Math.round(height) });
				});
				return bars;
			}
		}, {
			key: "render",
			value: function render() {
				// console.log("HistogramSeries.render()");
				return _react2["default"].createElement(
					"g",
					{ className: "histogram" },
					this.getBars()
				);
			}
		}]);
	
		return HistogramSeries;
	})(_react2["default"].Component);
	
	HistogramSeries.propTypes = {
		baseAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		direction: _react2["default"].PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		className: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]).isRequired
	};
	
	HistogramSeries.defaultProps = {
		namespace: "ReStock.HistogramSeries",
		baseAt: "bottom",
		direction: "up",
		className: "bar"
	};
	
	HistogramSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = HistogramSeries;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var KagiSeries = (function (_React$Component) {
		function KagiSeries() {
			_classCallCheck(this, KagiSeries);
	
			_get(Object.getPrototypeOf(KagiSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(KagiSeries, _React$Component);
	
		_createClass(KagiSeries, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var kagiLine = [];
				var kagi = {};
				for (var i = 0; i < this.context.plotData.length; i++) {
					var d = this.context.plotData[i];
					if (d.close === undefined) continue;
					if (kagi.type === undefined) kagi.type = d.startAs;
					if (kagi.plot === undefined) kagi.plot = [];
					var idx = this.context.xAccessor(d);
					kagi.plot.push([idx, d.open]);
	
					if (d.changePoint !== undefined) {
						kagi.plot.push([idx, d.changePoint]);
						kagiLine.push(kagi);
						kagi = {
							type: d.changeTo,
							plot: []
						};
						kagi.plot.push([idx, d.changePoint]);
					}
				}
	
				var paths = kagiLine.map(function (each, i) {
					var dataSeries = _d32["default"].svg.line().x(function (item) {
						return _this.context.xScale(item[0]);
					}).y(function (item) {
						return _this.context.yScale(item[1]);
					}).interpolate("step-before");
					return _react2["default"].createElement("path", { key: i, d: dataSeries(each.plot), className: each.type });
				});
				return _react2["default"].createElement(
					"g",
					null,
					paths
				);
			}
		}]);
	
		return KagiSeries;
	})(_react2["default"].Component);
	
	KagiSeries.defaultProps = {
		namespace: "ReStock.KagiSeries"
	};
	
	KagiSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired
	};
	
	KagiSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	module.exports = KagiSeries;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var debugFlag = false;
	
	var PointAndFigureSeries = (function (_React$Component) {
		function PointAndFigureSeries() {
			_classCallCheck(this, PointAndFigureSeries);
	
			_get(Object.getPrototypeOf(PointAndFigureSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(PointAndFigureSeries, _React$Component);
	
		_createClass(PointAndFigureSeries, [{
			key: "handleClick",
			value: function handleClick(idx) {
				console.log(this.context.plotData[idx]);
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1])) - this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
	
				var columnWidth = width / (this.context.plotData.length - 1);
	
				var anyBox,
				    j = 0;
				while (anyBox === undefined) {
					if (this.context.plotData[j].close !== undefined) {
						anyBox = this.context.plotData[j].boxes[0];
					}
					j++;
				}
	
				var boxHeight = Math.abs(this.context.yScale(anyBox.open) - this.context.yScale(anyBox.close));
	
				var columns = this.context.plotData.filter(function (d) {
					return d.close !== undefined;
				}).map(function (d, idx) {
					var boxes = d.boxes.map(function (box, i) {
						var boxshape;
						if (d.direction > 0) {
							boxshape = _react2["default"].createElement(
								"g",
								{ key: idx + "-" + i },
								_react2["default"].createElement("line", { className: "point_figure_up", x1: 0, y1: _this.context.yScale(box.open), x2: columnWidth, y2: _this.context.yScale(box.close) }),
								_react2["default"].createElement("line", { className: "point_figure_up", x1: 0, y1: _this.context.yScale(box.close), x2: columnWidth, y2: _this.context.yScale(box.open) })
							);
						} else {
							boxshape = _react2["default"].createElement("ellipse", { key: idx + "-" + i, className: "point_figure_down", cx: columnWidth / 2, cy: _this.context.yScale((box.open + box.close) / 2),
								rx: columnWidth / 2, ry: boxHeight / 2 });
						}
						return boxshape;
					});
					var debug = debugFlag ? _react2["default"].createElement("rect", { x: 0, y: 0, height: 980, width: columnWidth, style: { opacity: 0.1 }, onClick: _this.handleClick.bind(_this, idx) }) : null;
					var col = _react2["default"].createElement(
						"g",
						{ key: idx,
							transform: "translate(" + (_this.context.xScale(_this.context.xAccessor(d)) - columnWidth / 2) + ", 0)" },
						boxes,
						debug
					);
					return col;
				});
	
				return _react2["default"].createElement(
					"g",
					null,
					columns
				);
			}
		}]);
	
		return PointAndFigureSeries;
	})(_react2["default"].Component);
	
	PointAndFigureSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired
	};
	
	PointAndFigureSeries.defaultProps = { namespace: "ReStock.PointAndFigureSeries" };
	
	PointAndFigureSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	module.exports = PointAndFigureSeries;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CandlestickSeries = (function (_React$Component) {
		function CandlestickSeries(props) {
			_classCallCheck(this, CandlestickSeries);
	
			_get(Object.getPrototypeOf(CandlestickSeries.prototype), "constructor", this).call(this, props);
			this.getWicks = this.getWicks.bind(this);
			this.getCandles = this.getCandles.bind(this);
		}
	
		_inherits(CandlestickSeries, _React$Component);
	
		_createClass(CandlestickSeries, [{
			key: "getWicks",
			value: function getWicks() {
				var _this = this;
	
				var wicks = this.context.plotData.filter(function (d) {
					return d.close !== undefined;
				}).map(function (d, idx) {
					var ohlc = _this.context.isCompareSeries ? _this.context.yAccessor(d.compare) : _this.context.yAccessor(d);
	
					var x1 = Math.round(_this.context.xScale(_this.context.xAccessor(d))),
					    y1 = _this.context.yScale(ohlc.high),
					    x2 = x1,
					    y2 = _this.context.yScale(ohlc.low),
					    className = ohlc.open >= ohlc.close ? "up" : "down";
	
					return _react2["default"].createElement("line", { key: idx,
						className: className,
						x1: x1,
						y1: y1,
						x2: x2,
						y2: y2 });
				});
				return wicks;
			}
		}, {
			key: "getCandles",
			value: function getCandles() {
				var _this2 = this;
	
				var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1])) - this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
				var cw = width / this.context.plotData.length * 0.5;
				var candleWidth = Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
				var candles = this.context.plotData.filter(function (d) {
					return d.close !== undefined;
				}).map(function (d, idx) {
					var ohlc = _this2.context.isCompareSeries ? _this2.context.yAccessor(d.compare) : _this2.context.yAccessor(d);
					var x = Math.round(_this2.context.xScale(_this2.context.xAccessor(d))) - (candleWidth === 1 ? 0 : 0.5 * candleWidth),
					    y = _this2.context.yScale(Math.max(ohlc.open, ohlc.close)),
					    height = Math.abs(_this2.context.yScale(ohlc.open) - _this2.context.yScale(ohlc.close)),
					    className = ohlc.open <= ohlc.close ? "up" : "down";
					if (ohlc.open === ohlc.close) {
						return _react2["default"].createElement("line", { key: idx, x1: x, y1: y, x2: x + candleWidth, y2: y });
					}
					if (candleWidth <= 1) {
						return _react2["default"].createElement("line", { className: className, key: idx, x1: x, y1: y, x2: x, y2: y + height });
					}
					return _react2["default"].createElement("rect", { key: idx, className: className,
						x: x,
						y: y,
						width: candleWidth,
						height: height });
				});
				return candles;
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(
						"g",
						{ className: "wick", key: "wicks" },
						this.getWicks()
					),
					_react2["default"].createElement(
						"g",
						{ className: "candle", key: "candles" },
						this.getCandles()
					)
				);
			}
		}]);
	
		return CandlestickSeries;
	})(_react2["default"].Component);
	
	CandlestickSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		isCompareSeries: _react2["default"].PropTypes.bool.isRequired
	};
	
	CandlestickSeries.defaultProps = { namespace: "ReStock.CandlestickSeries" };
	
	CandlestickSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	module.exports = CandlestickSeries;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var RenkoSeries = (function (_React$Component) {
		function RenkoSeries() {
			_classCallCheck(this, RenkoSeries);
	
			_get(Object.getPrototypeOf(RenkoSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(RenkoSeries, _React$Component);
	
		_createClass(RenkoSeries, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var width = this.context.xScale(this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1])) - this.context.xScale(this.context.xAccessor(this.context.plotData[0]));
	
				var candleWidth = width / (this.context.plotData.length - 1);
	
				var candles = this.context.plotData.filter(function (d) {
					return d.close !== undefined;
				}).map(function (d, idx) {
					var ohlc = _this.context.yAccessor(d);
					var x = _this.context.xScale(_this.context.xAccessor(d)) - 0.5 * candleWidth,
					    y = _this.context.yScale(Math.max(ohlc.open, ohlc.close)),
					    height = Math.abs(_this.context.yScale(ohlc.open) - _this.context.yScale(ohlc.close)),
					    className = ohlc.open <= ohlc.close ? "up" : "down";
	
					return _react2["default"].createElement("rect", { key: idx, className: className,
						x: x,
						y: y,
						width: candleWidth,
						height: height });
				});
	
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(
						"g",
						{ className: "candle" },
						candles
					)
				);
			}
		}]);
	
		return RenkoSeries;
	})(_react2["default"].Component);
	
	RenkoSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired
	};
	
	RenkoSeries.defaultProps = { namespace: "ReStock.RenkoSeries" };
	
	RenkoSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	module.exports = RenkoSeries;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _HistogramSeries = __webpack_require__(92);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var MACDSeries = (function (_React$Component) {
		function MACDSeries(props) {
			_classCallCheck(this, MACDSeries);
	
			_get(Object.getPrototypeOf(MACDSeries.prototype), "constructor", this).call(this, props);
			this.getMACDLine = this.getMACDLine.bind(this);
			this.getSignalLine = this.getSignalLine.bind(this);
			this.getHorizontalLine = this.getHorizontalLine.bind(this);
		}
	
		_inherits(MACDSeries, _React$Component);
	
		_createClass(MACDSeries, [{
			key: "getMACDLine",
			value: function getMACDLine() {
				var _this = this;
	
				var dataSeries = _d32["default"].svg.line().defined(function (d) {
					return (_this.context.yAccessor(d) && _this.context.yAccessor(d).MACDLine) !== undefined;
				}).x(function (d) {
					return _this.context.xScale(_this.context.xAccessor(d));
				}).y(function (d) {
					return _this.context.yScale(_this.context.yAccessor(d).MACDLine);
				});
	
				return dataSeries(this.context.plotData);
			}
		}, {
			key: "getSignalLine",
			value: function getSignalLine() {
				var _this2 = this;
	
				var dataSeries = _d32["default"].svg.line().defined(function (d) {
					return (_this2.context.yAccessor(d) && _this2.context.yAccessor(d).signalLine) !== undefined;
				}).x(function (d) {
					return _this2.context.xScale(_this2.context.xAccessor(d));
				}).y(function (d) {
					return _this2.context.yScale(_this2.context.yAccessor(d).signalLine);
				});
	
				return dataSeries(this.context.plotData);
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				var yAccess = this.context.yAccessor;
				return {
					yAccessor: function yAccessor(d) {
						return yAccess(d) && yAccess(d).histogram;
					}
				};
			}
		}, {
			key: "getHorizontalLine",
			value: function getHorizontalLine() {
				var first = this.context.xAccessor(this.context.plotData[0]);
				var last = this.context.xAccessor(this.context.plotData[this.context.plotData.length - 1]);
	
				return _react2["default"].createElement("line", { x1: this.context.xScale(first),
					y1: this.context.yScale(0),
					x2: this.context.xScale(last),
					y2: this.context.yScale(0), className: "horizontal" });
			}
		}, {
			key: "render",
			value: function render() {
				var indicatorOptions = this.context.indicatorOptions;
	
				return _react2["default"].createElement(
					"g",
					{ className: "macd-series" },
					_react2["default"].createElement("path", { d: this.getMACDLine(), stroke: indicatorOptions.stroke.MACDLine, fill: "none" }),
					_react2["default"].createElement("path", { d: this.getSignalLine(), stroke: indicatorOptions.stroke.signalLine, fill: "none" }),
					_react2["default"].createElement(_HistogramSeries2["default"], { baseAt: this.context.yScale(0), className: "macd-histogram",
						stroke: indicatorOptions.stroke.histogram, fill: indicatorOptions.fill.histogram }),
					this.getHorizontalLine()
				);
			}
		}]);
	
		return MACDSeries;
	})(_react2["default"].Component);
	
	//  className="macdline"
	//  className="signalline"
	MACDSeries.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		indicatorOptions: _react2["default"].PropTypes.object.isRequired
	};
	
	MACDSeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired
	};
	
	MACDSeries.defaultProps = { namespace: "ReStock.MACDSeries" };
	
	module.exports = MACDSeries;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var mousemove = "mousemove.pan",
	    mouseup = "mouseup.pan";
	
	function d3Window(node) {
		var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
		return d3win;
	}
	
	var EventCapture = (function (_React$Component) {
		function EventCapture(props) {
			_classCallCheck(this, EventCapture);
	
			_get(Object.getPrototypeOf(EventCapture.prototype), "constructor", this).call(this, props);
			this.toggleFocus = this.toggleFocus.bind(this);
			this.setFocus = this.setFocus.bind(this);
			this.handleEnter = this.handleEnter.bind(this);
			this.handleLeave = this.handleLeave.bind(this);
			this.handleWheel = this.handleWheel.bind(this);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseDown = this.handleMouseDown.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handlePan = this.handlePan.bind(this);
		}
	
		_inherits(EventCapture, _React$Component);
	
		_createClass(EventCapture, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
			}
		}, {
			key: "toggleFocus",
			value: function toggleFocus() {
				this.setFocus(!this.state.inFocus);
			}
		}, {
			key: "setFocus",
			value: function setFocus(focus) {
				this.setState({
					inFocus: focus
				});
			}
		}, {
			key: "handleEnter",
			value: function handleEnter() {
				if (this.context.onMouseEnter) {
					this.context.onMouseEnter();
				}
			}
		}, {
			key: "handleLeave",
			value: function handleLeave() {
				if (this.context.onMouseLeave) {
					this.context.onMouseLeave();
				}
			}
		}, {
			key: "handleWheel",
			value: function handleWheel(e) {
				if (this.props.zoom && this.context.onZoom && this.context.focus) {
					e.stopPropagation();
					e.preventDefault();
					var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
					var newPos = _utilsUtils2["default"].mousePosition(e);
					this.context.onZoom(zoomDir, newPos);
				}
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				if (this.context.onMouseMove && this.props.mouseMove) {
					if (!this.context.panInProgress) {
						var newPos = _utilsUtils2["default"].mousePosition(e);
						this.context.onMouseMove(newPos);
					}
				}
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _this = this;
	
				var mouseEvent = e || _d32["default"].event;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.mainChart;
				})[0];
				if (this.props.pan && this.context.onPanStart) {
					var mouseXY = _utilsUtils2["default"].mousePosition(mouseEvent);
					this.context.onPanStart(chartData.plot.scales.xScale.domain(), mouseXY);
	
					var dx = mouseEvent.pageX - mouseXY[0],
					    dy = mouseEvent.pageY - mouseXY[1];
	
					this.setState({
						deltaXY: [dx, dy]
					});
					var win = d3Window(_react2["default"].findDOMNode(this.refs.capture));
					_d32["default"].select(win).on(mousemove, this.handlePan).on(mouseup, this.handlePanEnd);
				} else {
					if (!this.context.focus && this.context.onFocus) this.context.onFocus(true);
				}
				mouseEvent.preventDefault();
			}
		}, {
			key: "handlePan",
			value: function handlePan() {
				var _this2 = this;
	
				var deltaXY = this.state.deltaXY;
				var newPos = [_d32["default"].event.pageX - deltaXY[0], _d32["default"].event.pageY - deltaXY[1]];
				// console.log("moved from- ", startXY, " to ", newPos);
				if (this.props.pan && this.context.onPan) {
					var chartData = this.context.chartData.filter(function (each) {
						return each.id === _this2.props.mainChart;
					})[0];
					this.context.onPan(newPos, chartData.plot.scales.xScale.domain());
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd() {
				var win = d3Window(_react2["default"].findDOMNode(this.refs.capture));
	
				_d32["default"].select(win).on(mousemove, null).on(mouseup, null);
				if (this.props.pan && this.context.onPanEnd) {
					this.context.onPanEnd();
				}
				// e.preventDefault();
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.context.panInProgress ? "grabbing" : "crosshair";
				return _react2["default"].createElement("rect", { ref: "capture",
					className: className,
					width: this.context.width, height: this.context.height, style: { opacity: 0 },
					onMouseEnter: this.handleEnter,
					onMouseLeave: this.handleLeave,
					onMouseMove: this.handleMouseMove,
					onWheel: this.handleWheel,
					onMouseDown: this.handleMouseDown
				});
			}
		}]);
	
		return EventCapture;
	})(_react2["default"].Component);
	
	EventCapture.propTypes = {
		mainChart: _react2["default"].PropTypes.number.isRequired,
		mouseMove: _react2["default"].PropTypes.bool.isRequired,
		zoom: _react2["default"].PropTypes.bool.isRequired,
		zoomMultiplier: _react2["default"].PropTypes.number.isRequired,
		pan: _react2["default"].PropTypes.bool.isRequired,
		panSpeedMultiplier: _react2["default"].PropTypes.number.isRequired,
		defaultFocus: _react2["default"].PropTypes.bool.isRequired
	};
	
	EventCapture.defaultProps = {
		namespace: "ReStock.EventCapture",
		mouseMove: false,
		zoom: false,
		zoomMultiplier: 1,
		pan: false,
		panSpeedMultiplier: 1,
		className: "crosshair",
		defaultFocus: false
	};
	
	EventCapture.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array,
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func
	};
	
	module.exports = EventCapture;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(117);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var CrossHair = (function (_React$Component) {
		function CrossHair(props) {
			_classCallCheck(this, CrossHair);
	
			_get(Object.getPrototypeOf(CrossHair.prototype), "constructor", this).call(this, props);
		}
	
		_inherits(CrossHair, _React$Component);
	
		_createClass(CrossHair, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.mouseXY !== this.props.mouseXY;
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				var x1 = 0,
				    x2 = this.props.width;
				var edges = this.props.edges.map(function (edge, idx) {
					if (edge.at === "left") {
						x1 = -_this.props.yAxisPad;
					}
					if (edge.at === "right") {
						x2 = _this.props.width + _this.props.yAxisPad;
					}
					return _react2["default"].createElement(_EdgeCoordinate2["default"], {
						key: idx,
						type: "horizontal",
						className: "horizontal",
						show: true,
						x1: 0, y1: _this.props.mouseXY[1],
						x2: 0, y2: _this.props.mouseXY[1],
						coordinate: edge.yDisplayValue,
						edgeAt: edge.at === "left" ? x1 : x2,
						orient: edge.at,
						hideLine: true
					});
				});
				var line = null;
				if (this.props.edges.length > 0) {
					line = _react2["default"].createElement("line", { className: "cross-hair",
						x1: x1, y1: this.props.mouseXY[1],
						x2: x2, y2: this.props.mouseXY[1] });
				}
				return _react2["default"].createElement(
					"g",
					{ className: "crosshair " },
					line,
					edges,
					_react2["default"].createElement(_EdgeCoordinate2["default"], {
						type: "vertical",
						className: "horizontal",
						show: true,
						x1: this.props.mouseXY[0], y1: 0,
						x2: this.props.mouseXY[0], y2: this.props.height,
						coordinate: this.props.xDisplayValue,
						edgeAt: this.props.height,
						orient: "bottom"
					})
				);
			}
		}]);
	
		return CrossHair;
	})(_react2["default"].Component);
	
	CrossHair.propTypes = {
		yAxisPad: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		mouseXY: _react2["default"].PropTypes.array.isRequired,
		xDisplayValue: _react2["default"].PropTypes.string.isRequired,
		edges: _react2["default"].PropTypes.array.isRequired
	};
	
	CrossHair.defaultProps = {
		namespace: "ReStock.CrossHair",
		yAxisPad: 5
	};
	
	module.exports = CrossHair;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var VerticalMousePointer = (function (_React$Component) {
		function VerticalMousePointer() {
			_classCallCheck(this, VerticalMousePointer);
	
			_get(Object.getPrototypeOf(VerticalMousePointer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(VerticalMousePointer, _React$Component);
	
		_createClass(VerticalMousePointer, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.mouseXY !== this.props.mouseXY;
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"g",
					{ className: "crosshair " },
					_react2["default"].createElement(EdgeCoordinate, {
						type: "vertical",
						className: "horizontal",
						show: true,
						x1: this.props.mouseXY[0], y1: 0,
						x2: this.props.mouseXY[0], y2: this.props.height,
						coordinate: this.props.xDisplayValue,
						edgeAt: this.props.height,
						orient: "bottom" })
				);
			}
		}]);
	
		return VerticalMousePointer;
	})(_react2["default"].Component);
	
	VerticalMousePointer.propTypes = {
		height: _react2["default"].PropTypes.number.isRequired,
		mouseXY: _react2["default"].PropTypes.array.isRequired,
		xDisplayValue: _react2["default"].PropTypes.string.isRequired
	};
	
	VerticalMousePointer.defaultProps = { namespace: "ReStock.VerticalMousePointer" };
	
	VerticalMousePointer.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	module.exports = VerticalMousePointer;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CurrentCoordinate = (function (_React$Component) {
		function CurrentCoordinate(props) {
			_classCallCheck(this, CurrentCoordinate);
	
			_get(Object.getPrototypeOf(CurrentCoordinate.prototype), "constructor", this).call(this, props);
		}
	
		_inherits(CurrentCoordinate, _React$Component);
	
		_createClass(CurrentCoordinate, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.forChart;
				})[0];
				var currentItem = this.context.currentItems.filter(function (each) {
					return each.id === _this.props.forChart;
				})[0];
				var item = currentItem ? currentItem.data : undefined;
				var fill = "black";
	
				if (!this.context.show || item === undefined) return null;
				var yAccessor = this.props.yAccessor || chartData.config.accessors.yAccessor;
	
				if (this.props.forOverlay !== undefined) {
					var overlays = chartData.config.overlays.filter(function (each) {
						return each.id === _this.props.forOverlay;
					});
	
					if (overlays.length !== 1) {
						console.warn("Unique overlay with id={%s} not found", this.props.forOverlay);
						throw new Error("Unique overlay not found");
					}
					fill = overlays[0].stroke;
					yAccessor = overlays[0].yAccessor;
				} else if (this.props.forCompareSeries !== undefined) {
					var compSeries = chartData.config.compareSeries.filter(function (each) {
						return each.id === _this.props.forCompareSeries;
					});
	
					if (compSeries.length !== 1) {
						console.warn("Unique compareSeries with id={%s} not found", this.props.forCompareSeries);
						throw new Error("Unique compareSeries not found");
					}
					fill = compSeries[0].stroke;
					yAccessor = compSeries[0].percentYAccessor;
				}
	
				var xValue = chartData.config.accessors.xAccessor(item);
				var yValue = yAccessor(item);
	
				if (yValue === undefined) return null;
	
				var x = Math.round(chartData.plot.scales.xScale(xValue)) + chartData.config.origin[0];
				var y = Math.round(chartData.plot.scales.yScale(yValue)) + chartData.config.origin[1];
	
				return _react2["default"].createElement("circle", { className: this.props.className, cx: x, cy: y, r: this.props.r, fill: fill });
			}
		}]);
	
		return CurrentCoordinate;
	})(_react2["default"].Component);
	
	CurrentCoordinate.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forOverlay: _react2["default"].PropTypes.number,
		forCompareSeries: _react2["default"].PropTypes.number,
		yAccessor: _react2["default"].PropTypes.func,
		r: _react2["default"].PropTypes.number.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	CurrentCoordinate.defaultProps = { namespace: "ReStock.CurrentCoordinate", r: 3 };
	
	CurrentCoordinate.contextTypes = {
		show: _react2["default"].PropTypes.bool.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = CurrentCoordinate;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _libUtilsPureComponent = __webpack_require__(116);
	
	var _libUtilsPureComponent2 = _interopRequireDefault(_libUtilsPureComponent);
	
	var EdgeContainer = (function (_PureComponent) {
		function EdgeContainer() {
			_classCallCheck(this, EdgeContainer);
	
			_get(Object.getPrototypeOf(EdgeContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(EdgeContainer, _PureComponent);
	
		_createClass(EdgeContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EdgeContainer;
	})(_libUtilsPureComponent2["default"]);
	
	EdgeContainer.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = EdgeContainer;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _EdgeCoordinate = __webpack_require__(117);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var EdgeIndicator = (function (_React$Component) {
		function EdgeIndicator() {
			_classCallCheck(this, EdgeIndicator);
	
			_get(Object.getPrototypeOf(EdgeIndicator.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(EdgeIndicator, _React$Component);
	
		_createClass(EdgeIndicator, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var currentItem = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var edge = null,
				    item,
				    yAccessor;
				// console.log(chartData.config.compareSeries.length);
				var displayFormat = chartData.config.compareSeries.length > 0 ? _d32["default"].format(".0%") : this.props.displayFormat;
	
				if (this.props.forOverlay !== undefined && chartData.config.overlays.length > 0 && chartData.plot.overlayValues.length > 0) {
	
					var overlay = chartData.config.overlays.filter(function (eachOverlay) {
						return eachOverlay.id === _this.props.forOverlay;
					});
					var overlayValue = chartData.plot.overlayValues.filter(function (eachOverlayValue) {
						return eachOverlayValue.id === _this.props.forOverlay;
					});
	
					item = this.props.itemType === "first" ? overlayValue[0].first : this.props.itemType === "last" ? overlayValue[0].last : currentItem;
					yAccessor = overlay[0].yAccessor;
	
					if (item !== undefined) {
						var yValue = yAccessor(item),
						    xValue = chartData.config.accessors.xAccessor(item);
						var x1 = Math.round(chartData.plot.scales.xScale(xValue)),
						    y1 = Math.round(chartData.plot.scales.yScale(yValue));
	
						var edgeX = this.props.edgeAt === "left" ? 0 - this.props.yAxisPad : this.context.width + this.props.yAxisPad;
	
						edge = _react2["default"].createElement(_EdgeCoordinate2["default"], {
							type: this.props.type,
							className: "edge-coordinate",
							fill: overlay[0].stroke,
							show: true,
							x1: x1 + chartData.config.origin[0], y1: y1 + chartData.config.origin[1],
							x2: edgeX + chartData.config.origin[0], y2: y1 + chartData.config.origin[1],
							coordinate: displayFormat(yValue),
							edgeAt: edgeX,
							orient: this.props.orient });
					}
				} else if (this.props.forOverlay === undefined) {
					item = this.props.itemType === "first" ? chartData.firstItem : this.props.itemType === "last" ? chartData.lastItem : currentItem;
					yAccessor = chartData.config.accessors.yAccessor;
	
					if (item !== undefined && yAccessor !== null) {
						var yValue = yAccessor(item);
						var xValue = chartData.accessors.xAccessor(item);
	
						var x1 = Math.round(chartData.plot.scales.xScale(xValue)),
						    y1 = Math.round(chartData.plot.scales.yScale(yValue));
						var edgeX = this.props.edgeAt === "left" ? 0 - this.props.yAxisPad : this.context.width + this.props.yAxisPad;
	
						edge = _react2["default"].createElement(_EdgeCoordinate2["default"], {
							type: this.props.type,
							className: "edge-coordinate",
							show: true,
							x1: x1 + chartData.config.origin[0], y1: y1 + chartData.config.origin[1],
							x2: edgeX + chartData.config.origin[0], y2: y1 + chartData.config.origin[1],
							coordinate: displayFormat(yValue),
							edgeAt: edgeX,
							orient: this.props.orient });
					}
				}
				return edge;
			}
		}]);
	
		return EdgeIndicator;
	})(_react2["default"].Component);
	
	EdgeIndicator.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	EdgeIndicator.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["horizontal"]).isRequired,
		className: _react2["default"].PropTypes.string,
		itemType: _react2["default"].PropTypes.oneOf(["first", "last", "current"]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["left", "right"]),
		edgeAt: _react2["default"].PropTypes.oneOf(["left", "right"]),
		forChart: _react2["default"].PropTypes.number.isRequired,
		forOverlay: _react2["default"].PropTypes.number, // undefined means main Data series of that chart
		displayFormat: _react2["default"].PropTypes.func.isRequired
	};
	
	EdgeIndicator.defaultProps = {
		type: "horizontal",
		orient: "left",
		edgeAt: "left",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		yAxisPad: 5,
		namespace: "ReStock.EdgeIndicator"
	};
	
	module.exports = EdgeIndicator;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ChartWidthMixin = {
		getJQuery: function getJQuery() {
			return window.$;
		},
		handleWindowResize: function handleWindowResize() {
			var $ = this.getJQuery();
			var w = $(_react2["default"].findDOMNode(this)).parent().width();
			console.log("width = ", w);
	
			this.setState({
				width: w
			});
		},
		componentWillUnMount: function componentWillUnMount() {
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount: function componentDidMount() {
			window.addEventListener("resize", this.handleWindowResize);
			var $ = this.getJQuery();
			var w = $(_react2["default"].findDOMNode(this)).parent().width();
			this.setState({
				width: w
			});
		}
	};
	
	module.exports = ChartWidthMixin;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(119);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _utilsUtilsJs = __webpack_require__(115);
	
	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);
	
	var defaultOptions = {
		fast: 12,
		slow: 26,
		signal: 9,
		pluck: "close",
		fill: {
			MACDLine: "none",
			signalLine: "none",
			histogram: "steelblue"
		},
		stroke: {
			MACDLine: "red",
			signalLine: "green",
			histogram: "steelblue"
		}
	};
	
	function MACDIndicator(options, chartProps) {
	
		var prefix = "chart_" + chartProps.id;
		var MACDOption = _utilsUtilsJs2["default"].mergeRecursive(options, defaultOptions);
		function MACD() {}
		MACD.options = function () {
			return MACDOption;
		};
		MACD.calculate = function (data) {
			// console.log(prefix, options);
			var fastKey = "ema" + MACDOption.fast;
			var slowKey = "ema" + MACDOption.slow;
			var source = MACDOption.pluck || defaultOptions.pluck;
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateEMA(data, MACDOption.fast, fastKey, source, prefix);
			newData = _utilsMovingAverageCalculator2["default"].calculateEMA(newData, MACDOption.slow, slowKey, source, prefix);
	
			newData.forEach(function (each) {
				if (each[prefix]) {
					if (each[prefix][slowKey] && each[prefix][fastKey]) {
						each[prefix].MACDLine = each[prefix][fastKey] - each[prefix][slowKey];
					}
				}
			});
	
			_utilsMovingAverageCalculator2["default"].calculateEMA(newData.slice(MACDOption.slow), MACDOption.signal, "signalLine", prefix + ".MACDLine", prefix);
	
			newData.forEach(function (each) {
				if (each[prefix]) {
					if (each[prefix].MACDLine && each[prefix].signalLine) {
						each[prefix].histogram = each[prefix].MACDLine - each[prefix].signalLine;
					}
				}
			});
	
			// console.table(newData);
			// console.log(newData[newData.length - 3]);
			return newData;
		};
		MACD.yAccessor = function () {
			return function (d) {
				if (d && d[prefix]) return { MACDLine: d[prefix].MACDLine, signalLine: d[prefix].signalLine, histogram: d[prefix].histogram };
			};
		};
		return MACD;
	}
	
	module.exports = MACDIndicator;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _libUtilsPureComponent = __webpack_require__(116);
	
	var _libUtilsPureComponent2 = _interopRequireDefault(_libUtilsPureComponent);
	
	var TooltipContainer = (function (_PureComponent) {
		function TooltipContainer() {
			_classCallCheck(this, TooltipContainer);
	
			_get(Object.getPrototypeOf(TooltipContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(TooltipContainer, _PureComponent);
	
		_createClass(TooltipContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ className: "toottip-hover" },
					children
				);
			}
		}]);
	
		return TooltipContainer;
	})(_libUtilsPureComponent2["default"]);
	
	TooltipContainer.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	TooltipContainer.defaultProps = { namespace: "ReStock.TooltipContainer" };
	
	module.exports = TooltipContainer;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = (function (_React$Component) {
		function OHLCTooltip() {
			_classCallCheck(this, OHLCTooltip);
	
			_get(Object.getPrototypeOf(OHLCTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(OHLCTooltip, _React$Component);
	
		_createClass(OHLCTooltip, [{
			key: "render",
			value: function render() {
				var displayDate, fromDate, toDate, open, high, low, close, volume;
	
				displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				if (item !== undefined && item.close !== undefined) {
					volume = item.volume / billion > 1 ? (item.volume / billion).toFixed(2) + "b" : item.volume / million > 1 ? (item.volume / million).toFixed(2) + "m" : item.volume / thousand > 1 ? (item.volume / thousand).toFixed(2) + "k" : item.volume;
	
					displayDate = this.props.xDisplayFormat(item.date);
					open = _utilsUtils2["default"].displayNumberFormat(item.open);
					high = _utilsUtils2["default"].displayNumberFormat(item.high);
					low = _utilsUtils2["default"].displayNumberFormat(item.low);
					close = _utilsUtils2["default"].displayNumberFormat(item.close);
				}
				var origin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + origin[0] + ", " + origin[1] + ")" },
					_react2["default"].createElement(
						"text",
						{ x: 0, y: 0, className: "legend" },
						_react2["default"].createElement(
							"tspan",
							{ key: "label", x: 0, dy: "5", className: "tooltip-label" },
							"Date: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value" },
							displayDate
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "label_O", className: "tooltip-label" },
							" O: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_O" },
							open
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "label_H", className: "tooltip-label" },
							" H: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_H" },
							high
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "label_L", className: "tooltip-label" },
							" L: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_L" },
							low
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "label_C", className: "tooltip-label" },
							" C: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_C" },
							close
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "label_Vol", className: "tooltip-label" },
							" Vol: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_Vol" },
							volume
						)
					)
				);
			}
		}]);
	
		return OHLCTooltip;
	})(_react2["default"].Component);
	
	OHLCTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	OHLCTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired
	};
	
	OHLCTooltip.defaultProps = {
		namespace: "ReStock.OHLCTooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = OHLCTooltip;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var CompareTooltip = (function (_React$Component) {
		function CompareTooltip() {
			_classCallCheck(this, CompareTooltip);
	
			_get(Object.getPrototypeOf(CompareTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(CompareTooltip, _React$Component);
	
		_createClass(CompareTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var displayValue = "n/a";
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				var thisSeries = chartData.config.compareSeries.filter(function (each) {
					return each.id === _this.props.forCompareSeries;
				})[0];
	
				if (item !== undefined && thisSeries.yAccessor(item) !== undefined) {
					displayValue = thisSeries.yAccessor(item);
				}
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")" },
					_react2["default"].createElement(
						"text",
						{ x: 0, y: 0, className: "legend" },
						_react2["default"].createElement(
							"tspan",
							{ key: "label", x: 0, dy: "5", className: "tooltip-label" },
							thisSeries.displayLabel + ": "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value", stroke: thisSeries.stroke },
							displayValue
						)
					)
				);
			}
		}]);
	
		return CompareTooltip;
	})(_react2["default"].Component);
	
	CompareTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	CompareTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forCompareSeries: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired
	};
	
	CompareTooltip.defaultProps = {
		namespace: "ReStock.CompareTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = CompareTooltip;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var SingleMAToolTip = (function (_React$Component) {
		function SingleMAToolTip() {
			_classCallCheck(this, SingleMAToolTip);
	
			_get(Object.getPrototypeOf(SingleMAToolTip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(SingleMAToolTip, _React$Component);
	
		_createClass(SingleMAToolTip, [{
			key: "handleClick",
			value: function handleClick(overlay) {
				if (this.props.onClick) {
					this.props.onClick(overlay);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
				return _react2["default"].createElement(
					"g",
					{ transform: translate },
					_react2["default"].createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color }),
					_react2["default"].createElement(
						"text",
						{ x: 5, y: 11, className: "legend" },
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							this.props.displayName
						),
						_react2["default"].createElement(
							"tspan",
							{ x: "5", dy: "15" },
							this.props.value
						)
					),
					_react2["default"].createElement("rect", { x: 0, y: 0, width: 55, height: 30, onClick: this.handleClick.bind(this, this.props.overlay) })
				);
			}
		}]);
	
		return SingleMAToolTip;
	})(_react2["default"].Component);
	
	SingleMAToolTip.propTypes = {
		origin: _react2["default"].PropTypes.array.isRequired,
		color: _react2["default"].PropTypes.string.isRequired,
		displayName: _react2["default"].PropTypes.string.isRequired,
		value: _react2["default"].PropTypes.string.isRequired,
		onClick: _react2["default"].PropTypes.func
	};
	
	var MovingAverageTooltip = (function (_React$Component2) {
		function MovingAverageTooltip() {
			_classCallCheck(this, MovingAverageTooltip);
	
			_get(Object.getPrototypeOf(MovingAverageTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(MovingAverageTooltip, _React$Component2);
	
		_createClass(MovingAverageTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")", className: "ma-container" },
					chartData.config.overlays.map(function (eachOverlay, idx) {
						var yValue = eachOverlay.yAccessor(item);
	
						var yDisplayValue = yValue ? _this.props.displayFormat(yValue) : "n/a";
						return _react2["default"].createElement(SingleMAToolTip, {
							key: idx,
							origin: [_this.props.width * idx, 0],
							color: eachOverlay.stroke,
							displayName: eachOverlay.tooltipLabel,
							value: yDisplayValue,
							overlay: eachOverlay,
							onClick: _this.props.onClick });
					})
				);
			}
		}]);
	
		return MovingAverageTooltip;
	})(_react2["default"].Component);
	
	MovingAverageTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	MovingAverageTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		onClick: _react2["default"].PropTypes.func
	};
	
	MovingAverageTooltip.defaultProps = {
		namespace: "ReStock.MovingAverageTooltip",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	module.exports = MovingAverageTooltip;
	// console.log(yValue);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var MACDTooltip = (function (_React$Component) {
		function MACDTooltip() {
			_classCallCheck(this, MACDTooltip);
	
			_get(Object.getPrototypeOf(MACDTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(MACDTooltip, _React$Component);
	
		_createClass(MACDTooltip, [{
			key: "render",
			value: function render() {
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var options = chartData.config.indicatorOptions;
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var macd = item["chart_" + this.props.forChart];
				var format = chartData.config.mouseCoordinates.format;
	
				var MACDLine = macd && format(macd.MACDLine) || "n/a";
				var signalLine = macd && format(macd.signalLine) || "n/a";
				var histogram = macd && format(macd.histogram) || "n/a";
	
				var origin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + origin[0] + ", " + origin[1] + ")" },
					_react2["default"].createElement(
						"text",
						{ x: 0, y: 0, className: "legend" },
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							"MACD ("
						),
						_react2["default"].createElement(
							"tspan",
							{ stroke: options.stroke.MACDLine, strokeWidth: 0.5 },
							options.slow
						),
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							", "
						),
						_react2["default"].createElement(
							"tspan",
							{ stroke: options.stroke.MACDLine, strokeWidth: 0.5 },
							options.fast
						),
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							MACDLine
						),
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							" Signal ("
						),
						_react2["default"].createElement(
							"tspan",
							{ stroke: options.stroke.signalLine, strokeWidth: 0.5 },
							options.signal
						),
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							signalLine
						),
						_react2["default"].createElement(
							"tspan",
							{ className: "tooltip-label" },
							" Histogram: "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							histogram
						)
					)
				);
			}
		}]);
	
		return MACDTooltip;
	})(_react2["default"].Component);
	
	MACDTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	MACDTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired
	};
	
	MACDTooltip.defaultProps = {
		namespace: "ReStock.MACDTooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = MACDTooltip;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsScaleUtils = __webpack_require__(120);
	
	var _utilsScaleUtils2 = _interopRequireDefault(_utilsScaleUtils);
	
	var _utilsOverlayUtils = __webpack_require__(121);
	
	var _utilsOverlayUtils2 = _interopRequireDefault(_utilsOverlayUtils);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var overlayColors = _utilsUtils2["default"].overlayColors;
	var pluck = _utilsUtils2["default"].pluck;
	var keysAsArray = _utilsUtils2["default"].keysAsArray;
	
	var ChartDataUtil = {
		containsChart: function containsChart(props) {
			return this.getCharts(props).length > 0;
		},
		getCharts: function getCharts(props) {
			return this.getChildren(props.children, /Chart$/);
		},
		getChartDataForChart: function getChartDataForChart(props, context) {
			var chartData = context.chartData.filter(function (each) {
				return each.id === props.forChart;
			})[0];
			return chartData;
		},
		getCurrentItemForChart: function getCurrentItemForChart(props, context) {
			var currentItem = context.currentItems.filter(function (each) {
				return each.id === props.forChart;
			})[0];
			var item = currentItem ? currentItem.data : {};
			return item;
		},
		getChartData: function getChartData(props, context, partialData, fullData, other) {
			var _this = this;
	
			var charts = this.getCharts(props);
			var innerDimensions = this.getInnerDimensions(context, other);
	
			return charts.map(function (each) {
				var chartProps = each.props;
				var config = _this.getChartConfigFor(innerDimensions, chartProps, partialData, fullData, other);
				var plot = _this.getChartPlotFor(config, partialData);
	
				return {
					id: each.props.id,
					config: config,
					plot: plot
				};
			});
		},
		getChildren: function getChildren(children, regex) {
			var matchingChildren = [];
			_react2["default"].Children.forEach(children, function (child) {
				if (regex.test(child.props.namespace)) matchingChildren.push(child);
			});
			return matchingChildren;
		},
		getMainChart: function getMainChart(children) {
			var eventCapture = this.getChildren(children, /EventCapture$/);
			if (eventCapture.length > 1) throw new Error("only one EventCapture allowed");
			if (eventCapture.length > 0) return eventCapture[0].props.mainChart;
		},
		getClosestItem: function getClosestItem(plotData, mouseXY, chartData) {
			// console.log(chartData);
			var xValue = chartData.plot.scales.xScale.invert(mouseXY[0]);
			var item = _utilsUtils2["default"].getClosestItem(plotData, xValue, chartData.config.accessors.xAccessor);
			return item;
		},
		getInnerDimensions: function getInnerDimensions(ctx, other) {
			// console.log(other);
			if (other === undefined) other = {};
			return {
				width: other.width || ctx.width,
				height: other.height || ctx.height
			};
		},
		getDimensions: function getDimensions(innerDimension, chartProps, margin) {
	
			// console.log(margin);
			var availableWidth = innerDimension.width;
			var availableHeight = innerDimension.height;
	
			var fullWidth = chartProps.width || availableWidth;
			var fullHeight = chartProps.height || availableHeight;
	
			/*let width = fullWidth - margin.left - margin.right;
	  let height = fullHeight - margin.top - margin.bottom;
	  	console.log(margin, fullWidth, fullHeight, width, height);*/
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: fullWidth,
				height: fullHeight
			};
		},
		getChartConfigFor: function getChartConfigFor(innerDimension, chartProps, partialData, fullData, passThroughProps) {
			var padding = this.getPaddingForChart(chartProps);
			var dimensions = this.getDimensions(innerDimension, chartProps);
			var indicator = this.getIndicator(chartProps, passThroughProps);
			this.calculateIndicator(fullData, indicator, chartProps);
	
			var accessors = this.getXYAccessors(chartProps, passThroughProps, indicator);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			var compareBase = this.identifyCompareBase(chartProps);
			var compareSeries = this.identifyCompareSeries(chartProps);
			// console.log(compareBase, compareSeries);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
			// this.calculateRateOfReturn(fullData, compareSeries, compareBase, accessors.yAccessor);
	
			var origin = typeof chartProps.origin === "function" ? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight) : chartProps.origin;
	
			var scales = this.defineScales(chartProps, partialData, passThroughProps);
			// ror_1, ror_2, ror_base
			var config = {
				width: dimensions.width,
				height: dimensions.height,
				mouseCoordinates: {
					at: chartProps.yMousePointerDisplayLocation,
					format: chartProps.yMousePointerDisplayFormat
				},
				indicatorOptions: indicator && indicator.options(),
				origin: origin,
				padding: padding,
				accessors: accessors,
				overlays: overlaysToAdd,
				compareBase: compareBase,
				compareSeries: compareSeries,
				scaleType: scales
			};
			return config;
		},
		getChartPlotFor: function getChartPlotFor(config, partialData, domainL, domainR) {
			var overlayYAccessors = pluck(keysAsArray(config.overlays), "yAccessor");
	
			var yaccessors;
	
			if (config.compareSeries.length > 0) {
				this.updateComparisonData(partialData, config.compareBase, config.compareSeries);
				yaccessors = [function (d) {
					return d.compare;
				}];
				// yaccessors = [config.accessors.yAccessor].concat(overlayYAccessors)
			} else {
				yaccessors = [config.accessors.yAccessor].concat(overlayYAccessors);
			}
			var xyValues = _utilsScaleUtils2["default"].flattenData(partialData, [config.accessors.xAccessor], yaccessors);
	
			var overlayValues = this.updateOverlayFirstLast(partialData, config.overlays);
	
			var scales = this.updateScales(xyValues, config.scaleType, partialData, config.width /* - config.margin.left - config.margin.right*/
			, config.height /* - config.margin.top - config.margin.bottom*/
			, config.padding);
	
			if (domainL && domainR) scales.xScale.domain([domainL, domainR]);
	
			// var last = Utils.cloneMe(partialData[partialData.length - 1]);
			var last = partialData[partialData.length - 1];
			// var first = Utils.cloneMe(partialData[0]);
			var first = partialData[0];
	
			var drawableWidth = scales.xScale(config.accessors.xAccessor(partialData[partialData.length - 1])) - scales.xScale(config.accessors.xAccessor(partialData[0]));
	
			var plot = {
				drawableWidth: drawableWidth,
				overlayValues: overlayValues,
				scales: scales,
				lastItem: last,
				firstItem: first
			};
			return plot;
		},
		getCompareYAccessors: function getCompareYAccessors(compareWith) {
			var yAccessors = compareWith.map(function (eachCompare) {
				return function (d) {
					return d["compare_" + eachCompare.id + "_percent"];
				};
			});
			yAccessors.push(function (d) {
				return d.compare_base_percent;
			});
			return yAccessors;
		},
		updateComparisonData: function updateComparisonData(partialData, compareBase, compareSeries) {
	
			var first = partialData[0];
			var base = compareBase(first);
	
			partialData.forEach(function (d) {
				d.compare = {};
	
				d.compare.open = (d.open - base) / base;
				d.compare.high = (d.high - base) / base;
				d.compare.low = (d.low - base) / base;
				d.compare.close = (d.close - base) / base;
	
				compareSeries.forEach(function (eachSeries) {
					var key = "compare_" + eachSeries.id;
					d.compare[key] = (eachSeries.yAccessor(d) - eachSeries.yAccessor(first)) / eachSeries.yAccessor(first);
				});
			});
	
			// console.table(partialData);
			// console.log(partialData[7].temp, partialData[7].compare);
		},
	
		defineScales: function defineScales(props, data, passThroughProps) {
			var xScale = props.xScale,
			    yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps.xScale;
	
			if (xScale === undefined) {
				var each = data[0];
				if (typeof each === "object") {
					Object.keys(each).forEach(function (key) {
						if (Object.prototype.toString.call(each[key]) === "[object Date]") {
							xScale = _d32["default"].time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = _d32["default"].scale.linear();
				// xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = _d32["default"].scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getPaddingForChart: function getPaddingForChart(props) {
			// var margin;
			/*React.Children.forEach(props.children, (child) => {
	  	if (["ReStock.DataSeries"]
	  			.indexOf(child.props.namespace) > -1) {
	  		margin = props.innerMargin;
	  	}
	  });*/
			return props.padding;
		},
		getIndicator: function getIndicator(props) {
			var indicator;
	
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
					if (child.props && child.props.indicator) {
						var indicatorProp = child.props.indicator;
						indicator = indicatorProp(child.props.options, props);
					}
				}
			});
			return indicator;
		},
		getXYAccessors: function getXYAccessors(props, passThroughProps, indicator) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
					if (child.props) {
	
						var xAccessor = passThroughProps !== undefined && passThroughProps.stockScale ? passThroughProps.xAccessor : child.props.xAccessor;
						accessor.xAccessor = xAccessor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			if (!accessor.yAccessor && indicator) {
				accessor.yAccessor = indicator.yAccessor();
			}
			// if (indicator) console.log(indicator.yAccessor());
	
			return accessor;
		},
		identifyOverlaysToAdd: function identifyOverlaysToAdd(props) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(props.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					_react2["default"].Children.forEach(child.props.children, function (grandChild) {
						if (/OverlaySeries$/.test(grandChild.props.namespace)) {
							var key = _utilsOverlayUtils2["default"].getYAccessorKey(props.id, grandChild.props);
							var overlay = {
								id: grandChild.props.id,
								chartId: props.id,
								key: key,
								yAccessor: function yAccessor(d) {
									return d[key];
								},
								options: grandChild.props.options,
								type: grandChild.props.type,
								tooltipLabel: _utilsOverlayUtils2["default"].getToolTipLabel(grandChild.props),
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id)
							};
							overlaysToAdd.push(overlay);
						}
					});
				}
			});
			return overlaysToAdd;
		},
		identifyCompareBase: function identifyCompareBase(props) {
			var compareBase;
			_react2["default"].Children.forEach(props.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					compareBase = child.props.compareBase;
				}
			});
			return compareBase;
		},
		identifyCompareSeries: function identifyCompareSeries(props) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(props.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					_react2["default"].Children.forEach(child.props.children, function (grandChild) {
						if (/CompareSeries$/.test(grandChild.props.namespace)) {
							overlaysToAdd.push({
								yAccessor: grandChild.props.yAccessor,
								id: grandChild.props.id,
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id),
								displayLabel: grandChild.props.displayLabel,
								percentYAccessor: function percentYAccessor(d) {
									return d.compare["compare_" + grandChild.props.id];
								}
							});
						}
					});
				}
			});
			return overlaysToAdd;
		},
		calculateOverlays: function calculateOverlays(fullData, overlays) {
			if (Array.isArray(fullData)) {
				overlays.filter(function (eachOverlay) {
					return eachOverlay.id !== undefined;
				}).forEach(function (overlay) {
					_utilsOverlayUtils2["default"].calculateOverlay(fullData, overlay);
				});
			} else {
				Object.keys(fullData).filter(function (key) {
					return ["D", "W", "M"].indexOf(key) > -1;
				}).forEach(function (key) {
					overlays.filter(function (eachOverlay) {
						return eachOverlay.id !== undefined;
					}).forEach(function (overlay) {
						_utilsOverlayUtils2["default"].calculateOverlay(fullData[key], overlay);
					});
				});
			}
			// console.table(fullData.M);
			// console.log(overlays);
		},
		calculateIndicator: function calculateIndicator(fullData, indicator) {
			Object.keys(fullData).filter(function (key) {
				return ["D", "W", "M"].indexOf(key) > -1;
			}).forEach(function (key) {
				if (indicator) indicator.calculate(fullData[key]);
			});
		},
		updateOverlayFirstLast: function updateOverlayFirstLast(data, overlays) {
			// console.log("updateOverlayFirstLast");
			var overlayValues = [];
	
			overlays.forEach(function (eachOverlay) {
				// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
				overlayValues.push({
					id: eachOverlay.id,
					first: _utilsOverlayUtils2["default"].firstDefined(data, eachOverlay.yAccessor),
					last: _utilsOverlayUtils2["default"].lastDefined(data, eachOverlay.yAccessor)
				});
			});
			return overlayValues;
		},
		updateScales: function updateScales(xyValues, scales, data, width, height, padding) {
			// console.log("updateScales");
			// width = width - margin.left - margin.right/**/
			// height = height - margin.top - margin.bottom/**/
	
			scales.xScale.range([padding.left, width - padding.right]);
			// if polylinear scale then set data
			if (scales.xScale.isPolyLinear && scales.xScale.isPolyLinear()) {
				scales.xScale.data(data);
			} else {
				// else set the domain
				scales.xScale.domain(_d32["default"].extent(xyValues.xValues));
			}
	
			scales.yScale.range([height - padding.top, padding.bottom]);
	
			var domain = _d32["default"].extent(xyValues.yValues);
	
			scales.yScale.domain(domain);
	
			return {
				xScale: scales.xScale.copy(),
				yScale: scales.yScale.copy()
			};
		},
		getCurrentItems: function getCurrentItems(chartData, mouseXY, plotData) {
			return chartData.map(function (eachChartData) {
				var xValue = eachChartData.plot.scales.xScale.invert(mouseXY[0]);
				var item = _utilsUtils2["default"].getClosestItem(plotData, xValue, eachChartData.config.accessors.xAccessor);
				return { id: eachChartData.id, data: item };
			});
		},
		getDataToPlotForDomain: function getDataToPlotForDomain(domainL, domainR, data, width, xAccessor) {
			var threshold = 0.5; // number of datapoints per 1 px
			var allowedIntervals = ["D", "W", "M"];
			// console.log(domainL, domainR, data, width);
	
			var dataForInterval, filteredData, interval, leftX, rightX;
			for (var i = 0; i < allowedIntervals.length; i++) {
				interval = allowedIntervals[i];
				dataForInterval = data[interval];
	
				leftX = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, domainL, xAccessor);
				rightX = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, domainR, xAccessor);
	
				filteredData = dataForInterval.slice(leftX.right, rightX.right);
	
				// console.log(filteredData.length, width * threshold);
				if (filteredData.length < width * threshold) break;
			}
	
			// console.log(leftX, rightX,  (dd[leftX.left]), xAccessor(dd[rightX.right]));
	
			return {
				interval: interval,
				data: filteredData
			};
		}
	};
	
	module.exports = ChartDataUtil;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _StockscaleTransformer = __webpack_require__(122);
	
	var _StockscaleTransformer2 = _interopRequireDefault(_StockscaleTransformer);
	
	var _HeikinAshiTransformer = __webpack_require__(123);
	
	var _HeikinAshiTransformer2 = _interopRequireDefault(_HeikinAshiTransformer);
	
	var _KagiTransformer = __webpack_require__(124);
	
	var _KagiTransformer2 = _interopRequireDefault(_KagiTransformer);
	
	var _PointAndFigureTransformer = __webpack_require__(125);
	
	var _PointAndFigureTransformer2 = _interopRequireDefault(_PointAndFigureTransformer);
	
	var _RenkoTransformer = __webpack_require__(126);
	
	var _RenkoTransformer2 = _interopRequireDefault(_RenkoTransformer);
	
	var ChartTransformer = {
		getTransformerFor: function getTransformerFor(type) {
			if (type === "none") return function (d) {
				return d;
			};
			if (type === "stockscale") return _StockscaleTransformer2["default"];
			if (type === "heikinashi") return _HeikinAshiTransformer2["default"];
			if (type === "kagi") return _KagiTransformer2["default"];
			if (type === "pointandfigure") return _PointAndFigureTransformer2["default"];
			if (type === "renko") return _RenkoTransformer2["default"];
			return false;
		},
		filter: function filter(data, dateAccesor, fromDate, toDate) {
			var filteredData = data.filter(function (each) {
				var filtered = dateAccesor(each).getTime() > fromDate.getTime() && dateAccesor(each).getTime() < toDate.getTime();
				return filtered;
			});
			return filteredData;
		}
	};
	
	module.exports = ChartTransformer;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(115);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(112);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	
	var EventHandler = (function (_React$Component) {
		function EventHandler(props, context) {
			_classCallCheck(this, EventHandler);
	
			_get(Object.getPrototypeOf(EventHandler.prototype), "constructor", this).call(this, props, context);
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
				panInProgress: false
			};
		}
	
		_inherits(EventHandler, _React$Component);
	
		_createClass(EventHandler, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var props = this.props;
				var context = this.context;
				var data = context.data;
				var initialDisplay = context.initialDisplay;
				var dataTransformProps = context.dataTransformProps;
				var interval = context.interval;
	
				var dataForInterval = data[interval];
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(props.children);
				var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
				var plotData = dataForInterval.slice(beginIndex);
				var chartData = _utilsChartDataUtil2["default"].getChartData(props, context, plotData, data, dataTransformProps);
	
				this.setState({
					plotData: plotData,
					chartData: chartData,
					interval: this.context.interval,
					mainChart: mainChart,
					currentCharts: [mainChart]
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(props, context) {
				var _state = this.state;
				var interval = _state.interval;
				var chartData = _state.chartData;
				var plotData = _state.plotData;
				var data = context.data;
				var dataTransformProps = context.dataTransformProps;
	
				var dataForInterval = data[interval];
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(props.children);
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, mainChartData.config.accessors.xAccessor(plotData[0]), mainChartData.config.accessors.xAccessor).left;
				var endIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, mainChartData.config.accessors.xAccessor(plotData[plotData.length - 1]), mainChartData.config.accessors.xAccessor).right;
	
				var newPlotData = dataForInterval.slice(beginIndex, endIndex);
				var newChartData = _utilsChartDataUtil2["default"].getChartData(props, context, plotData, data, dataTransformProps);
	
				this.setState({
					chartData: newChartData,
					plotData: newPlotData,
					currentItems: [],
					show: false,
					mouseXY: [0, 0],
					mainChart: mainChart
				});
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
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
				};
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(mouseXY) {
				// console.log("mouse move - ", mouseXY);
				var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(this.state.chartData, mouseXY, this.state.plotData);
				// .filter((eachChartData) => eachChartData.id === this.state.mainChart)
				var currentCharts = this.state.chartData.filter(function (chartData) {
					var top = chartData.config.origin[1];
					var bottom = top + chartData.config.height;
					return mouseXY[1] > top && mouseXY[1] < bottom;
				}).map(function (chartData) {
					return chartData.id;
				});
	
				// console.log(currentCharts);
	
				this.setState({
					mouseXY: mouseXY,
					currentItems: currentItems,
					show: true,
					currentCharts: currentCharts
				});
			}
		}, {
			key: "handleMouseEnter",
			value: function handleMouseEnter() {
				// console.log("enter");
				this.setState({
					show: true
				});
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave() {
				// console.log("leave");
				this.setState({
					show: false
				});
			}
		}, {
			key: "handleZoom",
			value: function handleZoom(zoomDirection, mouseXY) {
				// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
				var _state2 = this.state;
				var mainChart = _state2.mainChart;
				var chartData = _state2.chartData;
				var plotData = _state2.plotData;
				var interval = _state2.interval;
				var data = this.context.data;
	
				var chart = chartData.filter(function (eachChart) {
					return eachChart.id === mainChart;
				})[0],
				    item = _utilsChartDataUtil2["default"].getClosestItem(plotData, mouseXY, chart),
				    xScale = chart.plot.scales.xScale,
				    domain = xScale.domain(),
				    centerX = chart.config.accessors.xAccessor(item),
				    leftX = centerX - domain[0],
				    rightX = domain[1] - centerX,
				    zoom = Math.pow(1 + Math.abs(zoomDirection) / 2, zoomDirection),
				    domainL = getLongValue(centerX) - leftX * zoom,
				    domainR = getLongValue(centerX) + rightX * zoom,
				    domainRange = Math.abs(domain[1] - domain[0]),
				    fullData = data[interval],
				    last = fullData[fullData.length - 1],
				    first = fullData[0];
	
				domainL = Math.max(getLongValue(chart.config.accessors.xAccessor(first)) - Math.floor(domainRange / 3), domainL);
				domainR = Math.min(getLongValue(chart.config.accessors.xAccessor(last)) + Math.floor(domainRange / 3), domainR);
				// xScale(domainR) - xScale(domainL)
				var dataToPlot = _utilsChartDataUtil2["default"].getDataToPlotForDomain(domainL, domainR, data, chart.config.width, chart.config.accessors.xAccessor);
				if (dataToPlot.data.length < 10) return;
				var newChartData = chartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, dataToPlot.data, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
				this.setState({
					chartData: newChartData,
					plotData: dataToPlot.data,
					interval: dataToPlot.interval
				});
			}
		}, {
			key: "handlePanStart",
			value: function handlePanStart(panStartDomain, panOrigin) {
				// console.log("panStartDomain - ", panStartDomain, ", panOrigin - ", panOrigin);
				this.setState({
					panInProgress: true,
					panStartDomain: panStartDomain,
					panOrigin: panOrigin,
					focus: true
				});
			}
		}, {
			key: "handlePan",
			value: function handlePan(mousePosition, startDomain) {
				var _this = this;
	
				// console.log("mousePosition ", mousePosition);
				/* can also use plotData, use this if you want to pan and show only within that data set*/
				var _state3 = this.state;
				var mainChart = _state3.mainChart;
				var chartData = _state3.chartData;
				var interval = _state3.interval;
				var panStartDomain = _state3.panStartDomain;
				var panOrigin = _state3.panOrigin;
				var data = this.context.data;
	
				if (panStartDomain === null) {
					this.handlePanStart(startDomain, mousePosition);
				} else {
					requestAnimationFrame(function () {
						var chart = chartData.filter(function (eachChart) {
							return eachChart.id === mainChart;
						})[0],
						    domainRange = panStartDomain[1] - panStartDomain[0],
						    fullData = data[interval],
						    last = fullData[fullData.length - 1],
						    first = fullData[0],
						    dx = mousePosition[0] - panOrigin[0],
						    xAccessor = chart.config.accessors.xAccessor;
	
						// console.log("pan -- mouse move - ", mousePosition, " dragged by ", dx, " pixels");
	
						var domainStart = getLongValue(panStartDomain[0]) - dx / chart.config.width * domainRange;
						if (domainStart < getLongValue(xAccessor(first)) - Math.floor(domainRange / 3)) {
							domainStart = getLongValue(xAccessor(first)) - Math.floor(domainRange / 3);
						} else {
							domainStart = Math.min(getLongValue(xAccessor(last)) + Math.ceil(domainRange / 3), domainStart + domainRange) - domainRange;
						}
						var domainL = domainStart,
						    domainR = domainStart + domainRange;
						if (panStartDomain[0] instanceof Date) {
							domainL = new Date(domainL);
							domainR = new Date(domainR);
						}
	
						var leftX = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainL, xAccessor);
						var rightX = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainR, xAccessor);
	
						var filteredData = fullData.slice(leftX.right, rightX.right);
	
						var newChartData = chartData.map(function (eachChart) {
							var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, filteredData, domainL, domainR);
							return {
								id: eachChart.id,
								config: eachChart.config,
								plot: plot
							};
						});
						var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, mousePosition, filteredData);
	
						var currentCharts = newChartData.filter(function (eachChartData) {
							var top = eachChartData.config.origin[1];
							var bottom = top + eachChartData.config.height;
							return mousePosition[1] > top && mousePosition[1] < bottom;
						}).map(function (eachChartData) {
							return eachChartData.id;
						});
	
						_this.setState({
							chartData: newChartData,
							plotData: filteredData,
							currentItems: currentItems,
							// show: true,
							mouseXY: mousePosition,
							currentCharts: currentCharts
						});
					});
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd() {
				this.setState({
					panInProgress: false,
					panStartDomain: null
				});
			}
		}, {
			key: "handleFocus",
			value: function handleFocus(focus) {
				// console.log(focus);
				this.setState({
					focus: focus
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, _utilsUtils2["default"].mergeObject({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EventHandler;
	})(_react2["default"].Component);
	
	EventHandler.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		data: _react2["default"].PropTypes.object,
		dataTransformOptions: _react2["default"].PropTypes.object,
		dataTransformProps: _react2["default"].PropTypes.object,
		plotData: _react2["default"].PropTypes.array,
		chartData: _react2["default"].PropTypes.array,
		initialDisplay: _react2["default"].PropTypes.number.isRequired,
		interval: _react2["default"].PropTypes.string
	};
	
	EventHandler.childContextTypes = {
		plotData: _react2["default"].PropTypes.array,
		chartData: _react2["default"].PropTypes.array,
		currentItems: _react2["default"].PropTypes.array,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		interval: _react2["default"].PropTypes.string,
		currentCharts: _react2["default"].PropTypes.array,
		mainChart: _react2["default"].PropTypes.number,
	
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool.isRequired,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func
	};
	
	module.exports = EventHandler;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var overlayColors = _d32["default"].scale.category10();
	
	var Utils = {
		overlayColors: overlayColors,
		isReactVersion13: function isReactVersion13() {
			var version = _react2["default"].version.split(".")[1];
			return version === "13";
		},
		isReactVersion14: function isReactVersion14() {
			return _react2["default"].version.split(".")[1] === "14";
		},
		cloneMe: function cloneMe(obj) {
			if (obj == null || typeof obj !== "object") {
				return obj;
			}
			if (obj instanceof Date) {
				return new Date(obj.getTime());
			}
			var temp = {}; // obj.constructor(); // changed
	
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					temp[key] = this.cloneMe(obj[key]);
				}
			}
			return temp;
		},
		displayDateFormat: _d32["default"].time.format("%Y-%m-%d"),
		displayNumberFormat: function displayNumberFormat(x) {
			return Utils.numberWithCommas(x.toFixed(2));
		},
		numberWithCommas: function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		isNumeric: function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		mergeObject: function mergeObject(a, b) {
			var newObject = {};
			Object.keys(a).forEach(function (key) {
				if (a[key] != null) {
					newObject[key] = a[key];
				}
			});
			Object.keys(b).forEach(function (key) {
				if (b[key] != null) {
					newObject[key] = b[key];
				}
			});
			return newObject;
		},
		mergeRecursive: (function (_mergeRecursive) {
			function mergeRecursive(_x, _x2) {
				return _mergeRecursive.apply(this, arguments);
			}
	
			mergeRecursive.toString = function () {
				return _mergeRecursive.toString();
			};
	
			return mergeRecursive;
		})(function (obj1, obj2) {
	
			for (var p in obj2) {
				try {
					// Property in destination object set; update its value.
					if (obj2[p].constructor == Object) {
						obj1[p] = mergeRecursive(obj1[p], obj2[p]);
					} else {
						obj1[p] = obj2[p];
					}
				} catch (e) {
					// Property in destination object not set; create it and set its value.
					obj1[p] = obj2[p];
				}
			}
	
			return obj1;
		}),
		mousePosition: function mousePosition(e) {
			var container = e.currentTarget,
			    rect = container.getBoundingClientRect(),
			    x = e.clientX - rect.left - container.clientLeft,
			    y = e.clientY - rect.top - container.clientTop,
			    xy = [Math.round(x), Math.round(y)];
			return xy;
		},
		getValue: function getValue(d) {
			if (d instanceof Date) {
				return d.getTime();
			}
			return d;
		},
		getClosestItem: function getClosestItem(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			var closest = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? array[lo] : array[hi];
			// console.log(array[lo], array[hi], closest, lo, hi);
			return Utils.cloneMe(closest);
		},
		getClosestItemIndex: function getClosestItemIndex(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			var closestIndex = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? lo : hi;
	
			return closestIndex;
		},
		getClosestItemIndexes: function getClosestItemIndexes(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			// console.log(array[lo], array[hi], closestIndex, lo, hi);
			return { left: lo, right: hi };
		},
	
		pluck: function pluck(array, key) {
			return array.map(function (each) {
				return Utils.getter(each, key);
			});
		},
		keysAsArray: function keysAsArray(obj) {
			return Object.keys(obj).filter(function (key) {
				return obj[key] !== null;
			}).map(function (key) {
				return obj[key];
			});
		},
		sum: function sum(array) {
			return array.reduce(function (d1, d2) {
				return d1 + d2;
			});
		},
		setter: function setter(obj, subObjectKey, key, value) {
			if (subObjectKey) {
				if (obj[subObjectKey] === undefined) obj[subObjectKey] = {};
				obj[subObjectKey][key] = value;
			} else {
				obj[key] = value;
			}
		},
		getter: function getter(obj, pluckKey) {
			var keys = pluckKey.split(".");
			var value;
			keys.forEach(function (key) {
				if (!value) value = obj[key];else value = value[key];
			});
			return value;
		}
	};
	
	module.exports = Utils;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLibShallowEqual = __webpack_require__(128);
	
	var _reactLibShallowEqual2 = _interopRequireDefault(_reactLibShallowEqual);
	
	var PureComponent = (function (_React$Component) {
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			_get(Object.getPrototypeOf(PureComponent.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(PureComponent, _React$Component);
	
		_createClass(PureComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _reactLibShallowEqual2["default"])(this.props, nextProps) || !(0, _reactLibShallowEqual2["default"])(this.state, nextState) || !(0, _reactLibShallowEqual2["default"])(this.context, nextContext);
			}
		}]);
	
		return PureComponent;
	})(_react2["default"].Component);
	
	module.exports = PureComponent;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var EdgeCoordinate = (function (_React$Component) {
		function EdgeCoordinate() {
			_classCallCheck(this, EdgeCoordinate);
	
			_get(Object.getPrototypeOf(EdgeCoordinate.prototype), "constructor", this).apply(this, arguments);
		}
	
		_inherits(EdgeCoordinate, _React$Component);
	
		_createClass(EdgeCoordinate, [{
			key: "render",
			value: function render() {
				if (!this.props.show) return null;
	
				var displayCoordinate = this.props.coordinate;
				var rectWidth = this.props.rectWidth ? this.props.rectWidth : this.props.type === "horizontal" ? 60 : 100,
				    rectHeight = 20;
	
				var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
				if (this.props.type === "horizontal") {
	
					edgeXRect = this.props.orient === "right" ? this.props.edgeAt + 1 : this.props.edgeAt - rectWidth - 1;
					edgeYRect = this.props.y1 - rectHeight / 2;
					edgeXText = this.props.orient === "right" ? this.props.edgeAt + rectWidth / 2 : this.props.edgeAt - rectWidth / 2;
					edgeYText = this.props.y1;
				} else {
					edgeXRect = this.props.x1 - rectWidth / 2;
					edgeYRect = this.props.orient === "bottom" ? this.props.edgeAt : this.props.edgeAt - rectHeight;
					edgeXText = this.props.x1;
					edgeYText = this.props.orient === "bottom" ? this.props.edgeAt + rectHeight / 2 : this.props.edgeAt - rectHeight / 2;
				}
				var coordinateBase = null,
				    coordinate = null;
				if (displayCoordinate !== undefined) {
					coordinateBase = _react2["default"].createElement("rect", { key: 1, className: "textbg",
						x: edgeXRect,
						y: edgeYRect,
						height: rectHeight, width: rectWidth, fill: this.props.fill });
					coordinate = _react2["default"].createElement(
						"text",
						{ key: 2, x: edgeXText,
							y: edgeYText,
							style: { "textAnchor": "middle" },
							dy: ".32em" },
						displayCoordinate
					);
				}
				var line = this.props.hideLine ? null : _react2["default"].createElement("line", { className: "cross-hair",
					x1: this.props.x1, y1: this.props.y1,
					x2: this.props.x2, y2: this.props.y2 });
				return _react2["default"].createElement(
					"g",
					{ className: (this.props.show ? "show " : "hide ") + this.props.className },
					line,
					coordinateBase,
					coordinate
				);
			}
		}]);
	
		return EdgeCoordinate;
	})(_react2["default"].Component);
	
	EdgeCoordinate.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
		coordinate: _react2["default"].PropTypes.any.isRequired,
		x1: _react2["default"].PropTypes.number.isRequired,
		y1: _react2["default"].PropTypes.number.isRequired,
		x2: _react2["default"].PropTypes.number.isRequired,
		y2: _react2["default"].PropTypes.number.isRequired,
		orient: _react2["default"].PropTypes.oneOf(["bottom", "top", "left", "right"]),
		rectWidth: _react2["default"].PropTypes.number,
		hideLine: _react2["default"].PropTypes.bool
	};
	EdgeCoordinate.defaultProps = {
		namespace: "ReStock.EdgeCoordinate",
		orient: "left",
		hideLine: false
	};
	module.exports = EdgeCoordinate;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Canvas = (function (_React$Component) {
		function Canvas(props) {
			_classCallCheck(this, Canvas);
	
			_get(Object.getPrototypeOf(Canvas.prototype), "constructor", this).call(this, props);
		}
	
		_inherits(Canvas, _React$Component);
	
		_createClass(Canvas, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement("canvas", { ref: "canvas",
					width: this.props.width,
					height: this.props.height,
					style: { position: "absolute", left: this.props.left, top: this.props.top } });
			}
		}]);
	
		return Canvas;
	})(_react2["default"].Component);
	
	Canvas.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		left: _react2["default"].PropTypes.number.isRequired,
		top: _react2["default"].PropTypes.number.isRequired
	};
	
	module.exports = Canvas;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(115);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var pluck = _utils2["default"].pluck;
	var sum = _utils2["default"].sum;
	
	var MACalculator = {
		calculateSMA: function calculateSMA(data, period, key, pluckKey, subObjectKey) {
			// console.log("calculateSMA");
	
			var l = data.length - 1;
	
			data.map(function (each, i) {
				return data.slice(i - period, i);
			}).filter(function (array) {
				return array.length === period && array.length > 0;
			}).map(function (array) {
				return pluck(array, pluckKey);
			}).map(function (array) {
				return sum(array);
			}).map(function (total) {
				return total / period;
			}).reverse().forEach(function (avg, i) {
				// data[l - i][key] = avg;
				_utils2["default"].setter(data[l - i], subObjectKey, key, avg);
			});
	
			return data;
		},
		calculateEMA: function calculateEMA(data, period, key, pluckKey, subObjectKey) {
			// console.log("calculating EMA", period, key, pluckKey);
			/*
	  EMA = Price(t) * k + EMA(y) * (1 – k)
	  t = today, y = yesterday, N = number of days in EMA (or period), k = 2/(N+1)
	  */
			if (data.length > period) {
				var firstSMA = data.slice(0, period).map(function (each) {
					return _utils2["default"].getter(each, pluckKey);
				}).reduce(function (a, b) {
					return a + b;
				}) / period;
	
				_utils2["default"].setter(data[period], subObjectKey, key, firstSMA);
	
				// console.log(period, key, pluckKey, subObjectKey, firstSMA);
				var k = 2 / (period + 1),
				    prevEMA = firstSMA,
				    ema;
	
				for (var i = period; i < data.length; i++) {
					ema = _utils2["default"].getter(data[i], pluckKey) * k + prevEMA * (1 - k);
					_utils2["default"].setter(data[i], subObjectKey, key, ema);
	
					prevEMA = ema;
				}
			}
			return data;
		}
	};
	/*
	function setter(obj, subObjectKey, key, value) {
		if (subObjectKey) {
			if (obj[subObjectKey] === undefined) obj[subObjectKey] = {};
			obj[subObjectKey][key] = value;
		} else {
			obj[key] = value;
		}
	}
	
	function getter(obj, pluckKey) {
		var keys = pluckKey.split(".");
		var value;
		keys.forEach(key => {
			if (!value) value = obj[key];
			else value = value[key];
		})
		return value;
	}
	*/
	module.exports = MACalculator;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function pushToValues(values, eachValue) {
		if (typeof eachValue === "object" && Object.keys(eachValue).length > 0) {
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
		flattenData: function flattenData(data, xAccessors, yAccessors) {
			// console.log(xAccessors, yAccessors);
			var xValues = [];
			var yValues = [];
			data.forEach(function (row) {
				xAccessors.forEach(function (xAccessor) {
					var x = xAccessor(row);
					if (x !== undefined) {
						pushToValues(xValues, x);
					}
				});
				yAccessors.forEach(function (yAccessor) {
					var y = yAccessor(row);
					if (y !== undefined) {
						pushToValues(yValues, y);
					}
				});
			});
			return {
				xValues: xValues,
				yValues: yValues
			};
		}
	};
	
	module.exports = ScaleUtils;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(115);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _MovingAverageCalculator = __webpack_require__(119);
	
	var _MovingAverageCalculator2 = _interopRequireDefault(_MovingAverageCalculator);
	
	var OverlayUtils = {
		getToolTipLabel: function getToolTipLabel(props) {
			if (props.type === "sma" || props.type === "ema") {
				var tooltip = props.type.toUpperCase() + "(" + props.options.period + ")";
				return tooltip;
			}
			return "N/A";
		}, /*
	    getYAccessor(chartId, props) {
	    if (props.type === "sma" || props.type === "ema") {
	    var key = props.type + props.options.period + "_chart_" + chartId;
	    return (d) => d[key];
	    }
	    return false;
	    },*/
		getYAccessorKey: function getYAccessorKey(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + "_chart_" + chartId;
				return key;
			}
			return false;
		},
		calculateOverlay: function calculateOverlay(data, overlay) {
			// console.log(overlay);
			if (overlay.type === "sma") {
				data = _MovingAverageCalculator2["default"].calculateSMA(data, overlay.options.period, overlay.key, overlay.options.pluck || "close");
			} else if (overlay.type === "ema") {
				data = _MovingAverageCalculator2["default"].calculateEMA(data, overlay.options.period, overlay.key, overlay.options.pluck || "close");
			}
			return data;
		},
		firstDefined: function firstDefined(data, accessor) {
			var each;
			for (var i = 0; i < data.length; i++) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		},
		lastDefined: function lastDefined(data, accessor) {
			var each;
			for (var i = data.length - 1; i >= 0; i--) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		}
	};
	
	module.exports = OverlayUtils;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _scalePolylineartimescale = __webpack_require__(129);
	
	var _scalePolylineartimescale2 = _interopRequireDefault(_scalePolylineartimescale);
	
	var defaultOptions = {
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, i) {
			d.idx = i;
		}
	};
	
	function buildWeeklyData(daily, indexMutator, dateAccesor, dateMutator) {
		var weekly = [],
		    prevWeek,
		    eachWeek = {};
	
		for (var i = 0; i < daily.length; i++) {
	
			var d = daily[i];
	
			if (dateAccesor(eachWeek)) indexMutator(eachWeek, i);
	
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
	
			for (var key in d) {
				if (!eachWeek.hasOwnProperty(key)) {
					eachWeek[key] = d[key];
				}
			}
	
			if (d.startOfWeek) {
				if (prevWeek) {
					eachWeek.trueRange = Math.max(eachWeek.high - eachWeek.low, eachWeek.high - prevWeek.close, eachWeek.low - prevWeek.close);
				}
				prevWeek = eachWeek;
				weekly.push(eachWeek);
				eachWeek = {};
			}
		}
		return weekly;
	}
	
	function buildMonthlyData(daily, indexMutator, dateAccesor) {
		var monthly = [],
		    prevMonth,
		    eachMonth = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (!eachMonth.date) indexMutator(eachMonth, i);
	
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
	
			for (var key in d) {
				if (!eachMonth.hasOwnProperty(key)) {
					eachMonth[key] = d[key];
				}
			}
	
			if (d.startOfMonth) {
				eachMonth.startOfWeek = d.startOfWeek;
				if (prevMonth) {
					eachMonth.trueRange = Math.max(eachMonth.high - eachMonth.low, eachMonth.high - prevMonth.close, eachMonth.low - prevMonth.close);
				}
				prevMonth = eachMonth;
				monthly.push(eachMonth);
				eachMonth = {};
			}
		}
		return monthly;
	}
	
	function StockScaleTransformer(data, interval, options) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function (key) {
			return newOptions[key] = defaultOptions[key];
		});
	
		if (options) Object.keys(options).forEach(function (key) {
			return newOptions[key] = options[key];
		});
	
		var dateAccessor = newOptions.dateAccessor;
		var dateMutator = newOptions.dateMutator;
		var indexMutator = newOptions.indexMutator;
	
		var prevDate;
		var responseData = {};
		var dd = data[interval];
		responseData.D = dd.map(function (each, i) {
			var row = {};
			Object.keys(each).forEach(function (key) {
				row[key] = each[key];
			});
			indexMutator(row, i);
	
			row.startOfWeek = false;
			row.startOfMonth = false;
			row.startOfQuarter = false;
			row.startOfYear = false;
			var date = dateAccessor(row);
	
			if (prevDate !== undefined) {
				// According to ISO calendar
				// Sunday = 0, Monday = 1, ... Saturday = 6
				// day of week of today < day of week of yesterday then today is start of week
				row.startOfWeek = date.getDay() < prevDate.getDay();
				// month of today != month of yesterday then today is start of month
				row.startOfMonth = date.getMonth() !== prevDate.getMonth();
				// if start of month and month % 3 === 0 then it is start of quarter
				row.startOfQuarter = row.startOfMonth && date.getMonth() % 3 === 0;
				// year of today != year of yesterday then today is start of year
				row.startOfYear = date.getYear() !== prevDate.getYear();
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
				xScale: (0, _scalePolylineartimescale2["default"])(newOptions.indexAccessor),
				xAccessor: newOptions.indexAccessor,
				stockScale: true
			},
			options: newOptions
		};
	}
	
	module.exports = StockScaleTransformer;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function buildHA(data, indexAccessor, indexMutator, dateAccessor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccessor(d));
	
			if (!prevEach) {
				each.open = d.open;
				each.high = d.high;
				each.low = d.low;
			} else {
				each.open = (prevEach.open + prevEach.close) / 2;
				each.high = Math.max(each.open, d.high, each.close);
				each.low = Math.min(each.open, d.low, each.close);
				each.trueRange = Math.max(d.high - d.low, d.high - prevEach.close, d.low - prevEach.close);
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
	}
	
	function HeikinAshiTransformer(data, interval, options, other) {
		var dateAccessor = options.dateAccessor;
		var dateMutator = options.dateMutator;
		var indexAccessor = options.indexAccessor;
		var indexMutator = options.indexMutator;
	
		// console.log(data, options);
	
		var haData = {};
		Object.keys(data).forEach(function (key) {
			return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccessor, dateMutator);
		});
	
		return {
			data: haData,
			other: other,
			options: options
		};
	}
	
	module.exports = HeikinAshiTransformer;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _ATRCalculator = __webpack_require__(127);
	
	var _ATRCalculator2 = _interopRequireDefault(_ATRCalculator);
	
	// var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function usePrice(d) {
		return d.close;
	};
	
	function KagiTransformer(data, interval, options, other) {
		if (options === undefined) options = {};
	
		var period = options.period || 14;
	
		(0, _ATRCalculator2["default"])(data.D, period);
		var reversalThreshold = function reversalThreshold(d) {
			return d["atr" + period];
		};
	
		var dateAccessor = options.dateAccessor;
		var dateMutator = options.dateMutator;
		var indexMutator = options.indexMutator;
	
		var kagiData = [];
	
		var index = 0,
		    prevPeak,
		    prevTrough,
		    direction;
		var line = {};
	
		data.D.forEach(function (d) {
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
	
			var priceMovement = usePrice(d) - line.close;
	
			if (line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */ || line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */) {
				line.close = usePrice(d);
				if (prevTrough && line.close < prevTrough) {
					// going below the prevTrough, so change from yang to yin
					// A yin line forms when a Kagi line breaks below the prior trough.
					line.changePoint = prevTrough;
					if (line.startAs !== "yin") {
						line.changeTo = "yin";
						// line.startAs = "yang";
					}
				}
				if (prevPeak && line.close > prevPeak) {
					// going above the prevPeak, so change from yin to yang
					// A yang line forms when a Kagi line breaks above the prior peak
					line.changePoint = prevPeak;
					if (line.startAs !== "yang") {
						line.changeTo = "yang";
						// line.startAs = "yin";
					}
				}
			} else if (line.close > line.open /* going up */
			 && priceMovement < 0 /* and moving in other direction */
			 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */ || line.close < line.open /* going down */
			 && priceMovement > 0 /* and moving in other direction */
			 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */) {
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
						nextChangeTo = "yang";
					}
				} else {
					if (prevTrough === undefined) prevTrough = line.open;
					prevPeak = line.close;
					if (usePrice(d) < prevTrough) {
						nextChangePoint = prevTrough;
						nextChangeTo = "yin";
					}
				}
				if (line.startAs === undefined) {
					line.startAs = direction > 0 ? "yang" : "yin";
				}
	
				var startAs = line.changeTo || line.startAs;
				kagiData.push(line);
				direction = -1 * direction; // direction is reversed
	
				line = {
					open: nextLineOpen,
					close: usePrice(d),
					startAs: startAs,
					changePoint: nextChangePoint,
					changeTo: nextChangeTo
				};
			}
		});
	
		return {
			data: { "D": kagiData },
			other: other,
			options: options
		};
	}
	
	module.exports = KagiTransformer;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// var pricingMethod = (d) => ({ high: d.high, low: d.low });
	var usePrice = function usePrice(d) {
		return { high: d.high, low: d.low };
	};
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3
	};
	
	function createBox(d, dateAccessor, dateMutator) {
		var box = {
			open: d.open,
			fromDate: dateAccessor(d),
			toDate: dateAccessor(d),
			startOfYear: d.startOfYear,
			startOfQuarter: d.startOfQuarter,
			startOfMonth: d.startOfMonth,
			startOfWeek: d.startOfWeek
		};
		dateMutator(box, dateAccessor(d));
		return box;
	}
	
	function updateColumns(columnData, dateAccessor, dateMutator) {
	
		columnData.forEach(function (d) {
			// var lastBox = d.boxes[d.boxes.length - 1];
	
			d.startOfYear = false;
			d.startOfQuarter = false;
			d.startOfMonth = false;
			d.startOfWeek = false;
	
			d.boxes.forEach(function (eachBox) {
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
	}
	
	function PointAndFigureTransformer(rawData, interval, options, other) {
	
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function (key) {
			return newOptions[key] = defaultOptions[key];
		});
	
		if (options) Object.keys(options).forEach(function (key) {
			return newOptions[key] = options[key];
		});
	
		var dateAccessor = newOptions.dateAccessor;
		var dateMutator = newOptions.dateMutator;
		var indexAccessor = newOptions.indexAccessor;
		var indexMutator = newOptions.indexMutator;
		var reversal = newOptions.reversal;
		var boxSize = newOptions.boxSize;
	
		var columnData = [];
	
		var column = {
			boxes: [],
			open: rawData.D[0].open
		},
		    box = createBox(rawData.D[0], dateAccessor, dateMutator);
	
		indexMutator(column, 0);
		columnData.push(column);
	
		rawData.D.forEach(function (d) {
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
				var upwardMovement = Math.max(usePrice(d).high - column.open, 0); // upward movement
				var downwardMovement = Math.abs(Math.min(column.open - usePrice(d).low, 0)); // downward movement
				column.direction = upwardMovement > downwardMovement ? 1 : -1;
				if (boxSize * reversal < upwardMovement || boxSize * reversal < downwardMovement) {
					// enough movement to trigger a reversal
					box.toDate = dateAccessor(d);
					box.open = column.open;
					var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var _prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, dateAccessor, dateMutator);
						// box = cloneMe(box);
						box.open = _prevBoxClose;
					}
					box.fromDate = dateAccessor(d);
					box.date = dateAccessor(d);
				}
			} else {
				// one or more boxes already formed in the current column
				var upwardMovement = Math.max(usePrice(d).high - box.open, 0); // upward movement
				var downwardMovement = Math.abs(Math.min(usePrice(d).low - box.open, 0)); // downward movement
	
				if (column.direction > 0 && upwardMovement > boxSize || column.direction < 0 && downwardMovement > boxSize /* falling column AND box can be formed */) {
					// form another box
					box.close = box.open + column.direction * boxSize;
					box.toDate = dateAccessor(d);
					var _prevBoxClose2 = box.close;
					column.boxes.push(box);
					box = createBox(d, dateAccessor, dateMutator);
					box.open = _prevBoxClose2;
					box.fromDate = dateAccessor(d);
					dateMutator(box, dateAccessor(d));
				} else if (column.direction > 0 && downwardMovement > boxSize * reversal || column.direction < 0 && upwardMovement > boxSize * reversal /* falling column and there is downward movement to trigger a reversal */) {
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
	
						direction: -1 * column.direction
					};
					indexMutator(column, idx);
					var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
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
			data: { "D": columnData },
			other: other,
			options: newOptions
		};
	}
	
	module.exports = PointAndFigureTransformer;
	/* rising column AND box can be formed */
	/* rising column and there is downward movement to trigger a reversal */

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	// var pricingMethod = function (d) { return { high: d.close, low: d.close }; };
	// var usePrice = function (d) { return d.close; };
	
	var _ATRCalculator = __webpack_require__(127);
	
	var _ATRCalculator2 = _interopRequireDefault(_ATRCalculator);
	
	var pricingMethod = function pricingMethod(d) {
		return { high: d.high, low: d.low };
	};
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
		period: 14
	};
	
	function RenkoTransformer(rawData, interval, options, other) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function (key) {
			return newOptions[key] = defaultOptions[key];
		});
	
		if (options) Object.keys(options).forEach(function (key) {
			return newOptions[key] = options[key];
		});
	
		var dateAccessor = newOptions.dateAccessor;
		var dateMutator = newOptions.dateMutator;
		var indexAccessor = newOptions.indexAccessor;
		var indexMutator = newOptions.indexMutator;
		var period = newOptions.period;
	
		(0, _ATRCalculator2["default"])(rawData.D, period);
		var brickSize = function brickSize(d) {
			return d["atr" + period];
		};
	
		var renkoData = [];
	
		var index = 0,
		    prevBrickClose = rawData.D[index].open,
		    prevBrickOpen = rawData.D[index].open;
		var brick = {},
		    direction = 0;
	
		rawData.D.forEach(function (d) {
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
	
				brick.from = indexAccessor(d);
				brick.fromDate = dateAccessor(d);
				indexMutator(brick, index++);
				dateMutator(brick, dateAccessor(d));
			}
			brick.volume = (brick.volume || 0) + d.volume;
	
			var prevCloseToHigh = prevBrickClose - pricingMethod(d).high,
			    prevCloseToLow = prevBrickClose - pricingMethod(d).low,
			    prevOpenToHigh = prevBrickOpen - pricingMethod(d).high,
			    prevOpenToLow = prevBrickOpen - pricingMethod(d).low,
			    priceMovement = Math.min(Math.abs(prevCloseToHigh), Math.abs(prevCloseToLow), Math.abs(prevOpenToHigh), Math.abs(prevOpenToLow));
	
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
	
			// d.brick = JSON.stringify(brick);
			if (brickSize(d)) {
				var noOfBricks = Math.floor(priceMovement / brickSize(d));
	
				brick.open = Math.abs(prevCloseToHigh) < Math.abs(prevOpenToHigh) || Math.abs(prevCloseToLow) < Math.abs(prevOpenToLow) ? prevBrickClose : prevBrickOpen;
	
				if (noOfBricks >= 1) {
					for (var j = 0; j < noOfBricks; j++) {
						brick.close = brick.open < pricingMethod(d).high ? brick.open + brickSize(d) : brick.open - brickSize(d);
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
							high: brick.high,
							low: brick.low,
							open: brick.close,
							startOfYear: false,
							startOfMonth: false,
							startOfQuarter: false,
							startOfWeek: false
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
			data: { "D": renkoData },
			other: other,
			options: newOptions
		};
	}
	
	module.exports = RenkoTransformer;
	
	// if brick open is less than current price it means it is green/hollow brick

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function sumOf(array, offset, length) {
		var sum = 0;
		for (var i = offset; i < offset + length; i++) {
			sum += array[i].trueRange;
		}
		return sum;
	}
	
	function calculateTR(rawData) {
		var prev = rawData[0];
		rawData.filter(function (d, idx) {
			return idx > 0;
		}).forEach(function (d, idx) {
			d.trueRange = Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
			prev = rawData[idx];
		});
	}
	
	function calculateATR(rawData, period) {
		calculateTR(rawData);
	
		rawData.forEach(function (d, index) {
			if (index > period) {
				// trueRange starts from index 1 so ATR starts from period (not period -1)
				var num = sumOf(rawData, index - period, period) / period;
				d["atr" + period] = Math.round(num * 100) / 100;
			}
		});
	}
	
	module.exports = calculateATR;

/***/ },
/* 128 */
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _d3 = __webpack_require__(3);
	
	var _d32 = _interopRequireDefault(_d3);
	
	function financeTimeScale(drawableData, indexAccessor, backingLinearScale) {
	
		var timeScaleSteps = [{ step: 864e5, f: function f(d) {
				return d.date !== undefined && true;
			} }, // 1-day
		{ step: 1728e5, f: function f(d, i) {
				return d.date !== undefined && i % 2 === 0;
			} }, // 2-day
		{ step: 8380e5, f: function f(d, i, arr) {
				if (d.startOfMonth) return true;
				var list = [];
				if (i - 2 >= 0) list.push(arr[i - 2]);
				if (i - 1 >= 0) list.push(arr[i - 1]);
				list.push(arr[i]);
				if (i + 1 <= arr.length - 1) list.push(arr[i + 1]);
				if (i + 2 <= arr.length - 1) list.push(arr[i + 2]);
				var sm = list.map(function (each) {
					return each.startOfMonth;
				}).reduce(function (prev, curr) {
					return prev || curr;
				});
				return sm ? false : d.startOfWeek;
			} }, // 1-week
		{ step: 3525e6, f: function f(d) {
				return d.startOfMonth;
			} }, // 1-month
		{ step: 7776e6, f: function f(d) {
				return d.startOfQuarter;
			} }, // 3-month
		{ step: 31536e6, f: function f(d) {
				return d.startOfYear;
			} }, // 1-year
		{ step: 91536e15, f: function f(d) {
				return d.date !== undefined && (d.startOfYear && d.date.getFullYear() % 2 === 0);
			} } // 2-year
		];
		var timeScaleStepsBisector = _d32["default"].bisector(function (d) {
			return d.step;
		}).left;
		var bisectByIndex = _d32["default"].bisector(function (d) {
			return indexAccessor(d);
		}).left;
		var tickFormat = [[_d32["default"].time.format("%Y"), function (d) {
			return d.startOfYear;
		}], [_d32["default"].time.format("%b %Y"), function (d) {
			return d.startOfQuarter;
		}], [_d32["default"].time.format("%b"), function (d) {
			return d.startOfMonth;
		}], [_d32["default"].time.format("%d %b"), function (d) {
			return d.startOfWeek;
		}], [_d32["default"].time.format("%a %d "), function (d) {
			return true;
		}]];
		function formater(d) {
			var i = 0,
			    format = tickFormat[i];
			while (!format[1](d)) format = tickFormat[++i];
			var tickDisplay = format[0](d.date);
			// console.log(tickDisplay);
			return tickDisplay;
		}
	
		function scale(x) {
			return backingLinearScale(x);
		}
		scale.isPolyLinear = function () {
			return true;
		};
		scale.invert = function (x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function (x) {
			if (!arguments.length) {
				return drawableData;
			} else {
				drawableData = x;
				// this.domain([drawableData.first().index, drawableData.last().index]);
				this.domain([indexAccessor(drawableData[0]), indexAccessor(drawableData[drawableData.length - 1])]);
				return scale;
			}
		};
		scale.domain = function (x) {
			if (!arguments.length) return backingLinearScale.domain();
			// console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
	
			var d = [x[0], x[1]];
			// console.log(d);
			backingLinearScale.domain(d);
			return scale;
		};
		scale.range = function (x) {
			if (!arguments.length) return backingLinearScale.range();
			backingLinearScale.range(x);
			return scale;
		};
		scale.rangeRound = function (x) {
			return backingLinearScale.range(x);
		};
		scale.clamp = function (x) {
			if (!arguments.length) return backingLinearScale.clamp();
			backingLinearScale.clamp(x);
			return scale;
		};
		scale.interpolate = function (x) {
			if (!arguments.length) return backingLinearScale.interpolate();
			backingLinearScale.interpolate(x);
			return scale;
		};
		scale.ticks = function (m) {
			var start,
			    end,
			    count = 0;
			drawableData.forEach(function (d) {
				if (d.date !== undefined) {
					if (start === undefined) start = d;
					end = d;
					count++;
				}
			});
			m = count / drawableData.length * m;
			var span = end.date.getTime() - start.date.getTime();
			var target = span / m;
			/*
	  console.log(drawableData[drawableData.length - 1].date
	  	, drawableData[0].date
	  	, span
	  	, m
	  	, target
	  	, timeScaleStepsBisector(d3_time_scaleSteps, target)
	  	);
	  */
			var ticks = drawableData.filter(timeScaleSteps[timeScaleStepsBisector(timeScaleSteps, target)].f).map(function (d) {
				return indexAccessor(d);
			});
			// return the index of all the ticks to be displayed,
			// console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function (ticks) {
			return function (d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = bisectByIndex(drawableData, d);
				return formater(drawableData[tickIndex]);
			};
		};
		scale.nice = function (m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function () {
			return financeTimeScale(drawableData, indexAccessor, backingLinearScale.copy());
		};
		return scale;
	}
	
	var defaultFinanceDateTimeScale = function defaultFinanceDateTimeScale(indexAccessor) {
		return financeTimeScale([0, 1], indexAccessor, _d32["default"].scale.linear());
	};
	
	module.exports = defaultFinanceDateTimeScale;

/***/ }
])
});
;
//# sourceMappingURL=react-stockcharts-documentation.js.map