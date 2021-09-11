import {stories} from "../../../storyDB"

const allStroies = async (req, res) => {
    const httpMethod = req.method;
    
    switch(httpMethod) {
        case "GET": 
            res.status(200).json(stories)
            break;

        default: 
            res.setHeader("allow", ["GET"])
            res.status(405).end(`Method ${httpMethod} not supported`)
    }


}

export default allStroies;