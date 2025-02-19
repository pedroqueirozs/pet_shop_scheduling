//Selecionar as seções: Manhã, Tarde, Noite
const schedulesListMorning = document.querySelector(".schedulesListMorning");
const schedulesListAfternoon = document.querySelector(
  ".schedulesListAfternoon"
);
const schedulesListNight = document.querySelector(".schedulesListNight");

export function schedulesShow(schedules) {
  try {
    schedulesListMorning.innerHTML = "";
    schedulesListAfternoon.innerHTML = "";
    schedulesListNight.innerHTML = "";
    schedules.forEach((schedule) => {
      //Essas são as variaveis do corpo do Periodo.
      const description = document.createElement("li");

      const descriptionItem = document.createElement("div");
      descriptionItem.classList.add("schedule");

      const scheduleTime = document.createElement("h3");
      scheduleTime.textContent = schedule.time;

      const petAndOwner = document.createElement("div");
      petAndOwner.classList.add("pet-and-owner");

      const pet = document.createElement("h3");
      pet.classList.add("pet-and-owner");
      pet.textContent = schedule.name_of_the_animal;

      const owner = document.createElement("span");
      owner.classList.add("owner");
      owner.textContent = schedule.tutors_nome;

      const service = document.createElement("span");
      service.textContent = schedule.service;

      const removeSchedule = document.createElement("span");
      removeSchedule.classList.add("remove-schedule");
      removeSchedule.textContent = "Remover agendamento";

      const hour = schedule.time;
      if (hour <= "12") {
        petAndOwner.append(pet, owner);
        descriptionItem.append(scheduleTime, petAndOwner);
        description.append(descriptionItem, service, removeSchedule);
        schedulesListMorning.append(description);
      } else if (hour > "12" && hour <= "18") {
        petAndOwner.append(pet, owner);
        descriptionItem.append(scheduleTime, petAndOwner);
        description.append(descriptionItem, service, removeSchedule);
        schedulesListAfternoon.append(description);
      } else {
        petAndOwner.append(pet, owner);
        descriptionItem.append(scheduleTime, petAndOwner);
        description.append(descriptionItem, service, removeSchedule);
        schedulesListNight.append(description);
      }
    });
  } catch (error) {
    console.log(error);
    console.log("Não foi possivel mostras os agendamentos");
  }
}
