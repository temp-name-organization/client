import Image from "next/image";
import { DrinkImage } from "public/images";
import styled, { css } from "styled-components";

interface Props {
  numberOfStempedDrinks: number;
}

function MyEnjoiedDrinkInfoSection({ numberOfStempedDrinks }: Props) {
  return (
    <Section>
      <div>
        <H2>
          우리술 도장을 <br />
          <MainColor>{numberOfStempedDrinks}</MainColor>개 모았어요.
        </H2>
      </div>
      <Image
        alt="전통주"
        src={DrinkImage}
        style={{ width: "53px", height: "53px", borderRadius: "100px" }}
      />
    </Section>
  );
}

const Section = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg_02};
    color: ${theme.colors.black_01};
    padding: 20px;
    display: flex;
    justify-content: space-between;
  `}
`;

const H2 = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.headline02}
  `}
`;

const H3 = styled.h3`
  ${({ theme }) => css`
    ${theme.typography.body_long03}
    color: ${theme.colors.black_02};
    margin-top: 8px;
  `}
`;

const MainColor = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.main_01};
  `}
`;

export default MyEnjoiedDrinkInfoSection;