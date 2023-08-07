import styled, { css } from "styled-components";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";

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
  margin-left: 6.5px;
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
    left: 4.5px;
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
            left: 4.5px;
            top: 5.5px;
          }
        `
      : css`
          opacity: 1;
        `}
`;

function WigInput() {
  //id창에 text있으면 X 버튼
  const [valueId, setValueId] = useState("");
  const [revealId, setRevealId] = useState(false);
  const onChangeId = (e) => {
    setValueId(e.target.value);
    setRevealId(true);
  };
  const onClickId = () => {
    setValueId("");
    setRevealId(false);
  };
  //pwd창에 text있으면 X 버튼
  const [valuePwd, setValuePwd] = useState("");
  const [revealPwd, setRevealPwd] = useState(false);
  const onChangePwd = (e) => {
    setValuePwd(e.target.value);
    setRevealPwd(true);
  };
  const onClickPwd = () => {
    setValuePwd("");
    setRevealPwd(false);
  };
  //로그인상태유지버튼이벤트 ㅡㅡ 햇갈리게도 적어놨네 김보람
  const [loginCheck, setLoginCheckCheck] = useState(false);
  const loginCheckBtnEvent = () => {
    if (loginCheck === false) {
      setLoginCheckCheck(true);
    } else {
      setLoginCheckCheck(false);
    }
  };

  //로그인상태관리
  const router = useRouter();
  const loginInformation = true;
  const [falseText, setfalseText] = useState(null);
  const onClick = () => {
    if (loginInformation) {
      sessionStorage.setItem("jwtToken", "your_jwt_token");
      router.push("/");
      window.location.reload();
    } else if (!loginInformation) {
      setfalseText("아이디 혹은 비밀번호가 틀렸습니다.");
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputTextBlock>
          <Input
            type="email"
            placeholder="아이디(이메일)"
            value={valueId}
            name="username"
            onChange={onChangeId}
          ></Input>
          <RemoveId $revealid={revealId} onClick={onClickId}>
            <MdClear></MdClear>
          </RemoveId>
        </InputTextBlock>
        <InputTextBlock>
          <Input
            type="password"
            placeholder="비밀번호"
            value={valuePwd}
            name="password"
            onChange={onChangePwd}
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
          <CircleButton type="submit" onClick={onClick}>
            로그인
          </CircleButton>
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
