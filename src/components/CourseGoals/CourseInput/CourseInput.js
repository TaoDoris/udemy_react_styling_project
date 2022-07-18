import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";

////這邊是用style-components的寫法來動態判斷是否要加入invalid class
// import styled from 'styled-components';
// const FormControled = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")}
//   }

//   & input {
//     display: block;
//     width: 100%;

//     //以下的props是透過下面自製的FormControl component的屬性而來的,我們可以透過function來取得invalid這個屬性，再去做判斷
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#fcdada" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  ////取得使用者輸入資料
  const [enteredValue, setEnteredValue] = useState("");

  //// 設定使用者是否有輸入的狀態，預設一開始為有輸入，所以寫true
  const [isValid, setIsValid] = useState(true);

  ////使用者輸入時會觸發以下function
  const goalInputChangeHandler = (event) => {
    // 使用者有輸入東西的話，isValid狀態就更新為true，這樣下面的樣式判斷就不會讓輸入框出現紅色邊框
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  ////使用者點擊送出按鈕時會觸發以下function
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // 如果輸入的長度扣除掉前後的空格還是為0的話(沒輸入東西)，就return空值，讓下面的props.onAddGoal無法被執行
    if (enteredValue.trim().length === 0) {
      // 因為使用者沒輸入東西，所以將驗證(isValid)設定為false，及代表不通過
      setIsValid(false);
      return;
    }
    //如果有資料的話，就把資料透過參數的方式傳到App.js裡
    props.onAddGoal(enteredValue);
    //送出後將input裡面清空
    setEnteredValue("");
  };

  return (
    ////這個例子是用styled-components來增加動態class的寫法
    // <form onSubmit={formSubmitHandler}>
    //   {/* className判斷是，如果使用者沒輸入東西，就會先跑到上面的if判斷，因此isValid的狀態就會被設為false。
    //     接著這邊再用三元運算子判斷是否要加入invalid class */}
    //   <FormControled invalid={!isValid}>
    //     <label>Course Goal</label>
    //     <input
    //       type="text"
    //       onChange={goalInputChangeHandler}
    //       value={enteredValue}
    //     />
    //   </FormControled>
    //   <Button type="submit">Add Goal</Button>
    // </form>


    ////這邊是用css module來寫動態css
    <form onSubmit={formSubmitHandler}>
      {/* className判斷是，如果使用者沒輸入東西，就會先跑到上面的if判斷，因此isValid的狀態就會被設為false。
        接著這邊再用三元運算子判斷是否要加入invalid class */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
