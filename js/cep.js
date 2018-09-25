var $ = document.getElementById.bind(document);

function buscaCep() {
    var cep = $('cep');
    var url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url).then((res) => {
        res.json().then(endereco => {
            console.log(endereco);
            if (endereco.logradouro != undefined) {
                $("logradouro").value = endereco.logradouro;
            }
            if (endereco.bairro != undefined) {
                $("bairro").value = endereco.bairro;
            }
            if (endereco.localidade != undefined) {
                $("municipio").value = endereco.localidade;
            }
            if (endereco.uf != undefined) {
                $("estado").value = endereco.uf;
            }
        });
    }).catch(error => {
        console.log(error);
    });
}