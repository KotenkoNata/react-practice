import "./Chart.css"
const Chart = (props) => {
    return <div className="chart">
        {props.dataPoints.map(dataPoint=>{
            return <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={null}/>
        })}
    </div>
}

export default Chart;