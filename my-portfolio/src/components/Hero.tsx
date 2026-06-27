import { profile } from "../data/portfolio";
import SafeImg from "./SafeImg";

export default function Hero(){
    return(
        <section className="hero section"id="hero">
            <div className="container">
                <div className="avater-placetolder">
                    <p className="hero-eyebrow">Portfolio</p>

                    <h1 className="hero-name">
                        <SafeImg
                        src={profile.avater}
                        alt={profile.name}
                        fallback={profile.nameEn.charAt(0)}
                        />
                        <span className="gradiemt">{profile.name}</span>
                        <span className="heo-name-en">{profile.nameEn}</span>
                    </h1>

                    <p className="hero-role">{profile.role}</p>

                    {profile.motto && (
                    <blockquote className="hero-motto">
                        <span className="hero-motto-mark"></span>
                        {profile.motto}
                        <span className="hero-motto-mark"></span>
                    </blockquote>)}

                    <div className="hero-actions">
                        <a href="#work"className="btn btn-primary">制作物を見る </a>
                        <a href="#contact"className="btn btn-primary">連絡する </a>
                    </div>

                </div>
            </div>
            <div className="hero-scroll">Scroll</div>
        </section>
    )
}