
export default (req, res) => {
  console.log(req)
  
  res.status(200).json({ name: req.cookies.a_name })
  
}
