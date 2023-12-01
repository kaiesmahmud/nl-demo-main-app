<script>
	import { subscriptions } from './../dummy_data/A_data.js';
	import { iconsImgs } from './../utils/images.js';

</script>

<div class="subgrid-two-item grid-common grid-c5">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Subscriptions</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="" />
        </button>
    </div>
    <div class="grid-c5-content">
        <div class="grid-items">
            {#each subscriptions as subscription}
                 <!-- content here -->
                 <div class="grid-item" key = {subscription.id}>
                     <div class="grid-item-l">
                         <div class="icon">
                             <img src={ iconsImgs.alert }  alt="" />
                         </div>
                         <p class="text text-silver-v1">{ subscription.title } <span>due { subscription.due_date }</span></p>
                     </div>
                     <div class="grid-item-r">
                         <span class="text-silver-v1">$ { subscription.amount }</span>
                     </div>
                 </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* grid c5 */
.grid-c5 .grid-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.grid-c5 .grid-item:last-child {
  margin-bottom: 0;
}
.grid-c5 .grid-item-l {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.grid-c5 .grid-item-l .icon {
  background-color: rgb(254, 30, 0, 0.15);
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-c5 .grid-item-l .icon img {
  width: 16px;
}
.grid-c5 .grid-item-l .text {
  color: var(--clr-silver-v1);
}
.grid-c5 .grid-item-l .text span {
  color: #8a8587;
  font-size: 15px;
}
.grid-c5 .grid-item-r span {
  font-weight: 600;
}

</style>