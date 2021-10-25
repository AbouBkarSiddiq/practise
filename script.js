// const data = [
//     {fname: "Abou Bkar", lname: "Siddiq", job: "react js", age: 26},
//     {fname: "Safyan", lname: "Jelani", job: "node js", age: 25},
//     {fname: "Ahsan", lname: "Iqbal", job: "database administrator", age: 17},
//     {fname: "Sanwal", lname: "Nadeem", job: "Devops", age: 16}
// ]

// let ages = [12, 34, 54, 22, 24, 58]

// //Map function
// const names = data.map(el => {
//     return el.fname + " " + el.lname
// })
// console.log(names)

// //filter function
// const age = data.filter(el => el.age >= 25)
// console.log(age)

// // forEach function
// const person =  data.forEach(element => element.fname);
// console.log(person)
// data.forEach(element => console.log('Role', element.job, typeof element.job))

// // reduce function
// let ages_sum = ages.reduce((accu, curr) =>{
//     return accu + curr
// })
// console.log(ages_sum)


const data = [
    { name: 'sprite', id: 1, price: 50, featured: true, discount: 20 },
    { name: 'pepsi', id: 2, price: 66, featured: false, discount: 10 },
    { name: 'cola', id: 3, price: 70, featured: true, discount: 5 },
    { name: 'fanta', id: 4, price: 80, featured: true, discount: 0 },
    { name: 'marinda', id: 5, price: 44, featured: false, discount: 0 }
]

// const deleteItem = (id) => data.filter(ele => ele.id !== id);
// let result = deleteItem(4)

// function updateArray(obj, id) {
//     console.log(obj)
//     let objectPassedById = data.find(ele => ele.id === id)
//     objectPassedById = obj
// }
// updateArray({ name: 'sprite', price: 50 }, 2)
// console.log(updateArray)

const updateArrayFunc = (obj, id) => {

    let newDataArray = []
    let objectPassedById = data.find(ele => ele.id === id)
    objectPassedById = obj
    // console.log('Updated object:', objectPassedById)
    // newDataArray = data.map((ele) => ({...ele, name: ele.id === id && objectPassedById['name']? objectPassedById['name']: ele.name,  price: ele.id === id && objectPassedById['price']? objectPassedById['price'] : ele.price, featured: ele.id === id && objectPassedById['featured']? objectPassedById['featured'] : ele.featured, discount: ele.id=== id && objectPassedById['discount']? objectPassedById['discount'] : ele.discount }))
    newDataArray = data.map(ele => {
        if(ele.id === id) {
            return {...ele, ...objectPassedById}
            // return {...objectPassedById, name : objectPassedById.name? objectPassedById.name: ele.name, price: objectPassedById.price? objectPassedById.price: ele.price, featured: objectPassedById.featured? objectPassedById.featured : ele.featured, discount: objectPassedById.discount? objectPassedById.discount : ele.discount }
        } else {
            return ele
        }
    })
    console.log('Updated array data:', newDataArray)
}

updateArrayFunc({ name: 'sprite', price: 80, discount: 30 }, 4)
// console.log(updateArrayFunc)


// const updateFun = (obj, id) => data.filter(ele => console.log(obj))



let newArray = []
newArray = data.map((ele) => ({ ...ele, price: ele.featured ? ele.price + 10 : ele.price }))
// console.log('New array:', newArray)

let discounted = []
discounted = data.map((ele) => (
    {
        ...ele,
        discountPrice: ele.discount !== 0 ? ele.price - (ele.price * ele.discount / 100) : ele.price
    }
))

// console.table(discounted)

//const editSchoolName = (schools, oldName, newName) =>
//schools.map(({name, ...school }) => ({ ...school, name: oldName === name ? newName : name }));

const total = data.reduce((accumelator, current) => accumelator + current.price, 0)
// console.log('Sum of all prices:', total)


const feature_sum = data.reduce((accumelator, current) => current.featured ? accumelator + current.price : accumelator, 0);
// console.log('Featured sum :', feature_sum)


const featured_sum = data.filter(value => value.featured).reduce((accumelator, current) => accumelator + (current.price + 10), 0)
// console.log('Featured sum second way of calculations:', featured_sum)

const names = data.map((ele) => ele.name).join(', ')
// console.log(names)

const newData = data.reduce((accumelator, current) => current.featured ? accumelator + current.price : current.price, 0)
// console.log('New Array', newData)

const newArr = data.map(a => ({ ...a }));
// console.log(newArr)

// reduce((accumelator, current) => accumelator + current.price, 0)
// console.log('Featured sum :', featured_sum)

// const feature = data.reduce((accumelator, current) => {
//     if(current.featured == 'true') {
//         accumelator + current.featured
//     }
// }
// )
// console.log('Sum of Featured:', feature)

// const result = [
//     {subject: 'Physics', marks: 41},
//     {subject: 'Chemistry', marks: 59},
//     {subject: 'Pure Maths', marks: 36},
//     {subject: 'Applied Maths', marks: 90},
//     {subject: 'English', marks: 64},
// ];

// let initialValue = {
//     pass: [], 
//     fail: []
// }

// const groupedResult = result.reduce((accumulator, current) => {
//     (current.marks>=50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
//     return accumulator;
// }, initialValue);

// console.log(groupedResult);

