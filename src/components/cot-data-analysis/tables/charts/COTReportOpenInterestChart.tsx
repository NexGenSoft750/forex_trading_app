import React from 'react';

const COTReportOpenInterestChart = () => {
    // Data points that match the pattern in your image
    const dataPoints = [
        { x: 20, y: 180 },   // Start around 30,000
        { x: 45, y: 130 },   // Peak around 35,000
        { x: 70, y: 140 },   // Slight dip
        { x: 95, y: 130 },   // Another peak
        { x: 120, y: 250 },  // Major drop to around 25,000
        { x: 145, y: 240 },  // Stay low
        { x: 170, y: 245 },  // Slight recovery
        { x: 195, y: 235 },  // Continue low
        { x: 220, y: 225 },  // Start rising
        { x: 245, y: 215 },  // Continue rising
        { x: 270, y: 200 },  // More rise
        { x: 295, y: 185 },  // Back to higher levels
        { x: 320, y: 180 },  // Stable high
        { x: 345, y: 175 },  // Peak
        { x: 370, y: 185 },  // Slight dip
        { x: 395, y: 195 },  // Another dip
        { x: 420, y: 200 },  // Continue decline
        { x: 445, y: 205 },  // End level
    ];

    const generatePath = () =>
        dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    // Generate dates for x-axis (all showing 2024-08-06 as in your image)
    const dateLabels = Array(18).fill('2024-08-06');

    const containerStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
    };

    const titleStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '30px',
        color: '#000',
        letterSpacing: '1px'
    };

    const chartWrapperStyle: React.CSSProperties = {
        position: 'relative',
        height: '400px',
        margin: '0 auto',
        backgroundColor: 'white',
        border: '1px solid #ddd'
    };

    const yAxisLabelStyle: React.CSSProperties = {
        position: 'absolute',
        left: '-60px',
        top: '200px',
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
        fontSize: '12px',
        color: '#000',
        fontWeight: 'normal',
        whiteSpace: 'nowrap'
    };

    const yValueStyle: React.CSSProperties = {
        position: 'absolute',
        fontSize: '11px',
        color: '#000'
    };

    const svgStyle: React.CSSProperties = {
        position: 'absolute',
        left: '70px',
        top: '20px'
    };

    const xLabelsStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '10px',
        left: '80px',
        right: '30px',
        height: '60px'
    };

    const labelStyle = (index: number): React.CSSProperties => ({
        position: 'absolute',
        bottom: '10px',
        left: `${index * 25}px`,
        fontSize: '9px',
        color: '#000',
        transform: 'rotate(-90deg)',
        transformOrigin: 'bottom left',
        whiteSpace: 'nowrap'
    });

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>OPEN INTEREST/VALUE VS. DATE</div>

            <div style={chartWrapperStyle}>
                <div style={yAxisLabelStyle}>OPEN INTEREST/VALUE VS.</div>

                {/* Y-axis values */}
                <div style={{ ...yValueStyle, left: '15px', top: '30px' }}>40,000</div>
                <div style={{ ...yValueStyle, left: '15px', top: '115px' }}>30,000</div>
                <div style={{ ...yValueStyle, left: '15px', top: '200px' }}>20,000</div>
                <div style={{ ...yValueStyle, left: '15px', top: '285px' }}>10,000</div>
                <div style={{ ...yValueStyle, left: '42px', top: '340px' }}>0</div>

                <svg width="500" height="320" style={svgStyle}>
                    {/* Horizontal grid lines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="#ddd" strokeWidth="1" />
                    <line x1="0" y1="135" x2="500" y2="135" stroke="#ddd" strokeWidth="1" />
                    <line x1="0" y1="220" x2="500" y2="220" stroke="#ddd" strokeWidth="1" />
                    <line x1="0" y1="305" x2="500" y2="305" stroke="#000" strokeWidth="1" />

                    {/* Main horizontal line at 30,000 level */}
                    <line x1="0" y1="135" x2="500" y2="135" stroke="#000" strokeWidth="2" />

                    {/* Data line */}
                    <path
                        d={generatePath()}
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />

                    {/* Data points */}
                    {dataPoints.map((point, index) => (
                        <circle
                            key={index}
                            cx={point.x}
                            cy={point.y}
                            r="2.5"
                            fill="#000"
                        />
                    ))}
                </svg>

                {/* X-axis labels */}
                <div style={xLabelsStyle}>
                    {dateLabels.map((date, index) => (
                        <div
                            key={index}
                            style={labelStyle(index)}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default COTReportOpenInterestChart;