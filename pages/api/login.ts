import { NextApiRequest, NextApiResponse } from 'next';

/*
 * Login
 */
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email && password) {
      res.statusCode = 200;
      res.send({
        error: false,
        message: 'login successful!'
      });
    }
  } else {
    res.statusCode = 404;
    res.end('The API endpoint does not exist.');
  }
};
