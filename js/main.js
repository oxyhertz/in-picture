"use strict";

var gId;
var gQuests;
var gCurrQuestIdx;
var gCurrQuest;
var gLastQuestEl;

// global after winning el
var elGreeting = document.querySelector(".greeting");

function init() {
  gId = 1;
  gQuests = createQuestions();
  gCurrQuestIdx = 0;
  gCurrQuest = gQuests[gCurrQuestIdx];
  elGreeting.style.display = "none";
  renderQuest();
}

function renderQuest() {
  var strHTML = "";
  strHTML += `<img src="images/${gCurrQuest.id}.png"/>`;
  for (var i = 0; i < gCurrQuest.opts.length; i++) {
    strHTML += ` <button class="answer" onclick="checkAnswer(this);">${gCurrQuest.opts[i]}</button>`;
  }
  var elQuestion = document.querySelector(".question");
  elQuestion.innerHTML = strHTML;
}

function checkAnswer(el) {
  var correctOpt = gCurrQuest.correctOptIdx;
  if (gLastQuestEl) gLastQuestEl.style.backgroundColor = "white";
  if (el.innerText === gCurrQuest.opts[correctOpt]) {
    el.style.backgroundColor = "green";
    if (gCurrQuestIdx !== gQuests.length - 1) {
      gCurrQuestIdx++;
      gCurrQuest = gQuests[gCurrQuestIdx];
      renderQuest();
    } else {
      elGreeting.style.display = "block";
    }
  } else {
    gLastQuestEl = el;
    el.style.backgroundColor = "red";
  }
}

function createQuestions() {
  var questions = [];
  questions.push({
    id: gId++,
    opts: ["The MT-09 can wheelie!", "The Z900 can wheelie!"],
    correctOptIdx: 0,
  });
  questions.push({
    id: gId++,
    opts: ["The CB1000 can go fast!", "The MT-10 can go fast!"],
    correctOptIdx: 1,
  });
  questions.push({
    id: gId++,
    opts: ["The R1 can FLY!", "The GSXR1000 can FLY!"],
    correctOptIdx: 0,
  });

  return questions;
}
