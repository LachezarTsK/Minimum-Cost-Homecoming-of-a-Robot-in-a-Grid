
function minCost(startPosition: number[], homePosition: number[], rowCosts: number[], columnCosts: number[]): number {
    const totalCostForRows = calculateCostForDirection(startPosition[0], homePosition[0], rowCosts);
    const totalCostForColumns = calculateCostForDirection(startPosition[1], homePosition[1], columnCosts);
    return totalCostForRows + totalCostForColumns;
};

function calculateCostForDirection(start: number, home: number, directionCost: number[]): number {
    let cost = 0;
    let step = (start < home) ? 1 : -1;

    while (start !== home) {
        start += step;
        cost += directionCost[start];
    }
    return cost;
}
