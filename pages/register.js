import { useState, useEffect } from "react";
import WigHeader from "../components/Headline";
import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineStar,
  AiOutlineCalendar,
  AiOutlineHeart,
} from "react-icons/ai";
import Link from "next/link";
import { LoginState } from "../recoil/loginstate";
import { useRecoilState } from "recoil";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputTextBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 445px;
  height: 35px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  margin: 0 auto;
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 18px;
  outline: none;
  text-decoration: none;
  margin-left: 10px;
`;
const StyledButton = styled.button`
  width: 467px;
  padding: 14px;
  font-size: 1.3rem;
  font-weight: 1000;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #228be6;
  color: #fff;
`;
const SelectBox = styled.select`
  border: none;
  font-size: 18px;
  color: #495057;
  outline: none;
`;
const Em = styled.em`
  width: 40px;
  font-size: 12px;
  background: rgba(3, 199, 90, 0.12);
  color: #03c75a;
  font-style: normal;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  padding: 4px 6px 3px 6px;
  line-height: 13px;
  letter-spacing: -0.5px;
`;
const Register = () => {
  //로그인정보수정
  const [value, setValue] = useRecoilState(LoginState);
  //생년월일 정규식
  const [inputText, setInputText] = useState("");
  const [privateText, setPrivateText] = useState("");
  const handleChange = (event) => {
    const input = event.target.value;
    const pattern = /(\d{4})(\d{2})(\d{2})/;
    if (pattern.test(input)) {
      const formatted = input.replace(pattern, "$1.$2.$3");
      setInputText(formatted);
    } else {
      setInputText(input);
    }
  };
  const handleBlur = (event) => {
    const input = event.target.value;
    const pattern = /(\d{4}).(\d{2}).(\d{2})/;
    if (input.length === 0) {
      setPrivateText("");
    } else if (!pattern.test(input)) {
      setPrivateText("생년월일은 8자리 숫자로 입력해주세요.");
    } else {
      setPrivateText("");
    }
  };
  //이메일 유효성 검사 (클라에서 형태검사 / 형태에 맞으면 서버로 전송해서 중복검사)
  //비밀번호 유효성 검사
  return (
    <>
      <Container>
        <Link href="/" style={{ textDecoration: "none" }}>
          <WigHeader color="#1971c2"></WigHeader>
        </Link>
        <div
          style={{
            width: "450px",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontSize: "1rem",
            color: "#868e96",
            marginRight: "16px",
          }}
        >
          계정정보
          <span
            style={{
              color: "#228be6",
              marginRight: "5px",
            }}
          >
            [필수]
          </span>
        </div>
        <form>
          <InputTextBlock
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottom: "none",
            }}
          >
            <AiOutlineUser style={{ color: "#495057" }} />
            <Input type="email" placeholder="아이디(이메일)" /* required */ />
          </InputTextBlock>
          <InputTextBlock>
            <AiOutlineLock style={{ color: "#495057" }} />
            <Input type="password" placeholder="비밀번호" /* required */ />
            <Em>안전</Em>
          </InputTextBlock>
          <InputTextBlock
            style={{
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              borderTop: "none",
            }}
          >
            <AiOutlineStar style={{ color: "#495057" }} />{" "}
            <Input type="text" placeholder="닉네임" /* required */ />
          </InputTextBlock>
          <div
            style={{
              width: "450px",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
              fontSize: "1rem",
              color: "#868e96",
              marginLeft: "16px",
            }}
          >
            개인정보
            <span
              style={{
                color: "#868e96",
                marginRight: "5px",
              }}
            >
              [선택]
            </span>
          </div>
          <InputTextBlock
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottom: "none",
            }}
          >
            <AiOutlineUser style={{ color: "#495057" }} />
            <Input type="text" placeholder="이름"></Input>
          </InputTextBlock>
          <div style={{ display: "flex", width: "467px", marginLeft: "16px" }}>
            <InputTextBlock
              style={{
                borderBottomLeftRadius: "15px",
                borderRight: "none",
              }}
            >
              <AiOutlineCalendar style={{ color: "#495057" }} />
              <Input
                type="text"
                placeholder="생년월일(8자리)"
                value={inputText}
                onChange={handleChange}
                onBlur={handleBlur}
              ></Input>
            </InputTextBlock>
            <InputTextBlock
              style={{
                borderBottomRightRadius: "15px",
              }}
            >
              <AiOutlineHeart style={{ color: "#495057" }} />
              <SelectBox>
                <option key="nochoice" value="nochoice">
                  선택안함
                </option>
                <option key="man" value="man">
                  남자
                </option>
                <option key="woman" value="woman">
                  여자
                </option>
              </SelectBox>
            </InputTextBlock>
          </div>
          <div
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "0.9rem",
              height: "21px",
              margin: "1rem",
            }}
          >
            {privateText}
          </div>
          <Link href="/congrats" style={{ textDecoration: "none" }}>
            <StyledButton
              onClick={() => {
                setValue(true);
              }}
            >
              인증요청
            </StyledButton>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Register;
