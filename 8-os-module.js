const os = require("os");

//to get info about hte current user
const user = os.userInfo();
console.log(user);
/*
{
  uid: 1000,
  gid: 1000,
  username: 'john',
  homedir: '/home/john',
  shell: '/bin/bash'
}
*/

//method to return the system uptime in seconds
console.log(`This system has been running for ${os.uptime()} seconds`);
//This system has been running for 29520.24 seconds

//To get current os info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
/*
{
  name: 'Linux',
  release: '5.15.0-50-generic',
  totalMem: 8247328768,
  freeMem: 2321682432
}
*/
