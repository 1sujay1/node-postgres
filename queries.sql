create table products(
    id serial primary key,
    details JSONB,
    createdDate TIMEStamp default NOW(),
    updatedDate Date Default  current_date
)

CREATE TABLE my_table (
    id serial PRIMARY KEY,
    event_date DATE DEFAULT current_date
);

Insert into products(
    details
)values( '{"name":"raju","age":90}')

Select * from products

CREATE TABLE metadata (
    id serial PRIMARY KEY,
    attributes HSTORE
);

INSERT INTO metadata (attributes) VALUES ('"color" => "red", "weight" => "10kg"');

create table orders(
    id serial primary key,
    items text[]
)

Insert into orders(
    items
)values(Array['ab','cd'])

select * from orders