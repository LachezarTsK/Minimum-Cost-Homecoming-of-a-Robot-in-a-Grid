
package main

func minCost(startPosition []int, homePosition []int, rowCosts []int, columnCosts []int) int {
    totalCostForRows := calculateCostForDirection(startPosition[0], homePosition[0], rowCosts)
    totalCostForColumns := calculateCostForDirection(startPosition[1], homePosition[1], columnCosts)
    return totalCostForRows + totalCostForColumns
}

func calculateCostForDirection(start int, home int, directionCost []int) int {
    cost := 0
    step := 1
    if start > home {
        step = -1
    }

    for start != home {
        start += step
        cost += directionCost[start]
    }
    return cost
}
