<script>
	import { iconsImgs } from './../utils/images.js';

</script>


<div class="grid-one-item grid-common grid-c1">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Cards</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="no datas"/>
        </button>
    </div>
    <div class="grid-c1-content">
        <p>Balance</p>
        <div class="lg-value">$ 22,000</div>
        <div class="card-wrapper">
            <span class="card-pin-hidden">**** **** **** </span>
            <span>1234</span>
        </div>
        <div class="card-logo-wrapper">
            <div>
                <p class="text text-silver-v1 expiry-text">Expires</p>
                <p class="text text-sm text-white">12/22</p>
            </div>
            <div class="card-logo">
                <div class="logo-shape1"></div>
                <div class="logo-shape2"></div>
            </div>
        </div>
    </div>
</div>

<style>
    /* grid c1 */
.grid-c1 {
  display: flex;
  flex-direction: column;
}
.grid-c1-content {
  background: linear-gradient(
      114.07deg,
      rgba(66, 59, 55, 0.6) 3.49%,
      rgba(66, 59, 55, 0) 34.7%
    ),
    linear-gradient(138.58deg, rgba(59, 43, 30, 0.37) 43.56%, #fea767 112.68%);
  flex: 1;
  border-radius: 10px;
  padding: 16px;
}
.grid-c1-content .lg-value {
  margin-top: 8px;
  margin-bottom: 16px;
  color: #c7c4c6;
}
.grid-c1-content .expiry-text {
  margin-bottom: 6px;
}
.grid-c1-content .card-wrapper {
  display: flex;
}
.grid-c1-content .card-pin-hidden {
  font-size: 32px;
  margin-right: 8px;
}
.grid-c1-content span {
  color: #8a8587;
}
.grid-c1 .card-logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.grid-c1 .card-logo {
  display: flex;
}
.grid-c1 .logo-shape1,
.grid-c1 .logo-shape2 {
  width: 36px;
  height: 36px;
  border-radius: 100%;
}
.grid-c1 .logo-shape1 {
  background-color: var(--clr-scarlet-v1);
  margin-right: -15px;
  z-index: 0;
}
.grid-c1 .logo-shape2 {
  background-color: var(--clr-yellow);
}

@media screen and (max-width: 768px) {
  .grid-c1 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>