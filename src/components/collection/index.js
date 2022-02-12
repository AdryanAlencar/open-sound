import React from "react";
import styles from "./styles.module.scss";
const FolderIcon = require("../../assets/icons/folder-icon.png");

class Collection extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(styles);
    }

    render() {
        return (
            <div className={styles.collection}>
                <div className={styles.header}>
                    <span>
                        {this.props.count}
                    </span>
                    <div className={styles.icon}>
                        <img src={FolderIcon} alt="Folder" />
                    </div>
                </div>
                <div className={styles.details}>
                    <h3>
                        {this.props.title}                        
                    </h3>
                </div>
            </div>
        );
    }
}

export { Collection }