// Задача 1

function executeComplexOperation() {
  const randomDelay = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  return new Promise((resolve) => setTimeout(resolve, randomDelay));
}

async function executeAndInform(id) {
  await executeComplexOperation();
  console.log(`Operation ${id} complete`);
}

async function executeAll(array) {
  for (const id of array) {
    await executeAndInform(id);
  }
  console.log('All operations completed!');
}

executeAll([1, 2, 3, 4, 5]);

// Задача 2

function createCats() {
  let cats = [];
  for (let i = 0; i < 10; i++) {
    let cat = function () {
      console.log(`My index is ${i}`);
    };
    cats.push(cat);
  }
  return cats;
}

let animals = createCats();
animals[0]();
animals[5]();

// Задача 3

const tree = {
  value: 3,
  children: [
    {
      value: 1,
      children: [],
    },
    {
      value: 4,
      children: [],
    },
    {
      value: 3,
      children: [
        {
          value: 8,
          children: [
            {
              value: 2,
              children: [],
            },
            {
              value: 5,
              children: [],
            },
          ],
        },
        {
          value: 0,
          children: [],
        },
      ],
    },
  ],
};

function sumEvenNodes(node) {
  let sum = 0;
  if (node.value % 2 === 0) {
    sum += node.value;
  }
  for (let child of node.children) {
    sum += sumEvenNodes(child);
  }
  return sum;
}

