// javascript file for all node classes

function setTitleImage() {
  if (featured_image) {
    if ($('#ap-page-header')) {
      $('#ap-page-header').css('background', 'url("' + featured_image + '") no-repeat center top #def');
    }
  }
}

function setNavHover() {
	$("#ap-nav-bar li").mouseover (function() {
		$(this).filter(':not(:animated)').addClass("colored-header-nav", 200);
	});
	$("#ap-nav-bar li").mouseout (function() {
		$(this).removeClass("colored-header-nav", 400);
	});
}

$(document).ready (function() {
	setTitleImage();
	setNavHover();
});
