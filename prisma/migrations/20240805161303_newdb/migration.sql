-- CreateTable
CREATE TABLE "contractors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "is_commerce" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "fans" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "instagram" TEXT,
    "is_follower" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contractor_id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "folder_url" TEXT,
    "description" TEXT NOT NULL,
    "is_private" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "events_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "contractors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "event_photos" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    CONSTRAINT "event_photos_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contractors_id_key" ON "contractors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fans_id_key" ON "fans"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fans_email_key" ON "fans"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fans_instagram_key" ON "fans"("instagram");

-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "event_photos_id_key" ON "event_photos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");
