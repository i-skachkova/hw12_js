// 1
const user = {
    hobby: "volleyball",
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for(const key of keys){
    console.log(key + ": " + user[key]);
}

// 2
const countProps = function(obj){
    let result = 0;
    for(const key in obj){
        result++;
    }
    return result;
};

const obj1 = {
    color: 'blue',
    size: 'small',
};
const obj2 = {
    color: 'red',
    size: 'medium',
    shape: 'circle',
};
const obj3 = {
    color: 'green',
    size: 'big',
    shape: 'square',
    borderColor: 'blue',
};
console.log("У першому об'єкті " + countProps(obj1) + " властивостей, у другому - " + countProps(obj2) + ", а у третьому - " + countProps(obj3));


// 3
const findBestEmployee = function(employees){
    const names = Object.keys(employees);
    let maxOfTasks = 0;
    let nameOfTheBestEmployer = names[0];
    for(const name of names){
        if(employees[name] > maxOfTasks){
            maxOfTasks = employees[name];
            nameOfTheBestEmployer = name;
        }
    }
    return nameOfTheBestEmployer;
};
const employees = {
    Olga: 4,
    Alex: 10,
    Marta: 12,
    Max: 6,
};
console.log(findBestEmployee(employees));

// 4
const countTotalSalary = function(employeesSalary){
    const names = Object.keys(employeesSalary);
    let summ = 0;
    for(const name of names){
        summ += employeesSalary[name];
    }
    return summ;
};
const employeesSalary = {
    Olga: 400,
    Alex: 1000,
    Marta: 1200,
    Max: 600,
};
console.log("Сумарна зарплата всіх працівників становить " + countTotalSalary(employeesSalary));


// 5
const geometricShapes = [
    {
      color: "purple",
      size: "big",
      borderColor: "green",
      opacity: 0.6,
    },
    {
        color: "white",
        size: "medium",
        borderColor: "blue",
        opacity: 0.4,
      },
      {
        color: "yellow",
        size: "small",
        borderColor: "red",
        opacity: 0.9,
      },
  ]
  const getAllPropValues = function(arr, prop){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i][prop]);
    }
    return result;
  }
  console.log(getAllPropValues(geometricShapes, 'color'));
  console.log(getAllPropValues(geometricShapes, 'size'));
  console.log(getAllPropValues(geometricShapes, 'borderColor'));
  console.log(getAllPropValues(geometricShapes, 'opacity'));


// 6
const allProdcuts = [
    {
        name: 'milk',
        price: 20,
        amount: 3,
    },
    {
        name: 'apple',
        price: 10,
        amount: 15,
    },
    {
        name: 'banana',
        price: 40,
        amount: 5,
    },
]
const calculateTotalPrice = function(allProdcuts, productName){
    for(let i = 0; i < allProdcuts.length; i++){
        if(allProdcuts[i].name == productName) return allProdcuts[i].price * allProdcuts[i].amount;
    }
};
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProdcuts, 'milk'));
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProdcuts, 'apple'));
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProdcuts, 'banana'));