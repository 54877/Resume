import xiang from "../src/image/xiang.jpg"


function IndexApp() {
  const data = [
    {
      Url: `https://54877.github.io/DramaGo/`,
      img: `照片`,
      title: `DramaGo-交友網站`,
    },
    {
      Url: `https://54877.github.io/js-week8/#recommendation`,
      img: `照片`,
      title: `購物前台-簡易功能`,
    },
    {
      Url: `https://54877.github.io/js-week5/`,
      img: `照片`,
      title: `套票與選單-簡易功能`,
    },
    {
      Url: `https://54877.github.io/react-week5/`,
      img: `照片`,
      title: `前後台功能-簡易功能`,
    },
    {
      Url: `https://54877.github.io/AAPD/market.html`,
      img: `照片`,
      title: `Craftion-線上學習網站`,
    },
    {
      Url: `https://54877.github.io/week6/`,
      img: `照片`,
      title: `Vivre-旅遊網站`,
    },
    {
      Url: `https://54877.github.io/week8/`,
      img: `照片`,
      title: `Learning-線上課程網站`,
    },
    {
      Url: `https://54877.github.io/week4/`,
      img: `照片`,
      title: `眼鏡官網`,
    },
    {
      Url: `https://54877.github.io/week5/`,
      img: `照片`,
      title: `後臺表單-簡易功能`,
    }
  ]

  return (
    <>
      <main className=" container">
        <section className="row ">

          <div className="col-4 bg-black pt-5 d-flex flex-column align-items-center">
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
            <h5 className="text-white fs-6 mb-4">新竹市 東區 錦華街 11號</h5>
            <div className="d-flex pt-4 pb-4 justify-content-center align-items-center border-4 border-top border-white w-100">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
              <h2 className="text-white mb-0 fw-bold">PORTFOLIO</h2>
            </div>
            {/* 籤筒&下拉選單 */}
            <div className=" d-flex flex-column">
                <ul className="pt-3 ul-type">
                  {data.map((e) => {
                    const { title, Url } = e;
                    return (
                      <li className="mb-3 li-type" key={Url}><a className="text-white" href={Url} target="_blank">{title}</a></li>
                    )
                  })}
                </ul>
              </div>
          </div>

          <div className="col-8 bg-white px-4  pt-5">
            {/* 自傳 */}
            <div className="mb-4">
              <div className="d-flex">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                <h2 className="mb-0 fw-bold">MY PROFILE</h2>
                <div className="ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="trapezoid"></div>
                <div className="ms-4">
                  <ul>
                    <li className="fs-6 mb-3">我曾在飲料店、大潤發和餐飲業等服務領域工作，負責收銀、外送、客服等職責，這些經歷讓我學會如何在壓力下高效工作，並強化了與顧客及同事的溝通協作能力。此外，我還擔任過機台維護工作，進一步鍛鍊了我的細節管理和跨部門協作能力。</li>
                    <li className="fs-6 mb-3">經過一段時間的自學，我成功轉型為前端工程師，掌握了HTML、CSS、JavaScript等技術，並開始應用這些技能於實際開發中。我對技術充滿熱情，並持續尋求創新的解決方案來解決問題。</li>
                    <li className="fs-6">我希望在前端開發領域持續成長，提升專業能力，並運用我的創意與技術為團隊創造更多價值。我相信，無論面對任何挑戰，我都能以積極的態度學習並迎接未來的機會。<br />
                      我是一位充滿熱情與創造力的前端工程師，對技術有著濃厚的興趣，並且具備強烈的學習慾望和解決問題的能力。雖然我的職業生涯起初並未直接與科技領域相關，但通過多元的工作經歷以及一次意外事件，我決定轉型並最終走上了前端開發的道路。</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 工作經歷 */}
            <div className="mb-4">
              <div className="d-flex">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="m786-146 28-28-74-74v-112h-40v128l86 86ZM400-720h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-560-80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-35-25-76-38t-84-13q-116 0-198 82t-82 198q0 31 6.5 61.5T467-120H160Z" /></svg>
                <h2 className="mb-0 fw-bold">WORK EXPERIENCE</h2>
                <div className="ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="trapezoid"></div>
                <div className="ms-4">
                  <h5>工作經驗概述</h5>
                  <ul>
                    <li className="fs-6">在過去的工作中，我累積了豐富的實務經驗，並在團隊合作、問題解決及提升工作效率方面展現出優秀的能力。</li>
                  </ul>

                  <h5>風險管理與自我照護</h5>
                  <ul>
                    <li className="fs-6">曾面對一次不幸的事故，此經歷使我深刻體會到風險管理與自我照護的重要性，並讓我在壓力下學會如何更有效應對挑戰。</li>
                  </ul>

                  <h5>職業轉換與成長</h5>
                  <ul>
                    <li className="fs-6">此經歷成為我轉行的契機，我希望能夠將過去所學的經驗應用到新的領域，並在新的職業生涯中持續成長與發展</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 學歷 */}
            <div className="mb-4">
              <div className="d-flex">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z" /></svg>
                <h2 className="mb-0 fw-bold">EDUCATION</h2>
                <div className="ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="trapezoid-1"></div>
                <div className="ms-4">
                  <h2 className="fs-4 fw-semibold mb-3">國立勤益科技大學</h2>
                  <div className="d-flex justify-content-between mb-3">
                    <span>大學 ｜畢業 ｜國內</span>
                    <span className="text-secondary">西元2016年/9月~西元2020年/9月</span>
                  </div>
                  <div className="d-flex mb-3">
                    <span className="me-5">主修名稱</span>
                    <span className="text-secondary">電機工程</span>
                  </div>
                  <div className="d-flex">
                    <span className="me-5">主修類別</span>
                    <span className="text-secondary">電機工程學類</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 學歷 */}
            <div className="mb-4">
              <div className="d-flex">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm100-760L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227Z" /></svg>
                <h2 className="mb-0 fw-bold">SKILLS</h2>
                <div className="ms-3 me-4 flex-grow-1 border-tr border-4 border-bottom border-dark">
                </div>
              </div>
              <div className="px-4">
                <div className="trapezoid-1"></div>

                <div className="ms-4 d-flex justify-content-between">
                  <div className="position-relative">
                    <svg className="img-icon  rounded-circle border border-3  border-dark" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#adb5bd"><path d="M480-64q-85.55 0-161.72-32.74-76.16-32.74-132.48-89.06-56.32-56.32-89.06-132.48Q64-394.45 64-480q0-85.68 32.72-161.78 32.71-76.1 88.99-132.42 56.28-56.32 132.39-89.06Q394.2-896 479.69-896q21.83 0 35.57 13.74Q529-868.53 529-847.49q0 21.03-13.74 35.26Q501.52-798 480-798q-132.67 0-225.34 92Q162-614 162-480.5t92.66 226Q347.33-162 480-162q134 0 226-92.66 92-92.67 92-225.34 0-21.52 14.23-35.26Q826.46-529 847.49-529q21.04 0 34.77 13.74Q896-501.52 896-479.69q0 85.49-32.74 161.59-32.74 76.11-89.06 132.39-56.32 56.28-132.42 88.99Q565.68-64 480-64Z" /></svg>
                    <span className="fs-3 fw-bold position-absolute translate-middle top-50 start-50">HTML</span>
                  </div>
                  <div className="position-relative">
                    <svg className="img-icon  rounded-circle border border-3  border-dark" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#adb5bd"><path d="M480-64q-85.55 0-161.72-32.74-76.16-32.74-132.48-89.06-56.32-56.32-89.06-132.48Q64-394.45 64-480q0-85.68 32.72-161.78 32.71-76.1 88.99-132.42 56.28-56.32 132.39-89.06Q394.2-896 479.69-896q21.83 0 35.57 13.74Q529-868.53 529-847.49q0 21.03-13.74 35.26Q501.52-798 480-798q-132.67 0-225.34 92Q162-614 162-480.5t92.66 226Q347.33-162 480-162q134 0 226-92.66 92-92.67 92-225.34 0-21.52 14.23-35.26Q826.46-529 847.49-529q21.04 0 34.77 13.74Q896-501.52 896-479.69q0 85.49-32.74 161.59-32.74 76.11-89.06 132.39-56.32 56.28-132.42 88.99Q565.68-64 480-64Z" /></svg>
                    <span className="fs-3 fw-bold position-absolute translate-middle top-50 start-50">CSS</span>
                  </div>
                  <div className="position-relative">
                    <svg className="img-icon  rounded-circle border border-3  border-dark" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#adb5bd"><path d="M480-64q-85.55 0-161.72-32.74-76.16-32.74-132.48-89.06-56.32-56.32-89.06-132.48Q64-394.45 64-480q0-85.68 32.72-161.78 32.71-76.1 88.99-132.42 56.28-56.32 132.39-89.06Q394.2-896 479.69-896q21.83 0 35.57 13.74Q529-868.53 529-847.49q0 21.03-13.74 35.26Q501.52-798 480-798q-132.67 0-225.34 92Q162-614 162-480.5t92.66 226Q347.33-162 480-162q134 0 226-92.66 92-92.67 92-225.34 0-21.52 14.23-35.26Q826.46-529 847.49-529q21.04 0 34.77 13.74Q896-501.52 896-479.69q0 85.49-32.74 161.59-32.74 76.11-89.06 132.39-56.32 56.28-132.42 88.99Q565.68-64 480-64Z" /></svg>
                    <span className="fs-3 fw-bold position-absolute translate-middle top-50 start-50">JS</span>
                  </div>
                  <div className="position-relative">
                    <svg className="img-icon  rounded-circle border border-3  border-dark" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#adb5bd"><path d="M480-64q-85.55 0-161.72-32.74-76.16-32.74-132.48-89.06-56.32-56.32-89.06-132.48Q64-394.45 64-480q0-85.68 32.72-161.78 32.71-76.1 88.99-132.42 56.28-56.32 132.39-89.06Q394.2-896 479.69-896q21.83 0 35.57 13.74Q529-868.53 529-847.49q0 21.03-13.74 35.26Q501.52-798 480-798q-132.67 0-225.34 92Q162-614 162-480.5t92.66 226Q347.33-162 480-162q134 0 226-92.66 92-92.67 92-225.34 0-21.52 14.23-35.26Q826.46-529 847.49-529q21.04 0 34.77 13.74Q896-501.52 896-479.69q0 85.49-32.74 161.59-32.74 76.11-89.06 132.39-56.32 56.28-132.42 88.99Q565.68-64 480-64Z" /></svg>
                    <span className="fs-3 fw-bold position-absolute translate-middle top-50 start-50">REACT</span>
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

