import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";
import "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  // 関数版の関心の分離？　[]内の要素が変わった時だけuseCallback()内を生成する
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
