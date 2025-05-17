
public class Solution {

    public int minCost(int[] startPosition, int[] homePosition, int[] rowCosts, int[] columnCosts) {
        int totalCostForRows = calculateCostForDirection(startPosition[0], homePosition[0], rowCosts);
        int totalCostForColumns = calculateCostForDirection(startPosition[1], homePosition[1], columnCosts);
        return totalCostForRows + totalCostForColumns;
    }

    private int calculateCostForDirection(int start, int home, int[] directionCost) {
        int cost = 0;
        int step = (start < home) ? 1 : -1;

        while (start != home) {
            start += step;
            cost += directionCost[start];
        }
        return cost;
    }
}
