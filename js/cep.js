var $ = document.getElementById.bind(document);

function buscaCep() {
    var cep = $('cep');
    var url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url).then((res) => {
        res.json().then(endereco => {
            console.log(endereco);
            $("logradouro").value = endereco.logradouro;
            $("bairro").value = endereco.bairro;
            $("municipio").value = endereco.municipio;
            $("estado").value = endereco.uf;
        });
    }).catch(error => {
        console.log(error);
    });
}