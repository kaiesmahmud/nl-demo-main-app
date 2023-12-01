<script>
	import { iconsImgs } from './../utils/images.js';

</script>
<div class="subgrid-two-item grid-common grid-c7">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Loans</h3>
        <button class="grid-c-title-icon">
            <img src={iconsImgs.plus} alt=""/>
        </button>
    </div>
    <div class="grid-c7-content">
        <div class="progress-bar">
            <div class="percent">
                <svg>
                    <circle cx="105" cy="105" r="50"></circle>
                    <!-- {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */} -->
                </svg>
                <div class="number">
                    <h3>50<span>%</span></h3>
                </div>
            </div>
        </div>
        <ul class="data-list">
            <li class="data-item text-silver-v1">
                <span class="data-item-text">Savings Target</span>
                <span class="data-item-value">$ 500,000</span>
            </li>
            <li class="data-item text-silver-v1">
                <span class="data-item-text">Target Reached</span>
                <span class="data-item-value">$ 250,000</span>
            </li>
        </ul>
    </div>
</div>

<style>
    /* grid c7 */
.grid-c7-content {
  margin-top: -42px;
  margin-bottom: -128px;
}
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-bar .percent {
  position: relative;
}
.progress-bar svg {
  position: relative;
  width: 210px;
  height: 210px;
  transform: rotate(-90deg);
}
.progress-bar svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--clr-jet);
  stroke-width: 20;
  stroke-linecap: round;
}
.progress-bar svg circle:last-of-type {
  stroke-dasharray: 625px;
  stroke-dashoffset: calc(625px - (625px * var(--percent)) / 168);
  stroke: var(--clr-pumpkin);
}
.progress-bar .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.progress-bar .number h3 {
  font-weight: 200;
  font-size: 20px;
  font-weight: 500;
}
.progress-bar .number h3 span {
  font-size: 14px;
}

/* grid c7 */
.grid-c7-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.grid-c7-content .progress-bar {
  margin-left: -46px;
}
.grid-c7-content .data-list {
  margin-left: -20px;
}
.grid-c7-content .data-item {
  margin-bottom: 20px;
}
.grid-c7-content .data-item-value {
  margin-top: 8px;
  display: block;
  font-weight: 600;
}

</style>