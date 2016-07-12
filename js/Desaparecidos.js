function Desaparecidos() {

    this.carregaListaDesaparecidos = carregaListaDesaparecidos;
    this.save = save;

    function carregaListaDesaparecidos() {

        var html_cards = new HtmlCards();
        html_cards.setTitulo("Bocudo");
        html_cards.setSubTitulo("Campo Grande, MS");
        html_cards.setImagem("/nativeDroid2/img/cao1.jpg");
        html_cards.setTexto("<strong>Pessoal ajudem a divulgar</strong>, este lindo cão desapareceu dia 29/08 e seus donos estão desesperados a sua procura.");

        var html = html_cards.showHtml();
        $("#tab-desaparecidos").append(html);
    }

    function save() {
        var nome = $("#nome").val();
        var raca = $("#raca").val();
        var cor = $("#cor").val();
        var porte = $("#porte").val();
        var data_desaparecimento = $("#data_desaparecimento").val();
        var local = $("#local").val();
        var telefone1 = $("#telefone1").val();

        var ano = $("#idade_ano").val();
        var mes = $("#idade_mes").val();

        var telefone2 = $("#telefone2").val();
        var email = $("#email").val();
        var recompensa = $("#recompensa").val();

        var obrigatorio = "";
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