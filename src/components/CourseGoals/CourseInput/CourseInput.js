import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  // 設定使用者是否有輸入的狀態，預設一開始為有輸入，所以寫true
  const [isValid , setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // 如果輸入的長度扣除掉前後的空格還是為0的話(沒輸入東西)，就return空值，讓下面的props.onAddGoal無法被執行
    if(enteredValue.trim().length === 0){
      // 因為使用者沒輸入東西，所以將驗證(isValid)設定為false，及代表不通過
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);

    //送出後將input裡面清空
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* style設定是，如果使用者沒輸入東西，就會先跑到上面的if判斷，因此isValid的狀態就會被設為false。
        接著這邊再用三元運算子判斷是否要將文字顏色作改變 */}
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? "red" : "#ccc", background: !isValid ? "salmon" : "transparent"}}
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
