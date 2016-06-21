function Desaparecidos() {
    
    this.carregaListaDesaparecidos = carregaListaDesaparecidos;
    
    function carregaListaDesaparecidos() {
        
        var html_cards = new HtmlCards();
        html_cards.setTitulo("Bocudo");
        html_cards.setSubTitulo("Campo Grande, MS");
        html_cards.setImagem("/nativeDroid2/img/cao1.jpg");
        html_cards.setTexto("<strong>Pessoal ajudem a divulgar</strong>, este lindo cão desapareceu dia 29/08 e seus donos estão desesperados a sua procura.");

        var html = html_cards.showHtml();
        $("#tab-desaparecidos").html(html);
    }
}