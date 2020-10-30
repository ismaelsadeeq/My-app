const posts = [
  {title:'post one',body:'this is post one'},
  {title:'post two', body:'this is post two'}
]

function getPost(){
  setTimeout(() => {
    let output ="";
    posts.forEach((post,index) => {
      output+=`<li>${post.title}</li>`
    })
    document.body.innerHTML =output;
  },1000)
}

function createPost(post){
  return new Promise( (resolve,reject) =>{
    setTimeout( () =>{
      posts.push(post);

      const error = false;

      if (!error){
        resolve();
      } else {
        reject('error: something went wrong');
      }
    },2000)
  })
};

// createPost({title:'post three', body:'this is post three'})
//  .then(getPost)
//  .catch(err => console.log(err));

promise1 = Promise.resolve('Como estaas');
promise2 = 10;
promise3 = new Promise((resolve,reject) =>
  setTimeout(resolve,2000,'que tal')
);
promise4 =

Promise.all([promise1,promise2,promise3]).then((values) => console.log(values))