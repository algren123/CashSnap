<script>
  import CardSection from "$lib/components/CardSection.svelte";
  import DataChart from "$lib/components/DataChart.svelte";

  export let data;

  export const { salary, otherIncome, housingType, housingCost, gas, electricity, water, internet, groceries,
    takeaways, carPayment, carInsurance, carFuel, publicTransport, phone, insurance, subscriptions, otherBills,
    creditCard, loans, entertainment, savings, investments, misc, notes, currency } = data.report;
</script>
<div class="bg-black text-white min-h-screen h-full text-center">
    <div class="pt-6">
        <a class="h1 font-bold text-center" href="/">CashSnap</a>
        <h2 class="h2 font-bold text-center mt-2">Monthly Financial Report</h2>
    </div>
    <div class="flex px-20 py-10 lg:px-80 gap-4 justify-center">
        <CardSection bg="variant-ghost" styles="px-10" sectionStyles="flex-wrap justify-center gap-10">
            <div class="bg-green-600 p-5 rounded-lg">
                <h3 class="h3 font-bold">Income - {currency}{salary + otherIncome}</h3>
                <h5 class="h5 font-bold">Salary - {currency}{salary}</h5>
                <h5 class="h5 font-bold">Other Income - {currency}{otherIncome}</h5>
            </div>
            <div class="bg-yellow-900 p-5 rounded-lg">
                <h3 class="h3 font-bold">Housing - {currency}{housingCost}</h3>
                <h5 class="h5 font-bold">Housing Type - {housingType}</h5>
            </div>
            <div class="bg-yellow-500 p-5 rounded-lg">
                <h3 class="h3 font-bold">Utilities - {currency}{gas + electricity + water + internet}</h3>
                <h5 class="h5 font-bold">Gas - {currency}{gas}</h5>
                <h5 class="h5 font-bold">Electricity - {currency}{electricity}</h5>
                <h5 class="h5 font-bold">Water - {currency}{water}</h5>
                <h5 class="h5 font-bold">Internet - {currency}{internet}</h5>
            </div>
            <div class="bg-purple-600 p-5 rounded-lg">
                <h3 class="h3 font-bold">Food - {currency}{groceries + takeaways}</h3>
                <h5 class="h5 font-bold">Groceries - {currency}{groceries}</h5>
                <h5 class="h5 font-bold">Takeaways - {currency}{takeaways}</h5>
            </div>
            <div class="bg-blue-600 p-5 rounded-lg">
                <h3 class="h3 font-bold">Transport - {currency}{carPayment + carInsurance + carFuel + publicTransport}</h3>
                <h5 class="h5 font-bold">Car Payment - {currency}{carPayment}</h5>
                <h5 class="h5 font-bold">Car Insurance - {currency}{carInsurance}</h5>
                <h5 class="h5 font-bold">Car Fuel - {currency}{carFuel}</h5>
                <h5 class="h5 font-bold">Public Transport - {currency}{publicTransport}</h5>
            </div>
            <div class="bg-orange-600 p-5 rounded-lg">
                <h3 class="h3 font-bold">Bills - {currency}{phone + subscriptions + otherIncome}</h3>
                <h5 class="h5 font-bold">Insurance - {currency}{insurance}</h5>
                <h5 class="h5 font-bold">Phone - {currency}{phone}</h5>
                <h5 class="h5 font-bold">Subscriptions - {currency}{subscriptions}</h5>
                <h5 class="h5 font-bold">Other - {currency}{otherBills}</h5>
            </div>
            <div class="bg-red-600 p-5 rounded-lg">
                <h3 class="h3 font-bold">Debts - {currency}{creditCard + loans}</h3>
                <h5 class="h5 font-bold">Credit Card - {currency}{creditCard}</h5>
                <h5 class="h5 font-bold">Loans - {currency}{loans}</h5>
            </div>
            <div class="bg-pink-600 p-5 rounded-lg flex flex-col place-content-evenly">
                <h3 class="h3 font-bold">Entertainment - {currency}{entertainment}</h3>
                <h3 class="h3 font-bold">Savings - {currency}{savings}</h3>
                <h3 class="h3 font-bold">Investments - {currency}{investments}</h3>
                <h3 class="h3 font-bold">Miscellaneous - {currency}{misc}</h3>
            </div>
            {#if notes}
                <h3 class="h3 font-bold">Notes:<p>{notes}</p></h3>
            {/if}
            <DataChart report={data.report} />
        </CardSection>
    </div>
</div>