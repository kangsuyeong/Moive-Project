const searchIcon = document.querySelector(".searchIcon");
const search2Icon = document.querySelector(".search2Icon");
const searchInput = document.querySelector(".searchInput");
const grade = document.querySelector(".grade");

searchIcon.addEventListener("click", () => {
  searchIcon.classList.add("active");
  searchInput.classList.add("active");
  search2Icon.classList.add("active");
});

window.enterkeySearch = () => {
  if (window.event.keyCode == 13) {
    getMoviesByKeyword();
  }
};

const getMoviesByKeyword = async () => {
  const keyword = searchInput.value;
  console.log("keyword", keyword);
  url = new URL(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=ko-KR`
  );
  getMovieData();
};