// popup.js

(function($) {


  var body = $('body');
  // body 내부에 팝업상자 만들기
  body.prepend('<div id="popupBox"><div class="pop_in"><button tabIndex="0" type="button">닫기</button><p></p></div></div>');
  var popup = $('#popupBox');
  var popIn = popup.children('.pop_in');
  popup.css({position:'fixed', top:0, left:0, zIndex:5000, backgroundColor:'rgba(255,255,255,0.8)', boxShadow:'0 0.3rem 0.3rem #bbb', width:'100%', height:'auto', boxSizing:'border-box', padding:'1rem'});
  // popIn.css({width:'960px', margin:'0 auto'});
  popIn.css({width:'auto', maxWidth:'960px', margin:'0 auto'});
  var closeBtn = popIn.find('button');
  closeBtn.css({padding:'0.5rem', backgroundColor:'#333', color:'#fff', fontWeight:'bold', borderRadius:'0.3rem', float:'right'});

  closeBtn.on('focus', function() {
    $(this).css({color:'#ddd'});
  });
  closeBtn.on('blur', function() {
    $(this).css({color:'#fff'});
  });
  closeBtn.on('click', function(e) {
    e.preventDefault();
    popup.remove();
  });

  var narr = popIn.find('p');
  // narr.css({textAlign:'center'});
  // narr.css({textIndent:'1rem'});
  narr.html('본 사이트는 어떠한 경우라도 상업 및 영리를 목적으로 제작된 페이지가 아니며, <br /> 취업을 목적으로 한 개인 포트폴리오 사이트임을 알려드립니다. <br /> 문제가 되거나 삭제를 요구하신다면 메일(soyeongjung7@gmail.com)로 연락주시면 조취를 취하도록 하겠습니다. <br /> 사용된 이미지의 출처는 아래 링크를 통해 확인 하세요. <br /> <a href="./imageLink.html" target="_blank"> 이미지 출처 확인하기</a> <br />');
  narr.find('a').css({color:'#eb1646', fontWeight:'bold'});
  narr.find('a').on('focus', function() {
    $(this).css({color:'#f06', outline:0, padding:'0.3rem', borderRadius:'0.2rem', backgroundColor:'inherit'});
  });
  narr.find('a').on('blur', function() {
    $(this).css({color:'#eb1646'});
  });

  $(window).on('scroll', function() {
    var scrollResult = $(this).scrollTop();
    // console.log(scrollResult);
    // if(scrollResult >= 150){
    //   popup.slideUp(300);
    // }else{
    //   popup.slideDown(300);
    // }
    (scrollResult >= 10) ? popup.slideUp(300) : popup.slideDown(300);
  });


})(this.jQuery);