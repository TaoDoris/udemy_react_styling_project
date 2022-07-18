import React from 'react';
import styles from './Button.module.css';
// import styled from 'styled-components';

////這個寫法是使用styled-components，可以預防css變成全域都可使用的css
// // styled.button會回傳一個button element，反斜線裡面的內容就是我們要設定的css樣式
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   // 如果視窗768px以上的話，button的寬度就照原本的大小
//   @media(min-width: 768px){
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `


const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
