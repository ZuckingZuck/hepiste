const isSuperAdmin = (req, res, next) => {
    const user = req.user;
    if (!user || user.role !== "SuperAdmin") {
        return res.status(403).json({ error: 'Bu işlemi gerçekleştirmek için admin yetkilerine sahip değilsiniz' });
    }

    next();
};

module.exports = isSuperAdmin;