import React, { useState } from "react";

export const Comments = () => {
  const [uname, setuname] = useState("");
  const [ucomment, setucomment] = useState("");
  const [list, setList] = useState([]);
  const [like, setlike] = useState(0);
const [dislike, setdislike] = useState(0);
const [likeactive, setlikeactive] = useState(false);
const [dislikeactive, setdislikeactive] = useState(false)

function likef(){
if(likeactive){
  setlikeactive(false)
  setlike(like-1)
}else{
  setlikeactive(true)
  setlike(like+1)
  if(dislikeactive){
    setdislikeactive(false)
    setlike(like+1)
    setdislike(dislike-1)
  }
}
}
function dislikef(){
  if(dislikeactive){
    setdislikeactive(false)
    setdislike(dislike-1)
  }else{
    setdislikeactive(true)
    setdislike(like+1)
    if(likeactive){
      setlikeactive(false)
      setdislike(like+1)
      setlike(dislike-1)
    }
  }
  }
const removeHandler = (id) => {
  // eslint-disable-next-line array-callback-return
  const newList = list.filter((ele) => {
    if (ele.id !== id) {
      return ele;
    }
  });
  
  
  setList(newList);
 
};
  const inputHandler = (e) => {
    if (e.target.id === "uname") {
      setuname(e.target.value);
    } else {
      setucomment(e.target.value);
    }
  };

const add = (e) => {
    e.preventDefault();
    if (uname !== "" && ucomment !== "") {
      setList((list) => {
        return [
          ...list,
          { uname: uname, ucomment: ucomment, id: new Date().getTime() },
        ];
      });
    }
    setuname("");
    setucomment("");
  };
  
  return (
    <>
     <div className="container">
      <h1>To-do List</h1>
      <div className="container">
        <div>
         User Name: <input
            type="text"
            value={uname}
            id="uname"
            onChange={inputHandler}
          /><br/>
          Comments: <input
            type="textarea"
            value={ucomment}
            id="ucomment"
            onChange={inputHandler}
          /><br/>
          <button onClick={add}>Add</button>
        </div>
      </div>
      <div>
        <h1>here is your Comments :{")"}</h1>
        <p>
            {list.length===0 ?<h6>Add Comments</h6>:list.map((e)=>{return(
              <p>
             <b>{e.uname}:</b> <br/>{e.ucomment}<br/>
              <button onClick={likef} id="new" className={[likeactive ? 'active-like':null,'botton'].join('')}><i class="fa-solid fa-thumbs-up"></i></button>Like: {like}
              <button onClick={dislikef} id="new"  className={[dislikeactive ? 'active-dislike':null,'botton'].join('')}><i class="fa-solid fa-thumbs-down"></i></button>Dislike: {dislike}
              <button onClick={() => {
              removeHandler(e.id);
            }}>delete comment</button>           </p>
            )})

            }
        </p>
      </div>
      
      </div>
    </>
  );
};


