export default (req, res) => {
  console.log(req)
    res.status(200).json({ id: req.query.id })
  }
  