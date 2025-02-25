import { apiConfig } from "./apiConfig";
export async function removeSchedule({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento!");
  }
}
