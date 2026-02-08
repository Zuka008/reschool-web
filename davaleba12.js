const products = [
    { name: "ლეპტოპი", category: "ტექნოლოგია", price: 1200 },
    { name: "მაისური", category: "ტანსაცმელი", price: 25 },
    { name: "სმარტფონი", category: "ტექნოლოგია", price: 800 },
    { name: "წიგნი", category: "წიგნები", price: 15 },
    { name: "ყურსასმენები", category: "ტექნოლოგია", price: 100 }
];
// 1
const teqnologiuri = products
    .filter(product => product.category === "ტექნოლოგია")
    .map(product => product.name);

console.log(teqnologiuri);

const newPrice = products.map(product => ({
    ...product,
    price: product.price * 1.1
}));

const total = newPrice.reduce((sum, product) => sum + product.price, 0);

console.log(total);

// 2

const students = [
    { name: "გიორგი", grade: 85 },
    { name: "მარიამი", grade: 92 },
    { name: "ლუკა", grade: 78 },
    { name: "ანა", grade: 95 },
    { name: "დათო", grade: 70 },
    { name: "სალომე", grade: 88 }
];

const grades = students.map(student => student.grade);

const klebadoba = grades.sort((a, b) => b - a);

console.log(klebadoba);

const total_2 = students.reduce((sum, student) => sum + student.grade, 0);
const sashualo = total_2 / students.length;

const aboveAvrgStudents = students.filter(student => student.grade > sashualo);
const aboveAverageCount = aboveAvrgStudents.length;

console.log(aboveAverageCount);
