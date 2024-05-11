import styled from "styled-components";

export const StyledWelcomePageMainWrapper = styled.main`
  /* background-image: url(../src/images/bcg-mob.jpg),
    url(../src/images/Vector-1.png), url(../src/images/Vector-2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
    padding-top: 80px;
    display: flex;
    column-gap: 80px;
  }
`;
// export const StyledBacgroundWrap = styled.div`
//   background-image: url(../src/images/bcg-mob.jpg),
//     url(../src/images/Vector-1.png), url(../src/images/Vector-2.png);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center bottom, /* Первое изображение */ center bottom,
//     /* Второе изображение */ center bottom; /* Третье изображение */
// `;
