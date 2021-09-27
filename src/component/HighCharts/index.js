import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import React, { useState,useEffect } from 'react'

// const generateOptions = (data,cate,prefs) => {
//         return  {
//             chart: {
//                 height: 500,
//             },
//             title: {
//                 text: data.label,
//             },
//             xAxis: {
//                 title: {
//                     text: '年度'
//                 },
//                 categories: cate,
//                 crosshair: true,
//             },
//             yAxis: {
//                 min: 0,
//                 title: {
//                     text: '人口数'
//                 },
//             },
//             series: prefs
//         }
    
// }

export default function HighCharts({data,cate,prefs}) {
    // const [options,setOptions] = useState({})
    // useEffect(() => {
    //     setOptions(generateOptions(data,cate,prefs))
    //     console.log('linechart',prefs)
    // }, [data,cate,prefs])
    const options = {
        chart: {
            height: 500,
        },
        title: {
            text: data.label,
        },
        xAxis: {
            title: {
                text: '年度'
            },
            categories: cate,
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: '人口数'
            },
        },
        series: prefs
    }
    return (
        <HighchartsReact
            highcharts={Highchart}
            options={options}
        ></HighchartsReact>
    )
}
