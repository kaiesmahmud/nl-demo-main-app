<script>
    import { showDashboardBodyTopic } from "../../store/store";

    let showArea = [
        "my-order",
        "my-account",
        "edit-address",
        "my-wishlists",
        "compare-items",
    ]
    
</script>
<div class="w-full md:w-2/3 bg-black/10 rounded p-2 md:p-5">
    {#if $showDashboardBodyTopic === "my-order"}
         <h1 class="text-xl font-bold">My Order</h1>
    {/if}
    {#if $showDashboardBodyTopic === "my-account"}
         <h1 class="text-xl font-bold capitalize">my-account</h1>
    {/if}
    {#if $showDashboardBodyTopic === "edit-address"}
         <h1 class="text-xl font-bold capitalize">edit-address</h1>
    {/if}
    {#if $showDashboardBodyTopic === "my-wishlists"}
         <h1 class="text-xl font-bold capitalize">my-wishlists</h1>
    {/if}
    {#if $showDashboardBodyTopic === "compare-items"}
         <h1 class="text-xl font-bold capitalize">compare-items</h1>
    {/if}
</div>