import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function useBindActions(actions) {
  const dispatch = useDispatch();
  const methods = bindActionCreators(actions, dispatch);
  return { ...methods };
}
