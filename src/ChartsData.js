import React from "react";

function ChartsData() {
    return (
        <>
            <div className="container-fluid">
           
                <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                    The charts below have been customized - for further customization options, please visit the <a target="_blank" without rel="noreferrer" href="https://www.chartjs.org/docs/latest/">official Chart.js
                    documentation</a>
                </p>
       
                <div className="row">

                    <div className="col-xl-8 col-lg-7">
                      
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myAreaChart" style={{display: 'block', height: '320px', width: '380px'}} width="570" height="480" className="chartjs-render-monitor"></canvas>
                                </div>
                                <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                            </div>
                        </div>
               
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myBarChart" width="570" height="480" style={{display: 'block', height: '320px', width: '380px'}} className="chartjs-render-monitor"></canvas>
                                </div>
                                <hr/>
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                            </div>
                        </div>

                    </div>
           
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                    
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                            </div>
                       
                            <div className="card-body">
                                <div className="chart-pie pt-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myPieChart" width="379" height="379" style={{display: 'block', height: '253px', width: '253px'}} className="chartjs-render-monitor"></canvas>
                                </div>
                                <hr/>
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ChartsData;