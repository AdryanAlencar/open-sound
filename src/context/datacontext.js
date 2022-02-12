import React from "react";
const {app} = window.require('@electron/remote');

const dataPath = app.getPath("userData");


const DataContext = React.createContext("");

const template = () => {
    const fs = window.require("fs");

    if (!fs.existsSync(`${dataPath}/tracks`)) {
        fs.mkdir(`${dataPath}/tracks`, (e) => {
            console.log(e)
        })
    };

    return [
        {
            id: 1,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                },
            ]

        },
        {
            id: 2,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 3,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 4,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 5,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 6,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 7,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 8,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
        {
            id: 9,
            name: "Collection",
            tracks: [
                {
                    id: 1,
                    name: "Track de Teste",
                    path: `file://${dataPath}/tracks/default.mp3`
                }
            ]
        },
    ]
};

class UseDataContext extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            collections: [],
            currentCollection: template()[0]
        }
    }

    componentDidMount(){        
        var storage = window.localStorage.getItem("collections");
        storage = storage == null ? JSON.stringify(template()) : storage;

        const collections = JSON.parse( storage == null ? template() : storage);

        window.localStorage.setItem("collections", JSON.stringify(collections))
        
        this.setState({
            collections,
            currentCollection: collections[0]
        })
    }

    updateValues(params) {
        this.setState({params})
    }

    render(){

        return(
            <DataContext.Provider 
                value={{
                    values: this.state,
                    updateValues: this.updateValues
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }

}

export { UseDataContext, DataContext }