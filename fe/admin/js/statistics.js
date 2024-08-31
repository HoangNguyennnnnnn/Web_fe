document.addEventListener("DOMContentLoaded", function () {
    var maxRows = 6;
    var currentPage = 1;
    var totalPages = 0;
    var currentDataId = "data1";

    var tableBody = document.getElementById(currentDataId);
    var tableRows = tableBody.querySelectorAll("tr");

    // Tính totalPages khi trang web được tải lên
    var totalRows = tableRows.length;
    while (totalRows > 0) {
        totalPages++;
        totalRows -= maxRows;
    }

    // Hiển thị dữ liệu ban đầu
    showRows(currentPage);

    // Lắng nghe sự kiện khi thay đổi selectOption
    var selectOption = document.getElementById("selectOption");
    selectOption.addEventListener("change", function () {
        var selectedValue = parseInt(selectOption.value);
        if (selectedValue >= 1 && selectedValue <= 4) {
            var newDataId = "data" + selectedValue;
            if (newDataId !== currentDataId) {
                // Ẩn bảng hiện tại
                document.getElementById(currentDataId).classList.add("hidden");
                // Hiển thị bảng mới
                document.getElementById(newDataId).classList.remove("hidden");
                // Cập nhật currentPage và totalPages cho bảng mới
                currentPage = 1;
                currentDataId = newDataId;
                tableBody = document.getElementById(currentDataId);
                tableRows = tableBody.querySelectorAll("tr");
                totalPages = 0;
                totalRows = tableRows.length;
                while (totalRows > 0) {
                    totalPages++;
                    totalRows -= maxRows;
                }
                showRows(currentPage);
            }
        }
    });

    document.getElementById("previousButton").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showRows(currentPage);
        }
    });

    document.getElementById("nextButton").addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showRows(currentPage);
        }
    });

    function showRows(page) {
        var start = (page - 1) * maxRows;
        var end = start + maxRows;

        var i = 0;
        var row = tableBody.querySelector("tr");

        while (row) {
            if (i >= start && i < end) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
            row = row.nextElementSibling;
            i++;
        }

        var pageInfo = document.getElementById("pageInfo");
        pageInfo.textContent = "Trang " + page + "/" + totalPages;
    }
});
// Danh so va chuyen trang cho table2
document.addEventListener("DOMContentLoaded", function () {
    var tableRows = document.querySelectorAll(".TopSellingProduct tbody tr");
    var maxRows = 10;
    var currentPage = 1;

    function showRows(page) {
        var start = (page - 1) * maxRows;
        var end = start + maxRows;

        tableRows.forEach(function (row, index) {
            if (index >= start && index < end) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });

        var totalRows = tableRows.length;
        var totalPages = Math.ceil(totalRows / maxRows);

        var pageInfo = document.getElementById("pageInfo1");
        if (totalPages >= 1) {
            pageInfo.textContent = "Trang " + page + "/" + totalPages;
            pageInfo.style.display = "inline"; // Hiển thị thông tin trang
        } else {
            pageInfo.style.display = "none"; // Ẩn thông tin trang nếu chỉ có một trang
        }

        var previousButton = document.getElementById("previousButton1");
        var nextButton = document.getElementById("nextButton1");
    }

    showRows(currentPage);

    document.getElementById("previousButton1").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showRows(currentPage);
        }
    });

    document.getElementById("nextButton1").addEventListener("click", function () {
        var totalRows = tableRows.length;
        var totalPages = Math.ceil(totalRows / maxRows);

        if (currentPage < totalPages) {
            currentPage++;
            showRows(currentPage);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu từ phần tử HTML
    const combinedChartElem = document.getElementById('combinedChart');
    const ctxCombined = combinedChartElem.getContext('2d');

    // Lấy dữ liệu doanh thu
    const revenueDataDiv = document.getElementById('revenueData');
    const dailyRevenueData = JSON.parse(revenueDataDiv.querySelector('#dailyData').getAttribute('data-values'));
    const monthlyRevenueData = JSON.parse(revenueDataDiv.querySelector('#monthlyData').getAttribute('data-values'));
    const yearlyRevenueData = JSON.parse(revenueDataDiv.querySelector('#yearlyData').getAttribute('data-values'));

    // Lấy dữ liệu lợi nhuận
    const profitDataDiv = document.getElementById('profitData');
    const dailyProfitData = JSON.parse(profitDataDiv.querySelector('#dailyProfit').getAttribute('data-values'));
    const monthlyProfitData = JSON.parse(profitDataDiv.querySelector('#monthlyProfit').getAttribute('data-values'));
    const yearlyProfitData = JSON.parse(profitDataDiv.querySelector('#yearlyProfit').getAttribute('data-values'));

    // Thiết lập biểu đồ
    const combinedChart = new Chart(ctxCombined, {
        type: 'line',
        data: {
            labels: JSON.parse(revenueDataDiv.querySelector('#dailyData').getAttribute('data-labels')),
            datasets: [{
                label: 'Doanh thu',
                data: dailyRevenueData,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Lợi nhuận',
                data: dailyProfitData,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Lắng nghe sự kiện thay đổi lựa chọn
    document.getElementById('selectPeriod').addEventListener('change', function () {
        const selectedValue = this.value;
        let newData = [];
        let newLabels = [];
        if (selectedValue === 'daily') {
            newData = [dailyRevenueData, dailyProfitData];
            newLabels = JSON.parse(revenueDataDiv.querySelector('#dailyData').getAttribute('data-labels'));
        } else if (selectedValue === 'monthly') {
            newData = [monthlyRevenueData, monthlyProfitData];
            newLabels = JSON.parse(revenueDataDiv.querySelector('#monthlyData').getAttribute('data-labels'));
        } else if (selectedValue === 'yearly') {
            newData = [yearlyRevenueData, yearlyProfitData];
            newLabels = JSON.parse(revenueDataDiv.querySelector('#yearlyData').getAttribute('data-labels'));
        }
        combinedChart.data.datasets[0].data = newData[0];
        combinedChart.data.datasets[1].data = newData[1];
        combinedChart.data.labels = newLabels;
        combinedChart.update();
    });
});