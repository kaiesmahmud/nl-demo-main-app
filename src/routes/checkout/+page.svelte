<script>
	import { fetchCartData } from './../../lib/function/fetchCartData.js';
	import { getTotalAmount, productTotalPrice } from './../../lib/function/totalAmount.js';
    import Icon from "@iconify/svelte";
    import { myCartData } from "../../lib/store/store";
    import { onMount } from 'svelte';

    onMount(()=>{
        fetchCartData();
    })

    const confirmorder = () => alert("Your Order confirmed Successfully")
</script>

<section class="">
    <p class="text-lg p-5 font-bold ">My Cart</p>
    <div class="w-full flex items-center flex-col md:flex-row md:items-start p-5 gap-5">
        <div class="order-2 md:order-1 w-full lg:w-2/3">
            {#if $myCartData.length == 0}
                    <h1>No Products Selected</h1>
            {/if}
            <div class="flex flex-col gap-3 w-full ">
                {#each $myCartData as {p_id,p_name,p_quantity,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
                    <div class="p-2 bg-white shadow rounded">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-2">
                            <div  class="flex flex-col md:flex-row items-center gap-2">
                                <div class="w-40">
                                    <img src={p_img} alt="">
                                </div>
                                <div class="text-xs md:text-sm font-nunito ">
                                    <p><span class="font-bold" >Name: </span>{p_name}</p>
                                    <p><span class="font-bold">ID: </span>{p_id}</p>
                                    <div class="flex items-center justify-between py-2">
                                        <div>
                                            <p><span class="font-bold " >Price: </span>${p_price}</p>
                                            <p><span class="font-bold " >Quantity: </span>{p_quantity}</p>
                                            <hr>
                                            <p><span class="font-bold " >Subtotal: </span>${productTotalPrice(p_price,p_quantity)}</p>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="order-1 md:order-2 w-full lg:w-1/3   flex flex-col gap-5 border p-5 shadow-lg rounded">
            <p class="font-bold text-xl">My Cart</p>
            <hr>
            <div class="flex items-center gap-1 md:gap-3 font-bold font-nunito text-red-500" >
              <div class="text-xl">
                  <Icon icon="mdi:cart" />
              </div>
              <p>Total:</p>
              <p>${getTotalAmount($myCartData)}</p>
            </div>
            <div>
                <button on:click={confirmorder} class="bg-green-800 text-green-100 font-bold p-3  rounded hover:bg-green-700 hover:text-black/80 transition-all ease-in">Confirm Order</button>
            </div>
       </div>
    </div>
</section>