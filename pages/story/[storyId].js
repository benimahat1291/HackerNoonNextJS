import React from 'react'

const Story = ({story}) => {
    console.log("storyPage")
    console.log(story)
    return (
        <div className="story">
            <h1>Story</h1>
            
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const storyId = params.storyId;

    const response = await fetch(`http://localhost:3000/api/hacker-stories/${storyId}`);
    const story = await response.json();
    
    return {
        props: {
            story
        }
    }
}

export default Story;