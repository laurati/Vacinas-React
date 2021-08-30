import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { Chart } from "react-google-charts";

const Graficos = () => {
    return (
        <>
            <NavBar />
            <Chart
                width={600}
                height={'300px'}
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                data={[
                    ['From', 'To', 'Weight'],
                    ['Brazil', 'Portugal', 5],
                    ['Brazil', 'France', 1],
                    ['Brazil', 'Spain', 1],
                    ['Brazil', 'England', 1],
                    ['Canada', 'Portugal', 1],
                    ['Canada', 'France', 5],
                    ['Canada', 'England', 1],
                    ['Mexico', 'Portugal', 1],
                    ['Mexico', 'France', 1],
                    ['Mexico', 'Spain', 5],
                    ['Mexico', 'England', 1],
                    ['USA', 'Portugal', 1],
                    ['USA', 'France', 1],
                    ['USA', 'Spain', 1],
                    ['USA', 'England', 5],
                    ['Portugal', 'Angola', 2],
                    ['Portugal', 'Senegal', 1],
                    ['Portugal', 'Morocco', 1],
                    ['Portugal', 'South Africa', 3],
                    ['France', 'Angola', 1],
                    ['France', 'Senegal', 3],
                    ['France', 'Mali', 3],
                    ['France', 'Morocco', 3],
                    ['France', 'South Africa', 1],
                    ['Spain', 'Senegal', 1],
                    ['Spain', 'Morocco', 3],
                    ['Spain', 'South Africa', 1],
                    ['England', 'Angola', 1],
                    ['England', 'Senegal', 1],
                    ['England', 'Morocco', 2],
                    ['England', 'South Africa', 7],
                    ['South Africa', 'China', 5],
                    ['South Africa', 'India', 1],
                    ['South Africa', 'Japan', 3],
                    ['Angola', 'China', 5],
                    ['Angola', 'India', 1],
                    ['Angola', 'Japan', 3],
                    ['Senegal', 'China', 5],
                    ['Senegal', 'India', 1],
                    ['Senegal', 'Japan', 3],
                    ['Mali', 'China', 5],
                    ['Mali', 'India', 1],
                    ['Mali', 'Japan', 3],
                    ['Morocco', 'China', 5],
                    ['Morocco', 'India', 1],
                    ['Morocco', 'Japan', 3],
                ]}
                rootProps={{ 'data-testid': '1' }}
            />

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350],
                ]}
                options={{
                    // Material design options
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />


        </>
    )
}

export default Graficos