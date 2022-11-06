'use strict';
$(document).ready(function() {
    // pageview and prod sale end
    var chart = new Chartist.Pie('#tot-rev-chart', {
        series: [11, 10]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    // deal-analytic-chart
    var chart = AmCharts.makeChart("deal-analytic-chart", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "gridAlpha": 0,
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 8,
            "hideBulletsCount": 50,
            "lineThickness": 3,
            "lineColor": "#e95753",
            "title": "Кол. импорта (кг*шт)",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "dataProvider": [{
            "date": "2013-01-15",
            "market1": 71,
            "market2": 75
        },{
            "date": "2013-01-16",
            "market1": 71,
            "market2": 75
        }, {
            "date": "2013-01-17",
            "market1": 80,
            "market2": 84
        }, {
            "date": "2013-01-18",
            "market1": 78,
            "market2": 83
        }, {
            "date": "2013-01-19",
            "market1": 85,
            "market2": 88
        }, {
            "date": "2013-01-20",
            "market1": 87,
            "market2": 85
        }, {
            "date": "2013-01-21",
            "market1": 97,
            "market2": 88
        }, {
            "date": "2013-01-22",
            "market1": 93,
            "market2": 88
        }, {
            "date": "2013-01-23",
            "market1": 85,
            "market2": 80
        }, {
            "date": "2013-01-24",
            "market1": 90,
            "market2": 85
        }]
    });

    // allocation map start
    var chart = AmCharts.makeChart("sale-diff", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "fontSize": 0,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }],
        "graphs": [{
            "id": "g3",
            "valueAxis": "v1",
            "lineColor": "#2ed8b6",
            "fillColors": "#2ed8b6",
            "fillAlphas": 0.3,
            "type": "column",
            "title": "Actual Sales",
            "valueField": "sales2",
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#2ed8b6",
            "fillColors": "#2ed8b6",
            "fillAlphas": 1,
            "type": "column",
            "title": "Target Sales",
            "valueField": "sales1",
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "gridAlpha": 0,
            "minorGridEnabled": true,
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-17",
            "sales1": 4,
            "sales2": 6
        }, {
            "date": "2013-01-18",
            "sales1": 5,
            "sales2": 2
        }, {
            "date": "2013-01-19",
            "sales1": 8,
            "sales2": 9
        }, {
            "date": "2013-01-20",
            "sales1": 9,
            "sales2": 6
        }]
    });
});


