import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import { messageMiddleware } from './messageMiddleware';
import { robotAnswerMiddleware } from './robotAnswerMiddleware';
import { locationChangeMiddleware } from './locationChangeMiddleware';
import { deleteChatMiddleware } from './deleteChatMiddleware';

export default [
    logger,
    apiMiddleware,
    messageMiddleware,
    robotAnswerMiddleware,
    locationChangeMiddleware,
    deleteChatMiddleware,
];
