import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserIssues } from "../features/issue/issueSlice";
import Ticket from ".././components/Ticket";

const YourIssues = () => {
  const dispatch = useDispatch();
  const { isLoading, userIssues } = useSelector((store) => store.issues);
  useEffect(() => {
    dispatch(getUserIssues());
  }, []);
  return (
    <div className="dashBoard__continer">
      <div className="u-algn-center">
        <h1 className="heading-primary u-margin-bottom-big ">your issues</h1>
      </div>
      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        <section className="dashBoard__tekets-wraber">
          {userIssues.map((ticket) => {
            return <Ticket key={ticket._id} ticket={ticket} />;
          })}
        </section>
      )}
    </div>
  );
};

export default YourIssues;
