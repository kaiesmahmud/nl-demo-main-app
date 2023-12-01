<script>
	import A_Financial from './analytics/components/A_Financial.svelte';
	import A_Loans from './analytics/components/A_Loans.svelte';
	import A_Savings from './analytics/components/A_Savings.svelte';
	import A_Subscriptions from './analytics/components/A_Subscriptions.svelte';
	import A_Budget from './analytics/components/A_Budget.svelte';
	import A_Report from './analytics/components/A_Report.svelte';
	import A_Transactions from './analytics/components/A_Transactions.svelte';
	import A_Cards from './analytics/components/A_Cards.svelte';
    let visitors = [
        {
            country: "Netherland",
            visitors:231
        },
        {
            country: "USA",
            visitors:234
        },
        {
            country: "IceLand",
            visitors:152
        },
        {
            country: "Australia",
            visitors:765
        },
    ]
    
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl pb-3">Analytics</h1>
    <hr>
    <!-- <h1 class=" text-xl md:text-2xl ">All Analytics will Be shown Here</h1> -->
    <div>
        <div class="main-content-holder">
            <div class="content-grid-one">
                <A_Cards />
                <A_Transactions />
                <A_Report />
            </div>
            <div class="content-grid-two">
                <A_Budget />
                <div class="grid-two-item">
                  <div class="subgrid-two">
                    <A_Subscriptions />
                    <A_Savings />
                  </div>
                </div>
    
                <div class="grid-two-item">
                  <div class="subgrid-two">
                    <A_Loans />
                    <A_Financial />
                  </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

<style>
    /* main content holder */
.main-content-holder {
  display: grid;
  row-gap: 20px;
}
.content-grid-one {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}
.content-grid-two {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}

.subgrid-two {
  display: grid;
  row-gap: 20px;
  height: 100%;
}

@media screen and (max-width: 1200px) {
  .content-grid-one,
  .content-grid-two {
    column-gap: 12px;
  }
  .main-content-holder,
  .subgrid-two {
    row-gap: 12px;
  }
}

@media screen and (max-width: 992px) {
  .content-grid-one {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 12px;
  }
  .content-grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-grid-two .grid-two-item:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two {
    grid-template-columns: repeat(2, 1fr);
    height: 220px;
    column-gap: 12px;
  }
  .content-grid-two {
    row-gap: 12px;
  }
}

@media screen and (max-width: 768px) {
  .content-grid-one {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
  .content-grid-two {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
  .content-grid-two .grid-two-item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two .subgrid-two-item {
    height: 220px;
  }
}

</style>