/**
 * this is a magic square function to generate magic box where all rows,
 * all cols,and dialgonals add upto the same number
 */
function magicbox() {
    const n = 3; // Size of the magic square (3x3)
    const magicSquare = new Array(n)
    for (let i = 0; i < n; i++) {
      magicSquare[i] = new Array(n)
    }
  
    let num = 1
    let row = 0
    let col = (n / 2) | 0
 //running the while loop to generate numbers in each grid 
    while (num <= n * n) {
      magicSquare[row][col] = num
      num++
  
      const newRow = (row - 1 + n) % n
      const newCol = (col + 1) % n
  
      if (magicSquare[newRow][newCol] !== undefined) {
        row = (row + 1) % n
      } else {
        row = newRow
        col = newCol
      }
    }
  
    return magicSquare
  }
  //finction to print the magic box
  function printMagicSquare(magicSquare) {
    for (let row of magicSquare) {
      console.log(row.join('\t'))
    }
  }
  
  const magicSquare = magicbox()
  console.log("3x3 Magic Square:")
  printMagicSquare(magicSquare)