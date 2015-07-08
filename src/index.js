"use strict";

// common components
exports.ChartCanvas = require("./lib/ChartCanvas.jsx");
exports.DataTransform = require("./lib/DataTransform.jsx");

exports.XAxis = require("./lib/XAxis.jsx");
exports.YAxis = require("./lib/YAxis.jsx");
exports.Chart = require("./lib/Chart.jsx");
exports.DataSeries = require("./lib/DataSeries.jsx");

// chart types & Series
exports.AreaSeries = require("./lib/AreaSeries.jsx");
exports.LineSeries = require("./lib/LineSeries.jsx");
exports.CompareSeries = require("./lib/CompareSeries.jsx");
exports.CandlestickSeries = require("./lib/CandleStickSeries.jsx");
exports.OverlaySeries = require("./lib/OverlaySeries.jsx");
exports.HistogramSeries = require("./lib/HistogramSeries.jsx");
exports.KagiSeries = require("./lib/KagiSeries.jsx");
exports.PointAndFigureSeries = require("./lib/PointAndFigureSeries.jsx");
exports.RenkoSeries = require("./lib/RenkoSeries.jsx");
exports.MACDSeries = require("./lib/MACDSeries.jsx");

// interaction components
exports.EventCapture = require("./lib/EventCapture.jsx");
exports.MouseCoordinates = require("./lib/MouseCoordinates.jsx");
exports.CrossHair = require("./lib/CrossHair.jsx");
exports.VerticalMousePointer = require("./lib/VerticalMousePointer.jsx");
exports.CurrentCoordinate = require("./lib/CurrentCoordinate.jsx");

// misc
exports.EdgeContainer = require("./lib/EdgeContainer.jsx");
exports.EdgeIndicator = require("./lib/EdgeIndicator.jsx");

exports.helper = {};
exports.helper.ChartWidthMixin = require("./lib/helper/ChartWidthMixin.jsx");

exports.indicator = {
	MACD: require("./lib/indicators/MACDIndicator.js")
};

// Tooltips
exports.tooltip = {
	MACDTooltip: require("./lib/MACDTooltip.jsx"),
	TooltipContainer: require("./lib/TooltipContainer.jsx"),
	OHLCTooltip: require("./lib/OHLCTooltip.jsx"),
	CompareTooltip: require("./lib/CompareTooltip.jsx"),
	MovingAverageTooltip: require("./lib/MovingAverageTooltip.jsx"),
};

exports.TooltipContainer = require("./lib/TooltipContainer.jsx");
exports.OHLCTooltip = require("./lib/OHLCTooltip.jsx");
exports.CompareTooltip = require("./lib/CompareTooltip.jsx");
exports.MovingAverageTooltip = require("./lib/MovingAverageTooltip.jsx");
