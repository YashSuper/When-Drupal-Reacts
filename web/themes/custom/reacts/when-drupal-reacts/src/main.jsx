import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
(function ($, Drupal) {
  Drupal.behaviors.react_app = {
    attach: function (context, settings) {
      // Use the `once()` function to ensure this code runs only once.
      once("reactApp", "#root", context).forEach((element) => {
        createRoot(element).render(
          <StrictMode>
            <App />
          </StrictMode>
        );
      });
    },
  };
})(jQuery, Drupal);
