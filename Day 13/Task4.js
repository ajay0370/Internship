/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
      Left();
      Right();
      Left();
      Right();
      Left();
}

function Left(){
      putBeeper();
      move();
      move();
      putBeeper();
      move();
      move();
      putBeeper();
}

function Right(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}
