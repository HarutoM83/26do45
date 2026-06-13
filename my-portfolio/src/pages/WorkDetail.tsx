import { Link, useParams } from "react-router-dom";
import { works } from "../data/portfolio";

export default function WorkDetail(){
    const {id} =useParams()
    const work=works.find((w)=> w.id === Number(id))

    if(!work) return(
        <div className="wd-page">
            <div className="container">
                <Link to="/#works" className="wd-back">
                    作品一覧に戻る
                </Link>
            </div>
        </div>
    )
}