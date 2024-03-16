export function obtainYearDifference(year){
    return new Date().getFullYear() - year;
}

export function calculateBrand(marca){
    let increment;
    
    switch (marca) {
        case "101":
            increment = 1.3;
            break;
        case "102":
            increment = 1.15;
            break;
        case "103":
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function calculatePlan(plan){
    return plan === "110" ? 1.2 : 1.5
}

export function formatCurrency(cantidad){
    return cantidad.toLocaleString('en-US', 
        { 
            style: 'currency',
            currency: 'EUR' 
        });
}
