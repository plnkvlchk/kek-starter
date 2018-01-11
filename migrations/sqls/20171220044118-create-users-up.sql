CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    login VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    key VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT 'viewer',
    age INTEGER,
    country VARCHAR(255),
    password_attempts INTEGER DEFAULT 0,
    is_activated BOOLEAN DEFAULT false,
    is_blocked BOOLEAN DEFAULT false
);