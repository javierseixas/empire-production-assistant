export function increaseArmyCost(variance: number) { // DOUBT should be a new parameter with the variance
    console.log("INCREASING_ARMY_COST");

    return {
        type: "INCREASE_ARMY_COST",
        payload: { // Should this be classes?
            variance: variance
        }
    }
}

export function decreaseArmyCost(variance: number) {
    console.log("DECREASING_ARMY_COST");

    return {
        type: "DECREASE_ARMY_COST",
        payload: { // Should this be classes?
            variance: - (variance)
        }
    }
}
