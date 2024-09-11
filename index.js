const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = 3000;

// Configuração do multer para lidar com upload de arquivos
const upload = multer({ dest: 'uploads/' });

// Configuração do AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Função para fazer upload no S3
const uploadToS3 = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `videos/${Date.now()}_${file.originalname}`, // Nome do arquivo no S3
    Body: fileStream,
    ContentType: file.mimetype,
    ACL: 'public-read' // Para tornar o arquivo público
  };

  return s3.upload(params).promise();
};

// Rota para fazer upload do vídeo
app.post('/upload', upload.single('video'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    // Faz o upload do arquivo para o S3
    const result = await uploadToS3(file);

    // Apaga o arquivo local após o upload
    fs.unlinkSync(file.path);

    res.status(200).json({
      message: 'Upload realizado com sucesso',
      url: result.Location // URL pública do arquivo
    });
  } catch (error) {
    console.error('Erro ao fazer upload para o S3:', error);
    res.status(500).send('Erro ao fazer upload do arquivo');
  }
});

// Rota para o caminho raiz
app.get('/', (req, res) => {
  res.send('API ★ RETAKES MILIONÁRIOS ★ RODANDO - NO AR');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});