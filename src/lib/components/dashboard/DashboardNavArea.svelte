<script>
    import Icon from '@iconify/svelte';

    let personalInfo = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            url:""
        },
        {
            name:"Edit Address",
            icon: "ion:location-outline",
            url:""
        },
    ]
    let myItems = [
        {
            name:"My Wishlists",
            icon: "tabler:heart",
            url:""
        },
        {
            name:"Compare Items",
            icon: "material-symbols-light:compare-arrows",
            url:""
        },
    ]
</script>
    <div class="w-full md:w-1/3 bg-black/10 rounded p-2 md:p-5">
        <h1 class="font-bold text-xl md:text-2xl">Hello ! User Name</h1>
        <p>Account Balance: <span class="text-violet-700 text-xl">$0.00</span> </p>
        <h2 class="text-lg font-semibold my-4">Order Details</h2>
        <p>Order Information</p>
        <div class="flex flex-col gap-3 p-3">
            <div class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                <div class="flex items-center gap-3">
                    <div class="text-xl md:text-2xl">
                        <Icon icon="lets-icons:order-light" />                    
                    </div>
                    <p class="font-light">My Order</p>
                </div>
                <div>
                    <Icon icon="ep:right" />
                </div>
            </div>
        </div>
        <h2 class="text-lg font-semibold my-3">My Account</h2>

        <p>Personal Information</p>
        <div class="flex flex-col gap-3 p-3" >
            {#each personalInfo as i}
                <div class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                    <div class="flex items-center gap-3">
                        <div class="text-xl md:text-2xl">
                            <Icon icon={i.icon} />
                        </div>
                        <p class="font-light">{i.name}</p>
                    </div>
                    <div>
                        <Icon icon="ep:right" />
                    </div>
                </div>
            {/each}
        </div>
        <p>Other Information</p>
        <div class="flex flex-col gap-3 p-3" >
            {#each myItems as i}
                <div class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                    <div class="flex items-center gap-3">
                        <div class="text-xl md:text-2xl">
                            <Icon icon={i.icon} />
                        </div>
                        <p class="font-light">{i.name}</p>
                    </div>
                    <div>
                        <Icon icon="ep:right" />
                    </div>
                </div>
            {/each}
        </div>
    </div>

