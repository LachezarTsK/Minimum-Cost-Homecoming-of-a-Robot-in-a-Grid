
using System;

public class Solution
{
    public int MinCost(int[] startPosition, int[] homePosition, int[] rowCosts, int[] columnCosts)
    {
        int totalCostForRows = CalculateCostForDirection(startPosition[0], homePosition[0], rowCosts);
        int totalCostForColumns = CalculateCostForDirection(startPosition[1], homePosition[1], columnCosts);
        return totalCostForRows + totalCostForColumns;
    }

    private int CalculateCostForDirection(int start, int home, int[] directionCost)
    {
        int cost = 0;
        int step = (start < home) ? 1 : -1;

        while (start != home)
        {
            start += step;
            cost += directionCost[start];
        }
        return cost;
    }
}
