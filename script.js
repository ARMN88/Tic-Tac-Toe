let xTurn = false;

function Lock() {
  document.querySelector("html").style.overflow = "hidden";
}

const oneone = document.querySelector("#one-one");
const onetwo = document.querySelector("#one-two");
const onethree = document.querySelector("#one-three");

const twoone = document.querySelector("#two-one");
const twotwo = document.querySelector("#two-two");
const twothree = document.querySelector("#two-three");

const threeone = document.querySelector("#three-one");
const threetwo = document.querySelector("#three-two");
const threethree = document.querySelector("#three-three");

const score = document.querySelector("#score");

const cover = document.querySelector(".cover");
const section = document.querySelector(".section");
const home = document.querySelector(".home");

const playerOne = document.querySelector("#user1");
const playerTwo = document.querySelector("#user2");

function Extract(data) {
  function Change() {
    if (data.innerHTML == "") {
      if (xTurn) {
        data.innerHTML = "X";
        xTurn = false;
      } else if (!xTurn) {
        data.innerHTML = "O";
        xTurn = true;
      }
    }

    function CheckRows() {
      if (
        oneone.innerHTML == onetwo.innerHTML &&
        onethree.innerHTML == onetwo.innerHTML &&
        oneone.innerHTML != ""
      ) {
        oneone.style.color = "coral";
        onetwo.style.color = "coral";
        onethree.style.color = "coral";
        return oneone.innerHTML;
      }

      if (
        twoone.innerHTML == twotwo.innerHTML &&
        twothree.innerHTML == twotwo.innerHTML &&
        twoone.innerHTML != ""
      ) {
        twoone.style.color = "coral";
        twotwo.style.color = "coral";
        twothree.style.color = "coral";
        return twoone.innerHTML;
      }

      if (
        threeone.innerHTML == threetwo.innerHTML &&
        threeone.innerHTML == threethree.innerHTML &&
        threeone.innerHTML != ""
      ) {
        threeone.style.color = "coral";
        threetwo.style.color = "coral";
        threethree.style.color = "coral";
        return threeone.innerHTML;
      }
    }
    function CheckCols() {
      if (
        oneone.innerHTML == twoone.innerHTML &&
        threeone.innerHTML == twoone.innerHTML &&
        oneone.innerHTML != ""
      ) {
        oneone.style.color = "coral";
        twoone.style.color = "coral";
        threeone.style.color = "coral";
        return oneone.innerHTML;
      }

      if (
        onetwo.innerHTML == twotwo.innerHTML &&
        threetwo.innerHTML == twotwo.innerHTML &&
        onetwo.innerHTML != ""
      ) {
        onetwo.style.color = "coral";
        twotwo.style.color = "coral";
        threetwo.style.color = "coral";
        return onetwo.innerHTML;
      }

      if (
        onethree.innerHTML == twothree.innerHTML &&
        threethree.innerHTML == twothree.innerHTML &&
        onethree.innerHTML != ""
      ) {
        onethree.style.color = "coral";
        twothree.style.color = "coral";
        threethree.style.color = "coral";
        return onethree.innerHTML;
      }
    }
    function CheckDiags() {
      if (
        oneone.innerHTML == twotwo.innerHTML &&
        threethree.innerHTML == twotwo.innerHTML &&
        oneone.innerHTML != ""
      ) {
        oneone.style.color = "coral";
        twotwo.style.color = "coral";
        threethree.style.color = "coral";
        return oneone.innerHTML;
      }

      if (
        onethree.innerHTML == twotwo.innerHTML &&
        threeone.innerHTML == onethree.innerHTML &&
        onethree.innerHTML != ""
      ) {
        onethree.style.color = "coral";
        twotwo.style.color = "coral";
        threeone.style.color = "coral";
        return onethree.innerHTML;
      }
    }
    function CheckWin() {
      CheckRows();
      CheckCols();
      CheckDiags();

      if (CheckRows() == "X" || CheckCols() == "X" || CheckDiags() == "X") {
        score.innerHTML = playerOne.value + " Wins!";
        cover.style.display = "block";
        window.setTimeout("location.reload()", 3000);
      } else if (
        CheckRows() == "O" ||
        CheckCols() == "O" ||
        CheckDiags() == "O"
      ) {
        score.innerHTML = playerTwo.value + " Wins!";
        cover.style.display = "block";
        window.setTimeout("location.reload()", 3000);
      } else if (
        oneone.innerHTML != "" &&
        onetwo.innerHTML != "" &&
        onethree.innerHTML != "" &&
        twoone.innerHTML != "" &&
        twotwo.innerHTML != "" &&
        twothree.innerHTML != "" &&
        threeone.innerHTML != "" &&
        threetwo.innerHTML != "" &&
        threethree.innerHTML != ""
      ) {
        score.innerHTML = "Tie Game!";
        window.setTimeout("location.reload()", 1500);
      }
    }

    CheckWin();
  }
  data.addEventListener("click", Change);
}

Extract(oneone);
Extract(twoone);
Extract(threeone);
Extract(onetwo);
Extract(twotwo);
Extract(threetwo);
Extract(onethree);
Extract(twothree);
Extract(threethree);

function Hide() {
  section.style.display = "block";
  home.style.display = "none";
}

playerOne.onblur = function() {
  if (playerOne.value == "") {
    playerOne.value = "Player X";
  }
};

playerOne.onfocus = function() {
  if (playerOne.value == "Player X") {
    playerOne.value = "";
  }
};

playerTwo.onblur = function() {
  if (playerTwo.value == "") {
    playerTwo.value = "Player O";
  }
};

playerTwo.onfocus = function() {
  if (playerTwo.value == "Player O") {
    playerTwo.value = "";
  }
};
