import React from 'react'
import '../assets/style/style.css'
import { homeList } from "../components/homeList";

const Home = () => {
    return (
        <div>
            {homeList.map((homeitem => {
                return (
                    <div className={homeitem.homeItemClass}>
                        <div className={homeitem.homeTextClass}>
                            <h2 className="introTitle_37DTa">{homeitem.title}</h2>
                            <p className="subtitle introDesc_3RHGd">
                                {homeitem.subtitle}
                            </p>
                            {homeitem.button}
                            <button>Sign Up</button>
                        </div>
                        <div className="">
                            <img
                                className=""
                                src={homeitem.homeImgPath}
                                alt="Intro"
                            />
                        </div>
                    </div>
                )
            }))}

        </div>
    )
}

export default Home
