function alerta1() {
  Swal.fire({
    title: "Pregunta",
    text: "cuentas con interner",
    icon: "question",
  });
}
function alerta2() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
function alerta3() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "registro guardado",
    showConfirmButton: false,
    timer: 1500,
  });
}

function alerta4() {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "error encontrado",
        showConfirmButton: false,
        timer: 1500,
      });
}
