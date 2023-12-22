const UserData = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="lg:text-4xl">Who Uses Our Task Management App</h1>
        <p>
          Discover the diverse users benefiting from our app. Join them today!
        </p>
      </div>
      <div>
        <div className="w-1/3 mx-auto bg-neutral-200 dark:bg-neutral-600">
          <div className="bg-primary p-2 my-4 text-left text-xs font-medium leading-none w-[30%] text-white">
            Developers: 30%
          </div>
        </div>
        <div className="w-1/3 mx-auto bg-neutral-200 dark:bg-neutral-600">
          <div className="bg-primary p-2 mb-4 text-left text-xs font-medium leading-none w-[35%] text-white">
            Project Managers: 35%
          </div>
        </div>
        <div className="w-1/3 mx-auto bg-neutral-200 dark:bg-neutral-600">
          <div className="bg-primary p-2 mb-4 text-left text-xs font-medium leading-none w-[20%] text-white">
            Banker: 20%
          </div>
        </div>
       
        <div className="w-1/3 mx-auto bg-neutral-200 dark:bg-neutral-600">
          <div className="bg-primary p-2 mb-4 text-left text-xs font-medium leading-none w-[15%] text-white">
            Others: 15%
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
