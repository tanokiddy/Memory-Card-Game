const shapes = ["circle", "square", "triangle"];

const colors = ["red", "green", "blue"];

export const createGridList = () => {
  let objectArray: any = [];

  while (objectArray.length < 8) {
    let newObject = {
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      matched: false,
    };

    if (
      !objectArray.some(
        (obj: any) =>
          obj.color === newObject.color &&
          obj.shape === newObject.shape &&
          obj.matched === newObject.matched
      )
    ) {
      objectArray.push(newObject);
    }
  }

  const gridArr = objectArray.concat(objectArray);
  const grid = gridArr.map((item: any, index: any) => ({
    ...item,
    id: index + 1,
  })); 
  grid.sort(() => Math.random() - 0.5)
  return grid
};
