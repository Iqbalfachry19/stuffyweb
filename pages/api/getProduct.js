import { connectToDatabase } from '../../util/mongodb';

export default async function getProduct(req, res) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection('product')
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.status(200).json(products);
}
