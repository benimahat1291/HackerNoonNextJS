import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {
    // const data = JSON.parse(req.body)

    switch (req.method) {
        case "POST":
            const data = JSON.parse(req.body)
            const createRating = await prisma.ratings.create({ data })
            break;
        case "DELETE":
            const deletedRatings = await prisma.ratings.deleteMany({})
            res.json(deletedRatings)
            break;
        case "PATCH":
            const updatedRatingData = JSON.parse(req.body)
            const updateRating = await prisma.ratings.update({
                where: {
                    id: updatedRatingData.id
                },
                data: updatedRatingData,
            })
        case "GET":
            const allRatings = await prisma.ratings.findMany({})
            res.json(allRatings)
            break;
        default:
            res.setHeader("allow", ['GET', 'PATCH', "DELETE", "POST"]);
            res.status(405).end(`Method ${req.method} not allowed`).catch(err => console.log(err))

    }


};