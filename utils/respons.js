module.exports = {
    serverError(messages, res, flag = 500) {
        res.status(500).json({
            success: false,
            flag,
            messages
        })
    },
    success(message, res, data, flag = 200) {
        res.status(flag).json({
            success: true,
            flag,
            message,
            result: data
        })
    },

    error(message, res, flag = 500) {
        res.status(flag).json({
            success: false,
            flag,
            message
        })
    },
    notFound(message, res, flag = 404) {
        res.status(404).json({
            success: false,
            flag,
            message
        })
    },
    invalidInput(message, res, flag = 400) {
        res.status(400).json({
            success: false,
            flag,
            message
        })
    },
    unauthorized(message, res, flag = 401) {
        res.status(401).json({
            success: false,
            flag,
            message
        })
    },
    forbidden(message, res, flag = 403) {
        res.status(403).json({
            success: false,
            flag,
            message
        })
    },
    conflict(message, res, flag = 409) {
        res.status(409).json({
            success: false,
            flag,
            message
        })
    },
    attachment(res, filename, contentType) {
        res.writeHead(200, {
            "Content-Type": contentType,
            "Content-Disposition": "attachment; filename=" + filename,
        });
    }

}
