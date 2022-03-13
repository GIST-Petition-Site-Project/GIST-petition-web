import styled from '@emotion/styled'

const EditorSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .contents {
    > div {
      display: flex;

      justify-content: space-between;

      > span {
        color: #8a8a8a;
        font-weight: 300;
      }
    }
    .chakra-input {
      border-radius: 0;
    }

    .chakra-textarea {
      height: 50vh;
      margin-bottom: 20px;
      border-radius: 0;
      border-color: #ccc;
      resize: none;
    }
  }

  .category_form {
    .chakra-select {
      border: 1px solid #ccc;
      border-radius: 0;
    }
  }

  .chakra-button__group {
    display: flex;
    justify-content: space-around;

    .cancle_btn {
      color: white;
      background-color: #5a5e5d;
      border-radius: 2px;
      height: 36px;
      font-weight: bold;
      width: 33.3333333%;
    }
    .submit_btn {
      color: white;
      background-color: #d52425;
      border-radius: 2px;
      height: 36px;
      font-weight: bold;
      width: 33.3333333%;
    }
  }
`

export { EditorSection }
