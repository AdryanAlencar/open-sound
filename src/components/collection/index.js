import React from "react";
import styles from "./styles.module.scss";
const FolderIcon = require("../../assets/icons/folder-icon.png");

const CollectionList = (props) => {
    return(
        <div className={styles.CollectionList}>
            {
                props.list.map((item, index) => {
                    return(
                         <Collection
                            title={`Collection ${index + 1}`}
                            count={9}
                        />
                    )
                })
            }
        </div>
    )
}

class Collection extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        
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

export { Collection, CollectionList }