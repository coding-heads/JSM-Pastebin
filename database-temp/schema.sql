PRAGMA foreign_keys = ON;

CREATE TABLE
    "users" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "username" varchar,
        "email" nvarchar(255),
        "password" text(64),
        "created" datetime DEFAULT current_timestamp
    );

CREATE TABLE
    "comments" (
        "comment_id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "paste_id" INTEGER,
        "user_id" INTEGER,
        "text" text,
        "created" datetime DEFAULT current_timestamp,
        FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
        FOREIGN KEY ("paste_id") REFERENCES "pastes" ("id") ON DELETE CASCADE
    );

CREATE TABLE
    "pastes" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "user_id" INTEGER,
        "content" blob,
        "created" datetime DEFAULT current_timestamp,
        "private" BOOLEAN DEFAULT FALSE,
        FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE
    );

--TEST DATA HERE

--TEST DATE HERE

-- INSERT INTO

--     users (username, email, password)

-- VALUES (

--         "demo",

--         "demo@email.com",

--         "password"

--     );

-- INSERT INTO

--     users (username, email, password)

-- VALUES (

--         "dev",

--         "dev@email.com",

--         "password"

--     );

-- INSERT INTO

--     users (username, email, password)

-- VALUES (

--         "test",

--         "test@email.com",

--         "password"

--     );

-- INSERT INTO

--     pastes (user_id, content)

-- VALUES (1, "Test file data oooooh");

-- INSERT INTO

--     pastes (user_id, content)

-- VALUES (

--         1,

--         "Test second file for first user oooh"

--     );

-- INSERT INTO

--     pastes (user_id, content)

-- VALUES (2, "Test file data oooooh");

-- INSERT INTO

--     pastes (user_id, content)

-- VALUES (3, "Test file data oooooh");

-- INSERT INTO

--     comments (user_id, paste_id, text)

-- values (1, 2, "Looks good");
