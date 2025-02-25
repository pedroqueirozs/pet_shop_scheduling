import { createNewSchedule } from "../../services/createNewSchedule.js";
import { currentDate } from "./dateFilter.js";

const form = document.querySelector("form");
const inputNameTutor = document.getElementById("name-tutor");
const inputNamePet = document.getElementById("name-pet");
const inputTelephone = document.getElementById("telephone");
const inputService = document.getElementById("service");
const selectAppointmentDate = document.getElementById(
  "select-appointment-date"
);
const inputDateTime = document.getElementById("date-time");

selectAppointmentDate.min = currentDate;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    //Gera um ID
    const id = new Date().getTime();
    const tutors_name = inputNameTutor.value;
    const name_of_the_animal = inputNamePet.value;
    const telephone = inputTelephone.value;
    const service = inputService.value;
    const when = selectAppointmentDate.value;
    const time = inputDateTime.value;

    await createNewSchedule({
      id,
      tutors_name,
      name_of_the_animal,
      telephone,
      service,
      when,
      time,
    });
    alert("Agendamento realizado com sucesso!");
    inputNameTutor.value = "";
    inputNamePet.value = "";
    inputTelephone.value = "";
    inputService.value = "";
    inputDateTime.value = "";
    selectAppointmentDate.value = currentDate;
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log("Erro ao registrar os dados no banco");
  }
};
