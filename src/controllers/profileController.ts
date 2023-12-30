import { Request, Response, NextFunction } from 'express';
import { replicateGraphQLRequest } from '../services/replicateRequests.js'
import { isValidProfileId } from '../utils/validateProfileId.js';

export async function fetchProfile(req: Request, res: Response, next: NextFunction) {
    const { profileId } = req.params
    let responseContent
    try {
        console.log(`Start fetchProfile. profileId: ${profileId}`)
        if (!profileId || !isValidProfileId(profileId)) {
            responseContent = {status: 400, content: {error: 'Invalid Profile ID'}}
        }
        else{
            const response = await replicateGraphQLRequest(profileId);
            console.log(response)
            responseContent = { status: 200, content: response }
        }
        console.log(`Done fetchProfile. profileId: ${profileId}`)
        return res.status(responseContent.status).json(responseContent.content)
    } catch (error) {
        console.log(error)
        next(error); // Pass the error to the error-handling middleware
    }
}