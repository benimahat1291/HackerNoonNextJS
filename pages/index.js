import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Home() {
    return (
        <div className="topStories">

            <main>
                <header className="topStories__header">
                    <h2>#hackernoon-top-story stories</h2>
                    <small>(4,911 results)</small>
                </header>
                <div className="topStories__subheader">
                    <p>Want the Top Headlines on Hacker Noon Delivered to Your Inbox, Weekly?</p>
                    <div>
                        <p>➚ Create your free account and start getting The Tech Brief:</p>
                        <p>A Curated Round-Up of the Best Stories Published on Hacker Noon, Personalized To Suit Your Interests. ➚</p>
                        <button>Subscribe <span><ArrowForwardIcon/></span></button>
                    </div>



                </div>
            </main>

        </div>
    )
}
