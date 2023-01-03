// Question 1

const parent={
  cal(){
    console.log(`${this.fName}`);
  },
  age(){
    console.log(`${this.fage}`);
  }
}
let child = Object.create(parent);
child.fName = "Rahul";
child.fage = 25;
child.cal();
child.age();


// // Question 2
let chain={
  rohini:"not my name",
  age:30,
  career:"SE"
}
let fChain = {
  name:"charan",
  surname:"reddy",
}
let sChain = {
  iq:"150",
  apptitude:"nill"
}
fChain._proto_ = chain;
console.log(fChain.age);


//Question 3
const addSum = {
  add : function(a){
      let sum = 0;
      for(let i = 0; i < a.length; i++){
          sum += a[i];
      }
      console.log(sum);
  }
}

addSum.add([50,55,19,60,58]);

//Question 4

let animal={
  legs:4,
  moves:'fast',
  crawl:true
}

let obj1={
  pets:"dog,cat,birds",
  living:"in home with us",
  loyal:true
}

let obj2={
func:function humans(){
  console.log("cruel");
}
}
console.log(obj1.hasOwnProperty('pets'));