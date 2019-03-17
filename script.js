//Funzione che genera un numero random
function getRandom(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)+ min);
    return random;
}
//Funzione che controlla se un numero è pari ritorna booleano
function isEven(number) {
    var even = false;
    var number = number;

    if (number % 2 == 0){
        even = true;
    }
    return even;
}

var ColorPalettesRange = require("@chiarapassaro/color-palettes-range/src/js");
var baseColor = new ColorPalettesRange.Hsl(getRandom(0,360), getRandom(0,70), getRandom(0,50));
var palettes = new ColorPalettesRange.SetColorPalette(baseColor);
var numberBubbles = getRandom(10,30);
var randomDominant;
var bubbles = [];
var intervalAnim;

$(document).ready(function () {
    init(interval);
    var $button = $('#change-color');

    $button.click(function () {

        baseColor = new ColorPalettesRange.Hsl(getRandom(0,360), getRandom(0,100), getRandom(0,100));
        palettes.updateColorPalette(baseColor);
        randomDominant = palettes.randomDominant(numberBubbles, 20);
        clearInterval(intervalAnim);

        //fermo animazione
        bubbles.forEach(function (element) {
            element.children('.bubble').stop();
        });

    });

});

function interval(bubbles, template, $canvas) {
    console.log('interval');
     var max = bubbles.length -1;
        var rand = getRandom(0, max);
        var $bubbleContainer = bubbles[rand];
        $bubble = $bubbleContainer.children('.bubble');

        $bubble.animate({
                opacity: 0
            },
    {
            duration: 3000,
            complete: function() {
                console.log("animate remove");
                $bubble.stop();
                $bubbleContainer.remove();
                $bubbleContainer = createBubble(template, randomDominant, rand, $canvas);
                bubbles[rand] = $bubbleContainer;
                $canvas.append($bubbleContainer);
            },
        });
}

function init(callback) {
    var $canvas = $('#canvas');
    var template = $('.template-bubble .bubble__container');

    if(!isEven(numberBubbles)){
        numberBubbles ++;
    }

    randomDominant = palettes.randomDominant(numberBubbles, 20);


    for (var i = 0; i < numberBubbles; i++){
        var $bubbleContainer = createBubble(template, randomDominant, i, $canvas);
        bubbles.push($bubbleContainer);
        $canvas.append($bubbleContainer);
    }

    //parte l'animazione solo quando sono tutte pronte
    bubbles.forEach(function (element) {
        element.children('.bubble').dequeue("bubblequeue");
    });

    intervalAnim = setInterval(callback, 3000, bubbles, template, $canvas);
}

function createBubble(template, arraycolors, i, $canvas) {
    var $bubbleContainer = template.clone();
    var $bubble = $bubbleContainer.children('.bubble');
    var widthCanvas = $canvas.width();
    var heightCanvas = $canvas.height();

    var sizeContainer = getRandom(5,300);
    var sizeBubble = getRandom(2,sizeContainer);

    $bubbleContainer.width(sizeContainer);
    $bubbleContainer.height(sizeContainer);

    //console.log(arraycolors[i]);
    var thisColor = arraycolors[i].printHsl();

    $bubble.css('background-color', thisColor);
    $bubble.css('box-shadow', '0 0 30px ' + thisColor);
    $bubble.css('z-index', i);

    $bubble.width(sizeBubble);
    $bubble.height(sizeBubble);

    var coordinates = [];
    do{
        var top = getRandom(1,heightCanvas);
        var left = getRandom(1,widthCanvas);
    } while(coordinates.includes([top,left]));

    coordinates.push([top, left]);
    $bubbleContainer.offset({ top: top, left: left});

    //creo altre bolle dentro il container
    var numberSubBubble = getRandom(2,20);

    for (var j = 0; j < numberSubBubble; j++) {
        var newBubble = template.children('.bubble').clone();
        var widthContainer = $bubble.width();
        var newBubbleSize = getRandom(10,widthContainer);

        newBubble.width(newBubbleSize);
        newBubble.height(newBubbleSize);

        var blur = getRandom(30, 100);
        newBubble.css('box-shadow', '0 0 ' + blur +'px ' + thisColor);
        newBubble.css('background-color', thisColor);
        newBubble.css('z-index', -1);

        newBubble.offset({ top: getRandom(0, sizeContainer + newBubbleSize), left: getRandom(0, sizeContainer + newBubbleSize) });

        $bubble.append(newBubble);

        $bubble.animate({
            opacity: getRandom(0.3, 0.5), 'z-index': j
            },
            {
                duration: 3000,
                queue: 'bubblequeue',
                complete: function() {
                    console.log("animate");
                    $canvas.append($bubbleContainer);
                },
            });
    }

    return $bubbleContainer;

}