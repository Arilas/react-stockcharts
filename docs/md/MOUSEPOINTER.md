checkout the [source](https://gist.github.com/rrag/261fa4bc7b67536eb789), [block](http://bl.ocks.org/rrag/261fa4bc7b67536eb789), [plunker](http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview) of this example

```html
<ChartCanvas width={this.state.width} height={400}
	margin={{left: 70, right: 70, top:10, bottom: 30}} data={this.props.data} interval="D" initialDisplay={30}>
	<DataTransform transformType="stockscale">
		<Chart id={1} yMousePointerDisplayLocation="right" yMousePointerDisplayFormat={(y) => y.toFixed(2)}>
			<XAxis axisAt="bottom" orient="bottom"/>
			<YAxis axisAt="right" orient="right" ticks={5} />
			<DataSeries yAccessor={CandlestickSeries.yAccessor} >
				<CandlestickSeries />
			</DataSeries>
		</Chart>
		<Chart id={2} yMousePointerDisplayLocation="left" yMousePointerDisplayFormat={d3.format(".4s")}
				height={150} origin={(w, h) => [0, h - 150]}>
			<YAxis axisAt="left" orient="left" ticks={5} tickFormat={d3.format("s")}/>
			<DataSeries yAccessor={(d) => d.volume} >
				<HistogramSeries className={(d) => d.close > d.open ? 'up' : 'down'} />
			</DataSeries>
		</Chart>
		<MouseCoordinates xDisplayFormat={dateFormat} type="crosshair" />
		<EventCapture mouseMove={true} mainChart={1}/>
		<TooltipContainer>
			<OHLCTooltip forChart={1} origin={[-40, 0]}/>
		</TooltipContainer>
	</DataTransform>
</ChartCanvas>
```

`EventCapture` is used to capture mousemove, scroll/zoom and drag events
```html
<EventCapture mouseMove={true} mainChart={1}/>
```

By default none of the events are captured, and each has to be enabled individually `mouseMove` is enabled above. `mainChart` as the name describes is used to refer to the `Chart` from which the `xScale` and `yScale` are used to determine the nearest value to the mouse position.

```html
<MouseCoordinates xDisplayFormat={dateFormat} type="crosshair" />
```
Displays the crosshair at the mouse position, the attributes of `MouseCoordinates` are self explanatory.

`Chart` gets a few new props to indicate the y mouse pointer tooltip location and format
```html
<Chart id={1} yMousePointerDisplayLocation="right" yMousePointerDisplayFormat={(y) => y.toFixed(2)}>
```
```html
<Chart id={2} yMousePointerDisplayLocation="left" yMousePointerDisplayFormat={d3.format(".4s")}
```

And for the tooltip on the top left
```html
<TooltipContainer>
	<OHLCTooltip forChart={1} origin={[-40, 0]}/>
</TooltipContainer>
```
use the `origin` and `margin` of `ChartCanvas` to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out `OHLCTooltip` with your own