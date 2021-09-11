import React from 'react'
import { useState } from "react"
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EcoIcon from '@material-ui/icons/Eco';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const Story = ({ storyById }) => {
    console.log("storyPage")

    const [story, setStory] = useState(storyById)
    console.log(story)

    return (
        <article className="story">
            {/* _____________________________________________ STORY HEADER ____________________________________________  */}

            <div className="story__header">
                <h1>{story.title}</h1>
            </div>
            {/* _____________________________________________ STORY DETAILS ____________________________________________  */}


            <div className="story__details">
                <div className="story__detailsInfo">
                    <p className="story__detailsInfoDate">September 10th 2021</p>
                    <p className="story__detailsInfoType"><span><EcoIcon /></span>new story</p>
                    <p className="story__detailsInfoMark"><TurnedInNotIcon /></p>
                </div>
                <div className="story__detailsRatings">
                    <img src="https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75" alt="linkbar" />
                    <h2>12</h2>
                    <div className="story__detailsRatingIcons">
                        <button className="heart"><FavoriteIcon style={{ fontSize: "1.8rem" }} /></button>
                        <button className="energy"><OfflineBoltIcon style={{ fontSize: "1.8rem" }} /></button>
                        <button className="boat"><DirectionsBoatIcon style={{ fontSize: "1.8rem" }} /></button>
                        <button className="money"> <LocalAtmIcon style={{ fontSize: "1.8rem" }} /></button>
                    </div>
                </div>
            </div>
            {/* _____________________________________________ STORY MAIN IMG ____________________________________________  */}


            <div className="story__mainImgContainer">
                <img src={story.img} alt={story.img} />
            </div>

            {/* _____________________________________________ STORY MAIN____________________________________________  */}


            <div className="story__main">
                <div className="story__mainAuthor">
                    <img src={story.authorImg} alt={story.authorImg} />
                    <div className="story__mainAuthorInfo">
                        <h4>{story.authorhandle}</h4>
                        <p>{story.author}</p>
                    </div>
                    <p>Freelance software developer and writer with a background in AI, crypto, and quant finance.</p>
                    <div className="story__mainAuthorSocialIcons">
                        <button><LinkedInIcon /></button>
                        <button><TwitterIcon /></button>
                        <button><GitHubIcon /></button>
                    </div>
                </div>

                <div className="story__mainArticle">
                    {story.mainArticle.map((item) => (
                        <div className="story__mainArticleItem" key={item}>
                            <p>{item}</p>
                            <div className="dash"></div>
                            <div className="story__artileIcons">
                                <button className="heart"><FavoriteIcon style={{ fontSize: "1.5rem" }} /></button>
                                <button className="energy"><OfflineBoltIcon style={{ fontSize: "1.5rem" }} /></button>
                                <button className="boat"><DirectionsBoatIcon style={{ fontSize: "1.5rem" }} /></button>
                                <button className="money"> <LocalAtmIcon style={{ fontSize: "1.5rem" }} /></button>
                            </div>

                        </div>
                    ))}
                    {story.subArticles.map((article) => (
                        <div className="story__subArticle" key={article.title}>
                            <h2>{article.title}</h2>
                            {article.articles.map((item) => (
                                <>
                                    {item.length === 1 ?
                                        <div className="story__mainArticleItem" key={item}>
                                            <p>{item}</p>
                                            <div className="dash"></div>
                                            <div className="story__artileIcons">
                                                <button className="heart"><FavoriteIcon style={{ fontSize: "1.5rem" }} /></button>
                                                <button className="energy"><OfflineBoltIcon style={{ fontSize: "1.5rem" }} /></button>
                                                <button className="boat"><DirectionsBoatIcon style={{ fontSize: "1.5rem" }} /></button>
                                                <button className="money"> <LocalAtmIcon style={{ fontSize: "1.5rem" }} /></button>
                                            </div>
                                        </div>
                                        :
                                        <>
                                            {item[0] === "quote" ?
                                                <div className="story__articleQuote">
                                                    <p>{item[1]}</p>
                                                </div>
                                                :
                                                <div className="story__articleImg">
                                                    <img src={item[1]} alt={item[2]} />
                                                </div>

                                            }
                                        </>
                                    }
                                </>
                            ))}
                        </div>
                    ))}
                </div>

            </div>


        </article>
    )
}

export const getServerSideProps = async ({ params }) => {
    const storyId = params.storyId;

    const response = await fetch(`http://localhost:3000/api/hacker-stories/${storyId}`);
    const storyById = await response.json();

    return {
        props: {
            storyById
        }
    }
}

export default Story;