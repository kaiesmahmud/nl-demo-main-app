<script>
    import { allProductsData, product_url } from "../../../lib/store/store";
    
    const product = $allProductsData.filter(p=> p.p_url == $product_url)[0];
    console.log(product)
    const {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock} = product;
</script>

Page for product {$product_url}
<section class="flex items-center justify-center">
    <div class="w-full  p-2 rounded bg-red-100 flex gap-5 justify-center ">
        <div class="w-full md:w-1/2 overflow-hidden rounded">
            <img class="w-full" src={p_img} alt={p_name}>
        </div>
        <div class="w-full md:w-1/2 py-5 md:py-10 font-sans text-sm flex gap-3 flex-col">
            <h1 class="text-xl font-semibold">{p_name}</h1>
            <p>Regular Price: <span class=" line-through">${p_reg_price}</span></p>
            <p>Offer Price: ${p_price}</p>
            <p>Type: {p_type}</p>
            <p>Category: {cat_name}</p>
            <p>Description:</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum perspiciatis harum, mollitia quae animi, nobis sit asperiores repellat dolorum aliquid suscipit aperiam velit nam similique temporibus odit ullam magnam?</p>
        </div>
    </div>
</section>