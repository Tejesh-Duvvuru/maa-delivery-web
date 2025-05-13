import { useRouteError } from "react-router";
import "./Error.css"; // Import the CSS file for styling

const Error = () => {
  const err = useRouteError();
  console.log("useRouter", err);
  return (
    <div className="error-container">
      <h1>Sorry for inconvince</h1>
      <h1>Service is under devlopment</h1>
      {/* <h2>{err?.status}</h2> */}
    </div>
  );
};

export default Error;
