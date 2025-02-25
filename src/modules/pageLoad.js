import { fetchSchedules } from "../services/searchForAging.js";
import { schedulesShow } from "./schedules/show.js";
import { dateFilter } from "./form/dateFilter.js";

document.addEventListener("DOMContentLoaded", () => {
  schedulesDay();
});

export async function schedulesDay() {
  //Buscar os dados da API
  const allAppointments = await fetchSchedules();

  //Mostrar os dados da Api no Front
  schedulesShow(allAppointments, dateFilter.value);
}
