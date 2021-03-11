export default (req, res) => {
    res.setHeader("Set-Cookie", "a_name=JONG;Max-Age=0;HttpOnly,Secure")
        res.statusCode = 200;
        res.json({ msg: "ok" })
}