/* =========================
                BURBUJA
============================== */
//CARANDO BURBUJA
$(window).bind("load", function() {

    "use strict";
    
    $(".spn_hol").fadeOut(1000);
});

/* =========================
                MENU
============================== */
//MENU APARECER Y OCULTAR
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0.7)'
            });
        } else {
            $(".navbar").css({
                'margin-top': '-100px',
                'opacity': '0'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '45px'
            });
            $(".navbar-brand img").css({
                'height': '45px'
            });
            $(".navbar-brand img").css({
                'padding-top': '20px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
});

// MAS RESALTE AL MENU

$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});

//MENU DE  DESPLAZAMIENTO SUAVE
$(function() {
    
    "use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ALTURA DE LA PANTALLA DE INCIO 
$(document).ready(function() {

    "use strict";
    
    setInterval(function() {

        "use strict";
        
        var widnowHeight = $(window).height();
        var containerHeight = $(".home-container").height();
        var padTop = widnowHeight - containerHeight;
        $(".home-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});

//FONDE DE IMAGEN PORTADA (responsive)
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";

        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*agregar según sea necesario*/
    }
});


/* =========================
     CANASTA DE COMPRAS
============================== */
// show cart
(function() {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    cartInfo.addEventListener("click", function(){
        cart.classList.toggle("show-cart");
    });
})();

// add itens to the cart

(function(){
    const cartBtn = document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            //console.log(event.target);

            if(event.target.parentElement.classList.contains("store-item-icon")){
                let fullPath = 
                event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf("img") + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `{img-cart${partPath}`;  
                let name = 
                event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

                 item.name = name;
                 let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                 let finalPrice = price.slice(1).trim();

                 item.price = finalPrice;
                 //console.log(finalPrice);
                 //console.log(name);
                 //console.log(item);

                 const cartItem = document.createElement("div");
                 cartItem.classList.add(
                    "cart-item",
                    "d-flex", 
                    "justify-content-between", 
                    "text-capitalize", 
                    "my-3"
                 );

                 cartItem.innerHTML = `
                    <img src="${
                        item.img
                    }" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="item-text">

                    <p id="cart-item-title" class="font-weight-bold mb-0">${
                        item.name
                    }</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" 
                    class="mb-0">${
                        item.price
                    }</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                    </a>
                    </div>
                 `;
                 //seect cart 
                 const cart = document.getElementById("cart");
                 const total = document.querySelector(".cart-total");

                 cart.insertBefore(cartItem, total);
                 alert("Comida añadido al carrito");
            }
        });
    }); 
})();