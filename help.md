 # Taleem Server Project Admin Manual
 
    1. The connection string for connecting mongodb-atlas to server (local_mongo in given in docker-compose) 
        'mongodb://admin:password@local_mongo:27017/localDb?authSource=admin'
    
    2. in lib/util/config change API_URL for local and server 
        export const API_URL = 'http://localhost:5000';
        to
         export const API_URL = 'https://taleem.help/api';
    3. For Post-Man we should use server url as: 
        -   https://taleem.help/api/tcode
    4. docker-compose.yml : hopefully this file will not change, except some  environmental variables.

```bash   
services:
  ui:
    image: taleemhelp/ui:latest
    restart: unless-stopped
    ports:
      - "3000:3000"
  # keep the :latest images and keep latest updated
  api: 
    image: taleemhelp/api:latest 
    restart: unless-stopped
    ports:
      - "5000:5000"
    environment:
      - LOCAL_MONGO_URI=mongodb://admin:password@local_mongo:27017/localDb?authSource=admin
    depends_on:
      - local_mongo

  local_mongo:
    image: mongo:latest
    restart: unless-stopped
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```        
-----------------------------------------------------------------
        
    