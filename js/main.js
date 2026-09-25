// Funcionalidad del Modal / Lightbox para ampliar las capturas de evidencia
function openModal(imageSrc) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("imgModal");
    modal.style.display = "none";
}

// Cerrar también presionando la tecla Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});