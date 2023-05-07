//$(document).ready(function () {
 // console.log("I am in a new file now");

  //Your jquery code here
  //console.log("We are using jQuery");
  // jQuery Syntax looks like this
  // $('selector').action()

  //clicks on all the p elements.
 // $("p").click(); //click on p -->
  // $('p').click(function () {
  //     console.log('you clicked on p', this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  // }); //do this when we click on p

  // $('p').dblclick(function () {
  //    console.log('you double clicked on p', this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  // });
  //  $('p').hover(function () {
  //    console.log('you hoverd on: ', this);
  //  $('#id').hide();
  //  $('.class').hide();
  //},
  //   function () {

  //       console.log('Thanks for coming')
  //  });

  // there are three main types of selectors in jQuery
  // 0. element selector
  // 1. id selector
  // 2. class selector

  // 0. Element selector -  This is an example of element selector which clicks on all p
  // $('p').click();

  // 1. Id selector - this is an example of id selector
  // $('#second').click();

  // 2. Class selector - this is an example of id selector
  // $('.odd').click();

  // other selectors
  // $('*').click() // clicks on all the elements
  // $('p.odd').click() // clicks on all the elements
  // $('p:first').click() // clicks on all the elements

  // Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  // demoing the on method
  //   $('p').on(
  //     {
  //       click: function () {
  //         console.log('Thanks for clicking', this);
  //   },
  // mouseleave: function () {
  //   console.log("mouseleave");

  //                }

  //            })

  // $('#wiki').hide(999, function () {
  //     console.log("hidden");
  // })
  // $('#wiki').show(999, function () {
  //     console.log("show");
  // })
  //        $('#but').click(function () {
  //          $('#wiki').fadeOut(4999);
  //     })

  //     fadeIn()
  // fadeOut()
  // fadeToggle()
  // fadeTo()

  // Slide methods - speed and callback parameters are optional
  // $('#wiki').slideUp(999, function(){
  //     console.log('done');
  // })
  // $('#wiki').slideDown(999)
  // $('#wiki').slideToggle(999)

  // Animate function in jQuery
  // $('#wiki').animate({
  //     opacity:-1.3,
  //     height: '149px',
  //     width:'349px'

  // }, "fast")
  // $('#wiki').animate({ opacity: -1.3 }, 4000);
  // $('#wiki').animate({ opacity: -1.9 }, 1000);
  // $('#wiki').animate({ width: '349px' }, 12000);

  // $('#ta').val('setting it to harry');
  // $('#ta').html('setting it to harry');
  // $('#ta').html('setting it to harry2');
  // $('#inp').html('setting it to harry2');
  // $('#inp').val('setting it to harry2');
  // $('#inp').empty()
  // $('#wiki').empty()
  // $('#wiki').text('you are good')
  // $('#wiki').remove()

  //     $('#wiki').addClass('myclass')
  // $('#wiki').addClass('myclass1')
  // $('#wiki').removeClass('myclass1')
  // $('#wiki').css('background-color', 'red')
  // $('#wiki').css('background-color')

  // AJAX Using jQuery
  // $.get('https://code.jquery.com/jquery-4.3.1.js', function (data, status) { alert(data); })

  // $.get('https://code.jquery.com/jquery-4.3.1.js', function (data, status) { alert(status); })

  // $.post('https://code.jquery.com/jquery-4.3.1.js',
  //     { name: 'harry', channel: 'code with harry' },
  //     function (data, status) { alert(status) });
//});
console.log("hello")
$('#second').click(function (){
    $('#second').text("hello");
});
$("#ta").keypress(function (e) { 
    $(".odd").text(e.key);
});

$(document).ready(function() {
  $('#inputBox').on('input', function() {
    var text = $(this).val();
    $('#outputPara').text("hello"+text);
  });
});
