function toggleDetalii(id) {
  const element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function showDetalii(id) {
    document.getElementById(id).style.display = "block";
}

function hideDetalii(id) {
    document.getElementById(id).style.display = "none";
}
