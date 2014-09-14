
var mainuri = 'http://webservis.mmcsystem.com/api/Cafe/';
//GetList';
//GetDetay';
//GetPosts'
var anaid = 0;
$(document).ready(function () {
    // Send an AJAX request
                      	
  
			
});
		

//Menu  
/*---------------------*/
$.getJSON(mainuri + 'GetList')
  .done(function (data) {
      // On success, 'data' contains a list of products.

      // Add a list item for the product.
      var html = GetHtmlAnaMenu(data);

      $('#menu').html(html);



  });

function GetHtmlAnaMenu(data) {

    var html = "";
    $.each(data, function (key, item) {
        html = html + "<div class='service_box'> <div class='services_icon'><a href='#' onclick='setSelectedTestPlan(" + item.AnamenuID + ");'><img src='" + item.Resim + "'/></a></div> <div class='service_content'> <h4><a href='#' onclick='setSelectedTestPlan(" + item.AnamenuID + ");'>" + item.AnamenuIsmi + "</a></h4><p>" + item.Aciklama + "</p> </div> </div>";

    });
    return html;
}

function Menudetayhtml(data) {
    var html = "";
    $.each(data, function (key, item) {
        html = html + "<div class='service_box'> <div class='services_icon'><a href='#' onclick=''><img src='" + item.MenuResim + "'/></a></div> <div class='service_content'> <h4><a href='#' >" + item.MenuAdi + "</a></h4><p>" + item.MenuAciklama + "</p>  <p><a class=\"map_button radius8\" onclick='siparisalindi(" + item.MenuID +" );'>Sipariş Ver</a></p> </div> </div>";

    });
 swiperParent.swipeTo(5);
    return html;
}


function find(id) {
    $.getJSON(mainuri + 'GetDetay/' + id)
.done(function (data) {

    var html = Menudetayhtml(data);

    $('#menudetay').html(html);

});
}
function setSelectedTestPlan(anaid) {

    find(anaid);
}
function siparisalindi(menuid) {

   
    console.log(menuid)
    var Order = new Object();
    Order.OyunSonuc = 1;
    Order.UserID = 1;
    Order.MasaNo = 1;
    Order.SiparidID = 1;
    Order.MenuID = menuid;
    Order.Adet = 1;
    Order.ToplamFiyat = 2;
    Order.OyunSonrasiFiyat = 2;
 
    $.ajax({
        type: "POST",
        dataType: "json",
      
        url: "http://webservis.mmcsystem.com/api/Cafe/NewOrder",
        data: JSON.stringify(Order),
        success: function (data) {
            alert(data);
        },
        error: function (error) {
          
           alert(error.responseText);
        }
    });
    
}

/*spariş al*/

//function find() {
//    var id = $('#prodId').val();
//    $.getJSON(uri + '/' + id)
//        .done(function (data) {
//            $('#product').text(formatItem(data));
//        })
//        .fail(function (jqXHR, textStatus, err) {
//            $('#product').text('Error: ' + err);
//        });
//}



/*---------------------*/
		
/* oyun */


//Resim cliklerine gelecek Fonskiyonlar
function OyunGetir() {
    $.ajax({
        url: mainuri + "getoyun",
        type: "GET",
        success: function (data) {
            var html = OyunGethtml(data);
            $("#demo").html(html)
        }

    });
}

// htmle veya objeden çevirme  fonsiyonu
function OyunGethtml(data) {
    var html = "";
    var obj = jQuery.parseJSON(data);
    $.each(obj, function (key, item) {
        html = html + item.JScript;

    });
    return html;
}


/*------------------------oyun bitiş*/



$.getJSON(mainuri)
  .done(function (data) {
      // On success, 'data' contains a list of products.

      // Add a list item for the product.
      var html = GetHtmlposts(data);

      $('#posts').html(html);
  });



function GetHtmlposts(data) {

    var html = "";
    $.each(data, function (key, item) {
        html = html + "<li><img src='" + item.KullaniciProfilResmi + "' />" + "<br /> <h5>" + item.KullaniciAdi + "</h5> <br /> <h1> Gönderi:" + item.Gonderi + "</h1>" + ' <br/> <h6> Tarih' + item.Tarih + "</h6>";

    });
    return html;
}







