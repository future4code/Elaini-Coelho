// a. 

const printMatrix = (m: number[][]): void => {
    for (const row of m) {
      for (const element of row) {
        console.log(element);
      }
    }
  };

// b.

export const sumMatrix = (
    matrixA: number[][],
    matrixB: number[][]
  ): number[][] => {
    const newMatrix: number[][] = [];
    if (
      matrixA.length !== matrixB.length ||
      matrixA[0].length !== matrixB[0].length
    ) {
      throw new Error("As dimensões das matrizes devem ser iguais");
    }
    const rowSize = matrixA[0].length;
    const columnSize = matrixB[0].length;
  
    for (let i = 0; i < rowSize; i++) {
      let newMatrixRow = [];
      for (let j = 0; j < columnSize; j++) {
        newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
      }
      newMatrix.push(newMatrixRow);
    }
    return newMatrix;
};

// c.

const transposeMatrix = (m: number[][]): number[][] => {
    const transposed: number[][] = [];
    if (!m.length) {
      throw new Error("Matriz inválida");
    }
    for (let j = 0; j < m[0].length; j++) {
      let row = [];
      for (let i = 0; i < m.length; i++) {
        row.push(m[i][j]);
      }
      transposed.push(row);
    }
    return transposed;
  };

//  d.

export const multiplyMatrix = (
    matrixA: number[][],
    matrixB: number[][]
  ): number[][] => {
    const result: number[][] = [];
    if (matrixA[0].length !== matrixB.length) {
      throw new Error("Matrizes inválidas");
    }
    for (let i = 0; i < matrixA.length; i++) {
      let rowResult: number[] = [];
      for (let j = 0; j < matrixB[0].length; j++) {
        let sumResult = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
          sumResult += matrixA[i][k] * matrixB[k][j];
        }
        rowResult.push(sumResult);
      }
      result.push(rowResult);
    }
    return result;
  };

  