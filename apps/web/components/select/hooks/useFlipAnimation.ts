import React, { useRef, useState } from "react";

export type Drag = "up" | "down" | null;
function useFlipAnimation(onChangeNowShowing: (index: number) => void) {
  const [drag, setDrag] = useState<Drag>(null);
  const lastTouchEventTimeRef = useRef(0);

  const onActFlip = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeDiff = now - lastTouchEventTimeRef.current;
    if (timeDiff < 1000) {
      // 이전 이벤트가 1초 내에 발생한 경우 무시
      return;
    }
    lastTouchEventTimeRef.current = now;
    // 휠을 올리면 up, 내리면 down
    if (e.deltaY < 0) {
      setDrag("up");
      setTimeout(() => {
        onChangeNowShowing(-1);
      }, 750);
    }
    if (e.deltaY > 0) {
      setDrag("down");
      setTimeout(() => {
        onChangeNowShowing(1);
      }, 750);
    }

    setTimeout(() => {
      setDrag(null);
    }, 850);
  };

  const onTouchMoveActFlip = (e: React.TouchEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeDiff = now - lastTouchEventTimeRef.current;
    if (timeDiff < 1000) {
      // 이전 이벤트가 1초 내에 발생한 경우 무시
      return;
    }
    lastTouchEventTimeRef.current = now;
    //터치의 시작이 끝보다 위면 up, 아래면 down
    if (e.touches[0].clientY < e.changedTouches[0].clientY + 300) {
      console.log("up");
      setDrag("up");
      setTimeout(() => {
        onChangeNowShowing(1);
      }, 750);
    }
    if (e.touches[0].clientY > e.changedTouches[0].clientY - 300) {
      setDrag("down");
      setTimeout(() => {
        onChangeNowShowing(1);
      }, 750);
    }

    setTimeout(() => {
      setDrag(null);
    }, 850);
  };

  return { onActFlip, drag, onTouchMoveActFlip };
}

export default useFlipAnimation;
