// export const ALL_CARS = "ALL_CARS"
// import axios from "axios"
// import moment from "moment"

// export const allCars = ({ jlhPenumpang, tanggal }) => async (dispatch) => {
//   // Promise
//   try {
//     const link_data = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')

//     if (capacity !== "" && date !== "") {
//       const data_cars = link_data.data.filter((item) => {
//         return parseInt(item.capacity) >= parseInt(item.jlhPenumpang) && moment(item.availableAt).format('MMMM Do YYYY, h:mm:ss') <= moment(tanggal).format('MMMM Do YYYY, h:mm:ss') && (item.available === true)
//       })
//       dispatch({
//         type: ALL_CARS,
//         payload: data_cars
//       })
//     } else if (jlhPenumpang !== "") {
//       const data_cars = link_data.data.filter((item) => {
//         return parseInt(item.capacity) >= parseInt(jlhPenumpang) && (item.available === true)
//       })
//       dispatch({
//         type: ALL_CARS,
//         payload: data_cars
//       })
//     } else if (tanggal !== "") {
//       const data_cars = link_data.data.filter((item) => {
//         return moment(item.availableAt).format('MMMM Do YYYY, h:mm:ss') <= moment(tanggal).format('MMMM Do YYYY, h:mm:ss') && (item.available === true)
//       })
//       dispatch({
//         type: ALL_CARS,
//         payload: data_cars
//       })
//     } else {
//       const data_cars = link_data.data.filter((item) => {
//         return (item.available === true)
//       })
//       dispatch({
//         type: ALL_CARS,
//         payload: data_cars
//       })
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }