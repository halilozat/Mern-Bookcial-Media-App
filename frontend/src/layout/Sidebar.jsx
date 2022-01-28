import React from 'react';
import SideLink from "../components/MenuComponent/sideBar/SideLink";
import "./sidebar.scss"

const content = [
    {
        name: "Ana Sayfa",
    },
    {name: "Sohbet",},
    {name: "Videolar",},
    {name: "Kitaplar",},
    {name: "Kitaplarım",},
    {name: "Filmler",},
    {name: "Diziler",},
    {name: "Notlarım",},
    {name: "Etkinlikler"},


];

const SideBar = () => {

    return (
        <div className={"sidebar"}>
            <div className={"sidebarElements"}>
                <div className="logo">
                    <img src={"!"} alt={"logo"}/>
                </div>
                <div className={"sideLinks"}>
                    <ul>
                        {

                            content.map(({name}) => (
                                <SideLink key={name} name={name}></SideLink>

                            ))

                        }
                    </ul>
                </div>
                <div className={"buttons"}>
                <button>Kitap Ekle</button>
                <button className={"btnDiziEkle"}>Dizi Ekle</button>
                <button>Film Ekle</button>
                </div>
            </div>
        </div>
    );
};


export default SideBar;

