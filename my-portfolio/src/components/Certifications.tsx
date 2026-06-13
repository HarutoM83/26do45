import { certification, type Certification, type CertStatus } from "../data/portfolio"

const STATUS CONFIG:
    Record<CertStatus,{color:string;bg:string;border:string}>={
        '取得済み':{color:'#4ADE80',bg:'rgba(74,222,128,0.1',border:'rgba(74,222,128,0.1'},
        '受験予定':{color:'',bg:'',border:''},
        '取得予定':{color:'',bg:'',border:''},
        '学習中':{color:'',bg:'',border:''},
    }

function StatusBadge({status} : {status: CertStatus}){
    const cfg = STATUS_CONFIG[status]
    return(
        <span 
        className="cert-status"
        style = {{color:cfg.color,background:cfg.bg,borderColor:cfg.border}}
        >
            {status}
        </span>
    )
}

function CertRow({cert} : {cert: Certification}){
    return(
        <div className="cert-row">
            <div className="cert-icon"></div>
            <div className="cert-main">
                <div className="cert-name-row">
                    <p className="cert-name-row">(cert.name)</p>
                    {cert.score &&
                        <span className="cert-score">{cert.score}</span>
                    }
                </div>
                <p className="cert-data">{cert.data}</p>
            </div>
            
        </div>
    )
}

export default function Certifications(){
    return(
        <section className="section"id="certifications">
            <div className="container">
                <h2 className="section-title">
                    <span>Certificaions</span>
                </h2>
                <p className="section-sub">資格・実績</p>
                <div className="cert-list">
                    {certifications.lenght > 0 &&
                    certifications.map((cert,i)=>(
                        <CertRow key={i} cert={cert}/>
                    ))}

                </div>
            </div>
        </section>
    )
}