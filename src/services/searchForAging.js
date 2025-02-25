import { apiConfig } from "./apiConfig.js";

export async function fetchSchedules() {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Não foi possível buscar os agendamentos");
  }
}
