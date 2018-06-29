// var list = ["a", "b", "c", "d", "e", "f", "g", "h"];
var list = ["0", "1", "2", "3", "4", "5", "6", "7"];
centralStorage = [];
createBoard();

function createBoard() {
  var ParentDiv = document.getElementById("main-id");
  for (var i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      var childDiv = document.createElement("div");
      childDiv.id = list[j] + i;
      if ((i + j) % 2 == 1) {
        childDiv.setAttribute("style", "Background-color:#576574;");
      }
      ParentDiv.appendChild(childDiv);
    }
  }
}
class ChessPosition {
  constructor(pos_x, pos_y, status, source, piecesId) {
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.status = status;
    this.source = source;
    this.piecesId = piecesId;
  }
}

class PawnStatus extends ChessPosition {
  constructor(pos_x, pos_y, status, source,piecesId) {
    super(pos_x, pos_y, status, source,piecesId);
  }
}
var idList = ["ro", "kn", "bi", "qu", "ki", "bi", "kn", "ro"];
var wGroupPawn = [];
for (var i = 0; i < 8; i++) {
  var temp = new PawnStatus(1, list[i], "true", "images/white-pawn0.svg", "wp" + i);
  var btemp = new PawnStatus(6, list[i], "true", "images/black-pawn.svg", "bp" + i);
  var dtemp = new PawnStatus(7, list[i], "true", "images/img" + i + ".svg", "b" + idList[i] + i);
  var qtemp = new PawnStatus(0, list[i], "true", "images/wimg" + i + ".svg", "w" + idList[i] + i);
  wGroupPawn.push(temp);
  wGroupPawn.push(btemp);
  wGroupPawn.push(dtemp);
  wGroupPawn.push(qtemp);
}
console.log(wGroupPawn);
createPieces();

function createPieces() {
  var d = 0;
  var b = 0;
  var m = 0;
  for (var k = 0; k < wGroupPawn.length; k++) {
    var par_node = document.getElementById(
      wGroupPawn[k].pos_y + wGroupPawn[k].pos_x
    );
    var imgPieces = document.createElement("img");
    imgPieces.id=wGroupPawn[k].piecesId;
    imgPieces.setAttribute("src", wGroupPawn[k].source);
    imgPieces.setAttribute("draggable", "true");
    par_node.appendChild(imgPieces);
  }
}