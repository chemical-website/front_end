const PropertyField = ({ ke, value }) => {
  return (
    <div className="flex flex-row justify-between items-start w-full gap-4 mb-4">
      <div style={{ color: "#8806CE", flex: 3 }} className="font-semibold text-xl">
        {ke}
      </div>
      <div style={{ borderBottom: "#D184FB  0.1rem solid", flex: 7 }}>
        <p style={{ color: "#3B0359" }} className=" font-semibold text-xl mb-4">
          {value}
        </p>
      </div>
    </div>
  );
};

const Property = ({ prop }) => {
  return (
    <div className="grid grid-cols-1 place-items-center 2xl:grid-cols-2 gap-x-80 mt-9 w-full">
      {prop.map(({key, value}) => {
        return <PropertyField key={key} ke={key} value={value} />;
      })}
    </div>
  );
};

export default Property;
