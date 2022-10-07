//Here are some of the variables in nodejs
//GLOBALS - NO WINDOW - You can access it anywhere
//__dirname - Path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module(file)
//process - info about environment where the program is being executed(very useful)(heroku, digital ocean etc..)

console.log(__dirname);
setInterval(() => {
  console.log("Hello World");
}, 1000);
