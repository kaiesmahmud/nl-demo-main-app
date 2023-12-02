<script>
	import { allUsersData } from './../../store/store.js';
    import Icon from '@iconify/svelte';
    console.log($allUsersData)
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl ">All Users</h1>
    {#if $allUsersData}
    <div class="flex flex-col gap-3 p-3">
        {#each $allUsersData as {user_id,user_email,user_fname,user_lname,user_img,user_order,user_phone,}}
            <div class="flex gap-3 border-b-2 border-red-500 pb-3">
                <div class=" w-1/3 md:w-auto flex items-center justify-center">
                    {#if user_img}
                    <div class="w-full flex items-center justify-center text-4xl">
                        <img src={user_img} alt={user_fname}>
                    </div>
                    {:else}
                    <div class="min-w-[80px] aspect-square bg-slate-200 rounded-full  flex items-center justify-center text-4xl">
                        <Icon icon="bi:person" />
                    </div>
                    {/if}
                </div>
                <div class="font-semibold text-xs md:text-sm flex flex-col gap-3 w-full p-1 justify-center">
                    <div class="flex md:items-center gap-3 justify-between flex-col md:flex-row">
                        <p class=" capitalize">Name: {user_fname} {user_lname}</p>
                        <p>Phone: {user_phone}</p>
                    </div>
                    <div class="flex md:items-center gap-3 justify-between flex-col md:flex-row">
                        <p>Email: {user_email}</p>
                        <p>Orders: {user_order}</p>
                    </div>
                </div>

             </div>
        {/each}

    </div>
    {/if}
</div>