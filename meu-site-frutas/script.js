function mostrarDescricao(fruta) {
    const descricoes = {
        "maçã": "A maçã é rica em fibras, vitaminas e antioxidantes. É ótima para a saúde do coração.",
        "banana": "A banana é rica em potássio, ajuda a controlar a pressão arterial e fornece energia rápida.",
        "manga": "A manga é uma fruta tropical rica em vitamina C e A, além de ser deliciosa!"
    };

    const descricaoDiv = document.getElementById("descricao");
    descricaoDiv.innerHTML = `<h2>${fruta.charAt(0).toUpperCase() + fruta.slice(1)}</h2><p>${descricoes[fruta]}</p>`;
}