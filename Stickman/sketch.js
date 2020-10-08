function setup() {
  createCanvas(1600,1600);
  frameRate(30)
  
 xPosAb1 = -250;
}

function draw() {
background(0)
text(frameCount, width / 2, height / 2);
  
  
let grassColor =color(126,200,80)
  stroke(grassColor)
  fill(grassColor)
  rect(0,250,1200,1200)
  
  let PathwayColor =color(96,103,107)
  stroke(PathwayColor)
  fill(PathwayColor)
  rect(0,300,1200,130)
  
let rockColor =color(136,140,141)
  stroke(rockColor)
  fill(rockColor)
  rect(20,350,30,30,10,15)
  rect(40,300,30,30,10,15)
  rect(60,400,30,30,10,15)
  rect(80,350,30,30,10,15)
  rect(100,400,30,30,10,15)
  rect(120,350,30,30,10,15)
  rect(140,300,30,30,10,15)
  rect(160,400,30,30,10,15)
  rect(180,350,30,30,10,15)
  rect(200,300,30,30,10,15)
  rect(220,400,30,30,10,15)
  rect(240,300,30,30,10,15)
  rect(260,350,30,30,10,15)
  rect(280,400,30,30,10,15)
  rect(300,300,30,30,10,15)
  rect(320,400,30,30,10,15)
  rect(340,300,30,30,10,15)
  rect(360,350,30,30,10,15)
  rect(380,400,30,30,10,15)
  rect(400,300,30,30,10,15)
  rect(420,350,30,30,10,15)
  rect(440,300,30,30,10,15)
  rect(460,400,30,30,10,15)
  rect(480,350,30,30,10,15)
  rect(500,400,30,30,10,15)
  rect(520,300,30,30,10,15)
  rect(540,350,30,30,10,15)
  rect(560,400,30,30,10,15)
  rect(580,300,30,30,10,15)
  rect(600,350,30,30,10,15)
  rect(620,400,30,30,10,15)
  rect(640,300,30,30,10,15)
  rect(660,350,30,30,10,15)
  rect(680,400,30,30,10,15)
  rect(700,350,30,30,10,15)
  
;//Stars
let StarColor =color(255,255,255)
  stroke(StarColor)
  fill(StarColor)

  
;//Body
  let BodyColor =color(255,190,175);
  stroke(BodyColor);
  fill(BodyColor);
  strokeWeight(6)
ellipse(250, 80, 70, 70);//Hoved
line(250, 115, 250, 250);//Body
  line(240, 140, mouseX, mouseY);//Venstre Arm
  line(260, 140, 300, 200);//Højre Arm
line(250, 251, 230, 400);//Venstre Ben
line(250, 251, 270, 400);//Højre Ben
  line(300,200,310,210);//Hand
   
;//Hair
  let HairColor=color(255,255,0)
  stroke(HairColor)
  fill(HairColor)
  strokeWeight(3)
  line(250,70,240,45);//Hair
  line(253,70,230,50);//Hair
  line(230,65,200,60);//Hair
  line(230,55,200,60);//Hair
  line(230,55,205,45);//Hair
  line(250,50,205,45);//Hair
  line(235,45,225,30);//Hair
  line(235,50,250,30);//Hair
  line(255,50,250,30);//Hair
  line(255,50,270,30);//Hair
  line(270,50,270,30);//Hair
  line(270,50,290,40);//Hair
  line(280,60,290,40);//Hair
  line(280,60,300,60);//Hair
  line(280,70,300,60);//Hair
  line(280,70,265,60);
  ellipse(250,58,55,25);//Hair
  triangle(230,65,230,50,200,50)//ExperiementTriangle
  
  
;//Face
  let MouthColor =color(255,142,180)
  fill(MouthColor)
  stroke(BodyColor)
  strokeWeight(1)
arc(251, 95, 33, 33, -0,3, PI + QUARTER_PI, CHORD);//Mund
  
  let EyeColor =color(255,255,255)
  fill(EyeColor)
  stroke(EyeColor)
  
 ellipse(235, 80, 15, 15,)//LeftEye
 ellipse(265, 80, 15, 15,)//RightEye
  
  let IrisColor =color(0,0,0)
  fill(IrisColor)
  stroke(IrisColor)
  ellipse(235, 80, 6, 8);//LeftIris
  ellipse(265, 80, 6, 8);//RightIris
  
  let EyeLid =color(255,195,170)
  stroke(EyeLid)
  fill(EyeLid)
  arc(250, 70, 50, 15, 5, HALF_PI);//LeftEyelid
  arc(227, 70, 50, 15, 5, HALF_PI);//RightEyelid
  
  
;//Sword
 let HandleColor =color(98,74,46);
 let swordColor =color(192,192,192);
  let FillHandle =color(0,255,0)
   stroke(HandleColor);
   fill(FillHandle);
  strokeWeight(8)
  
  rect(280, 204, 10, 10, 20);//HandleTip
  line(285, 210, 320, 190);//SwordHandle
  ellipse(285,210,15,15);//SwordHandleColorFill
  
   stroke(swordColor);
   fill(HandleColor)
  line(335, 210, 320, 190);//BladeBotRightPart
  line(300, 170, 320, 190);//BladeBotLeftPart
  line(400, 105, 300, 170);//BladeLeftMidPart
  line(430, 140, 335, 210);//BladeRightMidPart
  line(400, 105, 460, 90);//BladeTopLeftPart
  line(430, 140, 460, 90);//BladeTopRightPart
  line(460, 90, 320, 190);//BladeMidPart
  strokeWeight(25)
  line(430,120,318,170)//BladeFillLeft
  line(420,110,340,190)//BladeFillRight
  strokeWeight(8)
  
  strokeWeight(4)
  rect(255,130,15,30,20);//LeftShoulder
  rect(230,130,15,30,20)//RightShoulder
  
  strokeWeight(5)
  rect(220,155,30,25,25)//LeftChest
  rect(250,155,30,25,25)//RightChest
  
  strokeWeight(4)
  rect(234,220,15,20,30,30)//BotLeftAb
  rect(234,200,15,20,30,30)//MidLeftAb
  rect(234,180,15,20,30,30)//TopLeftAb
  rect(251,220,15,20,30,30)//BotRightAb
  rect(251,200,15,20,30,30)//MidRightAb
  rect(251,180,15,20,30,30)//TopRightAb
  
  strokeWeight(8)
  ellipse(mouseX, mouseY, 65, 65);//Shield
}