import React, { useContext } from "react";
import { DataContext } from "../../context/datacontext";
import styles from "./styles.module.scss";
const FolderIcon = require("../../assets/icons/folder-icon.png");

const CollectionList = (props) => {

    const {values, updateValues} = useContext(DataContext);
    return(
        <div className={styles.CollectionList}>
            {
                values.collections.map((item, index) => {
                    return(
                         <Collection
                            title={`${item.name} ${index + 1}`}
                            count={9}
                            id={item.id}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

class Collection extends React.Component {
    static contextType = DataContext;

    constructor(props){
        super(props)
    }

    componentDidMount() {
        
    }

    changeCurrentCollection(){
        const collection = this.context.values.collections.find(collection => collection.id == this.props.id)

        this.context.updateValues({
            currentCollection: collection
        })
    }

    render() {
        return (
            <div className={styles.collection} onClick={() => this.changeCurrentCollection()}>
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