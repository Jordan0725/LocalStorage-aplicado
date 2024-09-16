function cadastrar() {

    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;

    const carro = {
        Marca: marca,
        Modelo: modelo

    };

    localStorage.setItem("Carro", JSON.stringify(carro));
    
}