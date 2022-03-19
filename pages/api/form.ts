export default function handler(req, res) {
    const body = req.body
    res.status(200).json({lat: body.lat, lng: body.lng })
}
