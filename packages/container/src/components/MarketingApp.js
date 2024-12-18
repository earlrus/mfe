import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
          console.log(history.location);
        }
      },
    });
    console.log(history.location.pathname);

    history.listen(onNavigate);
    history.push(history.location.pathname);
  }, []);

  return <div ref={ref} />;
};
