import { removeSchedule } from "../../services/removeSchedule.js";
const periods = document.querySelectorAll(".periods");

//Gerar evento de click para cada lista(Manhã, tarde e noite).
periods.forEach((periods) => {
  //Capturar o evento de click na lista.
  periods.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove-schedule")) {
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      //Pega o ID do agendamento para remover.
      const { id } = item.dataset;

      //Confirma que o ID foi selecionado.
      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );
        if (isConfirm) {
          await removeSchedule({ id });
          window.location.reload();
        }
      }
    }
  });
});
