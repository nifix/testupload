const port = 3000
const cors = require('cors')
const express = require('express')
const multer = require('multer')
const storage = multer.diskStorage({
	destination: './files-uploaded',
	filename: function(req, file, cb) {
		cb(null, file.originalname)
	}
})

const upload = multer({ storage: storage });

const app = express();

app.use(cors())



app.post('/', upload.single("file"), (req, res) => {
	console.log(req);

	console.log('---');

	console.log('type', req.body.type);
	console.log('commentaire', req.body.commentaire);

	console.log('file', req.file);

	res.send();
})

app.listen(port, () => console.log('Serveur lancé port 3000'))