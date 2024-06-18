const useWinner = () => {
  let bro = 8334;
  const runner = (arr) => {
    // for horizontal winners
    if (
      arr[0][0] === arr[0][1] &&
      arr[0][1] === arr[0][2] &&
      arr[0][0] === arr[0][2]
    ) {
      return arr[0][0];
    } else if (
      arr[1][0] === arr[1][1] &&
      arr[1][1] === arr[1][2] &&
      arr[1][0] === arr[1][2]
    ) {
      return arr[1][0];
    } else if (
      arr[2][0] === arr[2][1] &&
      arr[2][1] === arr[2][2] &&
      arr[2][0] === arr[2][2]
    ) {
      return arr[2][0];
    }
    // for vertical winners
    else if (
      arr[0][0] === arr[1][0] &&
      arr[1][0] === arr[2][0] &&
      arr[0][0] === arr[2][0]
    ) {
      return arr[0][0];
    } else if (
      arr[0][1] === arr[1][1] &&
      arr[1][1] === arr[2][1] &&
      arr[0][1] === arr[2][1]
    ) {
      return arr[0][1];
    } else if (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]) {
      return arr[0][2];
    }
    // for cross condition
    else if (
      arr[0][0] === arr[1][1] &&
      arr[1][1] === arr[2][2] &&
      arr[0][0] === arr[2][2]
    ) {
      return arr[0][0];
    } else if (
      arr[0][2] === arr[1][1] &&
      arr[1][1] === arr[2][0] &&
      arr[0][2] === arr[2][0]
    ) {
      return arr[0][2];
    }
    console.log(arr)
    //  else {
    //   return arr;
    // }
  };
  return runner;
};

export default useWinner;
