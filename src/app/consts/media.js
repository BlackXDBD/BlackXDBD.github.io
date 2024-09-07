import proxy from "../proxies/media"

const media = {
    discord: {
        id: "1212756156183879700",
        tag: "Rajon",
    },
    stackOverflow: {
        id: "4950940",
        name: "rajonmn",
    },
    github: "Rajonmn",
    figma: "Rajonmn",
    replit: "Rajonmn",
    codewars: "Rajonmn",
    devTo: "Rajonmn",
    cssBattle: "Rajonmn",
    codepen: "Rajonmn",
    dribble: "Rajonmn",
    email: "rajonmn.g@gmail.com",
    wa: {
        id: ".me/8801991030303",
    }

}

export default new Proxy(media, proxy);

