

module.exports = {
    handleError,
    notFound
}

function handleError(err, req, res, next) {
    console.error(err)
    if (res.headersSent) return next(err)
    res.status(500).json({ error: "Internal Error" })
}

function notFound (req, res) {
    res.status(404).json({ error: 'Not Found' })
}
