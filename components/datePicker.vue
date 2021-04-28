<template>
  <div>
    <label :for="label" class="mb-0"><small>{{label}}</small></label>
    <b-form-datepicker
      :id="label"
      :value="value"
      @input="$emit('input', $event)"
      class="mb-2"
      :max="maxData"
      :min="minDate"
      :value-as-date="true"
      placeholder="Date is not selected"
      :hide-header="true"
      locale="en-AE"
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: [Date, String],
    label: String,
    minDate: {
      type: Date,
      default() {
        return new Date();
      }
    },
    maxData: {
      type: Date,
      default: null,
    }
  },
}
</script>
