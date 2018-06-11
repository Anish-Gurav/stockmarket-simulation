import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FinancialSnapshot } from '../../../state/AppState';
import * as moment from 'moment';

interface StockAreaChartProps {
    valueHistory: FinancialSnapshot[];
}

interface StockAreChardState {
}

export default class StockAreaChart extends React.PureComponent<StockAreaChartProps, StockAreChardState> {

    constructor(props: StockAreaChartProps) {
        super(props);
    }

    render() {
        const {valueHistory} = this.props;

        return (
            <ResponsiveContainer height={150} width="100%">
                <AreaChart data={valueHistory}>
                    <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3472F7" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#3472F7" stopOpacity={0.2}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis
                        dataKey={'date'}
                        interval={120}
                        tickFormatter={(tick) => moment(tick).format('HH:mm')}
                    />
                    <YAxis domain={[ 'auto', 'auto' ]}/>
                    <Area dataKey="value" stroke="#3472F7" fill="url(#colorStock)" isAnimationActive={false}/>
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
