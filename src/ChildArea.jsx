import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

/**
 * 親要素の更新時に再レンダリングされるのを防ぐためmemo
 *  →コンポーネントは基本的にmemo化する
 */
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("qq");
  // });
  // console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
