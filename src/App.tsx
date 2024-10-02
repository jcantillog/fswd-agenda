import { useContext } from "react";
import { ConfigProvider, theme } from "antd";
// context
import { GlobalContext } from "contexts/GlobalContext";
// components
import { ContactsPage } from "modules";
// styles
import "./App.scss";

function App() {
  const { darkMode } = useContext(GlobalContext);
  console.log({ darkMode });
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.compactAlgorithm,
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 0,
          },
        },
      }}
    >
      <ContactsPage />
    </ConfigProvider>
  );
}

export default App;
