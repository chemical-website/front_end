const Additional = ({ text }) => {
  return (
    <div
      style={{ color: "#27023B" }}
      className="font-normal text-lg mt-9 w-full"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Additional;
