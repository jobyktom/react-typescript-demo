import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
const { messageCount = 0} = props
  return (
    <h3>
      { props.isLoggedIn
        ? `Hello ${props.name}! you have ${messageCount} unread messages`
        : `welcome Guest` }
    </h3>
  );
}

export default Greet;
