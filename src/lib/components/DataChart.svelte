<script>
    // @ts-ignore
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import { isMobile } from '$lib/helpers';

    fcRoot(FusionCharts, Charts, FusionTheme);

    export let report;

    const { salary, otherIncome, housingCost, gas, electricity, water, internet, groceries,
        takeaways, carPayment, carInsurance, carFuel, publicTransport, phone, insurance, subscriptions, otherBills,
        creditCard, loans, entertainment, savings, misc, currency } = report;

    const totalDataSource = {
        "chart": {
            "caption": "Total",
            "theme": "fusion",
            "labelFontColor": "#FFFFFF",
            "bgColor": "#0E121D",
            "bgAlpha": "100",
            "showBorder": "0",
            "showValues": "1",
            "showPercentInTooltip": "0",
            "numberPrefix": currency,
            "showLegend": "0",
        },
        "data": [{
            "label": "Savings",
            "value": savings
        }, {
            "label": "Outgoing",
            "value": housingCost + gas + electricity + water + internet + groceries + takeaways + carPayment + carInsurance + carFuel + publicTransport + insurance + phone + subscriptions + otherBills + creditCard + loans + entertainment + misc
        }, {
            "label": "Remaining",
            "value": (salary + otherIncome) - (housingCost + gas + electricity + water + internet + groceries + takeaways + carPayment + carInsurance + carFuel + publicTransport + insurance + phone + subscriptions + otherBills + creditCard + loans + entertainment + misc)
        }]
    }

    const totalChartConfig = {
        type: 'doughnut2d',
        width: isMobile(navigator) ? '350' : '500',
        height: isMobile(navigator) ? '300' : '300',
        renderAt: 'chart-container',
        dataSource: totalDataSource
    };

    const outgoingDataSource = {
        "chart": {
          "caption": "Outgoing Chart",
          "theme": "fusion",
          "labelFontColor": "#FFFFFF",
          "bgColor": "#0E121D",
          "bgAlpha": "100",
          "showBorder": "0",
          "showValues": "1",
          "showPercentInTooltip": "0",
          "numberPrefix": currency,
          "showLegend": "0",
        },
        "data": [{
          "label": "Housing",
          "value": housingCost
        }, {
          "label": "Utilities",
          "value": gas + electricity + water + internet
        }, {
          "label": "Food",
          "value": groceries + takeaways
        }, {
          "label": "Transport",
          "value": carPayment + carInsurance + carFuel + publicTransport
        }, {
          "label": "Bills",
          "value": insurance + phone + subscriptions + otherBills
        }, {
          "label": "Debts",
          "value": creditCard + loans
        }, {
          "label": "Entertainment",
          "value": entertainment
        }, 
        {
          "label": "Savings",
          "value": savings
        },
        {
          "label": "Miscellaneous",
          "value": misc
        }]
    }
    
    const outgoingChartConfig = {
        type: 'doughnut2d',
        width: isMobile(navigator) ? '350' : '500',
        height: isMobile(navigator) ? '300' : '300',
        renderAt: 'chart-container',
        dataSource: outgoingDataSource
    }
</script>

<div id="chart-container" class="flex flex-col md:flex-row place-content-evenly w-full mt-10">
    <SvelteFC {...totalChartConfig} />
    <SvelteFC {...outgoingChartConfig} />
</div>
