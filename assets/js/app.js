/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*		0. Loading Div
/*-----------------------------------------------------------------------------------*/
$(window).load(function()
	{
	var l=$("#loading"),s=
		{
		display:"none",background:"none",width:"0",height:"0"
	};
	l.fadeOut("1000",function()
		{
		l.css(s);
	}
	);
}
);

/*-----------------------------------------------------------------------------------*/
/*		1.	Start Document
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){

/*-----------------------------------------------------------------------------------*/
/*		2.	Header Function
/*-----------------------------------------------------------------------------------*/
	(function(){

		var timeoutScroll,
		n = $('#header-wrap'),
		s = $('#scrolldown'),
		l = $('#logo'),
		w = $(window);

		function setOffset(){
			bannerH=$('#top').height();
		}

		function navTop(){

			if(w.scrollTop()>bannerH)
				{
				n.stop().animate(
					{
					top:0
				},100),s.stop().fadeOut("slow"),l.stop().animate(
					{
					opacity:0
				},400);
			}
			else
				{
				n.stop().animate(
					{
					top:-61
				},100),l.stop().animate(
					{
					opacity:1
				},400)
			}
		}

		setOffset();

		w.scroll(function(){

			clearTimeout(timeoutScroll);
			timeoutScroll=setTimeout(navTop,35)
		}
		)
	}
	)();
	
	//  Isotope Masonry fix
    $(function(){$.Isotope.prototype._getMasonryGutterColumns=function(){var e=this.options.masonry&&this.options.masonry.gutterWidth||0;containerWidth=this.element.width();this.masonry.columnWidth=this.options.masonry&&this.options.masonry.columnWidth||this.$filteredAtoms.outerWidth(true)||containerWidth;this.masonry.columnWidth+=e;this.masonry.cols=Math.floor((containerWidth+e)/this.masonry.columnWidth);this.masonry.cols=Math.max(this.masonry.cols,1)};$.Isotope.prototype._masonryReset=function(){this.masonry={};this._getMasonryGutterColumns();var e=this.masonry.cols;this.masonry.colYs=[];while(e--){this.masonry.colYs.push(0)}};$.Isotope.prototype._masonryResizeChanged=function(){var e=this.masonry.cols;this._getMasonryGutterColumns();return this.masonry.cols!==e};var e=$("#gallery_container");e.isotope({itemSelector:".item",masonry:{columnWidth:300,gutterWidth:20}})})

/*-----------------------------------------------------------------------------------*/
/*		3.	Fancybox
/*-----------------------------------------------------------------------------------*/
	$(".fancybox").fancybox(
		{
		'openEffect':'fade','closeEffect':'fade','openSpeed':300,'closeSpeed':300,'overlayShow':true,'titleShow':false,'margin':10,'padding':0,closeClick:true,helpers:
			{
			overlay:
				{
				css:
					{
					'background':'rgba(255,255,255,.9)'
				}
			}
		}
	}
	);

/*-----------------------------------------------------------------------------------*/
/*		4.	Image Overlay
/*-----------------------------------------------------------------------------------*/
	$('.item a').hover(function(){
		jQuery(this).find('.overlay').fadeIn(150);
	}
	,function()
		{
		jQuery(this).find('.overlay').fadeOut(150);
	}
	);

/*-----------------------------------------------------------------------------------*/
/*		5.	Background Resize
/*-----------------------------------------------------------------------------------*/
	$("#top").ezBgResize(
		{
		img:"assets/images/bg.jpg"
	}
	);

	function resizetop()
		{
		var width=document.documentElement.clientWidth,height=document.documentElement.clientHeight,source=document.getElementById('top');
		source.style.height=height+'px',
		source.style.width=width+'px';
	}
	function addEvent(element,type,listener)
		{
		if(element.addEventListener)
			{
			element.addEventListener(type,listener,false)
		}
		else if(element.attachEvent)
			{
			element.attachEvent("on"+type,listener)
		}
	}
	addEvent(window,"load",resizetop);
	addEvent(window,"resize",resizetop);
	function calhight()
		{
		var win=jQuery(window).height();
		if(win<"710")
			{
			jQuery("#scrolldown").css("display","none")
		}
		else
			{
			jQuery("#scrolldown").css("display","block")
		}
	}
	calhight();
	jQuery(window).resize(function()
		{
		calhight()
	}
	);
	
	$(document).ready(function()
		{
		var scrollDuring=500,scrollBegin=0;
		$('a.scroll').click(function()
			{
			if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname)
				{
				var t=$(this.hash);
				t=t.width&&t||$('[id='+this.hash.slice(1)+']');
				if(t.width)
					{
					var targetOffset=t.offset().top-scrollBegin-65;
					$('html,body').animate(
						{
						scrollTop:targetOffset
					}
					,scrollDuring);
					return false
				}
			}
		}
		)
	}
	)
}
);
