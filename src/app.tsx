import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

//Use this for a hot reload in webpack-dev-server

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

//Use this boilerplate for a hot reload in Electron

// let AppContainer: ({ children }: { children?: any }) => JSX.Element | JSX.Element;
// if (module.hot) {
//   // When hot ednabled AppConteiner from 'react-hot-loader'
//   AppContainer = (require as any)('react-hot-loader').AppContainer;
// } else {
//   // When hot disabled AppContainer simple div
//   AppContainer = ({ children }) => (
//     <div>{children}</div>
//   );
// }


// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <AppContainer>
//     <App />
//   </AppContainer>,
//   rootElement
// );


// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App/App', () => {
//     const NextAppComponent = (require as any)(
//       './App/App'
//     ).default;
//     ReactDOM.render(
//       <AppContainer>
//         <App />
//       </AppContainer>
//       ,
//       rootElement
//     );
//   });
// }