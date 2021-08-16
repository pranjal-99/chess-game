import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // console.log = function () {};
  const [squares, setSquares] = useState([
    [
      "rookwhite",
      "knightwhite",
      "bishopwhite",
      "queenwhite",
      "kingwhite",
      "bishopwhite",
      "knightwhite",
      "rookwhite",
    ],
    [
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
      "pawnwhite",
    ],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    [
      "pawnblack",
      "pawnblack",
      "pawnblack",
      "pawnblack",
      "pawnblack",
      "pawnblack",
      "pawnblack",
      "pawnblack",
    ],
    [
      "rookblack",
      "knightblack",
      "bishopblack",
      "queenblack",
      "kingblack",
      "bishopblack",
      "knightblack",
      "rookblack",
    ],
  ]);

  const radialInward =
    "radial-gradient(circle,black 20%,transparent 20%, transparent 100%)";
  const radialOutward = " radial-gradient(circle,transparent 64%, black 100%)";

  const [movementAllow, setMovementAllow] = useState([]);
  const [kill, setKill] = useState([]);
  const [selected, setSelected] = useState("");
  const [chance, setChance] = useState("black");
  const [lastMoved, setLastMoved] = useState(["", ""]);
  const [checkBlack, setCheckBlack] = useState(false);
  const [checkWhite, setCheckWhite] = useState(false);
  const [piecesCheckingWhite, setPiecesCheckingWhite] = useState([]);
  const [piecesCheckingBlack, setPiecesCheckingBlack] = useState([]);
  const [kingBlack, setkingBlack] = useState({ x: 4, y: 7 });
  const [kingWhite, setkingWhite] = useState({ x: 4, y: 0 });
  const [firstDrop, setFirstDrop] = useState(false);

  console.log({
    piecesCheckingWhite,
    piecesCheckingBlack,
    checkBlack,
    checkWhite,
    kingBlack,
    kingWhite,
  });

  const isKingSafe = (a, b, arr, opponent) => {
    setPiecesCheckingWhite([]);
    setPiecesCheckingBlack([]);
    setCheckBlack(false);
    setCheckWhite(false);
    let x = a;
    let y = b;
    let x1 = a;
    let y1 = b;
    let x2 = a;
    let y2 = b;
    let x3 = a;
    let y3 = b;
    let x4 = a;
    let y4 = b;
    let x5 = a;
    let y5 = b;
    let x6 = a;
    let y6 = b;
    let x7 = a;
    let y7 = b;
    function isLegitPoint(a1, b1) {
      if (a1 >= 0 && a1 <= 7 && b1 >= 0 && b1 <= 7) return true;
      else return false;
    }
    if (isLegitPoint(x - 2, y - 1)) {
      if (squares[y - 1][x - 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x - 2, y - 1]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x - 2, y - 1]];
          });
        }
      }
    }
    if (isLegitPoint(x - 2, y + 1)) {
      if (squares[y + 1][x - 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x - 2, y + 1]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x - 2, y + 1]];
          });
        }
      }
    }
    if (isLegitPoint(x + 2, y - 1)) {
      if (squares[y - 1][x + 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x + 2, y - 1]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x + 2, y - 1]];
          });
        }
      }
    }
    if (isLegitPoint(x + 2, y + 1)) {
      if (squares[y + 1][x + 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x + 2, y + 1]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x + 2, y + 1]];
          });
        }
      }
    }
    if (isLegitPoint(x - 1, y - 2)) {
      if (squares[y - 2][x - 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x - 1, y - 2]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x - 1, y - 2]];
          });
        }
      }
    }
    if (isLegitPoint(x + 1, y - 2)) {
      if (squares[y - 2][x + 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x + 1, y - 2]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x + 1, y - 2]];
          });
        }
      }
    }
    if (isLegitPoint(x - 1, y + 2)) {
      if (squares[y + 2][x - 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x - 1, y + 2]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x - 1, y + 2]];
          });
        }
      }
    }
    if (isLegitPoint(x + 1, y + 2)) {
      if (squares[y + 2][x + 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          setCheckBlack(true);
          setPiecesCheckingBlack((prev) => {
            return [...prev, [x + 1, y + 2]];
          });
        } else {
          setCheckWhite(true);
          setPiecesCheckingWhite((prev) => {
            return [...prev, [x + 1, y + 2]];
          });
        }
      }
    }
    while (isLegitPoint(x + 1, y + 1)) {
      if (arr[y + 1][x + 1].includes(opponent)) {
        if (
          arr[y + 1][x + 1].includes("queen") ||
          arr[y + 1][x + 1].includes("bishop") ||
          (opponent === "black" &&
            b === y &&
            a === x &&
            arr[b + 1][a + 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x + 1, y + 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x + 1, y + 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y + 1][x + 1] !== "") {
        break;
      } else {
        x = x + 1;
        y = y + 1;
      }
    }
    while (isLegitPoint(x1 - 1, y1 - 1)) {
      if (arr[y1 - 1][x1 - 1].includes(opponent)) {
        if (
          arr[y1 - 1][x1 - 1].includes("queen") ||
          arr[y1 - 1][x1 - 1].includes("bishop") ||
          (opponent === "white" &&
            b === y1 &&
            a === x1 &&
            arr[b - 1][a - 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x1 - 1, y1 - 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x1 - 1, y1 - 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y1 - 1][x1 - 1] !== "") {
        break;
      } else {
        x1 = x1 - 1;
        y1 = y1 - 1;
      }
    }
    while (isLegitPoint(x2 - 1, y2 + 1)) {
      if (arr[y2 + 1][x2 - 1].includes(opponent)) {
        if (
          arr[y2 + 1][x2 - 1].includes("queen") ||
          arr[y2 + 1][x2 - 1].includes("bishop") ||
          (opponent === "black" &&
            b === y2 &&
            a === x2 &&
            arr[b + 1][a - 1].includes("pawn"))
        ) {
          console.log(x2 - 1, y2 + 1);
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x2 - 1, y2 + 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x2 - 1, y2 + 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y2 + 1][x2 - 1] !== "") {
        break;
      } else {
        x2 = x2 - 1;
        y2 = y2 + 1;
      }
    }
    while (isLegitPoint(x3 + 1, y3 - 1)) {
      if (arr[y3 - 1][x3 + 1].includes(opponent)) {
        if (
          arr[y3 - 1][x3 + 1].includes("queen") ||
          arr[y3 - 1][x3 + 1].includes("bishop") ||
          (opponent === "white" &&
            b === y3 &&
            a === x3 &&
            arr[b - 1][a + 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x3 + 1, y3 - 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x3 + 1, y3 - 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y3 - 1][x3 + 1] !== "") {
        break;
      } else {
        x3 = x3 + 1;
        y3 = y3 - 1;
      }
    }
    while (isLegitPoint(x4 + 1, y4)) {
      if (arr[y4][x4 + 1].includes(opponent)) {
        if (
          arr[y4][x4 + 1].includes("queen") ||
          arr[y4][x4 + 1].includes("rook")
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x4 + 1, y4]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x4 + 1, y4]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y4][x4 + 1] !== "") {
        break;
      } else {
        x4 = x4 + 1;
      }
    }
    while (isLegitPoint(x5 - 1, y5)) {
      if (arr[y5][x5 - 1].includes(opponent)) {
        if (
          arr[y5][x5 - 1].includes("queen") ||
          arr[y5][x5 - 1].includes("rook")
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x5 - 1, y5]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x5 - 1, y5]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y5][x5 - 1] !== "") {
        break;
      } else {
        x5 = x5 - 1;
      }
    }
    while (isLegitPoint(x6, y6 + 1)) {
      if (arr[y6 + 1][x6].includes(opponent)) {
        if (
          arr[y6 + 1][x6].includes("queen") ||
          arr[y6 + 1][x6].includes("rook")
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x6, y6 + 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x6, y6 + 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y6 + 1][x6] !== "") {
        break;
      } else {
        y6 = y6 + 1;
      }
    }
    while (isLegitPoint(x7, y7 - 1)) {
      if (arr[y7 - 1][x7].includes(opponent)) {
        if (
          arr[y7 - 1][x7].includes("queen") ||
          arr[y7 - 1][x7].includes("rook")
        ) {
          if (opponent === "white") {
            setCheckBlack(true);
            setPiecesCheckingBlack((prev) => {
              return [...prev, [x7, y7 - 1]];
            });
            break;
          } else {
            setCheckWhite(true);
            setPiecesCheckingWhite((prev) => {
              return [...prev, [x7, y7 - 1]];
            });
            break;
          }
        } else {
          break;
        }
      } else if (arr[y7 - 1][x7] !== "") {
        break;
      } else {
        y7 = y7 - 1;
      }
    }
  };

  const isKingMovementSafe = async (a, b, arr, opponent) => {
    let x = a;
    let y = b;
    let x1 = a;
    let y1 = b;
    let x2 = a;
    let y2 = b;
    let x3 = a;
    let y3 = b;
    let x4 = a;
    let y4 = b;
    let x5 = a;
    let y5 = b;
    let x6 = a;
    let y6 = b;
    let x7 = a;
    let y7 = b;
    function isLegitPoint(a1, b1) {
      if (a1 >= 0 && a1 <= 7 && b1 >= 0 && b1 <= 7) return true;
      else return false;
    }
    console.log(a, b);
    for (let i of [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      if (
        isLegitPoint(a + i[0], b + i[1]) &&
        arr[b + i[1]][a + i[0]].includes("king")
      ) {
        return false;
      }
    }

    if (isLegitPoint(x - 2, y - 1)) {
      if (squares[y - 1][x - 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x - 2, y + 1)) {
      if (squares[y + 1][x - 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
          // break;
        } else {
          return false;
          // break;
        }
      }
    }
    if (isLegitPoint(x + 2, y - 1)) {
      if (squares[y - 1][x + 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x + 2, y + 1)) {
      if (squares[y + 1][x + 2].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x - 1, y - 2)) {
      if (squares[y - 2][x - 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x + 1, y - 2)) {
      if (squares[y - 2][x + 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x - 1, y + 2)) {
      if (squares[y + 2][x - 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    if (isLegitPoint(x + 1, y + 2)) {
      if (squares[y + 2][x + 1].includes(`knight${opponent}`)) {
        if (opponent === "white") {
          return false;
        } else {
          return false;
        }
      }
    }
    while (isLegitPoint(x + 1, y + 1)) {
      if (arr[y + 1][x + 1].includes(opponent)) {
        if (
          arr[y + 1][x + 1].includes("queen") ||
          arr[y + 1][x + 1].includes("bishop") ||
          (opponent === "black" &&
            b === y &&
            a === x &&
            arr[b + 1][a + 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y + 1][x + 1] !== "") {
        break;
      } else {
        x = x + 1;
        y = y + 1;
      }
    }
    while (isLegitPoint(x1 - 1, y1 - 1)) {
      if (arr[y1 - 1][x1 - 1].includes(opponent)) {
        if (
          arr[y1 - 1][x1 - 1].includes("queen") ||
          arr[y1 - 1][x1 - 1].includes("bishop") ||
          (opponent === "white" &&
            b === y1 &&
            a === x1 &&
            arr[b - 1][a - 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y1 - 1][x1 - 1] !== "") {
        break;
      } else {
        x1 = x1 - 1;
        y1 = y1 - 1;
      }
    }
    while (isLegitPoint(x2 - 1, y2 + 1)) {
      if (arr[y2 + 1][x2 - 1].includes(opponent)) {
        if (
          arr[y2 + 1][x2 - 1].includes("queen") ||
          arr[y2 + 1][x2 - 1].includes("bishop") ||
          (opponent === "black" &&
            b === y2 &&
            a === x2 &&
            arr[b + 1][a - 1].includes("pawn"))
        ) {
          console.log("inindidnn");
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y2 + 1][x2 - 1] !== "") {
        break;
      } else {
        x2 = x2 - 1;
        y2 = y2 + 1;
      }
    }
    while (isLegitPoint(x3 + 1, y3 - 1)) {
      if (arr[y3 - 1][x3 + 1].includes(opponent)) {
        if (
          arr[y3 - 1][x3 + 1].includes("queen") ||
          arr[y3 - 1][x3 + 1].includes("bishop") ||
          (opponent === "white" &&
            b === y3 &&
            a === x3 &&
            arr[b - 1][a + 1].includes("pawn"))
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y3 - 1][x3 + 1] !== "") {
        break;
      } else {
        x3 = x3 + 1;
        y3 = y3 - 1;
      }
    }
    while (isLegitPoint(x4 + 1, y4)) {
      if (arr[y4][x4 + 1].includes(opponent)) {
        if (
          arr[y4][x4 + 1].includes("queen") ||
          arr[y4][x4 + 1].includes("rook")
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y4][x4 + 1] !== "") {
        break;
      } else {
        x4 = x4 + 1;
      }
    }
    while (isLegitPoint(x5 - 1, y5)) {
      if (arr[y5][x5 - 1].includes(opponent)) {
        if (
          arr[y5][x5 - 1].includes("queen") ||
          arr[y5][x5 - 1].includes("rook")
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y5][x5 - 1] !== "") {
        break;
      } else {
        x5 = x5 - 1;
      }
    }
    while (isLegitPoint(x6, y6 + 1)) {
      if (arr[y6 + 1][x6].includes(opponent)) {
        if (
          arr[y6 + 1][x6].includes("queen") ||
          arr[y6 + 1][x6].includes("rook")
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y6 + 1][x6] !== "") {
        break;
      } else {
        y6 = y6 + 1;
      }
    }
    while (isLegitPoint(x7, y7 - 1)) {
      if (arr[y7 - 1][x7].includes(opponent)) {
        if (
          arr[y7 - 1][x7].includes("queen") ||
          arr[y7 - 1][x7].includes("rook")
        ) {
          if (opponent === "white") {
            return false;
            // break;
          } else {
            return false;
            // break;
          }
        } else {
          break;
        }
      } else if (arr[y7 - 1][x7] !== "") {
        break;
      } else {
        y7 = y7 - 1;
      }
    }
  };

  const showPossibleMovement = async (coord, piece) => {
    if (piece.includes(chance)) {
      setMovementAllow([]);
      setKill([]);
      if (selected === coord) {
        setSelected("");
      } else {
        setFirstDrop(true);
        setSelected(coord);
        //pawn
        if (piece === "pawnwhite" || piece === "pawnblack") {
          if (piece === "pawnwhite") {
            if (coord.includes("a")) {
              const y = Number(coord.substring(1));
              if (squares[y + 1][1].includes("black")) {
                setMovementAllow((prev) => {
                  return [...prev, `b${y + 1}`];
                });
                setKill((prev) => {
                  return [...prev, `b${y + 1}`];
                });
              }
              if (y === 1) {
                if (squares[y + 1][0] === "" && squares[y + 2][0] === "")
                  setMovementAllow((prev) => {
                    return [...prev, `a${y + 1}`, `a${y + 2}`];
                  });
              } else if (squares[y + 1][0] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `a${y + 1}`];
                });
              }
            } else if (coord.includes("h")) {
              const y = Number(coord.substring(1));
              if (squares[y + 1][6].includes("black")) {
                setMovementAllow((prev) => {
                  return [...prev, `g${y + 1}`];
                });
                setKill((prev) => {
                  return [...prev, `g${y + 1}`];
                });
              }
              if (y === 1) {
                if (squares[y + 1][7] === "" && squares[y + 2][7] === "")
                  setMovementAllow((prev) => {
                    return [...prev, `h${y + 1}`, `h${y + 2}`];
                  });
              } else if (squares[y + 1][7] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `h${y + 1}`];
                });
              }
            } else {
              const x = Number(coord.charCodeAt(0) - 97);
              const y = Number(coord.substring(1));
              if (squares[y + 1][x - 1].includes("black")) {
                setMovementAllow((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x - 1)}${y + 1}`,
                  ];
                });
                setKill((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x - 1)}${y + 1}`,
                  ];
                });
              }
              if (squares[y + 1][x + 1].includes("black")) {
                setMovementAllow((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x + 1)}${y + 1}`,
                  ];
                });
                setKill((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x + 1)}${y + 1}`,
                  ];
                });
              }
              if (y === 1) {
                if (squares[y + 1][x] === "" && squares[y + 2][x] === "")
                  setMovementAllow((prev) => {
                    return [
                      ...prev,
                      `${String.fromCharCode(97 + x)}${y + 1}`,
                      `${String.fromCharCode(97 + x)}${y + 2}`,
                    ];
                  });
              } else if (squares[y + 1][x] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `${String.fromCharCode(97 + x)}${y + 1}`];
                });
              }
            }
          } else {
            if (coord.includes("a")) {
              const y = Number(coord.substring(1));
              if (squares[y - 1][1].includes("white")) {
                setMovementAllow((prev) => {
                  return [...prev, `b${y - 1}`];
                });
                setKill((prev) => {
                  return [...prev, `b${y - 1}`];
                });
              }
              if (
                squares[y - 1][0] === "" &&
                squares[y - 2][0] === "" &&
                y === 6
              ) {
                setMovementAllow((prev) => {
                  return [...prev, `a${y - 1}`, `a${y - 2}`];
                });
              } else if (squares[y - 1][0] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `a${y - 1}`];
                });
              }
            } else if (coord.includes("h")) {
              const y = Number(coord.substring(1));
              if (squares[y - 1][6].includes("white")) {
                setMovementAllow((prev) => {
                  return [...prev, `g${y - 1}`];
                });
                setKill((prev) => {
                  return [...prev, `g${y - 1}`];
                });
              }
              if (
                squares[y - 1][7] === "" &&
                squares[y - 2][7] === "" &&
                y === 6
              ) {
                setMovementAllow((prev) => {
                  return [...prev, `h${y - 1}`, `h${y - 2}`];
                });
              } else if (squares[y - 1][7] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `h${y - 1}`];
                });
              }
            } else {
              const x = Number(coord.charCodeAt(0) - 97);
              const y = Number(coord.substring(1));
              if (squares[y - 1][x - 1].includes("white")) {
                setMovementAllow((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x - 1)}${y - 1}`,
                  ];
                });
                setKill((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x - 1)}${y - 1}`,
                  ];
                });
              }
              if (squares[y - 1][x + 1].includes("white")) {
                setMovementAllow((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x + 1)}${y - 1}`,
                  ];
                });
                setKill((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x + 1)}${y - 1}`,
                  ];
                });
              }
              if (
                squares[y - 1][x] === "" &&
                squares[y - 2][x] === "" &&
                y === 6
              ) {
                setMovementAllow((prev) => {
                  return [
                    ...prev,
                    `${String.fromCharCode(97 + x)}${y - 1}`,
                    `${String.fromCharCode(97 + x)}${y - 2}`,
                  ];
                });
              } else if (squares[y - 1][x] === "") {
                setMovementAllow((prev) => {
                  return [...prev, `${String.fromCharCode(97 + x)}${y - 1}`];
                });
              }
            }
          }
        }
        //knight
        else if (piece === "knightwhite" || piece === "knightblack") {
          const x = Number(coord.charCodeAt(0) - 97);
          const y = Number(coord.substring(1));
          function isLegitPoint(a, b) {
            if (a >= 0 && a <= 7 && b >= 0 && b <= 7) return true;
            else return false;
          }
          if (isLegitPoint(x - 2, y - 1)) {
            if (
              squares[y - 1][x - 2].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y - 1}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y - 1}`];
              });
            } else if (squares[y - 1][x - 2] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y - 1}`];
              });
            }
          }
          if (isLegitPoint(x - 2, y + 1)) {
            if (
              squares[y + 1][x - 2].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y + 1}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y + 1}`];
              });
            } else if (squares[y + 1][x - 2] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 2)}${y + 1}`];
              });
            }
          }
          if (isLegitPoint(x + 2, y - 1)) {
            if (
              squares[y - 1][x + 2].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y - 1}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y - 1}`];
              });
            } else if (squares[y - 1][x + 2] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y - 1}`];
              });
            }
          }
          if (isLegitPoint(x + 2, y + 1)) {
            if (
              squares[y + 1][x + 2].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y + 1}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y + 1}`];
              });
            } else if (squares[y + 1][x + 2] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 2)}${y + 1}`];
              });
            }
          }
          if (isLegitPoint(x - 1, y - 2)) {
            if (
              squares[y - 2][x - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y - 2}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y - 2}`];
              });
            } else if (squares[y - 2][x - 1] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y - 2}`];
              });
            }
          }
          if (isLegitPoint(x + 1, y - 2)) {
            if (
              squares[y - 2][x + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y - 2}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y - 2}`];
              });
            } else if (squares[y - 2][x + 1] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y - 2}`];
              });
            }
          }
          if (isLegitPoint(x - 1, y + 2)) {
            if (
              squares[y + 2][x - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y + 2}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y + 2}`];
              });
            } else if (squares[y + 2][x - 1] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x - 1)}${y + 2}`];
              });
            }
          }
          if (isLegitPoint(x + 1, y + 2)) {
            if (
              squares[y + 2][x + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y + 2}`];
              });
              setKill((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y + 2}`];
              });
            } else if (squares[y + 2][x + 1] === "") {
              setMovementAllow((prev) => {
                return [...prev, `${String.fromCharCode(97 + x + 1)}${y + 2}`];
              });
            }
          }
        }
        //Queeen
        else if (piece === "queenwhite" || piece === "queenblack") {
          let x = Number(coord.charCodeAt(0) - 97);
          let y = Number(coord.substring(1));
          let x1 = Number(coord.charCodeAt(0) - 97);
          let y1 = Number(coord.substring(1));
          let x2 = Number(coord.charCodeAt(0) - 97);
          let y2 = Number(coord.substring(1));
          let x3 = Number(coord.charCodeAt(0) - 97);
          let y3 = Number(coord.substring(1));
          let x4 = Number(coord.charCodeAt(0) - 97);
          let y4 = Number(coord.substring(1));
          let x5 = Number(coord.charCodeAt(0) - 97);
          let y5 = Number(coord.substring(1));
          let x6 = Number(coord.charCodeAt(0) - 97);
          let y6 = Number(coord.substring(1));
          let x7 = Number(coord.charCodeAt(0) - 97);
          let y7 = Number(coord.substring(1));
          function isLegitPoint(a, b) {
            if (a >= 0 && a <= 7 && b >= 0 && b <= 7) return true;
            else return false;
          }
          let k = [];
          let m = [];
          let k1 = [];
          let m1 = [];
          let k2 = [];
          let m2 = [];
          let k3 = [];
          let m3 = [];
          let k4 = [];
          let m4 = [];
          let k5 = [];
          let m5 = [];
          let k6 = [];
          let m6 = [];
          let k7 = [];
          let m7 = [];
          while (isLegitPoint(x + 1, y + 1)) {
            if (
              squares[y + 1][x + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              k.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            } else if (squares[y + 1][x + 1] === "") {
              m.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              x = x + 1;
              y = y + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
            if (!isLegitPoint(x + 1, y + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
          }
          while (isLegitPoint(x1 - 1, y1 - 1)) {
            if (
              squares[y1 - 1][x1 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              k1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            } else if (squares[y1 - 1][x1 - 1] === "") {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              x1 = x1 - 1;
              y1 = y1 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
            if (!isLegitPoint(x1 - 1, y1 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
          }
          while (isLegitPoint(x2 - 1, y2 + 1)) {
            if (
              squares[y2 + 1][x2 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              k2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            } else if (squares[y2 + 1][x2 - 1] === "") {
              m2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              x2 = x2 - 1;
              y2 = y2 + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
            if (!isLegitPoint(x2 - 1, y2 + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
          }
          while (isLegitPoint(x3 + 1, y3 - 1)) {
            if (
              squares[y3 - 1][x3 + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              k3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            } else if (squares[y3 - 1][x3 + 1] === "") {
              m3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              x3 = x3 + 1;
              y3 = y3 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
            if (!isLegitPoint(x3 + 1, y3 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
          }
          while (isLegitPoint(x4 + 1, y4)) {
            console.log(x4 + 1, y4);
            if (
              squares[y4][x4 + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m4.push(`${String.fromCharCode(97 + x4 + 1)}${y4}`);
              k4.push(`${String.fromCharCode(97 + x4 + 1)}${y4}`);
              setMovementAllow((prev) => {
                return [...prev, ...m4];
              });
              setKill((prev) => {
                return [...prev, ...k4];
              });
              break;
            } else if (squares[y4][x4 + 1] === "") {
              m.push(`${String.fromCharCode(97 + x4 + 1)}${y4}`);
              x4 = x4 + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m4];
              });
              setKill((prev) => {
                return [...prev, ...k4];
              });
              break;
            }
            if (!isLegitPoint(x4 + 1, y4)) {
              setMovementAllow((prev) => {
                return [...prev, ...m4];
              });
              setKill((prev) => {
                return [...prev, ...k4];
              });
              break;
            }
          }
          while (isLegitPoint(x5 - 1, y5)) {
            if (
              squares[y5][x5 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m5.push(`${String.fromCharCode(97 + x5 - 1)}${y5}`);
              k5.push(`${String.fromCharCode(97 + x5 - 1)}${y5}`);
              setMovementAllow((prev) => {
                return [...prev, ...m5];
              });
              setKill((prev) => {
                return [...prev, ...k5];
              });
              break;
            } else if (squares[y5][x5 - 1] === "") {
              m5.push(`${String.fromCharCode(97 + x5 - 1)}${y5}`);
              x5 = x5 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m5];
              });
              setKill((prev) => {
                return [...prev, ...k5];
              });
              break;
            }
            if (!isLegitPoint(x5 - 1, y5)) {
              setMovementAllow((prev) => {
                return [...prev, ...m5];
              });
              setKill((prev) => {
                return [...prev, ...k5];
              });
              break;
            }
          }
          while (isLegitPoint(x6, y6 + 1)) {
            if (
              squares[y6 + 1][x6].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m6.push(`${String.fromCharCode(97 + x6)}${y6 + 1}`);
              k6.push(`${String.fromCharCode(97 + x6)}${y6 + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m6];
              });
              setKill((prev) => {
                return [...prev, ...k6];
              });
              break;
            } else if (squares[y6 + 1][x6] === "") {
              m6.push(`${String.fromCharCode(97 + x6)}${y6 + 1}`);
              y6 = y6 + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m6];
              });
              setKill((prev) => {
                return [...prev, ...k6];
              });
              break;
            }
            if (!isLegitPoint(x6, y6 + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m6];
              });
              setKill((prev) => {
                return [...prev, ...k6];
              });
              break;
            }
          }
          while (isLegitPoint(x7, y7 - 1)) {
            if (
              squares[y7 - 1][x7].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m7.push(`${String.fromCharCode(97 + x7)}${y7 - 1}`);
              k7.push(`${String.fromCharCode(97 + x7)}${y7 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m7];
              });
              setKill((prev) => {
                return [...prev, ...k7];
              });
              break;
            } else if (squares[y7 - 1][x7] === "") {
              m7.push(`${String.fromCharCode(97 + x7)}${y7 - 1}`);
              y7 = y7 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m7];
              });
              setKill((prev) => {
                return [...prev, ...k7];
              });
              break;
            }
            if (!isLegitPoint(x7, y7 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m7];
              });
              setKill((prev) => {
                return [...prev, ...k7];
              });
              break;
            }
          }
        }
        //bishop
        else if (piece === "bishopwhite" || piece === "bishopblack") {
          let x = Number(coord.charCodeAt(0) - 97);
          let y = Number(coord.substring(1));
          let x1 = Number(coord.charCodeAt(0) - 97);
          let y1 = Number(coord.substring(1));
          let x2 = Number(coord.charCodeAt(0) - 97);
          let y2 = Number(coord.substring(1));
          let x3 = Number(coord.charCodeAt(0) - 97);
          let y3 = Number(coord.substring(1));
          function isLegitPoint(a, b) {
            if (a >= 0 && a <= 7 && b >= 0 && b <= 7) return true;
            else return false;
          }
          let k = [];
          let m = [];
          let k1 = [];
          let m1 = [];
          let k2 = [];
          let m2 = [];
          let k3 = [];
          let m3 = [];
          while (isLegitPoint(x + 1, y + 1)) {
            if (
              squares[y + 1][x + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              k.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            } else if (squares[y + 1][x + 1] === "") {
              m.push(`${String.fromCharCode(97 + x + 1)}${y + 1}`);
              x = x + 1;
              y = y + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
            if (!isLegitPoint(x + 1, y + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
          }
          while (isLegitPoint(x1 - 1, y1 - 1)) {
            if (
              squares[y1 - 1][x1 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              k1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            } else if (squares[y1 - 1][x1 - 1] === "") {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1 - 1}`);
              x1 = x1 - 1;
              y1 = y1 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
            if (!isLegitPoint(x1 - 1, y1 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
          }
          while (isLegitPoint(x2 - 1, y2 + 1)) {
            if (
              squares[y2 + 1][x2 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              k2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            } else if (squares[y2 + 1][x2 - 1] === "") {
              m2.push(`${String.fromCharCode(97 + x2 - 1)}${y2 + 1}`);
              x2 = x2 - 1;
              y2 = y2 + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
            if (!isLegitPoint(x2 - 1, y2 + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
          }
          while (isLegitPoint(x3 + 1, y3 - 1)) {
            if (
              squares[y3 - 1][x3 + 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              k3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            } else if (squares[y3 - 1][x3 + 1] === "") {
              m3.push(`${String.fromCharCode(97 + x3 + 1)}${y3 - 1}`);
              x3 = x3 + 1;
              y3 = y3 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
            if (!isLegitPoint(x3 + 1, y3 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
          }
        }
        //rook
        else if (piece === "rookwhite" || piece === "rookblack") {
          let x = Number(coord.charCodeAt(0) - 97);
          let y = Number(coord.substring(1));
          let x1 = Number(coord.charCodeAt(0) - 97);
          let y1 = Number(coord.substring(1));
          let x2 = Number(coord.charCodeAt(0) - 97);
          let y2 = Number(coord.substring(1));
          let x3 = Number(coord.charCodeAt(0) - 97);
          let y3 = Number(coord.substring(1));
          function isLegitPoint(a, b) {
            if (a >= 0 && a <= 7 && b >= 0 && b <= 7) return true;
            else return false;
          }
          let k = [];
          let m = [];
          let k1 = [];
          let m1 = [];
          let k2 = [];
          let m2 = [];
          let k3 = [];
          let m3 = [];
          while (isLegitPoint(x + 1, y)) {
            if (
              squares[y][x + 1].includes(chance === "white" ? "black" : "white")
            ) {
              m.push(`${String.fromCharCode(97 + x + 1)}${y}`);
              k.push(`${String.fromCharCode(97 + x + 1)}${y}`);
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            } else if (squares[y][x + 1] === "") {
              m.push(`${String.fromCharCode(97 + x + 1)}${y}`);
              x = x + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
            if (!isLegitPoint(x + 1, y)) {
              setMovementAllow((prev) => {
                return [...prev, ...m];
              });
              setKill((prev) => {
                return [...prev, ...k];
              });
              break;
            }
          }
          while (isLegitPoint(x1 - 1, y1)) {
            if (
              squares[y1][x1 - 1].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1}`);
              k1.push(`${String.fromCharCode(97 + x1 - 1)}${y1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            } else if (squares[y1][x1 - 1] === "") {
              m1.push(`${String.fromCharCode(97 + x1 - 1)}${y1}`);
              x1 = x1 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
            if (!isLegitPoint(x1 - 1, y1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m1];
              });
              setKill((prev) => {
                return [...prev, ...k1];
              });
              break;
            }
          }
          while (isLegitPoint(x2, y2 + 1)) {
            if (
              squares[y2 + 1][x2].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m2.push(`${String.fromCharCode(97 + x2)}${y2 + 1}`);
              k2.push(`${String.fromCharCode(97 + x2)}${y2 + 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            } else if (squares[y2 + 1][x2] === "") {
              m2.push(`${String.fromCharCode(97 + x2)}${y2 + 1}`);
              y2 = y2 + 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
            if (!isLegitPoint(x2, y2 + 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m2];
              });
              setKill((prev) => {
                return [...prev, ...k2];
              });
              break;
            }
          }
          while (isLegitPoint(x3, y3 - 1)) {
            if (
              squares[y3 - 1][x3].includes(
                chance === "white" ? "black" : "white"
              )
            ) {
              m3.push(`${String.fromCharCode(97 + x3)}${y3 - 1}`);
              k3.push(`${String.fromCharCode(97 + x3)}${y3 - 1}`);
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            } else if (squares[y3 - 1][x3] === "") {
              m3.push(`${String.fromCharCode(97 + x3)}${y3 - 1}`);
              y3 = y3 - 1;
            } else {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
            if (!isLegitPoint(x3, y3 - 1)) {
              setMovementAllow((prev) => {
                return [...prev, ...m3];
              });
              setKill((prev) => {
                return [...prev, ...k3];
              });
              break;
            }
          }
        }
        //king
        else if (piece === "kingwhite" || piece === "kingblack") {
          let x = chance === "white" ? kingWhite.x : kingBlack.x;
          let y = chance === "white" ? kingWhite.y : kingBlack.y;
          let k = [];
          let m = [];
          function isLegitPoint(a, b) {
            if (a >= 0 && a <= 7 && b >= 0 && b <= 7) return true;
            else return false;
          }
          for (let i of [
            [1, 0],
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            if (isLegitPoint(x + i[0], y + i[1])) {
              let opp = chance === "white" ? "black" : "white";
              let sq = JSON.parse(JSON.stringify(squares));
              console.log(squares[y + i[1]][x + i[0]]);
              if (
                squares[y + i[1]][x + i[0]].includes(opp) &&
                !squares[y + i[1]][x + i[0]].includes("king")
              ) {
                let temp = sq[y][x];
                sq[y + i[1]][x + i[0]] = temp;
                sq[y][x] = "";
                let ans = await isKingMovementSafe(x + i[0], y + i[1], sq, opp);
                console.log(ans);
                if (ans || ans === undefined) {
                  m.push(`${String.fromCharCode(97 + x + i[0])}${y + i[1]}`);
                  k.push(`${String.fromCharCode(97 + x + i[0])}${y + i[1]}`);
                }
              } else if (squares[y + i[1]][x + i[0]] === "") {
                let temp = sq[y][x];
                sq[y + i[1]][x + i[0]] = temp;
                sq[y][x] = "";
                let ans = await isKingMovementSafe(x + i[0], y + i[1], sq, opp);
                console.log(ans);
                if (ans || ans === undefined) {
                  m.push(`${String.fromCharCode(97 + x + i[0])}${y + i[1]}`);
                }
              }
            }
          }
          setTimeout(() => {
            setMovementAllow([...m]);
            setKill([...k]);
          }, 200);
        }
      }
    }
  };

  console.log({ movementAllow, kill, squares });

  const movePiece = (a, b, s) => {
    if (movementAllow.includes(s)) {
      console.log("move");
      let x = Number(selected.charCodeAt(0) - 97);
      let y = Number(selected.substring(1));
      let piece = squares[y][x];
      squares[y][x] = "";
      if (b === 7 && piece.includes("pawn")) squares[b][a] = "queenwhite";
      else if (b === 0 && piece.includes("pawn")) squares[b][a] = "queenblack";
      else squares[b][a] = piece;
      setLastMoved([String.fromCharCode(97 + x) + y, s]);
      setSquares([...squares]);
      setMovementAllow([]);
      setKill([]);
      setSelected("");
      setChance(chance === "white" ? "black" : "white");
      if (piece.includes("king")) {
        if (chance === "white") {
          setkingWhite({ x: a, y: b });
        } else {
          setkingBlack({ x: a, y: b });
        }
      }
    } else {
      console.log("do nothing");
    }
  };

  useEffect(() => {
    async function check() {
      let remove = [];
      setFirstDrop(false);
      for (let i of movementAllow) {
        let x = Number(selected.charCodeAt(0) - 97);
        let y = Number(selected.substring(1));
        let a = Number(i.charCodeAt(0) - 97);
        let b = Number(i.substring(1));
        let piece = squares[y][x];
        if (!piece.includes("king")) {
          let sq = JSON.parse(JSON.stringify(squares));
          let opp = chance === "white" ? "black" : "white";
          let a1 = chance === "white" ? kingWhite.x : kingBlack.x;
          let b1 = chance === "white" ? kingWhite.y : kingBlack.y;
          let temp = sq[y][x];
          sq[b][a] = temp;
          sq[y][x] = "";
          let ans = await isKingMovementSafe(a1, b1, sq, opp);
          console.log(ans);
          if (ans !== undefined) {
            remove.push(i);
          }
        }
      }
      console.log(remove);
      setMovementAllow(
        movementAllow.filter((m) => {
          return !remove.includes(m);
        })
      );
      setKill(
        kill.filter((k) => {
          return !remove.includes(k);
        })
      );
    }
    if (firstDrop) check();
  }, [movementAllow]);

  useEffect(() => {
    if (chance === "white")
      isKingSafe(kingWhite.x, kingWhite.y, squares, "black");
    else isKingSafe(kingBlack.x, kingBlack.y, squares, "white");
  }, [squares]);

  return (
    <div className="App">
      <div className="chessBoard">
        <div
          className="board"
          style={{
            height:
              window.screen.width <= 600
                ? `${window.screen.width}` + "px"
                : "600px",
            width:
              window.screen.width <= 600
                ? `${window.screen.width}` + "px"
                : "600px",
          }}
        >
          {squares.map((sq, ind) => {
            return sq.map((s, ind1) => {
              if ((ind + ind1) % 2 === 0) {
                return (
                  <div
                    className={`square ${String.fromCharCode(97 + ind1)}${ind}`}
                    style={{
                      height:
                        window.screen.width <= 600
                          ? `${window.screen.width / 8}` + "px"
                          : "75px",
                      width:
                        window.screen.width <= 600
                          ? `${window.screen.width / 8}` + "px"
                          : "75px",
                      backgroundImage: movementAllow.includes(
                        String.fromCharCode(97 + ind1) + ind
                      )
                        ? kill.includes(String.fromCharCode(97 + ind1) + ind)
                          ? radialOutward
                          : radialInward
                        : null,
                      background:
                        selected === String.fromCharCode(97 + ind1) + ind
                          ? "green"
                          : lastMoved.includes(
                              String.fromCharCode(97 + ind1) + ind
                            )
                          ? "red"
                          : checkBlack && s.includes("kingblack")
                          ? "blue"
                          : checkWhite && s.includes("kingwhite") && "blue",
                      cursor: movementAllow.includes(
                        String.fromCharCode(97 + ind1) + ind
                      )
                        ? "pointer"
                        : null,
                    }}
                    onClick={() =>
                      movePiece(ind1, ind, String.fromCharCode(97 + ind1) + ind)
                    }
                  >
                    <div
                      className={s}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={() =>
                        showPossibleMovement(
                          String.fromCharCode(97 + ind1) + ind,
                          s
                        )
                      }
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    className={`square1 ${String.fromCharCode(
                      97 + ind1
                    )}${ind}`}
                    style={{
                      height:
                        window.screen.width <= 600
                          ? `${window.screen.width / 8}` + "px"
                          : "75px",
                      width:
                        window.screen.width <= 600
                          ? `${window.screen.width / 8}` + "px"
                          : "75px",
                      backgroundImage: movementAllow.includes(
                        String.fromCharCode(97 + ind1) + ind
                      )
                        ? kill.includes(String.fromCharCode(97 + ind1) + ind)
                          ? radialOutward
                          : radialInward
                        : null,
                      background:
                        selected === String.fromCharCode(97 + ind1) + ind
                          ? "green"
                          : lastMoved.includes(
                              String.fromCharCode(97 + ind1) + ind
                            )
                          ? "red"
                          : checkBlack && s.includes("kingblack")
                          ? "blue"
                          : checkWhite && s.includes("kingwhite") && "blue",
                      cursor: movementAllow.includes(
                        String.fromCharCode(97 + ind1) + ind
                      )
                        ? "pointer"
                        : null,
                    }}
                    onClick={() =>
                      movePiece(ind1, ind, String.fromCharCode(97 + ind1) + ind)
                    }
                  >
                    <div
                      className={s}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={() =>
                        showPossibleMovement(
                          String.fromCharCode(97 + ind1) + ind,
                          s
                        )
                      }
                    />
                  </div>
                );
              }
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
