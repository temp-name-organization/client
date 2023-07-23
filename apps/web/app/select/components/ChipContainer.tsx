import NumberOfSolver from "components/common/NumberOfSolver";
import TargetMessage from "components/common/TargetMessage";
import { useGetUserInfo } from "hooks/useGetUserInfo";
import { deleteVoteAPI } from "lib/apis/vote";
import Image from "next/image";
import { HambergerIcon, SaveIcon } from "public/icons";
import React from "react";
import styled from "styled-components";
import { Writer } from "types/vote";
import ModifyDeleteButtonBox from "./ModifyDeleteButtonBox";

interface Props {
  onToggleModifyModal(): void;
  onToggleModifyDeleteButtonBox(): void;
  isModifyDeleteButtonBox: boolean;
  targetEl: React.RefObject<HTMLImageElement>;
  title: string;
  date: string;
  countVoted: number;
  writer: Writer;
  voteId: number;
}

function ChipContainer({
  onToggleModifyModal,
  onToggleModifyDeleteButtonBox,
  title,
  isModifyDeleteButtonBox,
  targetEl,
  date,
  countVoted,
  writer,
  voteId,
}: Props) {
  const { userInfo } = useGetUserInfo();

  const amIWriter = userInfo?.userId === writer?.userid;

  const onDeleteVote = async () => {
    await deleteVoteAPI(voteId);
  };

  return (
    <>
      <TagRow>
        <FlexRow>
          <NumberOfSolver>🔥{countVoted}명 해결중!</NumberOfSolver>
          <TargetMessage>당신을 기다렸어요</TargetMessage>
        </FlexRow>
        <FlexRow>
          <Image src={SaveIcon} alt="저장하기" width={32} height={32} />
          {amIWriter && (
            <Image
              ref={targetEl}
              src={HambergerIcon}
              alt="매뉴"
              width={32}
              height={32}
              onClick={onToggleModifyDeleteButtonBox}
            />
          )}
        </FlexRow>
      </TagRow>
      <TitleRow>
        {title}
        <DateText>{date.slice(0, 10)}</DateText>
      </TitleRow>
      {isModifyDeleteButtonBox && (
        <ModifyDeleteButtonBox
          top="70px"
          right="41px"
          onDelete={onDeleteVote}
          onModify={onToggleModifyModal}
        />
      )}
    </>
  );
}

const TagRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 11px 0;
  ${({ theme }) => theme.textStyle.Title_Small}
  font-weight: 700;
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.palette.ink.base};
  font-weight: 400;
  font-family: NeoDunggeunmo, Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue";
`;

const FlexRow = styled.div`
  display: flex;
  gap: 4px;
`;

export default ChipContainer;