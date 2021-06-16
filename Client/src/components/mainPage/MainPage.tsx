import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MainPage() {
  const state = useSelector((state: any) => state.spotify);
  useEffect(() => {
    if (state)
      state
        .getMe()
        .then((user: any) => {
          console.log(user);
        })
        .catch((err: any) => {
          console.log(err);
        });
  }, [state]);
  return <div>hello</div>;
}
