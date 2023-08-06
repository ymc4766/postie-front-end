import HeadlineScreen from "./Screens/HeadlineScreen";
// import LandingScreen from "./Screens/LandingScreen";
import PostScreen from "./Screens/PostScreen";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      {/* <LandingScreen /> */}
      <HeadlineScreen />
      <PostScreen />
    </>
  );
}

export default App;
