const pageSize = 20; // 한 페이지에 들어갈 개수
const groupSize = 10; // pagination 5개씩 묶음

// 기본 값을 다음과같이 설정
let page = 1;
let totalResult = 0;
let totalPage = 0;


const paginationRender = () => {
    // pageSize
    // page
    // groupSize
    // totalPage
    // totalResult
  
    // pageGroup
    const pageGroup = Math.ceil(page / groupSize);
    // firstPage, lastPage
    let lastPage = pageGroup * groupSize;
    // 예) lastPage가 5인데 totalPage가 3인경우
    if (lastPage > totalPage) {
      lastPage = totalPage;
    }
    // 예) lastPage가 3이면 firstPage가 음수가 된다 이러한 일을 방지
    let firstPage =
      lastPage - (groupSize - 1) <= 0
        ? 1
        : pageGroup * groupSize - (groupSize - 1);
  
    let paginationHTML = "";
    if (pageGroup !== 1) {
      paginationHTML += `
            <li class="page-item" onclick="moveToPreGroupPage(${firstPage})"><a class="page-link" href="#">< 이전</a></li>
        `;
    }
    for (let i = firstPage; i <= lastPage; i++) {
      paginationHTML += `
            <li class="page-item" onclick="moveToPage(${i})"><a class="page-link ${
        i === page ? "active2" : ""
      }" href="#">${i}</a></li>
        `;
    }
    if (pageGroup !== Math.ceil(totalPage / groupSize)) {
      paginationHTML += `
            <li class="page-item" onclick="moveToNextGroupPage(${firstPage})"><a class="page-link" href="#">다음 ></a></li>
        `;
    }
  
    document.querySelector(".pagination").innerHTML = paginationHTML;
  };
  
  //클릭한 page로 넘어가는 함수
  const moveToPage = (pageNum) => {
    page = pageNum;
    getMovieData();
  };
  
  //다음페이지로 넘어가는 함수
  const moveToNextGroupPage = (pageNum) => {
    page = pageNum + groupSize;
    getMovieData();
  };
  
  //이전페이지로 넘어가는 함수
  const moveToPreGroupPage = (pageNum) => {
    page = pageNum - groupSize;
    getMovieData();
  };