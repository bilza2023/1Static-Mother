
sudo docker run -d --name taleemMongo \
 -e MONGO_INITDB_ROOT_USERNAME=admin \
 -e MONGO_INITDB_ROOT_PASSWORD=12345 \
 -p 27017:27017 \
 -v mongodb_data:/data/db \
 mongo:latest