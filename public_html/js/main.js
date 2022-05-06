var img = new Image();
img.onload = function () {
    var img = new Image();
    img.onload = function () {
        var el = document.getElementById("first-lockup");
        el.classList.add("show");
    }
    img.src = "images/Plonq.png";
}
img.src = "images/l.png";

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 600})
// animate
.setTween("#animate", {scale: 1.1})
// .addIndicators({name: "1 (duration: 600)"}) // add indicators (requires plugin)
.addTo(controller);
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 600})
// animate
.setTween("#animate2", {scale: 0.9})
// .addIndicators({name: "1 (duration: 600)"}) // add indicators (requires plugin)
.addTo(controller);


var images = new Array();
for (i = 1; i < 119; i++) {
    images.push("images/plonqImg/" + i + ".png");
}

//preloader
var preloaded = 0;
 
function preLoader(e) {
    for (var i = 0; i < images.length; i++) {
        var tempImage = new Image();
         
        tempImage.addEventListener("load", progress, true);
        tempImage.src = images[i];
    }
}
 
function progress() {
    preloaded++;
     
    if (preloaded == images.length) {
        //ALL Images have been loaded, perform the desired action
    }
}
this.addEventListener("DOMContentLoaded", preLoader, true);
//endPreloader

var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 1,
    {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        immediateRender: true,			// load first image automatically
        ease: Linear.easeIn,			// show every image the same ammount of time
        onUpdate: function () {
          $("#changeImg").attr("src", images[obj.curImg]); // set the image source
        }
    }
);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 1500})
.setTween(tween)
// .addIndicators({name: "2 (duration: 1500)"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger3"
})
.setTween("#animate3", 0.5, {backgroundColor: "white"}) // trigger a TweenMax.to tween
// .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger4"
})
.setTween("#animate4", 0.5, {opacity: 1, top: '15%'}) // trigger a TweenMax.to tween
// .addIndicators({name: "4 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger5"
})
.setTween("#animate5", 0.5, {opacity: 1, top: '55%'}) // trigger a TweenMax.to tween
// .addIndicators({name: "5 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger6"
})
.setTween("#animate6", 0.5, {opacity: 1, bottom: '25%'}) // trigger a TweenMax.to tween
// .addIndicators({name: "6 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);