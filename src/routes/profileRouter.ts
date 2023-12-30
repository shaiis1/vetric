import { Router } from 'express';
import { fetchProfile } from '../controllers/profileController.js';

export const profileRouter = Router();

profileRouter.get('/:profileId', fetchProfile);