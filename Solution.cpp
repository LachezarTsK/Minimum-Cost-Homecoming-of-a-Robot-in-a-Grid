
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    int minCost(const vector<int>& startPosition, const vector<int>& homePosition,
                const vector<int>& rowCosts, const vector<int>& columnCosts) const {
        int totalCostForRows = calculateCostForDirection(startPosition[0], homePosition[0], rowCosts);
        int totalCostForColumns = calculateCostForDirection(startPosition[1], homePosition[1], columnCosts);
        return totalCostForRows + totalCostForColumns;
    }

private:
    int calculateCostForDirection(int start, int home, span<const int> directionCost) const {
        int cost = 0;
        int step = (start < home) ? 1 : -1;

        while (start != home) {
            start += step;
            cost += directionCost[start];
        }
        return cost;
    }
};
