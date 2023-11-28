function calculateEOQ() {
    const demand = parseFloat(document.getElementById("demand").value);
    const setupCost = parseFloat(document.getElementById("setupCost").value);
    const holdingCost = parseFloat(document.getElementById("holdingCost").value);
    const unitCost = parseFloat(document.getElementById("unitCost").value);

    const EOQ = Math.sqrt((2 * demand * setupCost) / holdingCost);
    const Imax = EOQ;
    const averageInventory = EOQ / 2;
    const ordersPerPeriod = demand / EOQ;
    const annualHoldingCost = (EOQ / 2) * holdingCost;
    const totalInventoryCost = annualHoldingCost + setupCost;
    const unitCosts = unitCost * demand;
    const totalCost = totalInventoryCost + unitCosts;

    const modal = document.getElementById("myModal");
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = `
        <h2>Resultados: </h2>
        <ul>
            <li>Cantidad Óptima De Pedido (Q*): <span>${EOQ.toFixed(2)}</span></li>
            <li>Nivel Máximo de Inventario(Imax): <span>${Imax.toFixed(2)}</span></li>
            <li>Inventario Promedio: <span>${averageInventory.toFixed(2)}</span></li>
            <li>Pedidos Por Periodo (year): <span>${ordersPerPeriod.toFixed(2)}</span></li>
            <li>Costo Anual De Mantenimiento: <span>${annualHoldingCost.toFixed(2)}</span></li>
            <li>Costo Total De Inventario (Holding + setup): <span>${totalInventoryCost.toFixed(2)}</span></li>
            <li>Costo Por Unidad(PD): <span>${unitCosts.toFixed(2)}</span></li>
            <li>Costo Total (including units): <span>${totalCost.toFixed(2)}</span></li>
        </ul>
    `;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
