import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './vicentMolina.css'
import { ShareButtons } from '../Shared/ShareButtons/ShareButtons';
import { Image as ImageAntd } from 'antd';

export const VicentMolina = () => {

    return (
        <Layout>
            <div className="principalContainer bgBlog justify-centered mobile-flex-end display-column">
                <div className="generalContainer display-row">
                    <div className="subtext mobile">Interview with</div>
                    <div className="width-47 height-fit">
                        <div className="tituloVicentLeft">
                            Vicent
                        </div>
                    </div>
                    <div className="width-53 height-fit">
                        <div className="tituloVicentRight">
                            <div className="subtext">Interview with</div>
                            Molina
                        </div>
                    </div>
                </div>
                <div className="postDescription ">
                    <p className='text-normal gold'>Written By</p>
                    <p className='text-normal darkTxt width-100'>Javier Madero, Editorial Director of Voices of Leaders,Newsweek Special Report Representatives.</p>
                    <p className='text-normal darkTxt'>Mexico City, Mexico. April 5, 2022.</p>
                </div>
            </div>
            <div className="principalContainer height-fit">
                <div className="generalContainer">
                    <div className="width-100">
                        <p className='text-normal'>
                            Within the field of technology in Mexico –and in Latin America– it is well known that there is a great ability related to manufacturing (assembly, packaging, distribution, etc.). However, T7 International Group® is a Mexican company 100% oriented to the original development of valuable solutions to give continuity to the operation of companies of all kind with large technological infrastructures, telecommunications, networks and operation centers. The company has several success stories, not only in Mexico, but in other countries.
                            Voices of Leaders is a renowned editorial platform, associated with Newsweek, that gives forum for companies that are working on technology, innovation and sustainability through content and interviews with the protagonists who are generating changes in favor of our societies.
                            Voices of Leaders was in Mexico, led by Javier Madero, Editorial Director, who had an interesting conversation with our CEO, Vicent Molina.
                        </p>
                    </div>
                </div>
            </div>
            <div className="principalContainer height-fit padding-tops-0">
                <div className="generalContainer height-fit">
                    <ImageAntd preview={false} src='/assets/img/Vicent_Molina_7120_optimized.jpg'></ImageAntd>
                </div>

            </div>
            <div className="principalContainer height-fit ">
                <div className="generalContainer display-row">
                    <div className="width-50 padding-sides-4">
                        <h1 className='title-big'>Here is the most relevant of the interview.<br />Enjoy your reading!</h1>
                    </div>
                    <div className="width-50">
                        <p className='text-normal'>
                            <span className='text-orange'>VOL:</span> Knowing that COVID-19 has been a game changer for many companies and many industries across the globe, how did this pandemic affect your business model and operations over the last 2 years?<br />
                            <span className='text-orange'>VOL:</span> It was a really huge step in the general technology environment around the world. For example, the medical industry has changed, it really suffered a strong acceleration in the last two years because we needed to get more in touch with developers of the vaccines, laboratories and medical centers, etc. COVID-19 pandemic pushed everything in technology. I mean, not just medical, the first one and really important matter at that moment, but a lot of platforms and ways to communicate were launched. For example, in remote education, that grows really good and really fast. They didn&apos;t expect that accelerated growing. Regarding T7 Group® , we faced a real challenge because the demand was about three or four times more than in the past. We were working with the carriers in Mexico and some other countries, like USA and Germany, and the demand of solutions was really more exhaustive and more oriented to be in touch with everything: with all the sectors and with all the people involved in the technology stages.<br />
                            <span className='text-orange'>VOL:</span> How much did the company grow in 2021?<br />
                            <span className='text-orange'>VOL:</span> We grew 37% more than the past years. 2022 looks like it is going to be around a 40-45% growth.<br />
                            <span className='text-orange'>VOL:</span> What are some of the key plans or strategies that you have in place for 2022?<br />
                            <span className='text-orange'>VOL:</span> We have unique solutions and products because we have been developing the machine book, what means we are really working hard, understanding and predicting the behavior of all the machines in the world. As you have been experimenting with our… the machines we are touching everyday (tablets, phones, etc.) know more about us than anyone; and the idea is to get everything in touch to really create the machine book. We go to the machines, we ask to the machines. We know their behavior. We know how a machine is going to behave in the future, for example. So that&apos;s the idea. That&apos;s the real world we are looking for and we are working for.<br />
                            <span className='text-orange'>VOL:</span> So, you&apos;re using machine learning and Artificial Intelligence as well?<br />
                            <span className='text-orange'>VOL:</span> Yes. We have a group of data scientists, mathematics and physicist, electronics and engineers to create and develop everything with the machine learning, with the AI. We are creating really advanced algorithms to predict the behavior of machines because no one is looking at them.<br />
                            <span className='text-orange'>VOL:</span> How important is Research & Development for you?<br />
                            <span className='text-orange'>VOL:</span> Is the 98% of our business. Research & Development is what we are doing every day. It&apos;s really important. It&apos;s the main base of everything.<br />
                            <span className='text-orange'>VOL:</span> How easy or difficult is it for you to find the right talent, the engineers, the developers to cope with these requirements and this innovation that you are trying to do?<br />
                            <span className='text-orange'>VOL:</span> It is not easy because is not enough if you have the talent or the passion or the compromise, it&apos;s just all together. You have to be really skillset in the academy, besides a high mental capacity, but you have to have a real interest and passion to get the job done. It&apos;s not easy to combine all of these attributes. So, we are capturing the best skillset people coming from the academy, and we are putting the eye on them, developing them, giving them some steps including some difficult steps to try his mental skillset, which is really important also too. And at the end of the day, we are really creating a genius, which is specializing on a specific stage of the develop, of the research and everything. So, it is not easy because you have to have a lot of skillsets.<br />
                            <span className='text-orange'>VOL:</span> Mexico&apos;s population is quite young, with an average age of about 29 years old. How are Millennials and Generation Z driving this digital transformation in Mexico?<br />
                            <span className='text-orange'>VOL:</span> I&apos;m delighted with the new generation, you just need to push them to create and get the best of them because they already have everything related with technology. They don&apos;t know it, but it&apos;s easier for them to manage or to develop something, which is: they have been working with technology since they are in the kindergarten, or wherever, so it&apos;s easy.
                        </p>
                    </div>
                </div>
                <div className="space-5"></div>
                <div className="generalContainer">
                    <div className="commentComponent">
                        <div className="icon">
                            <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M55 0C40 1.6 34.2 9.40001 34.2 22.8V51.6H59.8V23.2H48V20.6C48 14 52.4 12.6 59.6 11.8L55 0ZM20.8 0C5.8 1.6 0 9.40001 0 22.8V51.6H25.6V23.2H13.8V20.6C13.8 14 18.2 12.6 25.4 11.8L20.8 0Z" fill="#9F8F7F" />
                            </svg>

                        </div>
                        <div className="comment">
                            “It is not easy because is not enough if you have the talent or the passion or the compromise, it&apos;s just all together. ”
                        </div>
                    </div>
                </div>
                <div className="generalContainer">
                    <ImageAntd preview={false} src='/assets/img/Vicent_Molina_7099_optimized.jpg'></ImageAntd>
                </div>
            </div>

            <div className="principalContainer ">
                <div className="generalContainer display-row">
                    <div className="width-50 padding-sides-4">
                        <h1 className='title-big'>T7 Group® is going to be the standard</h1>
                    </div>
                    <div className="width-50">
                        <p className='text-normal'>
                            <span className='text-orange'>VOL:</span> How important is your operations in Houston, Texas?<br />
                            <span className='text-orange'>VOL:</span> It&apos;s really important because all of our American customers are based in Houston. But we are developing just 10-15% of our technology and solutions there, because we have been finding here in Mexico more skillset people; it&apos;s easy to get them, easy to start to work with, easy in that sense. We haven&apos;t really found the way to get great talent in the US because we have to create them, we have to develop people there. It&apos;s important. All our American customers are based there, which is really great, and we have just a little bit development in USA.<br />
                            <span className='text-orange'>VOL:</span> Looking at the growth in the US and particularly Texas, that has had quite a growth over the last 2 years, what are some of your expectations out of your office in Houston? Where would you like to see the office become part of its percentage as a contribution towards T7 Group®?<br />
                            <span className='text-orange'>VOL:</span> We are putting our 20 cents in USA. We&apos;ve been looking at the big market, which is USA, and then to go to Europe, but we have to conquer the US market first. The growing has been really amazing because we started with one solution, one product for huge networks and now we have grown 5 times. That was 3 or 4 years ago. It has been a really fast development, and we are just talking about one customer. That has been really good and has been really nice to grow there. So, that&apos;s why we are putting our 20 cents.<br />
                            <span className='text-orange'>VOL:</span> How can a Mexican company like T7 Group® take better advantage of the USMCA?<br />
                            <span className='text-orange'>VOL:</span> It&apos;s a big door that was opened 20 years ago. Really big because we have everything, not in the next day, but in the same day. We have access to all the most advanced technology, satellites, cars, computers, everything. For us it has been really great to have that big door open because as a Latin American country, 28 years ago we were thinking in the US as another world, even when we are sharing the border and everything, we were looking at them like “wow, it&apos;s another league, it&apos;s another staff”, but now the boundaries have been dissolving and we feel more part of North America. As a Mexican it is really easy to access to technology, advance and things from the US, and the American people trust us, so is the perfect combination for us.<br />
                            <span className='text-orange'>VOL:</span> 5G became available in Mexico a little over a month ago, when it has been one the available for also a year now in other places. How can Mexico really push this digital transformation if it&apos;s not only implementing the latest technologies as a country? Where do you think that Mexico is lacking in terms of its infrastructure in telecoms?<br />
                            <span className='text-orange'>VOL:</span> The Mexican telecom industry is a different animal because even when we have all the opportunities, all the access and everything, this Mexican telecom company comes from 50-60 years ago, and they took a lot to learn, develop and put technology available for the people. They are still thinking as 50 years ago, some of them, but what happened? 7 years ago, came AT&T and changed the rules of the game, now there is competition, they had to react, because all the manufacture, all the capital services, everything needs really faster and secure communications. So, again, we need to get some competition to be in the way to get the services as we require. So, AT&T it&apos;s a really good example of how to push an economy, a sector, is really important. And in the sense that if the US is still interested to work on here, to operate here, not just for telecom but for another sectors, the Mexican market is going to be growing as a pair of the American one, as a mirror.<br />
                            <span className='text-orange'>VOL:</span> What is your personal message of confidence to the international community? Why invest in Mexico?<br />
                            <span className='text-orange'>VOL:</span> Because we are a really stable country, we have enough resources, we have the laws, we have certain stability of everything, more than other countries. We have everything: we have young people, that are looking for a job, we have the region, we have the strategy. Putting in the map, from here, from Mexico, you can go to Canada and from Mexico to Patagonia. It&apos;s a hub, really important hub of start wherever you want to start.<br />
                            <span className='text-orange'>VOL:</span> How would you like to see T7 Group® in the next 5 years?<br />
                            <span className='text-orange'>VOL:</span> I see T7 International Group® as one of the most important technology companies in the world. T7 Group® is going to be the standard, because if you want to make sure that your service, whatever your service is (retail, bank, or telecom, etc.), if T7 Group® is involved on it, we can assure that you will never have any downtimes. You will be in control for all your machines, and before whatever fails are going to happen, you are going to have the answer to beat it. We have this amazing platform, which is: Listen, Learn and Solve. We want to be the standard for everything, even the insurance. Believe me, even the insurance is going to be different if you have T7 Group® or not in your company. It&apos;s going to happen in 5 years.
                        </p>
                    </div>
                </div>
            </div>
            <div className="principalContainer height-fit">
                <ShareButtons/>
            </div>


        </Layout>
    )
}
