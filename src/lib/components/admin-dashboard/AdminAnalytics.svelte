<script>
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
    <h1 class="font-bold text-xl md:text-2xl ">Analytics</h1>
    <h1 class=" text-xl md:text-2xl ">All Analytics will Be shown Here</h1>
    <div class="flex flex-col md:flex-row gap-5">
        <div class="flex flex-col gap-4 p-3 md:p-5 text-start items-start w-1/2">
            {#each visitors as i}
            <div class=" font-bold text-xl flex justify-between items-center w-full border-b-2 my-2 border-slate-800">
                <p>
                    {i.country}
                </p>
                <p>
                    {i.visitors}
                </p>
            </div>
            {/each}
        </div>
        
    </div>
</div>