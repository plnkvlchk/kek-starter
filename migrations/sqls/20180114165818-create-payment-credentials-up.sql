CREATE TABLE IF NOT EXISTS payment_credentials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    keeper VARCHAR(255) NOT NULL,
    expiration_date VARCHAR(255) NOT NULL,
    cvc VARCHAR(255) NOT NULL,
    number VARCHAR(255) UNIQUE NOT NULL
);
