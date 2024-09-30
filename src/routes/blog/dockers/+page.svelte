<script>
import {HdgWithIcon,P} from "$lib/cmp";
</script>

<div class="bg-gray-800 p-2 text-white min-h-screen w-full">
 
<HdgWithIcon>Dockers Basics</HdgWithIcon>

<P>
    Docker is a containerization platform that simplifies the process of developing, deploying, and running applications. It allows developers to package their applications and all their dependencies into a standardized unit called a container. These containers are isolated from each other and from the underlying infrastructure, making them portable and consistent across different environments. Docker uses container technology to virtualize the operating system, enabling applications to run in a lightweight and efficient manner.
</P>

<P>
    One of Docker's key benefits is its ability to streamline the development and deployment workflows. Developers can create containers that include everything their application needs to run, such as libraries, dependencies, and configuration settings. These containers can then be easily shared with team members or deployed to production environments, ensuring consistency and reducing compatibility issues. Docker also provides tools for managing and orchestrating containers at scale, making it a popular choice for building and deploying modern, cloud-native applications.    
</P>


<HdgWithIcon>Here is a typical Docker File</HdgWithIcon>


<pre class="flex justify-center  p-2 m-2">
<code class="bg-gray-100 text-gray-800 text-lg  rounded-md inline-block w-full">

        FROM node:21.6.2 AS build
        WORKDIR /app
        COPY package.json .
        COPY package-lock.json ./
        RUN npm install 
        COPY . ./
        RUN npm run build 
        EXPOSE 3000
        CMD ["node", "./build/index.js"]

</code>
</pre>


<HdgWithIcon>Docker Build Command</HdgWithIcon>

<p>The dot at the end is important.</p>

<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">
    sudo docker build -t docker_username/image_name:tag .
</code>

<HdgWithIcon>Docker Push</HdgWithIcon>

<p>
<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">
    sudo docker push docker_username/image_name:tag
</code>
</p>  

<HdgWithIcon>Docker Pull</HdgWithIcon>

<p>
<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">
    sudo docker pull docker_username/image_name:tag
</code>
</p>  

<HdgWithIcon>Docker Pull</HdgWithIcon>

<p>
<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">
    sudo docker run -d -p 8080:80 --name container_name image_name:tag
</code>
</p>  


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</div>