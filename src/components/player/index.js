import React, { useContext } from "react";
import { DataContext } from "../../context/datacontext";
import styles from "./styles.module.scss";
const { globalShortcut } = window.require("@electron/remote");

const PlayIcon = require("../../assets/icons/play-icon.png");
const PauseIcon = require("../../assets/icons/pause-icon.png");
const TrashIcon = require("../../assets/icons/trash-icon.png");

const PlayerList = () => {
    const { values } = useContext(DataContext);

    return(
        <div className={styles.PlayerList}>
            {
                values.currentCollection.tracks.map(item => {
                    return <Player 
                        id={item.id}
                        name={item.name}
                        path={item.path}
                        key={item.id}
                    />
                })
            }
            
        </div>
    )
}

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playing: false,
            time: 0
        }

        this.player = React.createRef();     
        this.button = React.createRef();
    }

    componentDidMount = () => {
        this.button.current?.click()
        setTimeout(() => this.button.current?.click(), 100)

        this.player.current.addEventListener('ended', () => {
            this.setState({
                playing: false
            })
        })

        globalShortcut.register(`Alt+CommandOrControl+${this.props.id}`, () => {
            this.player.current.currentTime = 0;
            this.player.current.play();
            this.setState({
                playing: true
            })
        })
    }

    formatTime = (seconds) =>{
        var time = Math.floor(seconds * 1000) || 0
        
        return new Date(time).toISOString().substr(14, 5)
    }

    toggleButton = () => {
        this.setState({
            playing: !this.state.playing
        },() => {
            if(this.state.playing){
                this.player.current.currentTime = 0;
                this.player.current.play();
            }else{                
                this.player.current.pause();
            }
        })
    }

    render(){
        console.log(this.props)
        return(
            <div className={styles.Player}>
                <div className={styles.icon}>
                    <button className={styles.playPause} ref={this.button} onClick={() => this.toggleButton()}>
                        <img src={
                            this.state.playing ? 
                            PauseIcon :
                            PlayIcon
                        } alt="Tocar" />
                    </button>
                </div>
                <div className={styles.details}>
                    <p>{this.props.id} - {this.props.name}</p>
                    <label>Duração: {this.formatTime(this.player.current?.duration)}</label>                    
                </div>
                <div className={styles.actions}>
                    <button>
                        <img src={TrashIcon} alt="Deletar" />
                    </button>
                </div>
                <audio
                    ref={this.player}
                    src={this.props.path}
                    preload="metadata"
                />
            </div>
        )
    }

}

export { Player, PlayerList }