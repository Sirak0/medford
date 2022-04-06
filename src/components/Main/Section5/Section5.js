import React from "react";
import { useEffect } from "react";
import "./Section5.scss";
import "./Section5.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
function Section5() {
  useEffect(() => {
    const questions = document.querySelectorAll(".angel");
    const answers = document.querySelectorAll(".answer");
    const closers = document.querySelectorAll(".angel-up");

    questions.forEach((elem, index) => {
      elem.addEventListener("click", () => {
        answers[index].style.display = "block";
        elem.style.display = "none";
        closers[index].style.display = "block";
      });
    });

    closers.forEach((elem, index) => {
      elem.addEventListener("click", () => {
        answers[index].style.display = "none";
        elem.style.display = "none";
        questions[index].style.display = "block";
      });
    });
  }, []);

  return (
    <div className="section5">
      <div className="section5-content1">
        <h1>Вопросы и ответы</h1>
      </div>
      <div className="section5-content2">
        <div className="question-div">
          <FontAwesomeIcon
            id="angel-up"
            className="angel-up"
            icon={faAngleUp}
          />

          <FontAwesomeIcon className="angel" icon={faAngleDown} />

          <div className="div1">
            <h3>Что нужно знать при работе с арендованным УЗИ-сканером?</h3>
            <div id="new1" className="answer">
              <p>
                При предоставлении залоговой стоимости — да. Однако, как
                показывает практика, нашим региональным клиентам в процессе
                переговоров гораздо больше интересна программа рассрочки на
                новые аппараты или обмен их существующего сканера на новый.
              </p>
            </div>
          </div>
        </div>
        <div className="question-div">
          <FontAwesomeIcon
            id="angel-up"
            className="angel-up"
            icon={faAngleUp}
          />
          <FontAwesomeIcon
            id="angel1-doun"
            // onClick={showDiv}
            className="angel"
            icon={faAngleDown}
          />
          <div className="div1">
            <h3>От чего зависит стоимость аренды?</h3>
            <div id="new1" className="answer">
              <p>
                При предоставлении залоговой стоимости — да. Однако, как
                показывает практика, нашим региональным клиентам в процессе
                переговоров гораздо больше интересна программа рассрочки на
                новые аппараты или обмен их существующего сканера на новый.
              </p>
            </div>
          </div>
        </div>
        <div className="question-div">
          <FontAwesomeIcon
            id="angel-up"
            className="angel-up"
            icon={faAngleUp}
          />

          <FontAwesomeIcon className="angel" icon={faAngleDown} />

          <div className="div1">
            <h3>
              Предоставляете ли вы УЗИ-аппараты в аренду за пределами Московской
              области?
            </h3>

            <div id="new1" className="answer">
              <p>
                При предоставлении залоговой стоимости — да. Однако, как
                показывает практика, нашим региональным клиентам в процессе
                переговоров гораздо больше интересна программа рассрочки на
                новые аппараты или обмен их существующего сканера на новый.
              </p>
            </div>
          </div>
        </div>
        <div className="question-div">
          <FontAwesomeIcon
            id="angel-up"
            className="angel-up"
            icon={faAngleUp}
          />

          <FontAwesomeIcon className="angel" icon={faAngleDown} />

          <div className="div1">
            <h3>
              Если я захочу купить аппарат, взятый мной в аренду, то учтутся ли
              арендные платежи в стоимости?
            </h3>

            <div id="new1" className="answer">
              <p>
                При предоставлении залоговой стоимости — да. Однако, как
                показывает практика, нашим региональным клиентам в процессе
                переговоров гораздо больше интересна программа рассрочки на
                новые аппараты или обмен их существующего сканера на новый.
              </p>
            </div>
          </div>
        </div>
        <div className="question-div">
          <FontAwesomeIcon
            id="angel-up"
            className="angel-up"
            icon={faAngleUp}
          />

          <FontAwesomeIcon className="angel" icon={faAngleDown} />

          <div className="div1">
            <h3>
              Что произойдет, если во время аренды сканер выйдет из строя?
            </h3>

            <div id="new1" className="answer">
              <p>
                При предоставлении залоговой стоимости — да. Однако, как
                показывает практика, нашим региональным клиентам в процессе
                переговоров гораздо больше интересна программа рассрочки на
                новые аппараты или обмен их существующего сканера на новый.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section5;
