//Import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
//Create react Componenet
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="at 4:50PM"
          commentContent="this is comment 1"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="at 3:20PM"
          commentContent="this is comment 2"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="at 4:20PM"
          commentContent="this is comment 3"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="at 9:20PM"
          commentContent="this is comment 4"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
//show componenet on screen
ReactDOM.render(<App />, document.querySelector("#root"));

/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/> */
