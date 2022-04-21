$(document).ready(function()
{
if (localStorage.getItem('ribbonCut') != 'cut') {
$('.ribbon').delay(2000).fadeIn();
};

$(".ribbon").click(function(){
$(".ribbon--l").addClass("hide");
$(".ribbon--r").addClass("hide");
$(".bow").addClass("hide");
$("#imgFollow").hide();


	localStorage.setItem('ribbonCut','cut');
	window.setTimeout(()=>{
		window.location.replace('dist/index.html')
	},1000);
});
});

$(document).mousemove(function (e) {
$('#imgFollow').offset({
left: e.pageX + 30,
top: e.pageY - 20
});
$('#imgFollow').css('z-index', '1000');
});