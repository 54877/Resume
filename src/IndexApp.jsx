import xiang from "../src/image/xiang.jpg"
import dramago from "../src/image/據再一起.jpg"
import craftio from "../src/image/craftio.jpg"
import Learning from "../src/image/Learning.jpg"
import vivre from "../src/image/vivre.jpg"
import shop from "../src/image/前台購物.jpg"
import back from "../src/image/後臺簡易功能.jpg"
import glasess from "../src/image/眼鏡官網.jpg"
import backFront from "../src/image/簡易前後台功能.jpg"
import eazy2 from "../src/image/簡易套票.jpg"


function IndexApp() {
  const data = [
    {
      Url: `https://54877.github.io/DramaGo/`,
      UrlGithub: `https://github.com/54877/DramaGo`,
      img: dramago,
      title: `DramaGo-交友網站`,
      introduce: '這是一個劇會交友平台，主要提供使用者發起劇會與參加劇會，專案由團隊共同發想、設計，並進行前端開發，我負責首頁與後台前端開發，同時擔任設計稿的組長',
      skill: `使用到了React+vite框價，這專案不僅加強了我前端開發技能，還提升了團隊協作中的溝通與領導能力`
    },
    {
      Url: `https://54877.github.io/js-week8/#recommendation`,
      UrlGithub: `https://github.com/54877/js-week8`,
      img: shop,
      title: `購物前後台-簡易功能`,
      introduce: '這是一個擁有簡易功能的購物前後台網站，主要提供使用者新增商品，並且可在後台控制商品細項調整，專案由六角提供設計稿',
      skill: `使用到了javascript，這專案加強了我javascript技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/js-week5/`,
      UrlGithub: `https://github.com/54877/js-week5`,
      img: eazy2,
      title: `套票與選單-簡易功能`,
      introduce: '這是一個擁有簡易功能的套票網站，主要提供使用者新增套票與查詢，專案由六角提供設計稿',
      skill: `使用到了javascript，這專案加強了我javascript技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/react-week5/`,
      UrlGithub: `https://github.com/54877/react-week5`,
      img: backFront,
      title: `前後台功能-簡易功能`,
      introduce: '這是一個擁有前後台商品管理的網站，主要提供使用者新增購物清單與後台新增刪除商品，專案由六角提供設計稿',
      skill: `使用到了React+vite，這專案加強了我React+vite框架技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/AAPD/market.html`,
      UrlGithub: `https://github.com/54877/AAPD`,
      img: craftio,
      title: `Craftion-線上學習網站`,
      introduce: '這是一個線上學習網站，主要提供使用者線上學習手藝，專案由AAPD學員提供設計，並由我們的團隊進行前端開發，我負責首頁、我的課程頁面、探索課程頁面，同時擔任組長',
      skill: `使用到了HTML、CSS，這專案不僅加強了我前端開發技能，還提升了團隊協作中的溝通與領導能力`
    },
    {
      Url: `https://54877.github.io/week6/`,
      UrlGithub: `https://github.com/54877/week6`,
      img: vivre,
      title: `Vivre-旅遊網站`,
      introduce: '這是一個旅遊網站，主要提供使用者線上查看旅遊方案，專案由六角提供設計稿',
      skill: `使用到了HTML、CSS，這專案加強了我前端開發技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/week8/`,
      UrlGithub: `https://github.com/54877/week8`,
      img: Learning,
      title: `Learning-線上課程網站`,
      introduce: '這是一個線上學習課程網站，主要提供使用者線上學習，專案由六角提供設計稿',
      skill: `使用到了HTML、CSS，這專案加強了我前端開發技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/week4/`,
      UrlGithub: `https://github.com/54877/week4`,
      img: glasess,
      title: `眼鏡官網`,
      introduce: '這是一個眼鏡官網，主要提供使用者線上查看眼鏡，專案由六角提供設計稿',
      skill: `使用到了HTML、CSS，這專案加強了我前端開發技能與獨立作業能力`
    },
    {
      Url: `https://54877.github.io/week5/`,
      UrlGithub: `https://github.com/54877/week5`,
      img: back,
      title: `後臺表單-簡易功能`,
      introduce: '這是一個簡易的後台功能，專案由六角提供設計稿',
      skill: `使用到了HTML、CSS，這專案加強了我前端開發技能與獨立作業能力`
    }
  ]

  return (
    <>
      <main className=" container">
        <section className="row ">

          <div className="col-lg-4 bg-black pt-5 d-flex flex-column align-items-center">
            <h1 className="text-white fw-bolder">黃映翔</h1>
            <h2 className="text-white">Ying Xiang Huang</h2>
            <h3 className="text-white fs-5 mb-3">前端工程師</h3>
            <div className="pb-5">
              <img className="xiang-img" src={xiang} alt="" />
            </div>
            <div className="d-flex pt-4 pb-4 justify-content-center align-items-center border-4 border-top border-white w-100">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
              <h2 className="text-white fs-4 mb-0 fw-bold">CONTACT</h2>
            </div>
            <h4 className="text-white fs-5 fw-bold mb-3">phone</h4>
            <h5 className="text-white fs-6 mb-4">0955-059-329</h5>
            <h4 className="text-white fs-5 fw-bold mb-3">Email</h4>
            <h5 className="text-white fs-6 mb-4">aa0955059329@gmail.con</h5>
            <h4 className="text-white fs-5 fw-bold mb-3">Address</h4>
            <h5 className="text-white fs-6 mb-4">新竹市 東區</h5>
            <div className="d-flex h-100 justify-content-center align-items-center border-4 border-top border-white w-100">
              <div className="my-5 my-lg-0">
                <button type="button" className="btn btn-info  d-flex align-items-center px-4 py-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                  <h2 className="text-white mb-0 fw-bold">PORTFOLIO</h2>
                </button>
              </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">作品集</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className=" d-flex flex-column">
                      <ul className="pt-3 ul-type">
                        {data.map((e) => {
                          const { title, Url, UrlGithub, img, introduce, skill } = e;
                          return (
                            <div className="row" key={Url}>
                              <div className="col-lg-6">
                                <div className="mb-5">
                                  <img className="img-product" src={img} alt="" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between">
                                  <a className="text-decoration-none text-black fs-4 fw-bolder mb-6" href={Url} target="_blank">{title}</a>
                                  <a className="text-decoration-none text-black fs-4 fw-bolder" href={UrlGithub}>Github</a>
                                </div>
                                <p>{introduce}</p>
                                <p>{skill}</p>
                              </div>
                            </div>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 bg-white px-4  pt-5">
            {/* 自傳 */}
            <div className="mb-4">
              <div className="d-flex mb-3 mb-lg-0">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                <h2 className="mb-lg-0 mt-2 fw-bold">MY PROFILE</h2>
                <div className="d-lg-block d-none ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="d-none d-lg-block trapezoid-2"></div>
                <div className="ms-4">
                  <ul>
                    <li className="fs-6 mb-3">過去在零售、餐飲服務及設備維護的經歷，讓我練就高壓下的高效執行力、細膩的跨部門溝通，以及嚴謹的細節管理能力。</li>
                    <li className="fs-6 mb-3">透過自學成功轉型為 前端工程師，熟練運用 HTML、CSS、JavaScript 進行開發，並持續探索創新解法。我熱愛將技術與創意結合，積極優化使用者體驗，同時透過自主學習不斷精進技能。</li>
                    <li className="fs-6">深信過往的多元歷練，能為團隊帶來獨特的視角與適應力——無論面對任何挑戰，我都能以敏捷的學習力與正向態度，協作共創價值。</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 工作經歷 */}
            <div className="mb-4">
              <div className="d-flex mb-3 mb-lg-0">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="m786-146 28-28-74-74v-112h-40v128l86 86ZM400-720h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-560-80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-35-25-76-38t-84-13q-116 0-198 82t-82 198q0 31 6.5 61.5T467-120H160Z" /></svg>
                <h2 className="mb-lg-0 mt-2 fw-bold">WORK EXPERIENCE</h2>
                <div className="d-lg-block d-none ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="d-none d-lg-block trapezoid"></div>
                <div className="ms-4">
                  <h2 className="fs-4 fw-semibold mb-3">頎邦科技股份有限公司</h2>
                  <div className="d-lg-flex d-none justify-content-between mb-3">
                    <span>半導體設備工程師</span>
                    <span className="text-secondary">西元2021年/6月~西元2024年/6月</span>
                  </div>
                  <p className="d-lg-none">半導體設備工程師</p>
                  <p className="text-secondary d-lg-none">西元2021年/6月~西元2024年/6月</p>
                </div>
              </div>
            </div>
            {/* 學歷 */}
            <div className="mb-4">
              <div className="d-flex  mb-3 mb-lg-0">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z" /></svg>
                <h2 className="mb-lg-0 mt-2 fw-bold">EDUCATION</h2>
                <div className="d-lg-block d-none  ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="d-none d-lg-block trapezoid-1"></div>
                <div className="ms-4 mb-4">
                  <h2 className="fs-4 fw-semibold mb-3">國立勤益科技大學</h2>
                  <div className="d-lg-flex d-none justify-content-between mb-3">
                    <span>大學 ｜畢業 ｜國內</span>
                    <span className="text-secondary">西元2016年/9月~西元2020年/9月</span>
                  </div>
                  <p className="d-lg-none">大學 ｜畢業 ｜國內</p>
                  <p className="text-secondary d-lg-none">西元2016年/9月~西元2020年/9月</p>
                  <div className="d-flex mb-3">
                    <span className="me-5">主修名稱</span>
                    <span className="text-secondary">電機工程</span>
                  </div>
                  <div className="d-flex">
                    <span className="me-5">主修類別</span>
                    <span className="text-secondary">電機工程學類</span>
                  </div>
                </div>
                <div className="ms-4">
                  <h2 className="fs-4 fw-semibold mb-3">六角學院</h2>
                  <div className="d-lg-flex d-none justify-content-between mb-3">
                    <span>網頁切版直播班</span>
                    <span className="text-secondary">西元2024年/7月~西元2024年/10月</span>
                  </div>
                  <p className="d-lg-none">網頁切版直播班</p>
                  <p className="text-secondary d-lg-none fs-7">西元2024年/7月~西元2024年/10月</p>
                  <div className="d-lg-flex d-none justify-content-between mb-3">
                    <span>JavaScript 工程師養成直播班</span>
                    <span className="text-secondary">西元2024年/10月~西元2024年/12月</span>
                  </div>
                  <p className="d-lg-none">JavaScript 工程師養成直播班</p>
                  <p className="text-secondary d-lg-none fs-7">西元2024年/10月~西元2024年/12月</p>
                  <div className="d-lg-flex d-none justify-content-between mb-3">
                    <span>React作品實戰</span>
                    <span className="text-secondary">西元2025年/1月~西元2025年/4月</span>
                  </div>
                  <p className="d-lg-none">React作品實戰</p>
                  <p className="d-lg-none text-secondary">西元2025年/1月~西元2025年/4月</p>
                </div>
              </div>
            </div>
            {/* SKILLS */}
            <div className="mb-4">
              <div className="d-flex mb-3 mb-lg-0">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm100-760L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227Z" /></svg>
                <h2 className="mb-lg-0 mt-2 fw-bold">SKILLS</h2>
                <div className="d-lg-block d-none ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="d-none d-lg-block trapezoid-3"></div>

                <div className="ms-4  flex-wrap d-flex justify-content-between">
                  <div className="d-flex align-items-center w-p  mb-3  ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">HTML</span>
                  </div>
                  <div className="d-flex align-items-center w-p mb-3  ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">CSS , SCSS</span>
                  </div>
                  <div className="d-flex align-items-center w-p mb-3  ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">JS</span>
                  </div>
                  <div className="d-flex align-items-center w-p mb-3 ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">REACT</span>
                  </div>
                  <div className="d-flex align-items-center w-p  ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">Axios</span>
                  </div>
                  <div className="d-flex align-items-center w-p ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">Bootstrap 5</span>
                  </div>
                  <div className="d-flex align-items-center w-p  ">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">RWD</span>
                  </div>
                  <div className="d-flex  align-items-center w-p">
                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#460902"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                    <span className="fs-6 fw-bold">Github</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  )
};


export default IndexApp;

