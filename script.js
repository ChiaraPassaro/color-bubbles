/*
  Utilities Function
*/
function getRandom(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)+ min);
    return random;
}
function isEven(number) {
    var even = false;
    if (number % 2 === 0){
        even = true;
    }
    return even;
}


/*
Color Palettes Range
*/
var ColorPalettesRange = require("@chiarapassaro/color-palettes-range/src/js");

/*
Gsap
*/
import {TweenLite} from "gsap/all";


/*
Set Base Color and palettes
*/
var baseColor = new ColorPalettesRange.Hsl(getRandom(0,360), getRandom(50,70), getRandom(50,80));
var palettes = new ColorPalettesRange.SetColorPalette(baseColor);
var numberBubbles = getRandom(10,30);

/*
Save Palette RandomDominant
*/

var randomDominant;
var bubbles = [];

/*
Start script
*/
$(document).ready(function () {
    var $hsl = $('#active-color .hsl');
    var $buttonColor = $('#change-color');

    //Init Animation
    init($hsl);

    $buttonColor.click(function () {
        baseColor = new ColorPalettesRange.Hsl(getRandom(0,360), getRandom(50,70), getRandom(50,80));
        $hsl.html(baseColor.printHsl());
        $hsl.parent().css('background-color', baseColor.printHsl());
        palettes.updateColorPalette(baseColor);
        randomDominant = palettes.randomDominant(numberBubbles, 20);
    });
});


/*
Start creation bubbles and animation
*/
function init($hsl) {
    var $canvas = $('#canvas');
    var template = $('.template-bubble .bubble__container');
    $hsl.parent().css('background-color', baseColor.printHsl());
    $hsl.append(baseColor.printHsl());

/*
    Bubbles must be even for Color Palettes Range
*/
    if(!isEven(numberBubbles)){
        numberBubbles ++;
    }

    randomDominant = palettes.randomDominant(numberBubbles, 20);

    for (var i = 0; i < numberBubbles; i++){
        var $bubbleContainer = createBubble(template, randomDominant, i, $canvas);
        bubbles.push($bubbleContainer);
        $canvas.append($bubbleContainer);
    }

/*
    Save bubbles in array for tweenlite
*/
    var childrenContainer = [];

    bubbles.forEach(function (element, i) {
        childrenContainer.push(element.children('.bubble'));
        showBubble(element, template, $canvas, i, 1, 0)
    });


}

/*
Create a bubble with random children bubbles
*/
function createBubble(template, arraycolors, i, $canvas) {
    var $bubbleContainer = template.clone();
    var $bubble = $bubbleContainer.children('.bubble');
    var widthCanvas = $canvas.width();
    var heightCanvas = $canvas.height();

    var sizeContainer = getRandom(5,300);
    var sizeBubble = getRandom(2,sizeContainer);

    $bubbleContainer.width(sizeContainer);
    $bubbleContainer.height(sizeContainer);

    var thisColor = arraycolors[i].printHsl();
    var blurPrimary = getRandom(30, 60);

    $bubble.css('background-color', 'transparent');
    $bubble.css('box-shadow', 'inset 0 0 '+blurPrimary+'px ' + thisColor);
    $bubble.css('z-index', i);
    $bubble.css('opacity', 0);

    $bubble.width(sizeBubble);
    $bubble.height(sizeBubble);

    var coordinates = [];
    do{
        var top = getRandom(1,heightCanvas);
        var left = getRandom(1,widthCanvas);
    } while(coordinates.includes([top,left]));

    coordinates.push([top, left]);
    $bubbleContainer.offset({ top: top, left: left});

    var numberSubBubble = getRandom(2,20);

    for (var j = 0; j < numberSubBubble; j++) {
        var newBubble = template.children('.bubble').clone();
        var widthContainer = $bubble.width();
        var newBubbleSize = getRandom(10,widthContainer);

        newBubble.width(newBubbleSize);
        newBubble.height(newBubbleSize);

        var blur = getRandom(30, 60);
        newBubble.css('box-shadow', 'inset 0 0 ' + blur +'px ' + thisColor);
        $bubble.css('background-color', 'transparent');
        newBubble.css('z-index', -1);

        newBubble.offset({ top: getRandom(0, sizeContainer + newBubbleSize), left: getRandom(0, sizeContainer + newBubbleSize) });

        $bubble.append(newBubble);

        $canvas.append($bubbleContainer);

    }

    return $bubbleContainer;

}

/*
Show new bubble animation
*/
function showBubble($bubble, template, $canvas, i, duration, delay) {
    TweenLite.to($bubble, duration, {
        opacity: getRandom(0.6, 0.8),
        zIndex: i,
        delay: delay,
        ease: Power1.easeNone,
        onStart: function () {
        },
        onComplete: function () {
            TweenLite.to($bubble, 2, {
                opacity: 0,
                zIndex: i,
                delay: delay,
                ease: Power1.easeNone,
                onComplete:
                    function () {
                        removeCreateBubble($bubble, template, $canvas, i);
                    }
            });
        }
    });
}


/*
Remove and then create a bubble
*/
function removeCreateBubble($bubble, template, $canvas, i) {
    $bubble.remove();
    var $bubbleContainer = createBubble(template, randomDominant, getRandom(0, (bubbles.length - 1)), $canvas);

    $bubble = $bubbleContainer.children('.bubble');
    bubbles[i] = $bubbleContainer;
    $canvas.append($bubbleContainer);

    //start new animation
    showBubble($bubble, template, $canvas, i, 2, i+2);
}