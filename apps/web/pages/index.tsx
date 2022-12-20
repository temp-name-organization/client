import { Button } from "@common/ui";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <PageLayout>
      <Link href="/login">로그인 하러가기</Link>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
