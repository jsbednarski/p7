import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Sprawdź, czy użytkownik jest zalogowany
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(500).json("Login to upload.");
  }

  // Zapytaj bazę danych Redis na podstawie adresu email, aby uzyskać liczbę pozostałych generacji
  const identifier = session.user.email;
  const windowDuration = 24 * 60 * 60 * 1000;
  const bucket = Math.floor(Date.now() / windowDuration);

  const usedGenerations =
    (await redis?.get(`@upstash/ratelimit:${identifier!}:${bucket}`)) || 0;

  // Może zwrócić wartość null i zwraca liczbę wykonanych przez użytkownika generacji, a nie liczbę pozostałych generacji

  // TODO: Przenieś to na stronę klienta przy użyciu date-fns
  const resetDate = new Date();
  resetDate.setHours(19, 0, 0, 0);
  const diff = Math.abs(resetDate.getTime() - new Date().getTime());
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) - hours * 60;

  const remainingGenerations = 5 - Number(usedGenerations);

  return res.status(200).json({ remainingGenerations, hours, minutes });
}
