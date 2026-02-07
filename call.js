const obj = {
  name: "Harshit",
  greet: function() {
    console.log(this.name);
  }
};

const newFunc = obj.greet;
newFunc();


function show() {
  console.log(this);
}

show();
