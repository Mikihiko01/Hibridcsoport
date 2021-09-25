$(function () {
  $.ajax({
    url: "adatok.json",
    success: function (result) {
      console.log(result);
      adatok = result.adatok;
      console.log(adatok);
      megjelenit();
    },
  });
});
function megjelenit() {
  $("article").append(
    "<table><tr><th>SzfB osztály</th><td>állatok 1</td><td>állatok 2</td><td>állatok 3</td></tr></table>"
  );
}
let adatok = [];
