import { NextApiRequest, NextApiResponse } from 'next';

/*
 * Login
 */
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (email) {
      res.statusCode = 200;
      res.send({
        error: false,
        message: 'reset successful!'
      });
    }
  } else {
    res.statusCode = 404;
    res.end('The API endpoint does not exist.');
  }
};
