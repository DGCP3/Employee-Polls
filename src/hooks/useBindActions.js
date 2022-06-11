import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function useBindActions(actions) {
  const dispatch = useDispatch();
  const methods = useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
  return { ...methods };
}
