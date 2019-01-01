
// We need to empty the textarea when loading and reloading the page, as it is full of text all the time
window.onload = function() {
	document.getElementById("message").value = "";
};

// Create an empty array with 100 elements that are empty initially
var choice = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];

// find the textarea object
var area = document.getElementById("message");


// find all 100 buttons objects and keep them in variables one, two, three,   hundred

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");


var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
var thirteen = document.getElementById("thirteen");
var fourteen = document.getElementById("fourteen");
var fifteen = document.getElementById("fifteen");
var sixteen = document.getElementById("sixteen");
var seventeen = document.getElementById("seventeen");
var eighteen = document.getElementById("eighteen");
var nineteen = document.getElementById("nineteen");
var twenty = document.getElementById("twenty");


var twentyone = document.getElementById("twentyone");
var twentytwo = document.getElementById("twentytwo");
var twentythree = document.getElementById("twentythree");
var twentyfour = document.getElementById("twentyfour");
var twentyfive = document.getElementById("twentyfive");
var twentysix = document.getElementById("twentysix");
var twentyseven = document.getElementById("twentyseven");
var twentyeight = document.getElementById("twentyeight");
var twentynine = document.getElementById("twentynine");
var thirty = document.getElementById("thirty");


var thirtyone = document.getElementById("thirtyone");
var thirtytwo = document.getElementById("thirtytwo");
var thirtythree = document.getElementById("thirtythree");
var thirtyfour = document.getElementById("thirtyfour");
var thirtyfive = document.getElementById("thirtyfive");
var thirtysix = document.getElementById("thirtysix");
var thirtyseven = document.getElementById("thirtyseven");
var thirtyeight = document.getElementById("thirtyeight");
var thirtynine = document.getElementById("thirtynine");
var forty = document.getElementById("forty");


var fortyone = document.getElementById("fortyone");
var fortytwo = document.getElementById("fortytwo");
var fortythree = document.getElementById("fortythree");
var fortyfour = document.getElementById("fortyfour");
var fortyfive = document.getElementById("fortyfive");
var fortysix = document.getElementById("fortysix");
var fortyseven = document.getElementById("fortyseven");
var fortyeight = document.getElementById("fortyeight");
var fortynine = document.getElementById("fortynine");
var fifty = document.getElementById("fifty");


var fiftyone = document.getElementById("fiftyone");
var fiftytwo = document.getElementById("fiftytwo");
var fiftythree = document.getElementById("fiftythree");
var fiftyfour = document.getElementById("fiftyfour");
var fiftyfive = document.getElementById("fiftyfive");
var fiftysix = document.getElementById("fiftysix");
var fiftyseven = document.getElementById("fiftyseven");
var fiftyeight = document.getElementById("fiftyeight");
var fiftynine = document.getElementById("fiftynine");
var sixty = document.getElementById("sixty");


var sixtyone = document.getElementById("sixtyone");
var sixtytwo = document.getElementById("sixtytwo");
var sixtythree = document.getElementById("sixtythree");
var sixtyfour = document.getElementById("sixtyfour");
var sixtyfive = document.getElementById("sixtyfive");
var sixtysix = document.getElementById("sixtysix");
var sixtyseven = document.getElementById("sixtyseven");
var sixtyeight = document.getElementById("sixtyeight");
var sixtynine = document.getElementById("sixtynine");
var seventy = document.getElementById("seventy");


var seventyone = document.getElementById("seventyone");
var seventytwo = document.getElementById("seventytwo");
var seventythree = document.getElementById("seventythree");
var seventyfour = document.getElementById("seventyfour");
var seventyfive = document.getElementById("seventyfive");
var seventysix = document.getElementById("seventysix");
var seventyseven = document.getElementById("seventyseven");
var seventyeight = document.getElementById("seventyeight");
var seventynine = document.getElementById("seventynine");
var eighty = document.getElementById("eighty");


var eightyone = document.getElementById("eightyone");
var eightytwo = document.getElementById("eightytwo");
var eightythree = document.getElementById("eightythree");
var eightyfour = document.getElementById("eightyfour");
var eightyfive = document.getElementById("eightyfive");
var eightysix = document.getElementById("eightysix");
var eightyseven = document.getElementById("eightyseven");
var eightyeight = document.getElementById("eightyeight");
var eightynine = document.getElementById("eightynine");
var ninety = document.getElementById("ninety");


var ninetyone = document.getElementById("ninetyone");
var ninetytwo = document.getElementById("ninetytwo");
var ninetythree = document.getElementById("ninetythree");
var ninetyfour = document.getElementById("ninetyfour");
var ninetyfive = document.getElementById("ninetyfive");
var ninetysix = document.getElementById("ninetysix");
var ninetyseven = document.getElementById("ninetyseven");
var ninetyeight = document.getElementById("ninetyeight");
var ninetynine = document.getElementById("ninetynine");
var hundred = document.getElementById("hundred");






// Add handlers for 'click' events by providing callback functions.
// Whenever the button element twenty is clicked, the callback function twentiethFunction will be executed

one.addEventListener("click",firstFunction);
two.addEventListener("click",secondFunction);
three.addEventListener("click",thirdFunction);
four.addEventListener("click",fourthFunction);
five.addEventListener("click",fifthFunction);
six.addEventListener("click",sixthFunction);
seven.addEventListener("click",seventhFunction);
eight.addEventListener("click",eighthFunction);
nine.addEventListener("click",ninthFunction);
ten.addEventListener("click",tenthFunction);


eleven.addEventListener("click",eleventhFunction);
twelve.addEventListener("click",twelfthFunction);
thirteen.addEventListener("click",thirteenthFunction);
fourteen.addEventListener("click",fourteenthFunction);
fifteen.addEventListener("click",fifteenthFunction);
sixteen.addEventListener("click",sixteenthFunction);
seventeen.addEventListener("click",seventeenthFunction);
eighteen.addEventListener("click",eighteenthFunction);
nineteen.addEventListener("click",nineteenthFunction);
twenty.addEventListener("click",twentiethFunction);



twentyone.addEventListener("click",twentyfirstFunction);
twentytwo.addEventListener("click",twentysecondFunction);
twentythree.addEventListener("click",twentythirdFunction);
twentyfour.addEventListener("click",twentyfourthFunction);
twentyfive.addEventListener("click",twentyfifthFunction);
twentysix.addEventListener("click",twentysixthFunction);
twentyseven.addEventListener("click",twentyseventhFunction);
twentyeight.addEventListener("click",twentyeighthFunction);
twentynine.addEventListener("click",twentyninthFunction);
thirty.addEventListener("click",thirtiethFunction);


thirtyone.addEventListener("click",thirtyfirstFunction);
thirtytwo.addEventListener("click",thirtysecondFunction);
thirtythree.addEventListener("click",thirtythirdFunction);
thirtyfour.addEventListener("click",thirtyfourthFunction);
thirtyfive.addEventListener("click",thirtyfifthFunction);
thirtysix.addEventListener("click",thirtysixthFunction);
thirtyseven.addEventListener("click",thirtyseventhFunction);
thirtyeight.addEventListener("click",thirtyeighthFunction);
thirtynine.addEventListener("click",thirtyninthFunction);
forty.addEventListener("click",fortiethFunction);



fortyone.addEventListener("click",fortyfirstFunction);
fortytwo.addEventListener("click",fortysecondFunction);
fortythree.addEventListener("click",fortythirdFunction);
fortyfour.addEventListener("click",fortyfourthFunction);
fortyfive.addEventListener("click",fortyfifthFunction);
fortysix.addEventListener("click",fortysixthFunction);
fortyseven.addEventListener("click",fortyseventhFunction);
fortyeight.addEventListener("click",fortyeighthFunction);
fortynine.addEventListener("click",fortyninthFunction);
fifty.addEventListener("click",fiftiethFunction);



fiftyone.addEventListener("click",fiftyfirstFunction);
fiftytwo.addEventListener("click",fiftysecondFunction);
fiftythree.addEventListener("click",fiftythirdFunction);
fiftyfour.addEventListener("click",fiftyfourthFunction);
fiftyfive.addEventListener("click",fiftyfifthFunction);
fiftysix.addEventListener("click",fiftysixthFunction);
fiftyseven.addEventListener("click",fiftyseventhFunction);
fiftyeight.addEventListener("click",fiftyeighthFunction);
fiftynine.addEventListener("click",fiftyninthFunction);
sixty.addEventListener("click",sixtiethFunction);



sixtyone.addEventListener("click",sixtyfirstFunction);
sixtytwo.addEventListener("click",sixtysecondFunction);
sixtythree.addEventListener("click",sixtythirdFunction);
sixtyfour.addEventListener("click",sixtyfourthFunction);
sixtyfive.addEventListener("click",sixtyfifthFunction);
sixtysix.addEventListener("click",sixtysixthFunction);
sixtyseven.addEventListener("click",sixtyseventhFunction);
sixtyeight.addEventListener("click",sixtyeighthFunction);
sixtynine.addEventListener("click",sixtyninthFunction);
seventy.addEventListener("click",seventiethFunction);




seventyone.addEventListener("click",seventyfirstFunction);
seventytwo.addEventListener("click",seventysecondFunction);
seventythree.addEventListener("click",seventythirdFunction);
seventyfour.addEventListener("click",seventyfourthFunction);
seventyfive.addEventListener("click",seventyfifthFunction);
seventysix.addEventListener("click",seventysixthFunction);
seventyseven.addEventListener("click",seventyseventhFunction);
seventyeight.addEventListener("click",seventyeighthFunction);
seventynine.addEventListener("click",seventyninthFunction);
eighty.addEventListener("click",eightiethFunction);



eightyone.addEventListener("click",eightyfirstFunction);
eightytwo.addEventListener("click",eightysecondFunction);
eightythree.addEventListener("click",eightythirdFunction);
eightyfour.addEventListener("click",eightyfourthFunction);
eightyfive.addEventListener("click",eightyfifthFunction);
eightysix.addEventListener("click",eightysixthFunction);
eightyseven.addEventListener("click",eightyseventhFunction);
eightyeight.addEventListener("click",eightyeighthFunction);
eightynine.addEventListener("click",eightyninthFunction);
ninety.addEventListener("click",ninetiethFunction);




ninetyone.addEventListener("click",ninetyfirstFunction);
ninetytwo.addEventListener("click",ninetysecondFunction);
ninetythree.addEventListener("click",ninetythirdFunction);
ninetyfour.addEventListener("click",ninetyfourthFunction);
ninetyfive.addEventListener("click",ninetyfifthFunction);
ninetysix.addEventListener("click",ninetysixthFunction);
ninetyseven.addEventListener("click",ninetyseventhFunction);
ninetyeight.addEventListener("click",ninetyeighthFunction);
ninetynine.addEventListener("click",ninetyninthFunction);
hundred.addEventListener("click",hundredthFunction);









// Find a question block of the first button and make it respond to mouseover event.Function will show text in tooltip
var question1 = one.getElementsByClassName("sphere")[0]; 
question1.addEventListener("mouseover", over1);
question1.addEventListener("mouseout", out1);

var question2 = two.getElementsByClassName("sphere")[0]; 
question2.addEventListener("mouseover", over1);
question2.addEventListener("mouseout", out1);

var question3 = three.getElementsByClassName("sphere")[0]; 
question3.addEventListener("mouseover", over1);
question3.addEventListener("mouseout", out1);

var question4 = four.getElementsByClassName("sphere")[0]; 
question4.addEventListener("mouseover", over1);
question4.addEventListener("mouseout", out1);

var question5 = five.getElementsByClassName("sphere")[0]; 
question5.addEventListener("mouseover", over1);
question5.addEventListener("mouseout", out1);




var question6 = six.getElementsByClassName("sphere")[0]; 
question6.addEventListener("mouseover", over1);
question6.addEventListener("mouseout", out1);

var question7 = seven.getElementsByClassName("sphere")[0]; 
question7.addEventListener("mouseover", over1);
question7.addEventListener("mouseout", out1);

var question8 = eight.getElementsByClassName("sphere")[0]; 
question8.addEventListener("mouseover", over1);
question8.addEventListener("mouseout", out1);

var question9 = nine.getElementsByClassName("sphere")[0]; 
question9.addEventListener("mouseover", over1);
question9.addEventListener("mouseout", out1);

var question10 = ten.getElementsByClassName("sphere")[0]; 
question10.addEventListener("mouseover", over1);
question10.addEventListener("mouseout", out1);







var question11 = eleven.getElementsByClassName("sphere")[0]; 
question11.addEventListener("mouseover", over1);
question11.addEventListener("mouseout", out1);

var question12 = twelve.getElementsByClassName("sphere")[0]; 
question12.addEventListener("mouseover", over1);
question12.addEventListener("mouseout", out1);

var question13 = thirteen.getElementsByClassName("sphere")[0]; 
question13.addEventListener("mouseover", over1);
question13.addEventListener("mouseout", out1);

var question14 = fourteen.getElementsByClassName("sphere")[0]; 
question14.addEventListener("mouseover", over1);
question14.addEventListener("mouseout", out1);

var question15 = fifteen.getElementsByClassName("sphere")[0]; 
question15.addEventListener("mouseover", over1);
question15.addEventListener("mouseout", out1);




var question16 = sixteen.getElementsByClassName("sphere")[0]; 
question16.addEventListener("mouseover", over1);
question16.addEventListener("mouseout", out1);

var question17 = seventeen.getElementsByClassName("sphere")[0]; 
question17.addEventListener("mouseover", over1);
question17.addEventListener("mouseout", out1);

var question18 = eighteen.getElementsByClassName("sphere")[0]; 
question18.addEventListener("mouseover", over1);
question18.addEventListener("mouseout", out1);

var question19 = nineteen.getElementsByClassName("sphere")[0]; 
question19.addEventListener("mouseover", over1);
question19.addEventListener("mouseout", out1);

var question20 = twenty.getElementsByClassName("sphere")[0]; 
question20.addEventListener("mouseover", over1);
question20.addEventListener("mouseout", out1);









var question21 = twentyone.getElementsByClassName("sphere")[0]; 
question21.addEventListener("mouseover", over1);
question21.addEventListener("mouseout", out1);

var question22 = twentytwo.getElementsByClassName("sphere")[0]; 
question22.addEventListener("mouseover", over1);
question22.addEventListener("mouseout", out1);

var question23 = twentythree.getElementsByClassName("sphere")[0]; 
question23.addEventListener("mouseover", over1);
question23.addEventListener("mouseout", out1);

var question24 = twentyfour.getElementsByClassName("sphere")[0]; 
question24.addEventListener("mouseover", over1);
question24.addEventListener("mouseout", out1);

var question25 = twentyfive.getElementsByClassName("sphere")[0]; 
question25.addEventListener("mouseover", over1);
question25.addEventListener("mouseout", out1);




var question26 = twentysix.getElementsByClassName("sphere")[0]; 
question26.addEventListener("mouseover", over1);
question26.addEventListener("mouseout", out1);

var question27 = twentyseven.getElementsByClassName("sphere")[0]; 
question27.addEventListener("mouseover", over1);
question27.addEventListener("mouseout", out1);

var question28 = twentyeight.getElementsByClassName("sphere")[0]; 
question28.addEventListener("mouseover", over1);
question28.addEventListener("mouseout", out1);

var question29 = twentynine.getElementsByClassName("sphere")[0]; 
question29.addEventListener("mouseover", over1);
question29.addEventListener("mouseout", out1);

var question30 = thirty.getElementsByClassName("sphere")[0]; 
question30.addEventListener("mouseover", over1);
question30.addEventListener("mouseout", out1);











var question31 = thirtyone.getElementsByClassName("sphere")[0]; 
question31.addEventListener("mouseover", over1);
question31.addEventListener("mouseout", out1);

var question32 = thirtytwo.getElementsByClassName("sphere")[0]; 
question32.addEventListener("mouseover", over1);
question32.addEventListener("mouseout", out1);

var question33 = thirtythree.getElementsByClassName("sphere")[0]; 
question33.addEventListener("mouseover", over1);
question33.addEventListener("mouseout", out1);

var question34 = thirtyfour.getElementsByClassName("sphere")[0]; 
question34.addEventListener("mouseover", over1);
question34.addEventListener("mouseout", out1);

var question35 = thirtyfive.getElementsByClassName("sphere")[0]; 
question35.addEventListener("mouseover", over1);
question35.addEventListener("mouseout", out1);




var question36 = thirtysix.getElementsByClassName("sphere")[0]; 
question36.addEventListener("mouseover", over1);
question36.addEventListener("mouseout", out1);

var question37 = thirtyseven.getElementsByClassName("sphere")[0]; 
question37.addEventListener("mouseover", over1);
question37.addEventListener("mouseout", out1);

var question38 = thirtyeight.getElementsByClassName("sphere")[0]; 
question38.addEventListener("mouseover", over1);
question38.addEventListener("mouseout", out1);

var question39 = thirtynine.getElementsByClassName("sphere")[0]; 
question39.addEventListener("mouseover", over1);
question39.addEventListener("mouseout", out1);

var question40 = forty.getElementsByClassName("sphere")[0]; 
question40.addEventListener("mouseover", over1);
question40.addEventListener("mouseout", out1);











var question41 = fortyone.getElementsByClassName("sphere")[0]; 
question41.addEventListener("mouseover", over1);
question41.addEventListener("mouseout", out1);

var question42 = fortytwo.getElementsByClassName("sphere")[0]; 
question42.addEventListener("mouseover", over1);
question42.addEventListener("mouseout", out1);

var question43 = fortythree.getElementsByClassName("sphere")[0]; 
question43.addEventListener("mouseover", over1);
question43.addEventListener("mouseout", out1);

var question44 = fortyfour.getElementsByClassName("sphere")[0]; 
question44.addEventListener("mouseover", over1);
question44.addEventListener("mouseout", out1);

var question45 = fortyfive.getElementsByClassName("sphere")[0]; 
question45.addEventListener("mouseover", over1);
question45.addEventListener("mouseout", out1);




var question46 = fortysix.getElementsByClassName("sphere")[0]; 
question46.addEventListener("mouseover", over1);
question46.addEventListener("mouseout", out1);

var question47 = fortyseven.getElementsByClassName("sphere")[0]; 
question47.addEventListener("mouseover", over1);
question47.addEventListener("mouseout", out1);

var question48 = fortyeight.getElementsByClassName("sphere")[0]; 
question48.addEventListener("mouseover", over1);
question48.addEventListener("mouseout", out1);

var question49 = fortynine.getElementsByClassName("sphere")[0]; 
question49.addEventListener("mouseover", over1);
question49.addEventListener("mouseout", out1);

var question50 = fifty.getElementsByClassName("sphere")[0]; 
question50.addEventListener("mouseover", over1);
question50.addEventListener("mouseout", out1);














var question51 = fiftyone.getElementsByClassName("sphere")[0]; 
question51.addEventListener("mouseover", over1);
question51.addEventListener("mouseout", out1);

var question52 = fiftytwo.getElementsByClassName("sphere")[0]; 
question52.addEventListener("mouseover", over1);
question52.addEventListener("mouseout", out1);

var question53 = fiftythree.getElementsByClassName("sphere")[0]; 
question53.addEventListener("mouseover", over1);
question53.addEventListener("mouseout", out1);

var question54 = fiftyfour.getElementsByClassName("sphere")[0]; 
question54.addEventListener("mouseover", over1);
question54.addEventListener("mouseout", out1);

var question55 = fiftyfive.getElementsByClassName("sphere")[0]; 
question55.addEventListener("mouseover", over1);
question55.addEventListener("mouseout", out1);




var question56 = fiftysix.getElementsByClassName("sphere")[0]; 
question56.addEventListener("mouseover", over1);
question56.addEventListener("mouseout", out1);

var question57 = fiftyseven.getElementsByClassName("sphere")[0]; 
question57.addEventListener("mouseover", over1);
question57.addEventListener("mouseout", out1);

var question58 = fiftyeight.getElementsByClassName("sphere")[0]; 
question58.addEventListener("mouseover", over1);
question58.addEventListener("mouseout", out1);

var question59 = fiftynine.getElementsByClassName("sphere")[0]; 
question59.addEventListener("mouseover", over1);
question59.addEventListener("mouseout", out1);

var question60 = sixty.getElementsByClassName("sphere")[0]; 
question60.addEventListener("mouseover", over1);
question60.addEventListener("mouseout", out1);














var question61 = sixtyone.getElementsByClassName("sphere")[0]; 
question61.addEventListener("mouseover", over1);
question61.addEventListener("mouseout", out1);

var question62 = sixtytwo.getElementsByClassName("sphere")[0]; 
question62.addEventListener("mouseover", over1);
question62.addEventListener("mouseout", out1);

var question63 = sixtythree.getElementsByClassName("sphere")[0]; 
question63.addEventListener("mouseover", over1);
question63.addEventListener("mouseout", out1);

var question64 = sixtyfour.getElementsByClassName("sphere")[0]; 
question64.addEventListener("mouseover", over1);
question64.addEventListener("mouseout", out1);

var question65 = sixtyfive.getElementsByClassName("sphere")[0]; 
question65.addEventListener("mouseover", over1);
question65.addEventListener("mouseout", out1);




var question66 = sixtysix.getElementsByClassName("sphere")[0]; 
question66.addEventListener("mouseover", over1);
question66.addEventListener("mouseout", out1);

var question67 = sixtyseven.getElementsByClassName("sphere")[0]; 
question67.addEventListener("mouseover", over1);
question67.addEventListener("mouseout", out1);

var question68 = sixtyeight.getElementsByClassName("sphere")[0]; 
question68.addEventListener("mouseover", over1);
question68.addEventListener("mouseout", out1);

var question69 = sixtynine.getElementsByClassName("sphere")[0]; 
question69.addEventListener("mouseover", over1);
question69.addEventListener("mouseout", out1);

var question70 = seventy.getElementsByClassName("sphere")[0]; 
question70.addEventListener("mouseover", over1);
question70.addEventListener("mouseout", out1);












var question71 = seventyone.getElementsByClassName("sphere")[0]; 
question71.addEventListener("mouseover", over1);
question71.addEventListener("mouseout", out1);

var question72 = seventytwo.getElementsByClassName("sphere")[0]; 
question72.addEventListener("mouseover", over1);
question72.addEventListener("mouseout", out1);

var question73 = seventythree.getElementsByClassName("sphere")[0]; 
question73.addEventListener("mouseover", over1);
question73.addEventListener("mouseout", out1);

var question74 = seventyfour.getElementsByClassName("sphere")[0]; 
question74.addEventListener("mouseover", over1);
question74.addEventListener("mouseout", out1);

var question75 = seventyfive.getElementsByClassName("sphere")[0]; 
question75.addEventListener("mouseover", over1);
question75.addEventListener("mouseout", out1);




var question76 = seventysix.getElementsByClassName("sphere")[0]; 
question76.addEventListener("mouseover", over1);
question76.addEventListener("mouseout", out1);

var question77 = seventyseven.getElementsByClassName("sphere")[0]; 
question77.addEventListener("mouseover", over1);
question77.addEventListener("mouseout", out1);

var question78 = seventyeight.getElementsByClassName("sphere")[0]; 
question78.addEventListener("mouseover", over1);
question78.addEventListener("mouseout", out1);

var question79 = seventynine.getElementsByClassName("sphere")[0]; 
question79.addEventListener("mouseover", over1);
question79.addEventListener("mouseout", out1);

var question80 = eighty.getElementsByClassName("sphere")[0]; 
question80.addEventListener("mouseover", over1);
question80.addEventListener("mouseout", out1);










var question81 = eightyone.getElementsByClassName("sphere")[0]; 
question81.addEventListener("mouseover", over1);
question81.addEventListener("mouseout", out1);

var question82 = eightytwo.getElementsByClassName("sphere")[0]; 
question82.addEventListener("mouseover", over1);
question82.addEventListener("mouseout", out1);

var question83 = eightythree.getElementsByClassName("sphere")[0]; 
question83.addEventListener("mouseover", over1);
question83.addEventListener("mouseout", out1);

var question84 = eightyfour.getElementsByClassName("sphere")[0]; 
question84.addEventListener("mouseover", over1);
question84.addEventListener("mouseout", out1);

var question85 = eightyfive.getElementsByClassName("sphere")[0]; 
question85.addEventListener("mouseover", over1);
question85.addEventListener("mouseout", out1);




var question86 = eightysix.getElementsByClassName("sphere")[0]; 
question86.addEventListener("mouseover", over1);
question86.addEventListener("mouseout", out1);

var question87 = eightyseven.getElementsByClassName("sphere")[0]; 
question87.addEventListener("mouseover", over1);
question87.addEventListener("mouseout", out1);

var question88 = eightyeight.getElementsByClassName("sphere")[0]; 
question88.addEventListener("mouseover", over1);
question88.addEventListener("mouseout", out1);

var question89 = eightynine.getElementsByClassName("sphere")[0]; 
question89.addEventListener("mouseover", over1);
question89.addEventListener("mouseout", out1);

var question90 = ninety.getElementsByClassName("sphere")[0]; 
question90.addEventListener("mouseover", over1);
question90.addEventListener("mouseout", out1);






var question91 = ninetyone.getElementsByClassName("sphere")[0]; 
question91.addEventListener("mouseover", over1);
question91.addEventListener("mouseout", out1);

var question92 = ninetytwo.getElementsByClassName("sphere")[0]; 
question92.addEventListener("mouseover", over1);
question92.addEventListener("mouseout", out1);

var question93 = ninetythree.getElementsByClassName("sphere")[0]; 
question93.addEventListener("mouseover", over1);
question93.addEventListener("mouseout", out1);

var question94 = ninetyfour.getElementsByClassName("sphere")[0]; 
question94.addEventListener("mouseover", over1);
question94.addEventListener("mouseout", out1);

var question95 = ninetyfive.getElementsByClassName("sphere")[0]; 
question95.addEventListener("mouseover", over1);
question95.addEventListener("mouseout", out1);




var question96 = ninetysix.getElementsByClassName("sphere")[0]; 
question96.addEventListener("mouseover", over1);
question96.addEventListener("mouseout", out1);

var question97 = ninetyseven.getElementsByClassName("sphere")[0]; 
question97.addEventListener("mouseover", over1);
question97.addEventListener("mouseout", out1);

var question98 = ninetyeight.getElementsByClassName("sphere")[0]; 
question98.addEventListener("mouseover", over1);
question98.addEventListener("mouseout", out1);

var question99 = ninetynine.getElementsByClassName("sphere")[0]; 
question99.addEventListener("mouseover", over1);
question99.addEventListener("mouseout", out1);

var question100 = hundred.getElementsByClassName("sphere")[0]; 
question100.addEventListener("mouseover", over1);
question100.addEventListener("mouseout", out1);






var newDiv;

function over1(event){
	var knopka = this.parentNode.id;
	newDiv = document.createElement("div");
	newDiv.classList.add("beton");
	newDiv.innerHTML = oracle[knopka];
	var roditel = event.currentTarget.parentNode;
	insertAfter(roditel, newDiv);
}
function out1(){
	var y = document.getElementsByClassName("beton")[0]; 
	y.outerHTML = "";
	delete y;
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}






// These are the functions we want to call when click event occurs on the button element. 


// This function is needed at the very beginning / it is used in every page
function firstFunction (){
	choice[1] = choice[1] ? '' : '<!DOCTYPE html>';
	fill(choice);
	if (choice[1]) { one.classList.remove("initial-color"); one.classList.add("activation-color"); 	} else { one.classList.remove("activation-color"); one.classList.add("initial-color"); };
}

// This function fills and empties <html> </html> tags that are at the beginning and the end of page/array
function secondFunction (){
	choice[2] = choice[2] ? '' : '<html lang="en">';
	choice[100] = choice[100] ? '' : '</html>';
	fill(choice);
	if (choice[2]) { two.classList.remove("initial-color"); two.classList.add("activation-color"); 	} else { two.classList.remove("activation-color"); two.classList.add("initial-color"); };
	if (choice[100]) { hundred.classList.remove("initial-color"); hundred.classList.add("activation-color"); 	} else { hundred.classList.remove("activation-color"); hundred.classList.add("initial-color"); };
}

// Adding <head> and </head> tags
function thirdFunction (){
	choice[3] = choice[3] ? '' : '<head>';
	choice[50] = choice[50] ? '' : '</head>';
	fill(choice);
	if (choice[3]) { three.classList.remove("initial-color"); three.classList.add("activation-color"); 	} else { three.classList.remove("activation-color"); three.classList.add("initial-color"); };
	if (choice[50]) { fifty.classList.remove("initial-color"); fifty.classList.add("activation-color"); 	} else { fifty.classList.remove("activation-color"); fifty.classList.add("initial-color"); };
}

// Adding meta tag with encoding
function fourthFunction (){
	choice[4] = choice[4] ? '' : '<meta charset="utf-8">';
	fill(choice);
	if (choice[4]) { four.classList.remove("initial-color"); four.classList.add("activation-color"); 	} else { four.classList.remove("activation-color"); four.classList.add("initial-color"); };
}

// Adding title
function fifthFunction (){
	choice[5] = choice[5] ? '' : '<title></title>';
	fill(choice);
	if (choice[5]) { five.classList.remove("initial-color"); five.classList.add("activation-color"); 	} else { five.classList.remove("activation-color"); five.classList.add("initial-color"); };
}

function sixthFunction (){
	choice[6] = choice[6] ? '' : '<meta name="viewport" content="width=device-width, initial-scale=1">';
	fill(choice);
	if (choice[6]) { six.classList.remove("initial-color"); six.classList.add("activation-color"); 	} else { six.classList.remove("activation-color"); six.classList.add("initial-color"); };
}

// Adding styles
function seventhFunction (){
	choice[7] = choice[7] ? '' : '<meta name="description" content="">';
	fill(choice);
	if (choice[7]) { seven.classList.remove("initial-color"); seven.classList.add("activation-color"); 	} else { seven.classList.remove("activation-color"); seven.classList.add("initial-color"); };
}

// Adding meta tag with encoding
function eighthFunction (){
	choice[8] = choice[8] ? '' : '<meta name="keywords" content="">';
	fill(choice);
	if (choice[8]) { eight.classList.remove("initial-color"); eight.classList.add("activation-color"); 	} else { eight.classList.remove("activation-color"); eight.classList.add("initial-color"); };
}

// Adding 
function ninthFunction (){
	choice[9] = choice[9] ? '' : '<meta name="author" content="">';
	fill(choice);
	if (choice[9]) { nine.classList.remove("initial-color"); nine.classList.add("activation-color"); 	} else { nine.classList.remove("activation-color"); nine.classList.add("initial-color"); };
}

// Adding 
function tenthFunction (){
	choice[10] = choice[10] ? '' : '<meta name="robots" content="index, follow">';
	fill(choice);
	if (choice[10]) { ten.classList.remove("initial-color"); ten.classList.add("activation-color"); 	} else { ten.classList.remove("activation-color"); ten.classList.add("initial-color"); };
}














// Adding styles
function eleventhFunction (){
	choice[11] = choice[11] ? '' : '<meta name="mobile-web-app-capable" content="yes">';
	fill(choice);
	if (choice[11]) { eleven.classList.remove("initial-color"); eleven.classList.add("activation-color"); 	} else { eleven.classList.remove("activation-color"); eleven.classList.add("initial-color"); };
}

// Adding meta tag with encoding
function twelfthFunction (){
	choice[12] = choice[12] ? '' : '<meta name="apple-mobile-web-app-capable" content="yes">';
	fill(choice);
	if (choice[12]) { twelve.classList.remove("initial-color"); twelve.classList.add("activation-color"); 	} else { twelve.classList.remove("activation-color"); twelve.classList.add("initial-color"); };
}

// Adding 
function thirteenthFunction (){
	choice[13] = choice[13] ? '' : '<meta name="apple-mobile-web-app-status-bar-style" content="default">';
	fill(choice);
	if (choice[13]) { thirteen.classList.remove("initial-color"); thirteen.classList.add("activation-color"); 	} else { thirteen.classList.remove("activation-color"); thirteen.classList.add("initial-color"); };
}

// Adding 
function fourteenthFunction (){
	choice[14] = choice[14] ? '' : '<link rel="stylesheet" href="style.css" />';
	fill(choice);
	if (choice[14]) { fourteen.classList.remove("initial-color"); fourteen.classList.add("activation-color"); 	} else { fourteen.classList.remove("activation-color"); fourteen.classList.add("initial-color"); };
}

// Adding 
function fifteenthFunction (){
	choice[15] = choice[15] ? '' : '<link rel="shortcut icon" href="/favicon.ico" />';
	fill(choice);
	if (choice[15]) { fifteen.classList.remove("initial-color"); fifteen.classList.add("activation-color"); 	} else { fifteen.classList.remove("activation-color"); fifteen.classList.add("initial-color"); };
}


// Adding 
function sixteenthFunction (){
	choice[16] = choice[16] ? '' : 'empty';
	fill(choice);
	if (choice[16]) { sixteen.classList.remove("initial-color"); sixteen.classList.add("activation-color"); 	} else { sixteen.classList.remove("activation-color"); sixteen.classList.add("initial-color"); };
}


// Adding 
function seventeenthFunction (){
	choice[17] = choice[17] ? '' : 'empty';
	fill(choice);
	if (choice[17]) { seventeen.classList.remove("initial-color"); seventeen.classList.add("activation-color"); 	} else { seventeen.classList.remove("activation-color"); seventeen.classList.add("initial-color"); };
}


// Adding 
function eighteenthFunction (){
	choice[18] = choice[18] ? '' : 'empty';
	fill(choice);
	if (choice[18]) { eighteen.classList.remove("initial-color"); eighteen.classList.add("activation-color"); 	} else { eighteen.classList.remove("activation-color"); eighteen.classList.add("initial-color"); };
}


// Adding 
function nineteenthFunction (){
	choice[19] = choice[19] ? '' : 'empty';
	fill(choice);
	if (choice[19]) { nineteen.classList.remove("initial-color"); nineteen.classList.add("activation-color"); 	} else { nineteen.classList.remove("activation-color"); nineteen.classList.add("initial-color"); };
}











// Adding 
function twentiethFunction (){
	choice[20] = choice[20] ? '' : '<meta property="og:title" content="" />';
	fill(choice);
	if (choice[20]) { twenty.classList.remove("initial-color"); twenty.classList.add("activation-color"); 	} else { twenty.classList.remove("activation-color"); twenty.classList.add("initial-color"); };
}

// Adding 
function twentyfirstFunction (){
	choice[21] = choice[21] ? '' : '<meta property="og:type" content="website">';
	fill(choice);
	if (choice[21]) { twentyone.classList.remove("initial-color"); twentyone.classList.add("activation-color"); 	} else { twentyone.classList.remove("activation-color"); twentyone.classList.add("initial-color"); };
}

// Adding 
function twentysecondFunction (){
	choice[22] = choice[22] ? '' : '<meta property="og:url" content="" />';
	fill(choice);
	if (choice[22]) { twentytwo.classList.remove("initial-color"); twentytwo.classList.add("activation-color"); 	} else { twentytwo.classList.remove("activation-color"); twentytwo.classList.add("initial-color"); };
}

// Adding 
function twentythirdFunction (){
	choice[23] = choice[23] ? '' : '<meta property="og:image" content="" />';
	fill(choice);
	if (choice[23]) { twentythree.classList.remove("initial-color"); twentythree.classList.add("activation-color"); 	} else { twentythree.classList.remove("activation-color"); twentythree.classList.add("initial-color"); };
}

// Adding 
function twentyfourthFunction (){
	choice[24] = choice[24] ? '' : '<meta property="og:description" content="" />';
	fill(choice);
	if (choice[24]) { twentyfour.classList.remove("initial-color"); twentyfour.classList.add("activation-color"); 	} else { twentyfour.classList.remove("activation-color"); twentyfour.classList.add("initial-color"); };
}

// Adding 
function twentyfifthFunction (){
	choice[25] = choice[25] ? '' : '<meta property="og:site_name" content="" />';
	fill(choice);
	if (choice[25]) { twentyfive.classList.remove("initial-color"); twentyfive.classList.add("activation-color"); 	} else { twentyfive.classList.remove("activation-color"); twentyfive.classList.add("initial-color"); };
}


// Adding 
function twentysixthFunction (){
	choice[26] = choice[26] ? '' : 'empty';
	fill(choice);
	if (choice[26]) { twentysix.classList.remove("initial-color"); twentysix.classList.add("activation-color"); 	} else { twentysix.classList.remove("activation-color"); twentysix.classList.add("initial-color"); };
}

// Adding 
function twentyseventhFunction (){
	choice[27] = choice[27] ? '' : 'empty';
	fill(choice);
	if (choice[27]) { twentyseven.classList.remove("initial-color"); twentyseven.classList.add("activation-color"); 	} else { twentyseven.classList.remove("activation-color"); twentyseven.classList.add("initial-color"); };
}

// Adding 
function twentyeighthFunction (){
	choice[28] = choice[28] ? '' : 'empty';
	fill(choice);
	if (choice[28]) { twentyeight.classList.remove("initial-color"); twentyeight.classList.add("activation-color"); 	} else { twentyeight.classList.remove("activation-color"); twentyeight.classList.add("initial-color"); };
}

// Adding 
function twentyninthFunction (){
	choice[29] = choice[29] ? '' : 'empty';
	fill(choice);
	if (choice[29]) { twentynine.classList.remove("initial-color"); twentynine.classList.add("activation-color"); 	} else { twentynine.classList.remove("activation-color"); twentynine.classList.add("initial-color"); };
}



// Adding 
function thirtiethFunction (){
	choice[30] = choice[30] ? '' : '<meta name="twitter:card" content="summary">';
	fill(choice);
	if (choice[30]) { thirty.classList.remove("initial-color"); thirty.classList.add("activation-color"); 	} else { thirty.classList.remove("activation-color"); thirty.classList.add("initial-color"); };
}

// Adding 
function thirtyfirstFunction (){
	choice[31] = choice[31] ? '' : '<meta name="twitter:url" content="">';
	fill(choice);
	if (choice[31]) { thirtyone.classList.remove("initial-color"); thirtyone.classList.add("activation-color"); 	} else { thirtyone.classList.remove("activation-color"); thirtyone.classList.add("initial-color"); };
}

// Adding 
function thirtysecondFunction (){
	choice[32] = choice[32] ? '' : '<meta name="twitter:title" content="">';
	fill(choice);
	if (choice[32]) { thirtytwo.classList.remove("initial-color"); thirtytwo.classList.add("activation-color"); 	} else { thirtytwo.classList.remove("activation-color"); thirtytwo.classList.add("initial-color"); };
}

// Adding 
function thirtythirdFunction (){
	choice[33] = choice[33] ? '' : '<meta name="twitter:description" content="">';
	fill(choice);
	if (choice[33]) { thirtythree.classList.remove("initial-color"); thirtythree.classList.add("activation-color"); 	} else { thirtythree.classList.remove("activation-color"); thirtythree.classList.add("initial-color"); };
}

// Adding 
function thirtyfourthFunction (){
	choice[34] = choice[34] ? '' : '<meta name="twitter:image" content="">';
	fill(choice);
	if (choice[34]) { thirtyfour.classList.remove("initial-color"); thirtyfour.classList.add("activation-color"); 	} else { thirtyfour.classList.remove("activation-color"); thirtyfour.classList.add("initial-color"); };
}

// Adding 
function thirtyfifthFunction (){
	choice[35] = choice[35] ? '' : '<meta name="twitter:site" content="">';
	fill(choice);
	if (choice[35]) { thirtyfive.classList.remove("initial-color"); thirtyfive.classList.add("activation-color"); 	} else { thirtyfive.classList.remove("activation-color"); thirtyfive.classList.add("initial-color"); };
}
















// Adding 
function thirtysixthFunction (){
	choice[36] = choice[36] ? '' : '<meta name="twitter:creator" content="@name">';
	fill(choice);
	if (choice[36]) { thirtysix.classList.remove("initial-color"); thirtysix.classList.add("activation-color"); 	} else { thirtysix.classList.remove("activation-color"); thirtysix.classList.add("initial-color"); };
}

// Adding 
function thirtyseventhFunction (){
	choice[37] = choice[37] ? '' : 'empty';
	fill(choice);
	if (choice[37]) { thirtyseven.classList.remove("initial-color"); thirtyseven.classList.add("activation-color"); 	} else { thirtyseven.classList.remove("activation-color"); thirtyseven.classList.add("initial-color"); };
}

// Adding 
function thirtyeighthFunction (){
	choice[38] = choice[38] ? '' : 'empty';
	fill(choice);
	if (choice[38]) { thirtyeight.classList.remove("initial-color"); thirtyeight.classList.add("activation-color"); 	} else { thirtyeight.classList.remove("activation-color"); thirtyeight.classList.add("initial-color"); };
}

// Adding 
function thirtyninthFunction (){
	choice[39] = choice[39] ? '' : 'empty';
	fill(choice);
	if (choice[39]) { thirtynine.classList.remove("initial-color"); thirtynine.classList.add("activation-color"); 	} else { thirtynine.classList.remove("activation-color"); thirtynine.classList.add("initial-color"); };
}

// Adding 
function fortiethFunction (){
	choice[40] = choice[40] ? '' : 'empty';
	fill(choice);
	if (choice[40]) { forty.classList.remove("initial-color"); forty.classList.add("activation-color"); 	} else { forty.classList.remove("activation-color"); forty.classList.add("initial-color"); };
}

// Adding 
function fortyfirstFunction (){
	choice[41] = choice[41] ? '' : 'empty';
	fill(choice);
	if (choice[41]) { fortyone.classList.remove("initial-color"); fortyone.classList.add("activation-color"); 	} else { fortyone.classList.remove("activation-color"); fortyone.classList.add("initial-color"); };
}

// Adding 
function fortysecondFunction (){
	choice[42] = choice[42] ? '' : 'empty';
	fill(choice);
	if (choice[42]) { fortytwo.classList.remove("initial-color"); fortytwo.classList.add("activation-color"); 	} else { fortytwo.classList.remove("activation-color"); fortytwo.classList.add("initial-color"); };
}

// Adding 
function fortythirdFunction (){
	choice[43] = choice[43] ? '' : 'empty';
	fill(choice);
	if (choice[43]) { fortythree.classList.remove("initial-color"); fortythree.classList.add("activation-color"); 	} else { fortythree.classList.remove("activation-color"); fortythree.classList.add("initial-color"); };
}

// Adding 
function fortyfourthFunction (){
	choice[44] = choice[44] ? '' : 'empty';
	fill(choice);
	if (choice[44]) { fortyfour.classList.remove("initial-color"); fortyfour.classList.add("activation-color"); 	} else { fortyfour.classList.remove("activation-color"); fortyfour.classList.add("initial-color"); };
}

// Adding 
function fortyfifthFunction (){
	choice[45] = choice[45] ? '' : 'empty';
	fill(choice);
	if (choice[45]) { fortyfive.classList.remove("initial-color"); fortyfive.classList.add("activation-color"); 	} else { fortyfive.classList.remove("activation-color"); fortyfive.classList.add("initial-color"); };
}

// Adding 
function fortysixthFunction (){
	choice[46] = choice[46] ? '' : 'empty';
	fill(choice);
	if (choice[46]) { fortysix.classList.remove("initial-color"); fortysix.classList.add("activation-color"); 	} else { fortysix.classList.remove("activation-color"); fortysix.classList.add("initial-color"); };
}

// Adding 
function fortyseventhFunction (){
	choice[47] = choice[47] ? '' : 'empty';
	fill(choice);
	if (choice[47]) { fortyseven.classList.remove("initial-color"); fortyseven.classList.add("activation-color"); 	} else { fortyseven.classList.remove("activation-color"); fortyseven.classList.add("initial-color"); };
}

// Adding 
function fortyeighthFunction (){
	choice[48] = choice[48] ? '' : 'empty';
	fill(choice);
	if (choice[48]) { fortyeight.classList.remove("initial-color"); fortyeight.classList.add("activation-color"); 	} else { fortyeight.classList.remove("activation-color"); fortyeight.classList.add("initial-color"); };
}




// Adding javascript
function fortyninthFunction (){
	choice[49] = choice[49] ? '' : '<script src="script.js"></script>';
	fill(choice);
	if (choice[49]) { fortynine.classList.remove("initial-color"); fortynine.classList.add("activation-color"); 	} else { fortynine.classList.remove("activation-color"); fortynine.classList.add("initial-color"); };
}




// Adding <head> and </head> tags
function fiftiethFunction (){
	choice[3] = choice[3] ? '' : '<head>';
	choice[50] = choice[50] ? '' : '</head>';
	fill(choice);
	if (choice[3]) { three.classList.remove("initial-color"); three.classList.add("activation-color"); 	} else { three.classList.remove("activation-color"); three.classList.add("initial-color"); };
	if (choice[50]) { fifty.classList.remove("initial-color"); fifty.classList.add("activation-color"); 	} else { fifty.classList.remove("activation-color"); fifty.classList.add("initial-color"); };
}


// Adding <body> and </body> tags
function fiftyfirstFunction (){
	choice[51] = choice[51] ? '' : '<body>';
	choice[99] = choice[99] ? '' : '</body>';
	fill(choice);
	if (choice[51]) { fiftyone.classList.remove("initial-color"); fiftyone.classList.add("activation-color"); 	} else { fiftyone.classList.remove("activation-color"); fiftyone.classList.add("initial-color"); };
	if (choice[99]) { ninetynine.classList.remove("initial-color"); ninetynine.classList.add("activation-color"); 	} else { ninetynine.classList.remove("activation-color"); ninetynine.classList.add("initial-color"); };
}





function fiftysecondFunction(){
	choice[52] = choice[52] ? '' : '<header>';
	choice[55] = choice[55] ? '' : '</header>';
	fill(choice);
	if (choice[52]) { fiftytwo.classList.remove("initial-color"); fiftytwo.classList.add("activation-color"); 	} else { fiftytwo.classList.remove("activation-color"); fiftytwo.classList.add("initial-color"); };
	if (choice[55]) { fiftyfive.classList.remove("initial-color"); fiftyfive.classList.add("activation-color"); 	} else { fiftyfive.classList.remove("activation-color"); fiftyfive.classList.add("initial-color"); };
}

function fiftythirdFunction(){
	choice[53] = choice[53] ? '' : '<img src="logo.png" alt="logo">';
	fill(choice);
	if (choice[53]) { fiftythree.classList.remove("initial-color"); fiftythree.classList.add("activation-color"); 	} else { fiftythree.classList.remove("activation-color"); fiftythree.classList.add("initial-color"); };
}

function fiftyfourthFunction(){
	choice[54] = choice[54] ? '' : '<p>Some supplementary information</p>';
	fill(choice);
	if (choice[54]) { fiftyfour.classList.remove("initial-color"); fiftyfour.classList.add("activation-color"); 	} else { fiftyfour.classList.remove("activation-color"); fiftyfour.classList.add("initial-color"); };
}

function fiftyfifthFunction(){
	choice[52] = choice[52] ? '' : '<header>';
	choice[55] = choice[55] ? '' : '</header>';
	fill(choice);
	if (choice[52]) { fiftytwo.classList.remove("initial-color"); fiftytwo.classList.add("activation-color"); 	} else { fiftytwo.classList.remove("activation-color"); fiftytwo.classList.add("initial-color"); };
	if (choice[55]) { fiftyfive.classList.remove("initial-color"); fiftyfive.classList.add("activation-color"); 	} else { fiftyfive.classList.remove("activation-color"); fiftyfive.classList.add("initial-color"); };
}

function fiftysixthFunction(){
	choice[56] = choice[56] ? '' : 'empty';
	fill(choice);
	if (choice[56]) { fiftysix.classList.remove("initial-color"); fiftysix.classList.add("activation-color"); 	} else { fiftysix.classList.remove("activation-color"); fiftysix.classList.add("initial-color"); };
}

function fiftyseventhFunction(){
	choice[57] = choice[57] ? '' : 'empty';
	fill(choice);
	if (choice[57]) { fiftyseven.classList.remove("initial-color"); fiftyseven.classList.add("activation-color"); 	} else { fiftyseven.classList.remove("activation-color"); fiftyseven.classList.add("initial-color"); };
}

function fiftyeighthFunction(){
	choice[58] = choice[58] ? '' : 'empty';
	fill(choice);
	if (choice[58]) { fiftyeight.classList.remove("initial-color"); fiftyeight.classList.add("activation-color"); 	} else { fiftyeight.classList.remove("activation-color"); fiftyeight.classList.add("initial-color"); };
}

function fiftyninthFunction(){
	choice[59] = choice[59] ? '' : 'empty';
	fill(choice);
	if (choice[59]) { fiftynine.classList.remove("initial-color"); fiftynine.classList.add("activation-color"); 	} else { fiftynine.classList.remove("activation-color"); fiftynine.classList.add("initial-color"); };
}

function sixtiethFunction(){
	choice[60] = choice[60] ? '' : '<nav>';
	choice[70] = choice[70] ? '' : '</nav>';
	fill(choice);
	if (choice[60]) { sixty.classList.remove("initial-color"); sixty.classList.add("activation-color"); 	} else { sixty.classList.remove("activation-color"); sixty.classList.add("initial-color"); };
	if (choice[70]) { seventy.classList.remove("initial-color"); seventy.classList.add("activation-color"); 	} else { seventy.classList.remove("activation-color"); seventy.classList.add("initial-color"); };
}







function sixtyfirstFunction(){
	choice[61] = choice[61] ? '' : '<ul>';
	choice[65] = choice[65] ? '' : '</ul>';
	fill(choice);
	if (choice[61]) { sixtyone.classList.remove("initial-color"); sixtyone.classList.add("activation-color"); 	} else { sixtyone.classList.remove("activation-color"); sixtyone.classList.add("initial-color"); };
	if (choice[65]) { sixtyfive.classList.remove("initial-color"); sixtyfive.classList.add("activation-color"); 	} else { sixtyfive.classList.remove("activation-color"); sixtyfive.classList.add("initial-color"); };
}

function sixtysecondFunction(){
	choice[62] = choice[62] ? '' : '<li><a href="#">Home</a></li>';
	fill(choice);
	if (choice[62]) { sixtytwo.classList.remove("initial-color"); sixtytwo.classList.add("activation-color"); 	} else { sixtytwo.classList.remove("activation-color"); sixtytwo.classList.add("initial-color"); };
}

function sixtythirdFunction(){
	choice[63] = choice[63] ? '' : '<li><a href="#">Our team</a></li>';
	fill(choice);
	if (choice[63]) { sixtythree.classList.remove("initial-color"); sixtythree.classList.add("activation-color"); 	} else { sixtythree.classList.remove("activation-color"); sixtythree.classList.add("initial-color"); };
}

function sixtyfourthFunction(){
	choice[64] = choice[64] ? '' : '<li><a href="#">Contact</a></li>';
	fill(choice);
	if (choice[64]) { sixtyfour.classList.remove("initial-color"); sixtyfour.classList.add("activation-color"); 	} else { sixtyfour.classList.remove("activation-color"); sixtyfour.classList.add("initial-color"); };
}

function sixtyfifthFunction(){
	choice[61] = choice[61] ? '' : '<ul>';
	choice[65] = choice[65] ? '' : '</ul>';
	fill(choice);
	if (choice[61]) { sixtyone.classList.remove("initial-color"); sixtyone.classList.add("activation-color"); 	} else { sixtyone.classList.remove("activation-color"); sixtyone.classList.add("initial-color"); };
	if (choice[65]) { sixtyfive.classList.remove("initial-color"); sixtyfive.classList.add("activation-color"); 	} else { sixtyfive.classList.remove("activation-color"); sixtyfive.classList.add("initial-color"); };
}

function sixtysixthFunction(){
	choice[66] = choice[66] ? '' : '<form>';
	choice[69] = choice[69] ? '' : '</form>';
	fill(choice);
	if (choice[66]) { sixtysix.classList.remove("initial-color"); sixtysix.classList.add("activation-color"); 	} else { sixtysix.classList.remove("activation-color"); sixtysix.classList.add("initial-color"); };
	if (choice[69]) { sixtynine.classList.remove("initial-color"); sixtynine.classList.add("activation-color"); 	} else { sixtynine.classList.remove("activation-color"); sixtynine.classList.add("initial-color"); };
}

function sixtyseventhFunction(){
	choice[67] = choice[67] ? '' : '<input type="search" name="q" placeholder="Search query">';
	fill(choice);
	if (choice[67]) { sixtyseven.classList.remove("initial-color"); sixtyseven.classList.add("activation-color"); 	} else { sixtyseven.classList.remove("activation-color"); sixtyseven.classList.add("initial-color"); };
}

function sixtyeighthFunction(){
	choice[68] = choice[68] ? '' : '<input type="submit" value="Go!">';
	fill(choice);
	if (choice[68]) { sixtyeight.classList.remove("initial-color"); sixtyeight.classList.add("activation-color"); 	} else { sixtyeight.classList.remove("activation-color"); sixtyeight.classList.add("initial-color"); };
}

function sixtyninthFunction(){
	choice[66] = choice[66] ? '' : '<form>';
	choice[69] = choice[69] ? '' : '</form>';
	fill(choice);
	if (choice[66]) { sixtysix.classList.remove("initial-color"); sixtysix.classList.add("activation-color"); 	} else { sixtysix.classList.remove("activation-color"); sixtysix.classList.add("initial-color"); };
	if (choice[69]) { sixtynine.classList.remove("initial-color"); sixtynine.classList.add("activation-color"); 	} else { sixtynine.classList.remove("activation-color"); sixtynine.classList.add("initial-color"); };
}

function seventiethFunction(){
	choice[60] = choice[60] ? '' : '<nav>';
	choice[70] = choice[70] ? '' : '</nav>';
	fill(choice);
	if (choice[60]) { sixty.classList.remove("initial-color"); sixty.classList.add("activation-color"); 	} else { sixty.classList.remove("activation-color"); sixty.classList.add("initial-color"); };
	if (choice[70]) { seventy.classList.remove("initial-color"); seventy.classList.add("activation-color"); 	} else { seventy.classList.remove("activation-color"); seventy.classList.add("initial-color"); };
}





function seventyfirstFunction(){
	choice[71] = choice[71] ? '' : '<main>';
	choice[89] = choice[89] ? '' : '</main>';
	fill(choice);
	if (choice[71]) { seventyone.classList.remove("initial-color"); seventyone.classList.add("activation-color"); 	} else { seventyone.classList.remove("activation-color"); seventyone.classList.add("initial-color"); };
	if (choice[89]) { eightynine.classList.remove("initial-color"); eightynine.classList.add("activation-color"); 	} else { eightynine.classList.remove("activation-color"); eightynine.classList.add("initial-color"); };
}

function seventysecondFunction(){
	choice[72] = choice[72] ? '' : 'empty';
	fill(choice);
	if (choice[72]) { seventytwo.classList.remove("initial-color"); seventytwo.classList.add("activation-color"); 	} else { seventytwo.classList.remove("activation-color"); seventytwo.classList.add("initial-color"); };
}

function seventythirdFunction(){
	choice[73] = choice[73] ? '' : 'empty';
	fill(choice);
	if (choice[73]) { seventythree.classList.remove("initial-color"); seventythree.classList.add("activation-color"); 	} else { seventythree.classList.remove("activation-color"); seventythree.classList.add("initial-color"); };
}

function seventyfourthFunction(){
	choice[74] = choice[74] ? '' : 'empty';
	fill(choice);
	if (choice[74]) { seventyfour.classList.remove("initial-color"); seventyfour.classList.add("activation-color"); 	} else { seventyfour.classList.remove("activation-color"); seventyfour.classList.add("initial-color"); };
}

function seventyfifthFunction(){
	choice[75] = choice[75] ? '' : 'empty';
	fill(choice);
	if (choice[75]) { seventyfive.classList.remove("initial-color"); seventyfive.classList.add("activation-color"); 	} else { seventyfive.classList.remove("activation-color"); seventyfive.classList.add("initial-color"); };
}

function seventysixthFunction(){
	choice[76] = choice[76] ? '' : 'empty';
	fill(choice);
	if (choice[76]) { seventysix.classList.remove("initial-color"); seventysix.classList.add("activation-color"); 	} else { seventysix.classList.remove("activation-color"); seventysix.classList.add("initial-color"); };
}

function seventyseventhFunction(){
	choice[77] = choice[77] ? '' : 'empty';
	fill(choice);
	if (choice[77]) { seventyseven.classList.remove("initial-color"); seventyseven.classList.add("activation-color"); 	} else { seventyseven.classList.remove("activation-color"); seventyseven.classList.add("initial-color"); };
}

function seventyeighthFunction(){
	choice[78] = choice[78] ? '' : 'empty';
	fill(choice);
	if (choice[78]) { seventyeight.classList.remove("initial-color"); seventyeight.classList.add("activation-color"); 	} else { seventyeight.classList.remove("activation-color"); seventyeight.classList.add("initial-color"); };
}

function seventyninthFunction(){
	choice[79] = choice[79] ? '' : 'empty';
	fill(choice);
	if (choice[79]) { seventynine.classList.remove("initial-color"); seventynine.classList.add("activation-color"); 	} else { seventynine.classList.remove("activation-color"); seventynine.classList.add("initial-color"); };
}

function eightiethFunction(){
	choice[80] = choice[80] ? '' : 'empty';
	fill(choice);
	if (choice[80]) { eighty.classList.remove("initial-color"); eighty.classList.add("activation-color"); 	} else { eighty.classList.remove("activation-color"); eighty.classList.add("initial-color"); };
}




function eightyfirstFunction(){
	choice[81] = choice[81] ? '' : 'empty';
	fill(choice);
	if (choice[81]) { eightyone.classList.remove("initial-color"); eightyone.classList.add("activation-color"); 	} else { eightyone.classList.remove("activation-color"); eightyone.classList.add("initial-color"); };
}

function eightysecondFunction(){
	choice[82] = choice[82] ? '' : 'empty';
	fill(choice);
	if (choice[82]) { eightytwo.classList.remove("initial-color"); eightytwo.classList.add("activation-color"); 	} else { eightytwo.classList.remove("activation-color"); eightytwo.classList.add("initial-color"); };
}

function eightythirdFunction(){
	choice[83] = choice[83] ? '' : 'empty';
	fill(choice);
	if (choice[83]) { eightythree.classList.remove("initial-color"); eightythree.classList.add("activation-color"); 	} else { eightythree.classList.remove("activation-color"); eightythree.classList.add("initial-color"); };
}

function eightyfourthFunction(){
	choice[84] = choice[84] ? '' : 'empty';
	fill(choice);
	if (choice[84]) { eightyfour.classList.remove("initial-color"); eightyfour.classList.add("activation-color"); 	} else { eightyfour.classList.remove("activation-color"); eightyfour.classList.add("initial-color"); };
}

function eightyfifthFunction(){
	choice[85] = choice[85] ? '' : 'empty';
	fill(choice);
	if (choice[85]) { eightyfive.classList.remove("initial-color"); eightyfive.classList.add("activation-color"); 	} else { eightyfive.classList.remove("activation-color"); eightyfive.classList.add("initial-color"); };
}

function eightysixthFunction(){
	choice[86] = choice[86] ? '' : 'empty';
	fill(choice);
	if (choice[86]) { eightysix.classList.remove("initial-color"); eightysix.classList.add("activation-color"); 	} else { eightysix.classList.remove("activation-color"); eightysix.classList.add("initial-color"); };
}

function eightyseventhFunction(){
	choice[87] = choice[87] ? '' : 'empty';
	fill(choice);
	if (choice[87]) { eightyseven.classList.remove("initial-color"); eightyseven.classList.add("activation-color"); 	} else { eightyseven.classList.remove("activation-color"); eightyseven.classList.add("initial-color"); };
}

function eightyeighthFunction(){
	choice[88] = choice[88] ? '' : 'empty';
	fill(choice);
	if (choice[88]) { eightyeight.classList.remove("initial-color"); eightyeight.classList.add("activation-color"); 	} else { eightyeight.classList.remove("activation-color"); eightyeight.classList.add("initial-color"); };
}

function eightyninthFunction(){
	choice[71] = choice[71] ? '' : '<main>';
	choice[89] = choice[89] ? '' : '</main>';
	fill(choice);
	if (choice[71]) { seventyone.classList.remove("initial-color"); seventyone.classList.add("activation-color"); 	} else { seventyone.classList.remove("activation-color"); seventyone.classList.add("initial-color"); };
	if (choice[89]) { eightynine.classList.remove("initial-color"); eightynine.classList.add("activation-color"); 	} else { eightynine.classList.remove("activation-color"); eightynine.classList.add("initial-color"); };
}

function ninetiethFunction(){
	choice[90] = choice[90] ? '' : '<footer>';
	choice[98] = choice[98] ? '' : '</footer>';
	fill(choice);
	if (choice[90]) { ninety.classList.remove("initial-color"); ninety.classList.add("activation-color"); 	} else { ninety.classList.remove("activation-color"); ninety.classList.add("initial-color"); };
	if (choice[98]) { ninetyeight.classList.remove("initial-color"); ninetyeight.classList.add("activation-color"); 	} else { ninetyeight.classList.remove("activation-color"); ninetyeight.classList.add("initial-color"); };
}




function ninetyfirstFunction(){
	choice[91] = choice[91] ? '' : 'empty';
	fill(choice);
	if (choice[91]) { ninetyone.classList.remove("initial-color"); ninetyone.classList.add("activation-color"); 	} else { ninetyone.classList.remove("activation-color"); ninetyone.classList.add("initial-color"); };
}

function ninetysecondFunction(){
	choice[92] = choice[92] ? '' : 'empty';
	fill(choice);
	if (choice[92]) { ninetytwo.classList.remove("initial-color"); ninetytwo.classList.add("activation-color"); 	} else { ninetytwo.classList.remove("activation-color"); ninetytwo.classList.add("initial-color"); };
}

function ninetythirdFunction(){
	choice[93] = choice[93] ? '' : 'empty';
	fill(choice);
	if (choice[93]) { ninetythree.classList.remove("initial-color"); ninetythree.classList.add("activation-color"); 	} else { ninetythree.classList.remove("activation-color"); ninetythree.classList.add("initial-color"); };
}

function ninetyfourthFunction(){
	choice[94] = choice[94] ? '' : 'empty';
	fill(choice);
	if (choice[94]) { ninetyfour.classList.remove("initial-color"); ninetyfour.classList.add("activation-color"); 	} else { ninetyfour.classList.remove("activation-color"); ninetyfour.classList.add("initial-color"); };
}

function ninetyfifthFunction(){
	choice[95] = choice[95] ? '' : 'empty';
	fill(choice);
	if (choice[95]) { ninetyfive.classList.remove("initial-color"); ninetyfive.classList.add("activation-color"); 	} else { ninetyfive.classList.remove("activation-color"); ninetyfive.classList.add("initial-color"); };
}

function ninetysixthFunction(){
	choice[96] = choice[96] ? '' : 'empty';
	fill(choice);
	if (choice[96]) { ninetysix.classList.remove("initial-color"); ninetysix.classList.add("activation-color"); 	} else { ninetysix.classList.remove("activation-color"); ninetysix.classList.add("initial-color"); };
}

function ninetyseventhFunction(){
	choice[97] = choice[97] ? '' : 'empty';
	fill(choice);
	if (choice[97]) { ninetyseven.classList.remove("initial-color"); ninetyseven.classList.add("activation-color"); 	} else { ninetyseven.classList.remove("activation-color"); ninetyseven.classList.add("initial-color"); };
}

function ninetyeighthFunction(){
	choice[90] = choice[90] ? '' : '<footer>';
	choice[98] = choice[98] ? '' : '</footer>';
	fill(choice);
	if (choice[90]) { ninety.classList.remove("initial-color"); ninety.classList.add("activation-color"); 	} else { ninety.classList.remove("activation-color"); ninety.classList.add("initial-color"); };
	if (choice[98]) { ninetyeight.classList.remove("initial-color"); ninetyeight.classList.add("activation-color"); 	} else { ninetyeight.classList.remove("activation-color"); ninetyeight.classList.add("initial-color"); };
}

// Adding <body> and </body> tags
function ninetyninthFunction(){
	choice[51] = choice[51] ? '' : '<body>';
	choice[99] = choice[99] ? '' : '</body>';
	fill(choice);
	if (choice[51]) { fiftyone.classList.remove("initial-color"); fiftyone.classList.add("activation-color"); 	} else { fiftyone.classList.remove("activation-color"); fiftyone.classList.add("initial-color"); };
	if (choice[99]) { ninetynine.classList.remove("initial-color"); ninetynine.classList.add("activation-color"); 	} else { ninetynine.classList.remove("activation-color"); ninetynine.classList.add("initial-color"); };
}

// This function fills and empties <html> </html> tags that are at the beginning and the end of page/array
function hundredthFunction (){
	choice[2] = choice[2] ? '' : '<html lang="en">';
	choice[100] = choice[100] ? '' : '</html>';
	fill(choice);
	if (choice[2]) { two.classList.remove("initial-color"); two.classList.add("activation-color"); 	} else { two.classList.remove("activation-color"); two.classList.add("initial-color"); };
	if (choice[100]) { hundred.classList.remove("initial-color"); hundred.classList.add("activation-color"); 	} else { hundred.classList.remove("activation-color"); hundred.classList.add("initial-color"); };

	
	
	
}

// Prinimaet massiv v tekushem sostojanii, ubiraet pustushki, i sozdaet novij pressovannij massiv, soedinjaet v stroku i zapolnaet textarea
function fill(actual) {
  var distilled = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      distilled.push(actual[i]);
    }
  }
  area.value = distilled.join('\n');
}









// Huge array with tooltip info / Zdes hranitsja vse podskazki

var oracle = {};
oracle.one = "Местоположение: тег должен идти первым. По данным http:/www.w3.org/TR/html5/syntax.html в документе первым должен быть <!DOCTYPE html> перед которым возможны только: специальный символ U+FEFF BYTE ORDER MARK (BOM) и любое количество комментариев и пробелов.\x3Cbr />\x3Cbr />Тег обязательный. Он нужен чтобы код соответствовал стандартам и прошел проверку валидатором. Тег <!DOCTYPE html> включает в браузере особый режим рендеринга по соответствующим спецификациям. Без этого тега браузеры используют другой режим рендеринга, несовместимый с некоторыми спецификациями. Например, Internet Explorer до версии 6.0 работает в режиме quirk mode. В этом режиме браузер рендерит документ по старым стандартам конца 90-х. При этом CSS будет выводиться также, как в IE4.";
oracle.two = "Местоположение: По данным https:/www.w3.org/TR/html5/syntax.html вторым элементом должен идти &lt;html&gt; элемент. Между первым и вторым тегом возможны только комментарии и пробелы.\x3Cbr />\x3Cbr /> Тег обязательный. Документ должен содержать этот тег, по данным https:/www.w3.org/TR/html5/syntax.html Открывающий тег &lt;html&gt; корневой, и все остальные HTML элементы должны быть внутри него, кроме доктайп.Он говорит браузеру, что перед ним HTML document.\x3Cbr />\x3Cbr />Также в нем можно указать основной язык содержимого документа, при помощи lang атрибута -  &lt;html lang=&quot;en&quot;&gt;";
oracle.three = "Местоположение: &lt;head&gt; идет после &lt;html&gt;. \x3Cbr />\x3Cbr />Тег обязательный. Этот тег содержит инфо о документе: title, keywords полезные для поисковика, и прочие данные, которые не считаются контентом документа. \x3Cbr />\x3Cbr />Сам этот тег идет в таком простом виде. В этом теге можно найти теги которые не выводятся на странице, в своем большинстве. Эти теги скрыты от посетителя, но очень полезны, так как несут инфо о странице для браузера и поисковика.";
oracle.four = "The first bit in the header should be a &lt;meta&gt; tag that specifies the character encoding of the page. Usually, the character encoding is declared by the web server that sends the page to the browser, but many servers are not configured to send this information. Specifying it here ensures the document is displayed correctly even when it’s loaded directly from disk, without consulting a server.Once again, HTML5 significantly shortens this tag compared to its HTML4 equivalent, but, as before, this shortcut takes advantage of the existing error-handling behavior of all current browsers, so is safe to use today"; 
oracle.five = "Местоположение: It is normal to put it before any other elements there except a meta element that declares the character encoding (since that declaration should appear as early as possible). (https://webmasters.stackexchange.com/questions/37543/is-title-tag-position-relevant-in-html-pages) \x3Cbr />\x3Cbr />Обязaтельный тег. Согласно https://www.w3.org/TR/REC-html40/struct/global.html  В каждом HTML документе должен быть элемент TITLE в секции HEAD. Он должен нести квинтэссенцию контента страницы. Не так: &lt;title&gt;Introduction&lt;/title&gt;  а вот так &lt;title&gt;Introduction to Medieval Bee-Keeping&lt;/title&gt; With the encoding established, we can safely write the first piece of actual content in the page—the page title";
oracle.six = "Типичный сайт, оптимизированный для мобильных устройств, содержит следующий мета-тег: &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt; Свойство width определяет размер окна просмотра. Он может быть установлен на определенное количество пикселей, скажем,width=600 или на специальное значение device-width, которое означает ширину экрана в пикселях CSS в масштабе 100%.Свойство initial-scale контролирует уровень масштабирования при первой загрузке страницы.https://developer.mozilla.org/ru/docs/Mozilla/Mobile/Viewport_meta_tag";
oracle.seven = "Description contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages. Описание из &lt;meta name=&quot;description&quot;&gt; используется на страницах поисковой выдачи. Проведём небольшое исследование такого сценария. Перейдите на главную страницу Mozilla Developer Network. Откройте исходный код страницы (кликните правой кнопкой мыши и выберите Просмотреть код в контекстном меню.) Найдите тег meta с описанием. Он выглядит так: &lt;meta name=&quot;description&quot; content=&quot;The Mozilla Developer Network (MDN) provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and HTML5 Apps. It also documents Mozilla products, like Firefox OS.&quot;&gt; Теперь поищите &quot;Mozilla Developer Network&quot; в своём любимиом поисковике (в примере используется Yahoo.) Обратите внимание, что в результатах поиска виден текст из &lt;meta&gt; и &lt;title&gt; — мы не зря указали их! https:/developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/The_head_metadata_in_HTML";
oracle.eight = "Примечание: Многие типы <meta> больше не используются. Так, поисковые системы больше не используют данные из элемента &lt;meta type=&quot;keywords&quot;&gt;, в котором указывали ключевые слова, по которым можно найти страницу — спамеры засовывали туда все слова, какие могли придумать, чтобы их сайты почаще появлялись в поиске.";
oracle.nine = "Два полезных элемента метаданных — указание автора страницы и краткое описание её содержимого. Рассмотрим эти элементы на примере:&lt;meta name=&quot;author&quot; content=&quot;Chris Mills&quot;&gt; https://developer.mozilla.org/ru/  Where should you add this meta author tag?You may add this meta author tag to all of your web-pages, so not only in the first index page. Make sure that on every page relevant meta tags are added.  Add keywords and phrases that are relevant and correspond to the text and the language on that specific page. It might be a lot of work to add specific meta tags to each page but you will notice in time that it works!";
oracle.ten = "Как разрешить к индексированию HTML-страницу и все ссылки на ней.\x3Cbr />&lt;meta name=&quot;robots&quot; content=&quot;index, follow&quot;&gt;\x3Cbr />Как запретить поисковику индексировать HTML-страницу и переходы по ссылкам на ней.\x3Cbr />&lt;meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot;/&gt;\x3Cbr />Кстати, идентичной будет значение при записи: &lt;meta name =”robots” content=”none”/&gt;\x3Cbr />Как разрешить индексировать страницу, но запретить индексировать ссылки на ней.\x3Cbr />&lt;meta name=&quot;robots&quot; content=&quot;index, nofollow&quot;/&gt;\x3Cbr />Как запретить поисковику индексировать страницу, но поисковик может переходить по ссылкам.\x3Cbr />&lt;meta name=&quot;robots&quot; content=&quot;noindex, follow&quot;/&gt;\x3Cbr />\x3Cbr />Если тега &lt;meta name=&quot;robots&quot; content=&quot;index, follow&quot;&gt; нет, то по умолчанию поисковые краулеры заиндексируют страницу и теги.\x3Cbr />\x3Cbr />Когда нужно запретить индексацию целой категории или ряда страниц, это легче сделать с помощью правильного robots.txt. Но как быть, если требуется закрыть от индексации одну страницу либо вообще часть текста на странице? \x3Cbr /> Сначала уясним, что есть мета тег Robots, а есть файл Robots.txt, и путать их не будем. Метатег имеет отношение только к одной html странице (на которой он указан), в то время, как файл txt может содержать директивы не только к странице, но к целым каталогам.если в .txt у вас указано, что страницу можно индексировать, а в её метатеге указано, что нельзя, поисковик будет слушать именно директиву из метатега.";
oracle.eleven = "Chrome on Android now supports a meta-tag mobile-web-app-capable: \x3Cbr />\x3Cbr />Since Chrome M31, you can set up your web app to have an application shortcut icon added to a device's homescreen, and have the app launch in full-screen &quot;app mode&quot; using Chrome for Android’s &quot;Add to homescreen&quot; menu item. \x3Cbr />\x3Cbr />For details about the mobile-web-app-capable meta-tag, scroll down to &quot;Supporting homescreen-installed apps prior to M39&quot;: \x3Cbr />\x3Cbr /> Since M31, Chrome will look for the following meta tag in the element of the web-page (if there's a manifest with display specified, this is ignored):   &lt;meta name=&quot;mobile-web-app-capable&quot; content=&quot;yes&quot;&gt;   The name attribute MUST be &quot;mobile-web-app-capable&quot; and the content attribute must be &quot;yes&quot; (case in-sensitive). If there is any other value in the content attribute the web app will be added as a regular bookmark. \x3Cbr />\x3Cbr /> While I don't have any devices running Chrome M31 that I could test with, I interpret this to mean that full-screen web apps, with an icon on the device's homescreen, are supported as far back as Chrome M31, provided you use that mobile-web-app-capable meta tag.";
oracle.twelve = "В iOS есть опция сохранять веб сайты на рабочем столе в виде приложений, но для адаптации сайта нужно знать несколько моментов. Во первых для возможности отображения сайта в полноэкранном режиме, необходимо добавить метатег  &lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot;&gt; иначе наш сайт-приложение при клике на иконку будет открываться в сафари как обычный сайт";
oracle.thirteen = "Так же можем поменять цвет статусбара:&lt;meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black&quot; /&gt;";
oracle.fourteen = "Set the value of href to the location of the style sheet file. The value of href is a URI. To make a style sheet persistent, set the rel attribute to &quot;stylesheet&quot; and don't set the title attribute. Is type=“text/css” necessary in a &lt;link&gt; tag?  Don’t need to specify a type value of “text/css”\x3Cbr />\x3Cbr />According to https:/dev.w3.org/html5/spec-preview/Overview.html#the-link-element The link element allows authors to link their document to other resources. \x3Cbr />The destination of the link is given by the href attribute, which must be present and must contain a valid non-empty URL\x3Cbr /> A link element must have rel attribute.";
oracle.fifteen = "How to Add a Favicon to your Site https://www.w3.org/2005/10/howto-favicon The format for the image you have chosen must be 16x16 pixels or 32x32 pixels, using either 8-bit or 24-bit colors. The format of the image must be one of PNG (a W3C standard), GIF, or ICO. identify the URI too.Most popular implementation &lt;link rel=&quot;shortcut icon&quot; href=&quot;http://example.com/myicon.ico&quot;&gt; Works everywhere \x3Cbr />\x3Cbr /> How to make a favicon: online-convert.com";
oracle.sixteen = "sixteen";
oracle.seventeen = "seventeen";
oracle.eighteen = "eighteen";
oracle.nineteen = "nineteen";
oracle.twenty = "Узнайте, как сделать так, чтобы материалы вашего сайта или приложения, которыми люди делятся на Facebook, всегда выглядели отлично на нашей платформе. Разметка Open Graph Основная часть материалов, которыми делятся люди, представлена на Facebook в виде URL, поэтому для разметки HTML-кода своего сайта важно использовать теги Open Graph. От них зависит то, как ваши материалы будут выглядеть на Facebook. Если этих тегов нет, краулер Facebook с помощью встроенных эвристических алгоритмов приблизительно определит заголовок и описание ваших материалов, а также выберет изображение для предварительного просмотра. Эти элементы необходимо указать с помощью тегов Open Graph, чтобы обеспечить наилучшее качество публикаций на Facebook.";
oracle.twentyone = "twentyone";
oracle.twentytwo = "twentytwo";
oracle.twentythree = "twentythree";
oracle.twentyfour = "twentyfour";
oracle.twentyfive = "twentyfive";
oracle.twentysix = "twentysix";
oracle.twentyseven = "twentyseven";
oracle.twentyeight = "twentyeight";
oracle.twentynine = "twentynine";
oracle.thirty = "Generic META Tags. META tags you would use in all card cases include:   \x3Cbr />twitter:card - The type of card to be created: summary, photo, or video.\x3Cbr />twitter:url - The URL that should be used for the card.  This will likely be the same URL as the page's canonical link. \x3Cbr />twitter:title - The title as it should display in the Twitter Card.\x3Cbr /> twitter:description -  A 200 character summary of the content at the given URL.\x3Cbr />twitter:image - A representative image URL for the content.  In many cases, simply providing your logo's URL will be just fine.\x3Cbr />Each of these items get their own META tag";
oracle.thirtyone = "thirtyone";
oracle.thirtytwo = "thirtytwo";
oracle.thirtythree = "thirtythree";
oracle.thirtyfour = "thirtyfour";
oracle.thirtyfive = "Twitter also provides attribution META tags for content, providing an opportunity for authors to get credit within the TwitterCard: twitter:site - The Twitter username used by the given site including the '@'twitter:creator - The Twitter username of the individual author of the content I use the same handle for the site and author, though I could use my @davidwalsh account for the creator if I wanted:&lt;meta name=&quot;twitter:site&quot; content=&quot;@davidwalshblog&quot;&gt;&lt;meta name=&quot;twitter:creator&quot; content=&quot;@davidwalshblog&quot;&gt;These are the basic META tags you'll want to use whenever creating Twitter Cards.";
oracle.thirtysix = "thirtysix";
oracle.thirtyseven = "thirtyseven";
oracle.thirtyeight = "thirtyeight";
oracle.thirtynine = "thirtynine";
oracle.forty = "forty";
oracle.fortyone = "fortyone";
oracle.fortytwo = "fortytwo";
oracle.fortythree = "fortythree";
oracle.fortyfour = "fortyfour";
oracle.fortyfive = "fortyfive";
oracle.fortysix = "fortysix";
oracle.fortyseven = "fortyseven";
oracle.fortyeight = "fortyeight";
oracle.fortynine = "We can keep the JavaScript code completely separate from the HTML and CSS in its own file. This can be linked to using the src attribute in the script tag to specify the file to link to: &lt;script src='main.js'&gt;&lt;/script&gt; The JavaScript code would then be placed in a file called main.js inside the same directory as the HTML document. \x3Cbr />\x3Cbr />The head Tag loads before the Body, so Javascript that is required to load the website properly should be put there, but if it isn't required most people feel it's better to put it at the end of your body tag.\x3Cbr />\x3Cbr /> Anything in the head must be completed before the body is loaded, so it is generally a bad idea to put javascript in there. If you need something while the body is loading, or want to expedite some ajax, then it would be appropriate to put it in the head.\x3Cbr />\x3Cbr />document.getElementById(&quot;sp&quot;).innerHTML=&quot;Хелловорлд&quot;; Если скрипт вставить в хеад - не будет работать по очевидной причине, потому что этого спана на странице ещё нет. ";
oracle.fifty = "The HEAD element contains information about the current document, such as its title, keywords that may be useful to search engines, and other data that is not considered document content. User agents do not generally render elements that appear in the HEAD as content. They may, however, make information in the HEAD available to users through other mechanisms.";


oracle.fiftyone = "Info from www.w3.org/TR/html401/struct/global.html#h-7.5  The body of a document contains the document's content. The content may be presented by a user agent in a variety of ways. For example, for visual browsers, you can think of the body as a canvas where the content appears: text, images, colors, graphics, etc. For audio user agents, the same content may be spoken. Since style sheets are now the preferred way to specify a document's presentation, the presentational attributes of BODY have been deprecated.";
oracle.fiftytwo = "&lt;header&gt; may contain some heading elements but also other elements like a logo, a search form, an author name, and so on.\x3Cbr />\x3Cbr />The header element represents introductory content for its nearest ancestor main element or sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When a header element’s nearest ancestor sectioning root element is the body element, and it is not a descendant of the main element or a sectioning content element, then that header is scoped to the body element and represents introductory content for the page as a whole.";
oracle.fiftythree = "53";
oracle.fiftyfour = "54"; 
oracle.fiftyfive = "Note that a &lt;header&gt; element must not be a descendant of an &lt;address&gt;, &lt;footer&gt; or another &lt;header&gt; element.";
oracle.fiftysix = "56";
oracle.fiftyseven = "57";
oracle.fiftyeight = "58";
oracle.fiftynine = "59";
oracle.sixty = "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links. Not all groups of links on a page need to be in a nav element — the element is primarily intended for sections that consist of major navigation blocks.";
oracle.sixtyone = "61";
oracle.sixtytwo = "62";
oracle.sixtythree = "63";
oracle.sixtyfour = "64";
oracle.sixtyfive = "65";
oracle.sixtysix = "A Search form is another commmon non-linear way to navigate through a website.";
oracle.sixtyseven = "67";
oracle.sixtyeight = "68";
oracle.sixtynine = "69";
oracle.seventy = "70";
oracle.seventyone = "Элемент &lt;main&gt; предназначен для основного содержимого документа. Содержимое должно быть уникальным и не включать типовые блоки вроде шапки сайта, подвала, навигации, боковой панели, формы поиска и т. п.";
oracle.seventytwo = "72";
oracle.seventythree = "73";
oracle.seventyfour = "74";
oracle.seventyfive = "75";
oracle.seventysix = "76";
oracle.seventyseven = "seventyseven";
oracle.seventyeight = "seventyeight";
oracle.seventynine = "seventynine";
oracle.eighty = "eighty";
oracle.eightyone = "eightyone";
oracle.eightytwo = "eightytwo";
oracle.eightythree = "eightythree";
oracle.eightyfour = "eightyfour";
oracle.eightyfive = "eightyfive";
oracle.eightysix = "eightysix";
oracle.eightyseven = "eightyseven";
oracle.eightyeight = "eightyeight";
oracle.eightynine = "the W3C specification doesn't permit &lt;main&gt; to be used as a descendant of  &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;header&gt;, or &lt;nav&gt;. http:/developer.mozilla.org/ru/docs/Web/HTML/Element/main  The aside content can also be nested within the main content.";
oracle.ninety = "Местоположение: если footer внутри body, и не внутри main или section, то он представляет весь футер страницы.\x3Cbr />\x3Cbr />Some site designs have what is sometimes referred to as &quot;fat footers&quot; — footers that contain a lot of material, including images, links to other articles, links to pages for sending feedback, special offers... in some ways, a whole &quot;front page&quot; in the footer.&lt;footer&gt;&lt;nav&gt;&lt;section&gt;&lt;/section&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/nav&gt;&lt;p&gt;&lt;small&gt;Copyright © 2015 The Snacker — &lt;a href=&quot;/tos&quot;&gt;Terms of Service&lt;/a&gt;&lt;/small&gt;&lt;/p&gt;&lt;/footer&gt;\x3Cbr />\x3Cbr />A footer typically contains information about its section, such as who wrote it, links to related documents, copyright data, and the like.\x3Cbr />\x3Cbr />In particular, it is common for footers to have a short list of links to various pages of a site, such as the terms of service, the home page, and a copyright page. The footer element alone is sufficient for such cases";
oracle.ninetyone = "ninetyone";
oracle.ninetytwo = "ninetytwo";
oracle.ninetythree = "ninetythree";
oracle.ninetyfour = "ninetyfour";
oracle.ninetyfive = "ninetyfive";
oracle.ninetysix = "ninetysix";
oracle.ninetyseven = "ninetyseven";
oracle.ninetyeight = "Тег &lt;footer&gt;&lt;/footer&gt; используется в 5 из 15 сайтов. wordpress.org ebay.com microsoft.com lenta.ru alexa.com На остальных сайтах или не используется или используется &lt;div id=&quot;footer&quot;&gt; - wikipedia, yahoo, instagram, google, youtube, aliexpress, ok, facebook, qq\x3Cbr />\x3Cbr />Note that a &lt;footer&gt; element must not be a descendant of an &lt;address&gt;, &lt;header&gt; or another &lt;footer&gt; element.";
oracle.ninetynine = "The body of a document contains the document's content: text, images, colors, graphics, etc. So the closing tag is where the content finishes";
oracle.hundred = "&lt;/html&gt;  is the last tag in all websites. \x3Cbr />\x3Cbr />After document type declaration, the remainder of an HTML document is contained by the HTML element. Thus, a typical HTML document has this structure: &lt;!DOCTYPE html&gt;  &lt;HTML&gt; ...The head, body, etc. goes here... &lt;/HTML&gt; \x3Cbr />\x3Cbr /> Declarative header section (delimited by the HEAD element) and body, which contains the document's actual content should be delimited by the HTML element.";


function highlightall(){

area.focus(); // Focus on textarea 
area.select();// Select all text  
document.execCommand("Copy");
window.scrollTo(0, 0);
}