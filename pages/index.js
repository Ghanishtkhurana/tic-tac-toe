import useWinner from "@/hooks/useWinner";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  let [ticArr, setTicArr] = useState(arr);
  const checkWinner = useWinner();

  const handleThePlace = (col) => {
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
      // alert(checker + " is the winner");
    } else if (!checker) {
      console.log("checker", checker);
    }
  };
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* container  */}

      <div className="flex flex-col gap-3">
        <div className="text-[#27f8d9] font-semibold text-[25px]">
          {flag ? "X" : "Y"} turn's
        </div>
        <div className="h-[300px] w-[300px] border-2 border-pink-500 text-white">
          {ticArr.map((row, i) => {
            return (
              <div key={i} className="flex">
                {row.map((col, j) => {
                  return (
                    <div
                      key={j}
                      onClick={() => handleThePlace(col)}
                      className="w-[100px] h-[100px] border-2 border-pink-500 flex justify-center items-center text-[#27f8d9] font-semibold text-[25px]"
                    >
                      {col === "X" || col === "O" ? col : ""}
                    </div>
                  );
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
