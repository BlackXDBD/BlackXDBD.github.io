import Dots from "@/components/Dots";


export default (t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="https://wa.me/8801991030303" onclick="window.open('https://wa.me/8801991030303', '_blank'); return false;">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/rajon.png" alt="Rajon" class="hero__image">
                <a class="hero__status button button__primary" href="https://drive.google.com/file/d/16-cBxh_yFopMHZPzDcN0f_t5mSGpEfTA/view" onclick="window.open('https://drive.google.com/file/d/16-cBxh_yFopMHZPzDcN0f_t5mSGpEfTA/view', '_blank'); return false;">${t.status}</a>
                ${Dots({})}
            </div>
        </section>
    `;
    
};

