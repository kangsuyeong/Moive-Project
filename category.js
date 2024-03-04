const menus = document.querySelectorAll(".menus button");
let checkMenus = document.querySelector(".menus")
let checkGenres = document.getElementById("genre_menus")

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getMoviesCategory(event))
);

/*카테고리별로 불러오는 함수 */
const getMoviesCategory = async (event) => {
    const category = event.target.id;
    console.log("category", category);
    url = new URL(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR`);
    getMovieData()
};


/*카테고리를 눌렀을 때 인기 추천 최신이 나오는 함수 */
const openMenus = ()=>{
    if(checkMenus.style.display=="" || checkMenus.style.display=='none'){
      checkMenus.style.display = 'flex'
    }
    else{
      checkMenus.style.display='none'
    }
    if(checkGenres.style.display == 'flex'){
      checkGenres.style.display='none'
    }
  }
  
  /*장르를 눌렀을 때 장르목록이 나오는 함수 */
  const openGenre = ()=>{
    if(checkGenres.style.display=="" || checkGenres.style.display=='none'){
      checkGenres.style.display = 'flex'
      console.log(checkGenres.style.display)
    }
    else{
      checkGenres.style.display='none'
    }
    if(checkMenus.style.display == 'flex'){
      checkMenus.style.display='none'
    }
  }

