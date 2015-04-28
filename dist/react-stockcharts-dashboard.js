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
return webpackJsonpReStock([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**/
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	var parseDate = d3.time.format("%Y-%m-%d").parse
	
	__webpack_require__(34);
	__webpack_require__(32);
	
	var Nav = __webpack_require__(23);
	var Sidebar = __webpack_require__(24);
	var MainContainer = __webpack_require__(25);
	var MenuGroup = __webpack_require__(26);
	var MenuItem = __webpack_require__(27);
	var ContentSection = __webpack_require__(28);
	var Row = __webpack_require__(29);
	var Section = __webpack_require__(30);
	var ScrollMixin = __webpack_require__(31);
	
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
	
		var AreaChart = __webpack_require__(16).init(data);
		var AreaChartWithYPercent = __webpack_require__(4).init(data);
		var AreaChartWithCrossHairMousePointer = __webpack_require__(5).init(data);
		var AreaChartWithVerticalMousePointer = __webpack_require__(6).init(data);
		var AreaChartWithToolTip = __webpack_require__(7).init(data);
		var AreaChartWithMA = __webpack_require__(8).init(data);
		var AreaChartWithEdgeCoordinates = __webpack_require__(9).init(data);
		var LineChart = __webpack_require__(10).init(data);
		var CandleStickChart = __webpack_require__(11).init(data);
		var CandleStickStockScaleChart = __webpack_require__(12).init(data);
		var SyncMouseMove = __webpack_require__(13).init(data);
		var AreaChartWithZoom = __webpack_require__(14).init(data);
		var AreaChartWithZoomPan = __webpack_require__(3).init(data);
		var CandleStickStockScaleChart = __webpack_require__(12).init(data);
		var CandleStickStockScaleChartWithVolumeHistogramV1 = __webpack_require__(15).init(data);
		var CandleStickStockScaleChartWithVolumeHistogramV2 = __webpack_require__(17).init(data);
		var CandleStickChartWithCHMousePointer = __webpack_require__(18).init(data);
		var CandleStickChartWithZoomPan = __webpack_require__(19).init(data);
		var CandleStickChartWithMA = __webpack_require__(20).init(data);
		var CandleStickChartWithEdge = __webpack_require__(21).init(data);
		var CandleStickChartWithLotsOfData = __webpack_require__(21).init(dataFull);
		var HeikinAshiChart = __webpack_require__(22).init(data);
		var ExamplesPage = React.createClass({displayName: "ExamplesPage",
			//mixins: [ScrollMixin],
			render:function() {
				return (
					React.createElement("body", null, 
						React.createElement(Nav, null), 
						React.createElement(MainContainer, null, 
							React.createElement(Sidebar, null, 
								React.createElement(MenuGroup, null, 
									React.createElement(MenuItem, {label: "Overview", active: true}), 
									React.createElement(MenuItem, {label: "AreaChart"}), 
									React.createElement(MenuItem, {label: "CandlestickChart"}), 
									React.createElement(MenuItem, {label: "stocktime scale"}), 
									React.createElement(MenuItem, {label: "Volume histogram"}), 
									React.createElement(MenuItem, {label: "Mouse pointer"}), 
									React.createElement(MenuItem, {label: "Zoom and Pan"}), 
									React.createElement(MenuItem, {label: "Overlay"}), 
									React.createElement(MenuItem, {label: "Edge coordinate"}), 
									React.createElement(MenuItem, {label: "Lots of data"}), 
									React.createElement(MenuItem, {label: "Heikin Ashi"}), 
									React.createElement(MenuItem, {label: "Coming soon..."})
								)
							), 
							React.createElement(ContentSection, {title: "Getting Started"}, 
								React.createElement(Row, {title: "Overview"}, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(41)}})
									)
								), 
								React.createElement(Row, {title: "AreaChart"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(AreaChart, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(37)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(AreaChartWithYPercent, null)
									)
								), 
								React.createElement(Row, {title: "CandlestickChart"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChart, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(38)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickStockScaleChart, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(39)}})
									)
								), 
								React.createElement(Row, {title: "stocktime scale"}, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(40)}})
									)
								), 
								React.createElement(Row, {title: "Volume histogram"}, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(42)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickStockScaleChartWithVolumeHistogramV1, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(43)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickStockScaleChartWithVolumeHistogramV2, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(44)}})
									)
								), 
								React.createElement(Row, {title: "Mouse pointer"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChartWithCHMousePointer, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(45)}})
									)
								), 
								React.createElement(Row, {title: "Zoom and Pan"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChartWithZoomPan, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(46)}})
									)
								), 
								React.createElement(Row, {title: "Overlay"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChartWithMA, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(47)}})
									)
								), 
								React.createElement(Row, {title: "Edge coordinate"}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChartWithEdge, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(48)}})
									)
								), 
								React.createElement(Row, {title: "Lots of data"}, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(49)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(CandleStickChartWithLotsOfData, null)
									)
								), 
								React.createElement(Row, null, 
									React.createElement("h2", null, "Advanced chart types")
								), 
								React.createElement(Row, {title: "Heikin Ashi"}, 
									React.createElement(Section, {colSpan: 2}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(50)}})
									)
								), 
								React.createElement(Row, null, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement(HeikinAshiChart, null)
									)
								), 
								React.createElement(Row, {title: "Coming soon..."}, 
									React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
										React.createElement("aside", {dangerouslySetInnerHTML: {__html: __webpack_require__(51)}})
									)
								)
							)
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
			//renderPartialPage(MSFT, MSFTFull);
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
		var HeikinAshiChart = __webpack_require__(22).init(data);
		var ExamplesPage = React.createClass({displayName: "ExamplesPage",
			//mixins: [ScrollMixin],
			render:function() {
				return (
					React.createElement("body", null, 
						React.createElement("div", {className: "container"}, 
						React.createElement(Row, {title: "Heikin Ashi"}, 
							React.createElement(Section, {colSpan: 2, className: "react-stockchart"}, 
								React.createElement(HeikinAshiChart, null)
							)
						)
						)
					)
				)
			}
		});
		React.render(React.createElement(ExamplesPage, null), document.body);
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithYPercent = React.createClass({displayName: "AreaChartWithYPercent",/**/
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
					console.log(this.state.width);
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return AreaChartWithYPercent;
		}
	}
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
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
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithCrossHairMousePointer = React.createClass({displayName: "AreaChartWithCrossHairMousePointer",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {data: data, width: this.state.width, height: this.state.height, margin: {left: 5, right: 90, top:10, bottom: 30}}, 
							React.createElement(Chart, {id: 3}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null)
								)
							), 
							React.createElement(MouseCoordinates, {forChart: 3, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, mainChart: 3})
						)
					);
				}
			});
	
			return AreaChartWithCrossHairMousePointer;
		}
	}
	
	/*
		changeWidth() {
			this.setState({
				width: this.state.width + 10
			});
		},
			<rect width={100} height={100} onClick={this.changeWidth}/>
	*/


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, VerticalMousePointer = ReStock.VerticalMousePointer
		, CurrentCoordinate = ReStock.CurrentCoordinate
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithVerticalMousePointer = React.createClass({displayName: "AreaChartWithVerticalMousePointer",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
					return (
						React.createElement(ChartCanvas, {data: data, width: this.state.width, height: this.state.height, margin: {left: 50, right: 100, top:10, bottom: 30}}, 
							React.createElement(Chart, {id: 0}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right", percentScale: true, tickFormat: d3.format(".0%")}), 
								React.createElement(YAxis, {axisAt: "left", orient: "left"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null)
								)
							), 
							React.createElement(CurrentCoordinate, {forChart: 0}), 
							React.createElement(MouseCoordinates, {forChart: 0, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(VerticalMousePointer, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, mainChart: 0})
						)
					);
				}
			});
			return AreaChartWithVerticalMousePointer;
		}
	}
	
	/*
									
	
	*/

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
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
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithToolTip = React.createClass({displayName: "AreaChartWithToolTip",
				getInitialState:function() {
					return {
						width: 500,
						height: 400
					};
				},
				render:function() {
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {data: data, width: this.state.width, height: this.state.height, margin: {left: 5, right: 90, top:10, bottom: 30}}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null)
								)
							), 
							React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, mainChart: 1}), 
							React.createElement(TooltipContainer, null, 
								React.createElement(OHLCTooltip, {forChart: 1})
							)
						)
					);
				}
			});
	
			return AreaChartWithToolTip;
		}
	}
	
	/*
		changeWidth() {
			this.setState({
				width: this.state.width + 10
			});
		},							<OHLCTooltip xDisplayFormat={dateFormat} accessor={(d) => {return {open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume}}}/>
	
			<rect width={100} height={100} onClick={this.changeWidth}/>
	*/


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
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
		, CurrentCoordinate = ReStock.CurrentCoordinate
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithMA = React.createClass({displayName: "AreaChartWithMA",
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
						React.createElement(ChartCanvas, {data: data, width: this.state.width, height: this.state.height, margin: {left: 5, right: 90, top:10, bottom: 30}}, 
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
	
			return AreaChartWithMA;
		}
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, LineSeries = ReStock.LineSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries;
	;
	
	module.exports = {
		init:function(data) {
			var LineChart = React.createClass({displayName: "LineChart",
				render:function() {
					return (
						React.createElement(ChartCanvas, {data: data, width: 500, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right", percentScale: true, tickFormat: d3.format(".0%")}), 
								React.createElement(YAxis, {axisAt: "left", orient: "left"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(LineSeries, null)
								)
							)
						)
					);
				}
			});
			return LineChart
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	
	module.exports = {
		init:function(data) {
			var AreaChartWithEdgeCoordinates = __webpack_require__(9).init(data);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
		, HistogramSeries = ReStock.HistogramSeries
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}
	
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
	;
	
	module.exports = {
		init:function(data) {
			var AreaChart = React.createClass({displayName: "AreaChart",/**/
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return AreaChart;
		}
	}
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
		, HistogramSeries = ReStock.HistogramSeries
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 50, right: 50, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}
	
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
		, HistogramSeries = ReStock.HistogramSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
	
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 40, right: 70, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}
	
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
		, HistogramSeries = ReStock.HistogramSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
	
	;
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 40, right: 70, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}
	
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
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
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 40, right: 70, top:10, bottom: 30}, data: data}, 
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
			return CandleStickChart
		}
	}
	
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
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
	
	module.exports = {
		init:function(data) {
			var CandleStickChart = React.createClass({displayName: "CandleStickChart",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 90, right: 70, top:10, bottom: 30}, data: data, interval: "1D"}, 
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
					);
				}
			});
			return CandleStickChart
		}
	}
	
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, CandlestickSeries = ReStock.CandlestickSeries
		, DataTransform = ReStock.DataTransform
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
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
	
	module.exports = {
		init:function(data) {
			var HaikinAshi = React.createClass({displayName: "HaikinAshi",
				mixins: [InitialStateMixin, ChartWidthMixin],
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-12-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {width: this.state.width, height: 400, margin: {left: 90, right: 70, top:10, bottom: 30}, data: data, interval: "1D"}, 
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
			return HaikinAshi
		}
	}
	
	
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Row = __webpack_require__(29);
	
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var MenuItem = React.createClass({displayName: "MenuItem",
		propTypes: {
			active: React.PropTypes.bool,
			anchor: React.PropTypes.string,
			label: React.PropTypes.string.isRequired
		},
		getDefaultProps:function() {
			return {
				active: false,
			};
		},
		render:function() {
			var className = (this.props.active) ? 'active' : '';
			var anchor = this.props.anchor || this.props.label;
			return (
				React.createElement("li", {className: className}, 
					React.createElement("a", {href: '#' + anchor}, this.props.label, 
						(this.props.active) ? React.createElement("span", {className: "sr-only"}, "(current)") : ''
					)
				)
			);
		}
	});
	
	module.exports = MenuItem;

/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var contentTop = [];
	
	var ScrollMixin = {
		handleWindowResize:function() {
			contentTop.splice(0);
			// Set up content an array of locations
			$('.nav-sidebar').find('a').each(function(){
				contentTop.push( $( $(this).attr('href') ).offset().top );
			})
		},
		componentWillUnMount:function() {
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount:function() {
			window.addEventListener("resize", this.handleWindowResize);
	
			var topRange      = 200,  // measure from the top of the viewport to X pixels down
				edgeMargin    = 20,   // margin above the top or margin from the end of the page
				animationTime = 500; // time in milliseconds
				
			// Stop animated scroll if the user does something
			$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e) {
				if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ) {
					$('html,body').stop();
				}
			});
			//$('div#ContentSection').scrollTop(-50)
			// console.log($('html,body').scrollTop());
			// Set up content an array of locations
			$('.nav-sidebar').find('a').each(function(){
				contentTop.push( $( $(this).attr('href') ).offset().top );
			})
			// Animate menu scroll to content
			$('.nav-sidebar').find('a').click(function() {
				var sel = this,
					index = $('.nav-sidebar a').index( $(this) ),
					offset = index === contentTop.length - 1 ? 0 : -50,
					newTop = Math.min( contentTop[index], $(document).height() - $(window).height() ) + offset; // get content top or top position if at the document bottom
				// console.log(newTop)
				$('html,body')
					//.stop()
					.animate({
							'scrollTop' : newTop
						},
						animationTime/*,
						function() {
							window.location.hash = $(sel).attr('href');
						}*/);
				return false;
			});
	
			$(window).scroll(function(e) {
				// console.log(e)
				var winTop = $(window).scrollTop(),
					bodyHt = $(document).height(),
					vpHt = $(window).height() + edgeMargin;  // viewport height + margin
	
				$.each( contentTop, function(i, loc){
					if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ) {
						$('ul.nav-sidebar li')
							.removeClass('active')
							.eq(i).addClass('active');
					}
				})
			});
			$(window).on('hashchange', function() {
				var top = $('html,body').scrollTop() - 50;
				$('html,body').scrollTop(top);
			});/**/
		}
	};
	
	module.exports = ScrollMixin;

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. <code>data</code> is well the data used to plot.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span>&gt;</span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p>If you are not familiar with <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> in d3 I recommend doing so. Each <code>Chart</code> defines an <code>xScale</code> and <code>yScale</code>. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2014-12-31 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels which can be drawn.</p>\n<p>With SVG it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"Logo Title Text 1\"></p>\n<p>For more details about the SVG coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.html\">here</a></p>\n<p>Back to scales,</p>\n<p>A time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input data, and the range is calculated as <code>height - margin.left - margin.right</code>.</p>\n<p>A Linear scale converts a <code>domain</code> say 4600 - 6200 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear, similarly there is log scale which creates a logrithmic scale, which is not linear.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{6}</span>/&gt;</span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the <a href=\"https://github.com/mbostock/d3/wiki/SVG-Axes#ticks\">d3.axis</a>, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in d3.axis.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> /&gt;</span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close} xAccessor={(d) =&gt; d.date}&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>A <code>DataSeries</code> is a shell component intended to house the x and y Accessor. You will find in other examples below how <code>DataSeries</code> helps create a yAccessor with more than one y  value to plot for a given x, like in candlestick.</p>\n<p>If you are not clear what the arrow functions mean, read more about them <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">here</a>. In short</p>\n<p><code>(d) =&gt; d.close</code> means <code>function (d) { return d.close; }</code></p>\n<p><code>(d) =&gt; d.date</code> means <code>function (d) { return d.date; }</code></p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you dont want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> /&gt;</span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Create custom components and use them, it is explained <a href=\"http://add.link.here\">here</a></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">percentScale</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\".0%\")}</span>/&gt;</span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continious time scale, and a continious time scale has week ends and national holidays, days when trading does not happen. Now we dont want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continious on the x axis. Enter <strong>stocktime scale</strong> (or <strong>financetime scale</strong>).</p>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">var</span> d3 = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'d3'</span>);\n<span class=\"hljs-keyword\">var</span> parseDate = d3.time.format(<span class=\"hljs-string\">\"%Y-%m-%d\"</span>).parse;\n\nd3.tsv(<span class=\"hljs-string\">\"path/to/data.tsv\"</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(err, data)</span> </span>{\n    data.forEach((d, i) =&gt; {\n        d.date = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(parseDate(d.date).getTime());\n        d.open = +d.open;\n        d.high = +d.high;\n        d.low = +d.low;\n        d.close = +d.close;\n    });\n...\n</code></pre>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{...}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n</code></pre>\n<p>It is the same as for <code>AreaChart</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n</code></pre>\n<p>Converting the data provided as input which when taken as a linear scale includes weekend time breaks, into a linear scale over the input domain. More usecases of <code>DataTransform</code> are listed below.</p>\n<p><strong>Coming Soon</strong> Create your own transforms and register them for use</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example above</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>You will notice that the <code>DataSeries</code> component does not include the <code>xAccessor</code>, that is because it is defined inside the stockscale <code>DataTransform</code> which provides the <code>xAccessor</code> behind the scenes</p>\n<p><code>yAccessor={CandlestickSeries.yAccessor}</code> is just a convenience <code>yAccessor</code> available, it can also be represented as</p>\n<pre><code class=\"language-js\">yAccessor={(d) =&gt; ({open: d.open, high: d.high, low: d.low, close: d.close})}\n</code></pre>\n<p>or if arrow functions is not your thing, use</p>\n<pre><code class=\"language-js\">yAccessor={<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(d)</span> </span>{ <span class=\"hljs-keyword\">return</span> {open: d.open, high: d.high, low: d.low, close: d.close}; }}\n</code></pre>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n<p><strong>Coming Soon</strong> updated financetime scale for intra day</p>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts project provides a flexible library to create charts that represent time series data. It is easy to learn and can be customized by</p>\n<ul>\n<li>adding custom chart components</li>\n<li>access the <code>svg</code> elements</li>\n<li>styling with CSS</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems.</p>\n<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just charts, but ones which are interactive too -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer. I have chosen to use SVG for React Stockcharts because,</p>\n<ul>\n<li>you will see very soon the performance is not an issue really, thanks to React JS and the virtual dom</li>\n<li>the flexibility of development and the convinenience of debuging a DOM is hard to beat</li>\n<li>styling with css is something I cannot give up</li>\n</ul>\n<p>That said, I do wish to some day create a fork of this on Canvas.</p>\n<h4>DOM Manipulation</h4>\n<p>The only place where DOM Manipulation is used is in the <code>XAxis</code> and <code>YAxis</code> components, I will soon migrate to use the native <code>svg</code> axes provided by <a href=\"https://github.com/esbullington/react-d3\">react-d3</a>, at which time the entire project will be built with native svg components making server side rendering possible.</p>\n<p>Now let us get started with a very simple AreaChart</p>\n";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there.</p>\n<p>Each <code>Chart</code> has a pair of <code>xScale</code> and <code>yScale</code> since <code>volume</code> is on a different domain from <code>open</code>/<code>high</code>/<code>low</code>/<code>close</code>, It has to be created as a different <code>Chart</code>.</p>\n<p>To summarize, All <code>Chart</code>s use the same <code>data</code> but each <code>Chart</code> has different <code>xScale</code> and <code>yScale</code>. In this example above the <code>xScale</code> of chart 2 has the same <code>domain</code> and <code>range</code> as the <code>xScale</code> of <code>Chart</code> 1, so we did not draw the <code>XAxis</code> again for the Volume.</p>\n<h5>But… I dont want the Volume chart to span the whole chart height.</h5>\n<p>I got you covered.</p>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">50</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150, which is good.</p>\n<p><code>origin</code> can be either a function which returns a <code>[x, y]</code> to be used as origin or it can be an array with 2 elements representing <code>[x, y]</code>. The default value for <code>origin</code> is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>className</code> of <code>HistogramSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string</li>\n<li>or a string</li>\n</ul>\n<p>which is used as the css class</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n</code></pre>\n<p>a class of ‘up’ is applied if <code>close &gt; open</code> for that day and ‘down’ otherwise</p>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=<span class=\"hljs-value\">{{left:</span> <span class=\"hljs-attribute\">40</span>, <span class=\"hljs-attribute\">right:</span> <span class=\"hljs-attribute\">70</span>, <span class=\"hljs-attribute\">top:10</span>, <span class=\"hljs-attribute\">bottom:</span> <span class=\"hljs-attribute\">30</span>}} <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{d3.time.format(\"%Y-%m-%d\")}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span>/&gt;</span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above. <code>mainChart</code> as the name describes is used to refer to the <code>Chart</code> from which the <code>xScale</code> and <code>yScale</code> are used to determine the nearest value to the mouse position.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{d3.time.format(\"%Y-%m-%d\")}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n</code></pre>\n<p>Displays the crosshair at the mouse position, the attributes of <code>MouseCoordinates</code> are self explanatory. You can swap out with <code>CrossHair</code> with <code>VerticalMousePointer</code> if crosshair is not your thing.</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>Displays the tooltip on the top left, use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>The only change is enabling <code>zoom</code> and <code>pan</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<p>other than enabling <code>zoom</code> and <code>pan</code>, <code>defaultFocus</code> of <code>true</code> means mouse scroll over the chart, triggers zoom action if zoom is enabled. If <code>defaultFocus</code> is <code>false</code>, you have to click on the chart to get focus and then all scroll events are zoom events if <code>zoom</code> is enabled</p>\n<p>You could set the focus programatically by adding a ref to the <code>EventCapture</code></p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">ref</span>=<span class=\"hljs-value\">\"eventCapture\"</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n</code></pre>\n<pre><code class=\"language-js\"><span class=\"hljs-keyword\">this</span>.refs.eventCapture.toggleFocus(); <span class=\"hljs-comment\">// to toggle focus so scroll events over the chart will either simulate zoom or perform the default action</span>\n\n<span class=\"hljs-keyword\">this</span>.refs.eventCapture.setFocus(<span class=\"hljs-literal\">false</span>); <span class=\"hljs-comment\">// set the focus </span>\n</code></pre>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>Overlay</code>s share the scales of a <code>Chart</code> and contribute to the <code>domain</code> of the <code>Chart</code> they belong to.</p>\n<p>In this chart we are introducing</p>\n<ul>\n<li>Moving average on daily <code>close</code> as a <code>LineSeries</code></li>\n<li>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></li>\n<li>Current item indicator as a circle over the different moving averages</li>\n<li>Moving average tooltip</li>\n</ul>\n<p>Let us review each of these in a little more detail</p>\n<h4>Moving average on daily <code>close</code> as a <code>LineSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">20</span>, <span class=\"hljs-attribute\">pluck:</span> '<span class=\"hljs-attribute\">close</span>' }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">30</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">50</span> }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p><code>type</code> indicates it is a simple moving average, <code>options</code> used to specify the moving average <code>period</code>, and <code>pluck</code> to specify attribute against which moving average is to be calculated. If not specified, <code>pluck</code> defaults to <code>close</code></p>\n<h4>Moving average on daily <code>volume</code> as an <code>AreaSeries</code></h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=<span class=\"hljs-value\">{{</span> <span class=\"hljs-attribute\">period:</span> <span class=\"hljs-attribute\">10</span>, <span class=\"hljs-attribute\">pluck:</span>'<span class=\"hljs-attribute\">volume</span>' }} &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n</code></pre>\n<p>Similar to above</p>\n<h4>Current item indicator as a circle over the different moving averages</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span>/&gt;</span>\n</code></pre>\n<p>That was easy, right?</p>\n<p><code>forOverlay</code> is an optional attribute, and absense of that will default the <code>CurrentCoordinate</code> to display a circle on the main series. This only makes sense if the main series plots a single value on y. For <code>CandlestickSeries</code> as it plots 4 attributes, <code>CurrentCoordinate</code> is not valid for <code>CandlestickSeries</code></p>\n<h4>Moving average tooltip</h4>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MovingAverageTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">onClick</span>=<span class=\"hljs-value\">{(e)</span> =&gt;</span> console.log(e)} origin={[-38, 15]}/&gt;\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n</code></pre>\n<p>Open the dev console and see what is logged on click of the moving average tooltip</p>\n<p>adding it all together</p>\n<pre><code class=\"language-jsx\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ChartCanvas</span> <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">{this.state.width}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{400}</span> <span class=\"hljs-attribute\">margin</span>=</span></span><span class=\"hljs-expression\">{{<span class=\"hljs-variable\">left</span>: 40, <span class=\"hljs-variable\">right</span>: 70, <span class=\"hljs-variable\">top</span>:10, <span class=\"hljs-variable\">bottom</span>: 30}}</span><span class=\"xml\"><span class=\"hljs-tag\"> <span class=\"hljs-attribute\">data</span>=<span class=\"hljs-value\">{data}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataTransform</span> <span class=\"hljs-attribute\">transformType</span>=<span class=\"hljs-value\">\"stockscale\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">XAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"bottom\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"bottom\"</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> /&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{CandlestickSeries.yAccessor}</span> &gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CandlestickSeries</span> /&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{0}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 20, <span class=\"hljs-variable\">pluck</span>: '<span class=\"hljs-variable\">close</span>' }}</span><span class=\"xml\"><span class=\"hljs-tag\">&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 30 }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 50 }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">LineSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">Chart</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">{150}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{(w,</span> <span class=\"hljs-attribute\">h</span>) =&gt;</span> [0, h - 150]}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">YAxis</span> <span class=\"hljs-attribute\">axisAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">ticks</span>=<span class=\"hljs-value\">{5}</span> <span class=\"hljs-attribute\">tickFormat</span>=<span class=\"hljs-value\">{d3.format(\"s\")}</span>/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">DataSeries</span> <span class=\"hljs-attribute\">yAccessor</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.volume} &gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">HistogramSeries</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">{(d)</span> =&gt;</span> d.close &gt; d.open ? 'up' : 'down'} /&gt;\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OverlaySeries</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"sma\"</span> <span class=\"hljs-attribute\">options</span>=</span></span><span class=\"hljs-expression\">{{ <span class=\"hljs-variable\">period</span>: 10, <span class=\"hljs-variable\">pluck</span>:'<span class=\"hljs-variable\">volume</span>' }}</span><span class=\"xml\"><span class=\"hljs-tag\"> &gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">AreaSeries</span>/&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">OverlaySeries</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataSeries</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">Chart</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CurrentCoordinate</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span>/&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MouseCoordinates</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">xDisplayFormat</span>=<span class=\"hljs-value\">{dateFormat}</span> <span class=\"hljs-attribute\">yDisplayFormat</span>=<span class=\"hljs-value\">{(y)</span> =&gt;</span> y.toFixed(2)}&gt;\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">CrossHair</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">MouseCoordinates</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EventCapture</span> <span class=\"hljs-attribute\">mouseMove</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">zoom</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">pan</span>=<span class=\"hljs-value\">{true}</span> <span class=\"hljs-attribute\">mainChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">defaultFocus</span>=<span class=\"hljs-value\">{false}</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">OHLCTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">origin</span>=<span class=\"hljs-value\">{[-40,</span> <span class=\"hljs-attribute\">0</span>]}/&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">MovingAverageTooltip</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">onClick</span>=<span class=\"hljs-value\">{(e)</span> =&gt;</span> console.log(e)} origin={[-38, 15]}/&gt;\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">TooltipContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">DataTransform</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ChartCanvas</span>&gt;</span>\n</span></code></pre>\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p><code>EdgeIndicator</code>s are inside the <code>EdgeContainer</code> and can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan too</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{0}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{1}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{1}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{2}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">forOverlay</span>=<span class=\"hljs-value\">{3}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"first\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"left\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"left\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">EdgeIndicator</span> <span class=\"hljs-attribute\">className</span>=<span class=\"hljs-value\">\"horizontal\"</span> <span class=\"hljs-attribute\">itemType</span>=<span class=\"hljs-value\">\"last\"</span> <span class=\"hljs-attribute\">orient</span>=<span class=\"hljs-value\">\"right\"</span>\n        <span class=\"hljs-attribute\">edgeAt</span>=<span class=\"hljs-value\">\"right\"</span> <span class=\"hljs-attribute\">forChart</span>=<span class=\"hljs-value\">{2}</span> <span class=\"hljs-attribute\">displayFormat</span>=<span class=\"hljs-value\">{d3.format(\".4s\")}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">EdgeContainer</span>&gt;</span>\n</code></pre>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Let us turn it up a notch, we all have access to lots of historical data for stocks. As an example, let us work with MSFT from 1986-03-13 till 2015-03-26</p>\n<p>That is 7221 one day periods, lot more if you have access to intra day, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. This problem is addressed in React Stockcharts by displaying data consolidated by month or week, this gives a better representation of the overall price movement. This technique is employed by many trading systems to show the larger time range.</p>\n<p>If the number of periods to show &gt; width / 3, then automatically switch to the next higher period. e.g. If width = 1000 and showing more than 333 1 day periods, the program switches to 1 week period automatically so that less than 333 periods are shown on screen.</p>\n<p>* Period can be 1min, 5min, … 1 day, 1 week, 1 month</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4>Overlays</h4>\n<ul>\n<li>Exponential Moving Average (EMA) - v0.2</li>\n<li>Bolinger Bands - v0.2</li>\n<li>Compare with another stock - v0.2</li>\n</ul>\n<h4>Indicators</h4>\n<ul>\n<li>Moving Average Convergence Divergence (MACD) - v0.2</li>\n<li>Relative Strength Index (RSI) - v0.2</li>\n</ul>\n<h4>Chart types</h4>\n<ul>\n<li>Heikin Ashi - v0.1</li>\n<li>Kagi - v0.1</li>\n<li>Point and Figure - v0.1</li>\n<li>Renko - v0.1</li>\n<li>Better Renko/Mean Renko - v0.2</li>\n<li>Line break - v0.2</li>\n<li>Volume Profile - v0.3</li>\n</ul>\n<h4>Chart features</h4>\n<ul>\n<li>Change interval on zoom out/zoom in - v0.1</li>\n<li>Add custom data transforms - v0.3</li>\n</ul>\n<h4>More examples</h4>\n<ul>\n<li>gists, fiddle and <a href=\"http://bl.ocks.org/\">blocks</a> for each chart type - v0.1</li>\n</ul>\n<h4>Open issues</h4>\n<ul>\n<li>Window Resize after zoom/pan messes up the chart</li>\n<li>zoom out changes the interval, but zoom in does not change</li>\n</ul>\n";

/***/ }
])
});
;
//# sourceMappingURL=react-stockcharts-dashboard.js.map