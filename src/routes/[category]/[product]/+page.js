import {  redirect } from '@sveltejs/kit';
import { product_url } from '../../../lib/store/store.js';
import { changeProductURL } from '../../../lib/function/changeProductURL.js';

export const load =async ({params})=> {
    if(params.product){
        // product_url.set(params.product)
        changeProductURL(params.product)
    }else{
       throw redirect(300,"/")
    }
    // console.log(params.product)
    // console.log(params.category)
}