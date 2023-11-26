import useModel from "../utils/useModel";

const Inmodel = () => {
  const state = useModel();
  return (
    <div>
      <h4> Show me the Status : {state === "false" ? "🔴" : "🟢"}</h4>
      <h1>Inmodel welcomes you!!</h1>
    </div>
  );
};

export default Inmodel;
