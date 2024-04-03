const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoSanitize = require('mongo-sanitize');
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const sanitizedEmail = mongoSanitize(email);
        const sanitizedUserName = mongoSanitize(username);

        const existingUser = await User.findOne({ $or: [{ email: sanitizedEmail }, { username: sanitizedUserName }] });
        if (existingUser) {
            return res.status(400).json({ error: 'Bu e-posta veya kullanıcı adı zaten kayıtlı' });
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ error: 'Şifre yeterince güvenli değil' });
        }

        const newUser = new User({
            username: sanitizedUserName,
            email: sanitizedEmail,
            password: await bcrypt.hash(password, 10),
        });

        await newUser.save();


        const userInfo = {
            username: newUser.name,
            email: newUser.email,
            role: newUser.role,
        }

        res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi', user: userInfo, });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Kullanıcı kaydı sırasında bir hata oluştu' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const sanitizedEmail = mongoSanitize(email);

        const user = await User.findOne({ email: sanitizedEmail });
        if (!user) {
            return res.status(401).json({ error: 'Geçersiz e-posta veya şifre' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Geçersiz e-posta veya şifre' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        res.status(200).json({
            message: 'Başarıyla giriş yaptınız',
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Giriş sırasında bir hata oluştu' });
    }
};

module.exports = { createUser, loginUser };
