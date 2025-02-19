import { apiConfig } from "./api-config.js";

export async function fetchSchedules() {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    console.log("Dados encontrados com sucesso!")
    return data;
  } catch (error) {
    console.log("Não foi possível buscar os agendamentos");
  }
}
