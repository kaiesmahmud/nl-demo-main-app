import { error } from '@sveltejs/kit';
import { categoryDetails } from '$lib/store/store.js';

export const load =async ({params})=> {
    if(params.category === "men-collection"){
        console.log("men-collection is found")
        categoryDetails.update((t)=>"men-collection")
    }
    else if(params.category === "women-collection"){
        console.log("women-collection is found")
        categoryDetails.set("women-collection")
        
    }
    else if(params.category === "custom-jewelry"){
        console.log("women-collection is found")
        categoryDetails.set("custom-jewelry")
        
    }
    else if(params.category === "special-offer"){
        console.log("women-collection is found")
        categoryDetails.set("custom-jewelry") 
        
    }
    else{
        categoryDetails.set(null)
        throw error(404, 'Not found');
    }
}