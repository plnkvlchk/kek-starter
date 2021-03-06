CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    needed_sum DECIMAL(14, 2) NOT NULL,
    collected_sum DECIMAL(14, 2) NOT NULL,
    category VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    media_urls VARCHAR(255)[],
    min_sum_to_donate DECIMAL(14, 2) NOT NULL DEFAULT 0,
    owner_id UUID NOT NULL,
    is_published BOOLEAN NOT NULL DEFAULT false
);
