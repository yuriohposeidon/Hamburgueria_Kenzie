import { ToastContainer } from "react-toastify";
import { Feed } from "./pages/Feed";
import { GlobalStyles } from "./styles/global";
import { ResetGlobalStyle } from "./styles/reset";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ResetGlobalStyle />
      <GlobalStyles />
      <Feed />
    </>
  );
};

export default App;
