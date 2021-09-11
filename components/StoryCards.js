import React from 'react'
import Link from "next/link"

const StoryCards = ({ stories }) => {
    console.log("storycards")
    console.log(stories)
    return (
        <div className="storyCards">
            {stories.map((story) => (
                <article className="storyCard">
                    <div className="storyCard__header">
                        <Link href={`./story/${story.id}`}><a><h2>{story.title}</h2></a></Link>
                    </div>
                    <div className="storyCard__imgWrapper">
                        <img src={story.img} alt={story.img}></img>
                    </div>

                    <div className="storyCard__Info">
                        <div className="storyCard__InfoAuthor">
                            <img src={story.authorImg}/>
                            <div>
                                <p>{story.authorhandle}</p>
                                <p>{story.author}</p>
                            </div>

                        </div>
                        <div className="storyCard__InfoStory">
                            <p>3mins</p>
                            <p>09/10/21</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default StoryCards
