/*
  Warnings:

  - A unique constraint covering the columns `[examId,level]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assessment_examId_level_key" ON "Assessment"("examId", "level");
