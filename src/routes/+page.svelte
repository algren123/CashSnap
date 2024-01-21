<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import CardSection from "$lib/components/CardSection.svelte";
    import { goto } from '$app/navigation';
    import { supabase } from '$lib/db';

    let currency: "£" | "$" | "€" = "£";

    // income
    let salary = 0;
    let otherIncome = 0;

    // housing
    let housingType: "renting" | "mortgage" | "other" = "renting"
    let housingCost = 0;

    // utilities
    let gas = 0;
    let electricity = 0;
    let water = 0;
    let internet = 0;

    // food
    let groceries = 0;
    let takeaways = 0;

    // transport
    let carPayment = 0;
    let carInsurance = 0;
    let carFuel = 0;
    let publicTransport = 0;

    // bills
    let phone = 0;
    let insurance = 0;
    let subscriptions = 0;
    let other = 0;

    // debts
    let creditCard = 0;
    let loans = 0;

    // entertainment
    let entertainment = 0;

    // savings
    let savings = 0;

    // investments
    let investments = 0;

    // misc
    let misc = 0;

    // notes
    let notes = "";

    async function addReport(report: IFormData) {
        let { data: dbReport, error } = await supabase.from("reports").insert(report).select().single();

        if (dbReport) {
            return dbReport;
        }

        console.error(error)
    }

    async function handleSubmit() {
        const data: IFormData = {
            currency,
            salary,
            otherIncome,
            housingType,
            housingCost,
            gas,
            electricity,
            water,
            internet,
            groceries,
            takeaways,
            carPayment,
            carInsurance,
            carFuel,
            publicTransport,
            phone,
            insurance,
            subscriptions,
            otherBills: other,
            creditCard,
            loans,
            entertainment,
            savings,
            investments,
            misc,
            notes
        }

        await addReport(data).then((createdReport) => {
            goto("/report/" + createdReport.id);
        })
    }
</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>CashSnap</title>
    <meta name="description" content="Effortlessly log income and expenses, and let CashSnap transform it into a sleek, easy-to-read report">
</head>
<div class="bg-black h-full text-white">
    <h1 class="h1 font-bold text-center p-10 flex justify-center items-center lg:items-start gap-3"><img src="/favicon.png" alt="CashSnap Logo" class="w-8 h-8 lg:w-14 lg:h-14" />CashSnap</h1>
    <h2 class="h2 font-bold text-slate-300 text-center lg:px-60 pb-12"> Effortlessly log income and expenses, and let CashSnap transform it into a sleek, easy-to-read report</h2>
    <form on:submit|preventDefault={handleSubmit} class="text-center">
        <div class="flex flex-wrap px-10 lg:px-80 gap-4 justify-center">
            <CardSection title="Monthly Income" bg="variant-ghost">
                <label>Salary
                    <input required class="input text-black px-2" name="salary" type="number" on:change={(e) => salary = Number(e.currentTarget.value)} />
                </label>
                <label>Other
                    <input class="input text-black px-2" name="other" type="number" on:change={(e) => otherIncome = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Housing" bg="variant-ghost-tertiary" styles="w-full md:w-auto">
                <RadioGroup class="text-black font-bold" rounded="rounded-container-token" color="text-white" flexDirection="flex-col">
                    <RadioItem bind:group={housingType} name="rent" value="renting">Renting</RadioItem>
                    <RadioItem bind:group={housingType} name="mortgage" value="mortgage">Mortgage</RadioItem>
                    <RadioItem bind:group={housingType} name="other" value="other">Other</RadioItem>
                </RadioGroup>
                <label class="flex flex-col items-center">Housing Cost
                    <input class="input text-black px-2" name="housingCost" type="number" on:change={(e) => housingCost = Number(e.currentTarget.value)} />
                </label>
            </CardSection>
            <CardSection title="Utilities" bg="variant-ghost-error">
                <label>Gas
                    <input class="input text-black px-2" name="gas" type="number" on:change={(e) => gas = Number(e.currentTarget.value)} />
                </label>
                <label>Electricity
                    <input class="input text-black px-2" name="electricity" type="number" on:change={(e) => electricity = Number(e.currentTarget.value)}/>
                </label>
                <label>Water
                    <input class="input text-black px-2" name="water" type="number" on:change={(e) => water = Number(e.currentTarget.value)}/>
                </label>
                <label>Internet
                    <input class="input text-black px-2" name="internet" type="number" on:change={(e) => internet = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Food" bg="variant-ghost-warning">
                <label>Groceries
                    <input class="input text-black px-2" name="groceries" type="number" on:change={(e) => groceries = Number(e.currentTarget.value)} />
                </label>
                <label>Takeaways
                    <input class="input text-black px-2" name="electricity" type="number" on:change={(e) => takeaways = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Transport" bg="variant-ghost-secondary">
                <label>Car Payment
                    <input class="input text-black px-2" name="carPayment" type="number" on:change={(e) => carPayment = Number(e.currentTarget.value)} />
                </label>
                <label>Car Insurance
                    <input class="input text-black px-2" name="carInsurance" type="number" on:change={(e) => carInsurance = Number(e.currentTarget.value)}/>
                </label>
                <label>Car Fuel
                    <input class="input text-black px-2" name="carFuel" type="number" on:change={(e) => carFuel = Number(e.currentTarget.value)}/>
                </label>
                <label>Public Transport
                    <input class="input text-black px-2" name="publicTransport" type="number" on:change={(e) => publicTransport = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Bills" bg="variant-ghost-success">
                <label>Phone
                    <input class="input text-black px-2" name="phone" type="number" on:change={(e) => phone = Number(e.currentTarget.value)} />
                </label>
                <label>Insurance
                    <input class="input text-black px-2" name="insurance" type="number" on:change={(e) => insurance = Number(e.currentTarget.value)}/>
                </label>
                <label>Subscriptions
                    <input class="input text-black px-2" name="subscriptions" type="number" on:change={(e) => subscriptions = Number(e.currentTarget.value)}/>
                </label>
                <label>Other
                    <input class="input text-black px-2" name="other" type="number" on:change={(e) => other = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Debts" bg="variant-ghost-error">
                <label>Credit Card
                    <input class="input text-black px-2" name="creditCard" type="number" on:change={(e) => creditCard = Number(e.currentTarget.value)} />
                </label>
                <label>Loans
                    <input class="input text-black px-2" name="loans" type="number" on:change={(e) => loans = Number(e.currentTarget.value)}/>
                </label>
            </CardSection>
            <CardSection title="Entertainment" bg="variant-ghost-primary">
                <label>Entertainment
                    <input class="input text-black px-2" name="entertainment" type="number" on:change={(e) => entertainment = Number(e.currentTarget.value)} />
                </label>
            </CardSection>
            <CardSection title="Savings" bg="variant-ghost">
                <label>Savings
                    <input class="input text-black px-2" name="savings" type="number" on:change={(e) => savings = Number(e.currentTarget.value)} />
                </label>
            </CardSection>
            <CardSection title="Investments" bg="variant-ghost">
                <label>Investments
                    <input class="input text-black px-2" name="investments" type="number" on:change={(e) => investments = Number(e.currentTarget.value)} />
                </label>
            </CardSection>
            <CardSection title="Misc" bg="variant-ghost-tertiary">
                <label>Misc
                    <input class="input text-black px-2" name="misc" type="number" on:change={(e) => misc = Number(e.currentTarget.value)} />
                </label>
            </CardSection>
            <CardSection title="Notes" bg="variant-ghost-error">
                <label>Notes
                    <textarea class="input text-black px-4 py-2" placeholder="Optional: An explanation of some of the costs or location" name="notes" on:change={(e) => notes = e.currentTarget.value}></textarea>
                </label>
            </CardSection>
        </div>
        <button type="submit" class="btn variant-ghost-success py-4 my-8">Generate Report</button>
    </form>
</div>