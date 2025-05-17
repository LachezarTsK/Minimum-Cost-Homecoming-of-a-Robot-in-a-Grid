
class Solution {

    fun minCost(startPosition: IntArray, homePosition: IntArray, rowCosts: IntArray, columnCosts: IntArray): Int {
        val totalCostForRows = calculateCostForDirection(startPosition[0], homePosition[0], rowCosts)
        val totalCostForColumns = calculateCostForDirection(startPosition[1], homePosition[1], columnCosts)
        return totalCostForRows + totalCostForColumns
    }

    private fun calculateCostForDirection(start: Int, home: Int, directionCost: IntArray): Int {
        var cost = 0
        val step = if (start < home) 1 else -1

        var start = start
        while (start != home) {
            start += step
            cost += directionCost[start]
        }
        return cost
    }
}
