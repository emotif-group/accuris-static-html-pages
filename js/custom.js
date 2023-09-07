// on hover add class into body

// $(function() {
//   $('.mega_menu_trigger_wrp').mouseenter(function() {
//     $('body').addClass("hdr_clr_change");
//   }).mouseleave(function () {
//     $('body').removeClass("hdr_clr_change");
//   });
// });

// on scroll add class
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("body").addClass("sticky_hdr");
    } else {
      $("body").removeClass("sticky_hdr");
    }
  });
});


$(function() {
  
  var link = $('#navo_bar a.dot');
  
  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 200);
    $(this).addClass('active_one');
    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  
  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('main section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
        link.removeClass('active_one');
        $('#navo_bar').find('[data-scroll="' + id + '"]').addClass('active_one');
      }  
    });
  }
  scrNav();
});

function imgWindow() {
  var x = document.getElementById("fgt").autoplay;
  document.getElementById('fwe').style.display='none'; 
  document.getElementById('fgt').style.display='block';
  document.getElementById("fgt").play();
}

$(document).ready(function(){
  $("#play").click(function(){
    $("#remove").hide();
    $("#add").show();
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() >300) {
      $("body").addClass("side_btn");
    } else {
      $("body").removeClass("side_btn");
    }
  });
});




$('.indsrty_fw_slider').slick({
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});