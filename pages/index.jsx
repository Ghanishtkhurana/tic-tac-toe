import useWinner from "@/hooks/useWinner";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { VscDebugRestart } from "react-icons/vsc";

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function elementIndexFinder({ value, arr }) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === value) {
        return [i, j];
      }
    }
  }
}

export default function Home() {
  let [flag, setFlag] = useState(true);
  const router = useRouter();
  let [gameOver, setGameOver] = useState(false);
  let [ticArr, setTicArr] = useState(arr);
  const checkWinner = useWinner();

  const handleThePlace = (col) => {
    if (gameOver) {
      toast("Restart the game", { icon: "🎉" });
      return;
    }
    let preArr = [...ticArr];
    let ans = elementIndexFinder({ value: col, arr: ticArr });
    if (preArr[ans[0]][ans[1]] === "X" || preArr[ans[0]][ans[1]] === "O")
      return;
    preArr[ans[0]][ans[1]] = flag ? "X" : "O";
    setTicArr(preArr);
    setFlag(!flag);
    let checker = checkWinner(preArr);
    if (checker) {
      toast(checker + " is winner", { icon: "🏆" });
      setGameOver(true);
      // alert(checker + " is the winner");
    } else if (!checker) {
      console.log("checker", checker);
    }
  };

  // useEffect(() => {
  //   if (gameOver) {
  //     toast("Restart the game", { icon: "🎉" });
  //   }
  // }, [gameOver]);
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* container  */}

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="text-[#27f8d9] font-semibold text-[25px]">
            {flag ? "X" : "O"} {"turn's"}
          </div>
          <div>
            <Button
              color={gameOver ? "danger" : "secondary"}
              onClick={() => router.reload()}
              isIconOnly
            >
              <VscDebugRestart />{" "}
            </Button>
          </div>
        </div>
        <div className="h-[300px] w-[300px] text-white">
          {ticArr.map((row, i) => {
            return (
              <div key={i} className="flex">
                {row.map((col, j) => {
                  return (
                    <Card
                      isPressable
                      radius="none"
                      key={j}
                      onClick={() => handleThePlace(col)}
                      className="w-[100px] h-[100px] border-2 border-pink-500 bg-black flex justify-center items-center text-[#27f8d9] font-semibold text-[25px]"
                    >
                      {col === "X" || col === "O" ? col : ""}
                    </Card>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
