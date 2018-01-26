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
// .list_box
var indiBanner = $('.list_box').find('li');
indiBanner.first().find('a').focus();

indiBanner.find('a').on('focus',function() {
  console.log( $(this).parent().index() );

  var i = $(this).parent().index();
  bannerUl.animate({marginLeft:-(i*100)+'%'});
});

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


// #historyBox .scroll_arrow 내용 숨기기
  var titleBox = $('.sm_title_box');
  // var title = titleBox.children('.title');
  var hideArrow = titleBox.children('.scroll_arrow');
  var yearHideBtn = hideArrow.children('.year_btn');
  var noticeHideBtn = hideArrow.children('.notice_btn');
  var mediaHideBtn = hideArrow.children('.media_btn');

   var yearBtnChange = yearHideBtn.on('click',function(e){
    e.preventDefault();
    $('#yearsBox').slideToggle();
   var _thisI = $(this).find('i');
   var classIf = _thisI.hasClass('fa-sort-asc');
  
    if(classIf){
      _thisI.attr({'class':"fa fa-sort-desc"});
      _thisI.css({marginTop: '-1.5rem'});
    }else{
      _thisI.attr({'class':"fa fa-sort-asc"})
            .css({marginTop:0});
    }
  });

   var noticeBtnChange = noticeHideBtn.on('click',function(e){
    e.preventDefault();
    $('#noticeContent').slideToggle();
   var _thisI = $(this).find('i');
   var classIf = _thisI.hasClass('fa-sort-asc');
  
    if(classIf){
      _thisI.attr({'class':"fa fa-sort-desc"});
      _thisI.css({marginTop: '-1.5rem'});
    }else{
      _thisI.attr({'class':"fa fa-sort-asc"})
            .css({marginTop:0});
    }
  });

     var mediaBtnChange = mediaHideBtn.on('click',function(e){
    e.preventDefault();
    $('#photoBox').slideToggle();
   var _thisI = $(this).find('i');
   var classIf = _thisI.hasClass('fa-sort-asc');
  
    if(classIf){
      _thisI.attr({'class':"fa fa-sort-desc"});
      _thisI.css({marginTop: '-1.5rem'});
    }else{
      _thisI.attr({'class':"fa fa-sort-asc"})
            .css({marginTop:0});
    }
  });
//  var btnHide = [
//           {btn:'sm_title_box', box:'#yearsBox'},
//           {btn:'sm_title_box', box:'#noticeContent'},
//           {btn:'sm_title_box', box:'#photoBox'},
//            ];

//   var i=0;
//   var indexOrder = btnHide.index();



// $.each(index, value){ 
//   btnHide[i].btn.on('click',function(e) {
//     e.preventDefault();
//     btnHide[i].box.slideToggle();
//   });
// }







// #skiinfoBox
  var baseUrl = "../../media/";
  var videoList = [
                    {title:'pyeongChang_2018', 
                    videoTitle:'2018년 평창 동계올림픽 장애인 경기 홍보 영상'},
                    {title:'biathlon _pursuit',
                    videoTitle:'바이슬론 경기 설명 영상'},
                    {title:'crosscountry', 
                    videoTitle:'크로스 컨트리 경기 설명 영상'}
                  ];

  var videoListLength = videoList.length;

  // video에 첫번째 영상 담기
  var video = $('.skimedia_player').find('video');

  var i = 0;

  var playList = function(i){

    var playOrther = videoList[i];
    var playTitle = playOrther.title;
    var playStart = baseUrl + playTitle + '.mp4';

    return playStart;
  }; // playList;

  // video.append('<source src="' + playList(i) + '" type=video/mp4" />');
  video.prepend('<source />')
  var videoSrc = video.find('source');
  videoSrc.attr({'src' :playList(i), 'type': 'video/mp4'});

  var videoBtn = $('.play_btn');
  var pauseBtn = $('.stop_btn');

   videoBtn.on('click', function(e){
      e.preventDefault();
        video[0].play();
        videoBtn.removeClass('view');
        pauseBtn.addClass('view');
    });

   pauseBtn.on('click', function(e){
      e.preventDefault();
        video[0].pause();
        pauseBtn.removeClass('view');
        videoBtn.addClass('view');
    });

// #rulengroupBox
  var rule = $('.rulengroupBox').find('dl');
  var ruleBtn = rule.children('dt');
  ruleBtn.on('click', function(e) {
    e.preventDefault();

    var _this = $(this);
    
    

    var hasActive = _this.hasClass('activeOther');
    if(hasActive){
      _this.removeClass('activeOther');
      _this.addClass('active');
      _this.siblings('dt').removeClass('active');
      _this.siblings('dt').addClass('activeOther');
    } else{
      _this.addClass('active');
      _this.siblings('dt').addClass('activeOther');
    }
  });


// #skiinfoBox
  var skiimgBox = $('#skiimgBox');
  var skiimgBoxLi = skiimgBox.children('li');
  var skiimgBoxSpan = skiimgBoxLi.find('span');

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

    var skiimgBoxSpanIndex = $(this).index();
    skiimgBoxSpan.addClass('nonselect');
    skiimgBoxSpan.eq(skiimgBoxSpanIndex).removeClass('nonselect');

    // });

  });

    
     })(this.jQuery);
    