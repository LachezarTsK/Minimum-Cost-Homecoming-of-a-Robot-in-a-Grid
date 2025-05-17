
/**
 * @param {number[]} startPosition
 * @param {number[]} homePosition
 * @param {number[]} rowCosts
 * @param {number[]} columnCosts
 * @return {number}
 */
var minCost = function (startPosition, homePosition, rowCosts, columnCosts) {
    const totalCostForRows = calculateCostForDirection(startPosition[0], homePosition[0], rowCosts);
    const totalCostForColumns = calculateCostForDirection(startPosition[1], homePosition[1], columnCosts);
    return totalCostForRows + totalCostForColumns;
};

/**
 * @param {number} start
 * @param {number} home
 * @param {number[]} directionCost
 * @return {number}
 */
function calculateCostForDirection(start, home, directionCost) {
    let cost = 0;
    let step = (start < home) ? 1 : -1;

    while (start !== home) {
        start += step;
        cost += directionCost[start];
    }
    return cost;
}
