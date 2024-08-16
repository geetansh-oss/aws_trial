const { S3Client, GetObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const dotenv = require("dotenv");

dotenv.config();

const s3Client = new S3Client ({
  region : "ap-south-1",
  credentials : {
    accessKeyId : process.env.accessKeyId,
    secretAccessKey : process.env.secretAccessKey
  }
});

async function GetObjectCommand(key){
  const command = new GetObjectCommand({
    Bucket : "geet-02-videos",
    key : key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function init(){

}