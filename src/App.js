import Navigation from "./structure/navigation";
import Footer from "./structure/footer";
import Body from "./structure/body";
/** */
const App = () => {
  /** Website title */
  document.title = "Broj-ect";
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
};
/** */
export default App;
