import React from "react";
import { PlayerList } from "../player";
import styles from './styles.module.scss';

const SearchIcon =  require("../../assets/icons/search-icon-ligth.png");

class Settings extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={styles.Settings}>
                <div className={styles.subHeader}>
                    <div className={styles.header}>
                        <div className={styles.tools}>
                            <div className={styles.search}>
                                <div className={styles.icon}>
                                    <img src={SearchIcon} alt="Procurar" />
                                    <span>
                                        Procurar
                                    </span>
                                </div>
                                <div className={styles.content}>
                                    <input type="search" name="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <p>Selecionado</p>
                        <span>Collection 1</span>
                    </div>
                </div>
                <PlayerList />
            </div>
        )
    }

}

export { Settings }