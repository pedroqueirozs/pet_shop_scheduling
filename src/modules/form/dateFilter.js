import { format } from "date-fns";

export const dateFilter = document.getElementById("date-filter");
export const currentDate = format(new Date(), "yyyy-MM-dd");

dateFilter.value = currentDate;
dateFilter.min = currentDate;
