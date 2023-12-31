import styled, { css } from "styled-components";
import { MdClear } from "react-icons/md";
import { useState } from "react";

//디자인
const RemoveId = styled.span`
  display: flex;
  color: black;
  font-size: 17px;
  cursor: pointer;
  display: none;
  ${(props) =>
    props.$revealid &&
    css`
      display: initial;
    `}
`;
const RemovePwd = styled.span`
  display: flex;
  color: black;
  font-size: 17px;
  cursor: pointer;
  display: none;
  ${(props) =>
    props.$revealpwd &&
    css`
      display: initial;
    `}
`;
const InputTextBlock = styled.div`
  background: white;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #dee2e6;
  width: 85%;
  outline: none;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
`;
const Input = styled.input`
  background: white;
  width: 100%;
  border: none;
  font-size: 18px;
  outline: none;
  text-decoration: none;
`;
const Buttonblock = styled.div`
  display: flex;
  justify-content: center;
`;
const CircleButton = styled.button`
  background: #1971c2;
  color: white;
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  font-size: 30px;
  border: none;
  font-family: "KBO-Dia-Gothic_bold", serif;
  margin-top: 1.5rem;
  margin-bottom: 0.5em;
`;
const IconButtonGoogle = styled.a`
  width: 46px;
  height: 46px;
  border: 3px solid #000;
  border-radius: 50%;
  background-image: url("/구글.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
const IconButtonNaver = styled.a`
  width: 50px;
  height: 50px;
  background-image: url("/네이버.png");
  background-size: cover;
  cursor: pointer;
`;
const IconButtonKakao = styled.a`
  width: 50px;
  height: 50px;
  background-image: url("/카카오톡.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
const CustomCheckboxWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const CustomCheckbox = styled.input`
  visibility: hidden;
`;
const CustomLabel = styled.label`
  background-color: #fff;
  margin-top: -0.5rem;
  margin-left: 6px;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 18px;
  height: 18px;
  position: absolute;
  &:before {
    position: absolute;
    content: "";
    width: 7px;
    height: 3px;
    border: 2px solid #ced4da;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    left: 5px;
    top: 5.5px;
  }
  ${({ $ischecked }) =>
    $ischecked
      ? css`
          background-color: #4dabf7;
          border-color: #4dabf7;
          &:before {
            position: absolute;
            content: "";
            width: 7px;
            height: 3px;
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            transform: rotate(-45deg);
            left: 5px;
            top: 5.5px;
          }
        `
      : css`
          opacity: 1;
        `}
`;

function WigInput() {
  //로그인상태유지버튼이벤트 ㅡㅡ 햇갈리게도 적어놨네 김보람
  const [loginCheck, setLoginCheckCheck] = useState(false);
  const loginCheckBtnEvent = () => {
    if (loginCheck === false) {
      setLoginCheckCheck(true);
    } else {
      setLoginCheckCheck(false);
    }
  };
  //로그인 form 제줄
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [falseText, setfalseText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data.message);
        if (data.message === "success") {
          if (loginCheck === true) {
            localStorage.setItem("jwtToken", "your_jwt_token");
            window.location.reload();
          } else {
            sessionStorage.setItem("jwtToken", "your_jwt_token");
            window.location.reload();
          }
        } else {
          setfalseText("아이디 혹은 비밀번호가 틀렸습니다.");
        }
      } else {
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //id창에 text있으면 X 버튼
  const [revealId, setRevealId] = useState(false);
  const onChangeId = () => {
    setRevealId(true);
  };
  const onClickId = () => {
    setRevealId(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: "",
    }));
  };
  //pwd창에 text있으면 X 버튼
  const [revealPwd, setRevealPwd] = useState(false);
  const onChangePwd = () => {
    setRevealPwd(true);
  };
  const onClickPwd = () => {
    setRevealPwd(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: "",
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputTextBlock>
          <Input
            type="text"
            placeholder="아이디(이메일)"
            value={formData.username}
            name="username"
            onChange={(e) => {
              handleChange(e);
              onChangeId();
            }}
          ></Input>
          <RemoveId $revealid={revealId} onClick={onClickId}>
            <MdClear></MdClear>
          </RemoveId>
        </InputTextBlock>
        <InputTextBlock>
          <Input
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            name="password"
            onChange={(e) => {
              handleChange(e);
              onChangePwd();
            }}
          ></Input>
          <RemovePwd $revealpwd={revealPwd} onClick={onClickPwd}>
            <MdClear></MdClear>
          </RemovePwd>
        </InputTextBlock>
        <CustomCheckboxWrapper>
          <div>
            <CustomCheckbox
              type="checkbox"
              id="all-check"
              checked={loginCheck}
              onChange={loginCheckBtnEvent}
            ></CustomCheckbox>
            <CustomLabel
              htmlFor="all-check"
              $ischecked={loginCheck}
            ></CustomLabel>
            <label
              style={{
                marginLeft: "2rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                color: "gray",
                marginTop: "-0.5rem",
                position: "relative",
                top: "-0.6rem",
              }}
              htmlFor="all-check"
            >
              로그인 상태 유지
            </label>
          </div>
        </CustomCheckboxWrapper>
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            height: "21px",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {falseText}
        </div>
        <Buttonblock>
          <CircleButton type="submit">로그인</CircleButton>
        </Buttonblock>
        <Buttonblock>
          <IconButtonGoogle />
          <IconButtonKakao />
          <IconButtonNaver />
        </Buttonblock>
      </form>
    </>
  );
}

export default WigInput;
