<script>
	import { showDashboardBodyTopic } from './../../store/store.js';
    import Icon from '@iconify/svelte';

    let personalInfo = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            show:"my-account"
        },
        {
            name:"Edit Address",
            icon: "ion:location-outline",
            show:"edit-address"
        },
    ]
    let myItems = [
        {
            name:"My Wishlists",
            icon: "tabler:heart",
            show:"my-wishlists"
        },
        {
            name:"Compare Items",
            icon: "material-symbols-light:compare-arrows",
            show:"compare-items"
        },
    ]
    let showArea = [
        "my-order",
        "my-account",
        "edit-address",
        "my-wishlists",
        "compare-items",
    ];
    const handleChangeDasBody = (arg) => {
        showDashboardBodyTopic.set(arg)
        console.log(arg)
    }
</script>
    <div class="w-full md:w-1/3 bg-black/10 rounded p-2 md:p-5">
        <h1 class="font-bold text-xl md:text-2xl">Hello ! User Name</h1>
        <p>Account Balance: <span class="text-violet-700 text-xl">$0.00</span> </p>
        <h2 class="text-lg font-semibold my-4">Order Details</h2>
        <p>Order Information</p>
        <div class="flex flex-col gap-3 p-3">
            <button on:click={()=>handleChangeDasBody("my-order")} class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                <div class="flex items-center gap-3">
                    <div class="text-xl md:text-2xl">
                        <Icon icon="lets-icons:order-light" />                    
                    </div>
                    <p class="font-light">My Order</p>
                </div>
                <div>
                    <Icon icon="ep:right" />
                </div>
            </button>
        </div>
        <h2 class="text-lg font-semibold my-3">My Account</h2>

        <p>Personal Information</p>
        <div class="flex flex-col gap-3 p-3" >
            {#each personalInfo as i}
                <button on:click={()=>handleChangeDasBody(i.show)} class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                    <div class="flex items-center gap-3">
                        <div class="text-xl md:text-2xl">
                            <Icon icon={i.icon} />
                        </div>
                        <p class="font-light">{i.name}</p>
                    </div>
                    <div>
                        <Icon icon="ep:right" />
                    </div>
                </button>
            {/each}
        </div>
        <p>Other Information</p>
        <div class="flex flex-col gap-3 p-3" >
            {#each myItems as i}
                <button on:click={()=>handleChangeDasBody(i.show)} class="p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
                    <div class="flex items-center gap-3">
                        <div class="text-xl md:text-2xl">
                            <Icon icon={i.icon} />
                        </div>
                        <p class="font-light">{i.name}</p>
                    </div>
                    <div>
                        <Icon icon="ep:right" />
                    </div>
                </button>
            {/each}
        </div>
    </div>

