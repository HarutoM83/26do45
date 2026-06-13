//プロフィール情報定義
export interface Profile{
    name: string//名前漢字表記
    nameEn: string//名前ローマ字表記
    role: string//ロール
    school: string//学校名
    department: string//専攻名
    graduationYear: string//卒業年度
    bio: string//自己紹介文
    motto: string//モットー、座右の銘
    avatar: string//顔写真画像のパス
    links:{
        github:string//githubのURL
        twitter:string|null//X（旧Twitter)
        email:string//メールアドレス
    }
}
//スキル
export interface Skill{
    name:string
    version: string|null//バージョン情報(null許容)
    level:number//スキルレベル
    category:string//カテゴリ
    capabilities:string[]//できること
    note:string|null//実装経験
}
//詳細要素情報
export interface Venus{
    name:string//名前
    data:string//日時
}
//作品カード
export interface Work{
    id:number//連番
    title:string//タイトル  
    genre: string//ジャンル
    category:string //カテゴリ
    thumbnail:string//サムネイル
    screenshots:string[]//スクリーンショット
    description:string//作品の概要説明
    tags:string[]//タグ
    platform:string[]//プラットフォーム
    period:string//期間
    team:string//製作チーム情報
    role:string//実装担当箇所
    github:string//GithubのURL
    link:string|null//ゲーム公開リンク
    venues:Venus[]//出展・公開先
    techPoints:string|null//技術ポイント
    designNotes:string|null//設計上の工夫
    implementationTheme:string|null//実装解説テーマ
    troubleshooting:string|null//詰まった問題と解決策
    performance:string|null//パフォーマンス改善の工夫
}
export interface GameJam{
    name:string//名前
    data:string //日時
    theme:string//情報
    description:string//作品詳細
    platform:string[]//プラットフォーム
    role:string//担当箇所
    team:string//チーム情報
    result:string|null//結果
    url:string|null// URL
    reflection:string//学び・振り返り
}

export type CertStatus = "取得済み"|"受験予定"|"取得予定"|"学習中";

//資格情報
export interface Certification{
    name:string//資格名
    data:string//日時
    category:string//カテゴリ
    score:string|null//スコア
    status:CertStatus//ステータス
}
//年表
export interface TimelineItem{
    year:string//年
    event:string//イベント
}

export const profile: Profile ={
    name: "松田 晏大",
    nameEn: "Haruto Matsuda",
    role: "",
    school: "京都デザイン&テクノロジー専門学校",
    department: "ゲームプログラマー専攻",
    graduationYear: "2027年度3月卒業見込み",
    bio: "",
    motto: "心頭滅却すれば火もまた涼し",
    avatar: "",
    links: {
        github: "https://github.com/HarutoM83",
        twitter: null,
        email: ""
    }
}

export const skills: Skill[]=[
    {
        name: "Unity",
        version: null,
        level: 0,
        category: "",
        capabilities: [],
        note: null
    }
]

//作品カードの内容
export const works: Work[]=[
    {
        id: 0,
        title: "HOLE",
        genre: "2Dアクション",
        category: "",
        thumbnail: "",
        screenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: null,
        venues: [],
        techPoints: null,
        designNotes: null,
        implementationTheme: null,
        troubleshooting: null,
        performance: null
    }//配列ごとに作品情報を作ってく
]

export const gamejam: GameJam[]=[
    {
        name: "ええかんじのゲームガッカイ",
        data: "",
        theme: "",
        description: "",
        platform: [],
        role: "",
        team: "",
        result: null,
        url: null,
        reflection: ""
    }
]

export const certification:Certification[]=[
    {
        name: "Mos Excel 2019 一般",
        data: "2025年2月",
        category: "国際資格",
        score: null,
        status: "取得済み"
    }
]

export const timeline: TimelineItem[]=[
    {
        year: "",
        event: ""
    }
]