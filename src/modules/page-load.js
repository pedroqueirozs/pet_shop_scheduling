import { format } from "date-fns";
import { fetchSchedules } from "../services/search-for-aging.js";
import { schedulesShow } from "../modules/schedules/show.js";

const inputDate = document.getElementById("date");

document.addEventListener("DOMContentLoaded", () => {
  schedulesDay();
});

export async function schedulesDay() {
  const currentDate = format(new Date(), "yyyy-MM-dd");
  inputDate.value = currentDate;

  //Buscando os dados da API
  const allAppointments = await fetchSchedules();
  console.log(allAppointments);

  //Mostrar os dados da Api no Front
  schedulesShow(allAppointments);
}
