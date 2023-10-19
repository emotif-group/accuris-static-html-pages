// on scroll add class
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $("body").addClass("sticky_hdr");
    } else {
      $("body").removeClass("sticky_hdr");
    }
  });
});


$(function () {

  var link = $('#navo_bar a.dot');

  // Move to specific section when click on menu link
  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 200);
    $(this).addClass('active_one');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function () {
    scrNav();
  });

  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('main section').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active_one');
        $('#navo_bar').find('[data-scroll="' + id + '"]').addClass('active_one');
        // $('.slick-slide').removeClass('slick-current slick-active');
        // $('#navo_bar').find('[data-scroll="' + id + '"]').parent().addClass('slick-current slick-active');
        // $("#navo_bar").not('.slick-initialized').slick()

        // $('.slick-slider').slick('');
        // $('#navo_bar').slick({
        //   slidesToShow: 3, // Number of slides to show at once
        //   autoplay: false,
        //   autoplaySpeed: 2000,
        //   infinite: false,
          
        //   // Add more options as needed
        //   });
      }
    });
  }
  scrNav();
});

function imgWindow() {
  var x = document.getElementById("fgt").autoplay;
  document.getElementById('fwe').style.display = 'none';
  document.getElementById('fgt').style.display = 'block';
  document.getElementById("fgt").play();
}

$(document).ready(function () {
  $("#play").click(function () {
    $("#remove").hide();
    $("#add").show();
  });
});

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() >300) {
//       $("body").addClass("side_btn");
//     } else {
//       $("body").removeClass("side_btn");
//     }
//   });
// });

$('.indsrty_fw_slider').slick({
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows:false,
      }
    }
  ]
});


// mobile_menu
function openNav() {
  document.getElementsByTagName('body')[0].classList.add("nav_open");
}

function closeNav() {
  document.getElementsByTagName('body')[0].classList.remove("nav_open");
}



//  side_nav
$(document).ready(function () {
  $(window).on('load resize orientationchange', function () {
    $('#navo_bar').each(function () {
      var $carousel = $(this);
      if ($(window).width() > 767) {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }
      } else {
        if (!$carousel.hasClass('slick-initialized')) {
          $('#navo_bar').slick({
            dots: false,
            variableWidth: true,
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            focusOnSelect: true,
            slidesToScroll: 1,
            // asNavFor: '.slider-nav',
            // responsive: [{
            //   breakpoint: 768,
            //   settings: {
            //     slidesToShow: 1,
            //   }
            // }]
          });
        }
      }
    });
  });
});


// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   focusOnSelect: true
// });

// $('a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.slider-nav').slick('slickGoTo', slideno - 1);
// });

// on scroll add class
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $("navo").addClass("add_stciky");
    } else {
      $("navo").removeClass("add_stciky");
    }
  });
});

const scrollView = document.getElementsByClassName("")



// on scroll add class
// $(document).ready(function () {
//    $('#navo_bar').slick({
//             dots: false,
//             variableWidth: true,
//             infinite: false,
//             arrows: false,
//             slidesToShow: 1,
//             focusOnSelect: true,
//             slidesToScroll: 1,
//             // asNavFor: '.slider-nav',
//             // responsive: [{
//             //   breakpoint: 768,
//             //   settings: {
//             //     slidesToShow: 1,
//             //   }
//             // }]
            
//           });
// });


// ------------------home_mobile_slider

$(window).on('load resize orientationchange', function() {
  $('.home_mobile_slider').each(function(){
      var $carousel = $(this);
      if ($(window).width() > 767) {
          if ($carousel.hasClass('slick-initialized')) {
              $carousel.slick('unslick');
          }
      }
      else{
          if (!$carousel.hasClass('slick-initialized')) {
            $('.home_mobile_slider').slick({
              dots: false,
              infinite: true,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
            });
          }
      }
  });
});


class SikDropdown {
  ele = null;
  dropdown = null;
  el = {
      input: null,
      toggle: null,
      list: null
  };

  items = {};
  count = 0;
  _cbs = [];
  defaults = {
      name: "sik-input",
      value: "",
      placeholder: "Select Item"
  };
  options = {};
  constructor(identifier, opt = {}) {
      this.ele = document.querySelector(identifier);
      if (this.ele) {
          //Set options:
          this.setOptions(opt);
          //Create hidden input:
          this.el.input = document.createElement("input");
          this.el.input.setAttribute("type", "hidden");
          this.el.input.setAttribute("name", this.options.name);
          this.el.input.setAttribute("value", "");
          this.ele.prepend(this.el.input);

          //Select list:
          this.el.list = this.ele.querySelector(".dropdown-menu");
          this._fillItems();
          //Set toggler:
          this.el.toggle = this.ele.querySelector(".dropdown-toggle");
          this.dropdown = new bootstrap.Dropdown(this.el.toggle);
          //Set initial value & placeholder:
          this.setValue(this.options.value);
          //Set core handlers:
          this._attachCoreHandlers();
          this.trigger("init");
      } else {
          console.warn("Cant create a Sik Dropdown - selector is invalid");
      }
  }
  setOptions(opt) {
      this._extend(this.options, this.defaults, opt);
  }
  addItem(value, label) {
      if (!this.items.hasOwnProperty(value)) {
          let itemContainer = document.createElement('li');
          itemContainer.innerHTML = `<span class="dropdown-item" data-value="${value}">${label}</span>`;
          this.el.list.appendChild(itemContainer);
          let item = itemContainer.querySelector(".dropdown-item");
          this.count++;
          this.items[value] = {
              el: item,
              value: value,
              label: item.innerHTML.trim()
          };
          item.addEventListener("click", this.trigger.bind(this, "select"));
      }
  }
  removeItem(value) {
      if (this.items.hasOwnProperty(value)) {
          this.items[value].el.closest("li").remove();
          this.count--;
          delete this.items[value];
          if (this.value() === value) {
              this.setValue(null);
          }
      }
  }
  setValue(value, close = true) {
      if (this.items.hasOwnProperty(value)) {
          this.el.input.setAttribute("value", value);
          this.el.toggle.innerHTML = this.items[value].label;
      } else {
          this.el.input.setAttribute("value", "");
          if (this.options.placeholder) {
              this.el.toggle.innerHTML = this.options.placeholder;
          }
      }
      if (close) this.dropdown.hide();
  }
  value() {
      return this.el.input ? this.el.input.value : null;
  }
  text() {
      let value = this.value();
      if (this.items.hasOwnProperty(value)) {
          return this.items[value].label.trim();
      }
      return "";
  }
  open() {
      if (this.dropdown) {
          this.dropdown.show();
      }
  }
  close() {
      if (this.dropdown) {
          this.dropdown.hide();
      }
  }
  toggle() {
      if (this.dropdown) {
          this.dropdown.toggle();
      }
  }
  attachHandler(ev, cb) {
      this._cbs.push({
          ev: ev,
          fn: cb
      });
  }
  detachHandler(ev) {
      for (let i = 0; i < this._cbs.length; i++) {
          if (this._cbs[i].ev === ev) {
              this._cbs.splice(i, 1);
          }
      }
  }
  trigger(ev) {
      //console.log(this, ev, el);
      for (let cb of this._cbs) {
          let event = cb.ev.split(".");
          if (event.length > 1 && event[1] === ev) {
              let [, ...args] = arguments;
              cb.fn.call(this, ...args);
          }
      }
  }
  _fillItems() {
      if (this.el.list) {
          let items = this.el.list.querySelectorAll(".dropdown-item");
          let i = items.length;
          this.count = items.length;
          while (i--) {
              const value = items[i].getAttribute("data-value");
              this.items[value] = {
                  el: items[i],
                  value: value,
                  label: items[i].innerHTML.trim()
              };
              items[i].addEventListener("click", this.trigger.bind(this, "select"));
          }
      }
      console.log(this.items);
  }
  _attachCoreHandlers() {
      this.attachHandler("core.select", function (item = null) {
          if (typeof item === 'object' && 'target' in item) {
              let selected = item.target.hasAttribute("data-value") ?
                  item.target :
                  item.target.closest("[data-value]");
              let value = selected ? selected.getAttribute("data-value") : null;
              this.setValue(value);
          }
      });
      this.attachHandler("core.open", function () {
          console.log("open", arguments);
      });
      this.attachHandler("core.close", function () {
          console.log("close", arguments);
      });
      this.attachHandler("core.init", function () {});
      //Bind to dropdown:
      this.el.toggle.addEventListener('show.bs.dropdown', this.trigger.bind(this, "open"));
      this.el.toggle.addEventListener('hide.bs.dropdown', this.trigger.bind(this, "close"));
  }
  _extend() {
      for (var i = 1; i < arguments.length; i++)
          for (var key in arguments[i])
              if (arguments[i].hasOwnProperty(key))
                  arguments[0][key] = arguments[i][key];
      return arguments[0];
  }
}
//This how we intiate it and extend the bs funcionality:
var dropdown = new SikDropdown("#sik-select", {
  value: "trx1"
});
//adding a callback just for demo:
dropdown.attachHandler("myhandler.select", function () {
  console.log("select", this);
  let tag = document.getElementById("selected-example");
  tag.innerText = this.value();
});