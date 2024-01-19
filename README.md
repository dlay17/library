# library
rewriting a library for file share

to build both the fronend, backend, and db run:
docker-compose -f docker-compose.yml up --build
ctrl+c out,

run:
docker-compose run web rails db:create
docker-compose run web rails db:migrate

Once the images are created, you can run:
docker-compose up

React is running on http://localhost:8000/
Rails is running on http://localhost:3000/
