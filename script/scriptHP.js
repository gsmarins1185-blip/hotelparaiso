document.addEventListener('DOMContentLoaded', function () {

    IMask(document.getElementById('cpf'), {
        mask: '000.000.000-00'
    });

});

document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("telefone"), {
        mask: '(00) 00000-0000'
    });
});
document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("cep"), {
        mask: '00000-000'
    });
});
document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("cnpj"), {
        mask: '00.000.000/0000-00'
    });
});
    document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("rg"), {
        mask: '00.000.000-0'
    });
});

function irparareserva(){
    window.location.href="reservasHP.html"
}

function cadastrar() {    
    alert("Cadastrado com sucesso!");
    window.location.reload()
};
function homepage() {    
    
    window.location.href="HotelParaiso.html";
};
function reservar(){
    alert("Reserva realizada com sucesso!")
};

function limpar(){
    window.location.reload();
};