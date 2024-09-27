import Styles from "./Information.module.scss"
import clsx from "clsx"

function Information(props) {
    return (
        <h4 className={clsx(Styles.information)}>
            xin chao: {props.nameuser}
        </h4>
    );
}

export default Information;