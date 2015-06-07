(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// common components
	exports.ChartCanvas = __webpack_require__(24);
	exports.DataTransform = __webpack_require__(2);
	
	exports.XAxis = __webpack_require__(3);
	exports.YAxis = __webpack_require__(4);
	exports.Chart = __webpack_require__(5);
	exports.DataSeries = __webpack_require__(6);
	
	// chart types & Series
	exports.AreaSeries = __webpack_require__(7);
	exports.LineSeries = __webpack_require__(8);
	exports.CandlestickSeries = __webpack_require__(9);
	exports.OverlaySeries = __webpack_require__(10);
	exports.HistogramSeries = __webpack_require__(11);
	exports.KagiSeries = __webpack_require__(12);
	exports.PointAndFigureSeries = __webpack_require__(13);
	exports.RenkoSeries = __webpack_require__(14);
	
	// interaction components
	exports.EventCapture = __webpack_require__(15);
	exports.MouseCoordinates = __webpack_require__(16);
	exports.CrossHair = __webpack_require__(17);
	exports.VerticalMousePointer = __webpack_require__(18);
	exports.CurrentCoordinate = __webpack_require__(19);
	
	// Tooltips
	exports.TooltipContainer = __webpack_require__(20);
	exports.OHLCTooltip = __webpack_require__(21);
	exports.MovingAverageTooltip = __webpack_require__(22);
	
	// misc
	exports.EdgeContainer = __webpack_require__(23);
	exports.EdgeIndicator = __webpack_require__(1);
	
	exports.helper = {};
	exports.helper.ChartWidthMixin = __webpack_require__(25);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var Utils = __webpack_require__(35)
	var EdgeCoordinate = __webpack_require__(37)
	
	
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
		},
		contextTypes: {
			width: React.PropTypes.number.isRequired
		},
		mixins: [__webpack_require__(36)],
		renderEdge:function() {
			var chartData = this.getChartData();
			var currentItem = this.getCurrentItem();
			var edge = null, item, yAccessor;
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
							coordinate: this.props.displayFormat(yValue), 
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var EventCaptureMixin = __webpack_require__(31);
	var ChartContainerMixin = __webpack_require__(28);
	var DataTransformMixin = __webpack_require__(32);
	var ChartTransformer = __webpack_require__(30);
	var Dummy = __webpack_require__(33);
	var Utils = __webpack_require__(35);
	
	var polyLinearTimeScale = __webpack_require__(34);
	
	var doNotPassThrough = ['transformType', 'options', 'children', 'namespace'];
	
	var DataTransform = React.createClass({displayName: "DataTransform",
		mixins: [/* DataTransformMixin, */ChartContainerMixin, EventCaptureMixin],
		propTypes: {
			transformType: React.PropTypes.string.isRequired, // stockscale, none
			options: React.PropTypes.object
		},
		contextTypes: {
			width: React.PropTypes.number.isRequired,
			height: React.PropTypes.number.isRequired,
			data: React.PropTypes.object.isRequired,
			dataTransformOptions: React.PropTypes.object,
			dataTransformProps: React.PropTypes.object,
			interval: React.PropTypes.string.isRequired,
			initialDisplay: React.PropTypes.number.isRequired,
		},
		getInitialState:function() {
			return {
				panInProgress: false,
				focus: false
			};
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.DataTransform",
				transformType: "none"
			};
		},
		transformData:function(props, context) {
			var transformer = ChartTransformer.getTransformerFor(props.transformType);
	
			if (context.dataTransformOptions || props.options) {
				var options = {};
				if (context.dataTransformOptions)
					Object.keys(context.dataTransformOptions).forEach(function(key)  {return options[key] = context.dataTransformOptions[key];});
				if (props.options)
					Object.keys(props.options).forEach(function(key)  {return options[key] = props.options[key];});
			}
	
			// console.log(options);
			var passThroughProps = transformer(context.data, context.interval, options, context.dataTransformProps)
			// console.log('passThroughProps-------', passThroughProps);
	
			// this.setState({ passThroughProps: passThroughProps });
			return passThroughProps;
		},
		componentWillMount:function() {
			var $__0=     this,props=$__0.props,context=$__0.context;
			var passThroughProps = this.transformData(props, context);
			var state = {
				data: passThroughProps.data,
				dataTransformOptions: passThroughProps.options,
				dataTransformProps: passThroughProps.other,
				interval: context.interval
			}
			if (this.containsChart(props)) {
				var data = passThroughProps.data[context.interval];
				var beginIndex = Math.max(data.length - context.initialDisplay, 0);
				var plotData = data.slice(beginIndex);
				var chartData = this.getChartData(props, context, plotData, passThroughProps.data, passThroughProps.other);
				var mainChart = this.getMainChart(props.children);
	
				state.chartData = chartData;
				state.plotData = plotData;
				state.currentItems = [];
				state.show = false;
				state.mouseXY = [0, 0];
				state.mainChart = mainChart;
			}
			this.setState(state);
		},
		componentWillReceiveProps:function(props, context) {
			var passThroughProps = this.transformData(props, context);
			var state = {
				data: passThroughProps.data,
				dataTransformOptions: passThroughProps.options,
				dataTransformProps: passThroughProps.other,
				interval: context.interval
			}
			if (this.containsChart(props)) {
				var $__0=      this.state,interval=$__0.interval,chartData=$__0.chartData,plotData=$__0.plotData
	
				var data = passThroughProps.data[interval];
				var mainChart = this.getMainChart(props.children);
				var mainChartData = chartData.filter(function(each)  {return each.id === mainChart;})[0];
				var beginIndex = Utils.getClosestItemIndexes(data, mainChartData.config.accessors.xAccessor(plotData[0]), mainChartData.config.accessors.xAccessor).left;
				var endIndex = Utils.getClosestItemIndexes(data, mainChartData.config.accessors.xAccessor(plotData[plotData.length - 1]), mainChartData.config.accessors.xAccessor).right;
	
				var plotData = data.slice(beginIndex, endIndex);
				var chartData = this.getChartData(props, context, plotData, passThroughProps.data, passThroughProps.other);
	
				state.chartData = chartData;
				state.plotData = plotData;
				state.currentItems = [];
				state.show = false;
				state.mouseXY = [0, 0];
				state.mainChart = mainChart;
			}
			this.setState(state);
		},
		childContextTypes: {
			data: React.PropTypes.object,
			dataTransformOptions: React.PropTypes.object,
			dataTransformProps: React.PropTypes.object,
			// plotData: React.PropTypes.array, // Deprecated
			plotData: React.PropTypes.array,
			// chartData: React.PropTypes.array, // Deprecated
			chartData: React.PropTypes.array,
			// currentItems: React.PropTypes.array, // Deprecated
			currentItems: React.PropTypes.array,
			// show: React.PropTypes.bool,  // Deprecated
			show: React.PropTypes.bool,
			// mouseXY: React.PropTypes.array, // Deprecated
			mouseXY: React.PropTypes.array,
			interval: React.PropTypes.string,
		},
		getChildContext:function() {
			return {
				data: this.state.data,
				dataTransformOptions: this.state.dataTransformOptions,
				dataTransformProps: this.state.dataTransformProps,
				// plotData: this.state.plotData, // Deprecated
				plotData: this.state.plotData,
				chartData: this.state.chartData, // Deprecated
				// chartData: this.state.chartData,
				// currentItems: this.state.currentItems, // Deprecated
				currentItems: this.state.currentItems,
				// show: this.state.show, // Deprecated
				show: this.state.show,
				// mouseXY: this.state.mouseXY, // Deprecated
				mouseXY: this.state.mouseXY,
				interval: this.state.interval,
			}
		},
		render:function() {
			// console.log('DataTransform.render()');
			// console.error('foobar');
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
			// var children = this.props.children;
			return (
				React.createElement("g", null, children)
			);
		}/*
		render() {
			// console.log('DataTransform.render()');
			// console.error('foobar');
			var children = React.Children.map(this.props.children, (child) => React.cloneElement(child));
			// var children = this.props.children;
			return (
				<Dummy contextProps={this.getCh22ildContext()} render={() => <g>{children}</g>} />
			);
		}*/
	});
	
	module.exports = DataTransform;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){XAxis[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;XAxis.prototype=Object.create(____SuperProtoOf____Class0);XAxis.prototype.constructor=XAxis;XAxis.__superConstructor__=____Class0;
		function XAxis(props) {
			____Class0.call(this,props);
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26)
		, d3 = __webpack_require__(27);
	
	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){YAxis[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;YAxis.prototype=Object.create(____SuperProtoOf____Class1);YAxis.prototype.constructor=YAxis;YAxis.__superConstructor__=____Class1;
		function YAxis(props) {
			____Class1.call(this,props);
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
			if (this.props.tickFormat) axis.tickFormat(this.props.tickFormat);
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
		yScale: React.PropTypes.func.isRequired
	};
	
	module.exports = YAxis;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26),
		PureComponent = __webpack_require__(38);
	
	for(var PureComponent____Key in PureComponent){if(PureComponent.hasOwnProperty(PureComponent____Key)){Chart[PureComponent____Key]=PureComponent[PureComponent____Key];}}var ____SuperProtoOfPureComponent=PureComponent===null?null:PureComponent.prototype;Chart.prototype=Object.create(____SuperProtoOfPureComponent);Chart.prototype.constructor=Chart;Chart.__superConstructor__=PureComponent;function Chart(){if(PureComponent!==null){PureComponent.apply(this,arguments);}}
		Object.defineProperty(Chart.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.id;}.bind(this))[0];
			return {
				xScale: chartData.plot.scales.xScale,
				yScale: chartData.plot.scales.yScale,
				xAccessor: chartData.config.accessors.xAccessor,
				yAccessor: chartData.config.accessors.yAccessor,
				overlays: chartData.config.overlays
			}
		}});
		Object.defineProperty(Chart.prototype,"render",{writable:true,configurable:true,value:function() {
			var origin = typeof this.props.origin === 'function'
				? this.props.origin(this.context.width, this.context.height)
				: this.props.origin;
	
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
	
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
		_updateMode: React.PropTypes.object
	};
	Chart.childContextTypes = {
		xScale: React.PropTypes.func.isRequired,
		yScale: React.PropTypes.func.isRequired,
		xAccessor: React.PropTypes.func.isRequired,
		yAccessor: React.PropTypes.func.isRequired,
		overlays: React.PropTypes.array.isRequired,
	};
	
	
	module.exports = Chart;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	
	var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){DataSeries[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;DataSeries.prototype=Object.create(____SuperProtoOf____Class2);DataSeries.prototype.constructor=DataSeries;DataSeries.__superConstructor__=____Class2;function DataSeries(){if(____Class2!==null){____Class2.apply(this,arguments);}}
		Object.defineProperty(DataSeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
			return (
				React.createElement("g", {style: { "clipPath": "url(#chart-area-clip)"}}, children)
			);
		}});
	;
	
	DataSeries.propTypes = {
		xAccessor: React.PropTypes.func,
		yAccessor: React.PropTypes.func.isRequired,
	}
	
	DataSeries.defaultProps = { namespace: "ReStock.DataSeries" };
	
	module.exports = DataSeries;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	// var AreaSeries = React.createClass({
	var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){AreaSeries[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;AreaSeries.prototype=Object.create(____SuperProtoOf____Class3);AreaSeries.prototype.constructor=AreaSeries;AreaSeries.__superConstructor__=____Class3;
		function AreaSeries(props) {
			____Class3.call(this,props);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){LineSeries[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;LineSeries.prototype=Object.create(____SuperProtoOf____Class4);LineSeries.prototype.constructor=LineSeries;LineSeries.__superConstructor__=____Class4;
		function LineSeries(props) {
			____Class4.call(this,props);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){CandlestickSeries[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;CandlestickSeries.prototype=Object.create(____SuperProtoOf____Class5);CandlestickSeries.prototype.constructor=CandlestickSeries;CandlestickSeries.__superConstructor__=____Class5;
		function CandlestickSeries(props) {
			____Class5.call(this,props);
			this.getWicks = this.getWicks.bind(this);
			this.getCandles = this.getCandles.bind(this);
		}
		Object.defineProperty(CandlestickSeries.prototype,"getWicks",{writable:true,configurable:true,value:function() {
			var wicks = this.context.plotData
					.filter(function(d)  {return d.close !== undefined;})
					.map(function(d, idx)  {
						var ohlc = this.context.yAccessor(d);
	
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
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx) {
						var ohlc = this.context.yAccessor(d);
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
					}, this);
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
	}
	
	CandlestickSeries.defaultProps = { namespace: "ReStock.CandlestickSeries" };
	
	CandlestickSeries.yAccessor = function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};};
	
	module.exports = CandlestickSeries;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	
	var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){OverlaySeries[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;OverlaySeries.prototype=Object.create(____SuperProtoOf____Class6);OverlaySeries.prototype.constructor=OverlaySeries;OverlaySeries.__superConstructor__=____Class6;function OverlaySeries(){if(____Class6!==null){____Class6.apply(this,arguments);}}
	
		Object.defineProperty(OverlaySeries.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
			var overlay = this.context.overlays.filter(function(each)  {return each.id === this.props.id;}.bind(this))[0];
			return {
				yAccessor: overlay.yAccessor,
				stroke: overlay.stroke
			};
		}});
		Object.defineProperty(OverlaySeries.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){HistogramSeries[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;HistogramSeries.prototype=Object.create(____SuperProtoOf____Class7);HistogramSeries.prototype.constructor=HistogramSeries;HistogramSeries.__superConstructor__=____Class7;
		function HistogramSeries(props) {
			____Class7.call(this,props);
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){KagiSeries[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;KagiSeries.prototype=Object.create(____SuperProtoOf____Class8);KagiSeries.prototype.constructor=KagiSeries;KagiSeries.__superConstructor__=____Class8;function KagiSeries(){if(____Class8!==null){____Class8.apply(this,arguments);}}
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Class9=React.Component;for(var ____Class9____Key in ____Class9){if(____Class9.hasOwnProperty(____Class9____Key)){PointAndFigureSeries[____Class9____Key]=____Class9[____Class9____Key];}}var ____SuperProtoOf____Class9=____Class9===null?null:____Class9.prototype;PointAndFigureSeries.prototype=Object.create(____SuperProtoOf____Class9);PointAndFigureSeries.prototype.constructor=PointAndFigureSeries;PointAndFigureSeries.__superConstructor__=____Class9;function PointAndFigureSeries(){if(____Class9!==null){____Class9.apply(this,arguments);}}
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27);
	
	var ____Classa=React.Component;for(var ____Classa____Key in ____Classa){if(____Classa.hasOwnProperty(____Classa____Key)){RenkoSeries[____Classa____Key]=____Classa[____Classa____Key];}}var ____SuperProtoOf____Classa=____Classa===null?null:____Classa.prototype;RenkoSeries.prototype=Object.create(____SuperProtoOf____Classa);RenkoSeries.prototype.constructor=RenkoSeries;RenkoSeries.__superConstructor__=____Classa;function RenkoSeries(){if(____Classa!==null){____Classa.apply(this,arguments);}}
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var Utils = __webpack_require__(35)
	
	var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){EventCapture[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;EventCapture.prototype=Object.create(____SuperProtoOf____Classb);EventCapture.prototype.constructor=EventCapture;EventCapture.__superConstructor__=____Classb;
		function EventCapture(props) {
			____Classb.call(this,props);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var CrossHair = __webpack_require__(17)
	var VerticalMousePointer = __webpack_require__(18)
	var Utils = __webpack_require__(35)
	
	
	var MouseCoordinates = React.createClass({displayName: "MouseCoordinates",
		propTypes: {
			forChart: React.PropTypes.number.isRequired, 
			xDisplayFormat: React.PropTypes.func.isRequired,
			yDisplayFormat: React.PropTypes.func.isRequired,
			type: React.PropTypes.oneOf(['crosshair', 'vertical']).isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState, nextContext) {
			return nextContext.currentItems != this.context.currentItems
					|| nextContext.mouseXY !== this.context.mouseXY
					|| nextContext.show !== this.context.show
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.MouseCoordinates",
				show: false,
				snapX: true,
				xDisplayFormat: Utils.displayDateFormat,
				yDisplayFormat: Utils.displayNumberFormat,
			}
		},
		mixins: [__webpack_require__(36)],
		contextTypes: {
			width: React.PropTypes.number.isRequired,
			height: React.PropTypes.number.isRequired,
			show: React.PropTypes.bool,
			mouseXY: React.PropTypes.array,
			dataTransformOptions: React.PropTypes.object,
		},
		getPointer:function() {
			var chartData = this.getChartData();
			var item = this.getCurrentItem();
	
			var xValue = chartData.config.accessors.xAccessor(item);
			var xDisplayValue = this.context.dataTransformOptions === undefined
				? xValue
				: this.context.dataTransformOptions._dateAccessor(item);
	
			var yValue = chartData.plot.scales.yScale.invert(this.context.mouseXY[1]);
	
			if (xValue === undefined || yValue === undefined) return null;
			var x = this.props.snapX ? Math.round(chartData.plot.scales.xScale(xValue)) : this.context.mouseXY[0];
			var y = this.context.mouseXY[1];
			switch (this.props.type) {
				case 'crosshair':
					return React.createElement(CrossHair, {height: this.context.height, width: this.context.width, mouseXY: [x, y], 
						xDisplayValue: this.props.xDisplayFormat(xDisplayValue), yDisplayValue: this.props.yDisplayFormat(yValue)})
				case 'vertical':
					return React.createElement(VerticalMousePointer, null)
			}
		},
		render:function() {
	
			var pointer = this.getPointer()
			/*if (this.context.show) {
				//children = this.props.children;
				children = ;
			};*/
			return (
				React.createElement("g", {className: this.context.show ? 'show' : 'hide'}, 
					pointer
				)
			);
		}
	});
	
	module.exports = MouseCoordinates;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var EdgeCoordinate = __webpack_require__(37)
	var Utils = __webpack_require__(35)
	
	var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){CrossHair[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;CrossHair.prototype=Object.create(____SuperProtoOf____Classc);CrossHair.prototype.constructor=CrossHair;CrossHair.__superConstructor__=____Classc;
		function CrossHair(props) {
			____Classc.call(this,props);
		}
		Object.defineProperty(CrossHair.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return nextProps.mouseXY !== this.props.mouseXY
		}});
		Object.defineProperty(CrossHair.prototype,"render",{writable:true,configurable:true,value:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "horizontal", 
						className: "horizontal", 
						show: true, 
						x1: 0, y1: this.props.mouseXY[1], 
						x2: this.props.width + this.props.yAxisPad, y2: this.props.mouseXY[1], 
						coordinate: this.props.yDisplayValue, 
						edgeAt: this.props.width + this.props.yAxisPad, 
						orient: "right"}
						), 
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
		yDisplayValue: React.PropTypes.string.isRequired
	};
	CrossHair.defaultProps = {
		namespace: "ReStock.CrossHair",
		yAxisPad: 5
	};
	
	module.exports = CrossHair;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	var EdgeCoordinate = __webpack_require__(37)
	var Utils = __webpack_require__(35)
	
	
	var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){VerticalMousePointer[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;VerticalMousePointer.prototype=Object.create(____SuperProtoOf____Classe);VerticalMousePointer.prototype.constructor=VerticalMousePointer;VerticalMousePointer.__superConstructor__=____Classe;function VerticalMousePointer(){if(____Classe!==null){____Classe.apply(this,arguments);}}
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26),
		Utils = __webpack_require__(35);
	
	var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){CurrentCoordinate[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;CurrentCoordinate.prototype=Object.create(____SuperProtoOf____Classd);CurrentCoordinate.prototype.constructor=CurrentCoordinate;CurrentCoordinate.__superConstructor__=____Classd;
		function CurrentCoordinate(props) {
			____Classd.call(this,props);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	
	var ____Classf=React.Component;for(var ____Classf____Key in ____Classf){if(____Classf.hasOwnProperty(____Classf____Key)){TooltipContainer[____Classf____Key]=____Classf[____Classf____Key];}}var ____SuperProtoOf____Classf=____Classf===null?null:____Classf.prototype;TooltipContainer.prototype=Object.create(____SuperProtoOf____Classf);TooltipContainer.prototype.constructor=TooltipContainer;TooltipContainer.__superConstructor__=____Classf;function TooltipContainer(){if(____Classf!==null){____Classf.apply(this,arguments);}}
		Object.defineProperty(TooltipContainer.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return nextContext.chartData !== this.context.chartData || nextContext.currentItems !== this.context.currentItems;
		}});
		Object.defineProperty(TooltipContainer.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	var Utils = __webpack_require__(35)
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = React.createClass({displayName: "OHLCTooltip",
		propTypes: {
			forChart: React.PropTypes.number.isRequired,
			accessor: React.PropTypes.func.isRequired,
			xDisplayFormat: React.PropTypes.func.isRequired,
			origin: React.PropTypes.array.isRequired,
		},
		mixins: [__webpack_require__(36)],
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
	
			var item = this.getCurrentItem();
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	var Utils = __webpack_require__(35)
	
	var ____Classg=React.Component;for(var ____Classg____Key in ____Classg){if(____Classg.hasOwnProperty(____Classg____Key)){SingleMAToolTip[____Classg____Key]=____Classg[____Classg____Key];}}var ____SuperProtoOf____Classg=____Classg===null?null:____Classg.prototype;SingleMAToolTip.prototype=Object.create(____SuperProtoOf____Classg);SingleMAToolTip.prototype.constructor=SingleMAToolTip;SingleMAToolTip.__superConstructor__=____Classg;function SingleMAToolTip(){if(____Classg!==null){____Classg.apply(this,arguments);}}
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
	
	var MovingAverageTooltip = React.createClass({displayName: "MovingAverageTooltip",
		propTypes: {
			// _currentItem: React.PropTypes.object.isRequired,
			// _overlays: React.PropTypes.array.isRequired,
			forChart: React.PropTypes.number.isRequired,
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
		mixins: [__webpack_require__(36)],
		render:function() {
			var chartData = this.getChartData();
			var item = this.getCurrentItem();
	
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
		}
	});
	
	module.exports = MovingAverageTooltip;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	
	var ____Classh=React.Component;for(var ____Classh____Key in ____Classh){if(____Classh.hasOwnProperty(____Classh____Key)){EdgeContainer[____Classh____Key]=____Classh[____Classh____Key];}}var ____SuperProtoOf____Classh=____Classh===null?null:____Classh.prototype;EdgeContainer.prototype=Object.create(____SuperProtoOf____Classh);EdgeContainer.prototype.constructor=EdgeContainer;EdgeContainer.__superConstructor__=____Classh;function EdgeContainer(){if(____Classh!==null){____Classh.apply(this,arguments);}}
		Object.defineProperty(EdgeContainer.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return nextContext.chartData !== this.context.chartData;
		}});
		Object.defineProperty(EdgeContainer.prototype,"render",{writable:true,configurable:true,value:function() {
			var children = React.Children.map(this.props.children, function(child)  {return React.cloneElement(child);});
			return React.createElement("g", null, children)
		}});
	;
	
	EdgeContainer.contextTypes = {
		chartData: React.PropTypes.array.isRequired
	};
	
	module.exports = EdgeContainer;
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	// var TestUtils = React.addons.TestUtils;
	
	// var EventCaptureMixin = require('./mixin/EventCaptureMixin');
	var ChartContainerMixin = __webpack_require__(28);
	var Canvas = __webpack_require__(29);
	
	var ChartCanvas = React.createClass({displayName: "ChartCanvas",
		mixins: [ChartContainerMixin],
		propTypes: {
			width: React.PropTypes.number.isRequired,
			height: React.PropTypes.number.isRequired,
			margin: React.PropTypes.object,
			interval: React.PropTypes.oneOf(['D']).isRequired, //,'m1', 'm5', 'm15', 'W', 'M'
			data: React.PropTypes.array.isRequired,
			initialDisplay: React.PropTypes.number,
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
				interval: "D",
				// initialDisplay: 30,
			};
		},
		childContextTypes: {
			width: React.PropTypes.number.isRequired,
			height: React.PropTypes.number.isRequired,
			data: React.PropTypes.object.isRequired,
			interval: React.PropTypes.string.isRequired,
			initialDisplay: React.PropTypes.number.isRequired,
			plotData: React.PropTypes.array,
			// canvas: React.PropTypes.any,
	
			chartData: React.PropTypes.array,
		},
		getChildContext:function() {
			return {
				width: this.getAvailableWidth(this.props),
				height: this.getAvailableHeight(this.props),
				data: this.state.data,
				interval: this.props.interval,
				initialDisplay: this.props.initialDisplay || this.state.plotData.length,
				plotData: this.state.plotData,
				chartData: this.state.chartData,
			}
		},
		componentWillMount:function() {
			var $__0=     this,props=$__0.props,context=$__0.context;
	
			var data = {};
			data[this.props.interval] = this.props.data;
	
			var state = {
				data: data,
				plotData: this.props.data
			}
			if (this.containsChart(props)) {
				var defaultOptions = {
					width: this.getAvailableWidth(props),
					height: this.getAvailableHeight(props),
				}
				var plotData = props.data;
				var chartData = this.getChartData(props, context, plotData, data, defaultOptions);
				// console.log(chartData);
				var mainChart = this.getMainChart(props.children);
	
				state.chartData = chartData;
				state.plotData = plotData;
			}
			this.setState(state);
		},
		getCanvas:function() {
			return this.refs.canvas.getCanvas();
		},
		render:function() {
			var w = this.getAvailableWidth(this.props), h = this.getAvailableHeight(this.props);
			var children = this.props.children;
			// var children = this.renderChildren();
	
			return (
				React.createElement("div", {style: {position: 'relative'}}, 
					React.createElement("svg", {width: this.props.width, height: this.props.height}, 
						React.createElement("defs", null, 
							React.createElement("clipPath", {id: "chart-area-clip"}, 
								React.createElement("rect", {x: "0", y: "0", width: w, height: h})
							)
						), 
						React.createElement("g", {transform: ("translate(" + this.props.margin.left + ", " + this.props.margin.top + ")")}, 
							this.props.children
						)
					)
				)
			);
		}
	});
	
	module.exports = ChartCanvas;
	
	/*
					<Canvas ref="canvas" width={w} height={h} left={this.props.margin.left} top={this.props.margin.top} />
	*/


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(26),
		d3 = __webpack_require__(27),
		ScaleUtils = __webpack_require__(39),
		OverlayUtils = __webpack_require__(40),
		Utils = __webpack_require__(35),
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
		getChildren:function(children, regex) {
			var newChildren = Array.isArray(children)
				? children
				: [children];
	
			return newChildren
				.filter(function(child)  {return regex.test(child.props.namespace);})
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
		getMainChart:function(children) {
			var eventCapture = this.getChildren(children, /EventCapture$/);
			if (eventCapture.length > 1) throw new Error("only one EventCapture allowed");
			if (eventCapture.length > 0) return eventCapture[0].props.mainChart;
		},
		getClosestItem:function(mouseXY, chartData) {
			// console.log(chartData);
			var xValue = chartData.plot.scales.xScale.invert(mouseXY[0]);
			var item = Utils.getClosestItem(this.state.plotData, xValue, chartData.config.accessors.xAccessor);
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
			// console.log(overlaysToAdd);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
	
			var origin = typeof chartProps.origin === 'function'
				? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight)
				: chartProps.origin;
	
			var scales = this.defineScales(chartProps, partialData, passThroughProps);
	
			var config = {
				width: dimensions.width,
				height: dimensions.height,
				origin: origin,
				accessors: accessors,
				overlays: overlaysToAdd,
				scaleType: scales
			};
			return config;
		},
		getChartPlotFor:function(config, partialData, domainL, domainR) {
			var overlayYAccessors = pluck(keysAsArray(config.overlays), 'yAccessor');
	
			var xyValues = ScaleUtils.flattenData(partialData
					, [config.accessors.xAccessor]
					, [config.accessors.yAccessor].concat(overlayYAccessors));
	
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
	
						var xAccessor = passThroughProps !== undefined && passThroughProps._stockScale
							? passThroughProps._xAccessor
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
	};
	
	module.exports = ChartContainerMixin;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	
	var ____Classi=React.Component;for(var ____Classi____Key in ____Classi){if(____Classi.hasOwnProperty(____Classi____Key)){Canvas[____Classi____Key]=____Classi[____Classi____Key];}}var ____SuperProtoOf____Classi=____Classi===null?null:____Classi.prototype;Canvas.prototype=Object.create(____SuperProtoOf____Classi);Canvas.prototype.constructor=Canvas;Canvas.__superConstructor__=____Classi;
		function Canvas(props) {
			____Classi.call(this,props);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var StockScaleTransformer = __webpack_require__(41);
	var HeikinAshiTransformer = __webpack_require__(42);
	var KagiTransformer = __webpack_require__(44);
	var PointAndFigureTransformer = __webpack_require__(43);
	var RenkoTransformer = __webpack_require__(45);
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(26);
	var Utils = __webpack_require__(35);
	
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	
	var EventCaptureMixin = {
		childContextTypes: {
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
		},
		getChildContext:function() {
			return {
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
		},
		handleMouseMove:function(mouseXY) {
			// console.log('mouse move - ', mouseXY);
			var currentItems = this.getCurrentItems(this.state.chartData, mouseXY, this.state.plotData)
				// .filter((eachChartData) => eachChartData.id === this.state.mainChart)
	
			this.setState({
				mouseXY: mouseXY,
				currentItems: currentItems,
				show: true
			});
		},
		getCurrentItems:function(chartData, mouseXY, plotData) {
			return chartData
				.map(function(eachChartData)  {
					var xValue = eachChartData.plot.scales.xScale.invert(mouseXY[0]);
					var item = Utils.getClosestItem(plotData, xValue, eachChartData.config.accessors.xAccessor);
					return { id: eachChartData.id, data: item };
				});
		},
		handleMouseEnter:function() {
			// console.log('enter');
			this.setState({
				show: true
			});
		},
		handleMouseLeave:function() {
			// console.log('leave');
			this.setState({
				show: false
			});
		},
		handleZoom:function(zoomDirection, mouseXY) {
			// console.log('zoomDirection ', zoomDirection, ' mouseXY ', mouseXY);
			var $__0=        this.state,mainChart=$__0.mainChart,chartData=$__0.chartData,data=$__0.data,plotData=$__0.plotData,interval=$__0.interval;
	
			var chart = chartData.filter(function(eachChart)  {return eachChart.id === mainChart;})[0],
				item = this.getClosestItem(mouseXY, chart),
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
			var dataToPlot = this.getDataToPlotForDomain(domainL, domainR, data, chart.config.width, chart.config.accessors.xAccessor);
			if (dataToPlot.data.length < 10) return;
			var newChartData = chartData.map(function(eachChart)  {
				var plot = this.getChartPlotFor(eachChart.config, dataToPlot.data, domainL, domainR);
				return {
					id: eachChart.id,
					config: eachChart.config,
					plot: plot
				}
			}.bind(this));
			this.setState({
				chartData: newChartData,
				plotData: dataToPlot.data,
				interval: dataToPlot.interval
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
		},
		handlePanStart:function(panStartDomain, panOrigin) {
			// console.log('panStartDomain - ', panStartDomain, ', panOrigin - ', panOrigin);
			this.setState({
				panInProgress: true,
				panStartDomain: panStartDomain,
				panOrigin: panOrigin,
				focus: true,
			});
		},
		handlePan:function(mousePosition, startDomain) {
			// console.log('mousePosition ', mousePosition);
			var $__0=          this.state,mainChart=$__0.mainChart,chartData=$__0.chartData,data=$__0.data,plotData=$__0.plotData,interval=$__0.interval,panStartDomain=$__0.panStartDomain,panOrigin=$__0.panOrigin;
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
						var plot = this.getChartPlotFor(eachChart.config, filteredData, domainL, domainR);
						return {
							id: eachChart.id,
							config: eachChart.config,
							plot: plot
						}
					}.bind(this));
					var currentItems = this.getCurrentItems(newChartData, mousePosition, filteredData);
	
					this.setState({
						chartData: newChartData,
						plotData: filteredData,
						currentItems: currentItems,
						// show: true,
						mouseXY: mousePosition
					});
				}.bind(this));
			}
		},
		handlePanEnd:function() {
			this.setState({
				panInProgress: false,
				panStartDomain: null
			});
		},
		handleFocus:function(focus) {
			// console.log(focus);
			this.setState({
				focus: focus,
			});
		}
	};
	
	module.exports = EventCaptureMixin;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChartTransformer = __webpack_require__(30);
	
	var DataTransformMixin = {
		isDataDransform:function() {
			return true;
		},
		transformData:function(props) {
			var transformer = ChartTransformer.getTransformerFor(props.transformType);
			var passThroughProps = transformer(this.context.data, props.options, props)
			// console.log('passThroughProps-------', passThroughProps);
	
			// this.setState({ passThroughProps: passThroughProps });
			return passThroughProps;
		}
	};
	
	module.exports = DataTransformMixin;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	
	var Dummy = React.createClass({displayName: "Dummy",
		childContextTypes: {
			data: React.PropTypes.object,
			dataTransformOptions: React.PropTypes.object,
			plotData: React.PropTypes.array,
			chartData: React.PropTypes.array,
			currentItems: React.PropTypes.array,
			show: React.PropTypes.bool,
			mouseXY: React.PropTypes.array,
			interval: React.PropTypes.string,
	
			// EventCaptureMixin
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
		},
		getChildContext:function() {
			console.log('kjahfdshfkdashfpodisfhoadsiufhadslfhsdiufhds777777777777');
			return this.props.contextProps;
		},
		render:function() {
			console.log('Dummy.render()');
			return this.props.render();
		}
	});
	
	module.exports = Dummy;
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(27);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(27);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(26);
	
	var ForChartMixin = {
		contextTypes: {
			chartData: React.PropTypes.array.isRequired,
			currentItems: React.PropTypes.array.isRequired,
		},
		getChartData:function() {
			var chartData = this.context.chartData.filter(function(each)  {return each.id === this.props.forChart;}.bind(this))[0];
			return chartData;
		},
		getCurrentItem:function() {
			var currentItem = this.context.currentItems.filter(function(each)  {return each.id === this.props.forChart;}.bind(this))[0];
			var item = currentItem ? currentItem.data : {}
			return item;
		}
	};
	
	module.exports = ForChartMixin;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(26);
	
	var ____Classj=React.Component;for(var ____Classj____Key in ____Classj){if(____Classj.hasOwnProperty(____Classj____Key)){EdgeCoordinate[____Classj____Key]=____Classj[____Classj____Key];}}var ____SuperProtoOf____Classj=____Classj===null?null:____Classj.prototype;EdgeCoordinate.prototype=Object.create(____SuperProtoOf____Classj);EdgeCoordinate.prototype.constructor=EdgeCoordinate;EdgeCoordinate.__superConstructor__=____Classj;function EdgeCoordinate(){if(____Classj!==null){____Classj.apply(this,arguments);}}
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
			return (
				React.createElement("g", {className: (this.props.show ? 'show ' : 'hide ') + this.props.className}, 
						React.createElement("line", {className: "cross-hair", 
							x1: this.props.x1, y1: this.props.y1, 
							x2: this.props.x2, y2: this.props.y2}), 
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
		rectWidth: React.PropTypes.number
	};
	EdgeCoordinate.defaultProps = {
		namespace: "ReStock.EdgeCoordinate",
		orient: 'left'
	};
	module.exports = EdgeCoordinate;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(26);
	var shallowEqual = __webpack_require__(48);
	
	var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){PureComponent[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;PureComponent.prototype=Object.create(____SuperProtoOf____Classk);PureComponent.prototype.constructor=PureComponent;PureComponent.__superConstructor__=____Classk;function PureComponent(){if(____Classk!==null){____Classk.apply(this,arguments);}}
		Object.defineProperty(PureComponent.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState, nextContext) {
			return !shallowEqual(this.props, nextProps)
				|| !shallowEqual(this.state, nextState)
				|| !shallowEqual(this.context, nextContext);
		}});
	
	
	module.exports = PureComponent;

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(35);
	var MACalculator = __webpack_require__(46);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stockScale = __webpack_require__(34);
	
	var defaultOptions = {
		_dateAccessor: function(d)  {return d.date;},
		_indexAccessor: function(d)  {return d._idx;},
		_dateMutator: function(d, date)  {d.date = date},
		_indexMutator: function(d, i)  {d._idx = i;}
	}
	
	function StockScaleTransformer(data, interval, options) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function(key)  {return newOptions[key] = defaultOptions[key];});
	
		if (options) Object.keys(options).forEach(function(key)  {return newOptions[key] = options[key];});
	
		var $__0=       newOptions,_dateAccessor=$__0._dateAccessor,_dateMutator=$__0._dateMutator,_indexAccessor=$__0._indexAccessor,_indexMutator=$__0._indexMutator;
	
		var prevDate;
		var responseData = {}
		var dd = data[interval];
		responseData.D = dd
			//.filter((each) => Math.random() > 0.9)
			.map(function(each, i)  {
				var row = each;
				// console.log(each);
				//console.log(row);
				_indexMutator(row,  i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = _dateAccessor(row);
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
		responseData.W = buildWeeklyData(responseData.D, _indexMutator, _dateAccessor, _dateMutator);
		responseData.M = buildMonthlyData(responseData.D, _indexMutator, _dateAccessor, _dateMutator);
	
		// console.table(responseData.W);
	
		return {
				data: responseData,
				other: {
					_xScale: stockScale(newOptions._indexAccessor),
					_xAccessor: newOptions._indexAccessor,
					_stockScale: true,
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace'];
	
	
	function HeikinAshiTransformer(data, interval, options, other) {
	
		var $__0=       options,_dateAccessor=$__0._dateAccessor,_dateMutator=$__0._dateMutator,_indexAccessor=$__0._indexAccessor,_indexMutator=$__0._indexMutator;
		// console.log(data, options);
	
		var haData = {};
		Object.keys(data)
			.forEach(function(key)  {return haData[key] = buildHA(data[key], _indexAccessor, _indexMutator, _dateAccessor, _dateMutator);});
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return { high: d.high, low: d.low }; };
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
	}
	
	function createBox(d, _dateAccessor, dateMutator) {
		var box = {
			open: d.open
			, fromDate: _dateAccessor(d)
			, toDate: _dateAccessor(d)
			//, displayDate: d.displayDate
			, startOfYear: d.startOfYear
			, startOfQuarter: d.startOfQuarter
			, startOfMonth: d.startOfMonth
			, startOfWeek: d.startOfWeek
		};
		dateMutator(box, _dateAccessor(d));
		return box;
	}
	
	function updateColumns(columnData, _dateAccessor, dateMutator) {
	
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
					dateMutator(d, _dateAccessor(eachBox));
				}
				if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, _dateAccessor(eachBox));
				}
				if (d.startOfMonth !== true && eachBox.startOfMonth) {
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, _dateAccessor(eachBox));
				}
				if (d.startOfWeek !== true && eachBox.startOfWeek) {
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, _dateAccessor(eachBox));
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
	
		var $__0=         newOptions,_dateAccessor=$__0._dateAccessor,_dateMutator=$__0._dateMutator,_indexAccessor=$__0._indexAccessor,_indexMutator=$__0._indexMutator,reversal=$__0.reversal,boxSize=$__0.boxSize;
	
		var columnData = new Array();
	
		var index = 0, direction;
		var column = {
			boxes: [],
			open: rawData.D[0].open
		}, box = createBox(rawData.D[0], _dateAccessor, _dateMutator);
	
		_indexMutator(column, 0);
		columnData.push(column);
	
		rawData.D.forEach( function (d) {
			column.volume = column.volume || 0;
			column.volume += d.volume;
	
			if (!box.startOfYear) {
				box.startOfYear = d.startOfYear;
				if (box.startOfYear) {
					_dateMutator(box, _dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfYear && !box.startOfQuarter) {
				box.startOfQuarter = d.startOfQuarter;
				if (box.startOfQuarter && !box.startOfYear) {
					_dateMutator(box, _dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
	
			if (!box.startOfQuarter && !box.startOfMonth) {
				box.startOfMonth = d.startOfMonth;
				if (box.startOfMonth && !box.startOfQuarter) {
					_dateMutator(box, _dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
			if (!box.startOfMonth && !box.startOfWeek) {
				box.startOfWeek = d.startOfWeek;
				if (box.startOfWeek && !box.startOfMonth) {
					_dateMutator(box, _dateAccessor(d));
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
					box.toDate = _dateAccessor(d);
					box.open = column.open;
					var noOfBoxes = column.direction > 0
										? Math.floor(upwardMovement / boxSize)
										: Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, _dateAccessor, _dateMutator);
						// box = cloneMe(box);
						box.open = prevBoxClose;
					}
					box.fromDate = _dateAccessor(d);
					box.date = _dateAccessor(d);
				}
			} else {
				// one or more boxes already formed in the current column
				var upwardMovement = (Math.max((usePrice(d).high - box.open), 0)) //upward movement
				var downwardMovement = Math.abs(Math.min((usePrice(d).low - box.open), 0)) // downward movement
	
				if ((column.direction > 0 && upwardMovement > boxSize) /* rising column AND box can be formed */
						|| (column.direction < 0 && downwardMovement > boxSize) /* falling column AND box can be formed */ ) {
					// form another box
					box.close = box.open + column.direction * boxSize;
					box.toDate = _dateAccessor(d);
					var prevBoxClose = box.close;
					column.boxes.push(box);
					box = createBox(d, _dateAccessor, _dateMutator);
					box.open = prevBoxClose;
					box.fromDate = _dateAccessor(d);
					_dateMutator(box, _dateAccessor(d));
				} else if ((column.direction > 0 && downwardMovement > boxSize * reversal) /* rising column and there is downward movement to trigger a reversal */
						|| (column.direction < 0 && upwardMovement > boxSize * reversal)/* falling column and there is downward movement to trigger a reversal */) {
					// reversal
	
					box.open = box.open + -1 * column.direction * boxSize;
					box.toDate = _dateAccessor(d);
					// box.displayDate = d.displayDate;
					_dateMutator(box, _dateAccessor(d));
					// box.startOfYear = d.startOfYear;
					// box.startOfQuarter = d.startOfQuarter;
					// box.startOfMonth = d.startOfMonth;
					// box.startOfWeek = d.startOfWeek;
					// console.table(column.boxes);
					var idx = _indexAccessor(column) + 1;
					column = {
						boxes: [],
						//, index: column.index + 1
						direction: -1 * column.direction
					};
					_indexMutator(column, idx);
					var noOfBoxes = column.direction > 0
										? Math.floor(upwardMovement / boxSize)
										: Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(d, _dateAccessor, _dateMutator);
						box.open = prevBoxClose;
					}
	
					columnData.push(column);
				}
			}
		});
		updateColumns(columnData, _dateAccessor, _dateMutator);
	
		return {
			data: {'D': columnData},
			other: other,
			options: newOptions
		};
	}
	
	module.exports = PointAndFigureTransformer;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	var usePrice = function (d) { return d.close; };
	
	var calculateATR = __webpack_require__(47);
	
	function KagiTransformer(data, interval, options, other) {
		if (options === undefined) options = {};
	
		var period = options.period || 14;
	
		calculateATR(data.D, period);
		var reversalThreshold = function (d) { return d["atr" + period] }
	
		var $__0=       options,_dateAccessor=$__0._dateAccessor,_dateMutator=$__0._dateMutator,_indexAccessor=$__0._indexAccessor,_indexMutator=$__0._indexMutator;
	
		var kagiData = new Array();
	
		var index = 0, prevPeak, prevTrough, direction;
		var line = {};
	
		data.D.forEach( function (d) {
			if (line.from === undefined) {
				_indexMutator(line, index++);
				_dateMutator(line, _dateAccessor(d));
				/*line.displayDate = d.displayDate;
				line.fromDate = d.displayDate;
				line.toDate = d.displayDate;*/
				line.from = _dateAccessor(d);
	
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
			line.to = _dateAccessor(d);
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace', '_multiInterval'];
	var pricingMethod = function (d) { return { high: d.high, low: d.low }; };
	// var pricingMethod = function (d) { return { high: d.close, low: d.close }; };
	// var usePrice = function (d) { return d.close; };
	var calculateATR = __webpack_require__(47);
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
		period: 14
	}
	
	function RenkoTransformer(rawData, interval, options, other) {
		var newOptions = {};
		Object.keys(defaultOptions).forEach(function(key)  {return newOptions[key] = defaultOptions[key];});
	
		if (options) Object.keys(options).forEach(function(key)  {return newOptions[key] = options[key];});
	
		var $__0=          newOptions,_dateAccessor=$__0._dateAccessor,_dateMutator=$__0._dateMutator,_indexAccessor=$__0._indexAccessor,_indexMutator=$__0._indexMutator,reversal=$__0.reversal,boxSize=$__0.boxSize,period=$__0.period;
	
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
				brick.from = _indexAccessor(d);
				brick.fromDate = _dateAccessor(d);
				_indexMutator(brick, index++);
				_dateMutator(brick, _dateAccessor(d));
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
					_dateMutator(brick, _dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfQuarter) {
				brick.startOfQuarter = d.startOfQuarter;
				if (brick.startOfQuarter && !brick.startOfYear) {
					_dateMutator(brick, _dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
	
			if (!brick.startOfMonth) {
				brick.startOfMonth = d.startOfMonth;
				if (brick.startOfMonth && !brick.startOfQuarter) {
					_dateMutator(brick, _dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
			if (!brick.startOfWeek) {
				brick.startOfWeek = d.startOfWeek;
				if (brick.startOfWeek && !brick.startOfMonth) {
					_dateMutator(brick, _dateAccessor(d));
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
						brick.to = _indexAccessor(d);
						brick.toDate = _dateAccessor(d);
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
						brick.from = _indexAccessor(d);
						brick.fromDate = _dateAccessor(d);
						_indexMutator(brick, index + j);
						_dateMutator(brick, _dateAccessor(d));
						brick.volume = (brick.volume || 0) + d.volume;
					}
					index = index + j - 1;
					brick = {};
				} else {
					if (_indexAccessor(d) === rawData.D.length - 1) {
						brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
						brick.to = _indexAccessor(d);
						brick.toDate = _dateAccessor(d);
						_dateMutator(brick, _dateAccessor(d));
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(35);
	
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
/* 47 */
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
/* 48 */
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
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-stockcharts.js.map