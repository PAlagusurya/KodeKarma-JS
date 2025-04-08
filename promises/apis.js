const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2 resolved");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 3 rejected");
  }, 1000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//returns First settled promise (success/rejection) and stops execution,if all passes then returns all the values

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//return {status:"fulfilled",value:""},{status:"rejected",reason:""}

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//returns First settled promise(success/rejection)

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
//when all fails [ 'promise 1 resolved', 'promise 2 resolved', 'promise 3 rejected' ] if not returns first setlled success
