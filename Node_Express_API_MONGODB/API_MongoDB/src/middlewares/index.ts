import express from 'express';
import { merge, get } from 'lodash';
// lodash is a modern JavaScript utility library delivering modularity, performance & extras.
// Lodash is a JavaScript library that works on the top of underscore.js.
// Lodash helps in working with arrays, strings, objects, numbers, etc.

import { getUserBySessionToken } from '../db/user';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies['FALAK-AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) {
      console.log('Current user ID not found');
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      console.log(
        `Current user ID does not match requested resource ID. Current: ${currentUserId}, Requested: ${id}`
      );
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
