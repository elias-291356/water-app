import { styled } from "styled-components";

export const StyledInputInput = styled.input`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  border-color: var(--secondary-light-sky);

  &::placeholder {
    color: var(--secondary-blue);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledALoginGoogle = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: tomato;
`;

export const StyledBannerSvgLogin = styled.svg`
  width: 280px;
  height: 210px;
  z-index: -1;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: -220px;
    top: 0px;
    width: 800px;
    height: 560px;
  }

  @media screen and (min-width: 1280px) {
    top: -121px;
    width: 872px;
    height: 661px;
  }
`;
export const StyledFormWrapperLogin = styled.div`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 384px;
  }
`;

export const StyledBannerSvgWrapper = styled.div`
  width: 280px;
  height: 210px;
  @media screen and (min-width: 768px) {
    position: relative;
    width: 680px;
    height: 550px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
// export const StyledFormWrapperSignIn = styled.div`
//   @media screen and (min-width: 768px) {
//     position: relative;
//     /* width: 680px;
//     height: 550px; */
//   }

//   @media screen and (min-width: 1280px) {
//   }
// `;

export const StyledWrapperSignIn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
