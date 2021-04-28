import axios from "axios";


export default function getParking({ arrival, departure }) {
  return axios.get("/api/ajax/locationSearchJSON/", {
    params: {
      location: "parkeren-schiphol",
      arrival,
      departure,
      arrivalTime: "12:00",
      departureTime: "12:00",
      sort_f: "price",
      sort_w: "asc"
    }
  })
}
