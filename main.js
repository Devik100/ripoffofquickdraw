quick_draw_data_set=
["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]
var random_number = Math.floor(Math.random()*346)
console.log(random_number)
var illustarate = quick_draw_data_set[random_number]
document.getElementById("drawme").innerHTML="replicate: " + illustarate
var timerscounter = 3000
var timercheck = ""
var drawnskecth = ""
var answerholder = ""
var scores = -2999
function draw() {
    console.log(drawnskecth);
    checkSketch()
    console.log(drawnskecth);
    if (drawnskecth==illustarate) {
        answerholder = "set"
        scores++
        document.getElementById("scores").innerHTML="Score: " + scores
    }
    strokeWeight(10);
    stroke("black");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    };
}
function preload() {
    // Load the DoodleNet model and store it in the classifier variable
    classifier = ml5.imageClassifier('DoodleNet', modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model loaded successfully!');}
function setup() {
    canvas = createCanvas(280, 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas);
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function updateCanvas() {
    background("white")
    random_number=Math.floor(Math.random()*418)
    console.log(random_number)
    var illustarate = quick_draw_data_set[random_number]
    document.getElementById("drawme").innerHTML="Draw: " + illustarate
}
function checkSketch() {
    timerscounter--
    document.getElementById("runspeedness").innerHTML = "Time: " + timerscounter
    if (timerscounter < 1) {
        timerscounter = 3000
        timercheck = "completed"
        console.log(timerscounter>1)
    }
    if (timercheck=="completed" || answerholder=="set") {
        timercheck=""
        answerholder=""
        updateCanvas()
    }
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        drawnskecth = ""
        document.getElementById("label").innerHTML = "You drew: " + results[0].label;
        document.getElementById("confi").innerHTML = "Confidence: " + Math.round(results[0].confidence*100) + "%";
    }
}