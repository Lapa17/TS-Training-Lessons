import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
};

const instance = axios.create(config)
const body = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

const getRequest  = () => {
    instance.get('').then(res=>{
    console.log(res.data)
    })
}

const postRequest  = () => {
    instance.post('', body).then(res=>{
        console.log(res.data)
        })
    }
    
const putRequest = () => {
        instance.put('/1',body).then(res=>{
        console.log(res.data)
        })
    }

const deleteRequest = () => {
        instance.delete('/1').then(res=>{
        console.log(res.data)
        })
    }
getRequest()
postRequest()
putRequest()
deleteRequest()

// just a plug
export default ()=>{};