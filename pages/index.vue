<template>
  <div class="container">
    <div class="header py-4">
      <h1 class="text-center text-sm-left text-secondary">Shiphol NL Parking</h1>
    </div>
    <div class="d-flex">
      <form class="mb-5">
        <fieldset class="shadow border-dark">
          <legend><small>Find parking</small></legend>
          <div class="d-flex align-items-md-end justify-content-between flex-column flex-md-row">
            <div class="d-flex flex-column flex-sm-row">
              <DatePicker
                class="mr-sm-3 flex-grow-1"
                v-model="fromDate"
                label="From"
              />
              <DatePicker
                class="flex-grow-1"
                v-model="toDate"
                label="To"
                :minDate="minStartDate"
              />
            </div>
            <b-button class="mb-2 btn-primary" @click="handleSearch" :disabled="loading">
              Search parking
            </b-button>
          </div>
          <span v-if="error.length > 0" class="text-danger">{{error}}</span>
        </fieldset>
      </form>
    </div>
    <div v-if="Object.values(parkings).length > 0">
      <Card
        v-for="(parking, index) in parkings"
        :name="parking.merchant.name"
        :price="parking.price"
        :key="index"
        class="shadow-sm"
      />
    </div>
  </div>
</template>

<script>
import getParking from "@/api";
import Card from "@/components/card";
import DatePicker from "@/components/datePicker";
import formatDate from "@/helpers/Date.js";

export default {
  components: {
    Card,
    DatePicker
  },
  data() {
    return {
      fromDate: new Date(),
      toDate: new Date(),
      minStartDate: new Date(),
      parkings: {},
      loading: false,
      error: "",
    }
  },
  methods: {
    handleSearch() {
      const arrival = formatDate(this.fromDate);
      const departure = formatDate(this.toDate);
      this.error = "";
      this.loading = true;
      getParking({
        arrival,
        departure
      }).then(res => {
        if (Object.values(res.data?.available).length > 0) {
          this.parkings = res.data.available;
        } else {
          this.error = "No data available"
        }
        this.loading = false;

      })
      .catch(response => {
        this.loading = false;
        this.error = "Error occurred try later"
      })

    },
  },
  watch: {
    fromDate: function (val) {
      this.minStartDate = val;
      this.toDate = val;
    }
  }
}
</script>

<style scoped lang="scss">
form {
  width: 100%
}
fieldset {
  padding: 20px;
}

legend {
  width: auto;
  padding: 0 10px;
  box-shadow: #3b8070;
}
.button {
  background-color: var(--bs-primary);
}
.button:hover {
  background-color: var(--bs-hover);
}
.button:focus {
  background-color: var(--bs-primary);
}
h1 {
  color: var(--bs-secondary);
}
</style>
