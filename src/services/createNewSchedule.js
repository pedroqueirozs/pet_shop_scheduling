import { apiConfig } from "./apiConfig.js";

export async function createNewSchedule({
  id,
  tutors_name,
  name_of_the_animal,
  telephone,
  when,
  service,
  time,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify({
        id,
        tutors_name,
        name_of_the_animal,
        telephone,
        when,
        service,
        time,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}
