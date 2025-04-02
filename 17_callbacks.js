// function sum(a ,b){
//     console.log(a*b);

// }
// function calsum(a ,b , callbacks){
//     callbacks(a,b)
//      console.log(a + b);

// }

// calsum(12, 12 , sum)

const url = "https://cat-fact.herokuapp.com/facts";


const getfact = async()=>{
    console.log("getting data ...");
    let response = fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
}
