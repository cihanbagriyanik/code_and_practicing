import React,{memo} from 'react'

const HeaderMemo = memo(({ user }) => {
  console.log("Render => HeaderMemo componenti");
  return <div className="text-center text-success">HeaderMemo Componenti : {user}</div>;
});

export default HeaderMemo

// memo component bazında kullanılır.