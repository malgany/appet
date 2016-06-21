
function HtmlCards() {
    
    var titulo;
    var sub_titulo;
    var imagem;
    var texto;
    
    this.setTitulo = setTitulo;
    this.setSubTitulo = setSubTitulo;
    this.setImagem = setImagem;
    this.setTexto = setTexto;
    this.showHtml = showHtml;
    
    function setTitulo(tit) {
        titulo = tit;
    }
    
    function setSubTitulo(stit) {
        sub_titulo = stit;
    }
    
    function setImagem(img) {
        imagem = img;
    }
    
    function setTexto(txt) {
        texto = txt;
    }
    
    function showHtml() {
        
        var html = '<div class="nd2-card">';
        html+= cardTitle();
        html+= cardMedia();
        html+= cardText();
        html+= cardAction();
        html+= '</div>';
        
        return html;
    }
    
    function cardTitle() {
        return '<div class="card-title has-avatar">' +
                    '<img class="card-avatar" src="//lorempixel.com/200/200/people/9/">' +
                    '<h3 class="card-primary-title">' + titulo + '</h3>' +
                    '<h5 class="card-subtitle">' + sub_titulo + '</h5>' +
            '</div>';
    }
    
    function cardMedia() {
        return '<div class="card-media">' +
                    '<img src="' + imagem + '">' +
                '</div>';
    }
    
    function cardText() {
        return '<div class="card-supporting-text has-action">' + texto + '</div>';
    }
    
    function cardAction() {
        return '<div class="card-action">' +
            '<div class="row between-xs">' +
                '<div class="col-xs-4">' +
                    '<div class="box">' +
                        '<a href="#" class="ui-btn ui-btn-inline ui-btn-fab"><i class="zmdi zmdi-mic"></i></a>' +
                        '<a href="#" class="ui-btn ui-btn-inline ui-btn-fab"><i class="zmdi zmdi-videocam"></i></a>' +
                    '</div>' +
                '</div>' +
                '<div class="col-xs-8 align-right">' +
                    '<div class="box">' +
                        '<a href="#" class="ui-btn ui-btn-inline">Action</a>' +
                    '</div>' +
                '</div>' +
            '</div>' + 
        '</div>';
    }
}