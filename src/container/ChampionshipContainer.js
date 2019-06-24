import React from "react";


var bgColors = { "Default": "#81b71a",
                    "Blue": "#295182", // rgb(41, 81, 130)
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#ffffff", // rgb(255, 255, 255)
                    "Yellow": "#fde100",// rgb(253, 225, 0)
                    "Black": "#000000",//rgb(0, 0, 0)

};

var ContainerStyle = {
    backgroundImage: "url(" + "https://medias.lequipe.fr/img-photo-jpg/-/1500000001175070/0:354,2500:1504-1305-600-75/8c9a7.jpg" + ")",
}

export default class ChampionshipContainer extends React.Component {
    render() {
        return (
            <main id='col-main'>
                <div class="Live container__content  layout">
                    <div class="container__main">
                        
                        <div class="Scoreboard__titles pageHeading">
                            <h1 class="heading-extra-margin-bottom">En direct : France (F) - Brésil (F), Coupe du monde féminine, Huitièmes de finale</h1>
                        </div>
                        <div data-v-18a8abd6="">
                            
                            <div data-v-18a8abd6="" class="Scoreboard is-finished">
                                <div data-v-18a8abd6="" class="Scoreboard__bg Scoreboard__bg--left" style={{ backgroundColor: bgColors.Blue }}></div>
                                <div data-v-18a8abd6="" class="Scoreboard__bg Scoreboard__bg--right" style={{ backgroundColor: bgColors.Yellow }}></div>
                                <div data-v-18a8abd6="" class="Scoreboard__bg Scoreboard__bg--image" style={{ backgroundImage: ContainerStyle.backgroundImage }}></div>
                                <div data-v-18a8abd6="" class="Scoreboard__content">
                                    <div data-v-18a8abd6="" class="Scoreboard__score">
                                        <div data-v-303ea924="" data-v-18a8abd6="" class="TeamScore">
                                            <div data-v-303ea924="" class="TeamScore__top">
                                                <a data-v-303ea924="" href="/Football/FootballFicheClub5410.html" class="Link TeamScore__team" aria-label="/Football/FootballFicheClub5410.html" style= {{ background: bgColors.Blue, color: bgColors.Red }}>
                                                    <div data-v-303ea924="" class="TeamScore__identity">
                                                        <div data-v-303ea924="" class="TeamScore__name TeamScore__team--winner">
                                                            France (F)
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                                <a data-v-303ea924="" href="/Football/match-direct/coupe-du-monde-feminine/2019/france-f-bresil-f-live/447824" class="Link TeamScore__data router-link-exact-active router-link-active" aria-label="/Football/match-direct/coupe-du-monde-feminine/2019/france-f-bresil-f-live/447824">
                                                    <div data-v-303ea924="" class="TeamScore__score TeamScore__score--ended"><span data-v-303ea924="" class="TeamScore__team--winner">2</span> <span data-v-303ea924="" class="TeamScore__score TeamScore__score--split">-</span> <span data-v-303ea924="" class="TeamScore__team--looser">1</span></div>
                                                    
                                                    
                                                </a>
                                                <a data-v-303ea924="" href="/Football/FootballFicheClub6819.html" class="Link TeamScore__team" aria-label="/Football/FootballFicheClub6819.html" style={{background: bgColors.Yellow, color: bgColors.Black}}>
                                                    <div data-v-303ea924="" class="TeamScore__identity">
                                                        <div data-v-303ea924="" class="TeamScore__name TeamScore__team--looser">
                                                            Brésil (F)
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-18a8abd6="" class="Scoreboard__infos">
                                        <div data-v-18a8abd6="" class="Scoreboard__infosItem">
                                            
                                        </div>
                                        <div data-v-18a8abd6="" class="Scoreboard__infosItem">
                                            
                                            <div data-v-18a8abd6="">
                                                a.p
                                            </div>
                                            
                                            
                                        </div>
                                        <div data-v-18a8abd6="" class="Scoreboard__infosItem">
                                            
                                        </div>
                                    </div>
                                    <div data-v-18a8abd6="" class="grid grid--face2face">
                                        <div data-v-18a8abd6="" class="grid__item is-active">
                                            
                                            <div data-v-18a8abd6="" class="grid__group">
                                                <div data-v-18a8abd6="" class="grid__content Scoreboard__goalList">
                                                    <div data-v-18a8abd6="" class="Scoreboard__goals">
                
                                                        V. Gauvin 52’
                                                        <img data-v-18a8abd6="" alt="" src="/img/icons/ico_but.svg" class="Scoreboard__icon"/></div>
                                                    <div data-v-18a8abd6="" class="Scoreboard__goals">
                
                                                        A. Henry 107’
                                                        <img data-v-18a8abd6="" alt="" src="/img/icons/ico_but.svg" class="Scoreboard__icon"/></div>
                                                </div>
                                                <div data-v-18a8abd6="" class="grid__content Scoreboard__goalList">
                                                    <div data-v-18a8abd6="" class="Scoreboard__goals"><img data-v-18a8abd6="" alt="" src="/img/icons/ico_but.svg" class="Scoreboard__icon"/> 64’ Thaisa
                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div data-v-18a8abd6="" class="grid__item Scoreboard__watch">
                                            <div data-v-18a8abd6="" class="grid__group">
                                                
                                            </div>
                                        </div>
                                        <div data-v-18a8abd6="" class="grid__item Scoreboard__expand">
                                            <div data-v-18a8abd6="" class="grid__group">
                                                <div data-v-18a8abd6="" class="grid__content">
                                                    1
                                                    <img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/>
                
                                                    
                                                </div>
                                                <div data-v-18a8abd6="" class="grid__content">
                                                    
                
                                                    <img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/> 4
                                                </div>
                                            </div>
                                            <div data-v-18a8abd6="" class="grid__group" style={{'display': 'none'}}>
                                                <div data-v-18a8abd6="" class="grid__content">
                                                    <div data-v-18a8abd6="">
                                                        W. Renard 35’
                                                        <img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/></div>
                                                </div>
                                                <div data-v-18a8abd6="" class="grid__content">
                                                    <div data-v-18a8abd6=""><img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/> 45’ Tamires
                                                    </div>
                                                    <div data-v-18a8abd6=""><img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/> 70’ Formiga
                                                    </div>
                                                    <div data-v-18a8abd6=""><img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/> 83’ B. Zaneratto
                                                    </div>
                                                    <div data-v-18a8abd6=""><img data-v-18a8abd6="" src="/img/icons/ico_carton_jaune.svg" class="Scoreboard__icon"/> 101’ Kathellen
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        
                        <div>
                            <div>
                                <div class="CommentsLive">
                                    <ul class="grid">
                                        <li class="CommentsLive__highlights">
                                            afficher uniquement les temps forts (27)
                                        </li>
                                        <li class="grid__item grid__item--full">
                                            
                                            <div class="grid__content">
                                                <div>
                                                    <div data-v-c10d3b58="">
                                                        <picture data-v-c10d3b58="" class="Image">
                                                            <source data-v-c10d3b58="" media="(min-width: 768px)" data-srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-416-246-75/9f5e5.jpg" srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-416-246-75/9f5e5.jpg"/>
                                                            <source data-v-c10d3b58="" media="(min-width: 480px)" data-srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-349-207-75/9f5e5.jpg" srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-349-207-75/9f5e5.jpg"/>
                                                            <source data-v-c10d3b58="" media="(min-width: 321px)" data-srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-250-148-75/9f5e5.jpg" srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-250-148-75/9f5e5.jpg"/>
                                                            <source data-v-c10d3b58="" media="(max-width: 320px)" data-srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-213-126-75/9f5e5.jpg" srcset="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-213-126-75/9f5e5.jpg"/>
                                                            <img data-v-c10d3b58="" data-src="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-213-126-75/9f5e5.jpg" alt="" class="Image__content Image--success" width="624" height="369" src="https://medias.lequipe.fr/img-photo-jpg/la-joie-collective-apres-le-but-d-amandine-henry/1500000001175124/0:189,2500:1664-213-126-75/9f5e5.jpg"/>
                                                            <div data-v-c10d3b58="" class="Image__overContent"></div>
                                                        </picture>
                                                        
                                                        <div data-v-c10d3b58="" class="Image__legend">
                                                            © L'Equipe
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>  
                                        </li>
                                        <li class="grid__item" style={{}}>
                                            <div class="CommentsLive__event" style={{}}>
                                                <div class="CommentsLive__time">
                                                    120'+2
                                                </div> <img src="/img/icons/live/ico_sifflet_fin_2mt.svg" height="24" class="CommentsLive__picto"/></div>
                                            <div class="grid__content">
                                                <div>
                                                    <h3 class="grid__title">Coup de sifflet final</h3>
                                                    
                                                    
                                                    <p class="grid__summary">Au bout du suspense, la France bat le Brésil 2-1 et accède aux quarts de finale du Mondial 2019 grâce au but libérateur de la capitaine Amandine Henry. Les Bleues sont loin d'avoir brillé mais ont eu du coeur dans un match où les Brésiliennes, convaincantes, ont craqué physiquement en prolongation.</p>
                                                </div>
                                            </div>   
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}