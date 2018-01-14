CREATE TABLE IF NOT EXISTS contributions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    project_id UUID NOT NULL REFERENCES projects(id),
    sum DECIMAL(8, 4) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
    CHECK (sum > 0)
);
