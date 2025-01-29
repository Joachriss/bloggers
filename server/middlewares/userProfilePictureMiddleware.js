import multer from 'multer';
import path from 'path';

const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images/users/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
    }
});

const userUpload = multer({storage: userStorage});
export default userUpload;