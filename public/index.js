var db = firebase.firestore();
var count = db.collection('vote').doc('count');

document.getElementById("btn_miho").onclick = function() {
  count.update({ miho:firebase.firestore.FieldValue.increment(1) });
  //投票数を取得して表示する
  //document.getElementById("miho_count").textContent = getVoteCount();
};

document.getElementById("btn_eriko").onclick = function() {
  count.update({ eriko:firebase.firestore.FieldValue.increment(1) })
  //投票数を取得して表示する
  //document.getElementById("eriko_count").textContent = getVoteCount();
};

function getVoteCount(doc){
  //投票数を取得する
}
