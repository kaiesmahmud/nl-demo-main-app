<script>
	import { iconsImgs } from './../utils/images.js';
	import { transactions } from './../dummy_data/A_data.js';

</script>

<div class="grid-one-item grid-common grid-c2">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">All Transactions</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="no data"/>
        </button>
    </div>

    <div class="grid-content">
        <div class="grid-items">
            {#each transactions as transaction}
                 <!-- content here -->
                 <div class="grid-item" key = { transaction.id }>
                     <div class="grid-item-l">
                         <div class="avatar img-fit-cover">
                             <img src={ transaction.image } alt="" />
                         </div>
                         <p class="text">{ transaction.name } <span>{ transaction.date }</span></p>
                     </div>
                     <div class="grid-item-r">
                         <span class="text-scarlet">$ { transaction.amount }</span>
                     </div>
                 </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* grid c2 */
.grid-c2 .grid-item {
  display: flex;
}
.grid-c2 .grid-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
.grid-c2 .grid-item:last-child {
  margin-bottom: 0;
}
.grid-c2 .grid-item p {
  color: var(--clr-silver-v1);
}
.grid-c2 .grid-item-l .avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
}
.grid-c2 .grid-item-l {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.grid-c2 .grid-item-l .text {
  font-weight: 600;
}
.grid-c2 .grid-item-l span {
  display: block;
  font-weight: 400;
  margin-top: 4px;
  font-size: 15px;
  color: #8a8587;
}
.grid-c2 .grid-item-r span {
  font-weight: 500;
}

</style>