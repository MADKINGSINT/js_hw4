function task1() {
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(`${i} - ноль`);
    } else if (i % 2 === 0) {
      console.log(`${i} - четное число`);
    } else if (i % 2 !== 0) {
      console.log(`${i} - нечетное число`);
    }
  }
}
task1();

function task2() {
  let array = [1, 2, 3, 4, 5, 6, 7];
  array.splice(3, 2);
  console.log(array);
}
task2();

function task3() {
  let sum = 0;
  let threes = [];
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 10);
    sum += array[i];
    if (array[i] === 3) {
      threes.push(i);
    }
  }
  console.log(array);
  console.log(sum);
  console.log(`обнаружены тройки в ${threes}-м элементах массива`);
}
task3();

function extraTask() {
    
    for (let i = 0; i <= 20; i++) {
        tempArr = [];
        for (let j = 0; j < i; j++) {
            tempArr.push("*");
            
        }
        console.log(tempArr);
        
    }
}
extraTask();