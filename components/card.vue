<template>
  <b-card
    class="mb-2"
  >
    <div class="d-flex justify-content-between flex-column flex-sm-row align-items-center align-items-sm-baseline">
      <span class="text-secondary font-weight-bold text-center text-break m-0">{{name}}</span>
      <div class="price text-primary font-weight-bold"><span>{{currency}}</span>&nbsp;<span>{{priceValue}}</span></div>
    </div>

  </b-card>
</template>

<script>
  export default {
    name: "Card",
    props: {
      name: String,
      price: {
        type: String,
        default: "0,00"
      },
      currency: {
        type: String,
        default: "EUR",
      }
    },
    computed: {
      priceValue() {
        if (!this.price) {
          return "0,00";
        }
        return this.price.replace(/\./g, ",");
      }
    }
  }
</script>
<style scoped>
.price {
  min-width: 100px;
}
</style>
