// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       openTab(i);
//     });
// }
$(".list").click(function (e) {
  // if (e.target == document.querySelectorAll(".tab-button")[0]) {
  openTab(e.target.dataset.id);
  // }
});

function openTab(num) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(num).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(num).addClass("show");
}
