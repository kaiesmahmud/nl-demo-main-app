<script>
	import { allProductsData } from './../../store/store.js';
    import Icon from '@iconify/svelte';

</script>

<div>
    <div class="flex items-center justify-between py-2">
        <h1 class="font-bold text-xl md:text-2xl ">All Products</h1>
        <button class="px-3 py-1 md:px-5 bg-red-500 rounded text-xl flex items-center gap-3 text-white">
            <Icon icon="carbon:add-filled" />
            <p class="text-sm font-bold">Add Product</p>
        </button>
    </div>
    <!-- ======Add New Product======== -->
    <div class="pb-3 border-b-2 flex gap-3 w-full ">
        <input class="bg-slate-100 p-3  rounded w-full" type="text" placeholder="Search Product"/>
        <div class="flex gap-3 text-white">
            <!-- <button class="px-3 py-1 md:px-5 text-red-500 rounded">
                <Icon icon="maki:cross" />
            </button> -->
            <button class="px-3 py-1 md:px-5 bg-green-500 rounded text-xl flex items-center gap-3">
                <Icon icon="ic:baseline-search" />
                <p class="text-sm font-bold">Search</p>
            </button>
        </div>
    </div>

    <div class="flex flex-col gap-3">
        {#each $allProductsData as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
             <!-- content here -->
             <div class="p-2 bg-gray-100 shadow">
                <div class="flex flex-col md:flex-row items-center gap-2">
                    <div class="w-40">
                        <img src={p_img} alt="">
                    </div>
                    <div class="text-xs md:text-sm font-nunito ">
                        <div class="flex items-center justify-between py-2">
                            <div>
                                <p><span class="font-bold">ID: </span>{p_id}</p>
                                <p><span class="font-bold">Stock: </span>{p_stock}</p>
                            </div>
                            <div>
                                <p><span class="font-bold" >Price: </span>{p_price}</p>
                                <p><span class="font-bold" >Regular Price: </span>{p_reg_price}</p>
                            </div>

                        </div>
                        <p><span class="font-bold" >Name: </span>{p_name}</p>
                        <p><span class="font-bold" >Category: </span>{cat_name}</p>

                        <p class="py-2"><span class="font-bold" >URL: </span>{cat_id}/{p_url}</p>
                    </div>
                </div>
                <div class="flex gap-3 text-white py-3">
                    <button class="px-3 py-1 md:px-5 bg-red-500 rounded flex items-center gap-2">
                        <Icon icon="material-symbols-light:delete-outline" />
                        <p class="text-sm">Delete</p>
                    </button>
                    <button class="px-3 py-1 md:px-5 bg-slate-500 rounded text-xl flex items-center gap-2">
                        <Icon icon="carbon:edit" />
                        <p class="text-sm">update</p>
                    </button>
                </div>
             </div>
        {/each}
    </div>
</div> 