import { Customerlist } from "@/app/components/server/CustomerList";
import { UserList } from "@/app/components/server/UserList";
import Loading from "@/app/loading";
import React, { Suspense } from "react";


const InfoPage = () => {
  return (
    <div className="text-teal-500 container">
      InfoPage

      <div>
        <h1>These are info about the users in my Postgres DB</h1>

        <div className="container mx-auto bg-blue-950">
          <Suspense fallback={<Loading />}>
            <UserList />
          </Suspense>
          
          <Suspense fallback={<Loading />}>
            <Customerlist />
          </Suspense>
        </div>
      </div>
    </div >
  );
};

export default InfoPage;
