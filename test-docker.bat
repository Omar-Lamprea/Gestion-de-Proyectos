docker container rm gestion-de-proyectos-back
docker stop gestion-de-proyectos-back
docker build -t gestion-de-proyectos-back .
docker run -p 9092:9092 --name gestion-de-proyectos-back gestion-de-proyectos-back