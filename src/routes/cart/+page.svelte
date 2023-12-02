<script>
    import Icon from '@iconify/svelte';

    import { allProductsData } from "../../lib/store/store";
    import PQuantity from '../../lib/components/P_Quantity.svelte';

    console.log( $allProductsData)
    let total = 0,checkOutItemCount = 0

    const increaseTotalPrice = (newItemPrice,qty) =>  {
        total +=newItemPrice 
        checkOutItemCount ++
    }
    const decreaseTotalPrice = (removeItemPrice,qty) =>{
        if(total == 0 && checkOutItemCount == 0){
            alert("No items in cart")
        }else{
            total -= removeItemPrice
            checkOutItemCount --

        }
    }
</script> 
 
 <p class="text-lg">My Cart</p>
 <div class="mb-10">
    <div class="flex flex-col gap-3">
        {#each $allProductsData as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
             <!-- content here -->
             <div class="p-2 bg-gray-100 shadow">
                <div class="flex flex-col md:flex-row items-center justify-between gap-2">
                    <div  class="flex flex-col md:flex-row items-center gap-2">
                        <div class="w-40">
                            <img src={p_img} alt="">
                        </div>
                        <div class="text-xs md:text-sm font-nunito ">
                            <div class="flex items-center justify-between py-2">
                                <div>
                                    <p><span class="font-bold">ID: </span>{p_id}</p>
                                    <!-- <p><span class="font-bold">Stock: </span>{p_stock}</p> -->
                                    <p class=" line-through opacity-50"><span class="font-bold" >Regular Price: </span>{p_reg_price}</p>
                                    <p><span class="font-bold " >Price: </span>{p_price}</p>
                                </div>
                                <div>
                                </div>
    
                            </div>
                            <p><span class="font-bold" >Name: </span>{p_name}</p>
                            <!-- <p><span class="font-bold" >Category: </span>{cat_name}</p> -->
    
                            <!-- <p class="py-2"><span class="font-bold" >URL: </span>{cat_id}/{p_url}</p> -->
                        </div>

                    </div>
                    <div>
                        <PQuantity 
                        {decreaseTotalPrice} 
                        {increaseTotalPrice } 
                        {p_price}
                        />
                        

                    </div>
                </div>
             </div>
        {/each}
    </div>
 </div>
 <div class="fixed bottom-0 w-full lg:w-[80%] flex justify-between  border p-5 max-w-[2000px] bg-red-100 rounded">
    <!-- <div class="flex items-center gap-1 md:gap-3">
        <p>My Cart</p>
    </div> -->
    <div class="flex items-center gap-1 md:gap-3 font-bold font-nunito text-red-500" >
        <div class="text-xl">
            <Icon icon="mdi:cart" />
        </div>
        <p>Total:</p>
        <p>${total}</p>

    </div>
    <button class="bg-red-500 px-3 py-1 md:px-5 md:py-3 rounded text-white font-bold">
        CheckOut
        ({checkOutItemCount})
    </button>
 </div>