// ski_01.js

 (function($){

    // jQuery

//  #headBox
    var doH = $('body').height();
    console.log(doH);
    var indexBox = $('#indexBox');
    var inHeight = indexBox.height(doH);
    
    var headBoxH = $('#headBox').innerHeight();
    $('#bannerBox').height(doH - headBoxH);


  var headBox = $('#headBox');     
  var headOffset = headBox.offset().top;
  console.log(headOffset);

  $(window).on('scroll', function(){
    var winScroll = $(this).scrollTop();
    console.log(winScroll);

    if(headOffset <= winScroll){
      headBox.addClass('fixed');
    } else{
      headBox.removeClass('fixed');
    }
  });


// # #bannerBox
    var banner = $('.banner_box');
    var bannerUl = banner.children('ul');
    var bannerLast = bannerUl.children('li');
    
    bannerLast.last().prependTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
    banner.css({overflow:'hidden'});

    var leftBtn = $('.btn').children('button').first();
    var rightBtn = $('.btn').children('button').last();
    
    leftBtn.on('click', function(event){
     event.preventDefault(); 
    
     bannerUl.stop(false, true).animate({marginLeft:0}, function(){
         bannerLast = bannerUl.children('li').last();
         bannerLast.prependTo(bannerUl);
         bannerUl.css({marginLeft:'-100%'});
     });
    }); // leftBtn 클릭
    
    rightBtn.on('click', function(event){
        event.preventDefault(); 
       
        bannerUl.stop(false, true).animate({marginLeft:'-200%'}, function(){
            bannerLast = bannerUl.children('li').first();
            bannerLast.appendTo(bannerUl);
            bannerUl.css({marginLeft:'-100%'});
        });
       }); // rightBtn 클릭

//  #indicator scroll
       var indicatorBtn = $('#indicatorBox');
       var topBtn = $('.btn_top');
       var content =$('#introduceBox').offset().top;
       
       // indicatorBtn.delay(000).fadeOut();
       // topBtn.delay(000).fadeOut();

       $(window).on('scroll',function(){
        var scroll_down = $(this).scrollTop();
        console.log(scroll_down);
         if(scroll_down >= content){
            indicatorBtn.fadeIn();
            topBtn.fadeIn(); 
           }else{
            indicatorBtn.fadeOut();
            topBtn.fadeOut();}
           }
        );

// #indicator move
  var site = $('.site');
  var siteLength = site.length;
  var siteArr = [];

  for(var j=0; j < siteLength; j++){
    siteArr[j] = site.eq(j).offset().top;
  }

   var indicatorBoxUl = $('.indicator_list_box');

  indicatorBoxUl.children('li').on('click', function(evt){
    evt.preventDefault();
    var s = $(this).index();
    $(window).scrollTop(siteArr[s]);
  });


// #skiinfoBox
  var skiimgBox = $('#skiimgBox');
  var skiimgBoxLi = skiimgBox.children('li');

  var skiContentBox = $('#ski_content_box');
  var skiContentBoxLi = skiContentBox.children('li');

  skiimgBoxLi.on('click', function(evt){
    evt.preventDefault();
    var skiimageIndex = $(this).index();
    console.log(skiimageIndex);
    skiimgBoxLi.removeClass('select');
    skiimgBoxLi.eq(skiimageIndex).addClass('select');
    skiContentBoxLi.removeClass('select');
    skiContentBoxLi.eq(skiimageIndex).addClass('select');
  });
    
     })(this.jQuery);
    