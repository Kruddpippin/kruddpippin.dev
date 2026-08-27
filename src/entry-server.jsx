import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StaticRouter>
    </StrictMode>
  );
}
