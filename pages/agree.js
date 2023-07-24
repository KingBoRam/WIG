import WigHeader from "../components/Headline";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";

const RegisterTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 450px;
  height: 90vh;
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
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  &:before {
    position: absolute;
    content: "";
    width: 12px;
    height: 6px;
    border: 2px solid #ced4da;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    left: 7px;
    top: 8px;
  }
  ${({ $ischecked }) =>
    $ischecked
      ? css`
          background-color: #4dabf7;
          border-color: #4dabf7;
          &:before {
            position: absolute;
            content: "";
            width: 12px;
            height: 6px;
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            transform: rotate(-45deg);
            left: 7px;
            top: 8px;
          }
        `
      : css`
          opacity: 1;
        `}
`;
const StyledTextArea = styled.div`
  width: 100%;
  max-width: 375px;
  height: 88px;
  resize: none;
  overflow: auto;
  display: block;
  border: solid 1px #ced4da;
  border-radius: 5px;
  margin-left: 45px;
  padding: 13px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.43px;
  color: #767678;
  font-family: Dotum, Helvetica, sans-serif;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    height: 42px;
    background: #999;
    border-radius: 10px;
    border: 6px solid #fff;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0 6px 6px 0;
    background-color: transparent;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  max-width: 435px;
  padding: 14px;
  font-size: 1.3rem;
  font-weight: 1000;
  margin: 1rem;
  border-radius: 5px;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #9cadbc;
          color: #fff;
        `
      : css`
          background-color: #228be6;
          color: #fff;
        `}
`;
const Agree = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [localeCheck, setlocaleCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setlocaleCheck(true);
      setUseCheck(true);
    } else {
      setAllCheck(false);
      setlocaleCheck(false);
      setUseCheck(false);
    }
  };
  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };
  const localeBtnEvent = () => {
    if (localeCheck === false) {
      setlocaleCheck(true);
    } else {
      setlocaleCheck(false);
    }
  };
  useEffect(() => {
    if (localeCheck === true && useCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [localeCheck, useCheck]);

  return (
    <RegisterTemplate>
      <Link href="/" style={{ textDecoration: "none" }}>
        <WigHeader color="#1971c2"></WigHeader>
      </Link>
      <form>
        <CustomCheckboxWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomCheckbox
              type="checkbox"
              id="all-check"
              checked={allCheck}
              onChange={allBtnEvent}
            ></CustomCheckbox>
            <CustomLabel
              htmlFor="all-check"
              $ischecked={allCheck}
            ></CustomLabel>
            <label
              style={{
                marginLeft: "1.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
                width: "100%",
                maxWidth: "500px",
                display: "inline",
                fontSize: "1.2rem",
              }}
              htmlFor="all-check"
            >
              전체 동의하기
            </label>
          </div>
          <div
            style={{
              marginLeft: "45px",
              fontSize: "0.9rem",
              marginTop: "0.7rem",
              color: "#767678",
              fontFamily: "Dotum, Helvetica, sans-serif",
              lineHeight: "18px",
            }}
          >
            해당 웹 페이지를 사용하는데 필요한 WIG 이용약관(필수),
            위치기반서비스 이용약관(선택)에 모두 동의합니다.
          </div>
        </CustomCheckboxWrapper>
        <CustomCheckboxWrapper>
          <CustomCheckbox
            type="checkbox"
            id="use-check"
            checked={useCheck}
            onChange={useBtnEvent}
          ></CustomCheckbox>
          <CustomLabel htmlFor="use-check" $ischecked={useCheck}></CustomLabel>
          <label
            style={{
              marginLeft: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            htmlFor="use-check"
          >
            <span
              style={{
                color: "#228be6",
                fontSize: "0.8rem",
                marginRight: "5px",
              }}
            >
              [필수]
            </span>
            WIG 이용약관 동의
          </label>
        </CustomCheckboxWrapper>
        <StyledTextArea>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            여러분을 환영합니다.
          </div>
          한 번은 아주 먼 미래의 고도로 발달한 기술로 인간들이 우주를 탐사하고
          다른 행성에 거주하는 시대가 되었을 것입니다. 그러한 미래에서 우주선은
          매우 빠른 속도로 은하계를 가로지르고, 새로운 별들과 그들의 위성을
          발견하며, 알 수 없는 생명체와 교류하고 있습니다. 어느 날, 하나의 탐사
          임무 중 우주선 오리온은 눈을 떴습니다. 우주선은 영역을 떠나지 못하고
          우주의 틈새에서 시간을 보내는 동안, 지구에서는 인류의 흐름과 문화가
          완전히 변화했습니다. 사회는 평화롭고 지속가능한 삶을 위한 노력으로
          인류 모두에게 평등하고 번영하는 세상을 제공합니다. 하지만 오리온
          우주선의 선원들은 실망감과 불안감에 휩싸였습니다. 그들은 현실에서
          멀어져 버렸으며, 가족과 친구들과의 연결이 끊어져 있습니다. 이들은
          새로운 문화와 가치관, 언어, 기술에 적응하고자 노력하지만, 그들은
          지구에 대한 강렬한 그리움과 이질감을 느낍니다. 우주선 내에서는 다양한
          커뮤니케이션 시스템이 운영되고 있습니다. 선원들은 가상 현실을 통해
          가족들과 만날 수 있고, 센서 기술을 통해 감정을 전달하며, 항성 간
          통신망을 통해 지구의 문화와 지식을 공유할 수 있습니다. 그러나 이러한
          기술적인 솔루션은 오리온 선원들의 근본적인 갈증을 완전히 해결해 주지는
          못합니다. 오리온 우주선의 여정은 아직 끝나지 않았습니다. 그들은 우주의
          허물을 뚫고 알 수 없는 세계로 나아가고 있으며, 그 곳에서 새로운 발견과
          모험을 찾고 있습니다. 오리온 선원들은 자신들이 희생한 대가를 지금보다
          더 나은 미래의 인류를 위해 지불하고 있음을 깨달았습니다.
          <div>-CHAT GPT-</div>
        </StyledTextArea>
        <CustomCheckboxWrapper>
          <CustomCheckbox
            type="checkbox"
            id="locale-check"
            checked={localeCheck}
            onChange={localeBtnEvent}
          ></CustomCheckbox>
          <CustomLabel
            htmlFor="locale-check"
            $ischecked={localeCheck}
          ></CustomLabel>
          <label
            style={{
              marginLeft: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            htmlFor="locale-check"
          >
            <span
              style={{
                color: "#868e96",
                fontSize: "0.8rem",
                marginRight: "5px",
              }}
            >
              [선택]
            </span>
            위치기반서비스 이용약관 동의
          </label>
        </CustomCheckboxWrapper>
        <StyledTextArea>
          오리온 선원들은 알 수 없는 세계에서의 탐사를 계속하면서 새로운 문명과
          만남을 갖고, 그들의 테크놀로지와 문화를 공유하며 상호 교류를 합니다.
          그리고 이러한 경험을 통해 선원들은 자신들의 세계관을 확장하고, 인류의
          진보와 번영을 위한 힘찬 동기부여를 얻습니다. 오리온 우주선은 우주의
          험난한 여정에서 꾸준한 진보를 이루어 나가고 있습니다. 그들은 자원의
          부족한 행성들을 발견하고 개척하며, 생태계를 보호하고 지속가능한 발전을
          추구합니다. 선원들은 지구로부터 멀어져 있지만, 그들은 여전히 지구의
          아름다움과 다양성을 기억하며, 그리고 그들이 해야 할 임무의 중요성을
          잊지 않습니다. 이러한 오리온 우주선의 모험은 우리에게 끝없는 상상력과
          열정의 가능성을 상기시킵니다. 우리는 미래의 우주 여행과 탐사가 우리의
          현재를 어떻게 변화시킬지 상상할 수 있으며, 오리온 선원들의 이야기는
          우리에게 용기와 영감을 줍니다.
          <div>-CHAT GPT-</div>
        </StyledTextArea>
        <Link href="/register">
          <StyledButton disabled={!useCheck}>확인</StyledButton>
        </Link>
      </form>
    </RegisterTemplate>
  );
};
Agree.getInitialProps = () => {
  return { isSpecialPage: true };
};
export default Agree;
