$(document).ready(function () {




    $.ajax({
        url: "http://localhost/service1.asmx/GetUrunler",
        type: "GET",
        success: function (data) {
            var html = GetCustomList(data);
            $("#list").html(html);
        }
    });


    function GetCustomList(data) {
        var html = "";
        $.each(data, function (key, value) {
            html = html + "<tr><td>" + value.urunadi + "</td>" + "<td>" + value.urunID + "</td>" + "</tr>"
        });




        return html;
    }
});