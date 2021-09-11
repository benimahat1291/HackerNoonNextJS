import { stories } from "../../../storyDB";

const StoryById = async (req, res) => {
    const httpMethod = req.method;
    const storyId = req.query.storyId 
    const result = stories.filter((story) => story.id === parseInt(storyId));

    switch (httpMethod) {
        case "GET":
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({ message: `Job with Id: ${jobId} not found` })
            };
            break;
        // case "PUT": 
        //   //UPDATE JOB
        //     res.status(200).json({
        //         title,
        //         company,
        //         location,
        //     })
        //     break;
            
        default:
            res.setHeader("allow", ['GET', 'PUT']);
            res.status(405).end(`Method ${httpMethod} not allowed`)
    }
}

export default StoryById