import React from 'react';
import {
    AreaChart as RechartsAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface ChartData {
    month: string;
    value: number;
    highlight?: boolean;
}

interface AreaChartProps {
    data: ChartData[];
    title: string;
    highlightedValue?: string;
    highlightedMonth?: string;
    height?: number;
    className?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
    data,
    title,
    highlightedValue,
    highlightedMonth,
    className = ''
}) => {

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <p style={{ margin: '0 0 8px 0', fontWeight: '600', fontSize: '1.8rem' }}>{`${label}`}</p>
                    <p style={{ margin: '0', color: '#5D5FEF' }}>
                        {`${payload[0].value}%`}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div
            className={`area-chart-container ${className}`}
            style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px 20px 20px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                height: '345px',
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',
                border: '1px solid rgba(125, 124, 124, 0.176)'
            }}
            tabIndex={-1}
            onFocus={(e) => e.target.blur()}
        >
            <style jsx>{`
                * {
                    outline: none !important;
                }
                .area-chart-container {
                    border: 1px solid rgba(125, 124, 124, 0.176) !important;
                }
                .area-chart-container *,
                .area-chart-container svg,
                .area-chart-container svg *,
                .recharts-surface,
                .recharts-surface *,
                .recharts-wrapper,
                .recharts-wrapper *,
                .recharts-legend-wrapper,
                .recharts-legend-wrapper *,
                .recharts-cartesian-grid,
                .recharts-cartesian-grid *,
                .recharts-layer,
                .recharts-layer *,
                .recharts-area,
                .recharts-area * {
                    outline: none !important;
                    box-shadow: none !important;
                }
                .area-chart-container:focus,
                .area-chart-container *:focus,
                .area-chart-container svg:focus,
                .area-chart-container svg *:focus,
                .recharts-surface:focus,
                .recharts-surface *:focus,
                .recharts-wrapper:focus,
                .recharts-wrapper *:focus {
                    outline: none !important;
                    box-shadow: none !important;
                }
            `}</style>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                flexShrink: 0
            }}>
                <h3 style={{
                    margin: '0',
                    fontSize: '2.2rem',
                    fontWeight: '500',
                    color: '#333'
                }}>
                    {title}
                </h3>

                {/* Legend */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#000'
                        }}></div>
                        <span style={{ fontSize: '14px', color: '#666' }}>This Years</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#87CEEB'
                        }}></div>
                        <span style={{ fontSize: '14px', color: '#666' }}>Last Years</span>
                    </div>
                </div>
            </div>

            <div
                style={{ flex: 1, minHeight: 0, outline: 'none', border: 'none' }}
                tabIndex={-1}
                onFocus={(e) => e.target.blur()}
            >
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    style={{ outline: 'none', border: 'none' }}
                >
                    <RechartsAreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#9ba3e9" stopOpacity={0.9} />
                                <stop offset="60%" stopColor="#9ba3e9" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                            domain={[0, 100]}
                            ticks={[20, 40, 60, 80, 100]}
                            tickFormatter={(value) => `${value}%`}
                            dx={-20}
                            dy={30}
                        />

                        <Tooltip content={<CustomTooltip />} />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#87CEEB"
                            strokeWidth={1}
                            fill="url(#colorValue)"
                            dot={{
                                r: 4,
                                fill: 'transparent',
                                stroke: '#87CEEB',
                                strokeWidth: 2
                            }}
                            activeDot={{
                                r: 6,
                                fill: '#000',
                                stroke: '#fff',
                                strokeWidth: 2
                            }}
                        />
                    </RechartsAreaChart>
                </ResponsiveContainer>

                {/* Highlight value display */}
                {highlightedValue && highlightedMonth && (
                    <div style={{
                        position: 'absolute',
                        top: '700px;',
                        left: '52%',
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        zIndex: 10,
                        transform: 'translateX(-50%)'
                    }}>
                        {highlightedValue}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AreaChart; 