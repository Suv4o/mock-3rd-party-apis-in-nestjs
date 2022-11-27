import { rest } from 'msw';

const BASE_DOMAIN = 'https://api.example.com';

export const getGoodMorningWorld = () => {
  return rest.get(BASE_DOMAIN + '/good-morning-world', (req, res, ctx) => {
    const authHeader = req.headers.get('authorization');
    const [bearerHeader, bearerToken] = authHeader
      ? authHeader?.split(' ')
      : [];

    if (!authHeader || bearerHeader !== 'Bearer' || !bearerToken) {
      return res(
        ctx.status(401),
        ctx.json({
          status: 'error',
          message: 'Unauthorized',
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ message: 'Good Morning World!' }));
  });
};

export const getGoodMorningPerson = () => {
  return rest.get(BASE_DOMAIN + '/good-morning', (req, res, ctx) => {
    const authHeader = req.headers.get('authorization');
    const [bearerHeader, bearerToken] = authHeader
      ? authHeader?.split(' ')
      : [];

    const person = req.url.searchParams.get('person');

    if (!authHeader || bearerHeader !== 'Bearer' || !bearerToken) {
      return res(
        ctx.status(401),
        ctx.json({
          status: 'error',
          message: 'Unauthorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: 'Good Morning ' + person }),
    );
  });
};

export const createMessage = () => {
  return rest.post(BASE_DOMAIN + '/create-message', (req, res, ctx) => {
    const authHeader = req.headers.get('authorization');
    const [bearerHeader, bearerToken] = authHeader
      ? authHeader?.split(' ')
      : [];

    if (!authHeader || bearerHeader !== 'Bearer' || !bearerToken) {
      return res(
        ctx.status(401),
        ctx.json({
          status: 'error',
          message: 'Unauthorized',
        }),
      );
    }

    return res(
      ctx.status(201),
      ctx.json({
        success: true,
      }),
    );
  });
};
