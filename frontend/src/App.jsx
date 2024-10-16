import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ページおよびコンポーネントのインポート
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import YourProgress from "./components/YourProgress";
import SetYourPlan from "./pages/SetYourPlan";
import Achievement from "./components/Achieve";
import Complete from "./pages/TrackMyProgress";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // スクリプトを動的に作成して読み込む
    const script = document.createElement("script");
    script.src = "/js/script.js"; // バックエンドで提供された静的ファイルのパス
    script.type = "module"; // モジュールとして読み込む
    document.body.appendChild(script); // bodyに追加

    // クリーンアップ：コンポーネントがアンマウントされた時にスクリプトを削除
    return () => {
      document.body.removeChild(script);
    };
  }, []); // 初回レンダリング時にのみ実行されるように空の依存配列

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <SetYourPlan /> : <Home />} />
        <Route path="/SignUp" element={user ? <YourProgress /> : <SignUp />} />
        <Route path="/YourProgress/:id" element={user ? <YourProgress /> : <Navigate to="/" />} />
        {/* <Route path="/YourProgress/:id" element={<YourProgress />} /> */}
        <Route path="/SetYourPlan/:id" element={user ? <SetYourPlan /> : <Navigate to="/" />} />
        <Route path="/TrackMyProgress/:id" element={user ? <Complete /> : <Navigate to="/" />} />
        <Route path="/Achievement/:id" element={user ? <Achievement /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
