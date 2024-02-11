$(document).ready(function () {
  //efecto menu
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });

    $(this).animate(
      {
        top: "0",
      },
      2000 + index * 500
    );
  });

  //Efecto header
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });

    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }

  // Scroll Elementos Menu

  var Acercade = $("#Acerca-de").offset().top,
    Menu = $("#platillo").offset().top,
    Galeria = $("#Galeria").offset().top,
    ubicacion = $("#Ubicacion ").offset().top;

  $("#btn-Acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: Acercade,
      },
      500
    );
  });

  $("#btn-Menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: Menu,
      },
      500
    );
  });

  $("#btn-Galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: Galeria,
      },
      500
    );
  });

  $("#btn-Ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubicacion,
      },
      500
    );
  });
});
