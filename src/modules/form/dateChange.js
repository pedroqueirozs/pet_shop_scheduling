import { dateFilter } from "./dateFilter.js";
import { schedulesShow } from "../schedules/show.js";
import { fetchSchedules } from "../../services/searchForAging.js";

dateFilter.onchange = async () => {
  const allAppointments = await fetchSchedules();
  schedulesShow(allAppointments, dateFilter.value);
};
