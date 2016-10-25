function Desaparecidos() {

    this.carregaListaDesaparecidos = carregaListaDesaparecidos;
    this.preencheCards = preencheCards;
    this.save = save;

    function carregaListaDesaparecidos() {
        var url = montaUrl("Desaparecido", "listar");
        ajx(url);
    }

    function preencheCards(dados) {

        dados.forEach(function(data) {
            
            if(!data) {
                return;
            }
            
            var texto = "";
            
            console.log(data);
            
            texto+= (data.raca !== "") ? data.raca : "";
            texto+= (data.sexo !== "") ? " "+data.sexo+", " : "";
            texto+= (data.cor !== "") ? " cor "+data.cor+", " : "";
            texto+= (data.porte !== "") ? " porte "+((data.porte==="pequeno_medio")?"pequeno/médio":((data.porte==="medio")?"médio":data.porte))+", " : "";
            texto+= (data.idade_ano !== "") ? " idade "+data.idade_ano+" "+((data.idade_ano > 1) ? " anos " : " ano ") : "";
            texto+= (data.idade_ano !== "" && data.idade_mes !== "") ? "e " : "";
            texto+= (data.idade_mes !== "") ? data.idade_mes+" "+((data.idade_mes > 1) ? " meses, " : " mes, ") : "";
            texto+= (data.nome !== "") ? "atende pelo nome de "+data.nome+", " : "";
            texto+= (data.data_desaparecimento !== "") ? "desapareceu no dia "+dataFormatada(data.data_desaparecimento)+", " : "";
            texto+= (data.local_desaparecimento !== "") ? "local "+data.local_desaparecimento+". " : "";
            texto+= "Qualquer informação entrar em contato: <br /><br />";
            texto+= "Telefone: "+data.telefone+";<br />";
            texto+= (data.telefone2 !== "") ? "Telefone 2: "+data.telefone2+";<br />" : "";
            texto+= (data.nome_dono !== "") ? "Falar com "+data.nome_dono+". " : "";
            
            if(data.recompensa == 1) {
                 texto+= "<br /><b>RECOMPENSA-SE!</b>";
            }
    
            var html_cards = new HtmlCards();
            html_cards.setTitulo("PROCURA-SE");
            html_cards.setSubTitulo(data.raca);
            html_cards.setImagem("/nativeDroid2/img/cao1.jpg");
            html_cards.setTexto(texto);

            var html = html_cards.showHtml();
            $("#tab-desaparecidos").append(html);
    
        });
    }

    function save() {
        var nome_dono = $("#nome_dono").val();
        var nome = $("#nome").val();
        var raca = $("#raca").val();
        var cor = $("#cor").val();
        var porte = $("#porte").val();
        var data_desaparecimento = $("#data_desaparecimento").val();
        var local = $("#local").val();
        var telefone1 = $("#telefone").val();

        var ano = $("#idade_ano").val();
        var mes = $("#idade_mes").val();

        var telefone2 = $("#telefone2").val();
        var email = $("#email").val();
        var recompensa = $("#recompensa").val();

        var obrigatorio = "";
        if (nome_dono == "") {
            obrigatorio += "nome responsável, ";
        }
        
        if (nome == "") {
            obrigatorio += "nome, ";
        }

        if (raca == "") {
            obrigatorio += "raça, ";
        }

        if (cor == "") {
            obrigatorio += "cor, ";
        }

        if (porte == "") {
            obrigatorio += "porte, ";
        }

        if (local == "") {
            obrigatorio += "local do desaparecimento, ";
        }

        if (data_desaparecimento == "") {
            obrigatorio += "data do desaparecimento, ";
        }

        if (telefone1 == "") {
            obrigatorio += "telefone, ";
        }

        if (obrigatorio != "") {
            obrigatorio = obrigatorio.slice(0, -2)
            alert("Campos obrigatórios: " + obrigatorio);
            return;
        }
        
        var params = montaUrlComParam("Desaparecido", "inserir");
        
        ajx(params);

    }
}