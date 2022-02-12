import React from "react";
import styles from "./styles.module.scss";

const PlayIcon = require("../../assets/icons/play-icon.png");
const PauseIcon = require("../../assets/icons/pause-icon.png");
const TrashIcon = require("../../assets/icons/trash-icon.png");

const PlayerList = () => {
    return(
        <div className={styles.PlayerList}>
            <Player 
                id={0}
                name="Teste"
                path="file:///home/adryan/Downloads/y2meta.com%20-%20EKBALLO%20-%20Erick%20Mathias%20&%20Alessandro%20Vilas%20Boas%20I%20ONE%20Sounds%20(Clipe%20Official)%20(128%20kbps).mp3"
            />
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
                console.log(this.player.current)
                this.player.current.pause();
            }
        })
    }

    render(){
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