import New from "./New";
import Popular from "./Popular";

export function withWrapper(Component) {
	function Wrapper(props) {
		const { views } = props;

		if (views < 100) {
			return (
				<New>
					<Component {...props}/>
				</New>
			)
		} else if (views >= 1000) {
			return (
				<Popular>
					<Component {...props}/>
				</Popular>
			)
		} else {
			return <Component {...props}/>
		}
	}

	return Wrapper;
}