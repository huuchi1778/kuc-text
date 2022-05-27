import {css} from 'lit';
export const TextboxStyle = css`
  input {
    font-size: 14px;
    color: #333333;
    min-width: 193px;
    width: 193px;
    height:40px;
    line-height: 1.5;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    padding: 5px 10px;
    box-sizing:border-box;
  }

  input:focus {
    outline: none;
    border: 1px solid #3498db;
  }

  input:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
  }


`;
