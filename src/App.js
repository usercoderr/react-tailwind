import { Layout } from "./components/layout/Layout";
import { Header } from './components/header/Header'
import { MainSection } from "./components/main-section/MainSection";
function App() {
  return (
    <Layout>
      <Header/>
      <MainSection/>
    </Layout>
  );
}

export default App;
