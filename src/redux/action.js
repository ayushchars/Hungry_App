export const product = (food) => {
    return disptach => {
        disptach({
            type: "PRODUCT",
            payload: food
        })
    }
}
export const Seleced_product = (food) => {
    return disptach => {
        disptach({
            type: "SELECTED_PRODUCT",
            payload: food
        })
    }
}

