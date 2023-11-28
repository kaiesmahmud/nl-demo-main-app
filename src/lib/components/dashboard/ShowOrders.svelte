<script>
    import Icon from '@iconify/svelte';
    export let i; 

    let open = false ;
    const handleOpen = () => {
        open = !open
    }
</script>

         <!-- content here -->
         <button on:click={handleOpen} class="w-full p-3 bg-white/50 hover:bg-white flex items-center justify-between rounded">
             <div class="flex items-center gap-3">
                 <div class="text-xl md:text-2xl">
                     <Icon icon="fluent-mdl2:activate-orders" />
                 </div>
                 <p class="font-light">{i.name}</p>
             </div>
             <div>
                 {#if open}
                     <Icon icon="icon-park-outline:up" />
                 {:else}
                     <Icon icon="icon-park-outline:down" />
                 {/if}
             </div>
         </button>
