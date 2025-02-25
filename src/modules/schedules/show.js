//Selecionar as seções: Manhã, Tarde, Noite
const schedulesListMorning = document.querySelector(".schedulesListMorning");
const schedulesListAfternoon = document.querySelector(
  ".schedulesListAfternoon"
);
const schedulesListNight = document.querySelector(".schedulesListNight");

export function schedulesShow(schedules, selectedDate) {
  try {
    schedulesListMorning.innerHTML = "";
    schedulesListAfternoon.innerHTML = "  ";
    schedulesListNight.innerHTML = "";

    schedules.forEach((schedule) => {
      //Essas são as variaveis do corpo do Periodo.
      const description = document.createElement("li");
      description.setAttribute("data-id", schedule.id);

      const descriptionItem = document.createElement("div");
      descriptionItem.classList.add("schedule");

      const scheduleTime = document.createElement("h3");
      scheduleTime.textContent = schedule.time;

      const petAndOwner = document.createElement("div");
      petAndOwner.classList.add("pet-and-owner");

      const pet = document.createElement("h3");
      pet.classList.add("pet-and-owner");
      pet.textContent = schedule.name_of_the_animal;

      const tutorsName = document.createElement("span");
      tutorsName.classList.add("owner");
      tutorsName.textContent = ` / ${schedule.tutors_name}`;

      const service = document.createElement("span");
      service.textContent = schedule.service;

      const removeSchedule = document.createElement("span");
      removeSchedule.classList.add("remove-schedule");
      removeSchedule.textContent = "Remover agendamento";

      const hour = schedule.time;
      const appointmentDate = schedule.when;

      if (hour >= "08" && hour <= "11" && selectedDate === appointmentDate) {
        createPeriodHtml(
          pet,
          tutorsName,
          scheduleTime,
          petAndOwner,
          descriptionItem,
          service,
          removeSchedule,
          schedulesListMorning,
          description
        );
      } else if (
        hour >= "12" &&
        hour <= "18" &&
        selectedDate === appointmentDate
      ) {
        createPeriodHtml(
          pet,
          tutorsName,
          scheduleTime,
          petAndOwner,
          descriptionItem,
          service,
          removeSchedule,
          schedulesListAfternoon,
          description
        );
      } else if (
        hour >= "18" &&
        hour <= "22" &&
        selectedDate === appointmentDate
      ) {
        createPeriodHtml(
          pet,
          tutorsName,
          scheduleTime,
          petAndOwner,
          descriptionItem,
          service,
          removeSchedule,
          schedulesListNight,
          description
        );
      }
    });
  } catch (error) {
    console.log(error);
    console.log("Não foi possivel mostrar os agendamentos");
  }
}

function createPeriodHtml(
  pet,
  tutorsName,
  scheduleTime,
  petAndOwner,
  descriptionItem,
  service,
  removeSchedule,
  period,
  description
) {
  petAndOwner.append(pet, tutorsName);
  descriptionItem.append(scheduleTime, petAndOwner);
  description.append(descriptionItem, service, removeSchedule);
  period.append(description);
}
