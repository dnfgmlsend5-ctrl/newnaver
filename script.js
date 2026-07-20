const btn = document.querySelector("#btn");
const searchInput = document.querySelector("#search");

function searchNaver() {
  const query = searchInput.value.trim();
  if (!query) return;
  window.location.href = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
}

btn.addEventListener("click", searchNaver);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchNaver();
  }
});