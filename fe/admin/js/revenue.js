
$(document).ready(function () {
    calculateRevenueAndProfit();
    calculateSummary();
    $("#dateType").change(function () {
        calculateRevenueAndProfit();
        calculateSummary();
    });

    function calculateRevenueAndProfit() {
        $("#reportTable tbody tr").each(function () {
            var costPrice = parseInt($(this).find(".costPrice").text());
            var sellingPrice = parseInt($(this).find(".sellingPrice").text());
            var quantitySold = parseInt($(this).find(".quantitySold").text());

            var revenue = sellingPrice * quantitySold;
            var profit = revenue - (costPrice * quantitySold);

            $(this).find(".revenue").text(revenue.toLocaleString());
            $(this).find(".profit").text(profit.toLocaleString());
        });
    }

    function calculateSummary() {
        var totalProductsSold = 0;
        var totalSalesValue = 0;
        var totalRevenue = 0;
        var totalProfit = 0;

        $("#reportTable tbody tr").each(function () {
            var costPrice = parseInt($(this).find(".costPrice").text());
            var sellingPrice = parseInt($(this).find(".sellingPrice").text());
            var quantitySold = parseInt($(this).find(".quantitySold").text());

            totalProductsSold += quantitySold;
            totalSalesValue += sellingPrice * quantitySold;
            totalRevenue += parseInt($(this).find(".revenue").text().replace(/\D/g, ''));
            totalProfit += parseInt($(this).find(".profit").text().replace(/\D/g, ''));
        });

        $(".totalProductsSold").text(totalProductsSold.toLocaleString());
        $(".totalSalesValue").text(totalSalesValue.toLocaleString());
        $(".totalRevenue").text(totalRevenue.toLocaleString());
        $(".totalProfit").text(totalProfit.toLocaleString());
    }
});
