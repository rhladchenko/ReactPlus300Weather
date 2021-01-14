import _ from 'lodash';
import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine,
} from 'react-sparklines';

const average = (data) => {
    return _.round(_.sum(data) / data.length);
};

const Chart = ({ width, height, data, color, units }) => {
    return (
        <div>
            <Sparklines width={width} height={height} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine color={color} />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    );
};

export default Chart;
