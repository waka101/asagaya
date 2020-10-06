var db = firebase.firestore();
var vote = db.collection('vote');

document.getElementById("btn_miho").onclick = function() {
  var docId = "JW2NR3zFjHuUsnCwxe5z";
  vote.doc(docId).update({ vote_count:firebase.firestore.FieldValue.increment(1) });
  document.getElementById("miho_count").textContent = getVoteCount(docId);
};

document.getElementById("btn_eriko").onclick = function() {
  var docId = "L1kXmXECCJ0QgyHL52vX";
  vote.doc(docId).update({ vote_count:firebase.firestore.FieldValue.increment(1) })
  document.getElementById("eriko_count").textContent = getVoteCount(docId);
};

function getVoteCount(docId){
  var count;
  return count;
}
