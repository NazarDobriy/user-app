CREATE TABLE IF NOT EXISTS "Deal" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    sum FLOAT NOT NULL,
    tiket FLOAT NOT NULL,
    yield FLOAT NOT NULL,
    sold FLOAT NOT NULL,
    "daysLeft" INT NOT NULL,
    "imgPath" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO "Deal" (title, sum, tiket, yield, sold, "daysLeft", "imgPath") VALUES
('The Marina Torch', 6500000, 60000, 9.25, 75, 150, 'http://localhost:5000/images/img_1.png'),
('HHHR Tower', 6500000, 60000, 9.25, 75, 150, 'http://localhost:5000/images/img_2.png'),
('Ocean peaks', 6500000, 60000, 9.25, 75, 150, 'http://localhost:5000/images/img_3.png'),
('AI Yaqoub Tower', 6500000, 60000, 9.25, 75, 150, 'http://localhost:5000/images/img_4.png');
