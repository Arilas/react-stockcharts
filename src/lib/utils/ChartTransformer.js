"use strict";

import StockScaleTransformer from "./StockscaleTransformer.jsx";
import HeikinAshiTransformer from "./HeikinAshiTransformer.jsx";
import KagiTransformer from "./KagiTransformer.jsx";
import PointAndFigureTransformer from "./PointAndFigureTransformer.jsx";
import RenkoTransformer from "./RenkoTransformer.jsx";

var ChartTransformer = {
	getTransformerFor(type) {
		if (type === "none") return (d) => d;
		if (type === "stockscale") return StockScaleTransformer;
		if (type === "heikinashi") return HeikinAshiTransformer;
		if (type === "kagi") return KagiTransformer;
		if (type === "pointandfigure") return PointAndFigureTransformer;
		if (type === "renko") return RenkoTransformer;
		return false;
	},
	filter(data, dateAccesor, fromDate, toDate) {
		var filteredData = data.filter((each) => {
			var filtered = dateAccesor(each).getTime() > fromDate.getTime() && dateAccesor(each).getTime() < toDate.getTime();
			return filtered;
		});
		return filteredData;
	}
};

module.exports = ChartTransformer;
