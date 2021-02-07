$(function() {

    //Mobile menu toggle function
    $(".navbar-toggler").on("click",function(){
      $(this).toggleClass("switch");
  })
    
    //Typed.js 
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      loopCount: Infinity,
      typeSpeed: 85,
      backSpeed:85
    });

    //Changing nav background color on scroll

    $(window).on("load scroll", function(){
      let position =$(window).scrollTop();
  
      if(position>=56){
          $(".navbar-expand-lg").addClass("scrolling");
      }
      else{
          $(".navbar-expand-lg").removeClass("scrolling");
      }
  })

  
  $('.modal-box').on("click", function(){

    //Making modal show when .modal-box is clicked.
    $('.portfolio-modal').addClass('show');

    //Pulling image from modal-box and displaying on modal

    let img =$(this).find('img').attr('src');

    $('#modal-img').attr('src', img);

    //Pulling text from modal-box to modal 

    let text =$(this).find('.portfolio-message').text();

    $('.modal-messaging').text(text);
  });
  
  //Closing modal when a user clicks outside of it 

$('html').on("click", function(e){
  let id = e.target.id;
  if(id ==="modal"){
    $('.portfolio-modal').removeClass('show');
  }
})

  //Closing modal when the close button is clicked

  $('.modal-close').on("click", function(){
    $('.portfolio-modal').removeClass('show');
  });

  //Filtering portfolio works

  $('ul.filter > li').on("click", function(){

    //adding active class to each clicked li
    $(this).addClass('active').siblings().removeClass('active');


    let filterValue =$(this).attr('filter');

    if (filterValue ==="all"){
      $('.modal-box').show();
    }
    else{
      $('.modal-box').not('.' + filterValue).hide();
      $('.modal-box').filter('.' + filterValue).show();
    }
  });

  // copyright
  let date = new Date();

  document.getElementById('year').innerHTML = date.getFullYear();

  AOS.init();

  });