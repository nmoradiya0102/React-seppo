import React from 'react'
import "./App.css"
const Main = () => {
  return (
    <>
    <main>
        <section class="home_banner d-flex align-items-center" id="ahome_banner">
            <div class="container">
                    <h1 class="home_banner_h1">Technology</h1>
                    <h1 class="home_banner_h1">& Visual Agency</h1>
                <div class="col-6">
                    <a href="javascript:void(0)"><div class="bannerbtn commonbutton btn rounded-pill mt-5">LEARN MORE</div></a>
                </div>
            </div>
        </section>
        <section class="home_services commonsec" id="ahome_services">
            <div class="crossbox d-flex align-items-center service_cross">
                <div class="cross1 d-flex justify-content-center align-items-center"><h3 class="crossh3">SERVICES</h3></div>
            </div>
            <div class="container">
                <div class="mixno">
                    <div class="ROW_1 row d-flex align-items-center justify-content-center">
                        <div class="col-4"><span class="back_no ms-5">1</span></div>
                        <div class="col-4"><span class="back_no ms-5">2</span></div>
                        <div class="col-4"><span class="back_no ms-5">3</span></div>
                    </div>
                    <div class="ROW_2 row d-flex align-items-center justify-content-around">
                        <div class="col-3 p-0 m-0 card hm_ser_card">
                             <h1 class="service_card_h1">Preciese</h1><p class="service_card_p1 mb-5">Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros.</p><div class="d-flex justify-content-start"><a href="javascript:void(0)"><div class="service_circle"><h6 class="mt-1 service_card_more">MORE</h6></div></a></div> </div>
                        <div class="col-3 p-0 m-0 card hm_ser_card">
                             <h1 class="service_card_h1">Support</h1><p class="service_card_p1 mb-5">Est sem integer suscipit enim quis dictum feugiat etiam pellentesque curabitur donec porttitor.</p><div class="d-flex justify-content-start"><a href="javascript:void(0)"><div class="service_circle"><h6 class="mt-1 service_card_more">MORE</h6></div></a></div> </div>
                        <div class="col-3 p-0 m-0 card hm_ser_card">
                             <h1 class="service_card_h1">Responsive</h1><p class="service_card_p1 mb-5">Donec vel est sem integer suscipit enim quis lorem posuere vestibulum metus tempor vitae.</p><div class="d-flex justify-content-start"><a href="javascript:void(0)"><div class="service_circle"><h6 class="mt-1 service_card_more">MORE</h6></div></a></div> </div>
                    </div>
                </div>
            </div>
        </section> 
        <section class="sec_about commonsec" id="asec_about">
            <div class="crossbox d-flex align-items-center about_cross">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">ABOUT</h3></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <p class="about_p1">WHO WE ARE</p>
                        <h2 class="about_h2">Live up to your creative potential.</h2>
                        <p class="about_p2">Code the energy hidden in matter citizens of distant epochs from which we spring drake equation perga inconspicuous motespatch clean designed code and energy matter.</p>
                        <div class="commonbutton btn rounded-pill mt-5">LEARN MORE</div>
                    </div>
                    <div class="col-6">
                        <img src="./image/about_01.jpg" alt="about_person" />
                    </div>
                </div>
            </div>
        </section>
        <section class="sec_client commonsec d-flex align-items-center" id="asec_client">
            <div class="container">
                <div class="client_banner_out">
                    <div class="client_banner">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                <div class="client_slider_main">
                                    <img class="sec_client_quote" src="./image/quotes_image (1).png" alt="quotationimage"/>
                                    <p class="sec_client_p mt-5 mb-5">Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada, pharetra eros id, malesuada diam vivamus eu gravida lacus nulla at consectetur quam vestibulum ac arcu sed.</p>
                                    <div class="d-flex justify-content-start align-items-center sec_client_flex">
                                        <div class="sec_client_flex1">
                                            <img src="./image/quote_image_03.jpg" alt="client1"/>
                                            <p class="sec_client_flex1p1 ms-5 me-3">Jane Williams</p>
                                            <p class="sec_client_flex1p2">DESIGNER</p>
                                            <div class="swiper-button-next"></div>
                                            <div class="swiper-button-prev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div class="swiper-slide">
                                                                <div class="client_slider_main">
                                    <img class="sec_client_quote" src="./image/quotes_image.png" alt="quotationimage"/>
                                    <p class="sec_client_p mt-5 mb-5">
                                        Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus lobortis, pulvinar lorem eu, porta elit suspendisse blandit porta magna, nec scelerisque urna viverra lorem gravida.</p>
                                    <div class="d-flex justify-content-start align-items-center sec_client_flex">
                                        <div class="sec_client_flex1">
                                            <img src="./image/quote_image_04.jpg" alt="client1"/>
                                            <p class="sec_client_flex1p1 ms-5 me-3">JOHN SMITH</p>
                                            <p class="sec_client_flex1p2">GURU</p>
                                            <div class="swiper-button-next"></div>
                                            <div class="swiper-button-prev"></div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div class="swiper-slide">
                                                                <div class="client_slider_main">
                                    <img class="sec_client_quote" src="./image/quotes_image.png" alt="quotationimage"/>
                                    <p class="sec_client_p mt-5 mb-5">
                                        Suspendisse enim erat, vehicula sit amet odio eu, congue gravida magna mauris a ex aliquam, ornare tortor sit amet, placerat ante aenean sit amet sem et metus elementum pellentesque.</p>
                                    <div class="d-flex justify-content-start align-items-center sec_client_flex">
                                        <div class="sec_client_flex1">
                                            <img src="./image/quote_image_03.jpg" alt="client1"/>
                                            <p class="sec_client_flex1p1 ms-5 me-3">Peter Hall</p>
                                            <p class="sec_client_flex1p2">CEO</p>
                                            <div class="swiper-button-next"></div>
                                            <div class="swiper-button-prev"></div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="sec_news" id="asec_news">
            <div class="crossbox d-flex align-items-center news_cross">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">NEWS</h3></div>
            </div>
                <div class="row justify-content-around align-items-center">
                    <div class="col-3"><a href="javascript:void(0)" class="news_a"><div class="news_img"><img src="./image/blog_img_01.jpg" alt="news_1"/></div></a><p class="sec_news_p1 mt-4 mb-4">How to write rogue mote of dust love</p><p class="sec_news_p2">Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...</p></div>
                    <div class="col-3"><a href="javascript:void(0)" class="news_a"><div class="news_img"><img src="./image/blog_img_02.jpg" alt="news_2"/></div></a><p class="sec_news_p1 mt-4 mb-4">Epochs encyclopa galactica stellar</p><p class="sec_news_p2">Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...</p></div>
                    <div class="col-3"><a href="javascript:void(0)" class="news_a"><div class="news_img"><img src="./image/blog_img_03.jpg" alt="news_3"/></div></a><p class="sec_news_p1 mt-4 mb-4">How to write rogue mote of dust love</p><p class="sec_news_p2">Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...</p></div>
                </div>
                <a href="javascript:void(0)" class="a_news_"><div class="d-flex justify-content-center news_btn_"><div class="bannerbtn commonbutton btn rounded-pill mt-5 news_btn_width">GO TO BLOG</div></div></a>
        </section>
        <section class="sec_portfolio commonsec" id="asec_portfolio">
            <div class="crossbox d-flex align-items-center portfolio_cross">
                <div class="cross1 d-flex justify-content-center align-items-center"><h3 class="crossh3">PORTFOLIO</h3></div>
            </div>
                <div class="row">
                    <div class="col-3 m-0 p-0"><div class="portfolio_img_out"><img src="./image/portfolio_item_01.jpg" alt="port1"/></div></div>
                    <div class="col-6 m-0 p-0"><div class="portfolio_img_out"><img src="./image/portfolio_item_02.jpg" alt="port2"/></div></div>
                    <div class="col-3 m-0 p-0"><div class="portfolio_img_out"><img src="./image/portfolio_item_03.jpg" alt="port3"/></div><div class="portfolio_img_out"><img src="../image/portfolio_item_04.jpg" alt="port4"/></div></div>
                </div>
        </section>
        <section class="sec_pricing commonsec" id="asec_pricing">
            <div class="crossbox d-flex align-items-center">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">PRICING</h3></div>
            </div>  
               <div class="container">
                <div class="row justify-content-between">
                    <div class="col-3 price_card p-5"><p class="price_p1">BASIC</p><p class="price_p2 m-0 p-0">$25</p><p class="price_p3">PER MONTH</p>
                    <ul class="m-0 p-0 price_ul">
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">Unlimited Support</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">5GB Server Space</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">2 Users per Project</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-xmark me-3"></i></div><div class="price_li_p"><p class="price_li_p2">Email Integration</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-xmark me-3"></i></div><div class="price_li_p"><p class="price_li_p2">Unlimited Download</p></div></div></li>
                    </ul>
                        <a href="javascript:void(0)" class="price_"><div class="btn rounded-pill price_btn mt-4">CHOOSE PLAN</div></a>
                        <div class="price_whitebox">1</div>
                    </div>
                    <div class="col-3 price_card p-5"><p class="price_p1">ADVANCED</p><p class="price_p2 m-0 p-0">$50</p><p class="price_p3">PER MONTH</p>
                    <ul class="m-0 p-0 price_ul">
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">Unlimited Support</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">5GB Server Space</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">2 Users per Project</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p2">Email Integration</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-xmark me-3"></i></div><div class="price_li_p"><p class="price_li_p2">Unlimited Download</p></div></div></li>
                    </ul>
                        <a href="javascript:void(0)" class="price_"><div class="btn rounded-pill price_btn mt-4">CHOOSE PLAN</div></a>
                        <div class="price_whitebox">2</div>
                    </div>
                    <div class="col-3 price_card p-5"><p class="price_p1">EXPERT</p><p class="price_p2 m-0 p-0">$75</p><p class="price_p3">PER MONTH</p>
                    <ul class="m-0 p-0 price_ul">
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">Unlimited Support</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">5GB Server Space</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p1">2 Users per Project</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p2">Email Integration</p></div></div></li>
                        <li class="price_li1"><div class="price_li_flex d-flex"><div class="price_li_icon"><i class="fa-solid fa-check me-2"></i></div><div class="price_li_p"><p class="price_li_p2">Unlimited Download</p></div></div></li>
                    </ul>
                        <a href="javascript:void(0)" class="price_"><div class="btn rounded-pill price_btn mt-4">CHOOSE PLAN</div></a>
                        <div class="price_whitebox">3</div>
                    </div>
            </div>
               </div>
        </section>
        <section class="sec_team" id="asec_team">
            <div class="crossbox d-flex align-items-center">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">TEAM</h3></div>
            </div>
            <div class="container">
                <div class="team1"><img src="./image/about_item_01.jpg" alt="team1"/></div>
                <div class="team2 p-5"><div class="team_data_wrap p-5 pb-2"><p class="about_p1 p-0 m-0">CEO</p><p class="team_p1 p-0 m-0">Marty Stone</p></div><p class="sec_news_p2 p-5 pt-0">Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.</p></div>
                <div class="team3 d-flex align-items-center justify-content-center"><div class="team_grp_i d-flex justify-content-center"><i class="m-1 fa-brands fa-facebook-f"></i><i class="m-1 fa-brands fa-twitter"></i><i class="m-1 fa-brands fa-instagram"></i><i class="m-1 fa-brands fa-vimeo-v"></i><i class="m-1 fa-brands fa-behance"></i></div></div>
                <div class="team4"><img src="./image/about_item_02.jpg" alt="team2"/></div>
                <div class="team5 p-5"><div class="team_data_wrap p-5 pb-2"><p class="about_p1 p-0 m-0">DESIGNER</p><p class="team_p1 p-0 m-0">John Williams</p></div><p class="sec_news_p2 p-5 pt-0">Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.</p></div>
                <div class="team6 d-flex align-items-center justify-content-center"><div class="team_grp_i d-flex justify-content-center"><i class="m-1 fa-brands fa-facebook-f"></i><i class="m-1 fa-brands fa-twitter"></i><i class="m-1 fa-brands fa-instagram"></i><i class="m-1 fa-brands fa-vimeo-v"></i><i class="m-1 fa-brands fa-behance"></i></div></div>
                <div class="team7"><img src="./image/about_item_03.jpg" alt="team3"/></div>
                <div class="team8 p-5"><div class="team_data_wrap p-5 pb-2"><p class="about_p1 p-0 m-0">DEVELOPER</p><p class="team_p1 p-0 m-0">Vanessa Doe</p></div><p class="sec_news_p2 p-5 pt-0">Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.</p></div>
                <div class="team9 d-flex align-items-center justify-content-center"><div class="team_grp_i d-flex justify-content-center"><i class="m-1 fa-brands fa-facebook-f"></i><i class="m-1 fa-brands fa-twitter"></i><i class="m-1 fa-brands fa-instagram"></i><i class="m-1 fa-brands fa-vimeo-v"></i><i class="m-1 fa-brands fa-behance"></i></div></div>
            </div>
        </section>
        <section class="sec_skills commonsec" id="asec_skills">
            <div class="crossbox d-flex align-items-center">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">SKILLS</h3></div>
            </div>
            <div class="container">
                <div class="row d-flex align-items-center mt-5">
                    <div class="col-6">
                    <p class="price_p3">OUR NUMBERS</p>
                    <p class="skills_p1">check our skills</p>
                    <p class="sec_news_p2 mwidth_skill">Code the energy hidden in matter citizens of distant epochs from which we spring drake equation perga inconspicuous motespatch clean designed code and energy matter.</p>
                    <a href="javascript:void(0)"><div class="commonbutton btn rounded-pill mt-4">LEARN MORE</div></a>
                     </div>
                    <div class="col-6">
                        <ul class="skill_main_ul">
                            <li class="skill_main_li">
                                <div class="row">
                                    <div class="col-3"><p class="skill_main_li_p1">75%</p></div>
                                    <div class="col-9"><p class="skill_main_li_p2">Creativity</p><div class="main_line"><div class="fill_line line_1"></div></div></div>
                                </div>
                            </li>
                            <li class="skill_main_li">
                                <div class="row">
                                    <div class="col-3"><p class="skill_main_li_p1">45%</p></div>
                                    <div class="col-9"><p class="skill_main_li_p2">Cooking</p><div class="main_line"><div class="fill_line line_2"></div></div></div>
                                </div>
                            </li>
                            <li class="skill_main_li">
                                <div class="row">
                                    <div class="col-3"><p class="skill_main_li_p1">90%</p></div>
                                    <div class="col-9"><p class="skill_main_li_p2">PhP</p><div class="main_line"><div class="fill_line line_3"></div></div></div>
                                </div>
                            </li>
                            <li class="skill_main_li">
                                <div class="row">
                                    <div class="col-3"><p class="skill_main_li_p1">65%</p></div>
                                    <div class="col-9"><p class="skill_main_li_p2">Marketing</p><div class="main_line"><div class="fill_line line_4"></div></div></div>
                                </div>
                            </li>
                            <li class="skill_main_li">
                                <div class="row">
                                    <div class="col-3"><p class="skill_main_li_p1">85%</p></div>
                                    <div class="col-9"><p class="skill_main_li_p2">Design</p><div class="main_line"><div class="fill_line line_5"></div></div></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="sec_milestone commonsec" id="asec_milestone">
            <div class="crossbox d-flex align-items-center">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">MILESTONES</h3></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <ul class="milestone_ul">
                            <li class="milestone_li">
                            <div class="milestone_li_main d-flex ">
                                <div class="col-3 me-5 d-flex justify-content-end"><p class="milestone_p1">135</p></div>
                                <div class="col-9 mt-4"><p class="milestone_p2">Terabytes of files uploaded</p><p class="milestone_p3">Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.</p></div>
                            </div>
                            </li>
                            <li class="milestone_li">
                                <div class="milestone_li_main d-flex ">
                                    <div class="col-3 me-5 d-flex justify-content-end"><p class="milestone_p1">74</p></div>
                                    <div class="col-9 mt-4"><p class="milestone_p2">Cups of coffee drinked per week</p><p class="milestone_p3">Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.</p></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="milestone_ul">
                            <li class="milestone_li">
                            <div class="milestone_li_main d-flex ">
                                <div class="col-3 me-5 d-flex justify-content-end"><p class="milestone_p1">67K</p></div>
                                <div class="col-9 mt-4"><p class="milestone_p2">Lines of CSS code wrote</p><p class="milestone_p3">Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.</p></div>
                            </div>
                            </li>
                            <li class="milestone_li">
                                    <div class="milestone_li_main d-flex ">
                                        <div class="col-3 me-5 d-flex justify-content-end"><p class="milestone_p1">389</p></div>
                                        <div class="col-9 mt-4"><p class="milestone_p2">Happy clients served this year</p><p class="milestone_p3">Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra.</p></div>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="sec_contact" id="asec_contact">
            <div class="crossbox d-flex align-items-center">
                <div class="cross1 d-flex justify-content-center align-items-center "><h3 class="crossh3">CONTACT</h3></div>
            </div>
            <div class="container">
                <div class="row mb-5 d-flex align-items-center">
                    <div class="col-6">
                    <p class="price_p3">CONTACT US</p>
                    <p class="skills_p1">Lets start Working</p>
                    <p class="sec_news_p2 mwidth_skill mb-5">Because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept one we are.</p>
                    <div class="contant_grp_i">
                        <a href="javascript:void(0)" class="a_contact_"><i class="m-1 fa-brands fa-facebook-f"></i></a>
                        <a href="javascript:void(0)" class="a_contact_"><i class="m-1 fa-brands fa-twitter"></i></a>
                        <a href="javascript:void(0)" class="a_contact_"><i class="m-1 fa-brands fa-instagram"></i></a>
                        <a href="javascript:void(0)" class="a_contact_"><i class="m-1 fa-brands fa-vimeo-v"></i></a>
                        <a href="javascript:void(0)" class="a_contact_"><i class="m-1 fa-brands fa-behance"></i></a>
                    </div>
                     </div>
                    <div class="col-6">
                        <form class="pt-5">
                            <input class="mb-4" type="text" placeholder="Name"/>
                            <input class="mb-4" type="email" placeholder="Email"/>
                            <input class="mb-4" type="text" placeholder="Subject"/>
                            <textarea placeholder="Message" cols="30" rows="7"></textarea>
                            <a href="javascript:void(0)"><div class="d-flex justify-content-center"><div class="commonbutton btn rounded-pill mt-5 contant_btn">SEND</div></div></a>
                        </form>
                    </div>
                </div>
            </div>
                <div class="map d-flex justify-content-center mt-5">
                    <div class="map_out"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2748992369866!2d-75.30011758509407!3d40.75597814286177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c469a1d71b8953%3A0x4fe85e80f58eaf4!2sKurt%20Dr%2C%20Eastlawn%20Gardens%2C%20PA%2018064!5e0!3m2!1sen!2sus!4v1676822799932!5m2!1sen!2sus" width="1170"  height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
        </section>
    </main>
    </>
  )
}

export default Main