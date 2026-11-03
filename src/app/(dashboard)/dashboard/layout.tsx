import React from "react";

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-6 h-screen">
        <div className="font-bold text-6xl w-[250px] bg-yellow-500">
          <h2>Layout</h2>
        </div>

        <div className="flex-1 bg-green-500">
          <h2>{children}</h2>
        </div>
      </div>
    </div>
  );
};

export default layout;
