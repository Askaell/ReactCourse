import logger from 'redux-logger';

import { messageMiddleware } from './messageMiddleware';
import { robotAnswerMiddleware } from './robotAnswerMiddleware';
import { locationChangeMiddleware } from './locationChangeMiddleware';

export default [logger, messageMiddleware, robotAnswerMiddleware, locationChangeMiddleware];
