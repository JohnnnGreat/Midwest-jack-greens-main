import axios from "axios";

export default async function instagram(req, res) {
  try {
    if (req.method === "GET") {
      const response = await axios.get(
        `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_API}`
      );

      res.status(200).json({ data: response.data });
    }
  } catch (error) {
    console.log(error);
  }
}
