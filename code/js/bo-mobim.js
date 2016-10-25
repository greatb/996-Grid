ready(function() {
	hideMenu();
});

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}


function fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = '';


  var last = +new Date();
  var tick = function() {
    opacity += (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function fadeOut(el) {
  var opacity = 1;

  el.style.opacity = 0;
  el.style.filter = '';



  var last = +new Date();
  var tick = function() {
    opacity -= (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + 0|(100 * opacity) + ')';

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
    else
    {
    	console.pront

    }
  };

  tick();
}



// main -------
function showMenu(id) {
	hideMenu();

	var homeM = document.getElementById('homem');
	homeM.setAttribute('style', 'display: none;');

  document.getElementById('hidem')
    .setAttribute('style', 'display: inline;');
    fadeIn(document.getElementById('hidem'));

  var el = document.getElementById(id);
    el.setAttribute('style', 'display: block;')
    //el.scrollTop = 0;
    window.scrollTo(0, 0)
    fadeIn(el);


    //myMove(el);
}

function hideMenu() {
	var homeM = document.getElementById('homem');
	document.getElementById('mainm').setAttribute('style', 'display: none;');
	document.getElementById('sidem').setAttribute('style', 'display: none;');
	document.getElementById('hidem').setAttribute('style', 'display: none;');
	homeM.setAttribute('style', 'display: inline;');

	fadeOut(document.getElementById('mainm'));
	fadeOut(document.getElementById('sidem'));
	fadeOut(document.getElementById('hidem'));
	fadeIn(homeM);
}


function myMove(name) {
    var elem = name;
    var pos = 250;
    var id = setInterval(frame, 20);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--; 
            elem.style.right = pos + 'px'; 
        }
    }
}