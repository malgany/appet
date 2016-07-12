var host = "http://localhost/nativeDroid2/";

// funcoes nativas jquery Ajax
function ajx(param) {
    var url = host + "ajax.php";
    var data = param;

    $.ajax({
        url: url,
        data: data,
        type: "POST",
        async: true,
        crossDomain: true,
        success: function (data) {
            //hr();
            eval(data);
        }
    });
}

function montaUrlComParam(controller, action) {
    return JSON.parse(JSON.stringify($('form').serializeObject()).slice(0,-1) + ',"controller":"'+controller+'","action":"'+action+'"}');
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};